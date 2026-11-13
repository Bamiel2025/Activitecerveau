// Séquence spiralaire Cycle 4 — Système nerveux, cerveau & santé
// Conforme aux programmes SVT Cycle 4 et aux repères didactiques svt-activite-mdl v3 :
// ancrages contemporains datés et sourcés, sobriété cognitive (3 docs, 1 question/doc),
// double parcours (Tâche complexe / Parcours guidé), coups de pouce N1/N2/N3,
// maîtrise de la langue (MDL), corrigé détaillé, barème et grille LSU 4 niveaux.

export const PROGRAMME_SPIRALAIRE = {
  intro: "Cette application articule l'exploration 3D réelle (IRM MNI152 + parcellation corticale/sous-corticale) avec 6 activités progressives de Cycle 4 et 1 sujet type DNB (10 pts), ancrés dans des sources contemporaines et historiques vérifiées.",
  niveaux: [
    {
      niveau: '5e (Début de cycle)',
      place: 'A1 · Effort & 10 % / A2 · Audition',
      attendus: "Relier effort musculaire et adaptations cardiaque, respiratoire et nerveuse. Découvrir le rôle intégrateur du cerveau (lobes, cervelet) et la prévention auditive, sans développer l'échelle cellulaire.",
    },
    {
      niveau: '4e (Milieu de cycle)',
      place: 'A2 · Intégration / A3 · Réflexe & route',
      attendus: "Distinguer mouvement volontaire et réflexe médullaire, localiser les voies sensorielles et motrices (controlatéralité), expliquer le temps de réaction et ses perturbations (téléphone, alcool).",
    },
    {
      niveau: '3e (Fin de cycle)',
      place: 'A4 · Synapse / A5 · Sommeil / A6 · Puffs & DNB 3',
      attendus: "Expliquer le message nerveux à l'échelle cellulaire et moléculaire (neurone, synapse, neurotransmetteurs), la plasticité (sommeil/mémoire) et les mécanismes des conduites addictives.",
    },
  ],
  gardefous: [
    "Données authentiques uniquement : chaque chiffre cité provient de sources nommées et datées (Inserm, OMS, ANSES, EnCLASS/OFDT, Sécurité routière, DNB officiels, expériences historiques).",
    "Sobriété cognitive : 3 documents maximum par activité, 4 à 5 mots de vocabulaire essentiels, une question ciblée par document.",
    "Distinction faits scientifiques vs croyances/neuromythes (« utiliser 10 % du cerveau », « corrélation = causalité », « l'oreille s'habitue au volume fort »).",
  ],
};

export const ACTIVITIES = [
  // =========================================================================
  // A1 — 5e : Sport, effort musculaire et neuromythe des 10 %
  // =========================================================================
  {
    id: 'A1',
    code: 'A1',
    niveau: '5e',
    semaine: 'Séance 1–2',
    duree: '45 min',
    titre: 'Effort sportif et neuromythe des « 10 % du cerveau »',
    type: "Démarche d'investigation · Esprit critique",
    accroche: "Une vidéo virale sur TikTok prétend que « les champions utilisent plus que les 10 % habituels de leur cerveau ». Dans sa chronique Canal Détox, l'Inserm démonte cette idée reçue grâce à l'imagerie et au bilan énergétique.",
    sourceAccroche: 'Inserm Canal Détox ; sujet DNB Métropole 2018 (18GENSCMEAG3)',
    problematique: "Comment les systèmes nerveux, cardiaque et respiratoire collaborent-ils lors d'un effort — et utilise-t-on vraiment « seulement 10 % » de notre cerveau ?",
    obstacle: "Croire que seul le muscle travaille pendant le sport et que 90 % du cerveau reste « éteint » au repos.",
    rupture: "Le cerveau représente ~2 % de la masse du corps mais consomme ~20 % de son énergie, et même un effort simple coordonne plusieurs régions cérébrales, le cœur et les poumons.",
    vocab: [
      { term: 'Système nerveux', def: 'Ensemble formé par le cerveau, la moelle épinière et les nerfs qui coordonne le corps.' },
      { term: 'Rythme cardiaque', def: 'Nombre de battements du cœur par minute (bpm), qui augmente à l’effort.' },
      { term: 'Cortex moteur', def: 'Zone du lobe frontal qui déclenche les mouvements volontaires des muscles.' },
      { term: 'Cervelet', def: 'Organe situé à l’arrière qui assure l’équilibre et la précision des gestes.' },
    ],
    scenario3d: [
      { label: '1. Réseau somatomoteur (bouger & sentir)', action: { colorMode: 'networks', network: 2, view: 'lat_L', deep: false } },
      { label: '2. Isoler le cervelet (équilibre & posture)', action: { isolate: 'cervelet', view: 'post', deep: false } },
      { label: '3. Coupe IRM réelle + cortex moteur', action: { isolate: 'moteur', view: 'mri_34', mri: { open: true, axis: 'sag', sliceMm: -32, clip: true, overlay: true } } },
    ],
    docs: [
      {
        num: 'Doc. 1',
        title: 'Un organisme mobilisé pendant une course',
        type: 'tableau',
        source: 'DNB Métropole 2018 (18GENSCMEAG3) — Mesures sur tapis roulant',
        text: "Pour alimenter les muscles en dioxygène et en glucose pendant l'effort, le système nerveux adapte automatiquement le cœur et les poumons.",
        table: {
          headers: ['Situation', 'Rythme cardiaque', 'Besoin musculaire'],
          rows: [
            ['Repos avant la course', '70 bpm', 'Faible (apport de base)'],
            ['Effort maximal sur tapis', '180 bpm', 'Très élevé (O₂ + glucose)'],
          ],
        },
        legend: 'Le cœur passe de 70 à 180 battements/min sous le contrôle des centres nerveux.',
      },
      {
        num: 'Doc. 2',
        title: 'Le coût énergétique réel du cerveau',
        type: 'texte',
        source: 'Inserm Canal Détox & CNRS (neuroimagerie)',
        text: "Le cerveau ne pèse qu'environ 2 % de la masse totale du corps (~1,35 kg chez l'adulte), mais il consomme à lui seul près de 20 % du dioxygène et du glucose utilisés par l'organisme, même lorsque nous sommes immobiles ou endormis. Si 90 % du cerveau était inutile, aucune lésion étendue n'aurait d'effet, ce que dément la médecine.",
        legend: 'Un organe aussi énergivore travaille en permanence en réseaux distribués.',
      },
      {
        num: 'Doc. 3',
        title: 'Observer les régions actives lors d’un geste sportif',
        type: '3d',
        source: 'Atlas 3D MNI152 (IRM & parcellation cérébrale)',
        text: "Pendant une course ou un dribble, le cortex moteur (lobe frontal) envoie l'ordre aux muscles, le cortex somesthésique reçoit les appuis du pied et le cervelet ajuste l'équilibre en continu.",
        legend: "Active les boutons 3D ci-dessus pour observer l'ensemble des zones sollicitées.",
      },
    ],
    voie1: {
      consigne: "Un camarade soutient que courir « ne demande que des jambes » et qu'on « n'utilise que 10 % de son cerveau ». Rédige une réponse argumentée (6 à 8 lignes) mobilisant les Docs 1 à 3 pour corriger ces deux idées reçues.",
      fields: [
        { id: 'a1_tache', label: 'Réponse scientifique argumentée (Docs 1, 2 et 3) :', rows: 6, placeholder: "Lors d'un effort, les muscles ont besoin... (citer 70 → 180 bpm, 2 % vs 20 %, et au moins deux zones cérébrales)..." },
      ],
    },
    voie2: {
      consigne: 'Réponds dans l’ordre en t’appuyant sur un seul document à la fois :',
      fields: [
        { id: 'a1_q1', label: 'Q1 (Doc. 1 · Relever) : Calculer l’augmentation du rythme cardiaque entre le repos et l’effort maximal, et indiquer pourquoi les muscles en ont besoin.', rows: 2, placeholder: 'De 70 bpm à 180 bpm (+110 bpm), pour apporter plus de...' },
        { id: 'a1_q2', label: 'Q2 (Doc. 2 · Argumenter) : À l’aide de deux valeurs chiffrées, expliquer pourquoi l’affirmation « 90 % du cerveau est inactif » est fausse.', rows: 2, placeholder: 'Le cerveau pèse environ 2 % du corps mais consomme 20 % de...' },
        { id: 'a1_q3', label: 'Q3 (Doc. 3 · Observer en 3D) : Citer deux structures cérébrales qui coopèrent pendant un mouvement sportif et leur rôle.', rows: 2, placeholder: 'Le cortex moteur commande... et le cervelet assure...' },
      ],
    },
    mdl: {
      verbeAction: 'Calculer · Argumenter · Citer',
      marqueurs: ['donc', 'car', 'en effet', 'en revanche'],
      structure: 'Constat chiffré (Doc. 1/2) → Cause biologique (O₂/énergie/réseaux) → Réfutation du mythe.',
    },
    coupsDePouce: [
      { niv: 'Niveau 1 · Méthode', txt: 'Pour Q1, fais la soustraction : valeur à l’effort − valeur au repos. Pour Q2, cherche les deux pourcentages dans le texte du Doc. 2.' },
      { niv: 'Niveau 2 · Indice', txt: 'Compare 2 % de la masse corporelle avec 20 % de la consommation en O₂ et glucose : c’est 10 fois supérieur à son poids !' },
      { niv: 'Niveau 3 · Notion', txt: 'Complète : « Pendant la course, le rythme cardiaque passe de ___ à ___ bpm pour nourrir ___. Le cerveau, qui pèse ___ % du corps mais consomme ___ % de l’énergie, mobilise ___ et ___ : le mythe des 10 % est donc faux. »' },
    ],
    avantDeRendre: [
      "J'ai cité les valeurs exactes des Docs 1 et 2 (70 → 180 bpm ; 2 % et 20 %).",
      "J'ai nommé au moins deux régions observées en 3D (cortex moteur, cervelet).",
      "J'ai distingué croyance populaire (mythe des 10 %) et fait scientifique vérifié.",
    ],
    traceEcrite: "Lors d'un effort musculaire, les rythmes cardiaque (ex. 70 → 180 bpm) et respiratoire augmentent sous contrôle nerveux pour approvisionner les muscles en dioxygène et nutriments. Le mythe des « 10 % du cerveau » est faux : pesant ~2 % du corps, le cerveau consomme ~20 % de l'énergie totale et coordonne le geste via plusieurs réseaux (cortex moteur, aires sensorielles, cervelet).",
    notions: ['Effort musculaire', 'Systèmes nerveux, cardiaque et respiratoire', 'Réseaux cérébraux', 'Fait scientifique vs neuromythe'],
    lsu: ['D4 · Exploiter des mesures (bpm)', 'D1.3 · Argumenter contre une idée reçue', 'D3 · Relier effort et besoins des organes'],
    fds: "Faire des sciences : distinguer un neuromythe viral d'un fait mesuré par bilan énergétique et imagerie.",
    prof: {
      corrige: [
        "Q1 : Le rythme cardiaque passe de 70 bpm à 180 bpm (+110 bpm, soit ×2,57). Cette accélération augmente le débit sanguin pour apporter davantage de dioxygène (O₂) et de glucose aux muscles actifs.",
        "Q2 : Le cerveau ne représente que ~2 % de la masse corporelle mais consomme ~20 % du dioxygène et du glucose totaux : il fonctionne en permanence en réseaux (d'ailleurs toute lésion cérébrale étendue entraîne des troubles observables).",
        "Q3 : Le cortex moteur (lobe frontal) déclenche la commande volontaire vers les muscles, tandis que le cervelet régule l'équilibre et la précision du geste (avec les aires sensorielles pour ajuster l'appui).",
      ],
      bareme: "Q1 : 3 pts (relevé chiffré 1,5 + besoin O₂/glucose 1,5) · Q2 : 3,5 pts (2 % vs 20 % = 2 + réfutation 1,5) · Q3 : 2,5 pts (2 structures et rôles) · MDL & soin : 1 pt = 10 pts.",
      erreursFrequentes: [
        "Oublier le dioxygène/glucose et dire seulement « le cœur bat plus vite parce qu'on court ».",
        "Confondre l'utilisation simultanée (par réseaux) et la capacité maximale instantanée.",
      ],
      lsu: {
        MI: "Relève un chiffre mais n'explique pas le lien muscle–sang–cerveau.",
        MF: "Identifie l'augmentation cardiaque (70 → 180 bpm) et cite une région cérébrale, sans chiffrer la réfutation du Doc. 2.",
        MS: "Relie correctement l'adaptation cardiaque aux besoins musculaires et réfute le mythe des 10 % avec les deux pourcentages.",
        TBM: "Articule fluidement échelles de l'organisme (cœur/muscles/cerveau), chiffres exacts et critique argumentée du neuromythe.",
      },
    },
  },

  // =========================================================================
  // A2 — 5e/4e : Audition, concerts/écouteurs et intégration cérébrale
  // =========================================================================
  {
    id: 'A2',
    code: 'A2',
    niveau: '5e / 4e',
    semaine: 'Séance 3–4',
    duree: '50 min',
    titre: 'Concerts, écouteurs : comment protéger son audition ?',
    type: 'Exploitation de données · Éducation à la santé',
    accroche: "L'OMS alerte : plus d'un milliard de jeunes (12–35 ans) risquent une perte auditive prématurée à cause d'écouteurs réglés trop fort ou de concerts dépassant les seuils biologiques.",
    sourceAccroche: 'OMS ; DNB Amérique du Nord juin 2018 ; DNB Pro 2022 (22PROSCMEAG1)',
    problematique: "Comment le cerveau transforme-t-il les sons perçus en audition — et à partir de quel seuil le bruit détruit-il irréversiblement l'oreille ?",
    obstacle: "Penser que l'oreille « s'habitue » au volume élevé ou que les acouphènes finissent toujours par disparaître sans dégât.",
    rupture: "L'oreille capte les vibrations grâce à des cellules ciliées qui ne se renouvellent pas ; une exposition excessive détruit ces capteurs et prive définitivement le cortex auditif d'une partie des fréquences.",
    vocab: [
      { term: 'Récepteur sensoriel', def: 'Cellule spécialisée (ici cellules ciliées de l’oreille) qui capte un stimulus et crée un message nerveux.' },
      { term: 'Cortex auditif', def: 'Zone du lobe temporal qui reçoit et interprète les messages nerveux des sons.' },
      { term: 'Décibel (dB)', def: 'Unité mesurant l’intensité sonore ; le seuil de risque débute à 85 dB.' },
      { term: 'Lésion irréversible', def: 'Destruction définitive de cellules ciliées qui ne sont pas remplacées.' },
    ],
    scenario3d: [
      { label: '1. Isoler le cortex auditif (lobe temporal)', action: { isolate: 'auditif', view: 'lat_L', deep: false } },
      { label: '2. Comparer avec le cortex visuel (lobe occipital)', action: { isolate: 'visuel', view: 'post', deep: false } },
      { label: '3. Ouvrir le doc. interactif Audition & Bruit (DNB)', action: { doc: 'audition' } },
    ],
    docs: [
      {
        num: 'Doc. 1',
        title: 'Du capteur sensoriel au cerveau',
        type: '3d',
        source: 'Atlas 3D MNI152 — Aires sensorielles corticales',
        text: "Chaque organe sensoriel envoie des messages nerveux spécifiques vers une région dédiée du cortex : le nerf auditif relie l'oreille au cortex auditif (lobe temporal), tandis que le nerf optique relie l'œil au cortex visuel (lobe occipital). Le cerveau intègre ensemble ces informations multiples.",
        legend: 'Compare sur le modèle 3D le cortex auditif (latéral temporal) et le cortex visuel (postérieur occipital).',
      },
      {
        num: 'Doc. 2',
        title: 'Échelle officielle des niveaux sonores',
        type: 'tableau',
        source: 'OMS & sujet DNB Pro 2022 (22PROSCMEAG1)',
        text: "Le risque dépend à la fois du niveau sonore (en dB) et de la durée d'écoute : chaque augmentation de +3 dB double l'énergie sonore et divise par 2 la durée tolérable sans danger.",
        table: {
          headers: ['Niveau sonore', 'Exemple courant', 'Effet biologique'],
          rows: [
            ['60 dB', 'Conversation calme', 'Aucun danger'],
            ['85 dB', 'Trafic dense · Seuil d’alerte', 'Seuil de risque si durée prolongée'],
            ['105–110 dB', 'Concert / écouteurs au max', 'Danger grave en quelques minutes'],
            ['≥ 120 dB', 'Seuil de douleur', 'Lésions irréversibles immédiates'],
          ],
        },
        legend: 'Les écouteurs réglés au maximum atteignent souvent 100 à 110 dB.',
      },
      {
        num: 'Doc. 3',
        title: 'Audiogramme d’un travailleur exposé au bruit (M. X, 60 ans)',
        type: 'observation',
        source: 'DNB Amérique du Nord juin 2018 — Témoin 60 ans vs M. X (chaudronnier)',
        text: "Le seuil normal de perte auditive est inférieur à 20 dB. Chez un témoin de 60 ans non exposé au bruit fort, la perte à 1 000 Hz n'est que d'environ 5 dB. Chez M. X (exposé sans protection), l'audition est proche du témoin dans les graves (125–500 Hz), mais la perte atteint ~30 dB à 1 000 Hz et s'aggrave nettement dans les aigus (2 000–4 000 Hz) suite à la destruction des cellules ciliées.",
        legend: 'Ouvre le document interactif « Audition & Bruit » pour lire la courbe complète.',
      },
    ],
    voie1: {
      consigne: "Tu rédiges un message de prévention pour l'entrée d'un festival lycéen (6 à 8 lignes). Explique le trajet de l'information sonore jusqu'au cerveau et justifie deux règles de protection à l'aide des seuils et de l'audiogramme de M. X.",
      fields: [
        { id: 'a2_tache', label: 'Affiche argumentée de prévention auditive (Docs 1, 2 et 3) :', rows: 6, placeholder: "Les sons captés par l'oreille sont transmis... Au-dessus de 85 dB (et jusqu'à 110 dB en concert), les cellules ciliées..." },
      ],
    },
    voie2: {
      consigne: 'Réponds étape par étape en exploitant chaque document :',
      fields: [
        { id: 'a2_q1', label: 'Q1 (Doc. 1 · Localiser) : Nommer le lobe et la zone du cerveau qui reçoivent les messages nerveux auditifs, puis indiquer par quoi ils voyagent depuis l’oreille.', rows: 2, placeholder: 'Ils voyagent par le nerf... jusqu’au cortex... situé dans le lobe...' },
        { id: 'a2_q2', label: 'Q2 (Doc. 2 · Relever & comparer) : Citer le seuil de risque et expliquer pourquoi écouter à 110 dB est bien plus dangereux qu’à 85 dB.', rows: 2, placeholder: 'Le seuil de risque est 85 dB ; chaque +3 dB divise par 2...' },
        { id: 'a2_q3', label: 'Q3 (Doc. 3 · Interpréter) : Comparer la perte à 1 000 Hz de M. X et du témoin, puis expliquer pourquoi cette perte de M. X est définitive.', rows: 2, placeholder: 'Le témoin perd ~5 dB contre ~30 dB pour M. X car les cellules ciliées...' },
      ],
    },
    mdl: {
      verbeAction: 'Localiser · Comparer · Justifier',
      marqueurs: ['tandis que', 'par conséquent', 'car', 'notamment'],
      structure: 'Trajet nerf → cortex auditif + Comparaison chiffrée témoin/M. X + Règle de prévention.',
    },
    coupsDePouce: [
      { niv: 'Niveau 1 · Méthode', txt: 'Pour Q3, compare toujours deux valeurs à la même fréquence (1 000 Hz) avant de conclure : valeur du témoin vs valeur de M. X.' },
      { niv: 'Niveau 2 · Indice', txt: 'Seuil normal = < 20 dB de perte. À 1 000 Hz : témoin ≈ 5 dB (normal), M. X ≈ 30 dB (dépassé → surdité partielle dans les aigus).' },
      { niv: 'Niveau 3 · Notion', txt: 'L’oreille contient des cellules ciliées qui transforment le son en message nerveux vers le lobe temporal ; détruites au-delà de 85–120 dB, elles ne se renouvellent pas.' },
    ],
    avantDeRendre: [
      "J'ai nommé le nerf auditif et le cortex auditif (lobe temporal).",
      "J'ai cité les seuils 85 dB et 120 dB (et les valeurs 5 dB vs 30 dB à 1 000 Hz).",
      "J'ai proposé un geste concret : baisser le volume, faire des pauses ou porter des bouchons d'oreille.",
    ],
    traceEcrite: "L'oreille transforme les vibrations sonores en messages nerveux conduits par le nerf auditif jusqu'au cortex auditif (lobe temporal), où le cerveau les intègre avec nos autres sens. Au-delà de 85 dB (et dès quelques minutes à 110 dB ou 120 dB), le bruit détruit définitivement les cellules ciliées non renouvelables : limiter le volume, la durée et porter des protections préserve l'audition.",
    notions: ['Réception et intégration cérébrale', 'Nerf sensitif et cortex sensoriel', 'Seuil sonore et prévention'],
    lsu: ['D1.3 · Lire un graphique / tableau d’audiogramme', 'D3 · Adopter un comportement responsable pour la santé'],
    fds: "Faire des sciences : utiliser la notion de seuil et de durée d'exposition pour fonder une règle de sécurité.",
    prof: {
      corrige: [
        "Q1 : Les messages nerveux auditifs voyagent par le nerf auditif jusqu'au cortex auditif, situé dans le lobe temporal.",
        "Q2 : Le seuil de risque débute à 85 dB (douleur à 120 dB). À 110 dB (+25 dB au-dessus du seuil), comme chaque +3 dB divise par 2 la durée tolérable, la durée sans risque tombe à quelques minutes seulement.",
        "Q3 : À 1 000 Hz, le témoin a une perte d'environ 5 dB (audition normale < 20 dB), tandis que M. X atteint ~30 dB de perte (surdité nette dans les médiums/aigus). C'est irréversible car les cellules ciliées détruites ne se régénèrent pas.",
      ],
      bareme: "Q1 : 2,5 pts · Q2 : 3 pts (+3 dB / seuils) · Q3 : 3,5 pts (comparaison 5 vs 30 dB + cellules ciliées non renouvelables) · MDL : 1 pt = 10 pts.",
      erreursFrequentes: [
        "Dire « le cerveau est abîmé par le bruit » alors que ce sont les récepteurs de l'oreille interne (cellules ciliées) qui sont détruits.",
        "Lire la perte auditive à l'envers (penser que 30 dB est « mieux » que 5 dB).",
      ],
      lsu: {
        MI: "Repère un seuil du tableau mais situe mal l'organe atteint.",
        MF: "Nomme le lobe temporal et le seuil 85 dB, mais ne compare pas les valeurs témoin/M. X.",
        MS: "Explique le trajet nerf auditif → lobe temporal et exploite l'audiogramme avec les seuils exacts.",
        TBM: "Rédige une prévention rigoureuse expliquant la loi +3 dB, les cellules ciliées et la perte irréversible.",
      },
    },
  },

  // =========================================================================
  // A3 — 4e : Téléphone au volant, réflexe vs mouvement volontaire
  // =========================================================================
  {
    id: 'A3',
    code: 'A3',
    niveau: '4e',
    semaine: 'Séance 5–6',
    duree: '50 min',
    titre: 'Téléphone au volant : réflexe, commande volontaire et temps de réaction',
    type: 'Expérimentation · Sécurité routière',
    accroche: "Selon la Sécurité routière, lire un SMS pendant ~5 secondes à 50 km/h revient à rouler 70 à 83 mètres « à l'aveugle ». Pourtant, chacun pense « freiner tout de suite » si un piéton traverse.",
    sourceAccroche: 'Sécurité routière France — Distracteurs au volant & alcool',
    problematique: "Pourquoi aucun freinage n'est-il instantané devant un danger — et en quoi un mouvement volontaire diffère-t-il d'un réflexe ?",
    obstacle: "Croire que le temps de réaction vaut 0 s (« j'ai de bons réflexes ») et confondre freinage volontaire et réflexe médullaire.",
    rupture: "Tout message nerveux circule à vitesse finie de l'œil aux centres nerveux puis aux muscles ; un SMS ou l'alcool saturent le traitement cérébral, contrairement au réflexe court qui passe par la moelle épinière.",
    vocab: [
      { term: 'Mouvement volontaire', def: 'Action décidée après perception : le message traverse les cortex visuel puis moteur (cerveau).' },
      { term: 'Réflexe', def: 'Réponse rapide et involontaire qui passe par la moelle épinière sans attendre l’analyse du cerveau.' },
      { term: 'Moelle épinière', def: 'Centre nerveux logé dans la colonne vertébrale qui relaie les messages et commande les réflexes.' },
      { term: 'Temps de réaction', def: 'Durée entre la perception d’un danger et le début de l’action musculaire (~1 s au volant).' },
    ],
    scenario3d: [
      { label: '1. Cortex moteur droit / gauche (commande controlatérale)', action: { isolate: 'moteur', view: 'lat_R', deep: false } },
      { label: '2. Tronc cérébral sous verre (relais vers moelle épinière)', action: { isolate: 'tronc', view: 'ant', deep: true } },
      { label: '3. Doc. interactif Moelle épinière & chronomètre Réflexe', action: { doc: 'reflexe' } },
    ],
    docs: [
      {
        num: 'Doc. 1',
        title: 'Données de la Sécurité routière sur le temps de réaction',
        type: 'tableau',
        source: 'Sécurité routière France',
        text: "Un conducteur reposé met en moyenne ~1 seconde pour réagir (distance parcourue avant même de toucher le frein : 15 m à 50 km/h, 24 m à 80 km/h). Les distracteurs allongent ce délai ou détournent le regard.",
        table: {
          headers: ['Situation au volant', 'Impact mesuré', 'Risque d’accident'],
          rows: [
            ['Conducteur sobre et attentif', 'Temps moyen ~1 s (15 m à 50 km/h)', 'Référence (×1)'],
            ['Appel téléphonique', 'Temps de réaction +46 %', '×3'],
            ['Lire / écrire un SMS (~5 s)', 'Temps +37 % · 70–83 m à l’aveugle', '×23'],
            ['Alcoolémie positive', 'Temps augmenté d’au moins +13 %', 'Sur-risque majeur'],
          ],
        },
        legend: 'Pendant les ~5 s d’un SMS à 50 km/h, aucun freinage ne peut même commencer.',
      },
      {
        num: 'Doc. 2',
        title: 'Comparer deux trajets nerveux en classe',
        type: 'experience',
        source: 'Protocole classe (test de la règle / chronomètre visuel)',
        text: "Pour un arrêt volontaire devant un feu rouge, le message part de l'œil, rejoint le cortex visuel (analyse), puis le cortex moteur (décision), descend par le tronc cérébral et la moelle épinière vers les nerfs moteurs du pied (~0,25 à 1 s). À l'inverse, retirer sa main d'un objet brûlant est un réflexe : le message va du capteur cutané à la moelle épinière, qui renvoie aussitôt l'ordre au muscle avant même la prise de conscience.",
        legend: 'Teste toi-même ton temps de réaction visuel dans le doc. « Réflexe » ci-dessus.',
      },
      {
        num: 'Doc. 3',
        title: 'Un croisement gauche–droite dans le tronc cérébral',
        type: '3d',
        source: 'Atlas 3D MNI152 — Commande controlatérale',
        text: "Les fibres motrices qui partent du cortex moteur gauche croisent la ligne médiane au niveau du tronc cérébral pour commander les muscles du côté droit du corps (et inversement).",
        legend: 'Observe sur l’atlas 3D l’hémisphère moteur et son prolongement vers le tronc cérébral.',
      },
    ],
    voie1: {
      consigne: "Lors d'un débat sur la sécurité à trottinette et en voiture, rédige une explication scientifique (6 à 8 lignes) comparant le trajet nerveux d'un réflexe et celui d'un freinage volontaire, et explique pourquoi le SMS multiplie le risque par 23.",
      fields: [
        { id: 'a3_tache', label: 'Argumentaire scientifique & sécurité routière (Docs 1, 2 et 3) :', rows: 6, placeholder: 'Contrairement au réflexe qui passe par la moelle épinière, freiner devant un piéton est un mouvement volontaire...' },
      ],
    },
    voie2: {
      consigne: 'Suis le trajet de l’information document par document :',
      fields: [
        { id: 'a3_q1', label: 'Q1 (Doc. 1 · Relever) : Comparer la distance parcourue avant freinage à 50 km/h avec un conducteur attentif (~1 s) puis en lisant un SMS (~5 s), et relever l’impact sur le risque.', rows: 2, placeholder: 'À 50 km/h attentif : 15 m ; pendant un SMS : 70 à 83 m à l’aveugle, risque ×23...' },
        { id: 'a3_q2', label: 'Q2 (Doc. 2 · Schématiser en chaîne) : Citer dans l’ordre les 4 étapes du trajet nerveux d’un freinage volontaire devant un danger visuel.', rows: 2, placeholder: 'Œil (capteur) → nerf optique → cortex visuel → cortex moteur → moelle épinière → nerf moteur → muscle.' },
        { id: 'a3_q3', label: 'Q3 (Docs 2 & 3 · Comparer) : Indiquer la différence entre ce freinage volontaire et un réflexe de retrait de la main, et préciser l’effet du téléphone/alcool.', rows: 2, placeholder: 'Le réflexe ne passe que par la moelle épinière ; le téléphone et l’alcool allongent le temps de traitement cérébral...' },
      ],
    },
    mdl: {
      verbeAction: 'Comparer · Ordonner · Justifier',
      marqueurs: ['tandis que', 'au contraire', 'puis', 'par conséquent'],
      structure: 'Chaîne orientée (Capteur → Centre → Muscle) + Contraste Réflexe vs Volontaire + Chiffres.',
    },
    coupsDePouce: [
      { niv: 'Niveau 1 · Méthode', txt: 'Pour Q2, suis la règle « Organe sensoriel → Nerf sensitif → Centre nerveux → Nerf moteur → Muscle effecteur ».' },
      { niv: 'Niveau 2 · Indice', txt: 'Attention ! En voiture, freiner en voyant un piéton n’est PAS un réflexe : c’est un mouvement volontaire qui exige l’œil ET le cortex cérébral.' },
      { niv: 'Niveau 3 · Notion', txt: 'Le SMS combine deux dangers : +37 % de temps de réaction ET 5 secondes sans regarder la route (70–83 m à 50 km/h, risque ×23).' },
    ],
    avantDeRendre: [
      "J'ai distingué moelle épinière (réflexe) et cortex moteur (mouvement volontaire).",
      "J'ai cité les valeurs de la Sécurité routière (15 m vs 70–83 m, ×3, ×23, +13 % alcool).",
      "J'ai précisé le rôle des nerfs comme câbles conducteurs du message nerveux.",
    ],
    traceEcrite: "Un mouvement volontaire (freiner devant un obstacle) nécessite l'intégration des informations par le cerveau (cortex visuel → cortex moteur) puis la descente du message via le tronc cérébral (croisement controlatéral) et la moelle épinière. Un réflexe suit un circuit plus court passant directement par la moelle épinière. Téléphone (+37 % à +46 %, SMS ×23) et alcool (+13 %) retardent le traitement cérébral et allongent la distance d'arrêt.",
    notions: ['Mouvement volontaire vs réflexe', 'Centres nerveux (cerveau, moelle épinière) et nerfs', 'Temps de réaction'],
    lsu: ['D4 · Exploiter des données statistiques', 'D1.3 · Ordonner un trajet fonctionnel', 'D3 · Comportements responsables'],
    fds: "Faire des sciences : montrer les limites d'un atlas cérébral seul (absence de la moelle épinière) en le complétant par un schéma médullaire et des mesures.",
    prof: {
      corrige: [
        "Q1 : À 50 km/h, un conducteur attentif parcourt déjà 15 m pendant ~1 s de réaction ; en lisant un SMS (~5 s), il parcourt 70 à 83 m « à l'aveugle » (+37 % sur le temps de réaction) et le risque d'accident est multiplié par 23.",
        "Q2 : Œil (récepteur) → nerf optique → cortex visuel → cortex moteur → tronc cérébral / moelle épinière → nerf moteur → muscle de la jambe/du pied.",
        "Q3 : Le freinage passe par le cortex cérébral (plus lent, sensible à l'attention), alors qu'un réflexe passe directement par la moelle épinière sans analyse consciente préalable. L'alcool (+13 % min.) et le téléphone (+37 à +46 %) perturbent l'analyse cérébrale.",
      ],
      bareme: "Q1 : 3 pts · Q2 : 3 pts (chaîne complète ordonnée) · Q3 : 3 pts (volontaire/réflexe + perturbateurs) · MDL : 1 pt = 10 pts.",
      erreursFrequentes: [
        "Appeler « réflexe » le fait de freiner au feu rouge (dans le langage courant on le dit, mais en SVT c'est un mouvement volontaire appris).",
        "Oublier la moelle épinière dans le trajet descendant vers les muscles du pied.",
      ],
      lsu: {
        MI: "Confond réflexe et mouvement volontaire ou oublie le rôle des nerfs.",
        MF: "Cite les risques du SMS mais présente un trajet nerveux incomplet.",
        MS: "Distingue clairement trajet volontaire (cortex + moelle) et réflexe (moelle) en s'appuyant sur les chiffres.",
        TBM: "Intègre la limite du modèle 3D (moelle épinière) et le croisement controlatéral dans une explication structurée.",
      },
    },
  },

  // =========================================================================
  // A4 — 3e : Curare, anesthésie et synapse chimique
  // =========================================================================
  {
    id: 'A4',
    code: 'A4',
    niveau: '3e',
    semaine: 'Séance 7–8',
    duree: '50 min',
    titre: 'Curare, anesthésie et synapse : comment communiquent les neurones ?',
    type: 'Histoire des sciences · Changement d’échelle',
    accroche: "En 1856, le physiologiste Claude Bernard étudie le curare, poison de flèches paralysant en quelques secondes. Au même moment, Golgi et Cajal s'opposent : les neurones forment-ils un réseau continu ou des cellules séparées ?",
    sourceAccroche: 'Claude Bernard (1856) ; Prix Nobel 1906 (Golgi & Cajal) ; Lelivrescolaire.fr SVT 3e Docs 1, 5 & 7',
    problematique: "Comment le message nerveux passe-t-il d'un neurone à un autre (ou à un muscle) — et comment des molécules comme le curare peuvent-elles le bloquer ?",
    obstacle: "Imaginer les nerfs comme des câbles électriques continus où rien ne s'interpose d'une cellule à l'autre.",
    rupture: "À l'échelle de ~20 nanomètres, les neurones sont séparés par une fente synaptique : la transmission est chimique (neurotransmetteurs + récepteurs), ce qui explique comment une molécule peut la bloquer ou la mimer.",
    vocab: [
      { term: 'Neurone', def: 'Cellule spécialisée du système nerveux qui conduit et transmet les messages nerveux.' },
      { term: 'Synapse', def: 'Zone de jonction (~20 nm) séparant deux neurones ou un neurone et une fibre musculaire.' },
      { term: 'Neurotransmetteur', def: 'Messager chimique libéré dans la fente synaptique (ex. glutamate, GABA, dopamine).' },
      { term: 'Récepteur spécifique', def: 'Protéine de la cellule suivante sur laquelle se fixe le neurotransmetteur.' },
    ],
    scenario3d: [
      { label: '1. Voie excitatrice Glutamate (cerveau en transparence)', action: { pathway: 'glutamate', deep: true, view: 'lat_L' } },
      { label: '2. Voie inhibitrice GABA (freinage synaptique)', action: { pathway: 'gaba', deep: true, view: 'lat_L' } },
      { label: '3. Simulateur 20 nm : Synapse, Curare (X) & Agoniste (Y)', action: { doc: 'synapse' } },
      { label: '4. Micro-Monde 3D : Synapse normale (~20 nm)', action: { microStage: 'synapse', synapseMode: 'normal' } },
      { label: '5. Micro-Monde 3D : Synapse bloquée au Curare', action: { microStage: 'synapse', synapseMode: 'curare' } },
      { label: '6. Micro-Monde 3D : Potentiel d\'action (ms)', action: { microStage: 'pa' } },
    ],
    docs: [
      {
        num: 'Doc. 1',
        title: 'Controverse Golgi vs Cajal et microscopie électronique',
        type: 'observation',
        source: 'Prix Nobel de médecine (25 oct. 1906) & MEB Lelivrescolaire.fr Doc. 5',
        text: "Camillo Golgi pensait que les cellules nerveuses fusionnaient en un réseau continu ; Santiago Ramón y Cajal montra au microscope qu'il s'agissait de cellules indépendantes (neurones). La microscopie électronique a confirmé qu'une fente synaptique de ~20 nm sépare deux neurones, avec des vésicules côté émetteur.",
        legend: "Le message électrique dans le neurone ne peut donc pas « sauter » directement la fente.",
      },
      {
        num: 'Doc. 2',
        title: 'Expérience historique de Claude Bernard sur le curare',
        type: 'experience',
        source: 'Claude Bernard (1856) sur nerf sciatique + muscle de grenouille',
        text: "On isole un muscle relié à son nerf sciatique chez une grenouille préparée, puis on applique du curare à trois endroits distincts avant de stimuler :",
        table: {
          headers: ['Zone mise en contact avec le curare', 'Zone stimulée', 'Contraction du muscle'],
          rows: [
            ['1. Nerf seul (muscle épargné)', 'Nerf', 'Oui (normale)'],
            ['2. Muscle baigné (jonction atteinte)', 'Nerf', 'Non (paralysie)'],
            ['3. Muscle baigné (jonction atteinte)', 'Muscle directement', 'Oui (normale)'],
          ],
        },
        legend: 'Utilise le simulateur « Synapse » (Molécule X) pour visualiser l’action à 20 nm.',
      },
      {
        num: 'Doc. 3',
        title: 'Excitation et inhibition dans les réseaux cérébraux',
        type: '3d',
        source: 'Atlas 3D — Voies Glutamate & GABA',
        text: "Dans le cerveau, selon le type de neurotransmetteur et son récepteur, une synapse peut activer le neurone suivant (ex. glutamate) ou le freiner (ex. GABA). De nombreux anesthésiques chirurgicaux ciblent précisément ces jonctions synaptiques pour interrompre la douleur ou le tonus musculaire.",
        legend: 'Compare les voies Glutamate et GABA en 3D pour passer de l’échelle macro à l’échelle cellulaire.',
      },
    ],
    voie1: {
      consigne: "À l'aide des résultats de Claude Bernard (Doc. 2) et des données microscopiques (Docs 1 et 3), rédige un texte argumenté (6 à 8 lignes) expliquant où et comment agit le curare à l'échelle de la synapse.",
      fields: [
        { id: 'a4_tache', label: 'Explication du mécanisme cellulaire et moléculaire (Docs 1, 2 et 3) :', rows: 6, placeholder: 'Les essais 1 et 3 montrent que le nerf et le muscle restent intacts... Le curare agit donc à l’échelle de la synapse...' },
      ],
    },
    voie2: {
      consigne: 'Passe de l’observation microscopique au raisonnement expérimental :',
      fields: [
        { id: 'a4_q1', label: 'Q1 (Doc. 1 · Conclure) : Quelle observation prouve que l’hypothèse de Cajal (neurones séparés) l’emporte sur celle de Golgi ?', rows: 2, placeholder: 'La microscopie électronique montre une fente synaptique de ~20 nm...' },
        { id: 'a4_q2', label: 'Q2 (Doc. 2 · Interpréter) : En comparant les trois essais de Claude Bernard, démontrer que le curare n’abîme ni le nerf ni le muscle mais bloque leur jonction.', rows: 3, placeholder: 'Essai 1 : le nerf conduit toujours ; Essai 3 : le muscle se contracte ; Essai 2 : le passage nerf → muscle est bloqué...' },
        { id: 'a4_q3', label: 'Q3 (Docs 2 & 3 · Modéliser) : Expliquer le rôle du neurotransmetteur et du récepteur dans le blocage par le curare (molécule X du simulateur).', rows: 2, placeholder: 'Le curare se fixe sur les récepteurs sans les activer, empêchant le neurotransmetteur...' },
      ],
    },
    mdl: {
      verbeAction: 'Interpréter · Démontrer · Modéliser',
      marqueurs: ['alors que', 'donc', 'cependant', 'en revanche'],
      structure: 'Analyse des 3 témoins/essais → Déduction du site d’action → Explication moléculaire (récepteur).',
    },
    coupsDePouce: [
      { niv: 'Niveau 1 · Méthode', txt: 'Pour Q2, exploite chaque essai séparément : que vérifie l’essai 1 sur le nerf ? Que vérifie l’essai 3 sur le muscle ? Que reste-t-il entre les deux dans l’essai 2 ?' },
      { niv: 'Niveau 2 · Indice', txt: 'Si l’essai 1 contracte le muscle, le nerf n’est pas cassé. Si l’essai 3 contracte le muscle, le muscle n’est pas paralysé lui-même. Seule la synapse nerf–muscle est bloquée !' },
      { niv: 'Niveau 3 · Notion', txt: 'Complète : « Le neurone libère un ___ dans la ___ (~20 nm). Le curare occupe les ___ sans les ___, bloquant la transmission. »' },
    ],
    avantDeRendre: [
      "J'ai utilisé le mot-clé « fente synaptique (~20 nm) » et « vésicules ».",
      "J'ai interprété les 3 essais de Claude Bernard sans en oublier un.",
      "J'ai expliqué la différence entre message électrique (dans le neurone) et message chimique (dans la synapse).",
    ],
    traceEcrite: "Les neurones communiquent entre eux (ou avec un muscle) au niveau de synapses chimiques (~20 nm). À l'arrivée d'un message nerveux électrique, l'élément présynaptique libère des neurotransmetteurs dans la fente synaptique ; leur fixation sur des récepteurs spécifiques déclenche ou inhibe un message dans la cellule suivante (sens unidirectionnel). Certaines molécules (curare, anesthésiques) bloquent ces récepteurs.",
    notions: ['Neurone et fente synaptique', 'Neurotransmetteurs et récepteurs', 'Histoire des sciences (construction du savoir)'],
    lsu: ['D4 · Interpréter un protocole expérimental historique', 'D5 · Situer l’évolution d’une théorie (Golgi/Cajal)', 'D1.3 · Changer d’échelle (organe → molécule)'],
    fds: "Faire des sciences : comprendre comment une controverse (Golgi/Cajal) est tranchée par une nouvelle technique (MEB) et une expérience rigoureuse.",
    prof: {
      corrige: [
        "Q1 : La microscopie électronique révèle une discontinuité physique (~20 nm de fente synaptique) et des vésicules asymétriques, validant la théorie neuronale de Cajal.",
        "Q2 : L'essai 1 prouve que le curare ne détruit pas la conduction du nerf ; l'essai 3 prouve que le muscle reste capable de se contracter. L'échec de l'essai 2 (nerf stimulé mais muscle baignant dans le curare) démontre que le curare bloque uniquement la jonction nerf–muscle (synapse neuromusculaire).",
        "Q3 : Le message chimique passe par un neurotransmetteur libéré dans la fente ; une molécule bloquante (type curare / X) occupe le récepteur postsynaptique sans l'activer, empêchant le neurotransmetteur naturel de se fixer.",
      ],
      bareme: "Q1 : 2 pts · Q2 : 4 pts (exploitation logique des 3 essais) · Q3 : 3 pts (fente, neurotransmetteur, récepteur) · MDL : 1 pt = 10 pts.",
      erreursFrequentes: [
        "Confondre l'ordre « électrique puis chimique » et croire que « l'électricité traverse l'espace entre neurones ».",
        "Négliger l'essai 3 dans la démonstration de Claude Bernard.",
      ],
      lsu: {
        MI: "Décrit un résultat du tableau sans conclure sur la jonction.",
        MF: "Connaît le mot synapse mais peine à articuler les 3 essais expérimentaux.",
        MS: "Démontre par élimination grâce aux 3 essais que la jonction nerf–muscle est ciblée et explique la fixation sur récepteur.",
        TBM: "Rédige une synthèse rigoureuse reliant controverse historique, échelle nanométrique et blocage moléculaire.",
      },
    },
  },

  // =========================================================================
  // A5 — 3e : Sommeil des collégiens, écrans et mémoire
  // =========================================================================
  {
    id: 'A5',
    code: 'A5',
    niveau: '3e',
    semaine: 'Séance 9–10',
    duree: '55 min',
    titre: 'Sommeil, smartphone le soir et mémoire au collège',
    type: 'Enquête nationale & démarche expérimentale',
    accroche: "Dans son avis du 13 janvier 2026 relayé par Le Monde, l'ANSES alerte sur l'usage quotidien des réseaux sociaux par 58 % des 12–17 ans — au moment où l'enquête EnCLASS 2024 montre que plus d'un quart des collégiens accumule une dette de sommeil.",
    sourceAccroche: 'EnCLASS 2024 (OFDT / Santé publique France) ; ANSES 13 janv. 2026 / Le Monde ; Scoville & Milner (1957) ; Gais, Lucas & Born (2006)',
    problematique: "Comment le manque de sommeil et l'usage tardif du smartphone perturbent-ils le fonctionnement cérébral et la consolidation des apprentissages ?",
    obstacle: "Croire que dormir est une « perte de temps où le cerveau s'éteint » et que « la mémoire se trouve dans un seul tiroir ».",
    rupture: "Le sommeil est actif : l'hippocampe et le cortex rejouent les connexions formées le jour (consolidation), tandis qu'écrans et dette de sommeil fragmentent ce tri ; la mémoire mobilise en réalité plusieurs circuits (hippocampe vs cervelet).",
    vocab: [
      { term: 'Dette de sommeil', def: 'Déficit chronique en semaine révélé par plus de 2 h de rattrapage le week-end.' },
      { term: 'Hippocampe', def: 'Structure profonde indispensable pour former les nouveaux souvenirs conscients (leçons, faits).' },
      { term: 'Consolidation mnésique', def: 'Stabilisation nocturne des réseaux de synapses reliant hippocampe et cortex.' },
      { term: 'Plasticité cérébrale', def: 'Capacité des synapses et circuits cérébraux à se modifier durablement par apprentissage.' },
    ],
    scenario3d: [
      { label: '1. Isoler l’hippocampe sous verre (souvenirs conscients)', action: { isolate: 'hippocampe', deep: true, view: 'medial' } },
      { label: '2. Comparer avec le cervelet (gestes appris, cas H.M.)', action: { isolate: 'cervelet', deep: true, view: 'post' } },
      { label: '3. Doc. interactif Sommeil, EnCLASS 2024 & ANSES 2026', action: { doc: 'sommeil' } },
      { label: '4. Micro-Monde 3D : Un morceau de cortex (réseaux)', action: { microStage: 'cortex' } },
      { label: '5. Micro-Monde 3D : Un neurone & ses épines dendritiques', action: { microStage: 'neurone' } },
    ],
    docs: [
      {
        num: 'Doc. 1',
        title: 'État réel du sommeil des collégiens en France',
        type: 'tableau',
        source: 'Enquête nationale EnCLASS 2024 (OFDT / Santé publique France / EHESP)',
        text: "Les besoins physiologiques d'un collégien se situent entre 8 h et 9 h par nuit en semaine. L'enquête EnCLASS 2024 révèle une érosion préoccupante :",
        table: {
          headers: ['Indicateur (collégiens en semaine)', 'Mesure EnCLASS 2024'],
          rows: [
            ['Durée moyenne de sommeil (semaine)', '8 h 16 min'],
            ['Élèves dormant moins de 7 h / nuit', '13,8 %'],
            ['En dette de sommeil (> 2 h rattrapées le week-end)', '26,7 %'],
            ['Fatigués presque tous les matins', '30,6 %'],
          ],
        },
        legend: 'Plus d’un élève sur quatre manque chroniquement de sommeil pendant les semaines de cours.',
      },
      {
        num: 'Doc. 2',
        title: 'Smartphones le soir : alerte ANSES (janvier 2026)',
        type: 'texte',
        source: 'ANSES, avis du 13 janvier 2026 & Le Monde',
        text: "Chez les 12–17 ans, près de 90 % utilisent un smartphone chaque jour (42 % y passent 2 à 5 h/jour, et 9 % plus de 5 h/jour) et 58 % consultent les réseaux sociaux quotidiennement. Leur usage le soir retarde l'endormissement par excitation émotionnelle, notifications et lumière, dégradant ensuite attention, humeur et mémorisation.",
        legend: 'Retrouve la synthèse complète dans le doc. interactif « Sommeil & Écrans ».',
      },
      {
        num: 'Doc. 3',
        title: 'Hippocampe, cervelet et preuve expérimentale du sommeil',
        type: 'experience',
        source: 'Scoville & Milner (1957, patient H.M.) ; Gais, Lucas & Born (2006, Learning & Memory)',
        text: "Le patient H.M., privé de ses deux hippocampes, ne retenait aucun fait nouveau mais progressait encore en habileté motrice (dessin en miroir) grâce au cervelet et aux noyaux gris. De plus, Gais & Born (2006) ont montré sur deux groupes apprenant des paires de mots que le groupe dormant juste après l'apprentissage retient significativement plus de mots que le groupe resté éveillé sur la même durée, prouvant que le sommeil consolide activement l'hippocampe.",
        legend: 'Compare en 3D hippocampe (faits/leçons) et cervelet (gestes/automatismes).',
      },
    ],
    voie1: {
      consigne: "Lors d'un conseil de vie collégienne sur le bien-être, rédige un plaidoyer scientifique (6 à 8 lignes) expliquant pourquoi « couper le smartphone 1 h avant de dormir » protège la mémoire et la santé scolaire, en citant EnCLASS 2024, ANSES 2026 et le rôle de l'hippocampe.",
      fields: [
        { id: 'a5_tache', label: 'Argumentaire scientifique complet (Docs 1, 2 et 3) :', rows: 6, placeholder: 'D’après EnCLASS 2024, 26,7 % des collégiens sont en dette de sommeil... L’ANSES (2026) montre... Or l’hippocampe a besoin de sommeil pour...' },
      ],
    },
    voie2: {
      consigne: 'Réponds précisément aux 3 questions ciblées :',
      fields: [
        { id: 'a5_q1', label: 'Q1 (Doc. 1 · Relever) : Citer deux indicateurs chiffrés d’EnCLASS 2024 montrant l’ampleur du manque de sommeil au collège.', rows: 2, placeholder: '13,8 % dorment moins de 7 h, 26,7 % sont en dette de sommeil, 30,6 % se disent fatigués...' },
        { id: 'a5_q2', label: 'Q2 (Doc. 2 · Expliquer) : Citer les chiffres d’usage du smartphone chez les 12–17 ans et deux raisons pour lesquelles l’écran le soir nuit au sommeil.', rows: 2, placeholder: '58 % sur les réseaux sociaux/jour (42 % de 2 à 5 h) ; retarde l’endormissement par...' },
        { id: 'a5_q3', label: 'Q3 (Doc. 3 · Démontrer) : Expliquer ce que prouvent le cas H.M. et l’expérience de Gais & Born (2006) sur les organes de la mémoire et l’effet du sommeil.', rows: 3, placeholder: 'H.M. prouve que l’hippocampe gère les faits nouveaux (vs cervelet pour les gestes) ; Gais & Born prouvent que dormir juste après apprendre...' },
      ],
    },
    mdl: {
      verbeAction: 'Relever · Expliquer · Démontrer',
      marqueurs: ['tout d’abord', 'en effet', 'de plus', 'c’est pourquoi'],
      structure: 'Constat épidémiologique → Facteur comportemental (écrans) → Preuve biologique (hippocampe/sommeil).',
    },
    coupsDePouce: [
      { niv: 'Niveau 1 · Méthode', txt: 'Distingue bien deux types de données : un sondage (Docs 1 et 2 : décrit une fréquence) et une expérience contrôlée (Doc. 3 : prouve une cause).' },
      { niv: 'Niveau 2 · Indice', txt: 'H.M. échoue à retenir les mots/visages (sans hippocampe) mais réussit le dessin en miroir (cervelet intact) → la mémoire n’est pas localisée dans une seule zone !' },
      { niv: 'Niveau 3 · Notion', txt: 'Pendant le sommeil, les réseaux de synapses entre l’hippocampe et le cortex se réactivent et se renforcent (consolidation / plasticité cérébrale).' },
    ],
    avantDeRendre: [
      "J'ai cité au moins deux chiffres exacts d'EnCLASS 2024 et de l'ANSES 2026.",
      "J'ai différencié le rôle de l'hippocampe et celui du cervelet.",
      "J'ai expliqué pourquoi le sommeil consolide activement les souvenirs (au lieu d'éteindre le cerveau).",
    ],
    traceEcrite: "La mémoire mobilise plusieurs réseaux spécialisés (hippocampe pour les savoirs nouveaux, cervelet/striatum pour les gestes). Chez les adolescents (EnCLASS 2024 : 26,7 % en dette de sommeil), l'usage tardif des écrans (ANSES 2026) retarde l'endormissement et prive le cerveau du sommeil nécessaire pour consolider les synapses de la mémoire.",
    notions: ['Hygiène du sommeil et écrans', 'Hippocampe, cervelet et mémoires multiples', 'Plasticité cérébrale et consolidation'],
    lsu: ['D4 · Distinguer enquête observationnelle et expérience', 'D3 · Hygiène du système nerveux', 'D1.3 · Argumenter avec des chiffres sourcés'],
    fds: "Faire des sciences : distinguer une corrélation issue d'une enquête d'une causalité établie par groupe témoin expérimenté (Gais & Born).",
    prof: {
      corrige: [
        "Q1 : En semaine, 13,8 % des collégiens dorment moins de 7 h, 26,7 % sont en dette de sommeil (> 2 h de rattrapage le week-end) et 30,6 % se déclarent fatigués presque tous les matins.",
        "Q2 : Près de 90 % des 12–17 ans utilisent un smartphone par jour (42 % entre 2 et 5 h, 9 % > 5 h) et 58 % consultent les réseaux sociaux quotidiennement. Le soir, notifications, stimulation émotionnelle et lumière retardent l'endormissement et fragmentent la nuit.",
        "Q3 : Le cas H.M. démontre qu'il existe plusieurs mémoires distinctes : l'hippocampe est nécessaire aux souvenirs conscients nouveaux, tandis que le cervelet (et le striatum) gèrent l'apprentissage moteur. Gais & Born (2006) prouvent expérimentalement que dormir juste après l'apprentissage améliore durablement la rétention par rapport à l'éveil.",
      ],
      bareme: "Q1 : 2,5 pts · Q2 : 3 pts · Q3 : 3,5 pts (H.M. + Gais & Born) · MDL : 1 pt = 10 pts.",
      erreursFrequentes: [
        "Dire « le cerveau dort et se repose sans rien faire » alors que la consolidation nocturne est active.",
        "Affirmer que « la mémoire est uniquement dans l'hippocampe » en oubliant le cortex et le cervelet.",
      ],
      lsu: {
        MI: "Cite des conseils généraux sur les écrans sans mobiliser les chiffres ni l'hippocampe.",
        MF: "Relève quelques chiffres d'EnCLASS/ANSES mais confond les rôles de l'hippocampe et du cervelet.",
        MS: "Relie précisément EnCLASS, ANSES et la preuve expérimentale sur l'hippocampe et le cervelet.",
        TBM: "Explique clairement plasticité synaptique nocturne, mémoires multiples et distinction enquête/expérience.",
      },
    },
  },

  // =========================================================================
  // A6 — 3e : Puffs, nicotine, écrans et circuit de la récompense
  // =========================================================================
  {
    id: 'A6',
    code: 'A6',
    niveau: '3e',
    semaine: 'Séance 11–12',
    duree: '55 min',
    titre: 'Puffs, nicotine et écrans : comprendre l’addiction par le cerveau',
    type: 'Santé publique · Neurobiologie des addictions',
    accroche: "En février 2025, la France a adopté une loi interdisant les puffs jetables, après que l'enquête EnCLASS 2024 a alerté sur l'essor du vapotage (~46 % d'expérimentation au lycée) malgré le recul du tabac fumé. L'ANSES (janvier 2026) pointe aussi les boucles de récompense des écrans.",
    sourceAccroche: 'OFDT EnCLASS 2024 ; Loi n° 2025-175 du 24 fév. 2025 ; ANSES janv. 2026 ; Lelivrescolaire.fr Docs 4, 5 & 8',
    problematique: "Comment la nicotine — ou certaines boucles de récompense numériques — détourne-t-elle le circuit cérébral normal jusqu'à installer une dépendance chez l'adolescent ?",
    obstacle: "Croire que la dépendance n'est qu'un « manque de volonté » ou que la dopamine est « la molécule du bonheur simple ».",
    rupture: "Les besoins vitaux libèrent naturellement de la dopamine dans le circuit ATV → noyau accumbens → préfrontal (apprentissage/motivation). La nicotine et les substances détournent ces synapses ; chez l'adolescent, le cortex préfrontal qui freine les impulsions est encore en maturation.",
    vocab: [
      { term: 'Circuit de la récompense', def: 'Réseau reliant notamment l’ATV, le noyau accumbens et le cortex préfrontal, impliqué dans la motivation.' },
      { term: 'Dopamine', def: 'Neurotransmetteur qui signale l’attente d’une récompense et renforce la répétition d’un comportement.' },
      { term: 'Addiction', def: 'Perte de contrôle et besoin compulsif malgré la connaissance des risques pour la santé.' },
      { term: 'Cortex préfrontal', def: 'Région frontale contrôlant le recul, la planification et le frein aux impulsions (maturation jusqu’à ~25 ans).' },
    ],
    scenario3d: [
      { label: '1. Voie Dopamine (ATV → accumbens → préfrontal)', action: { pathway: 'dopamine', deep: true, view: 'medial' } },
      { label: '2. Isoler le noyau accumbens sous verre (cœur du circuit)', action: { isolate: 'accumbens', deep: true, view: 'ant' } },
      { label: '3. Isoler le cortex préfrontal & ouvrir Doc. Récompense', action: { isolate: 'prefrontal', deep: false, view: 'lat_L', doc: 'recompense' } },
      { label: '4. Micro-Monde 3D : Synapse suractivée par la Nicotine', action: { microStage: 'synapse', synapseMode: 'nicotine' } },
      { label: '5. Micro-Monde 3D : Activité de réseau (76 neurones)', action: { microStage: 'activite' } },
    ],
    docs: [
      {
        num: 'Doc. 1',
        title: 'Du tabac aux puffs et réseaux : enjeux de santé publique',
        type: 'texte',
        source: 'OFDT EnCLASS 2024 · Loi n° 2025-175 (24 fév. 2025) · ANSES (13 janv. 2026)',
        text: "Au collège, le tabac fumé recule nettement (7,7 % d'expérimentation ; 0,9 % d'usage quotidien selon EnCLASS 2024). En revanche, l'attrait des puffs jetables sucrées contenant souvent de la nicotine a poussé près de 46 % des lycéens à tester le vapotage, conduisant à l'interdiction légale des puffs en février 2025. Parallèlement, l'ANSES (2026) souligne que les mécanismes de scroll infini et récompenses imprévisibles captent fortement l'attention adolescente.",
        legend: 'Pourquoi un produit ou un usage peut-il créer une envie irrésistible de recommencer ?',
      },
      {
        num: 'Doc. 2',
        title: 'Libération de dopamine selon l’activité',
        type: 'graphique',
        source: 'Lelivrescolaire.fr SVT 3e (Doc. 8 — Unité arbitraire 0–100)',
        text: "Mesure relative de la libération de dopamine dans le circuit de la récompense (en unité arbitraire sur 100) selon la situation vécue :",
        table: {
          headers: ['Situation testée', 'Libération de dopamine (UA / 100)', 'Rôle biologique / Risque'],
          rows: [
            ['Manger / Boire', '~88 UA / ~88 UA', 'Survie de l’organisme'],
            ['Obtenir une bonne note', '~52 UA', 'Renforcement scolaire'],
            ['Rédiger une punition', '~3 UA', 'Évitement (désagréable)'],
            ['Addiction à un jeu', '~82 UA', 'Détournement au niveau d’un besoin vital'],
          ],
        },
        legend: 'Visualise le graphique complet dans le document interactif « Récompense & Puffs ».',
      },
      {
        num: 'Doc. 3',
        title: 'Action synaptique et vulnérabilité du cerveau adolescent',
        type: '3d',
        source: 'Lelivrescolaire.fr Docs 4–5 ; Volkow et al. (neurobiologie des addictions)',
        text: "À l'échelle cellulaire, la nicotine ou d'autres molécules psychoactives se fixent sur les récepteurs synaptiques et déclenchent une libération artificielle et brutale de dopamine entre l'ATV et le noyau accumbens. Répétée, cette surstimulation diminue la sensibilité basale des synapses (besoin d'augmenter les doses, malaise en manque), alors que le cortex préfrontal régulateur achève sa maturation vers 20–25 ans.",
        legend: 'Observe en 3D le trajet mésolimbique (ATV → accumbens) puis le cortex préfrontal.',
      },
    ],
    voie1: {
      consigne: "En t'appuyant sur les 3 documents et l'atlas 3D, rédige une explication scientifique (6 à 8 lignes) expliquant pourquoi l'interdiction des puffs en 2025 repose sur des arguments biologiques précis liés aux synapses, à la dopamine et au cerveau adolescent.",
      fields: [
        { id: 'a6_tache', label: 'Note scientifique sur la prévention des addictions (Docs 1, 2 et 3) :', rows: 6, placeholder: 'Alors que le tabac fumé recule (7,7 % au collège), les puffs apportent de la nicotine... Or à l’échelle du circuit de la récompense...' },
      ],
    },
    voie2: {
      consigne: 'Relie données de santé publique, graphique et mécanisme synaptique :',
      fields: [
        { id: 'a6_q1', label: 'Q1 (Doc. 1 · Relever) : Comparer l’usage du tabac fumé au collège et du vapotage au lycée (EnCLASS 2024), et rappeler la décision de février 2025.', rows: 2, placeholder: 'Au collège : 7,7 % expérimentation tabac (0,9 % quotidien) ; vapotage ~46 % au lycée → interdiction des puffs en fév. 2025...' },
        { id: 'a6_q2', label: 'Q2 (Doc. 2 · Comparer) : Comparer la dopamine libérée lors d’un besoin vital (manger/boire) à celle observée lors d’une addiction, et conclure sur le détournement du circuit.', rows: 2, placeholder: 'Manger/boire (~88 UA) et l’addiction (~82 UA) produisent des pics très proches, bien au-dessus d’une bonne note (~52 UA)...' },
        { id: 'a6_q3', label: 'Q3 (Doc. 3 · Expliquer) : Décrire l’action de la nicotine sur les synapses dopaminergiques et expliquer pourquoi les adolescents sont plus vulnérables.', rows: 2, placeholder: 'La nicotine déclenche un pic artificiel entre ATV et noyau accumbens... le cortex préfrontal n’est pas encore mature...' },
      ],
    },
    mdl: {
      verbeAction: 'Comparer · Expliquer · Justifier',
      marqueurs: ['alors que', 'c’est pourquoi', 'par conséquent', 'de plus'],
      structure: 'Données EnCLASS/Loi 2025 → Comparaison chiffrée Doc. 2 → Mécanisme synaptique + Préfrontal.',
    },
    coupsDePouce: [
      { niv: 'Niveau 1 · Méthode', txt: 'Dans Q2, cite les trois valeurs (88 UA, 52 UA, 82 UA) pour montrer ce que signifie « détourner un circuit utile à la survie ».' },
      { niv: 'Niveau 2 · Indice', txt: 'Chez l’adolescent, l’accélérateur émotionnel/récompense (accumbens) répond très vite alors que le « frein » (cortex préfrontal) est encore en construction.' },
      { niv: 'Niveau 3 · Notion', txt: 'La nicotine agit sur les récepteurs synaptiques : elle provoque une libération excessive de dopamine dans le noyau accumbens, puis une tolérance qui pousse à recommencer.' },
    ],
    avantDeRendre: [
      "J'ai nommé les structures clés : ATV, noyau accumbens, cortex préfrontal.",
      "J'ai cité les données vérifiées d'EnCLASS 2024 et les valeurs UA du Doc. 2.",
      "J'ai expliqué la dépendance par un mécanisme biologique (synapse/dopamine) et non par jugement moral.",
    ],
    traceEcrite: "Le circuit de la récompense (ATV → noyau accumbens → cortex préfrontal) libère de la dopamine pour motiver des actes vitaux (manger, boire, apprendre). La nicotine des puffs, les drogues et certains usages addictifs détournent ce mécanisme à l'échelle des synapses : la surstimulation puis la désensibilisation favorisent la dépendance, aggravée à l'adolescence par la maturation encore inachevée du cortex préfrontal.",
    notions: ['Circuit de la récompense et dopamine', 'Perturbations synaptiques', 'Prévention des conduites addictives'],
    lsu: ['D4 · Exploiter des données graphiques et épidémiologiques', 'D3 · Prévention des addictions et santé publique'],
    fds: "Faire des sciences : montrer comment des données neurobiologiques et épidémiologiques éclairent une loi de santé publique.",
    prof: {
      corrige: [
        "Q1 : Au collège (EnCLASS 2024), seuls 7,7 % ont testé le tabac fumé (0,9 % quotidien), alors que près de 46 % des lycéens ont expérimenté le vapotage ; face à l'essor des puffs nicotinées, la France les a interdites par la loi du 24 février 2025.",
        "Q2 : Manger et boire libèrent ~88 UA de dopamine et l'addiction atteint ~82 UA (contre ~52 UA pour une bonne note et ~3 UA pour une punition) : le comportement addictif détourne donc un circuit normalement destiné aux besoins vitaux.",
        "Q3 : La nicotine se fixe sur les récepteurs des synapses dopaminergiques (ATV → noyau accumbens), libérant une dose excessive et répétée de dopamine qui diminue ensuite la sensibilité naturelle ; comme le cortex préfrontal (contrôle/décision) mûrit jusqu'à ~25 ans, le risque addictif est plus élevé chez l'adolescent.",
      ],
      bareme: "Q1 : 2,5 pts · Q2 : 3 pts (88 / 82 / 52 UA + détournement) · Q3 : 3,5 pts (synapse + accumbens + préfrontal) · MDL : 1 pt = 10 pts.",
      erreursFrequentes: [
        "Écrire « on est accro parce qu'on a trop de dopamine tout le temps » (c'est l'alternance pic artificiel / baisse basale en manque qui entretient la dépendance).",
        "Oublier le rôle de contrôle du cortex préfrontal.",
      ],
      lsu: {
        MI: "Évoque le danger des puffs mais n'explique ni la dopamine ni le circuit cérébral.",
        MF: "Cite le circuit de la récompense sans exploiter le graphique (UA) ni le rôle du préfrontal.",
        MS: "Compare avec exactitude les valeurs UA et explique le détournement synaptique entre ATV, accumbens et préfrontal.",
        TBM: "Relie échelle moléculaire (synapse/récepteur), maturation cérébrale adolescente et décision de santé publique.",
      },
    },
  },

  // =========================================================================
  // DNB3 — 3e : Sujet type DNB calibré STRICTEMENT sur 10,0 points (30 min)
  // =========================================================================
  {
    id: 'DNB3',
    code: 'DNB 3',
    niveau: '3e · Brevet',
    semaine: 'Épreuve blanche',
    duree: '30 min',
    titre: 'Évaluation DNB (10,0 pts) — Sommeil, écrans et synapse mnésique',
    type: 'Sujet type Brevet 2027 · Barème 10,0 pts',
    accroche: "Lors de la dernière demi-heure de l'épreuve de Sciences au DNB (SVT — 10 points), l'élève doit exploiter trois documents complémentaires d'échelles différentes et rédiger une synthèse argumentée répondant aux critères de Maîtrise de la langue.",
    sourceAccroche: 'Référentiel Nouveau DNB SVT (10,0 pts) · Sources : EnCLASS 2024, ANSES 2026, Gais/Born 2006, Synapse',
    problematique: "Comment montrer, à partir de données de santé publique, d'expériences sur la mémoire et d'un schéma synaptique, pourquoi le sommeil consolide les apprentissages ?",
    obstacle: "Paraphraser les documents sans comparer de valeurs chiffrées ni changer d'échelle (organisme → cerveau → synapse).",
    rupture: "Au Brevet, chaque réponse relie précisément des données extraites (chiffres/témoin) aux mécanismes biologiques (hippocampe, synapse à ~20 nm) avec des connecteurs logiques.",
    vocab: [
      { term: 'Dette de sommeil', def: 'Rattrapage supérieur à 2 h le week-end traduisant un déficit en semaine.' },
      { term: 'Groupe témoin', def: 'Groupe de comparaison indispensable pour établir un lien de cause à effet.' },
      { term: 'Hippocampe', def: 'Centre profond clé pour mémoriser durablement les savoirs conscients.' },
      { term: 'Fente synaptique', def: 'Espace (~20 nm) où les neurotransmetteurs transmettent le signal entre neurones.' },
    ],
    scenario3d: [
      { label: '1. Isoler l’hippocampe sous verre (Doc. 2)', action: { isolate: 'hippocampe', deep: true, view: 'medial' } },
      { label: '2. Doc. Sommeil EnCLASS 2024 & Gais/Born (Docs 1 & 2)', action: { doc: 'sommeil' } },
      { label: '3. Doc. Synapse ~20 nm — neurone à neurone (Doc. 3)', action: { doc: 'synapse' } },
      { label: '4. Micro-Monde 3D : Un neurone (dendrites, soma, axone)', action: { microStage: 'neurone' } },
      { label: '5. Micro-Monde 3D : Synapse ~20 nm (bouton & récepteurs)', action: { microStage: 'synapse', synapseMode: 'normal' } },
    ],
    docs: [
      {
        num: 'Doc. 1',
        title: 'Sommeil et smartphones chez les adolescents français',
        type: 'tableau',
        source: 'EnCLASS 2024 (OFDT / Santé publique France) & ANSES (avis du 13 janv. 2026)',
        text: "Le besoin recommandé au collège est de 8 à 9 h par nuit. Les deux études nationales dressent le bilan suivant chez les jeunes :",
        table: {
          headers: ['Indicateur mesuré', 'Valeur officielle', 'Source'],
          rows: [
            ['Durée moyenne de sommeil (collège, semaine)', '8 h 16 min (13,8 % < 7 h)', 'EnCLASS 2024'],
            ['Collégiens en dette de sommeil (> 2 h rattrapées)', '26,7 % (30,6 % fatigués le matin)', 'EnCLASS 2024'],
            ['Usage quotidien des réseaux sociaux (12–17 ans)', '58 % (42 % de 2 à 5 h/j sur smartphone)', 'ANSES, 2026'],
          ],
        },
        legend: 'Attention : une enquête décrit une fréquence ; elle ne suffit pas seule à prouver un mécanisme.',
      },
      {
        num: 'Doc. 2',
        title: 'Protocole expérimental : sommeil ou éveil après apprentissage ?',
        type: 'experience',
        source: 'D’après Gais, Lucas & Born (Learning & Memory, 2006) et Plihal & Born (1997)',
        text: "Des chercheurs font apprendre une liste de paires de mots le soir à deux groupes d'élèves/jeunes volontaires comparables. Le groupe « Sommeil » dort immédiatement après l'apprentissage ; le groupe « Éveil » reste éveillé pendant la même durée avant d'être testé (ou ne dort que plus tard après une phase d'éveil équivalente). Résultat reproduit : le groupe ayant dormi juste après l'apprentissage retient significativement plus de mots et résiste mieux aux interférences ; l'IRM montre une réactivation de l'hippocampe pendant le sommeil.",
        legend: 'Comparer « Sommeil immédiat » et « Éveil équivalent » écarte le simple effet de la fatigue.',
      },
      {
        num: 'Doc. 3',
        title: 'Consolidation synaptique à l’échelle cellulaire',
        type: 'observation',
        source: 'Atlas 3D & Schéma microscopique de la synapse chimique (~20 nm)',
        text: "Chaque souvenir appris s'inscrit dans un réseau reliant l'hippocampe et le cortex grâce à des connexions entre neurones : les synapses (~20 nm). La répétition et le sommeil stabilisent la libération de neurotransmetteurs depuis les vésicules présynaptiques vers les récepteurs du neurone suivant.",
        legend: 'Aide-toi du doc. interactif « Synapse » (mode Neurone → Neurone) pour vérifier les légendes.',
      },
    ],
    voie1: {
      consigne: 'Mode DNB complet (30 min · 10,0 pts) : réponds directement à la synthèse finale en intégrant Q1, Q2 et Q3 (ou bascule en Parcours guidé pour composer chaque question du barème officiel).',
      fields: [
        { id: 'dnb3_tache', label: 'Synthèse complète type Brevet (exploitation Docs 1, 2, 3 + conseil argumenté — 10 pts) :', rows: 8, placeholder: 'D’après EnCLASS 2024 et l’ANSES (2026)... L’expérience de Gais & Born prouve... À l’échelle de l’hippocampe et des synapses... Je conseille donc...' },
      ],
    },
    voie2: {
      consigne: 'Barème officiel du sujet type Brevet — Total exact = 10,0 points (Q1 : 2 + Q2 : 2,5 + Q3 : 2 + Q4 : 3,5) :',
      fields: [
        { id: 'dnb3_q1', label: 'Q1 (2,0 pts · Relever) : À partir du Doc. 1, relever deux données chiffrées montrant la dégradation du sommeil au collège et l’exposition aux réseaux sociaux.', rows: 2, placeholder: '13,8 % dorment moins de 7 h (26,7 % en dette) et 58 % des 12–17 ans utilisent les réseaux sociaux chaque jour...' },
        { id: 'dnb3_q2', label: 'Q2 (2,5 pts · Exploiter un protocole) : Expliquer ce que démontre la comparaison « Sommeil » vs « Éveil » dans le Doc. 2, et justifier l’intérêt du groupe témoin.', rows: 2, placeholder: 'La durée d’attente est la même mais seul le groupe ayant dormi juste après consolide mieux ; cela prouve la causalité...' },
        { id: 'dnb3_q3', label: 'Q3 (2,0 pts · Relier les échelles) : Nommer la structure cérébrale clé des souvenirs conscients (Doc. 2/3) et décrire en 2 phrases la transmission à travers une synapse (~20 nm).', rows: 2, placeholder: 'Il s’agit de l’hippocampe. À la synapse, l’élément présynaptique libère des neurotransmetteurs dans la fente...' },
        { id: 'dnb3_q4', label: 'Q4 (3,5 pts · Argumenter · MDL) : Rédiger 5 à 7 lignes pour conseiller un camarade qui révise jusqu’à minuit sur son téléphone avant le DNB (au moins 2 arguments tirés des docs).', rows: 4, placeholder: 'Réviser tard sur téléphone jusqu’à minuit nuit à ton Brevet pour deux raisons scientifiques : tout d’abord... ensuite... Donc...' },
      ],
    },
    mdl: {
      verbeAction: 'Relever · Exploiter · Décrire · Argumenter',
      marqueurs: ['tout d’abord', 'en revanche', 'car', 'c’est pourquoi'],
      structure: 'Réponses autonomes sans pronoms ambigus + connecteurs de cause/conséquence + orthographe des termes SVT.',
    },
    coupsDePouce: [
      { niv: 'Niveau 1 · Méthode (DNB)', txt: 'Dans Q1, recopie bien les unités (% / heures). Dans Q4, structure avec « Tout d’abord… Ensuite… Par conséquent… ».' },
      { niv: 'Niveau 2 · Indice', txt: 'Pour Q2, compare le groupe Sommeil et le groupe Éveil : la seule variable modifiée juste après l’apprentissage est le sommeil, pas le temps écoulé !' },
      { niv: 'Niveau 3 · Notion', txt: 'Vocabulaire attendu dans Q3/Q4 : hippocampe, cortex, synapse (~20 nm), vésicule, neurotransmetteur, récepteur, dette de sommeil.' },
    ],
    avantDeRendre: [
      "Q1 : j'ai cité au moins deux chiffres exacts du Doc. 1.",
      "Q2 : j'ai comparé les deux groupes du Doc. 2 (sommeil immédiat vs éveil).",
      "Q3 : j'ai utilisé 4 mots scientifiques justes (hippocampe, fente, neurotransmetteur, récepteur).",
      "Q4 : mon paragraphe conseille concrètement sans faute majeure de syntaxe.",
    ],
    traceEcrite: "Sujet type DNB réussi : mobiliser des chiffres sourcés (EnCLASS 2024 / ANSES 2026), prouver la consolidation active dans l'hippocampe via un groupe témoin (Gais & Born), expliquer la transmission chimique synaptique (~20 nm) et formuler une recommandation sanitaire rigoureuse.",
    notions: ['Exploitation DNB multi-échelles', 'Méthodologie groupe témoin', 'Sommeil, écrans, hippocampe et synapse'],
    lsu: ['D4 · Extraire et interpréter (4,5 pts)', 'D1.3 · Rédiger et argumenter MDL (3,5 pts)', 'D1.3 · Modéliser une synapse (2,0 pts)'],
    fds: "Méthode Brevet 2027 : zéro paraphrase, toujours comparer valeur vs témoin et conclure avec un connecteur logique.",
    prof: {
      corrige: [
        "Q1 (2,0 pts) : Ex. 26,7 % des collégiens sont en dette de sommeil (> 2 h de rattrapage), 13,8 % dorment moins de 7 h en semaine, 30,6 % sont fatigués presque tous les matins (EnCLASS 2024) ; 58 % des 12–17 ans utilisent quotidiennement les réseaux sociaux (ANSES 2026). [1 pt par donnée exacte sourcée, max 2 pts]",
        "Q2 (2,5 pts) : En comparant deux groupes sur une même durée après apprentissage, la seule variable qui diffère est la présence immédiate de sommeil. Le meilleur rappel du groupe « Sommeil » montre que le sommeil consolide activement les souvenirs (au-delà d'une simple absence de fatigue) ; le groupe témoin est indispensable pour établir un lien causal que le sondage seul ne donne pas.",
        "Q3 (2,0 pts) : Structure : l'hippocampe (1 pt). Synapse (~20 nm) : le message électrique arrive à la terminaison présynaptique, provoque la libération de neurotransmetteurs dans la fente synaptique qui se fixent sur les récepteurs spécifiques du neurone postsynaptique (1 pt).",
        "Q4 (3,5 pts dont 0,5 pt MDL) : Réponse structurée conseillant d'arrêter le smartphone ~1 h avant le coucher et de viser 8–9 h de sommeil. Argument 1 (Doc. 1 & 2) : les écrans retardent l'endormissement et aggravent la dette de sommeil ; Argument 2 (Doc. 2 & 3) : privé de sommeil immédiat, l'hippocampe ne consolide pas efficacement les synapses formées lors des révisions. Rédaction claire, connecteurs et terminologie juste.",
      ],
      bareme: "Total strict = 10,0 points : Q1 (2,0 pts) + Q2 (2,5 pts) + Q3 (2,0 pts) + Q4 (3,0 pts fond + 0,5 pt Maîtrise de la langue = 3,5 pts).",
      erreursFrequentes: [
        "Citer seulement un pourcentage sans son intitulé exact dans Q1.",
        "Confondre l'effet des écrans le soir avec une « perte de cellules » irréversible (ici c'est un trouble fonctionnel d'endormissement et de consolidation, contrairement au bruit sur les cellules ciliées).",
      ],
      lsu: {
        MI: "0 à 3,5 pts : relève partiellement des éléments isolés sans lien causal ni vocabulaire scientifique.",
        MF: "4 à 6 pts : extrait les données du Doc. 1 mais reste imprécis sur le témoin (Q2) ou la synapse (Q3).",
        MS: "6,5 à 8,5 pts : répond juste aux 4 questions avec données sourcées, hippocampe, synapse et conseil argumenté.",
        TBM: "9 à 10 pts : articulation fluide entre données épidémiologiques, démarche expérimentale, échelle ~20 nm et rédaction DNB exemplaire.",
      },
    },
  },
];
