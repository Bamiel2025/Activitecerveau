// Modèles cliniques pédagogiques (éducation, pas diagnostic) & Bibliothèque scientifique (niveaux de preuve A/B/C)

export const CLINICAL_MODELS = {
  tag: {
    name: 'Trouble anxieux généralisé (TAG)',
    short: 'Anxiété persistante',
    level: 'B',
    disclaimer: "Modèle pédagogique simplifié : ne sert jamais à poser un diagnostic.",
    circuitDesc: "Dans les modèles neurobiologiques de l'anxiété chronique, le circuit d'alarme (amygdale, insula) est hyper-réactif, tandis que la régulation par le cortex préfrontal médian (« frein ») est moins efficace.",
    up: ['amygdale', 'insula', 'locus_coeruleus'],
    down: ['pfc_median', 'cingulaire_ant'],
    lenses: {
      circuit: "Amygdale et insula en suractivation (↑ alerte corporelle) ; frein du cortex préfrontal médian et du cortex cingulaire antérieur affaibli (↓ régulation).",
      etudes: "Méta-analyses d'IRMf montrent en moyenne une réactivité accrue de l'amygdale face aux stimuli ambigus et une connectivité préfronto-amygdalienne réduite (niveau B : cohérent entre groupes, grande variabilité individuelle).",
      symptomes: "Inquiétudes difficiles à contrôler, tension musculaire, vigilance excessive, fatigue, troubles du sommeil.",
      traitements: "Thérapies cognitivo-comportementales (TCC — entraînent la régulation préfrontale), hygiène du sommeil, parfois médicaments agissant sur la sérotonine ou le GABA.",
    },
  },
  tspt: {
    name: 'Trouble de stress post-traumatique (TSPT)',
    short: 'Stress post-traumatique',
    level: 'A',
    disclaimer: "Modèle pédagogique simplifié : ne sert jamais à poser un diagnostic.",
    circuitDesc: "Après un traumatisme, l'alarme (amygdale) reste en hypervigilance (↑), l'hippocampe contextualise moins bien la mémoire du souvenir (↓ volume/fonction en moyenne), et le cortex préfrontal médian peine à éteindre la peur apprise (↓).",
    up: ['amygdale', 'locus_coeruleus', 'insula'],
    down: ['pfc_median', 'hippocampe'],
    lenses: {
      circuit: "Amygdale ↑ (alerte immédiate), cortex préfrontal médian ↓ (extinction de la peur freinée), hippocampe ↓ (difficulté à replacer le souvenir dans le passé sécurisé).",
      etudes: "Modèle parmi les mieux répliqués en neuroimagerie clinique (niveau A pour le profil amygdale/préfrontal médian, bien qu'aucun examen IRM ne permette un diagnostic individuel).",
      symptomes: "Reviviscences (flash-backs), évitement, hypervigilance, réactions de sursaut intenses.",
      traitements: "Psychothérapies centrées sur le trauma (TCC, EMDR) pour retraiter le souvenir en sécurité ; accompagnement médical si nécessaire.",
    },
  },
  addiction: {
    name: 'Circuit de la motivation détourné (addiction)',
    short: 'Dépendance (substance / comportement)',
    level: 'A',
    disclaimer: "Note : dans The Folded Mind, l'addiction n'est pas listée dans les 10 diagnostics ; ce modèle illustre la voie dopamine / SEEKING conforme au programme de 3ème.",
    circuitDesc: "Les drogues ou récompenses aléatoires provoquent des pics anormaux de dopamine dans le noyau accumbens (depuis l'ATV). Avec la répétition, le circuit se modifie (plasticité) : le « vouloir » augmente alors que le contrôle préfrontal diminue (↓).",
    up: ['vta', 'accumbens', 'caude', 'putamen'],
    down: ['pfc_median', 'orbitofrontal'],
    lenses: {
      circuit: "Voie mésolimbique ATV → noyau accumbens sur-sollicitée (↑ « vouloir » et conditionnement), striatum dorsal recruté (habitudes automatiques), contrôle orbitofrontal/préfrontal réduit (↓ frein sur l'impulsion).",
      etudes: "Neurobiologie de la dépendance solidement établie chez l'animal et l'humain par imagerie TEP/IRM (niveau A sur le rôle de la dopamine dans la saillance incitative : vouloir ≠ aimer).",
      symptomes: "Perte de contrôle, poursuite du comportement malgré les conséquences négatives, besoin irrépressible (craving), tolérance.",
      traitements: "Prévention (lois limitant l'exposition des mineurs), accompagnement psychosocial, thérapies, substituts ou traitements médicamenteux selon les substances.",
    },
  },
  depression: {
    name: 'Épisode dépressif caractérisé (modèle circuit)',
    short: 'Dépression (modèle)',
    level: 'B',
    disclaimer: "Modèle pédagogique simplifié : ne sert jamais à poser un diagnostic.",
    circuitDesc: "Réactivité moindre du circuit de la récompense (noyau accumbens ↓ : perte de plaisir/motivation) et activité élevée du réseau du mode par défaut / cortex cingulaire antérieur sous-génual (↑ ruminations).",
    up: ['cingulaire_ant', 'cingulaire_post', 'amygdale'],
    down: ['accumbens', 'prefrontal'],
    lenses: {
      circuit: "Noyau accumbens ↓ (anhédonie, baisse de l'élan), cortex cingulaire antérieur et réseau par défaut ↑ (ruminations), cortex préfrontal dorsolatéral ↓ (effort cognitif plus difficile).",
      etudes: "Résultats convergents sur les circuits récompense/ruminations (niveau B : les mécanismes sont multiples et hétérogènes selon les personnes).",
      symptomes: "Tristesse persistante, perte d'intérêt, fatigue, troubles du sommeil et de la concentration.",
      traitements: "Psychothérapies, activité physique régulière, traitements antidépresseurs (modulant sérotonine/noradrénaline) et soutien social.",
    },
  },
  tdah: {
    name: 'Trouble du déficit de l\'attention (TDAH)',
    short: 'TDAH (modèle)',
    level: 'B',
    disclaimer: "Modèle pédagogique simplifié : ne sert jamais à poser un diagnostic.",
    circuitDesc: "Particularités de maturation et de modulation dopaminergique/noradrénergique dans les réseaux fronto-striataux (cortex préfrontal ↔ noyau caudé) et difficulté à mettre en veille le réseau du mode par défaut.",
    up: ['cingulaire_post'],
    down: ['prefrontal', 'caude', 'locus_coeruleus'],
    lenses: {
      circuit: "Boucles cortex préfrontal – noyau caudé – cervelet moins stabilisées (↓ régulation attentionnelle) ; maintien du réseau de contrôle plus exigeant face aux distractions.",
      etudes: "Études longitudinales d'IRM structurelle et fonctionnelle à large cohorte (niveau B : différences statistiques de groupe, inutilisables comme test diagnostique individuel).",
      symptomes: "Difficulté à maintenir l'attention, impulsivité, agitation motrice selon les profils.",
      traitements: "Aménagements scolaires et comportementaux, accompagnement éducatif, parfois traitements modulant dopamine et noradrénaline.",
    },
  },
};

export const EVIDENCE_LEVELS = {
  A: {
    label: 'Niveau A · Solide',
    color: '#2bb673',
    desc: "Confirmé par de nombreuses études convergentes et des méta-analyses répliquées (ex. : rôle de l'hippocampe dans la mémoire épisodique ; nature chimique de la synapse).",
  },
  B: {
    label: 'Niveau B · Modéré',
    color: '#f39c34',
    desc: "Sérieux et cohérent dans plusieurs études, mais avec des variations selon les personnes ou des limites méthodologiques (ex. : études sur la durée du sommeil chez des groupes d'élèves).",
  },
  C: {
    label: 'Niveau C · Préliminaire / Modèle',
    color: '#d64541',
    desc: "Hypothèse théorique ou résultats encore débattus/indirects (ex. : découpage exact des 7 systèmes de Panksepp transposé directement à l'humain).",
  },
};

export const LIBRARY_ITEMS = [
  {
    id: 'lib_effort_10pct',
    title: "Effort musculaire et réfutation du neuromythe des « 10 % du cerveau »",
    level: 'A',
    source: "Inserm Canal Détox ; CNRS ; sujet DNB Métropole 2018 (18GENSCMEAG3)",
    summary: "Le cerveau pèse ~2 % du corps mais consomme ~20 % de l'énergie totale (O₂ + glucose). À l'effort (70 → 180 bpm), cœur, poumons, cortex moteur, aires sensorielles et cervelet coopèrent en réseau.",
    activite: 'A1',
  },
  {
    id: 'lib_audition',
    title: "Audition, échelle des décibels et lésions des cellules ciliées",
    level: 'A',
    source: "OMS ; DNB Amérique du Nord juin 2018 (audiogramme M. X) ; DNB Pro 2022",
    summary: "Chaque +3 dB divise par 2 la durée d'écoute tolérable sans risque (seuil 85 dB, douleur 120 dB). Les cellules ciliées détruites ne se renouvellent pas, privant le cortex auditif (lobe temporal) des aigus.",
    activite: 'A2',
  },
  {
    id: 'lib_securite_routiere',
    title: "Temps de réaction, distracteurs au volant et réflexe médullaire",
    level: 'A',
    source: "Sécurité routière France ; manuels SVT Cycle 4",
    summary: "À 50 km/h, un conducteur attentif parcourt déjà 15 m durant ~1 s avant de freiner ; un SMS (~5 s) fait rouler 70–83 m à l'aveugle (risque ×23). Le mouvement volontaire passe par le cortex, contrairement au réflexe médullaire.",
    activite: 'A3',
  },
  {
    id: 'lib_synapse',
    title: "Neurones séparés, expérience de Claude Bernard et synapse chimique (~20 nm)",
    level: 'A',
    source: "Claude Bernard (1856) ; Golgi & Cajal (Nobel 1906) ; Lelivrescolaire.fr SVT 3e",
    summary: "Les neurones communiquent via une fente synaptique (~20 nm) par neurotransmetteurs et récepteurs spécifiques. Le curare bloque la jonction neurone–muscle sans détruire ni le nerf ni le muscle.",
    activite: 'A4',
  },
  {
    id: 'lib_sommeil_enclass',
    title: "Sommeil des collégiens, smartphones le soir et consolidation mnésique",
    level: 'A',
    source: "EnCLASS 2024 (OFDT/Santé publique France) ; ANSES 13 janv. 2026 ; Scoville & Milner 1957 ; Gais, Lucas & Born 2006",
    summary: "26,7 % des collégiens sont en dette de sommeil et 58 % des 12–17 ans utilisent les réseaux sociaux chaque jour. Les expériences contrôlées prouvent que le sommeil consolide activement les traces mnésiques dans l'hippocampe.",
    activite: 'A5 / DNB3',
  },
  {
    id: 'lib_recompense_puffs',
    title: "Circuit de la récompense, puffs à la nicotine et maturation préfrontale",
    level: 'A',
    source: "EnCLASS 2024 ; Loi n° 2025-175 (24 fév. 2025) ; Lelivrescolaire.fr Doc. 8 ; Volkow et al.",
    summary: "Nicotine et boucles de récompense aléatoires détournent la voie dopaminergique ATV → noyau accumbens (~82–88 UA), tandis que le cortex préfrontal régulateur mûrit jusqu'à ~25 ans.",
    activite: 'A6',
  },
];
