#!/usr/bin/env python3
"""
Étape 2b (Micro-échelle · Blender 4.4) :
Exécution en ligne de commande Blender (`blender.exe -b -P pipeline/05b_micro_blender_ao.py`).
Importe chaque maillage neuronal `.ply`, applique un lissage organique des normales,
déplie les UV et cuit une occlusion ambiante Cycles CPU calibrée à l'échelle cellulaire/synaptique
(`distance = 0.22` pour les neurones, `0.06` pour l'ultrastructure synaptique ~20 nm)
dans l'attribut de couleur de sommet `"AO"`, puis exporte `*_ao.npy`.
"""
import json
import os
import sys
import time
import bpy
import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BUILD_DIR = os.path.join(ROOT, "pipeline", "_build", "micro")
MAN_PATH = os.path.join(BUILD_DIR, "micro_manifest.json")


def clear_scene():
    bpy.ops.wm.read_factory_settings(use_empty=True)


def setup_cycles_ao(samples=48, distance=0.22):
    scene = bpy.context.scene
    scene.render.engine = "CYCLES"
    scene.cycles.device = "CPU"
    scene.cycles.samples = samples
    scene.cycles.use_adaptive_sampling = True
    scene.cycles.adaptive_threshold = 0.02
    scene.cycles.bake_type = "AO"
    scene.render.bake.target = "VERTEX_COLORS"
    scene.render.bake.use_pass_direct = False
    scene.render.bake.use_pass_indirect = False

    if scene.world is None:
        scene.world = bpy.data.worlds.new("AO_World")
    scene.world.light_settings.distance = distance


def bake_ply_ao(ply_path, out_ao_path, expected_nv, distance=0.22, samples=48):
    clear_scene()
    setup_cycles_ao(samples=samples, distance=distance)

    bpy.ops.wm.ply_import(filepath=ply_path)
    obj = bpy.context.active_object
    mesh = obj.data
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)

    # Lissage organique des surfaces neuronales
    bpy.ops.object.shade_smooth()

    # S'assurer qu'une couche UV existe pour l'API Bake de Cycles
    if not mesh.uv_layers:
        mesh.uv_layers.new(name="UVMap")

    # Attribut cible "AO" par sommet (FLOAT_COLOR / BYTE_COLOR POINT)
    if "AO" in mesh.color_attributes:
        mesh.color_attributes.remove(mesh.color_attributes["AO"])
    col_attr = mesh.color_attributes.new(name="AO", type="FLOAT_COLOR", domain="POINT")
    mesh.color_attributes.active_color = col_attr
    mesh.color_attributes.active_color_index = list(mesh.color_attributes).index(col_attr)

    # Matériau basique requis par Cycles
    mat = bpy.data.materials.new(name="AO_Mat")
    mat.use_nodes = True
    mesh.materials.append(mat)

    bpy.ops.object.bake(type="AO")

    nv = len(mesh.vertices)
    ao = np.empty(nv, dtype=np.float32)
    for i in range(nv):
        rgba = col_attr.data[i].color
        ao[i] = float(rgba[0])

    # Normaliser légèrement pour préserver des crêtes lumineuses & creux nets (0.38..1.0)
    lo = float(np.percentile(ao, 2))
    hi = max(lo + 1e-4, float(np.percentile(ao, 99)))
    ao_norm = np.clip((ao - lo) / (hi - lo), 0.0, 1.0)
    ao_scaled = 0.40 + 0.60 * (ao_norm ** 0.78)
    np.save(out_ao_path, ao_scaled.astype(np.float32))
    return nv


def main():
    t0 = time.time()
    with open(MAN_PATH, "r", encoding="utf-8") as f:
        man = json.load(f)

    parts = man["parts"]
    print(f"Blender {bpy.app.version_string} — Cuisson Cycles AO pour {len(parts)} maillages micro...")
    for idx, p in enumerate(parts, 1):
        k = p["key"]
        ply_p = os.path.join(BUILD_DIR, f"{k}.ply")
        ao_p = os.path.join(BUILD_DIR, f"{k}_ao.npy")
        dist = 0.065 if k == "synapse_detail" else 0.22
        samp = 64 if k in ("hero_pyramidal", "synapse_detail") else 40
        nv = bake_ply_ao(ply_p, ao_p, p["nv"], distance=dist, samples=samp)
        print(f"  [{idx:02d}/{len(parts)}] {k:24s} | nv={nv:6d} | AO ok")

    print(f"Cuisson Blender AO terminée en {time.time() - t0:.1f}s")


if __name__ == "__main__":
    main()
