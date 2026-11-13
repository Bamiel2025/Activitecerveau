# Le Cerveau Plié · Atlas 3D & Séquence SVT (Cycle 4)

Application pédagogique autonome (100 % hors connexion, **sans serveur**, compatible ordinateur, tablette et GitHub Pages) construite à partir de données IRM et d'atlas cérébraux sous licence ouverte.

Elle intègre l'ensemble de la séquence **SVT Cycle 4** (projet de programme CSP juillet 2025 → 2027–2028) :
- **5ème** : Activité physique, commande motrice et cervelet (`S25–S30`)
- **4ème** : Mouvement volontaire vs arc réflexe (`S21–S27`) et plaisir/procréation (EVARS, `S35–S41`)
- **3ème** : **A1** Modèle 3D vs IRM · **A2** Synapse & neurotransmetteurs · **A3** Cas H.M., plasticité & sommeil (**jalon DNB 3**) · **A4** Émotions en réseau (alarme & frein, émotions agréables et désagréables) · **A5** Circuit de la motivation détourné & addictions · **DNB 3** Évaluation (10 pts) & remédiation (1 h 30).

---

## Utiliser l'application immédiatement

### Option 1 : Hors connexion (clé USB, poste salle de classe, tablette)
1. Copier le dossier [`docs/`](docs/) (environ 7 Mo au total).
2. Double-cliquer sur [`docs/index.html`](docs/index.html) : tout fonctionne directement sans connexion Internet ni serveur local.

### Option 2 : Déploiement sur GitHub Pages (pour partager avec les élèves)
1. Créer un dépôt GitHub et pousser ce projet (`docs/`, `src/`, `pipeline/`, `README.md`, `DATA_LICENSES.md`).
2. Dans GitHub : **Settings → Pages → Source : Deploy from a branch → Branch `main` / dossier `/docs`**.
3. L'URL `https://<utilisateur>.github.io/<nom-du-repo>/` sera accessible directement sur ordinateur et tablette.

---

## Raccourcis et gestes 3D

| Geste / Touche | Action |
|---|---|
| Cliquer-glisser / 1 doigt | Pivoter autour du cerveau |
| Molette / Pincement 2 doigts | Zoomer / dézoomer |
| Clic sur une structure | Isoler la structure en gardant le cerveau en « verre » |
| Double-clic ou `Échap` | Réafficher tout le cerveau |
| `D` | **Structures profondes** : rend le cortex translucide |
| `M` | **IRM triplanaire** : coupe réelle MNI152 + section 3D |
| `N` | **Voies animées** : sphères pleines (excitateur) vs anneaux (inhibiteur) |
| `/` | Rechercher (français et anglais) |
| `📸 Capture` | Capture PNG du modèle 3D + légende dans le cahier élève (imprimable en PDF) |

---

## Architecture du projet (reproductibilité)

- [`pipeline/`](pipeline/) : scripts Python + Blender pour générer les maillages et coupes IRM depuis les atlas ouverts (`00_fetch.py` → `01_build.py` → `02_blender_ao.py` → `03_pack.py`).
- [`src/`](src/) : code source JavaScript/CSS modulaire (`brain3d.js`, `mri2d.js`, `schemas.js`, `pedagogie.js`, `content.js`, `content_extra.js`, `decoder.js`, `app.js`).
- [`docs/`](docs/) : application prête à l'emploi (`index.html`, `app.js`, `styles.css`, `data/brain.js`, `data/mri.js`).

Pour recompiler l'application après modification de `src/` :
```bash
npm install
npm run build
```

## Sources, licences & éthique

Voir [`DATA_LICENSES.md`](DATA_LICENSES.md). Outil exclusivement éducatif : ne constitue en aucun cas un avis ni un outil de diagnostic médical.
