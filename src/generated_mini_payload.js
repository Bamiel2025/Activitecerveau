// Fichier généré automatiquement par scripts/build_mini.js — ne pas modifier à la main
export const PUBLIC_ACTS = {
  "A1": {
    "id": "A1",
    "code": "A1",
    "niveau": "5e",
    "semaine": "Séance 1–2",
    "duree": "45 min",
    "titre": "Effort sportif et neuromythe des « 10 % du cerveau »",
    "type": "Démarche d'investigation · Esprit critique",
    "accroche": "Une vidéo virale sur TikTok prétend que « les champions utilisent plus que les 10 % habituels de leur cerveau ». Dans sa chronique Canal Détox, l'Inserm démonte cette idée reçue grâce à l'imagerie et au bilan énergétique.",
    "sourceAccroche": "Inserm Canal Détox ; sujet DNB Métropole 2018 (18GENSCMEAG3)",
    "problematique": "Comment les systèmes nerveux, cardiaque et respiratoire collaborent-ils lors d'un effort — et utilise-t-on vraiment « seulement 10 % » de notre cerveau ?",
    "obstacle": "Croire que seul le muscle travaille pendant le sport et que 90 % du cerveau reste « éteint » au repos.",
    "rupture": "Le cerveau représente ~2 % de la masse du corps mais consomme ~20 % de son énergie, et même un effort simple coordonne plusieurs régions cérébrales, le cœur et les poumons.",
    "vocab": [
      {
        "term": "Système nerveux",
        "def": "Ensemble formé par le cerveau, la moelle épinière et les nerfs qui coordonne le corps."
      },
      {
        "term": "Rythme cardiaque",
        "def": "Nombre de battements du cœur par minute (bpm), qui augmente à l’effort."
      },
      {
        "term": "Cortex moteur",
        "def": "Zone du lobe frontal qui déclenche les mouvements volontaires des muscles."
      },
      {
        "term": "Cervelet",
        "def": "Organe situé à l’arrière qui assure l’équilibre et la précision des gestes."
      }
    ],
    "docs": [
      {
        "num": "Doc. 1",
        "title": "Un organisme mobilisé pendant une course",
        "type": "tableau",
        "source": "DNB Métropole 2018 (18GENSCMEAG3) — Mesures sur tapis roulant",
        "text": "Pour alimenter les muscles en dioxygène et en glucose pendant l'effort, le système nerveux adapte automatiquement le cœur et les poumons.",
        "table": {
          "headers": [
            "Situation",
            "Rythme cardiaque",
            "Besoin musculaire"
          ],
          "rows": [
            [
              "Repos avant la course",
              "70 bpm",
              "Faible (apport de base)"
            ],
            [
              "Effort maximal sur tapis",
              "180 bpm",
              "Très élevé (O₂ + glucose)"
            ]
          ]
        },
        "legend": "Le cœur passe de 70 à 180 battements/min sous le contrôle des centres nerveux."
      },
      {
        "num": "Doc. 2",
        "title": "Le coût énergétique réel du cerveau",
        "type": "texte",
        "source": "Inserm Canal Détox & CNRS (neuroimagerie)",
        "text": "Le cerveau ne pèse qu'environ 2 % de la masse totale du corps (~1,35 kg chez l'adulte), mais il consomme à lui seul près de 20 % du dioxygène et du glucose utilisés par l'organisme, même lorsque nous sommes immobiles ou endormis. Si 90 % du cerveau était inutile, aucune lésion étendue n'aurait d'effet, ce que dément la médecine.",
        "legend": "Un organe aussi énergivore travaille en permanence en réseaux distribués."
      },
      {
        "num": "Doc. 3",
        "title": "Observer les régions actives lors d’un geste sportif",
        "type": "3d",
        "source": "Atlas 3D MNI152 (IRM & parcellation cérébrale)",
        "text": "Pendant une course ou un dribble, le cortex moteur (lobe frontal) envoie l'ordre aux muscles, le cortex somesthésique reçoit les appuis du pied et le cervelet ajuste l'équilibre en continu.",
        "legend": "Active les boutons 3D ci-dessus pour observer l'ensemble des zones sollicitées."
      }
    ],
    "voie1": {
      "consigne": "Un camarade soutient que courir « ne demande que des jambes » et qu'on « n'utilise que 10 % de son cerveau ». Rédige une réponse argumentée (6 à 8 lignes) mobilisant les Docs 1 à 3 pour corriger ces deux idées reçues.",
      "fields": [
        {
          "id": "a1_tache",
          "label": "Réponse scientifique argumentée (Docs 1, 2 et 3) :",
          "rows": 6,
          "placeholder": "Lors d'un effort, les muscles ont besoin... (citer 70 → 180 bpm, 2 % vs 20 %, et au moins deux zones cérébrales)..."
        }
      ]
    },
    "voie2": {
      "consigne": "Réponds dans l’ordre en t’appuyant sur un seul document à la fois :",
      "fields": [
        {
          "id": "a1_q1",
          "label": "Q1 (Doc. 1 · Relever) : Calculer l’augmentation du rythme cardiaque entre le repos et l’effort maximal, et indiquer pourquoi les muscles en ont besoin.",
          "rows": 2,
          "placeholder": "De 70 bpm à 180 bpm (+110 bpm), pour apporter plus de..."
        },
        {
          "id": "a1_q2",
          "label": "Q2 (Doc. 2 · Argumenter) : À l’aide de deux valeurs chiffrées, expliquer pourquoi l’affirmation « 90 % du cerveau est inactif » est fausse.",
          "rows": 2,
          "placeholder": "Le cerveau pèse environ 2 % du corps mais consomme 20 % de..."
        },
        {
          "id": "a1_q3",
          "label": "Q3 (Doc. 3 · Observer en 3D) : Citer deux structures cérébrales qui coopèrent pendant un mouvement sportif et leur rôle.",
          "rows": 2,
          "placeholder": "Le cortex moteur commande... et le cervelet assure..."
        }
      ]
    },
    "mdl": {
      "verbeAction": "Calculer · Argumenter · Citer",
      "marqueurs": [
        "donc",
        "car",
        "en effet",
        "en revanche"
      ],
      "structure": "Constat chiffré (Doc. 1/2) → Cause biologique (O₂/énergie/réseaux) → Réfutation du mythe."
    },
    "coupsDePouce": [
      {
        "niv": "Niveau 1 · Méthode",
        "txt": "Pour Q1, fais la soustraction : valeur à l’effort − valeur au repos. Pour Q2, cherche les deux pourcentages dans le texte du Doc. 2."
      },
      {
        "niv": "Niveau 2 · Indice",
        "txt": "Compare 2 % de la masse corporelle avec 20 % de la consommation en O₂ et glucose : c’est 10 fois supérieur à son poids !"
      },
      {
        "niv": "Niveau 3 · Notion",
        "txt": "Complète : « Pendant la course, le rythme cardiaque passe de ___ à ___ bpm pour nourrir ___. Le cerveau, qui pèse ___ % du corps mais consomme ___ % de l’énergie, mobilise ___ et ___ : le mythe des 10 % est donc faux. »"
      }
    ],
    "avantDeRendre": [
      "J'ai cité les valeurs exactes des Docs 1 et 2 (70 → 180 bpm ; 2 % et 20 %).",
      "J'ai nommé au moins deux régions observées en 3D (cortex moteur, cervelet).",
      "J'ai distingué croyance populaire (mythe des 10 %) et fait scientifique vérifié."
    ],
    "lsu": [
      "D4 · Exploiter des mesures (bpm)",
      "D1.3 · Argumenter contre une idée reçue",
      "D3 · Relier effort et besoins des organes"
    ]
  },
  "A2": {
    "id": "A2",
    "code": "A2",
    "niveau": "5e / 4e",
    "semaine": "Séance 3–4",
    "duree": "50 min",
    "titre": "Concerts, écouteurs : comment protéger son audition ?",
    "type": "Exploitation de données · Éducation à la santé",
    "accroche": "L'OMS alerte : plus d'un milliard de jeunes (12–35 ans) risquent une perte auditive prématurée à cause d'écouteurs réglés trop fort ou de concerts dépassant les seuils biologiques.",
    "sourceAccroche": "OMS ; DNB Amérique du Nord juin 2018 ; DNB Pro 2022 (22PROSCMEAG1)",
    "problematique": "Comment le cerveau transforme-t-il les sons perçus en audition — et à partir de quel seuil le bruit détruit-il irréversiblement l'oreille ?",
    "obstacle": "Penser que l'oreille « s'habitue » au volume élevé ou que les acouphènes finissent toujours par disparaître sans dégât.",
    "rupture": "L'oreille capte les vibrations grâce à des cellules ciliées qui ne se renouvellent pas ; une exposition excessive détruit ces capteurs et prive définitivement le cortex auditif d'une partie des fréquences.",
    "vocab": [
      {
        "term": "Récepteur sensoriel",
        "def": "Cellule spécialisée (ici cellules ciliées de l’oreille) qui capte un stimulus et crée un message nerveux."
      },
      {
        "term": "Cortex auditif",
        "def": "Zone du lobe temporal qui reçoit et interprète les messages nerveux des sons."
      },
      {
        "term": "Décibel (dB)",
        "def": "Unité mesurant l’intensité sonore ; le seuil de risque débute à 85 dB."
      },
      {
        "term": "Lésion irréversible",
        "def": "Destruction définitive de cellules ciliées qui ne sont pas remplacées."
      }
    ],
    "docs": [
      {
        "num": "Doc. 1",
        "title": "Du capteur sensoriel au cerveau",
        "type": "3d",
        "source": "Atlas 3D MNI152 — Aires sensorielles corticales",
        "text": "Chaque organe sensoriel envoie des messages nerveux spécifiques vers une région dédiée du cortex : le nerf auditif relie l'oreille au cortex auditif (lobe temporal), tandis que le nerf optique relie l'œil au cortex visuel (lobe occipital). Le cerveau intègre ensemble ces informations multiples.",
        "legend": "Compare sur le modèle 3D le cortex auditif (latéral temporal) et le cortex visuel (postérieur occipital)."
      },
      {
        "num": "Doc. 2",
        "title": "Échelle officielle des niveaux sonores",
        "type": "tableau",
        "source": "OMS & sujet DNB Pro 2022 (22PROSCMEAG1)",
        "text": "Le risque dépend à la fois du niveau sonore (en dB) et de la durée d'écoute : chaque augmentation de +3 dB double l'énergie sonore et divise par 2 la durée tolérable sans danger.",
        "table": {
          "headers": [
            "Niveau sonore",
            "Exemple courant",
            "Effet biologique"
          ],
          "rows": [
            [
              "60 dB",
              "Conversation calme",
              "Aucun danger"
            ],
            [
              "85 dB",
              "Trafic dense · Seuil d’alerte",
              "Seuil de risque si durée prolongée"
            ],
            [
              "105–110 dB",
              "Concert / écouteurs au max",
              "Danger grave en quelques minutes"
            ],
            [
              "≥ 120 dB",
              "Seuil de douleur",
              "Lésions irréversibles immédiates"
            ]
          ]
        },
        "legend": "Les écouteurs réglés au maximum atteignent souvent 100 à 110 dB."
      },
      {
        "num": "Doc. 3",
        "title": "Audiogramme d’un travailleur exposé au bruit (M. X, 60 ans)",
        "type": "observation",
        "source": "DNB Amérique du Nord juin 2018 — Témoin 60 ans vs M. X (chaudronnier)",
        "text": "Le seuil normal de perte auditive est inférieur à 20 dB. Chez un témoin de 60 ans non exposé au bruit fort, la perte à 1 000 Hz n'est que d'environ 5 dB. Chez M. X (exposé sans protection), l'audition est proche du témoin dans les graves (125–500 Hz), mais la perte atteint ~30 dB à 1 000 Hz et s'aggrave nettement dans les aigus (2 000–4 000 Hz) suite à la destruction des cellules ciliées.",
        "legend": "Ouvre le document interactif « Audition & Bruit » pour lire la courbe complète."
      }
    ],
    "voie1": {
      "consigne": "Tu rédiges un message de prévention pour l'entrée d'un festival lycéen (6 à 8 lignes). Explique le trajet de l'information sonore jusqu'au cerveau et justifie deux règles de protection à l'aide des seuils et de l'audiogramme de M. X.",
      "fields": [
        {
          "id": "a2_tache",
          "label": "Affiche argumentée de prévention auditive (Docs 1, 2 et 3) :",
          "rows": 6,
          "placeholder": "Les sons captés par l'oreille sont transmis... Au-dessus de 85 dB (et jusqu'à 110 dB en concert), les cellules ciliées..."
        }
      ]
    },
    "voie2": {
      "consigne": "Réponds étape par étape en exploitant chaque document :",
      "fields": [
        {
          "id": "a2_q1",
          "label": "Q1 (Doc. 1 · Localiser) : Nommer le lobe et la zone du cerveau qui reçoivent les messages nerveux auditifs, puis indiquer par quoi ils voyagent depuis l’oreille.",
          "rows": 2,
          "placeholder": "Ils voyagent par le nerf... jusqu’au cortex... situé dans le lobe..."
        },
        {
          "id": "a2_q2",
          "label": "Q2 (Doc. 2 · Relever & comparer) : Citer le seuil de risque et expliquer pourquoi écouter à 110 dB est bien plus dangereux qu’à 85 dB.",
          "rows": 2,
          "placeholder": "Le seuil de risque est 85 dB ; chaque +3 dB divise par 2..."
        },
        {
          "id": "a2_q3",
          "label": "Q3 (Doc. 3 · Interpréter) : Comparer la perte à 1 000 Hz de M. X et du témoin, puis expliquer pourquoi cette perte de M. X est définitive.",
          "rows": 2,
          "placeholder": "Le témoin perd ~5 dB contre ~30 dB pour M. X car les cellules ciliées..."
        }
      ]
    },
    "mdl": {
      "verbeAction": "Localiser · Comparer · Justifier",
      "marqueurs": [
        "tandis que",
        "par conséquent",
        "car",
        "notamment"
      ],
      "structure": "Trajet nerf → cortex auditif + Comparaison chiffrée témoin/M. X + Règle de prévention."
    },
    "coupsDePouce": [
      {
        "niv": "Niveau 1 · Méthode",
        "txt": "Pour Q3, compare toujours deux valeurs à la même fréquence (1 000 Hz) avant de conclure : valeur du témoin vs valeur de M. X."
      },
      {
        "niv": "Niveau 2 · Indice",
        "txt": "Seuil normal = < 20 dB de perte. À 1 000 Hz : témoin ≈ 5 dB (normal), M. X ≈ 30 dB (dépassé → surdité partielle dans les aigus)."
      },
      {
        "niv": "Niveau 3 · Notion",
        "txt": "L’oreille contient des cellules ciliées qui transforment le son en message nerveux vers le lobe temporal ; détruites au-delà de 85–120 dB, elles ne se renouvellent pas."
      }
    ],
    "avantDeRendre": [
      "J'ai nommé le nerf auditif et le cortex auditif (lobe temporal).",
      "J'ai cité les seuils 85 dB et 120 dB (et les valeurs 5 dB vs 30 dB à 1 000 Hz).",
      "J'ai proposé un geste concret : baisser le volume, faire des pauses ou porter des bouchons d'oreille."
    ],
    "lsu": [
      "D1.3 · Lire un graphique / tableau d’audiogramme",
      "D3 · Adopter un comportement responsable pour la santé"
    ]
  },
  "A3": {
    "id": "A3",
    "code": "A3",
    "niveau": "4e",
    "semaine": "Séance 5–6",
    "duree": "50 min",
    "titre": "Téléphone au volant : réflexe, commande volontaire et temps de réaction",
    "type": "Expérimentation · Sécurité routière",
    "accroche": "Selon la Sécurité routière, lire un SMS pendant ~5 secondes à 50 km/h revient à rouler 70 à 83 mètres « à l'aveugle ». Pourtant, chacun pense « freiner tout de suite » si un piéton traverse.",
    "sourceAccroche": "Sécurité routière France — Distracteurs au volant & alcool",
    "problematique": "Pourquoi aucun freinage n'est-il instantané devant un danger — et en quoi un mouvement volontaire diffère-t-il d'un réflexe ?",
    "obstacle": "Croire que le temps de réaction vaut 0 s (« j'ai de bons réflexes ») et confondre freinage volontaire et réflexe médullaire.",
    "rupture": "Tout message nerveux circule à vitesse finie de l'œil aux centres nerveux puis aux muscles ; un SMS ou l'alcool saturent le traitement cérébral, contrairement au réflexe court qui passe par la moelle épinière.",
    "vocab": [
      {
        "term": "Mouvement volontaire",
        "def": "Action décidée après perception : le message traverse les cortex visuel puis moteur (cerveau)."
      },
      {
        "term": "Réflexe",
        "def": "Réponse rapide et involontaire qui passe par la moelle épinière sans attendre l’analyse du cerveau."
      },
      {
        "term": "Moelle épinière",
        "def": "Centre nerveux logé dans la colonne vertébrale qui relaie les messages et commande les réflexes."
      },
      {
        "term": "Temps de réaction",
        "def": "Durée entre la perception d’un danger et le début de l’action musculaire (~1 s au volant)."
      }
    ],
    "docs": [
      {
        "num": "Doc. 1",
        "title": "Données de la Sécurité routière sur le temps de réaction",
        "type": "tableau",
        "source": "Sécurité routière France",
        "text": "Un conducteur reposé met en moyenne ~1 seconde pour réagir (distance parcourue avant même de toucher le frein : 15 m à 50 km/h, 24 m à 80 km/h). Les distracteurs allongent ce délai ou détournent le regard.",
        "table": {
          "headers": [
            "Situation au volant",
            "Impact mesuré",
            "Risque d’accident"
          ],
          "rows": [
            [
              "Conducteur sobre et attentif",
              "Temps moyen ~1 s (15 m à 50 km/h)",
              "Référence (×1)"
            ],
            [
              "Appel téléphonique",
              "Temps de réaction +46 %",
              "×3"
            ],
            [
              "Lire / écrire un SMS (~5 s)",
              "Temps +37 % · 70–83 m à l’aveugle",
              "×23"
            ],
            [
              "Alcoolémie positive",
              "Temps augmenté d’au moins +13 %",
              "Sur-risque majeur"
            ]
          ]
        },
        "legend": "Pendant les ~5 s d’un SMS à 50 km/h, aucun freinage ne peut même commencer."
      },
      {
        "num": "Doc. 2",
        "title": "Comparer deux trajets nerveux en classe",
        "type": "experience",
        "source": "Protocole classe (test de la règle / chronomètre visuel)",
        "text": "Pour un arrêt volontaire devant un feu rouge, le message part de l'œil, rejoint le cortex visuel (analyse), puis le cortex moteur (décision), descend par le tronc cérébral et la moelle épinière vers les nerfs moteurs du pied (~0,25 à 1 s). À l'inverse, retirer sa main d'un objet brûlant est un réflexe : le message va du capteur cutané à la moelle épinière, qui renvoie aussitôt l'ordre au muscle avant même la prise de conscience.",
        "legend": "Teste toi-même ton temps de réaction visuel dans le doc. « Réflexe » ci-dessus."
      },
      {
        "num": "Doc. 3",
        "title": "Un croisement gauche–droite dans le tronc cérébral",
        "type": "3d",
        "source": "Atlas 3D MNI152 — Commande controlatérale",
        "text": "Les fibres motrices qui partent du cortex moteur gauche croisent la ligne médiane au niveau du tronc cérébral pour commander les muscles du côté droit du corps (et inversement).",
        "legend": "Observe sur l’atlas 3D l’hémisphère moteur et son prolongement vers le tronc cérébral."
      }
    ],
    "voie1": {
      "consigne": "Lors d'un débat sur la sécurité à trottinette et en voiture, rédige une explication scientifique (6 à 8 lignes) comparant le trajet nerveux d'un réflexe et celui d'un freinage volontaire, et explique pourquoi le SMS multiplie le risque par 23.",
      "fields": [
        {
          "id": "a3_tache",
          "label": "Argumentaire scientifique & sécurité routière (Docs 1, 2 et 3) :",
          "rows": 6,
          "placeholder": "Contrairement au réflexe qui passe par la moelle épinière, freiner devant un piéton est un mouvement volontaire..."
        }
      ]
    },
    "voie2": {
      "consigne": "Suis le trajet de l’information document par document :",
      "fields": [
        {
          "id": "a3_q1",
          "label": "Q1 (Doc. 1 · Relever) : Comparer la distance parcourue avant freinage à 50 km/h avec un conducteur attentif (~1 s) puis en lisant un SMS (~5 s), et relever l’impact sur le risque.",
          "rows": 2,
          "placeholder": "À 50 km/h attentif : 15 m ; pendant un SMS : 70 à 83 m à l’aveugle, risque ×23..."
        },
        {
          "id": "a3_q2",
          "label": "Q2 (Doc. 2 · Schématiser en chaîne) : Citer dans l’ordre les 4 étapes du trajet nerveux d’un freinage volontaire devant un danger visuel.",
          "rows": 2,
          "placeholder": "Œil (capteur) → nerf optique → cortex visuel → cortex moteur → moelle épinière → nerf moteur → muscle."
        },
        {
          "id": "a3_q3",
          "label": "Q3 (Docs 2 & 3 · Comparer) : Indiquer la différence entre ce freinage volontaire et un réflexe de retrait de la main, et préciser l’effet du téléphone/alcool.",
          "rows": 2,
          "placeholder": "Le réflexe ne passe que par la moelle épinière ; le téléphone et l’alcool allongent le temps de traitement cérébral..."
        }
      ]
    },
    "mdl": {
      "verbeAction": "Comparer · Ordonner · Justifier",
      "marqueurs": [
        "tandis que",
        "au contraire",
        "puis",
        "par conséquent"
      ],
      "structure": "Chaîne orientée (Capteur → Centre → Muscle) + Contraste Réflexe vs Volontaire + Chiffres."
    },
    "coupsDePouce": [
      {
        "niv": "Niveau 1 · Méthode",
        "txt": "Pour Q2, suis la règle « Organe sensoriel → Nerf sensitif → Centre nerveux → Nerf moteur → Muscle effecteur »."
      },
      {
        "niv": "Niveau 2 · Indice",
        "txt": "Attention ! En voiture, freiner en voyant un piéton n’est PAS un réflexe : c’est un mouvement volontaire qui exige l’œil ET le cortex cérébral."
      },
      {
        "niv": "Niveau 3 · Notion",
        "txt": "Le SMS combine deux dangers : +37 % de temps de réaction ET 5 secondes sans regarder la route (70–83 m à 50 km/h, risque ×23)."
      }
    ],
    "avantDeRendre": [
      "J'ai distingué moelle épinière (réflexe) et cortex moteur (mouvement volontaire).",
      "J'ai cité les valeurs de la Sécurité routière (15 m vs 70–83 m, ×3, ×23, +13 % alcool).",
      "J'ai précisé le rôle des nerfs comme câbles conducteurs du message nerveux."
    ],
    "lsu": [
      "D4 · Exploiter des données statistiques",
      "D1.3 · Ordonner un trajet fonctionnel",
      "D3 · Comportements responsables"
    ]
  },
  "A4": {
    "id": "A4",
    "code": "A4",
    "niveau": "3e",
    "semaine": "Séance 7–8",
    "duree": "50 min",
    "titre": "Curare, anesthésie et synapse : comment communiquent les neurones ?",
    "type": "Histoire des sciences · Changement d’échelle",
    "accroche": "En 1856, le physiologiste Claude Bernard étudie le curare, poison de flèches paralysant en quelques secondes. Au même moment, Golgi et Cajal s'opposent : les neurones forment-ils un réseau continu ou des cellules séparées ?",
    "sourceAccroche": "Claude Bernard (1856) ; Prix Nobel 1906 (Golgi & Cajal) ; Lelivrescolaire.fr SVT 3e Docs 1, 5 & 7",
    "problematique": "Comment le message nerveux passe-t-il d'un neurone à un autre (ou à un muscle) — et comment des molécules comme le curare peuvent-elles le bloquer ?",
    "obstacle": "Imaginer les nerfs comme des câbles électriques continus où rien ne s'interpose d'une cellule à l'autre.",
    "rupture": "À l'échelle de ~20 nanomètres, les neurones sont séparés par une fente synaptique : la transmission est chimique (neurotransmetteurs + récepteurs), ce qui explique comment une molécule peut la bloquer ou la mimer.",
    "vocab": [
      {
        "term": "Neurone",
        "def": "Cellule spécialisée du système nerveux qui conduit et transmet les messages nerveux."
      },
      {
        "term": "Synapse",
        "def": "Zone de jonction (~20 nm) séparant deux neurones ou un neurone et une fibre musculaire."
      },
      {
        "term": "Neurotransmetteur",
        "def": "Messager chimique libéré dans la fente synaptique (ex. glutamate, GABA, dopamine)."
      },
      {
        "term": "Récepteur spécifique",
        "def": "Protéine de la cellule suivante sur laquelle se fixe le neurotransmetteur."
      }
    ],
    "docs": [
      {
        "num": "Doc. 1",
        "title": "Controverse Golgi vs Cajal et microscopie électronique",
        "type": "observation",
        "source": "Prix Nobel de médecine (25 oct. 1906) & MEB Lelivrescolaire.fr Doc. 5",
        "text": "Camillo Golgi pensait que les cellules nerveuses fusionnaient en un réseau continu ; Santiago Ramón y Cajal montra au microscope qu'il s'agissait de cellules indépendantes (neurones). La microscopie électronique a confirmé qu'une fente synaptique de ~20 nm sépare deux neurones, avec des vésicules côté émetteur.",
        "legend": "Le message électrique dans le neurone ne peut donc pas « sauter » directement la fente."
      },
      {
        "num": "Doc. 2",
        "title": "Expérience historique de Claude Bernard sur le curare",
        "type": "experience",
        "source": "Claude Bernard (1856) sur nerf sciatique + muscle de grenouille",
        "text": "On isole un muscle relié à son nerf sciatique chez une grenouille préparée, puis on applique du curare à trois endroits distincts avant de stimuler :",
        "table": {
          "headers": [
            "Zone mise en contact avec le curare",
            "Zone stimulée",
            "Contraction du muscle"
          ],
          "rows": [
            [
              "1. Nerf seul (muscle épargné)",
              "Nerf",
              "Oui (normale)"
            ],
            [
              "2. Muscle baigné (jonction atteinte)",
              "Nerf",
              "Non (paralysie)"
            ],
            [
              "3. Muscle baigné (jonction atteinte)",
              "Muscle directement",
              "Oui (normale)"
            ]
          ]
        },
        "legend": "Utilise le simulateur « Synapse » (Molécule X) pour visualiser l’action à 20 nm."
      },
      {
        "num": "Doc. 3",
        "title": "Excitation et inhibition dans les réseaux cérébraux",
        "type": "3d",
        "source": "Atlas 3D — Voies Glutamate & GABA",
        "text": "Dans le cerveau, selon le type de neurotransmetteur et son récepteur, une synapse peut activer le neurone suivant (ex. glutamate) ou le freiner (ex. GABA). De nombreux anesthésiques chirurgicaux ciblent précisément ces jonctions synaptiques pour interrompre la douleur ou le tonus musculaire.",
        "legend": "Compare les voies Glutamate et GABA en 3D pour passer de l’échelle macro à l’échelle cellulaire."
      }
    ],
    "voie1": {
      "consigne": "À l'aide des résultats de Claude Bernard (Doc. 2) et des données microscopiques (Docs 1 et 3), rédige un texte argumenté (6 à 8 lignes) expliquant où et comment agit le curare à l'échelle de la synapse.",
      "fields": [
        {
          "id": "a4_tache",
          "label": "Explication du mécanisme cellulaire et moléculaire (Docs 1, 2 et 3) :",
          "rows": 6,
          "placeholder": "Les essais 1 et 3 montrent que le nerf et le muscle restent intacts... Le curare agit donc à l’échelle de la synapse..."
        }
      ]
    },
    "voie2": {
      "consigne": "Passe de l’observation microscopique au raisonnement expérimental :",
      "fields": [
        {
          "id": "a4_q1",
          "label": "Q1 (Doc. 1 · Conclure) : Quelle observation prouve que l’hypothèse de Cajal (neurones séparés) l’emporte sur celle de Golgi ?",
          "rows": 2,
          "placeholder": "La microscopie électronique montre une fente synaptique de ~20 nm..."
        },
        {
          "id": "a4_q2",
          "label": "Q2 (Doc. 2 · Interpréter) : En comparant les trois essais de Claude Bernard, démontrer que le curare n’abîme ni le nerf ni le muscle mais bloque leur jonction.",
          "rows": 3,
          "placeholder": "Essai 1 : le nerf conduit toujours ; Essai 3 : le muscle se contracte ; Essai 2 : le passage nerf → muscle est bloqué..."
        },
        {
          "id": "a4_q3",
          "label": "Q3 (Docs 2 & 3 · Modéliser) : Expliquer le rôle du neurotransmetteur et du récepteur dans le blocage par le curare (molécule X du simulateur).",
          "rows": 2,
          "placeholder": "Le curare se fixe sur les récepteurs sans les activer, empêchant le neurotransmetteur..."
        }
      ]
    },
    "mdl": {
      "verbeAction": "Interpréter · Démontrer · Modéliser",
      "marqueurs": [
        "alors que",
        "donc",
        "cependant",
        "en revanche"
      ],
      "structure": "Analyse des 3 témoins/essais → Déduction du site d’action → Explication moléculaire (récepteur)."
    },
    "coupsDePouce": [
      {
        "niv": "Niveau 1 · Méthode",
        "txt": "Pour Q2, exploite chaque essai séparément : que vérifie l’essai 1 sur le nerf ? Que vérifie l’essai 3 sur le muscle ? Que reste-t-il entre les deux dans l’essai 2 ?"
      },
      {
        "niv": "Niveau 2 · Indice",
        "txt": "Si l’essai 1 contracte le muscle, le nerf n’est pas cassé. Si l’essai 3 contracte le muscle, le muscle n’est pas paralysé lui-même. Seule la synapse nerf–muscle est bloquée !"
      },
      {
        "niv": "Niveau 3 · Notion",
        "txt": "Complète : « Le neurone libère un ___ dans la ___ (~20 nm). Le curare occupe les ___ sans les ___, bloquant la transmission. »"
      }
    ],
    "avantDeRendre": [
      "J'ai utilisé le mot-clé « fente synaptique (~20 nm) » et « vésicules ».",
      "J'ai interprété les 3 essais de Claude Bernard sans en oublier un.",
      "J'ai expliqué la différence entre message électrique (dans le neurone) et message chimique (dans la synapse)."
    ],
    "lsu": [
      "D4 · Interpréter un protocole expérimental historique",
      "D5 · Situer l’évolution d’une théorie (Golgi/Cajal)",
      "D1.3 · Changer d’échelle (organe → molécule)"
    ]
  },
  "A5": {
    "id": "A5",
    "code": "A5",
    "niveau": "3e",
    "semaine": "Séance 9–10",
    "duree": "55 min",
    "titre": "Sommeil, smartphone le soir et mémoire au collège",
    "type": "Enquête nationale & démarche expérimentale",
    "accroche": "Dans son avis du 13 janvier 2026 relayé par Le Monde, l'ANSES alerte sur l'usage quotidien des réseaux sociaux par 58 % des 12–17 ans — au moment où l'enquête EnCLASS 2024 montre que plus d'un quart des collégiens accumule une dette de sommeil.",
    "sourceAccroche": "EnCLASS 2024 (OFDT / Santé publique France) ; ANSES 13 janv. 2026 / Le Monde ; Scoville & Milner (1957) ; Gais, Lucas & Born (2006)",
    "problematique": "Comment le manque de sommeil et l'usage tardif du smartphone perturbent-ils le fonctionnement cérébral et la consolidation des apprentissages ?",
    "obstacle": "Croire que dormir est une « perte de temps où le cerveau s'éteint » et que « la mémoire se trouve dans un seul tiroir ».",
    "rupture": "Le sommeil est actif : l'hippocampe et le cortex rejouent les connexions formées le jour (consolidation), tandis qu'écrans et dette de sommeil fragmentent ce tri ; la mémoire mobilise en réalité plusieurs circuits (hippocampe vs cervelet).",
    "vocab": [
      {
        "term": "Dette de sommeil",
        "def": "Déficit chronique en semaine révélé par plus de 2 h de rattrapage le week-end."
      },
      {
        "term": "Hippocampe",
        "def": "Structure profonde indispensable pour former les nouveaux souvenirs conscients (leçons, faits)."
      },
      {
        "term": "Consolidation mnésique",
        "def": "Stabilisation nocturne des réseaux de synapses reliant hippocampe et cortex."
      },
      {
        "term": "Plasticité cérébrale",
        "def": "Capacité des synapses et circuits cérébraux à se modifier durablement par apprentissage."
      }
    ],
    "docs": [
      {
        "num": "Doc. 1",
        "title": "État réel du sommeil des collégiens en France",
        "type": "tableau",
        "source": "Enquête nationale EnCLASS 2024 (OFDT / Santé publique France / EHESP)",
        "text": "Les besoins physiologiques d'un collégien se situent entre 8 h et 9 h par nuit en semaine. L'enquête EnCLASS 2024 révèle une érosion préoccupante :",
        "table": {
          "headers": [
            "Indicateur (collégiens en semaine)",
            "Mesure EnCLASS 2024"
          ],
          "rows": [
            [
              "Durée moyenne de sommeil (semaine)",
              "8 h 16 min"
            ],
            [
              "Élèves dormant moins de 7 h / nuit",
              "13,8 %"
            ],
            [
              "En dette de sommeil (> 2 h rattrapées le week-end)",
              "26,7 %"
            ],
            [
              "Fatigués presque tous les matins",
              "30,6 %"
            ]
          ]
        },
        "legend": "Plus d’un élève sur quatre manque chroniquement de sommeil pendant les semaines de cours."
      },
      {
        "num": "Doc. 2",
        "title": "Smartphones le soir : alerte ANSES (janvier 2026)",
        "type": "texte",
        "source": "ANSES, avis du 13 janvier 2026 & Le Monde",
        "text": "Chez les 12–17 ans, près de 90 % utilisent un smartphone chaque jour (42 % y passent 2 à 5 h/jour, et 9 % plus de 5 h/jour) et 58 % consultent les réseaux sociaux quotidiennement. Leur usage le soir retarde l'endormissement par excitation émotionnelle, notifications et lumière, dégradant ensuite attention, humeur et mémorisation.",
        "legend": "Retrouve la synthèse complète dans le doc. interactif « Sommeil & Écrans »."
      },
      {
        "num": "Doc. 3",
        "title": "Hippocampe, cervelet et preuve expérimentale du sommeil",
        "type": "experience",
        "source": "Scoville & Milner (1957, patient H.M.) ; Gais, Lucas & Born (2006, Learning & Memory)",
        "text": "Le patient H.M., privé de ses deux hippocampes, ne retenait aucun fait nouveau mais progressait encore en habileté motrice (dessin en miroir) grâce au cervelet et aux noyaux gris. De plus, Gais & Born (2006) ont montré sur deux groupes apprenant des paires de mots que le groupe dormant juste après l'apprentissage retient significativement plus de mots que le groupe resté éveillé sur la même durée, prouvant que le sommeil consolide activement l'hippocampe.",
        "legend": "Compare en 3D hippocampe (faits/leçons) et cervelet (gestes/automatismes)."
      }
    ],
    "voie1": {
      "consigne": "Lors d'un conseil de vie collégienne sur le bien-être, rédige un plaidoyer scientifique (6 à 8 lignes) expliquant pourquoi « couper le smartphone 1 h avant de dormir » protège la mémoire et la santé scolaire, en citant EnCLASS 2024, ANSES 2026 et le rôle de l'hippocampe.",
      "fields": [
        {
          "id": "a5_tache",
          "label": "Argumentaire scientifique complet (Docs 1, 2 et 3) :",
          "rows": 6,
          "placeholder": "D’après EnCLASS 2024, 26,7 % des collégiens sont en dette de sommeil... L’ANSES (2026) montre... Or l’hippocampe a besoin de sommeil pour..."
        }
      ]
    },
    "voie2": {
      "consigne": "Réponds précisément aux 3 questions ciblées :",
      "fields": [
        {
          "id": "a5_q1",
          "label": "Q1 (Doc. 1 · Relever) : Citer deux indicateurs chiffrés d’EnCLASS 2024 montrant l’ampleur du manque de sommeil au collège.",
          "rows": 2,
          "placeholder": "13,8 % dorment moins de 7 h, 26,7 % sont en dette de sommeil, 30,6 % se disent fatigués..."
        },
        {
          "id": "a5_q2",
          "label": "Q2 (Doc. 2 · Expliquer) : Citer les chiffres d’usage du smartphone chez les 12–17 ans et deux raisons pour lesquelles l’écran le soir nuit au sommeil.",
          "rows": 2,
          "placeholder": "58 % sur les réseaux sociaux/jour (42 % de 2 à 5 h) ; retarde l’endormissement par..."
        },
        {
          "id": "a5_q3",
          "label": "Q3 (Doc. 3 · Démontrer) : Expliquer ce que prouvent le cas H.M. et l’expérience de Gais & Born (2006) sur les organes de la mémoire et l’effet du sommeil.",
          "rows": 3,
          "placeholder": "H.M. prouve que l’hippocampe gère les faits nouveaux (vs cervelet pour les gestes) ; Gais & Born prouvent que dormir juste après apprendre..."
        }
      ]
    },
    "mdl": {
      "verbeAction": "Relever · Expliquer · Démontrer",
      "marqueurs": [
        "tout d’abord",
        "en effet",
        "de plus",
        "c’est pourquoi"
      ],
      "structure": "Constat épidémiologique → Facteur comportemental (écrans) → Preuve biologique (hippocampe/sommeil)."
    },
    "coupsDePouce": [
      {
        "niv": "Niveau 1 · Méthode",
        "txt": "Distingue bien deux types de données : un sondage (Docs 1 et 2 : décrit une fréquence) et une expérience contrôlée (Doc. 3 : prouve une cause)."
      },
      {
        "niv": "Niveau 2 · Indice",
        "txt": "H.M. échoue à retenir les mots/visages (sans hippocampe) mais réussit le dessin en miroir (cervelet intact) → la mémoire n’est pas localisée dans une seule zone !"
      },
      {
        "niv": "Niveau 3 · Notion",
        "txt": "Pendant le sommeil, les réseaux de synapses entre l’hippocampe et le cortex se réactivent et se renforcent (consolidation / plasticité cérébrale)."
      }
    ],
    "avantDeRendre": [
      "J'ai cité au moins deux chiffres exacts d'EnCLASS 2024 et de l'ANSES 2026.",
      "J'ai différencié le rôle de l'hippocampe et celui du cervelet.",
      "J'ai expliqué pourquoi le sommeil consolide activement les souvenirs (au lieu d'éteindre le cerveau)."
    ],
    "lsu": [
      "D4 · Distinguer enquête observationnelle et expérience",
      "D3 · Hygiène du système nerveux",
      "D1.3 · Argumenter avec des chiffres sourcés"
    ]
  },
  "A6": {
    "id": "A6",
    "code": "A6",
    "niveau": "3e",
    "semaine": "Séance 11–12",
    "duree": "55 min",
    "titre": "Puffs, nicotine et écrans : comprendre l’addiction par le cerveau",
    "type": "Santé publique · Neurobiologie des addictions",
    "accroche": "En février 2025, la France a adopté une loi interdisant les puffs jetables, après que l'enquête EnCLASS 2024 a alerté sur l'essor du vapotage (~46 % d'expérimentation au lycée) malgré le recul du tabac fumé. L'ANSES (janvier 2026) pointe aussi les boucles de récompense des écrans.",
    "sourceAccroche": "OFDT EnCLASS 2024 ; Loi n° 2025-175 du 24 fév. 2025 ; ANSES janv. 2026 ; Lelivrescolaire.fr Docs 4, 5 & 8",
    "problematique": "Comment la nicotine — ou certaines boucles de récompense numériques — détourne-t-elle le circuit cérébral normal jusqu'à installer une dépendance chez l'adolescent ?",
    "obstacle": "Croire que la dépendance n'est qu'un « manque de volonté » ou que la dopamine est « la molécule du bonheur simple ».",
    "rupture": "Les besoins vitaux libèrent naturellement de la dopamine dans le circuit ATV → noyau accumbens → préfrontal (apprentissage/motivation). La nicotine et les substances détournent ces synapses ; chez l'adolescent, le cortex préfrontal qui freine les impulsions est encore en maturation.",
    "vocab": [
      {
        "term": "Circuit de la récompense",
        "def": "Réseau reliant notamment l’ATV, le noyau accumbens et le cortex préfrontal, impliqué dans la motivation."
      },
      {
        "term": "Dopamine",
        "def": "Neurotransmetteur qui signale l’attente d’une récompense et renforce la répétition d’un comportement."
      },
      {
        "term": "Addiction",
        "def": "Perte de contrôle et besoin compulsif malgré la connaissance des risques pour la santé."
      },
      {
        "term": "Cortex préfrontal",
        "def": "Région frontale contrôlant le recul, la planification et le frein aux impulsions (maturation jusqu’à ~25 ans)."
      }
    ],
    "docs": [
      {
        "num": "Doc. 1",
        "title": "Du tabac aux puffs et réseaux : enjeux de santé publique",
        "type": "texte",
        "source": "OFDT EnCLASS 2024 · Loi n° 2025-175 (24 fév. 2025) · ANSES (13 janv. 2026)",
        "text": "Au collège, le tabac fumé recule nettement (7,7 % d'expérimentation ; 0,9 % d'usage quotidien selon EnCLASS 2024). En revanche, l'attrait des puffs jetables sucrées contenant souvent de la nicotine a poussé près de 46 % des lycéens à tester le vapotage, conduisant à l'interdiction légale des puffs en février 2025. Parallèlement, l'ANSES (2026) souligne que les mécanismes de scroll infini et récompenses imprévisibles captent fortement l'attention adolescente.",
        "legend": "Pourquoi un produit ou un usage peut-il créer une envie irrésistible de recommencer ?"
      },
      {
        "num": "Doc. 2",
        "title": "Libération de dopamine selon l’activité",
        "type": "graphique",
        "source": "Lelivrescolaire.fr SVT 3e (Doc. 8 — Unité arbitraire 0–100)",
        "text": "Mesure relative de la libération de dopamine dans le circuit de la récompense (en unité arbitraire sur 100) selon la situation vécue :",
        "table": {
          "headers": [
            "Situation testée",
            "Libération de dopamine (UA / 100)",
            "Rôle biologique / Risque"
          ],
          "rows": [
            [
              "Manger / Boire",
              "~88 UA / ~88 UA",
              "Survie de l’organisme"
            ],
            [
              "Obtenir une bonne note",
              "~52 UA",
              "Renforcement scolaire"
            ],
            [
              "Rédiger une punition",
              "~3 UA",
              "Évitement (désagréable)"
            ],
            [
              "Addiction à un jeu",
              "~82 UA",
              "Détournement au niveau d’un besoin vital"
            ]
          ]
        },
        "legend": "Visualise le graphique complet dans le document interactif « Récompense & Puffs »."
      },
      {
        "num": "Doc. 3",
        "title": "Action synaptique et vulnérabilité du cerveau adolescent",
        "type": "3d",
        "source": "Lelivrescolaire.fr Docs 4–5 ; Volkow et al. (neurobiologie des addictions)",
        "text": "À l'échelle cellulaire, la nicotine ou d'autres molécules psychoactives se fixent sur les récepteurs synaptiques et déclenchent une libération artificielle et brutale de dopamine entre l'ATV et le noyau accumbens. Répétée, cette surstimulation diminue la sensibilité basale des synapses (besoin d'augmenter les doses, malaise en manque), alors que le cortex préfrontal régulateur achève sa maturation vers 20–25 ans.",
        "legend": "Observe en 3D le trajet mésolimbique (ATV → accumbens) puis le cortex préfrontal."
      }
    ],
    "voie1": {
      "consigne": "En t'appuyant sur les 3 documents et l'atlas 3D, rédige une explication scientifique (6 à 8 lignes) expliquant pourquoi l'interdiction des puffs en 2025 repose sur des arguments biologiques précis liés aux synapses, à la dopamine et au cerveau adolescent.",
      "fields": [
        {
          "id": "a6_tache",
          "label": "Note scientifique sur la prévention des addictions (Docs 1, 2 et 3) :",
          "rows": 6,
          "placeholder": "Alors que le tabac fumé recule (7,7 % au collège), les puffs apportent de la nicotine... Or à l’échelle du circuit de la récompense..."
        }
      ]
    },
    "voie2": {
      "consigne": "Relie données de santé publique, graphique et mécanisme synaptique :",
      "fields": [
        {
          "id": "a6_q1",
          "label": "Q1 (Doc. 1 · Relever) : Comparer l’usage du tabac fumé au collège et du vapotage au lycée (EnCLASS 2024), et rappeler la décision de février 2025.",
          "rows": 2,
          "placeholder": "Au collège : 7,7 % expérimentation tabac (0,9 % quotidien) ; vapotage ~46 % au lycée → interdiction des puffs en fév. 2025..."
        },
        {
          "id": "a6_q2",
          "label": "Q2 (Doc. 2 · Comparer) : Comparer la dopamine libérée lors d’un besoin vital (manger/boire) à celle observée lors d’une addiction, et conclure sur le détournement du circuit.",
          "rows": 2,
          "placeholder": "Manger/boire (~88 UA) et l’addiction (~82 UA) produisent des pics très proches, bien au-dessus d’une bonne note (~52 UA)..."
        },
        {
          "id": "a6_q3",
          "label": "Q3 (Doc. 3 · Expliquer) : Décrire l’action de la nicotine sur les synapses dopaminergiques et expliquer pourquoi les adolescents sont plus vulnérables.",
          "rows": 2,
          "placeholder": "La nicotine déclenche un pic artificiel entre ATV et noyau accumbens... le cortex préfrontal n’est pas encore mature..."
        }
      ]
    },
    "mdl": {
      "verbeAction": "Comparer · Expliquer · Justifier",
      "marqueurs": [
        "alors que",
        "c’est pourquoi",
        "par conséquent",
        "de plus"
      ],
      "structure": "Données EnCLASS/Loi 2025 → Comparaison chiffrée Doc. 2 → Mécanisme synaptique + Préfrontal."
    },
    "coupsDePouce": [
      {
        "niv": "Niveau 1 · Méthode",
        "txt": "Dans Q2, cite les trois valeurs (88 UA, 52 UA, 82 UA) pour montrer ce que signifie « détourner un circuit utile à la survie »."
      },
      {
        "niv": "Niveau 2 · Indice",
        "txt": "Chez l’adolescent, l’accélérateur émotionnel/récompense (accumbens) répond très vite alors que le « frein » (cortex préfrontal) est encore en construction."
      },
      {
        "niv": "Niveau 3 · Notion",
        "txt": "La nicotine agit sur les récepteurs synaptiques : elle provoque une libération excessive de dopamine dans le noyau accumbens, puis une tolérance qui pousse à recommencer."
      }
    ],
    "avantDeRendre": [
      "J'ai nommé les structures clés : ATV, noyau accumbens, cortex préfrontal.",
      "J'ai cité les données vérifiées d'EnCLASS 2024 et les valeurs UA du Doc. 2.",
      "J'ai expliqué la dépendance par un mécanisme biologique (synapse/dopamine) et non par jugement moral."
    ],
    "lsu": [
      "D4 · Exploiter des données graphiques et épidémiologiques",
      "D3 · Prévention des addictions et santé publique"
    ]
  },
  "A7": {
    "id": "A7",
    "code": "A7",
    "niveau": "4e / 3e",
    "semaine": "Activité indépendante",
    "duree": "50 min",
    "titre": "Les conditions d’une bonne perception visuelle : aires V1 à V5 et intégration cérébrale",
    "type": "Démarche clinique · Intégration cérébrale",
    "accroche": "Après un accident cérébral (AVC), deux patients ont des yeux parfaitement intacts mais des troubles visuels différents : le patient A ne voit plus les couleurs, tandis que le patient B ne reconnaît plus les formes.",
    "sourceAccroche": "Exercice « Les conditions d’une bonne perception visuelle » ; D.F. Benson",
    "problematique": "Comment expliquer que des lésions cérébrales différentes provoquent des troubles différents de la vision pour comprendre comment le cerveau traite les informations visuelles ?",
    "obstacle": "Croire que seuls les yeux suffisent pour voir, ou qu’une seule zone du cerveau fabrique toute l’image.",
    "rupture": "Étudier les effets de lésions localisées du cerveau permet de comprendre comment différentes zones participent à la vision.",
    "vocab": [
      {
        "term": "Cortex visuel (V1–V5)",
        "def": "Zones à l’arrière du cerveau impliquées dans la vision."
      },
      {
        "term": "Lésion cérébrale",
        "def": "Atteinte d’une zone du cerveau perturbant une fonction précise."
      },
      {
        "term": "Spécialisation",
        "def": "Chaque aire visuelle traite un aspect précis de l’image."
      },
      {
        "term": "Intégration cérébrale",
        "def": "Mise en relation des messages de plusieurs aires du cerveau."
      }
    ],
    "docs": [
      {
        "num": "Doc. 1",
        "title": "Dessins du patient A",
        "type": "observation",
        "source": "Exercice (Doc. 1)",
        "text": "Le patient A (yeux sains) dessine une pomme rouge et des feuilles vertes : les contours sont corrects mais les couleurs sont perdues."
      },
      {
        "num": "Doc. 2",
        "title": "Test des formes du patient B",
        "type": "tableau",
        "source": "D.F. Benson, Archives of Neurology (Doc. 2)",
        "text": "Le patient B (yeux sains) doit barrer sur chaque ligne la figure de même forme que le modèle : 0 réussite sur 4.",
        "table": {
          "headers": [
            "Modèle",
            "Choix du patient B",
            "Bilan"
          ],
          "rows": [
            [
              "1 · Triangle blanc",
              "Disque plein noir",
              "Erreur"
            ],
            [
              "2 · Trapèze noir",
              "Triangle noir",
              "Erreur"
            ],
            [
              "3 · Lettre X",
              "Cercle barré Ø",
              "Erreur"
            ],
            [
              "4 · Clé noire",
              "Épingle à nourrice",
              "Erreur"
            ]
          ]
        }
      },
      {
        "num": "Doc. 3",
        "title": "Lésions A/B et aires V1–V5 (Modèle 3D)",
        "type": "3d",
        "source": "Documents 3 & 4 · Modèle 3D",
        "text": "Compare la position des lésions A et B avec la carte des aires visuelles V1 à V5 sur les schémas et le modèle 3D."
      }
    ],
    "voie1": {
      "consigne": "À partir des documents et du modèle 3D, explique comment les cas des patients A et B permettent de comprendre comment le cerveau traite les informations visuelles pour assurer une vision correcte.",
      "fields": [
        {
          "id": "a7_tache",
          "label": "Ta réponse argumentée :",
          "rows": 6,
          "placeholder": "Écris ta réponse ici..."
        }
      ]
    },
    "voie2": {
      "consigne": "Réponds aux 3 questions à l’aide des documents, du simulateur et du modèle 3D :",
      "fields": [
        {
          "id": "a7_q1",
          "label": "Q1 (Docs 1 & 2) : Compare les troubles des patients A et B. Que montrent-ils sur le traitement de la vision par le cerveau ?",
          "rows": 2,
          "placeholder": "Écris ta réponse ici..."
        },
        {
          "id": "a7_q2",
          "label": "Q2 (Docs 3 & 4 / 3D) : Identifie l’aire visuelle lésée chez le patient A et chez le patient B, puis indique le rôle de chacune.",
          "rows": 2,
          "placeholder": "Écris ta réponse ici..."
        },
        {
          "id": "a7_q3",
          "label": "Q3 (Synthèse) : Explique pourquoi les différentes aires visuelles doivent communiquer entre elles (intégration) pour permettre une vision correcte.",
          "rows": 3,
          "placeholder": "Écris ta réponse ici..."
        }
      ]
    },
    "mdl": {
      "verbeAction": "Comparer · Identifier · Expliquer",
      "marqueurs": [
        "tandis que",
        "donc",
        "en effet",
        "c’est pourquoi"
      ],
      "structure": "1. Comparer les troubles (A et B) → 2. Relier chaque lésion à une aire → 3. Expliquer la coopération des aires"
    },
    "coupsDePouce": [
      {
        "niv": "Niveau 1 · Méthode",
        "txt": "Que réussit et que rate chaque patient dans les documents 1 et 2 ?"
      },
      {
        "niv": "Niveau 2 · Indice",
        "txt": "Superpose l’emplacement des lésions A et B (Doc. 3) avec la carte des aires V1 à V5 (Doc. 4 ou Modèle 3D)."
      },
      {
        "niv": "Niveau 3 · Notion",
        "txt": "Chaque aire traite une partie de l’image (formes, couleurs, mouvement). Que se passe-t-il si elles ne communiquent pas entre elles ?"
      }
    ],
    "avantDeRendre": [
      "J'ai comparé ce que voient le patient A et le patient B.",
      "J'ai relié la lésion de chaque patient à une aire visuelle précise (V1 à V5).",
      "J'ai expliqué la nécessité d'une intégration entre les aires visuelles."
    ],
    "lsu": [
      "D4.2 · Mettre en relation des documents (symptômes ↔ lésions ↔ carte V1–V5)",
      "D1.3 · Expliquer un mécanisme d’intégration cérébrale"
    ]
  },
  "A8": {
    "id": "A8",
    "code": "Activité 8",
    "niveau": "4e / 3e",
    "semaine": "Séquence Système nerveux & Santé",
    "duree": "50 min",
    "titre": "Effets et modes d'action des drogues (alcool, cannabis, cocaïne) sur le système nerveux",
    "type": "Démarche explicative · Perturbation synaptique",
    "accroche": "Alcool, cannabis, cocaïne, héroïne ou ecstasy modifient rapidement les perceptions, l'attention, la mémoire et le comportement du consommateur. Tous agissent au cœur des zones de jonction entre neurones : les synapses.",
    "sourceAccroche": "Observation MET (× 10 000) de zone de jonction synaptique & Tableau des modes d’action (Docs 1–3)",
    "problematique": "Comment expliquer que différentes drogues (alcool, cannabis, cocaïne...) provoquent des troubles du système nerveux en perturbant la transmission du message nerveux au niveau des synapses ?",
    "obstacle": "Penser que les drogues « détruisent physiquement » instantanément tous les nerfs, ou confondre l'extrémité présynaptique (neurones A/B à vésicules) avec le corps cellulaire postsynaptique (neurone C).",
    "rupture": "Au microscope électronique, la transmission repose sur la libération de messagers chimiques contenus dans des vésicules des neurones A et B. Chaque drogue perturbe précisément une étape de ce transfert chimique.",
    "vocab": [
      {
        "term": "Zone de jonction (Synapse)",
        "def": "Espace étroit (~20 nm) séparant la terminaison d’un neurone (A ou B) du corps cellulaire du neurone suivant (C)."
      },
      {
        "term": "Vésicules synaptiques",
        "def": "Petits éléments circulaires situés dans les terminaisons des neurones A et B, contenant les messagers chimiques (neurotransmetteurs)."
      },
      {
        "term": "Substance déversée (Neurotransmetteur)",
        "def": "Molécule libérée par les vésicules dans l’espace synaptique et qui vient se fixer sur la membrane du neurone C."
      },
      {
        "term": "Dépendance & troubles nerveux",
        "def": "Modification du fonctionnement normal des réseaux neuronaux (euphorie, troubles de l’attention, de la mémoire, hallucinations, dépendance)."
      }
    ],
    "docs": [
      {
        "num": "Doc. 1",
        "title": "Zone de jonction entre les neurones A et B et le neurone C (MET × 10 000)",
        "type": "observation",
        "source": "Microscopie électronique à transmission (vue en coupe longitudinale)",
        "text": "Le cliché montre deux terminaisons d'axone (neurones A et B) en contact étroit avec le corps cellulaire d'un neurone C. En fort grossissement, avant la transmission du message (1), la terminaison B contient de nombreuses vésicules circulaires fermées, alors que le neurone C n'en contient pas et qu'un espace clair sépare les deux membranes. Pendant la transmission (2), certaines vésicules s'ouvrent contre la membrane et déversent leur contenu dans l'espace de la zone de jonction.",
        "legend": "Avant transmission : vésicules stockées dans A/B · Pendant transmission : libération dans l'espace synaptique."
      },
      {
        "num": "Doc. 2",
        "title": "Mode d'action des drogues et de l'alcool au niveau synaptique",
        "type": "tableau",
        "source": "Tableau de synthèse des mécanismes synaptiques",
        "text": "Chaque substance chimique perturbe à sa manière la transmission du message nerveux au niveau de la zone de jonction :",
        "table": {
          "headers": [
            "Drogues",
            "Modes d'action sur la synapse"
          ],
          "rows": [
            [
              "Cannabis et héroïne",
              "Se fixent sur la membrane des neurones A ou B et empêchent la majorité des vésicules de déverser les substances qu'elles contiennent dans l'espace de la zone de jonction."
            ],
            [
              "Cocaïne et ecstasy",
              "Maintiennent la substance déversée par les vésicules du neurone A ou B dans l'espace de la zone de jonction (pas d'élimination du messager)."
            ],
            [
              "Alcool",
              "Empêche la substance déversée par les vésicules d'agir sur la membrane du neurone C (blocage des récepteurs du neurone C)."
            ],
            [
              "Amphétamines",
              "Pénètrent dans les vésicules du neurone A ou B, qui se vident alors de leur contenu dans l'espace de la zone de jonction ; la substance déversée s'accumule dans l'espace."
            ]
          ]
        },
        "legend": "Trois lieux d'action distincts : extrémité des neurones A/B, espace de la zone de jonction, ou membrane du neurone C."
      },
      {
        "num": "Doc. 3",
        "title": "Effets ressentis par le consommateur et lieux d’action",
        "type": "comparaison",
        "source": "Atelier clinique & bilan anatomique (neurones A, B et C)",
        "text": "Le cannabis provoque euphorie légère, relaxation, amplification sensorielle mais aussi agitation, troubles de l'attention (apathie, somnolence), de la motivation, de la mémorisation et donc de l'apprentissage. L'héroïne déclenche euphorie, hallucinations, comportement compulsif et forte dépendance (dépression et douleurs au sevrage). Cannabis et héroïne se fixent sur la membrane des neurones A ou B ; cocaïne et ecstasy agissent dans l'espace synaptique ; l'alcool bloque la membrane du neurone C.",
        "legend": "Lieu 1 : membrane A/B · Lieu 2 : espace synaptique · Lieu 3 : membrane du neurone C."
      },
      {
        "num": "Doc. 4",
        "title": "Modèle 3D des circuits cérébraux ciblés par les drogues",
        "type": "3d",
        "source": "Atlas cérébral 3D · Circuits Dopamine, Glutamate/GABA, Hippocampe & Préfrontal",
        "text": "Observe dans l'onglet Modèle 3D les circuits profonds où s'exercent ces perturbations synaptiques : la voie de la dopamine (ATV → noyau accumbens), les voies excitatrice/inhibitrice (Glutamate / GABA), l'hippocampe (mémoire) et le cervelet (équilibre et coordination perturbés par l'alcool).",
        "legend": "Cliquer sur « Explorer en 3D » pour visualiser les régions touchées."
      }
    ],
    "voie1": {
      "titre": "Voie 1 · Tâche complexe (Synthèse scientifique)",
      "consigne": "Rédige un texte argumenté expliquant d'abord comment se transmet un message nerveux au niveau de la zone de jonction entre les neurones B et C (Doc. 1), puis comment les différentes drogues (cannabis/héroïne, cocaïne/ecstasy, alcool, amphétamines) perturbent cette transmission à des endroits précis (Doc. 2 et 3) et provoquent des troubles nerveux.",
      "fields": [
        {
          "id": "a8_tache",
          "label": "Votre explication complète (transmission synaptique + modes et lieux d’action des drogues)",
          "rows": 6,
          "placeholder": "Écris ta réponse ici..."
        }
      ]
    },
    "voie2": {
      "titre": "Voie 2 · Parcours guidé (3 étapes)",
      "consigne": "Observe les documents et manipule le simulateur de synapse, puis réponds aux 3 questions.",
      "fields": [
        {
          "id": "a8_q1",
          "label": "Q1 (Doc. 1 et 3) — Comparer le contenu des neurones B et C avant et pendant la transmission, et relever les principaux troubles nerveux liés aux drogues.",
          "rows": 3,
          "placeholder": "Écris ta réponse ici..."
        },
        {
          "id": "a8_q2",
          "label": "Q2 (Doc. 1) — Expliquer comment se déroule la transmission d’un message nerveux au niveau de la zone de jonction (devenir des éléments circulaires).",
          "rows": 3,
          "placeholder": "Écris ta réponse ici..."
        },
        {
          "id": "a8_q3",
          "label": "Q3 (Doc. 2 et 3) — En déduire comment et à quel endroit précis chaque drogue (cannabis/héroïne, cocaïne/ecstasy, alcool, amphétamines) perturbe la transmission.",
          "rows": 4,
          "placeholder": "Écris ta réponse ici..."
        }
      ]
    },
    "mdl": {
      "verbeAction": "Comparer · Expliquer · Déduire",
      "marqueurs": [
        "avant / pendant",
        "alors que",
        "donc",
        "tandis que",
        "par conséquent"
      ],
      "structure": "1. Différences neurones B vs C → 2. Libération des vésicules dans la synapse → 3. Perturbation ciblée par chaque drogue (lieu + effet)"
    },
    "coupsDePouce": [
      {
        "niv": "Niveau 1 · Observation (Q1)",
        "txt": "Regarde les petits cercles (vésicules) dans le cliché MET : sont-ils dans le neurone B ou dans le neurone C ? Que change-t-il au niveau de la membrane entre le cliché 1 et le cliché 2 ?"
      },
      {
        "niv": "Niveau 2 · Mécanisme (Q2)",
        "txt": "Pendant la transmission, les vésicules du neurone B s’ouvrent et libèrent une substance chimique dans l’espace qui le sépare du neurone C."
      },
      {
        "niv": "Niveau 3 · Lieux d’action (Q3)",
        "txt": "Classe les drogues selon le schéma du Doc. 3 : quelles drogues agissent sur la membrane A/B ? Dans l’espace synaptique ? Sur la membrane du neurone C ?"
      }
    ],
    "avantDeRendre": [
      "J'ai comparé le contenu du neurone B (présence de vésicules) et du neurone C (absence de vésicules) avant et pendant la transmission.",
      "J'ai expliqué le devenir des vésicules (ouverture et libération du messager chimique dans l'espace de la zone de jonction).",
      "J'ai précisé le mode et le lieu d'action du cannabis/héroïne, de la cocaïne/ecstasy, de l'alcool et des amphétamines."
    ],
    "lsu": [
      "D4.2 · Comparer des électronographies et mettre en relation mode et lieu d’action",
      "D4.1 · Modéliser la transmission chimique synaptique et sa perturbation"
    ]
  }
};
export const LOCKED_B64 = {
  "A1": "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",
  "A2": "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",
  "A3": "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",
  "A4": "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",
  "A5": "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",
  "A6": "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",
  "A7": "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",
  "A8": "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"
};
