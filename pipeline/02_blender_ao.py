"""Étape 2 (optionnelle) — Blender : calcule une occlusion ambiante (AO) par sommet.

L'AO assombrit le fond des sillons et les creux : c'est ce qui donne au cortex son relief « sculpté »
dans l'application (sans coût de calcul dans le navigateur).

Lancement (sans interface) :
  "C:\\Program Files\\Blender Foundation\\Blender 4.4\\blender.exe" -b -P pipeline/02_blender_ao.py

Sortie : pipeline/_build/ao/<nom>.npy  (float32, une valeur 0..1 par sommet, dans l'ordre du PLY)
Si Blender n'est pas disponible, l'étape 3 utilise seulement la profondeur sulcale.
"""
from pathlib import Path

import bpy
import numpy as np

BUILD = Path(__file__).resolve().parent / "_build"
AO_DIR = BUILD / "ao"
AO_DIR.mkdir(exist_ok=True)

targets = [BUILD / "cortex_L.ply", BUILD / "cortex_R.ply"]
targets += sorted((BUILD / "parts").glob("cervelet_*.ply"))
targets += sorted((BUILD / "parts").glob("tronc.ply"))

scene = bpy.context.scene
scene.render.engine = "CYCLES"
scene.cycles.device = "CPU"
scene.cycles.samples = 96
if scene.world is None:
    scene.world = bpy.data.worlds.new("World")
scene.world.light_settings.distance = 9.0  # mm : AO locale (sillons), pas d'ombre globale

for p in targets:
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete()
    bpy.ops.wm.ply_import(filepath=str(p))
    ob = bpy.context.selected_objects[0]
    bpy.context.view_layer.objects.active = ob
    me = ob.data
    n = len(me.vertices)
    mat = bpy.data.materials.new("m")
    mat.use_nodes = True
    me.materials.clear()
    me.materials.append(mat)
    for a in list(me.color_attributes):
        me.color_attributes.remove(a)
    attr = me.color_attributes.new("AO", "FLOAT_COLOR", "POINT")
    me.color_attributes.active_color = attr
    if not me.uv_layers:
        me.uv_layers.new(name="UV")  # Cycles exige une carte UV, même pour un bake sur sommets
    bpy.ops.object.shade_smooth()
    bpy.ops.object.bake(type="AO", target="VERTEX_COLORS")
    col = np.empty(n * 4, dtype=np.float32)
    me.color_attributes["AO"].data.foreach_get("color", col)
    ao = col.reshape(-1, 4)[:, 0]
    np.save(AO_DIR / (p.stem + ".npy"), ao)
    print(f"AO {p.stem}: {n} sommets, moyenne {ao.mean():.3f}")
print("AO terminé")
