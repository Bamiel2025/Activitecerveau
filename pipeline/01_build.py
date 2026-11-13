"""Étape 1 — construit les maillages 3D et les volumes IRM à partir des atlas ouverts.

Sorties (pipeline/_build) :
  cortex_L.ply / cortex_R.ply + cortex_L.npz / cortex_R.npz  (région, réseau, profondeur sulcale par sommet)
  parts/<id>.ply                                             (structures profondes, cervelet, tronc…)
  manifest.json                                              (liste des pièces)
  mri.npz                                                    (T1 + étiquettes, grille 1,5 mm)

Tous les maillages sont exprimés en millimètres dans l'espace MNI152 (x = gauche→droite, y = arrière→avant,
z = bas→haut).
"""
import json
from pathlib import Path

import nibabel as nib
import numpy as np
import trimesh
from nibabel.freesurfer import read_annot
from nilearn import image
from scipy import ndimage
from scipy.spatial import cKDTree
from skimage import measure

ROOT = Path(__file__).parent
C = ROOT / "_cache"
OUT = ROOT / "_build"
(OUT / "parts").mkdir(parents=True, exist_ok=True)

ICBM = C / "icbm152_2009" / "mni_icbm152_nlin_sym_09a"
T1 = ICBM / "mni_icbm152_t1_tal_nlin_sym_09a.nii.gz"
MASK = ICBM / "mni_icbm152_t1_tal_nlin_sym_09a_mask.nii.gz"
WM = ICBM / "mni_icbm152_wm_tal_nlin_sym_09a.nii.gz"
GM = ICBM / "mni_icbm152_gm_tal_nlin_sym_09a.nii.gz"
HO_SUB = C / "fsl/data/atlases/HarvardOxford/HarvardOxford-sub-maxprob-thr25-1mm.nii.gz"
PAULI = C / "pauli_2017" / "pauli_2017_det.nii.gz"
TAL_LOBE = C / "talairach_atlas" / "lobe.nii.gz"
SCH = C / "schaefer_2018" / "Schaefer2018_400Parcels_7Networks_order_FSLMNI152_1mm.nii.gz"
SCH_TXT = C / "schaefer_2018" / "Schaefer2018_400Parcels_7Networks_order.txt"
FS6 = C / "fsaverage6"
DES = C / "destrieux_surface"

# Transformation MNI305 (fsaverage) -> MNI152 (FreeSurfer, « mni152.register.dat »)
M305_152 = np.array([
    [1.0022, 0.0071, -0.0177, 0.0528],
    [-0.0146, 0.9990, 0.0027, -1.5519],
    [0.0129, 0.0094, 1.0027, -1.2012],
    [0, 0, 0, 1],
])

# ---------------------------------------------------------------------------------------------
# Régions corticales : regroupement des 74 étiquettes de Destrieux en régions pédagogiques
# ---------------------------------------------------------------------------------------------
CORTEX_MAP = {
    "moteur": ["G_precentral", "S_central", "G_and_S_paracentral", "G_and_S_subcentral"],
    "premoteur": ["S_precentral-inf-part", "S_precentral-sup-part"],
    "prefrontal": ["G_front_middle", "G_front_sup", "S_front_sup", "S_front_middle", "S_front_inf",
                   "G_and_S_transv_frontopol", "G_and_S_frontomargin"],
    "frontal_inf": ["G_front_inf-Opercular", "G_front_inf-Triangul"],
    "orbitofrontal": ["G_front_inf-Orbital", "G_orbital", "G_rectus", "S_orbital-H_Shaped",
                      "S_orbital_lateral", "S_orbital_med-olfact", "S_suborbital"],
    "cingulaire_ant": ["G_and_S_cingul-Ant", "G_and_S_cingul-Mid-Ant", "G_subcallosal"],
    "cingulaire_post": ["G_and_S_cingul-Mid-Post", "G_cingul-Post-dorsal", "G_cingul-Post-ventral",
                        "S_pericallosal", "S_cingul-Marginalis"],
    "insula": ["G_insular_short", "G_Ins_lg_and_S_cent_ins", "S_circular_insula_ant",
               "S_circular_insula_inf", "S_circular_insula_sup", "Lat_Fis-ant-Horizont",
               "Lat_Fis-ant-Vertical", "Lat_Fis-post"],
    "somesthesique": ["G_postcentral", "S_postcentral"],
    "parietal": ["G_parietal_sup", "G_pariet_inf-Angular", "G_pariet_inf-Supramar",
                 "S_intrapariet_and_P_trans", "S_subparietal", "G_precuneus", "S_parieto_occipital",
                 "S_interm_prim-Jensen"],
    "auditif": ["G_temp_sup-G_T_transv", "S_temporal_transverse"],
    "temporal": ["G_temp_sup-Lateral", "G_temp_sup-Plan_polar", "G_temp_sup-Plan_tempo",
                 "G_temporal_middle", "G_temporal_inf", "Pole_temporal", "S_temporal_inf",
                 "S_temporal_sup", "G_oc-temp_lat-fusifor", "S_collat_transv_ant"],
    "parahippocampique": ["G_oc-temp_med-Parahip"],
    "visuel": ["S_calcarine", "Pole_occipital"],
    "occipital": ["G_occipital_middle", "G_occipital_sup", "G_and_S_occipital_inf", "G_cuneus",
                  "S_oc_middle_and_Lunatus", "S_oc_sup_and_transversal", "S_occipital_ant",
                  "G_oc-temp_med-Lingual", "S_oc-temp_lat", "S_oc-temp_med_and_Lingual",
                  "S_collat_transv_post"],
    "paroi_mediane": ["Medial_wall", "Unknown"],
}
# Région supplémentaire obtenue géométriquement : face médiane du lobe frontal
MEDIAL_SPLIT_FROM = {"prefrontal"}
CORTEX_KEYS = list(CORTEX_MAP.keys()) + ["pfc_median"]

NETWORKS = ["Vis", "SomMot", "DorsAttn", "SalVentAttn", "Limbic", "Cont", "Default"]


def load_gii(p):
    g = nib.load(str(p))
    if len(g.darrays) >= 2:
        return g.darrays[0].data.astype(np.float64), g.darrays[1].data.astype(np.int64)
    return g.darrays[0].data


def apply(M, xyz):
    return xyz @ M[:3, :3].T + M[:3, 3]


def nearest_fill(vol, mask=None):
    """Remplit les voxels nuls par l'étiquette non nulle la plus proche."""
    idx = ndimage.distance_transform_edt(vol == 0, return_distances=False, return_indices=True)
    out = vol[tuple(idx)]
    if mask is not None:
        out = np.where(mask, out, 0)
    return out


def sample_vol(img, data, xyz):
    ijk = np.rint(apply(np.linalg.inv(img.affine), xyz)).astype(int)
    for a in range(3):
        ijk[:, a] = np.clip(ijk[:, a], 0, data.shape[a] - 1)
    return data[ijk[:, 0], ijk[:, 1], ijk[:, 2]]


# ---------------------------------------------------------------------------------------------
# 1) Cortex (fsaverage6, surface piale) + étiquettes de régions et de réseaux
# ---------------------------------------------------------------------------------------------
sch_img = nib.load(str(SCH))
sch = np.asarray(sch_img.dataobj).astype(np.int32)
names = [l.split("\t")[1] for l in SCH_TXT.read_text().strip().splitlines()]
lut = np.zeros(sch.max() + 1, dtype=np.uint8)
for i, n in enumerate(names, start=1):
    lut[i] = NETWORKS.index(n.split("_")[2]) + 1
net_vol = lut[sch]
net_vol = nearest_fill(net_vol)

cortex_vertices = {}  # pour l'étiquetage IRM
for hemi, H in (("left", "L"), ("right", "R")):
    pial, faces = load_gii(FS6 / f"pial_{hemi}.gii.gz")
    white, _ = load_gii(FS6 / f"white_{hemi}.gii.gz")
    sphere, _ = load_gii(FS6 / f"sphere_{hemi}.gii.gz")
    sulc = load_gii(FS6 / f"sulc_{hemi}.gii.gz").astype(np.float32)
    pial = apply(M305_152, pial)
    white = apply(M305_152, white)
    mid = 0.5 * (pial + white)

    # Destrieux est défini sur fsaverage5 (10242 sommets) = les 10242 premiers sommets de fsaverage6
    labels5, _, dnames = read_annot(str(DES / f"{hemi}.aparc.a2009s.annot"))
    dnames = [n.decode() if isinstance(n, bytes) else n for n in dnames]
    n5 = labels5.shape[0]
    tree = cKDTree(sphere[:n5])
    _, nn = tree.query(sphere)
    dlab = labels5[nn]

    name2key = {}
    for k, lst in CORTEX_MAP.items():
        for n in lst:
            name2key[n] = k
    region = np.full(len(pial), CORTEX_KEYS.index("paroi_mediane"), dtype=np.uint8)
    unmapped = set()
    for li, n in enumerate(dnames):
        sel = dlab == li
        if not sel.any():
            continue
        k = name2key.get(n)
        if k is None:
            unmapped.add(n)
            continue
        region[sel] = CORTEX_KEYS.index(k)
    # face médiane du préfrontal -> cortex préfrontal médian
    medial = (np.abs(pial[:, 0]) < 11) & (pial[:, 1] > 8)
    for k in MEDIAL_SPLIT_FROM:
        region[(region == CORTEX_KEYS.index(k)) & medial] = CORTEX_KEYS.index("pfc_median")
    if unmapped:
        print(f"[{H}] étiquettes non regroupées :", unmapped)

    net = sample_vol(sch_img, net_vol, mid).astype(np.uint8)
    net[region == CORTEX_KEYS.index("paroi_mediane")] = 0

    mesh = trimesh.Trimesh(pial, faces, process=False)
    mesh.export(OUT / f"cortex_{H}.ply")
    np.savez_compressed(OUT / f"cortex_{H}.npz", region=region, net=net, sulc=sulc)
    cortex_vertices[H] = (mid, region)
    print(f"cortex {H}: {len(pial)} sommets, {len(faces)} faces")

# ---------------------------------------------------------------------------------------------
# 2) Structures volumiques -> maillages (marching cubes + lissage de Taubin)
# ---------------------------------------------------------------------------------------------
def mask_to_mesh(mask, affine, upsample=1, sigma=0.9, taubin=25):
    mask = mask.astype(np.float32)
    if mask.sum() == 0:
        raise ValueError("masque vide")
    # recadrage pour la vitesse
    nz = np.argwhere(mask > 0)
    lo = np.maximum(nz.min(0) - 3, 0)
    hi = np.minimum(nz.max(0) + 4, mask.shape)
    sub = mask[lo[0]:hi[0], lo[1]:hi[1], lo[2]:hi[2]]
    if upsample > 1:
        sub = ndimage.zoom(sub, upsample, order=1)
    sub = ndimage.gaussian_filter(sub, sigma * upsample)
    sub = np.pad(sub, 1)
    v, f, _, _ = measure.marching_cubes(sub, 0.5)
    v = (v - 1) / upsample + lo
    v = apply(affine, v)
    m = trimesh.Trimesh(v, f[:, ::-1], process=True)
    # garder la plus grande composante connexe
    parts = m.split(only_watertight=False)
    if len(parts) > 1:
        m = max(parts, key=lambda p: len(p.faces))
    trimesh.smoothing.filter_taubin(m, lamb=0.5, nu=-0.53, iterations=taubin)
    m.fix_normals()
    return m


def load(p):
    img = nib.load(str(p))
    return img, np.asarray(img.dataobj)


ho_img, ho = load(HO_SUB)
ho = ho.astype(np.int32)
pa_img, pa = load(PAULI)
pa = np.rint(pa).astype(np.int32)
tl_img, tl = load(TAL_LOBE)
tl = np.rint(tl).astype(np.int32)
wm_img, wm = load(WM)
ijk_ho = np.indices(ho.shape).reshape(3, -1).T
x_ho = apply(ho_img.affine, ijk_ho)[:, 0].reshape(ho.shape)


def side_mask(img, data_shape, sign):
    ijk = np.indices(data_shape).reshape(3, -1).T
    x = apply(img.affine, ijk)[:, 0].reshape(data_shape)
    return x < 0 if sign == "L" else x >= 0


manifest = []


def add(pid, mesh, kind, hemi):
    mesh.export(OUT / "parts" / f"{pid}.ply")
    manifest.append({"id": pid, "kind": kind, "hemi": hemi, "verts": len(mesh.vertices),
                     "faces": len(mesh.faces), "center": mesh.vertices.mean(0).round(2).tolist()})
    print(f"  {pid:28s} {len(mesh.faces):7d} faces")


HO = {"thalamus": (4, 15), "caudé": (5, 16), "putamen": (6, 17), "pallidum": (7, 18),
      "hippocampe": (9, 19), "amygdale": (10, 20), "accumbens": (11, 21), "ventricule": (3, 14)}
HO_ID = {"thalamus": "thalamus", "caudé": "caude", "putamen": "putamen", "pallidum": "pallidum",
         "hippocampe": "hippocampe", "amygdale": "amygdale", "accumbens": "accumbens",
         "ventricule": "ventricule"}
for k, (l, r) in HO.items():
    for H, lab in (("L", l), ("R", r)):
        up = 2 if k in ("accumbens", "amygdale", "pallidum") else 1
        add(f"{HO_ID[k]}_{H}", mask_to_mesh(ho == lab, ho_img.affine, upsample=up), "deep", H)

add("tronc", mask_to_mesh(ho == 8, ho_img.affine, sigma=1.0), "brainstem", "M")

# Pauli 2018 : VTA (11), SNc (7) + SNr (9), hypothalamus (14), noyau sous-thalamique (16)
add("vta", mask_to_mesh(pa == 11, pa_img.affine, upsample=3, sigma=0.7, taubin=15), "nucleus", "M")
add("hypothalamus", mask_to_mesh(pa == 14, pa_img.affine, upsample=2, sigma=0.8), "nucleus", "M")
for H in ("L", "R"):
    sm = side_mask(pa_img, pa.shape, H)
    add(f"substance_noire_{H}", mask_to_mesh(np.isin(pa, (7, 9)) & sm, pa_img.affine, upsample=3,
                                             sigma=0.7, taubin=15), "nucleus", H)

# Cervelet : lobes antérieur (8) + postérieur (1) de l'atlas de Talairach (version MNI)
for H in ("L", "R"):
    sm = side_mask(tl_img, tl.shape, H)
    add(f"cervelet_{H}", mask_to_mesh(np.isin(tl, (1, 8)) & sm, tl_img.affine, sigma=1.2, taubin=30),
        "cerebellum", H)

# Corps calleux (approximation) : substance blanche médiane au-dessus des ventricules
ijk_wm = np.indices(wm.shape).reshape(3, -1).T
xyz_wm = apply(wm_img.affine, ijk_wm).reshape(wm.shape + (3,))
cc = (wm > 0.6) & (np.abs(xyz_wm[..., 0]) <= 9) & (xyz_wm[..., 1] > -44) & (xyz_wm[..., 1] < 38) \
     & (xyz_wm[..., 2] > 2) & (xyz_wm[..., 2] < 34)
lab, n = ndimage.label(cc)
if n:
    sizes = ndimage.sum(cc, lab, range(1, n + 1))
    cc = lab == (np.argmax(sizes) + 1)
add("corps_calleux", mask_to_mesh(cc, wm_img.affine, sigma=1.0), "deep", "M")


# Petits noyaux du tronc cérébral (positions approximatives d'après la littérature, en mm MNI)
def capsule(a, b, r, pid, hemi, kind="nucleus"):
    a, b = np.array(a, float), np.array(b, float)
    L = np.linalg.norm(b - a)
    if L < 1e-6:
        m = trimesh.creation.icosphere(subdivisions=3, radius=r)
        m.apply_translation(a)
    else:
        m = trimesh.creation.capsule(height=L, radius=r, count=[24, 24])
        # orienter l'axe z sur (b - a)
        T = trimesh.geometry.align_vectors([0, 0, 1], (b - a) / L)
        m.apply_transform(T)
        m.apply_translation((a + b) / 2)
    add(pid, m, kind, hemi)


capsule((-5, -37, -24), (-5, -39, -30), 1.6, "locus_coeruleus_L", "L")
capsule((5, -37, -24), (5, -39, -30), 1.6, "locus_coeruleus_R", "R")
capsule((0, -27, -11), (0, -35, -30), 2.0, "raphe", "M")
capsule((0, -30, -6), (0, -36, -14), 2.2, "pag", "M")
capsule((-19, -3, -9), (-14, 4, -11), 2.4, "meynert_L", "L")
capsule((19, -3, -9), (14, 4, -11), 2.4, "meynert_R", "R")

(OUT / "manifest.json").write_text(json.dumps(manifest, indent=1, ensure_ascii=False), encoding="utf-8")

# ---------------------------------------------------------------------------------------------
# 3) Volumes IRM (grille 1,5 mm recadrée sur le cerveau) : T1 + étiquettes de régions
# ---------------------------------------------------------------------------------------------
VOX = 1.5
lo = np.array([-73.5, -108.0, -63.0])
shape = (98, 122, 98)  # couvre x -73.5..72, y -108..73.5, z -63..82.5
aff = np.diag([VOX, VOX, VOX, 1.0])
aff[:3, 3] = lo

t1 = image.resample_img(str(T1), target_affine=aff, target_shape=shape, interpolation="continuous",
                        force_resample=True, copy_header=True)
mask = image.resample_img(str(MASK), target_affine=aff, target_shape=shape, interpolation="nearest",
                          force_resample=True, copy_header=True)
t1d = np.asarray(t1.dataobj, dtype=np.float32)
mk = np.asarray(mask.dataobj) > 0.5
mk = ndimage.binary_dilation(mk, iterations=1)
hi = np.percentile(t1d[mk], 99.5)
t1u8 = np.clip(t1d / hi * 255, 0, 255) * mk
t1u8 = t1u8.astype(np.uint8)


def rs(p, interp="nearest"):
    return np.asarray(image.resample_img(str(p), target_affine=aff, target_shape=shape,
                                         interpolation=interp, force_resample=True,
                                         copy_header=True).dataobj)


ho_r = np.rint(rs(HO_SUB)).astype(np.int32)
pa_r = np.rint(rs(PAULI)).astype(np.int32)
tl_r = np.rint(rs(TAL_LOBE)).astype(np.int32)
gm_r = rs(GM, "continuous")

label_names = [""]  # 0 = rien


def lid(name):
    if name not in label_names:
        label_names.append(name)
    return label_names.index(name)


ijk = np.indices(shape).reshape(3, -1).T
xyz = apply(aff, ijk).reshape(shape + (3,))
left = xyz[..., 0] < 0
labels = np.zeros(shape, dtype=np.uint8)

# cortex : voxels de substance grise (HO "Cerebral Cortex" ou GM ICBM) -> région du sommet le plus proche
ctx = (np.isin(ho_r, (2, 13)) | (gm_r > 0.5)) & mk & ~np.isin(tl_r, (1, 2, 7, 8, 10))
for H, side in (("L", left), ("R", ~left)):
    midv, reg = cortex_vertices[H]
    tree = cKDTree(midv)
    sel = ctx & side
    pts = xyz[sel]
    d, nn = tree.query(pts, distance_upper_bound=6.0)
    ok = np.isfinite(d)
    vals = np.zeros(len(pts), dtype=np.uint8)
    keys = np.array(CORTEX_KEYS)[reg[nn[ok]]]
    vals[ok] = [lid(f"{k}_{H}") if k != "paroi_mediane" else 0 for k in keys]
    labels[sel] = vals

for H, side in (("L", left), ("R", ~left)):
    labels[np.isin(tl_r, (1, 8)) & side & mk] = lid(f"cervelet_{H}")
labels[ho_r == 8] = lid("tronc")
for k, (l, r) in HO.items():
    labels[ho_r == l] = lid(f"{HO_ID[k]}_L")
    labels[ho_r == r] = lid(f"{HO_ID[k]}_R")
labels[pa_r == 14] = lid("hypothalamus")
for H, side in (("L", left), ("R", ~left)):
    labels[np.isin(pa_r, (7, 9)) & side] = lid(f"substance_noire_{H}")
labels[pa_r == 11] = lid("vta")

np.savez_compressed(OUT / "mri.npz", t1=t1u8, labels=labels, affine=aff,
                    label_names=np.array(label_names))
print("IRM :", shape, "étiquettes :", len(label_names))
print("OK")
