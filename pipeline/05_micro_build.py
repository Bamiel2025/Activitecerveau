#!/usr/bin/env python3
"""
Étape 2 (Micro-échelle) : Construit les maillages anatomiques 3D haute fidélité
pour les 5 animations cellulaires et synaptiques à partir des SWC ouverts d'Allen Brain Atlas :
  1. Un morceau de cortex (10 neurones corticaux réels : pyramidal, panier Pvalb,
     chandelier Vipr2, Martinotti Sst, bipolaire Vip, axone longue distance)
  2. Un neurone (pyramidal humain couche 5 sculpté + soma + épines dendritiques + axone)
  3. Une synapse (contact nanométrique ~20 nm : bouton présynaptique + vésicules +
     mitochondrie + fente synaptique + épine dendritique + récepteurs membranaires)
  4. Un potentiel d'action (axone présynaptique + cellule pyramidale excitatrice bleue
     + trajectoires géométriques exactes pour l'impulsion électrique et la neurotransmission)
  5. Activité corticale (archétypes pyramidaux multi-couches + traces d'activité calcique)

Sortie : `pipeline/_build/micro/*.ply` + `.npz` (attributs comp/t_along) + `micro_manifest.json`
"""
import json
import math
import os
import random
import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE_DIR = os.path.join(ROOT, "pipeline", "_cache", "micro")
BUILD_DIR = os.path.join(ROOT, "pipeline", "_build", "micro")
os.makedirs(BUILD_DIR, exist_ok=True)


# ---------------------------------------------------------------------------
# Utilitaires vectoriels & lecture SWC
# ---------------------------------------------------------------------------

def norm_vec(v):
    n = np.linalg.norm(v)
    return v / n if n > 1e-9 else np.array([0.0, 1.0, 0.0], dtype=np.float64)


def rot_align_vec(v_from, v_to=np.array([0.0, 1.0, 0.0])):
    """Matrice de rotation 3x3 alignant v_from sur v_to (Rodrigues)."""
    a = norm_vec(np.asarray(v_from, dtype=np.float64))
    b = norm_vec(np.asarray(v_to, dtype=np.float64))
    c = float(np.clip(np.dot(a, b), -1.0, 1.0))
    if c > 0.99999:
        return np.eye(3)
    if c < -0.99999:
        ortho = np.array([1.0, 0.0, 0.0]) if abs(a[0]) < 0.8 else np.array([0.0, 0.0, 1.0])
        axis = norm_vec(np.cross(a, ortho))
        return 2.0 * np.outer(axis, axis) - np.eye(3)
    v = np.cross(a, b)
    s = np.linalg.norm(v)
    vx = np.array([[0, -v[2], v[1]], [v[2], 0, -v[0]], [-v[1], v[0], 0]], dtype=np.float64)
    return np.eye(3) + vx + vx @ vx * ((1.0 - c) / (s * s))


def parse_swc(filepath, volumetric_seed=17):
    nodes = {}
    children = {}
    roots = []
    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        for line in f:
            s = line.strip()
            if not s or s.startswith("#"):
                continue
            p = s.split()
            if len(p) < 7:
                continue
            nid = int(p[0])
            typ = int(p[1])
            pos = np.array([float(p[2]), float(p[3]), float(p[4])], dtype=np.float64)
            rad = max(0.12, float(p[5]))
            pid = int(p[6])
            nodes[nid] = {"id": nid, "type": typ, "pos": pos, "r": rad, "pid": pid}
            children.setdefault(nid, [])
            if pid < 0:
                roots.append(nid)
            else:
                children.setdefault(pid, []).append(nid)

    soma_id = roots[0] if roots else min(nodes.keys())
    soma_pos = nodes[soma_id]["pos"].copy()
    for n in nodes.values():
        n["pos"] = n["pos"] - soma_pos

    # Détection de l'orientation piale (apicale vers +Y)
    apicals = [n["pos"] for n in nodes.values() if n["type"] == 4]
    axons = [n["pos"] for n in nodes.values() if n["type"] == 2]
    basals = [n["pos"] for n in nodes.values() if n["type"] == 3]

    if len(apicals) > 25:
        v_up = np.mean(apicals, axis=0)
    else:
        # En histologie Allen, l'axe vertical vers la pie-mère est généralement -Y (superficiel)
        if len(axons) > 50 and "martinotti" in os.path.basename(filepath):
            v_up = np.mean(axons, axis=0)
        elif len(basals) > 50 and abs(np.mean([p[1] for p in basals])) > 10:
            v_up = np.array([0.0, -1.0, 0.0])
        else:
            v_up = np.array([0.0, -1.0, 0.0])

    R = rot_align_vec(v_up, np.array([0.0, 1.0, 0.0]))
    for n in nodes.values():
        n["pos"] = R @ n["pos"]

    # Normalisation par l'enveloppe dendritique (et non un axone isolé trop long sur coupe)
    all_pts = np.array([n["pos"] for n in nodes.values()])
    full_span = float(np.max(np.ptp(all_pts, axis=0)))
    dend_pts = np.array([n["pos"] for n in nodes.values() if n["type"] in (3, 4)])
    if len(apicals) > 25 and len(dend_pts) >= 40:
        dend_span = float(np.max(np.ptp(dend_pts[:, :2], axis=0)))
        ref_span = max(dend_span * 1.15, full_span * 0.68)
    else:
        ref_span = full_span
    scale = 1.0 / max(ref_span, 1e-3)

    for n in nodes.values():
        n["pos"] = n["pos"] * scale
        n["r"] = n["r"] * scale

    # Donner du volume 3D authentique en Z aux coupes histologiques plates (~60-150 µm)
    pts_norm = np.array([n["pos"] for n in nodes.values()])
    ptp = np.ptp(pts_norm, axis=0)
    ext_xy = max(float(ptp[0]), float(ptp[1]), 1e-3)
    ext_z = max(float(ptp[2]), 1e-4)
    target_z_ratio = 0.56 if len(apicals) <= 25 else 0.42
    z_boost = min(3.8, max(1.0, (target_z_ratio * ext_xy) / ext_z))

    for n in nodes.values():
        x, y, z = float(n["pos"][0]), float(n["pos"][1]), float(n["pos"][2])
        r_xy = math.hypot(x, y)
        ang = math.atan2(y, x)
        # Champ harmonique nul au soma (0,0,0) pour préserver les bifurcations sans cassure
        z_new = z * z_boost + 0.14 * r_xy * math.sin(2.0 * ang + 2.6 * x + 1.8 * y + volumetric_seed)
        n["pos"] = np.array([x, y, z_new], dtype=np.float64)

    return nodes, children, soma_id, scale


def extract_chains(nodes, children, root_id):
    """Décompose l'arbre SWC en chaînes non ramifiées (racine/bifurcation -> bifurcation/pointe)."""
    chains = []
    stack = []
    for ch in children.get(root_id, []):
        stack.append((root_id, ch))

    while stack:
        start_id, cur = stack.pop()
        chain = [nodes[start_id], nodes[cur]]
        while True:
            kids = children.get(cur, [])
            if len(kids) == 1:
                nxt = kids[0]
                chain.append(nodes[nxt])
                cur = nxt
            else:
                if len(kids) > 1:
                    for k in kids:
                        stack.append((cur, k))
                break
        chains.append(chain)
    return chains


def simplify_chain_dp(chain, tol):
    """Simplification Douglas-Peucker 3D en préservant extrémités, rayons et types."""
    if len(chain) <= 2:
        return chain
    pts = [c["pos"] for c in chain]

    def _dp(idx0, idx1, keep):
        if idx1 <= idx0 + 1:
            return
        a, b = pts[idx0], pts[idx1]
        ab = b - a
        ab_len2 = float(np.dot(ab, ab))
        max_d = -1.0
        best_i = -1
        for i in range(idx0 + 1, idx1):
            p = pts[i]
            if ab_len2 < 1e-12:
                d = float(np.linalg.norm(p - a))
            else:
                t = max(0.0, min(1.0, float(np.dot(p - a, ab) / ab_len2)))
                proj = a + t * ab
                d = float(np.linalg.norm(p - proj))
            if d > max_d:
                max_d = d
                best_i = i
        if max_d > tol and best_i >= 0:
            keep.add(best_i)
            _dp(idx0, best_i, keep)
            _dp(best_i, idx1, keep)

    keep = {0, len(chain) - 1}
    _dp(0, len(chain) - 1, keep)
    return [chain[i] for i in sorted(keep)]


def catmull_rom_chain(chain, subdiv=2):
    """Lissage léger Catmull-Rom sur une chaîne simplifiée."""
    if subdiv <= 1 or len(chain) < 3:
        return chain
    out = [chain[0]]
    pts = [c["pos"] for c in chain]
    rads = [c["r"] for c in chain]
    n = len(pts)
    for i in range(n - 1):
        p0 = pts[max(0, i - 1)]
        p1 = pts[i]
        p2 = pts[i + 1]
        p3 = pts[min(n - 1, i + 2)]
        r1, r2 = rads[i], rads[i + 1]
        for s in range(1, subdiv):
            t = s / subdiv
            t2 = t * t
            t3 = t2 * t
            pos = 0.5 * (
                (2.0 * p1)
                + (-p0 + p2) * t
                + (2.0 * p0 - 5.0 * p1 + 4.0 * p2 - p3) * t2
                + (-p0 + 3.0 * p1 - 3.0 * p2 + p3) * t3
            )
            out.append({
                "pos": pos,
                "r": r1 * (1.0 - t) + r2 * t,
                "type": chain[i + 1]["type"],
            })
        out.append(chain[i + 1])
    return out


# ---------------------------------------------------------------------------
# Constructeur de maillages (tubes à transport parallèle, soma, épines, synapse)
# ---------------------------------------------------------------------------

class MeshBuilder:
    def __init__(self):
        self.verts = []
        self.tris = []
        self.comp = []     # uint8: 1=soma, 2=axone, 3=basal, 4=apical, 5=épine, 6=récepteur, 7=vésicule, 8=mitochondrie
        self.t_along = []  # float 0..1: distance normalisée

    def add_sphere(self, center, rx, ry=None, rz=None, segs=12, rings=8, comp=1, t_val=0.0, taper_top=0.0):
        """Ajoute un ellipsoïde/pyramide organique lisse."""
        ry = rx if ry is None else ry
        rz = rx if rz is None else rz
        base_idx = len(self.verts)
        center = np.asarray(center, dtype=np.float64)

        for r_i in range(rings + 1):
            v = r_i / rings
            phi = v * math.pi
            y_n = math.cos(phi)
            ring_r = math.sin(phi)
            # Profil légèrement pyramidal (base élargie, apex étiré)
            pyram = 1.0 - taper_top * 0.35 * max(0.0, y_n) + taper_top * 0.20 * max(0.0, -y_n)
            for s_i in range(segs):
                th = (s_i / segs) * 2.0 * math.pi
                x = center[0] + math.cos(th) * ring_r * rx * pyram
                y = center[1] + y_n * ry
                z = center[2] + math.sin(th) * ring_r * rz * pyram
                self.verts.append((x, y, z))
                self.comp.append(comp)
                self.t_along.append(t_val)

        for r_i in range(rings):
            for s_i in range(segs):
                sn = (s_i + 1) % segs
                a = base_idx + r_i * segs + s_i
                b = base_idx + r_i * segs + sn
                c = base_idx + (r_i + 1) * segs + s_i
                d = base_idx + (r_i + 1) * segs + sn
                if r_i > 0:
                    self.tris.append((a, c, b))
                if r_i < rings - 1:
                    self.tris.append((b, c, d))

    def add_tube(self, pts, radii, comp_vals, t_vals, sides=5, cap_end=True):
        """Extrude un tube lisse par transport parallèle (sans torsion)."""
        n = len(pts)
        if n < 2:
            return
        # Éviter les points dupliqués consécutifs
        clean_p, clean_r, clean_c, clean_t = [pts[0]], [radii[0]], [comp_vals[0]], [t_vals[0]]
        for i in range(1, n):
            if np.linalg.norm(pts[i] - clean_p[-1]) > 1e-5:
                clean_p.append(pts[i])
                clean_r.append(radii[i])
                clean_c.append(comp_vals[i])
                clean_t.append(t_vals[i])
        n = len(clean_p)
        if n < 2:
            return

        tangents = []
        for i in range(n):
            if i == 0:
                t = clean_p[1] - clean_p[0]
            elif i == n - 1:
                t = clean_p[-1] - clean_p[-2]
            else:
                t = clean_p[i + 1] - clean_p[i - 1]
            tangents.append(norm_vec(t))

        t0 = tangents[0]
        ref = np.array([1.0, 0.0, 0.0]) if abs(t0[0]) < 0.85 else np.array([0.0, 0.0, 1.0])
        N = norm_vec(np.cross(t0, ref))
        B = norm_vec(np.cross(t0, N))

        ring_starts = []
        angles = [2.0 * math.pi * s / sides for s in range(sides)]

        for i in range(n):
            ti = tangents[i]
            if i > 0:
                # Transport parallèle de N sur ti
                N_proj = N - ti * float(np.dot(N, ti))
                if np.linalg.norm(N_proj) > 1e-6:
                    N = norm_vec(N_proj)
                B = norm_vec(np.cross(ti, N))
            r = clean_r[i]
            p = clean_p[i]
            base = len(self.verts)
            ring_starts.append(base)
            for ang in angles:
                off = (math.cos(ang) * N + math.sin(ang) * B) * r
                self.verts.append((p[0] + off[0], p[1] + off[1], p[2] + off[2]))
                self.comp.append(clean_c[i])
                self.t_along.append(clean_t[i])

        for i in range(n - 1):
            r0 = ring_starts[i]
            r1 = ring_starts[i + 1]
            for s in range(sides):
                sn = (s + 1) % sides
                self.tris.append((r0 + s, r1 + s, r0 + sn))
                self.tris.append((r0 + sn, r1 + s, r1 + sn))

        if cap_end:
            tip_idx = len(self.verts)
            end_p = clean_p[-1] + tangents[-1] * (clean_r[-1] * 0.9)
            self.verts.append((end_p[0], end_p[1], end_p[2]))
            self.comp.append(clean_c[-1])
            self.t_along.append(clean_t[-1])
            rlast = ring_starts[-1]
            for s in range(sides):
                sn = (s + 1) % sides
                self.tris.append((rlast + s, tip_idx, rlast + sn))

    def add_spine(self, anchor_p, normal_dir, scale=1.0):
        """Ajoute une épine dendritique en champignon (cou fin + tête bulbeuse)."""
        n = norm_vec(normal_dir)
        p0 = anchor_p
        p1 = anchor_p + n * (0.008 * scale)
        p2 = anchor_p + n * (0.015 * scale)
        self.add_tube(
            [p0, p1, p2],
            [0.0022 * scale, 0.0014 * scale, 0.0036 * scale],
            [5, 5, 5],
            [0.5, 0.5, 0.5],
            sides=5,
            cap_end=True,
        )

    def write_ply_and_attrs(self, ply_path, attrs_path):
        verts = np.asarray(self.verts, dtype=np.float32)
        tris = np.asarray(self.tris, dtype=np.int32)
        comp = np.asarray(self.comp, dtype=np.uint8)
        t_along = np.clip(np.asarray(self.t_along, dtype=np.float32), 0.0, 1.0)
        nv, nf = len(verts), len(tris)

        header = (
            "ply\n"
            "format binary_little_endian 1.0\n"
            f"element vertex {nv}\n"
            "property float x\n"
            "property float y\n"
            "property float z\n"
            f"element face {nf}\n"
            "property list uchar int vertex_indices\n"
            "end_header\n"
        ).encode("ascii")

        # Struct face structuré binaire pour écriture rapide
        face_dtype = np.dtype([("n", "u1"), ("v", "<i4", (3,))])
        faces = np.empty(nf, dtype=face_dtype)
        faces["n"] = 3
        faces["v"] = tris

        with open(ply_path, "wb") as f:
            f.write(header)
            f.write(verts.astype("<f4").tobytes())
            f.write(faces.tobytes())

        np.savez_compressed(attrs_path, comp=comp, t_along=t_along)
        return nv, nf


def build_neuron_from_swc(
    swc_path,
    tol=0.0055,
    subdiv=2,
    sides=5,
    r_mult=1.0,
    min_r=0.00065,
    max_r=0.0085,
    soma_rx=0.015,
    soma_ry=0.023,
    taper_top=0.85,
    add_spines=False,
    spine_count=260,
    spine_scale=0.44,
    seed=42,
    max_chains=540,
    min_ch_len=0.0018,
    axon_extend=False,
    axon_extend_y=-1.22,
):
    """Construit un MeshBuilder organique haute finesse à partir d'un SWC Allen Brain Atlas."""
    nodes, children, soma_id, _ = parse_swc(swc_path, volumetric_seed=seed)
    chains = extract_chains(nodes, children, soma_id)

    def chain_priority(ch):
        typ = ch[-1]["type"]
        length = sum(float(np.linalg.norm(ch[i + 1]["pos"] - ch[i]["pos"])) for i in range(len(ch) - 1))
        d0 = float(np.linalg.norm(ch[0]["pos"]))
        w = 2.6 if typ in (3, 4) else 1.25
        return (w * length) / (0.10 + d0)

    chains.sort(key=chain_priority, reverse=True)
    if len(chains) > max_chains:
        chains = chains[:max_chains]

    # Distances géodésiques par nœud depuis le soma pour l'effilement physiologique
    dist_from_soma = {soma_id: 0.0}
    queue = [soma_id]
    while queue:
        u = queue.pop(0)
        for v in children.get(u, []):
            seg = float(np.linalg.norm(nodes[v]["pos"] - nodes[u]["pos"]))
            dist_from_soma[v] = dist_from_soma[u] + seg
            queue.append(v)
    max_dend_d = max((dist_from_soma.get(nid, 0.0) for nid, nd in nodes.items() if nd["type"] in (3, 4)), default=1.0)
    max_axon_d = max((dist_from_soma.get(nid, 0.0) for nid, nd in nodes.items() if nd["type"] == 2), default=1.0)

    mb = MeshBuilder()
    # Soma pyramidal compact sculpté en goutte
    mb.add_sphere(
        (0.0, 0.0, 0.0),
        soma_rx,
        soma_ry,
        soma_rx,
        segs=20,
        rings=14,
        comp=1,
        t_val=0.0,
        taper_top=taper_top,
    )

    rng = random.Random(seed)
    spine_anchors = []

    for ch in chains:
        ch_len = sum(float(np.linalg.norm(ch[i + 1]["pos"] - ch[i]["pos"])) for i in range(len(ch) - 1))
        if ch_len < min_ch_len:
            continue
        simp = simplify_chain_dp(ch, tol)
        smooth = catmull_rom_chain(simp, subdiv=subdiv)
        pts = [c["pos"] for c in smooth]
        typ = ch[-1]["type"]

        radii = []
        comp_vals = []
        t_vals = []
        d_start = float(np.linalg.norm(pts[0]))
        cum_d = d_start
        denom = max(1e-3, max_axon_d if typ == 2 else max_dend_d)

        for idx, c in enumerate(smooth):
            if idx > 0:
                cum_d += float(np.linalg.norm(c["pos"] - smooth[idx - 1]["pos"]))
            t_geod = min(1.0, cum_d / denom)
            taper = 1.0 - 0.72 * (t_geod ** 0.85)
            soma_flare = 1.0 + 1.05 * (max(0.0, 1.0 - cum_d / 0.065) ** 2)
            raw_r = c["r"] * r_mult

            if typ == 2:
                varic = 1.0 + (0.16 * (max(0.0, math.sin(cum_d * 92.0)) ** 6) if cum_d > 0.14 else 0.0)
                raw_r = max(min_r * 0.72, min(max_r * 0.46, raw_r * 1.15 * taper * varic))
            elif typ == 4:
                raw_r = max(min_r * 0.90, min(max_r * 1.08, raw_r * 1.45 * taper * soma_flare))
            else:
                raw_r = max(min_r * 0.80, min(max_r * 0.82, raw_r * 1.25 * taper * soma_flare))

            radii.append(raw_r)
            comp_vals.append(typ if typ in (2, 3, 4) else 3)
            t_vals.append(t_geod)

        if len(radii) >= 2:
            radii[-1] = max(min_r * 0.45, radii[-1] * 0.55)

        s_use = sides if typ != 2 else max(4, sides - 1)
        mb.add_tube(pts, radii, comp_vals, t_vals, sides=s_use, cap_end=True)

        if add_spines and typ in (3, 4) and len(pts) >= 3:
            for j in range(1, len(pts) - 1, 2):
                if rng.random() < 0.42:
                    tvec = norm_vec(pts[j + 1] - pts[j - 1])
                    randv = norm_vec(np.array([rng.uniform(-1, 1), rng.uniform(-1, 1), rng.uniform(-1, 1)]))
                    perp = norm_vec(np.cross(tvec, randv))
                    spine_anchors.append((pts[j] + perp * (radii[j] * 0.65), perp))

    # Optionnel : garantir un axone descendant vers les couches profondes si l'axone SWC fut sectionné à la coupe
    if axon_extend:
        min_ax_y = min((float(nd["pos"][1]) for nd in nodes.values() if nd["type"] == 2), default=0.0)
        if min_ax_y > axon_extend_y * 0.65:
            ax_ctrl = [
                np.array([0.0, -soma_ry * 0.72, 0.0]),
                np.array([rng.uniform(-0.03, 0.03), axon_extend_y * 0.25, rng.uniform(-0.03, 0.03)]),
                np.array([rng.uniform(-0.06, 0.06), axon_extend_y * 0.55, rng.uniform(-0.06, 0.06)]),
                np.array([rng.uniform(-0.08, 0.08), axon_extend_y * 0.82, rng.uniform(-0.08, 0.08)]),
                np.array([rng.uniform(-0.10, 0.10), axon_extend_y, rng.uniform(-0.10, 0.10)]),
            ]
            ax_sm = catmull_rom_chain([{"pos": p, "r": 0.002, "type": 2} for p in ax_ctrl], subdiv=subdiv + 1)
            ax_pts = [c["pos"] for c in ax_sm]
            na = len(ax_pts)
            r_ax0 = min(max_r * 0.48, max(min_r * 2.2, 0.0028 * r_mult))
            mb.add_tube(
                ax_pts,
                [max(min_r * 0.65, r_ax0 * (1.0 - 0.58 * (i / max(1, na - 1)))) for i in range(na)],
                [2] * na,
                [i / max(1, na - 1) for i in range(na)],
                sides=max(4, sides - 1),
                cap_end=True,
            )
            # 2 fines collatérales horizontales/obliques sur le trajet descendant
            for frac in (0.32, 0.64):
                k_idx = min(na - 2, max(1, int(frac * na)))
                p0 = ax_pts[k_idx]
                c_pts = [
                    p0,
                    p0 + np.array([rng.uniform(-0.10, 0.10), -0.05, rng.uniform(-0.10, 0.10)]),
                    p0 + np.array([rng.uniform(-0.22, 0.22), -0.11, rng.uniform(-0.22, 0.22)]),
                ]
                c_sm = catmull_rom_chain([{"pos": p, "r": 0.001, "type": 2} for p in c_pts], subdiv=subdiv)
                nc = len(c_sm)
                mb.add_tube(
                    [c["pos"] for c in c_sm],
                    [max(min_r * 0.5, r_ax0 * 0.52 * (1.0 - 0.65 * (j / max(1, nc - 1)))) for j in range(nc)],
                    [2] * nc,
                    [min(1.0, frac + 0.35 * (j / max(1, nc - 1))) for j in range(nc)],
                    sides=4,
                    cap_end=True,
                )

    if add_spines and spine_anchors:
        rng.shuffle(spine_anchors)
        for anchor_p, perp in spine_anchors[:spine_count]:
            mb.add_spine(anchor_p, perp, scale=spine_scale * r_mult)

    return mb, chains, nodes


def build_long_range_axon():
    """Construit un axone longue distance cortical fin et élégamment ramifié (14 collatérales)."""
    mb = MeshBuilder()
    rng = random.Random(101)
    ctrl = [
        np.array([-0.82, -0.70, 0.42]),
        np.array([-0.50, -0.40, 0.24]),
        np.array([-0.18, -0.08, 0.08]),
        np.array([0.12, 0.24, -0.08]),
        np.array([0.42, 0.52, -0.22]),
        np.array([0.74, 0.78, -0.34]),
    ]
    smooth = catmull_rom_chain([{"pos": p, "r": 0.0028, "type": 2} for p in ctrl], subdiv=4)
    pts = [c["pos"] for c in smooth]
    n = len(pts)
    mb.add_tube(
        pts,
        [0.0032 * (1.0 - 0.42 * (i / (n - 1))) for i in range(n)],
        [2] * n,
        [i / (n - 1) for i in range(n)],
        sides=5,
    )
    # 14 collatérales synaptiques aériennes avec sous-branchements
    for k in range(2, n - 1, max(1, (n - 3) // 13)):
        p0 = pts[k]
        branch = [p0]
        dir_v = norm_vec(np.array([rng.uniform(-0.85, 0.85), rng.uniform(-0.25, 0.85), rng.uniform(-0.85, 0.85)]))
        cur = p0.copy()
        for step in range(5):
            dir_v = norm_vec(dir_v + np.array([rng.uniform(-0.35, 0.35), rng.uniform(-0.25, 0.35), rng.uniform(-0.35, 0.35)]))
            cur = cur + dir_v * 0.082
            branch.append(cur.copy())
        bsm = catmull_rom_chain([{"pos": p, "r": 0.0014, "type": 2} for p in branch], subdiv=2)
        bpts = [c["pos"] for c in bsm]
        m = len(bpts)
        mb.add_tube(
            bpts,
            [max(0.00055, 0.0019 * (1.0 - 0.65 * (i / max(1, m - 1)))) for i in range(m)],
            [2] * m,
            [i / max(1, m - 1) for i in range(m)],
            sides=4,
        )
        # Sous-branche distale
        if m >= 5:
            p_sub = bpts[m // 2]
            sdir = norm_vec(dir_v + np.array([rng.uniform(-0.7, 0.7), rng.uniform(-0.4, 0.6), rng.uniform(-0.7, 0.7)]))
            sub = [p_sub, p_sub + sdir * 0.07, p_sub + sdir * 0.14 + np.array([0.0, rng.uniform(-0.04, 0.06), 0.0])]
            mb.add_tube(sub, [0.0011, 0.0008, 0.0005], [2, 2, 2], [0.4, 0.7, 1.0], sides=4)
    return mb


def build_synapse_and_ap_assets(hero_swc, pre_swc):
    """
    Construit le duo haute fidélité pour Étape 3 (Une synapse) & Étape 4 (Potentiel d'action) :
      - `synapse_post` : Neurone pyramidal excitateur bleu (soma en (-0.02, -0.54, 0),
        tige apicale verticale passant par (-0.011, 0, 0) et long axone descendant vers -Y).
      - `synapse_pre` : Véritable arborisation axonale dorée richement ramifiée arrivant de la droite
        jusqu'à une varicosité présynaptique naturelle au contact exact du neurone postsynaptique.
      - `synapse_detail` : Ultrastructure nanométrique (~20 nm) centrée à (0.02, 0.007, 0)
        (affichée uniquement lors du zoom ~20 nm / Curare / Nicotine).
      - `paths` : trajectoires géométriques exactes pour les particules de potentiel d'action.
    """
    raw_nodes, _, _, _ = parse_swc(hero_swc, volumetric_seed=77)
    best_pt = None
    best_score = -1e9
    for nd in raw_nodes.values():
        if nd["type"] != 4:
            continue
        p = nd["pos"]
        if 0.22 < p[1] < 0.62:
            sc = p[1] - 1.5 * math.hypot(p[0], p[2])
            if sc > best_score:
                best_score = sc
                best_pt = p.copy()
    if best_pt is None:
        best_pt = np.array([0.0, 0.42, 0.0])

    dist_y = max(0.25, float(best_pt[1]))
    scale_post = 0.54 / dist_y
    inv_s = 1.0 / scale_post

    # Construire le neurone postsynaptique avec compensation d'échelle pour des branches fines & élégantes
    mb_post, _, _ = build_neuron_from_swc(
        hero_swc,
        tol=0.0052,
        subdiv=2,
        sides=5,
        r_mult=inv_s,
        min_r=0.00068 * inv_s,
        max_r=0.0070 * inv_s,
        soma_rx=0.0155 * inv_s,
        soma_ry=0.0235 * inv_s,
        add_spines=True,
        spine_count=240,
        spine_scale=0.38,
        seed=77,
        max_chains=460,
        min_ch_len=0.0018,
    )

    shift_post = -best_pt * scale_post + np.array([-0.011, 0.0, 0.0])
    verts_arr = np.asarray(mb_post.verts, dtype=np.float64) * scale_post + shift_post
    mb_post.verts = [tuple(v) for v in verts_arr]
    soma_center = shift_post.copy()

    # Long axone principal descendant sous le soma + 3 fines collatérales (signature Stage 7 & 8)
    axon_start = soma_center + np.array([0.0, -0.022, 0.0])
    axon_ctrl = [
        axon_start,
        soma_center + np.array([-0.016, -0.18, 0.01]),
        soma_center + np.array([0.018, -0.36, -0.016]),
        soma_center + np.array([0.032, -0.56, 0.012]),
        soma_center + np.array([0.048, -0.80, 0.02]),
    ]
    axon_sm = catmull_rom_chain([{"pos": p, "r": 0.003, "type": 2} for p in axon_ctrl], subdiv=4)
    axon_pts = [c["pos"] for c in axon_sm]
    na = len(axon_pts)
    mb_post.add_tube(
        axon_pts,
        [max(0.0011, 0.0034 * (1.0 - 0.52 * i / max(1, na - 1))) for i in range(na)],
        [2] * na,
        [i / max(1, na - 1) for i in range(na)],
        sides=5,
    )
    rng_ap = random.Random(314)
    for frac in (0.30, 0.55, 0.78):
        idx_c = min(na - 2, max(1, int(frac * na)))
        p0 = axon_pts[idx_c]
        c_dir = norm_vec(np.array([rng_ap.uniform(-0.8, 0.9), rng_ap.uniform(-0.4, 0.2), rng_ap.uniform(-0.8, 0.8)]))
        c_pts = [p0, p0 + c_dir * 0.09, p0 + c_dir * 0.20 + np.array([0.0, -0.05, 0.0])]
        c_sm = catmull_rom_chain([{"pos": p, "r": 0.0012, "type": 2} for p in c_pts], subdiv=2)
        nc = len(c_sm)
        mb_post.add_tube(
            [c["pos"] for c in c_sm],
            [0.0015 * (1.0 - 0.65 * j / max(1, nc - 1)) for j in range(nc)],
            [2] * nc,
            [min(1.0, frac + 0.3 * j / max(1, nc - 1)) for j in range(nc)],
            sides=4,
        )

    # Géométrie ~20 nm centrée juste à droite de la tige apicale (-0.011, 0, 0)
    mb_detail = MeshBuilder()
    spine_base = np.array([-0.011, -0.002, 0.0])
    spine_neck = np.array([-0.002, 0.001, 0.0])
    spine_head = np.array([0.005, 0.003, 0.0])
    mb_detail.add_tube(
        [spine_base, spine_neck, spine_head],
        [0.0028, 0.0018, 0.0068],
        [5, 5, 5],
        [0.1, 0.5, 0.9],
        sides=10,
        cap_end=False,
    )
    mb_detail.add_sphere(spine_head, 0.0082, 0.0076, 0.0082, segs=18, rings=12, comp=5, t_val=0.95)

    # 6 récepteurs ionotropes sculptés sur la densité postsynaptique face à la fente ~20 nm
    cleft_dir = norm_vec(np.array([1.0, 0.26, 0.06]))
    cleft_ortho1 = norm_vec(np.cross(cleft_dir, np.array([0.0, 0.0, 1.0])))
    cleft_ortho2 = norm_vec(np.cross(cleft_dir, cleft_ortho1))
    receptor_positions = []
    for k in range(6):
        if k == 0:
            off = np.zeros(3)
        else:
            ang = 2.0 * math.pi * (k - 1) / 5.0
            off = (math.cos(ang) * cleft_ortho1 + math.sin(ang) * cleft_ortho2) * 0.0044
        r_base = spine_head + cleft_dir * 0.0068 + off
        r_tip = r_base + cleft_dir * 0.0038
        mb_detail.add_tube(
            [r_base, r_tip],
            [0.0016, 0.0019],
            [6, 6],
            [1.0, 1.0],
            sides=8,
            cap_end=True,
        )
        receptor_positions.append([round(float(x), 5) for x in r_tip])

    # Fente synaptique ~20 nm nette entre r_tip (+0.0106) et face du bouton (+0.0185)
    bouton_center = spine_head + cleft_dir * 0.031

    # Axone présynaptique doré : VÉRITABLE arborisation axonale ramifiée (chandelier_2) + fibre active
    mb_pre = MeshBuilder()
    pre_nodes, pre_children, pre_soma, _ = parse_swc(pre_swc, volumetric_seed=303)
    pre_chains = extract_chains(pre_nodes, pre_children, pre_soma)
    axon_chains = [ch for ch in pre_chains if ch[-1]["type"] == 2]
    axon_chains.sort(
        key=lambda ch: sum(float(np.linalg.norm(ch[i + 1]["pos"] - ch[i]["pos"])) for i in range(len(ch) - 1)),
        reverse=True,
    )
    arbor_offset = np.array([0.44, 0.14, 0.02])
    arbor_scale = 0.85
    # Rotateur doux pour incliner le bouquet axonal vers la gauche-bas (rencontre en (0,0,0))
    R_pre = rot_align_vec(np.array([0.2, 1.0, 0.0]), np.array([-0.15, 0.98, 0.08]))
    for ch in axon_chains[:240]:
        ch_len = sum(float(np.linalg.norm(ch[i + 1]["pos"] - ch[i]["pos"])) for i in range(len(ch) - 1))
        if ch_len < 0.003:
            continue
        simp = simplify_chain_dp(ch, 0.0065)
        sm = catmull_rom_chain(simp, subdiv=2)
        tpts = [R_pre @ (c["pos"] * arbor_scale) + arbor_offset for c in sm]
        # Éviter qu'une brindille traverse l'intérieur du gros plan ~20 nm autour de la fente
        if any(float(np.linalg.norm(p - (spine_head + bouton_center) * 0.5)) < 0.085 for p in tpts):
            continue
        m = len(tpts)
        rads = [max(0.00055, min(0.0023, c["r"] * 0.95 * (1.0 - 0.55 * (i / max(1, m - 1))))) for i, c in enumerate(sm)]
        mb_pre.add_tube(tpts, rads, [2] * m, [min(1.0, i / max(1, m - 1)) for i in range(m)], sides=4, cap_end=True)

    # Fibre axonale conductrice principale entrant de la droite jusqu'à la paroi arrière du bouton
    pre_ctrl = [
        np.array([0.92, 0.24, 0.06]),
        np.array([0.68, 0.10, -0.04]),
        np.array([0.46, 0.01, 0.08]),
        np.array([0.26, 0.08, -0.02]),
        np.array([0.12, 0.035, 0.025]),
        bouton_center + cleft_dir * 0.032,
        bouton_center + cleft_dir * 0.0112,
    ]
    pre_sm = catmull_rom_chain([{"pos": p, "r": 0.003, "type": 2} for p in pre_ctrl], subdiv=4)
    pre_pts = [c["pos"] for c in pre_sm]
    np_pts = len(pre_pts)
    pre_rads = [max(0.0019, 0.0032 * (1.0 - 0.35 * (i / max(1, np_pts - 1)))) for i in range(np_pts)]
    pre_rads[-2] = 0.0023
    pre_rads[-1] = 0.0029
    mb_pre.add_tube(
        pre_pts,
        pre_rads,
        [2] * np_pts,
        [i / max(1, np_pts - 1) for i in range(np_pts)],
        sides=6,
        cap_end=True,
    )
    # 5 collatérales fines greffées le long de l'axone (loin du gros plan ~20 nm)
    for frac in (0.14, 0.28, 0.42, 0.56, 0.70):
        idx_k = min(np_pts - 3, max(1, int(frac * np_pts)))
        p0 = pre_pts[idx_k]
        b_pts = [p0]
        b_dir = norm_vec(np.array([rng_ap.uniform(-0.8, 0.4), rng_ap.uniform(-0.7, 0.9), rng_ap.uniform(-0.8, 0.8)]))
        cur = p0.copy()
        for _ in range(4):
            b_dir = norm_vec(b_dir + np.array([rng_ap.uniform(-0.4, 0.4), rng_ap.uniform(-0.3, 0.4), rng_ap.uniform(-0.4, 0.4)]))
            cur = cur + b_dir * rng_ap.uniform(0.055, 0.09)
            b_pts.append(cur.copy())
        bsm = catmull_rom_chain([{"pos": p, "r": 0.0012, "type": 2} for p in b_pts], subdiv=2)
        nb = len(bsm)
        mb_pre.add_tube(
            [c["pos"] for c in bsm],
            [max(0.00055, 0.0017 * (1.0 - 0.65 * j / max(1, nb - 1))) for j in range(nb)],
            [2] * nb,
            [j / max(1, nb - 1) for j in range(nb)],
            sides=4,
            cap_end=True,
        )

    # Bouton présynaptique bulbeux, 8 vésicules synaptiques et mitochondrie interne (~20 nm detail)
    mb_detail.add_sphere(bouton_center, 0.0122, 0.0102, 0.0102, segs=20, rings=14, comp=2, t_val=0.05)
    ves_offsets = [
        (-0.0046, -0.0014, 0.0),
        (-0.0040, 0.0026, 0.0026),
        (-0.0040, -0.0032, -0.0026),
        (-0.0020, 0.0008, -0.0038),
        (-0.0014, 0.0034, 0.0008),
        (-0.0008, -0.0026, 0.0032),
        (0.0020, 0.0014, -0.0020),
        (0.0026, -0.0020, 0.0020),
    ]
    for vo in ves_offsets:
        vp = bouton_center + cleft_dir * vo[0] + cleft_ortho1 * vo[1] + cleft_ortho2 * vo[2]
        mb_detail.add_sphere(vp, 0.00175, 0.00175, 0.00175, segs=10, rings=8, comp=7, t_val=0.0)

    mito_p = bouton_center + cleft_dir * 0.0055 + cleft_ortho1 * 0.0020
    mb_detail.add_sphere(mito_p, 0.0045, 0.0022, 0.0022, segs=12, rings=8, comp=8, t_val=0.0)

    # Trajectoire postsynaptique de la synapse -> soma
    apical_path = [
        spine_head,
        np.array([-0.011, 0.0, 0.0]),
        soma_center * 0.25 + np.array([-0.012, -0.10, 0.005]),
        soma_center * 0.55 + np.array([-0.006, -0.08, 0.0]),
        soma_center * 0.85,
        soma_center,
    ]
    apical_sm = catmull_rom_chain([{"pos": p, "r": 0.003, "type": 4} for p in apical_path], subdiv=4)

    paths = {
        "synapse_center": [round(float(x), 5) for x in ((spine_head + bouton_center) * 0.5)],
        "spine_head": [round(float(x), 5) for x in spine_head],
        "bouton_center": [round(float(x), 5) for x in bouton_center],
        "cleft_dir": [round(float(x), 5) for x in cleft_dir],
        "receptors": receptor_positions,
        "pre_axon": [[round(float(x), 4) for x in p] for p in pre_pts[::2]] + [[round(float(x), 4) for x in bouton_center]],
        "post_apical": [[round(float(x), 4) for x in c["pos"]] for c in apical_sm],
        "post_axon": [[round(float(x), 4) for x in p] for p in axon_pts],
    }

    return mb_post, mb_pre, mb_detail, paths


def build_cortical_swarm(pyr_swcs):
    """
    Construit 8 archétypes pyramidaux verticaux à panaches apicaux denses et axones descendants +
    colonne corticale compacte de 76 neurones actifs avec traces d'activité calcique réalistes.
    """
    archetypes = []
    for idx, swc in enumerate(pyr_swcs):
        mb, _, _ = build_neuron_from_swc(
            swc,
            tol=0.0085,
            subdiv=1,
            sides=4,
            r_mult=1.0,
            min_r=0.00075,
            max_r=0.0068,
            soma_rx=0.014,
            soma_ry=0.021,
            add_spines=False,
            seed=200 + idx,
            max_chains=220,
            min_ch_len=0.0025,
            axon_extend=True,
            axon_extend_y=-1.22,
        )
        archetypes.append((f"swarm_arch_{idx}", mb))

    rng = random.Random(2027)
    n_cells = 76
    instances = []
    # Bande corticale laminaire compacte (X in [-1.75, 1.75], Z in [-1.25, 1.25], somas groupés)
    for i in range(n_cells):
        arch_idx = i % len(archetypes)
        gx = (i % 10) / 9.0 - 0.5
        gz = ((i // 10) % 8) / 7.0 - 0.5
        x = gx * 3.25 + rng.uniform(-0.18, 0.18)
        z = gz * 2.25 + rng.uniform(-0.16, 0.16)
        y = rng.uniform(-0.14, 0.24)
        rot_y = rng.uniform(0, 2.0 * math.pi)
        sc = rng.uniform(0.88, 1.18)
        hue = round(((i * 137.508) % 360.0), 1)
        instances.append({
            "id": i,
            "arch": arch_idx,
            "pos": [round(x, 3), round(y, 3), round(z, 3)],
            "rotY": round(rot_y, 3),
            "scale": round(sc, 3),
            "hue": hue,
        })

    frames = 180
    fps = 15.0
    traces = np.zeros((frames, n_cells), dtype=np.float32)

    cell_events = []
    for i, inst in enumerate(instances):
        px, _, pz = inst["pos"]
        evs = []
        t_w1 = 1.2 + (px + 1.8) * 1.15 + rng.uniform(-0.22, 0.22)
        evs.append((t_w1 % 12.0, rng.uniform(0.75, 1.0)))
        if (i % 3) != 1:
            t_w2 = 6.5 + (pz + 1.3) * 1.30 - px * 0.35 + rng.uniform(-0.25, 0.25)
            evs.append((t_w2 % 12.0, rng.uniform(0.65, 0.95)))
        for _ in range(rng.randint(1, 3)):
            evs.append((rng.uniform(0.0, 12.0), rng.uniform(0.45, 0.85)))
        cell_events.append(evs)

    for fr in range(frames):
        t = fr / fps
        for i, evs in enumerate(cell_events):
            val = 0.06
            for t0, amp in evs:
                dt = (t - t0) % 12.0
                if dt < 1.35:
                    rise = 1.0 - math.exp(-dt / 0.055)
                    decay = math.exp(-dt / 0.38)
                    val += amp * rise * decay * 1.35
            traces[fr, i] = min(1.0, val)

    swarm_meta = {
        "n_cells": n_cells,
        "frames": frames,
        "fps": fps,
        "seconds": round(frames / fps, 2),
        "instances": instances,
        "traces_u8": [int(round(x * 255)) for x in traces.flatten()],
    }
    return archetypes, swarm_meta


def main():
    with open(os.path.join(CACHE_DIR, "allen_manifest.json"), "r", encoding="utf-8") as f:
        allen = json.load(f)

    def find_swc(prefix):
        for m in allen:
            if m["local_file"].startswith(prefix):
                return os.path.join(CACHE_DIR, m["local_file"]), m
        raise FileNotFoundError(prefix)

    # 1. Cluster cortical (10 cellules — même disposition VE et palettes ME/XE que whatisabrain.com)
    cluster_specs = [
        ("cluster_pyramidal_1", "pyramidal_human_3", "#23baff", "Neurone pyramidal L5 (Excitateur)", "excitatory", [0.0, -0.45, 0.0], 1.22),
        ("cluster_pyramidal_2", "pyramidal_l23_2", "#5b7cff", "Neurone pyramidal L2/3 (Excitateur)", "excitatory", [0.54, -0.45, -0.48], 0.98),
        ("cluster_pyramidal_3", "pyramidal_human_1", "#7d9bff", "Neurone pyramidal (Excitateur)", "excitatory", [-0.45, 0.45, -0.35], 0.95),
        ("cluster_basket_1", "basket_pvalb_1", "#b56fd8", "Cellule en panier Pvalb (Inhibiteur)", "inhibitory", [0.45, 0.15, -0.45], 1.04),
        ("cluster_basket_2", "basket_pvalb_2", "#c888ea", "Cellule en panier Pvalb (Inhibiteur)", "inhibitory", [-0.55, -0.44, -0.45], 0.96),
        ("cluster_chandelier_1", "chandelier_2", "#ffd24a", "Cellule chandelier (Inhibiteur)", "inhibitory", [-0.52, 0.25, 0.30], 1.08),
        ("cluster_martinotti_1", "martinotti_sst_1", "#3ee0bc", "Cellule de Martinotti Sst (Inhibiteur)", "inhibitory", [0.62, 0.05, 0.38], 1.04),
        ("cluster_martinotti_2", "martinotti_sst_2", "#2cc4a3", "Cellule de Martinotti Sst (Inhibiteur)", "inhibitory", [-0.52, 0.05, 0.52], 0.92),
        ("cluster_bipolar_1", "bipolar_vip_2", "#ffae3e", "Interneurone bipolaire Vip (Inhibiteur)", "inhibitory", [0.22, 0.52, 0.34], 0.95),
    ]

    manifest_parts = []
    for idx_c, (key, swc_pref, color, label, role, pos, scale) in enumerate(cluster_specs):
        swc_p, meta = find_swc(swc_pref)
        print(f"Construction {key} depuis {meta['local_file']}...")
        mb, _, _ = build_neuron_from_swc(
            swc_p,
            tol=0.0052,
            subdiv=2,
            sides=5,
            r_mult=1.0,
            min_r=0.00062,
            max_r=0.0078,
            soma_rx=0.0145,
            soma_ry=0.022,
            add_spines=False,
            seed=42 + idx_c * 13,
            max_chains=560,
            min_ch_len=0.0018,
            axon_extend=(key == "cluster_pyramidal_1"),
            axon_extend_y=-1.15,
        )
        ply_p = os.path.join(BUILD_DIR, f"{key}.ply")
        attr_p = os.path.join(BUILD_DIR, f"{key}_attrs.npz")
        nv, nf = mb.write_ply_and_attrs(ply_p, attr_p)
        manifest_parts.append({
            "key": key,
            "group": "cluster",
            "color": color,
            "label": label,
            "role": role,
            "pos": pos,
            "scale": scale,
            "source_specimen": meta["specimen_name"],
            "nv": nv,
            "nf": nf,
        })

    # +1 Axone longue distance dans le cluster
    print("Construction cluster_long_axon...")
    mb_la = build_long_range_axon()
    ply_p = os.path.join(BUILD_DIR, "cluster_long_axon.ply")
    attr_p = os.path.join(BUILD_DIR, "cluster_long_axon_attrs.npz")
    nv, nf = mb_la.write_ply_and_attrs(ply_p, attr_p)
    manifest_parts.append({
        "key": "cluster_long_axon",
        "group": "cluster",
        "color": "#4a8bff",
        "label": "Axone longue distance (Projection)",
        "role": "projection",
        "pos": [0.38, -0.48, 0.45],
        "scale": 1.0,
        "source_specimen": "Projection corticale stylisée (Allen VISp)",
        "nv": nv,
        "nf": nf,
    })

    # 2. Neurone Héros haute définition (Stage 2 : Un neurone)
    hero_swc, hero_meta = find_swc("pyramidal_human_3")
    chand_swc, _ = find_swc("chandelier_2")
    print(f"Construction hero_pyramidal depuis {hero_meta['local_file']} (haute précision + micro-épines)...")
    mb_hero, _, _ = build_neuron_from_swc(
        hero_swc,
        tol=0.0045,
        subdiv=2,
        sides=5,
        r_mult=1.0,
        min_r=0.00058,
        max_r=0.0080,
        soma_rx=0.015,
        soma_ry=0.023,
        add_spines=True,
        spine_count=300,
        spine_scale=0.40,
        seed=99,
        max_chains=600,
        min_ch_len=0.0016,
        axon_extend=True,
        axon_extend_y=-1.20,
    )
    ply_p = os.path.join(BUILD_DIR, "hero_pyramidal.ply")
    attr_p = os.path.join(BUILD_DIR, "hero_pyramidal_attrs.npz")
    nv, nf = mb_hero.write_ply_and_attrs(ply_p, attr_p)
    manifest_parts.append({
        "key": "hero_pyramidal",
        "group": "hero",
        "color": "#23baff",
        "label": "Neurone pyramidal humain (Couche 5)",
        "role": "excitatory",
        "pos": [0.0, -0.42, 0.0],
        "scale": 1.25,
        "source_specimen": hero_meta["specimen_name"],
        "nv": nv,
        "nf": nf,
    })

    # 3. Paire Synapse & Potentiel d'action (Stages 3 & 4)
    print("Construction du complexe synaptique nanométrique & arborisation axonale PA...")
    mb_post, mb_pre, mb_det, syn_paths = build_synapse_and_ap_assets(hero_swc, chand_swc)
    for k, mb, col, lbl in [
        ("synapse_post", mb_post, "#4a8bff", "Neurone pyramidal postsynaptique"),
        ("synapse_pre", mb_pre, "#ffd24a", "Arborisation axonale présynaptique"),
        ("synapse_detail", mb_det, "#ffd24a", "Jonction synaptique (~20 nm)"),
    ]:
        ply_p = os.path.join(BUILD_DIR, f"{k}.ply")
        attr_p = os.path.join(BUILD_DIR, f"{k}_attrs.npz")
        nv, nf = mb.write_ply_and_attrs(ply_p, attr_p)
        manifest_parts.append({
            "key": k,
            "group": "synapse",
            "color": col,
            "label": lbl,
            "role": "synapse",
            "pos": [0.0, 0.0, 0.0],
            "scale": 1.0,
            "source_specimen": hero_meta["specimen_name"],
            "nv": nv,
            "nf": nf,
        })

    # 4. Archétypes de l'essaim calcique cortical (Stage 5 : Activité)
    pyr_prefixes = [
        "pyramidal_human_1", "pyramidal_human_2", "pyramidal_human_3", "pyramidal_human_4",
        "pyramidal_l23_1", "pyramidal_l23_2", "pyramidal_l23_3", "pyramidal_l5_2",
    ]
    pyr_swcs = [find_swc(p)[0] for p in pyr_prefixes]
    print("Construction des 8 archétypes de l'essaim calcique (76 cellules)...")
    archetypes, swarm_meta = build_cortical_swarm(pyr_swcs)
    for k, mb in archetypes:
        ply_p = os.path.join(BUILD_DIR, f"{k}.ply")
        attr_p = os.path.join(BUILD_DIR, f"{k}_attrs.npz")
        nv, nf = mb.write_ply_and_attrs(ply_p, attr_p)
        manifest_parts.append({
            "key": k,
            "group": "swarm",
            "color": "#a855f7",
            "label": "Neurone pyramidal cortical",
            "role": "excitatory",
            "pos": [0.0, 0.0, 0.0],
            "scale": 1.0,
            "source_specimen": "Allen Cell Types VISp / Human MTG",
            "nv": nv,
            "nf": nf,
        })

    manifest = {
        "parts": manifest_parts,
        "synapse_paths": syn_paths,
        "swarm": swarm_meta,
    }
    man_path = os.path.join(BUILD_DIR, "micro_manifest.json")
    with open(man_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False)

    tot_v = sum(p["nv"] for p in manifest_parts)
    tot_f = sum(p["nf"] for p in manifest_parts)
    print(f"\nTerminé : {len(manifest_parts)} maillages | {tot_v} sommets | {tot_f} triangles")


if __name__ == "__main__":
    main()
