# Sources des données scientifiques & Licences

Cette application autonome utilise exclusivement des données scientifiques ouvertes et des bibliothèques logicielles libres pour reconstruire son propre modèle 3D, ses coupes IRM et son interface pédagogique en français.

## 1. Données anatomiques et IRM

1. **Template MNI ICBM152 2009 non-linéaire symétrique (T1 et masques)**
   - Référence : Fonov V, Evans AC, Botteron K, Almli CR, McKinstry RC, Collins DL (2011), *Unbiased average age-appropriate atlases for pediatric studies*, NeuroImage 54(1):313-327.
   - Mention de copyright (conservée conformément aux conditions MNI) :
     `Copyright (C) 1993-2009 Louis Collins, McConnell Brain Imaging Centre, Montreal Neurological Institute, McGill University.`
   - Usage autorisé pour la recherche et l'enseignement sous réserve de conserver cette notice.

2. **Surfaces corticales `fsaverage6` (FreeSurfer)**
   - Référence : Fischl B, Sereno MI, Dale AM (1999), *Cortical Surface-Based Analysis II: Inflation, Flattening, and a Surface-Based Coordinate System*, NeuroImage 9:195-207.
   - Licence FreeSurfer Open Source.

3. **Parcellation corticale de Destrieux**
   - Référence : Destrieux C, Fischl B, Dale A, Halgren E (2010), *Automatic parcellation of human cortical gyri and sulci using standard anatomical nomenclature*, NeuroImage 53(1):1-15.

4. **Atlas sous-cortical Harvard-Oxford (maxprob-thr25-1mm, FSL)**
   - Références : Makris N et al. (2006) ; Desikan RS et al. (2006), NeuroImage 31(3):968-980.

5. **Atlas sous-cortical CIT168 (VTA, substance noire, hypothalamus)**
   - Référence : Pauli WM, Nili AN, Tyszka JM (2018), *A high-resolution probabilistic in vivo atlas of human subcortical brain nuclei*, Scientific Data 5:180063 (CC BY 4.0).

6. **Atlas de Talairach en espace MNI (cervelet)**
   - Référence : Lancaster JL et al. (2000), *Automated Talairach Atlas labels for functional brain mapping*, Human Brain Mapping 10:120-131.

7. **Réseaux à grande échelle (Yeo 2011 via Schaefer 2018)**
   - Références : Yeo BT et al. (2011), *J Neurophysiol* 106:1125-1165 ; Schaefer A et al. (2018), *Cerebral Cortex* 28(9):3095-3114.
   - Licence : MIT (CBIG / Thomas Yeo Lab).

8. **Reconstructions cellulaires microscopiques (Micro-Monde 3D : cortex, neurone, synapse, potentiel d'action, activité)**
   - Source : **Allen Brain Atlas · Cell Types Database** (Allen Institute for Brain Science, https://celltypes.brain-map.org) — fichiers SWC complets réels (`H16.06` pyramidales humaines MTG/MFG, `Cux2`/`Chrna2` pyramidales VISp L2/3 & L5, interneurones `Pvalb`, `Vipr2` chandelier, `Sst` Martinotti, `Vip`/`Htr3a` bipolaires).
   - Licence : Conditions d'utilisation ouvertes de l'Allen Institute / CC BY 4.0 (données scientifiques libres et ouvertes).

## 2. Logiciels et rendu 3D

- **Three.js** — Licence MIT.
- **fflate** — Licence MIT.
- **nilearn / nibabel / trimesh / scikit-image / scipy / numpy** — Licences BSD / MIT.
- **Blender 4.4 (Cycles AO bake)** — Licence GPL (les maillages et valeurs d'occlusion ambiante générés pour l'atlas macro et le Micro-Monde 3D restent libres d'usage).

## 3. Avertissement pédagogique et médical

Cet outil est destiné exclusivement à l'enseignement des SVT (cycles 3 et 4). Les informations, circuits et modèles cliniques présentés sont des simplifications pédagogiques et ne constituent en aucun cas un avis médical ni un outil de diagnostic.
