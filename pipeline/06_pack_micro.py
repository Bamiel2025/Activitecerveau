#!/usr/bin/env python3
"""
Étape 3 (Micro-échelle) : Empaquette tous les maillages neuronaux + AO Cycles Blender
dans un unique bundle JavaScript compressé gzip + base64 (`docs/data/micro.js`),
compatible `file://` et GitHub Pages sans aucune requête fetch externe.
"""
import base64
import gzip
import json
import os
import struct
import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BUILD_DIR = os.path.join(ROOT, "pipeline", "_build", "micro")
OUT_JS = os.path.join(ROOT, "docs", "data", "micro.js")
os.makedirs(os.path.dirname(OUT_JS), exist_ok=True)


def read_ply(ply_path):
    """Lit un PLY binary_little_endian (x,y,z float32 + triangles)."""
    with open(ply_path, "rb") as f:
        lines = []
        nv = nf = 0
        while True:
            line = f.readline().decode("ascii")
            lines.append(line)
            if line.startswith("element vertex "):
                nv = int(line.split()[-1])
            elif line.startswith("element face "):
                nf = int(line.split()[-1])
            elif line.strip() == "end_header":
                break
        verts = np.fromfile(f, dtype="<f4", count=nv * 3).reshape((nv, 3))
        face_dtype = np.dtype([("n", "u1"), ("v", "<i4", (3,))])
        faces = np.fromfile(f, dtype=face_dtype, count=nf)
        tris = faces["v"].astype(np.int32)
    return verts, tris


def compute_smooth_normals(verts, tris):
    """Calcule des normales moyennées par sommet à partir des faces triangulaires."""
    nrm = np.zeros_like(verts, dtype=np.float64)
    v0 = verts[tris[:, 0]]
    v1 = verts[tris[:, 1]]
    v2 = verts[tris[:, 2]]
    fn = np.cross(v1 - v0, v2 - v0)
    np.add.at(nrm, tris[:, 0], fn)
    np.add.at(nrm, tris[:, 1], fn)
    np.add.at(nrm, tris[:, 2], fn)
    lens = np.linalg.norm(nrm, axis=1, keepdims=True)
    lens[lens < 1e-9] = 1.0
    return (nrm / lens).astype(np.float32)


def pack_aligned(buf, data_bytes):
    pad = (-len(buf)) % 4
    if pad:
        buf.extend(b"\x00" * pad)
    offset = len(buf)
    buf.extend(data_bytes)
    return offset


def main():
    man_path = os.path.join(BUILD_DIR, "micro_manifest.json")
    with open(man_path, "r", encoding="utf-8") as f:
        man = json.load(f)

    # Quantification dynamique sub-micronique haute précision pour préserver les fines ramifications distales
    max_abs = 1.0
    cached_meshes = []
    for p in man["parts"]:
        k = p["key"]
        ply_p = os.path.join(BUILD_DIR, f"{k}.ply")
        verts, tris = read_ply(ply_p)
        if len(verts):
            max_abs = max(max_abs, float(np.max(np.abs(verts))))
        cached_meshes.append((p, verts, tris))
    QUANT = max(0.00008, min(0.00014, (max_abs * 1.04) / 32700.0))
    print(f"Quantification int16 dynamique : QUANT={QUANT:.6f} (max_abs={max_abs:.3f})")

    blob = bytearray()
    parts_meta = []

    for p, verts, tris in cached_meshes:
        k = p["key"]
        ao_p = os.path.join(BUILD_DIR, f"{k}_ao.npy")
        attr_p = os.path.join(BUILD_DIR, f"{k}_attrs.npz")

        normals = compute_smooth_normals(verts, tris)
        ao = np.load(ao_p) if os.path.exists(ao_p) else np.ones(len(verts), dtype=np.float32)
        attrs = np.load(attr_p)
        comp = attrs["comp"].astype(np.uint8)
        t_along = np.clip(np.round(attrs["t_along"] * 255.0), 0, 255).astype(np.uint8)

        nv = len(verts)
        ni = tris.size
        use_i32 = nv > 65530

        pos_q = np.clip(np.round(verts / QUANT), -32767, 32767).astype("<i2")
        nrm_q = np.clip(np.round(normals * 127.0), -127, 127).astype("i1")
        shade_u = np.clip(np.round(ao * 255.0), 0, 255).astype("u1")
        idx_arr = tris.flatten().astype("<u4" if use_i32 else "<u2")

        off_pos = pack_aligned(blob, pos_q.tobytes())
        off_nrm = pack_aligned(blob, nrm_q.tobytes())
        off_shade = pack_aligned(blob, shade_u.tobytes())
        off_comp = pack_aligned(blob, comp.tobytes())
        off_talong = pack_aligned(blob, t_along.tobytes())
        off_idx = pack_aligned(blob, idx_arr.tobytes())

        parts_meta.append({
            "key": k,
            "group": p["group"],
            "color": p["color"],
            "label": p["label"],
            "role": p["role"],
            "pos": p["pos"],
            "scale": p["scale"],
            "source": p["source_specimen"],
            "nv": nv,
            "ni": ni,
            "i32": use_i32,
            "offPos": off_pos,
            "offNrm": off_nrm,
            "offShade": off_shade,
            "offComp": off_comp,
            "offTalong": off_talong,
            "offIdx": off_idx,
        })

    # Empaqueter aussi les traces calciques uint8 de l'essaim dans le blob
    traces_u8 = np.asarray(man["swarm"]["traces_u8"], dtype="u1")
    off_traces = pack_aligned(blob, traces_u8.tobytes())

    meta_out = {
        "quant": QUANT,
        "parts": parts_meta,
        "synapsePaths": man["synapse_paths"],
        "swarm": {
            "nCells": man["swarm"]["n_cells"],
            "frames": man["swarm"]["frames"],
            "fps": man["swarm"]["fps"],
            "seconds": man["swarm"]["seconds"],
            "instances": man["swarm"]["instances"],
            "offTraces": off_traces,
            "lenTraces": int(len(traces_u8)),
        },
    }

    gz = gzip.compress(bytes(blob), compresslevel=9)
    b64 = base64.b64encode(gz).decode("ascii")

    with open(OUT_JS, "w", encoding="utf-8") as f:
        f.write("// Généré par pipeline/06_pack_micro.py — Reconstructions neuronales Allen Brain Atlas + AO Cycles Blender 4.4\n")
        f.write(f"window.MICRO_DATA = {json.dumps(meta_out, ensure_ascii=False, separators=(',', ':'))};\n")
        f.write(f"window.MICRO_BLOB = \"{b64}\";\n")

    raw_kb = len(blob) / 1024.0
    js_kb = os.path.getsize(OUT_JS) / 1024.0
    print(f"Empaqueté : {OUT_JS} | brut={raw_kb:.1f} Ko -> gzip+b64={js_kb:.1f} Ko ({len(parts_meta)} maillages)")


if __name__ == "__main__":
    main()
