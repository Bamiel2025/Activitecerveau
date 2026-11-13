"""Étape 3 — empaquette maillages + IRM pour le navigateur (docs/data/*.js).

Les données sont compressées (gzip) puis encodées en base64 dans des fichiers .js chargés par <script> :
l'application fonctionne ainsi en double-cliquant sur docs/index.html, sans serveur ni connexion.
"""
import base64
import gzip
import json
from pathlib import Path

import numpy as np
import trimesh

ROOT = Path(__file__).parent
B = ROOT / "_build"
DOCS = ROOT.parent / "docs" / "data"
DOCS.mkdir(parents=True, exist_ok=True)

CORTEX_KEYS = ["moteur", "premoteur", "prefrontal", "frontal_inf", "orbitofrontal", "cingulaire_ant",
               "cingulaire_post", "insula", "somesthesique", "parietal", "auditif", "temporal",
               "parahippocampique", "visuel", "occipital", "paroi_mediane", "pfc_median"]
QS = 0.004  # pas de quantification des positions (mm)


class Blob:
    def __init__(self):
        self.buf = bytearray()

    def add(self, arr):
        while len(self.buf) % 4:
            self.buf.append(0)
        off = len(self.buf)
        self.buf += np.ascontiguousarray(arr).tobytes()
        return off


blob = Blob()
parts = []


def load_ao(stem, n):
    p = B / "ao" / f"{stem}.npy"
    if p.exists():
        a = np.load(p)
        if len(a) == n:
            return np.clip(a, 0, 1)
        print(f"  ! AO {stem} ignorée ({len(a)} != {n})")
    return None


def outward(mesh):
    c = mesh.vertices.mean(0)
    if np.mean(np.einsum("ij,ij->i", mesh.vertex_normals, mesh.vertices - c)) < 0:
        mesh.invert()
    return mesh


def push(pid, kind, hemi, v, f, nrm, shade, net=None, extra=None):
    nv = len(v)
    q = np.rint(v / QS).astype(np.int16)
    n8 = np.clip(np.rint(nrm * 127), -127, 127).astype(np.int8)
    s8 = np.clip(np.rint(shade * 255), 0, 255).astype(np.uint8)
    idx = f.astype(np.uint16 if nv < 65536 else np.uint32).ravel()
    d = {"id": pid, "kind": kind, "hemi": hemi, "nv": nv, "ni": len(idx),
         "pos": blob.add(q), "nrm": blob.add(n8), "shade": blob.add(s8),
         "idx": blob.add(idx), "i32": nv >= 65536,
         "center": v.mean(0).round(2).tolist(),
         "min": v.min(0).round(2).tolist(), "max": v.max(0).round(2).tolist()}
    if net is not None:
        d["net"] = blob.add(net.astype(np.uint8))
    if extra:
        d.update(extra)
    parts.append(d)


# --- cortex : un maillage par région, normales calculées sur l'hémisphère entier (pas de couture) ---
for H in ("L", "R"):
    mesh = outward(trimesh.load(B / f"cortex_{H}.ply", process=False))
    z = np.load(B / f"cortex_{H}.npz")
    region, net, sulc = z["region"], z["net"], z["sulc"]
    v, f = np.asarray(mesh.vertices), np.asarray(mesh.faces)
    nrm = np.asarray(mesh.vertex_normals)
    ao = load_ao(f"cortex_{H}", len(v))
    s = np.clip((sulc + 0.3) / 1.2, 0, 1)
    shade = (1 - 0.22 * s)
    if ao is not None:
        shade *= 0.45 + 0.55 * ao ** 0.9
    r = region[f]
    fr = np.where((r[:, 0] == r[:, 1]) | (r[:, 0] == r[:, 2]), r[:, 0],
                  np.where(r[:, 1] == r[:, 2], r[:, 1], r[:, 0]))
    for ki, key in enumerate(CORTEX_KEYS):
        sel = fr == ki
        if not sel.any():
            continue
        ff = f[sel]
        used, inv = np.unique(ff.ravel(), return_inverse=True)
        kind = "medial" if key == "paroi_mediane" else "cortex"
        push(f"{key}_{H}", kind, H, v[used], inv.reshape(-1, 3), nrm[used], shade[used], net[used],
             {"key": key})
    print(f"cortex {H} : AO={'oui' if ao is not None else 'non'}")

# --- autres structures ---
manifest = json.loads((B / "manifest.json").read_text(encoding="utf-8"))
for m in manifest:
    mesh = outward(trimesh.load(B / "parts" / f"{m['id']}.ply", process=False))
    v, f = np.asarray(mesh.vertices), np.asarray(mesh.faces)
    ao = load_ao(m["id"], len(v))
    shade = np.ones(len(v)) if ao is None else 0.5 + 0.5 * ao
    key = m["id"][:-2] if m["id"][-2:] in ("_L", "_R") else m["id"]
    push(m["id"], m["kind"], m["hemi"], v, f, np.asarray(mesh.vertex_normals), shade, None, {"key": key})

raw = bytes(blob.buf)
gz = gzip.compress(raw, 9)
payload = {"version": 1, "quant": QS, "parts": parts}
js = ("/* Données 3D générées par pipeline/03_pack.py — voir DATA_LICENSES.md */\n"
      f"window.BRAIN_DATA={json.dumps(payload, separators=(',', ':'))};\n"
      f"window.BRAIN_BLOB=\"{base64.b64encode(gz).decode()}\";\n")
(DOCS / "brain.js").write_text(js, encoding="utf-8")
print(f"brain.js : {len(parts)} pièces, brut {len(raw)/1e6:.1f} Mo, gzip {len(gz)/1e6:.1f} Mo")

# --- IRM ---
z = np.load(B / "mri.npz")
t1, lab, aff = z["t1"], z["labels"], z["affine"]
names = [str(n) for n in z["label_names"]]
# ordre x (rapide), y, z (lent) pour le navigateur
t1b = np.ascontiguousarray(t1.transpose(2, 1, 0)).tobytes()
lb = np.ascontiguousarray(lab.transpose(2, 1, 0)).tobytes()
mri = {"shape": list(t1.shape), "origin": aff[:3, 3].tolist(), "vox": float(aff[0, 0]), "labels": names}
js = ("/* IRM : template MNI ICBM152 2009 (Copyright (C) 1993-2009 Louis Collins, McConnell Brain Imaging "
      "Centre, Montreal Neurological Institute, McGill University) — voir DATA_LICENSES.md */\n"
      f"window.MRI_DATA={json.dumps(mri, ensure_ascii=False)};\n"
      f"window.MRI_T1=\"{base64.b64encode(gzip.compress(t1b, 9)).decode()}\";\n"
      f"window.MRI_LAB=\"{base64.b64encode(gzip.compress(lb, 9)).decode()}\";\n")
(DOCS / "mri.js").write_text(js, encoding="utf-8")
print(f"mri.js : {(DOCS / 'mri.js').stat().st_size/1e6:.1f} Mo")
