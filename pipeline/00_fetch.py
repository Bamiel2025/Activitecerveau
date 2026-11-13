"""Étape 0 — télécharge les atlas ouverts utilisés par le projet (cache local : pipeline/_cache).

Sources (voir DATA_LICENSES.md) :
- MNI ICBM152 2009 non-linéaire symétrique (T1 + masques)       — Fonov et al. 2009/2011
- fsaverage6 (surfaces corticales FreeSurfer)                     — Fischl 1999
- Parcellation de Destrieux (surface)                             — Destrieux et al. 2010
- Harvard-Oxford sous-cortical (max-prob 25 %, 1 mm)              — Desikan/Makris, FSL
- Atlas sous-cortical CIT168 de Pauli et al. 2018 (VTA, hypothalamus…)
- Atlas de Talairach (version MNI, Lancaster 2000) pour le cervelet
- Réseaux de Yeo et al. 2011 (7 réseaux), via Schaefer et al. 2018
"""
from pathlib import Path
from nilearn import datasets

CACHE = Path(__file__).parent / "_cache"
CACHE.mkdir(exist_ok=True)
d = str(CACHE)

icbm = datasets.fetch_icbm152_2009(data_dir=d)
print("ICBM:", icbm.t1)
fs6 = datasets.fetch_surf_fsaverage("fsaverage6", data_dir=d)
print("fsaverage6:", fs6.pial_left)
des = datasets.fetch_atlas_surf_destrieux(data_dir=d)
print("Destrieux labels:", [l.decode() if isinstance(l, bytes) else l for l in des.labels])
ho = datasets.fetch_atlas_harvard_oxford("sub-maxprob-thr25-1mm", data_dir=d)
print("HO sub labels:", ho.labels)
pauli = datasets.fetch_atlas_pauli_2017("deterministic", data_dir=d)
print("Pauli labels:", pauli.labels)
tal = datasets.fetch_atlas_talairach("lobe", data_dir=d)
print("Talairach lobe labels:", tal.labels)
talg = datasets.fetch_atlas_talairach("gyrus", data_dir=d)
print("Talairach gyrus labels:", talg.labels)
# Les 7 réseaux de Yeo 2011 via la parcellation de Schaefer 2018 (licence MIT, hébergée sur GitHub ;
# le serveur FTP d'origine de Yeo est souvent inaccessible).
sch = datasets.fetch_atlas_schaefer_2018(n_rois=400, yeo_networks=7, resolution_mm=1, data_dir=d)
print("Schaefer:", sch.maps, list(sch.labels)[:5])
