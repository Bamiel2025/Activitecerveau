#!/usr/bin/env python3
"""
Étape 1 (Micro-échelle) : Télécharge des reconstructions morphologiques SWC ouvertes
depuis l'Allen Brain Atlas Cell Types Database (CC BY 4.0 / Allen Institute citation)
dans `pipeline/_cache/micro/`.

Aucun fichier propriétaire tiers n'est utilisé : uniquement des neurones corticaux
réels mesurés expérimentalement (VISp souris & cortex temporal/frontal humain).
"""
import json
import os
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE_DIR = os.path.join(ROOT, "pipeline", "_cache", "micro")
os.makedirs(CACHE_DIR, exist_ok=True)

MANIFEST_PATH = os.path.join(CACHE_DIR, "allen_manifest.json")

# Requête RMA Allen Cell Types pour obtenir toutes les reconstructions non obsolètes (.swc uniquement)
RMA_URL = (
    "https://api.brain-map.org/api/v2/data/query.json"
    "?criteria=model::NeuronReconstruction,rma::criteria,[superseded$eqfalse]"
    ",rma::include,well_known_files,specimen(cell_reporter,structure)&num_rows=750"
)

TARGET_CRE_CLASSES = {
    "pyramidal_human": lambda nm: nm.startswith("H1") and ("MTG" in nm or "MFG" in nm or True),
    "pyramidal_l5": lambda nm: nm.startswith("Chrna2-") or nm.startswith("Ntsr1-") or nm.startswith("Rorb-"),
    "pyramidal_l23": lambda nm: nm.startswith("Cux2-") or nm.startswith("Nr5a1-") or nm.startswith("Slc17a6-"),
    "basket_pvalb": lambda nm: nm.startswith("Pvalb-"),
    "chandelier": lambda nm: nm.startswith("Vipr2-") or nm.startswith("Nkx2-"),
    "martinotti_sst": lambda nm: nm.startswith("Sst-") or nm.startswith("Nos1-"),
    "bipolar_vip": lambda nm: nm.startswith("Vip-") or nm.startswith("Htr3a-"),
}


def pick_swc_file(item):
    for f in item.get("well_known_files") or []:
        p = str(f.get("path") or "")
        pl = p.lower()
        if pl.endswith(".swc") and "_marker" not in pl:
            return f
    return None


def parse_swc_stats(swc_text):
    counts = {1: 0, 2: 0, 3: 0, 4: 0}
    xs, ys, zs = [], [], []
    for line in swc_text.splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        parts = line.split()
        if len(parts) < 7:
            continue
        t = int(parts[1])
        counts[t] = counts.get(t, 0) + 1
        xs.append(float(parts[2]))
        ys.append(float(parts[3]))
        zs.append(float(parts[4]))
    if not xs:
        return None
    return {
        "counts": counts,
        "dx": round(max(xs) - min(xs), 1),
        "dy": round(max(ys) - min(ys), 1),
        "dz": round(max(zs) - min(zs), 1),
    }


def main():
    print("Interrogation de l'API Allen Cell Types...")
    req = urllib.request.Request(RMA_URL, headers={"User-Agent": "ActiviteCerveau-SVT/1.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = json.loads(r.read().decode("utf-8"))
    msg = data.get("msg") or []
    print(f"Enregistrements reçus : {len(msg)}")

    # Filtrer les reconstructions complètes (.swc avec axone + dendrites)
    selected = []
    # Sélectionner les meilleurs représentants par classe cellulaire
    quotas = {
        "pyramidal_human": 4,
        "pyramidal_l5": 4,
        "pyramidal_l23": 3,
        "basket_pvalb": 2,
        "chandelier": 2,
        "martinotti_sst": 2,
        "bipolar_vip": 2,
    }

    buckets = {k: [] for k in quotas}
    for item in msg:
        if item.get("neuron_reconstruction_type") != "full":
            continue
        swf = pick_swc_file(item)
        if not swf:
            continue
        sp = item.get("specimen") or {}
        nm = sp.get("name") or ""
        struct = (sp.get("structure") or {}).get("acronym") or ""
        nodes = int(item.get("number_nodes") or 0)
        if nodes < 600:
            continue
        for cls, pred in TARGET_CRE_CLASSES.items():
            if cls == "pyramidal_human":
                if not nm.startswith("H1"):
                    continue
            elif not pred(nm):
                continue
            buckets[cls].append({
                "class": cls,
                "recon_id": item["id"],
                "specimen_name": nm,
                "structure": struct,
                "nodes": nodes,
                "file_id": swf["id"],
                "download_link": swf["download_link"],
                "orig_filename": os.path.basename(swf["path"]),
            })
            break

    manifest = []
    seen_ids = set()
    for cls, quota in quotas.items():
        # Privilégier des arbres riches mais pas démesurés (1500..9000 nœuds pour rester net & rapide)
        cands = sorted(
            buckets[cls],
            key=lambda x: (1 if 1800 <= x["nodes"] <= 9500 else 0, x["nodes"]),
            reverse=True,
        )
        picked = 0
        for c in cands:
            if c["file_id"] in seen_ids:
                continue
            seen_ids.add(c["file_id"])
            local_name = f"{cls}_{picked + 1}_{c['file_id']}.swc"
            local_path = os.path.join(CACHE_DIR, local_name)
            if not os.path.exists(local_path):
                url = "https://api.brain-map.org" + c["download_link"]
                print(f"  Téléchargement {local_name} ({c['specimen_name']}, {c['nodes']} nœuds)...")
                urllib.request.urlretrieve(url, local_path)
            with open(local_path, "r", encoding="utf-8", errors="ignore") as f:
                txt = f.read()
            stats = parse_swc_stats(txt)
            if not stats or (stats["counts"].get(3, 0) + stats["counts"].get(4, 0)) < 150:
                continue
            c["local_file"] = local_name
            c["stats"] = stats
            manifest.append(c)
            picked += 1
            if picked >= quota:
                break

    with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    print(f"\nManifeste enregistré : {MANIFEST_PATH} ({len(manifest)} neurones)")
    for m in manifest:
        c = m["stats"]["counts"]
        print(
            f"  - {m['local_file']:36s} | {m['structure']:7s} | "
            f"soma={c.get(1,0)} axon={c.get(2,0)} basal={c.get(3,0)} apical={c.get(4,0)} "
            f"dx={m['stats']['dx']} dy={m['stats']['dy']}"
        )


if __name__ == "__main__":
    main()
