// Catalogue pédagogique : structures, lobes, réseaux, voies de neurotransmetteurs, systèmes émotionnels.
// Textes rédigés pour le collège (cycle 4). Les noms anglais servent de lexique pour les ressources en anglais.

export const LOBES = {
  frontal: { name: 'Lobe frontal', en: 'Frontal lobe', color: '#d98c6a' },
  parietal: { name: 'Lobe pariétal', en: 'Parietal lobe', color: '#6fa8c9' },
  temporal: { name: 'Lobe temporal', en: 'Temporal lobe', color: '#8fbf7a' },
  occipital: { name: 'Lobe occipital', en: 'Occipital lobe', color: '#c9a0d6' },
  limbique: { name: 'Cortex cingulaire (limbique)', en: 'Cingulate (limbic) cortex', color: '#e2c26a' },
  insula: { name: 'Insula', en: 'Insula', color: '#e29a9a' },
};

// group : cortex | profond | tronc | cervelet
export const STRUCTURES = {
  // ---------------- cortex ----------------
  moteur: {
    name: 'Cortex moteur primaire', en: 'Primary motor cortex', group: 'cortex', lobe: 'frontal', color: '#e0754f',
    desc: "Bande de cortex située juste en avant du sillon central (gyrus précentral). Ses neurones envoient les ordres de mouvement volontaire vers la moelle épinière, puis les muscles.",
    role: "Commande des mouvements volontaires. L'hémisphère gauche commande surtout le côté droit du corps, et inversement (controlatéralité).",
    limite: "Ici, la région correspond au gyrus précentral et au sillon central : la frontière exacte avec le cortex somesthésique est simplifiée.",
  },
  premoteur: {
    name: 'Cortex prémoteur', en: 'Premotor cortex', group: 'cortex', lobe: 'frontal', color: '#e89a6c',
    desc: "Zone en avant du cortex moteur primaire.",
    role: "Prépare et organise les mouvements avant leur exécution, en lien avec le cortex moteur.",
    limite: "Région approximée par les sillons précentraux.",
  },
  prefrontal: {
    name: 'Cortex préfrontal latéral', en: 'Lateral prefrontal cortex', group: 'cortex', lobe: 'frontal', color: '#d9a066',
    desc: "Grande partie avant du lobe frontal, sur la face externe du cerveau.",
    role: "Planifier, se concentrer, garder une information en tête, contrôler ses impulsions. Participe à de nombreux réseaux (contrôle, attention).",
    limite: "",
  },
  pfc_median: {
    name: 'Cortex préfrontal médian', en: 'Medial prefrontal cortex', group: 'cortex', lobe: 'frontal', color: '#f0b884',
    desc: "Face interne (médiane) du lobe frontal, visible quand on masque l'autre hémisphère.",
    role: "Participe à la régulation des émotions (« frein » du circuit d'alarme), à la prise de décision et à la pensée sur soi.",
    limite: "Région délimitée géométriquement (face médiane du gyrus frontal supérieur).",
  },
  frontal_inf: {
    name: 'Gyrus frontal inférieur (aire de Broca à gauche)', en: "Inferior frontal gyrus (Broca's area, left)", group: 'cortex', lobe: 'frontal', color: '#c98a5a',
    desc: "Partie inférieure du lobe frontal. À gauche, chez la plupart des personnes, elle contient l'aire de Broca.",
    role: "Production du langage (à gauche), contrôle de l'action.",
    limite: "",
  },
  orbitofrontal: {
    name: 'Cortex orbitofrontal', en: 'Orbitofrontal cortex', group: 'cortex', lobe: 'frontal', color: '#b97b55',
    desc: "Face inférieure du lobe frontal, au-dessus des orbites (yeux).",
    role: "Évalue la valeur des récompenses et des conséquences de nos choix ; lien avec les émotions et la motivation.",
    limite: "",
  },
  cingulaire_ant: {
    name: 'Cortex cingulaire antérieur', en: 'Anterior cingulate cortex', group: 'cortex', lobe: 'limbique', color: '#e2c26a',
    desc: "Face interne, autour de l'avant du corps calleux.",
    role: "Détecte les conflits et les erreurs, participe à la douleur ressentie et aux émotions.",
    limite: "",
  },
  cingulaire_post: {
    name: 'Cortex cingulaire postérieur', en: 'Posterior cingulate cortex', group: 'cortex', lobe: 'limbique', color: '#d4b85c',
    desc: "Face interne, au-dessus de l'arrière du corps calleux.",
    role: "Pièce centrale du réseau du « mode par défaut » (rêverie, souvenirs personnels).",
    limite: "",
  },
  insula: {
    name: 'Insula', en: 'Insula', group: 'cortex', lobe: 'insula', color: '#e29a9a',
    desc: "Cortex caché au fond de la scissure latérale : on ne le voit qu'en écartant les lobes ou en vue profonde.",
    role: "Perception de l'état interne du corps (cœur, estomac…), dégoût, conscience des émotions.",
    limite: "",
  },
  somesthesique: {
    name: 'Cortex somesthésique primaire', en: 'Primary somatosensory cortex', group: 'cortex', lobe: 'parietal', color: '#5b9bd5',
    desc: "Bande de cortex juste en arrière du sillon central (gyrus postcentral).",
    role: "Reçoit les messages du toucher, de la température, de la douleur et de la position du corps.",
    limite: "",
  },
  parietal: {
    name: 'Cortex pariétal associatif', en: 'Parietal association cortex', group: 'cortex', lobe: 'parietal', color: '#7fb3d5',
    desc: "Reste du lobe pariétal (lobules supérieur et inférieur, précunéus).",
    role: "Situer son corps et les objets dans l'espace, orienter l'attention, calcul.",
    limite: "",
  },
  auditif: {
    name: 'Cortex auditif primaire', en: 'Primary auditory cortex', group: 'cortex', lobe: 'temporal', color: '#5fae6e',
    desc: "Petit gyrus transverse (gyrus de Heschl) sur la face supérieure du lobe temporal.",
    role: "Première étape corticale du traitement des sons.",
    limite: "",
  },
  temporal: {
    name: 'Cortex temporal', en: 'Temporal cortex', group: 'cortex', lobe: 'temporal', color: '#9ccc85',
    desc: "Lobe temporal latéral et inférieur (dont le gyrus fusiforme).",
    role: "Compréhension du langage (à gauche), reconnaissance des objets et des visages, mémoire des connaissances.",
    limite: "",
  },
  parahippocampique: {
    name: 'Gyrus parahippocampique', en: 'Parahippocampal gyrus', group: 'cortex', lobe: 'temporal', color: '#b5d99c',
    desc: "Face interne du lobe temporal, contre l'hippocampe.",
    role: "Porte d'entrée des informations vers l'hippocampe ; mémoire des lieux.",
    limite: "",
  },
  visuel: {
    name: 'Cortex visuel primaire', en: 'Primary visual cortex', group: 'cortex', lobe: 'occipital', color: '#a970c4',
    desc: "Autour de la scissure calcarine, tout à l'arrière du cerveau (pôle occipital).",
    role: "Reçoit les messages venant des yeux (via le thalamus) : première étape de la vision consciente.",
    limite: "Approximé par la scissure calcarine et le pôle occipital.",
  },
  occipital: {
    name: 'Cortex visuel associatif', en: 'Visual association cortex', group: 'cortex', lobe: 'occipital', color: '#c9a0d6',
    desc: "Reste du lobe occipital.",
    role: "Analyse des formes, des couleurs, du mouvement.",
    limite: "",
  },
  paroi_mediane: {
    name: 'Paroi médiane (non corticale)', en: 'Medial wall', group: 'cortex', lobe: null, color: '#8a8f99',
    desc: "Zone de la face interne où passent le corps calleux et les structures profondes : ce n'est pas du cortex.",
    role: '', limite: "Artefact de la surface corticale moyenne (fsaverage).", hidden: true,
  },

  // ---------------- structures profondes ----------------
  hippocampe: {
    name: 'Hippocampe', en: 'Hippocampus', group: 'profond', color: '#f2c14e',
    desc: "Structure enroulée à l'intérieur du lobe temporal, en forme d'hippocampe (le poisson).",
    role: "Indispensable pour former de nouveaux souvenirs d'événements et de faits ; les souvenirs sont ensuite consolidés dans des réseaux du cortex, notamment pendant le sommeil.",
    limite: "",
  },
  amygdale: {
    name: 'Amygdale', en: 'Amygdala', group: 'profond', color: '#e4572e',
    desc: "Petit noyau en forme d'amande, à l'avant de l'hippocampe, dans le lobe temporal.",
    role: "Détecte rapidement ce qui est important pour nous (danger mais aussi récompense) et déclenche des réactions du corps. Elle travaille en réseau avec le cortex préfrontal, qui la module.",
    limite: "",
  },
  thalamus: {
    name: 'Thalamus', en: 'Thalamus', group: 'profond', color: '#76b7b2',
    desc: "Gros noyau au centre du cerveau, de chaque côté du 3e ventricule.",
    role: "Relais et filtre des messages sensoriels (sauf l'odorat) vers le cortex.",
    limite: "",
  },
  caude: {
    name: 'Noyau caudé', en: 'Caudate nucleus', group: 'profond', color: '#4e79a7',
    desc: "Noyau en forme de virgule, qui longe le ventricule latéral. Fait partie du striatum.",
    role: "Apprentissage des habitudes et des actions dirigées vers un but.",
    limite: "",
  },
  putamen: {
    name: 'Putamen', en: 'Putamen', group: 'profond', color: '#5f8fc4',
    desc: "Noyau situé en dehors du pallidum. Fait partie du striatum.",
    role: "Apprentissage et automatisation des gestes (savoir-faire moteurs).",
    limite: "",
  },
  pallidum: {
    name: 'Pallidum (globus pallidus)', en: 'Globus pallidus', group: 'profond', color: '#9c755f',
    desc: "Noyau interne aux putamen.",
    role: "Sortie inhibitrice (GABA) des noyaux gris centraux : « freine » ou « libère » les mouvements.",
    limite: "",
  },
  accumbens: {
    name: 'Noyau accumbens', en: 'Nucleus accumbens', group: 'profond', color: '#ff9da7',
    desc: "Petit noyau à l'avant du striatum, sous la tête du noyau caudé.",
    role: "Carrefour de la motivation : reçoit la dopamine venant de l'aire tegmentale ventrale. Les drogues et certaines conduites addictives détournent ce circuit.",
    limite: "",
  },
  hypothalamus: {
    name: 'Hypothalamus', en: 'Hypothalamus', group: 'profond', color: '#edc948',
    desc: "Petite région sous le thalamus, au-dessus de l'hypophyse.",
    role: "Régule faim, soif, température, sommeil, stress (axe hormonal du stress) et comportements de reproduction.",
    limite: "",
  },
  ventricule: {
    name: 'Ventricule latéral', en: 'Lateral ventricle', group: 'profond', color: '#9fd0e8',
    desc: "Cavité remplie de liquide cérébrospinal.",
    role: "Produit et fait circuler le liquide qui protège et nourrit le cerveau.",
    limite: "",
  },
  corps_calleux: {
    name: 'Corps calleux', en: 'Corpus callosum', group: 'profond', color: '#e8e2d0',
    desc: "Large faisceau de fibres nerveuses (substance blanche) qui relie les deux hémisphères.",
    role: "Permet aux deux hémisphères d'échanger des informations.",
    limite: "Forme approximée à partir de la substance blanche médiane du template MNI.",
  },
  vta: {
    name: 'Aire tegmentale ventrale (ATV / VTA)', en: 'Ventral tegmental area', group: 'tronc', color: '#ff6f91',
    desc: "Petit groupe de neurones au sommet du tronc cérébral (mésencéphale).",
    role: "Source de la dopamine du circuit de la motivation (vers le noyau accumbens et le cortex préfrontal).",
    limite: "",
  },
  substance_noire: {
    name: 'Substance noire', en: 'Substantia nigra', group: 'tronc', color: '#6b5b95',
    desc: "Noyau du mésencéphale, riche en neurones à dopamine.",
    role: "Envoie de la dopamine au striatum pour faciliter le mouvement (sa dégénérescence cause la maladie de Parkinson).",
    limite: "",
  },
  locus_coeruleus: {
    name: 'Locus coeruleus', en: 'Locus coeruleus', group: 'tronc', color: '#3b8ea5',
    desc: "Minuscule noyau bleuté du tronc cérébral (pont).",
    role: "Source de la noradrénaline du cerveau : vigilance, alerte, réaction au stress.",
    limite: "Position approximative (petite capsule) : le noyau est trop petit pour l'atlas utilisé.", approx: true,
  },
  raphe: {
    name: 'Noyaux du raphé', en: 'Raphe nuclei', group: 'tronc', color: '#c06c84',
    desc: "Colonne de noyaux sur la ligne médiane du tronc cérébral.",
    role: "Source de la sérotonine : humeur, sommeil, appétit.",
    limite: "Position approximative (capsule schématique).", approx: true,
  },
  pag: {
    name: 'Substance grise périaqueducale (SGPA)', en: 'Periaqueductal gray', group: 'tronc', color: '#f08a5d',
    desc: "Substance grise autour de l'aqueduc, dans le mésencéphale.",
    role: "Déclenche des réactions de survie (fuite, immobilisation, cris) et module la douleur.",
    limite: "Position approximative (capsule schématique).", approx: true,
  },
  meynert: {
    name: 'Noyau basal de Meynert', en: 'Nucleus basalis of Meynert', group: 'profond', color: '#59a14f',
    desc: "Groupe de neurones sous le striatum (« cerveau antérieur basal »).",
    role: "Source principale de l'acétylcholine du cortex : attention, apprentissage.",
    limite: "Position approximative (capsule schématique).", approx: true,
  },
  tronc: {
    name: 'Tronc cérébral', en: 'Brainstem', group: 'tronc', color: '#b07aa1',
    desc: "Relie le cerveau à la moelle épinière (mésencéphale, pont, bulbe).",
    role: "Fonctions vitales (respiration, rythme cardiaque), éveil ; passage de tous les messages entre cerveau et moelle épinière.",
    limite: "La moelle épinière et les nerfs ne sont pas représentés dans cet atlas.",
  },
  cervelet: {
    name: 'Cervelet', en: 'Cerebellum', group: 'cervelet', color: '#86bcb6',
    desc: "Structure plissée sous le lobe occipital, en arrière du tronc cérébral.",
    role: "Coordination et précision des mouvements, équilibre, apprentissage des gestes.",
    limite: "Surface lissée : les fines lamelles (folia) ne sont pas représentées.",
  },
};

// Groupes affichés dans l'index
export const INDEX_GROUPS = [
  { title: 'Lobe frontal', keys: ['moteur', 'premoteur', 'prefrontal', 'pfc_median', 'frontal_inf', 'orbitofrontal'] },
  { title: 'Lobe pariétal', keys: ['somesthesique', 'parietal'] },
  { title: 'Lobe temporal', keys: ['auditif', 'temporal', 'parahippocampique'] },
  { title: 'Lobe occipital', keys: ['visuel', 'occipital'] },
  { title: 'Cortex cingulaire et insula', keys: ['cingulaire_ant', 'cingulaire_post', 'insula'] },
  { title: 'Structures profondes', keys: ['hippocampe', 'amygdale', 'thalamus', 'hypothalamus', 'caude', 'putamen', 'pallidum', 'accumbens', 'meynert', 'corps_calleux', 'ventricule'] },
  { title: 'Tronc cérébral et cervelet', keys: ['tronc', 'vta', 'substance_noire', 'raphe', 'locus_coeruleus', 'pag', 'cervelet'] },
];

// 7 réseaux de Yeo et al. (2011)
export const NETWORKS = [
  null,
  { id: 'vis', name: 'Réseau visuel', en: 'Visual network', color: '#9b59b6', desc: "Traite les informations visuelles." },
  { id: 'smn', name: 'Réseau somatomoteur', en: 'Somatomotor network', color: '#4a90d9', desc: "Commander les mouvements et sentir son corps : cortex moteur et somesthésique travaillent ensemble." },
  { id: 'dan', name: "Réseau de l'attention dorsale", en: 'Dorsal attention network', color: '#2ca02c', desc: "Orienter volontairement son attention vers un objet ou un endroit." },
  { id: 'sal', name: 'Réseau de saillance', en: 'Salience / ventral attention network', color: '#d62ab5', desc: "Repère ce qui est important (inattendu, émotionnel) et fait basculer l'attention." },
  { id: 'lim', name: 'Réseau limbique', en: 'Limbic network', color: '#d9c45a', desc: "Faces inférieures frontale et temporale : valeur des récompenses, émotions." },
  { id: 'fpn', name: 'Réseau de contrôle fronto-pariétal', en: 'Frontoparietal control network', color: '#f39c34', desc: "Planifier, résoudre un problème, garder une consigne en tête." },
  { id: 'dmn', name: 'Réseau du mode par défaut', en: 'Default mode network', color: '#d64541', desc: "Actif quand on pense à soi, aux autres, quand on se souvient ou qu'on imagine l'avenir." },
];

// Voies de neurotransmetteurs (schématiques). type : exc = excitateur, inh = inhibiteur, mod = neuromodulateur
// Chaque trajet : [source, cible] (clés de structures ; « _S » = des deux côtés).
export const PATHWAYS = {
  glutamate: {
    name: 'Glutamate', type: 'exc', color: '#3fb6ff',
    desc: "Principal neurotransmetteur excitateur : il « active » le neurone suivant. Exemples de voies : thalamus → cortex, cortex → striatum, hippocampe → cortex préfrontal.",
    routes: [['thalamus', 'somesthesique'], ['thalamus', 'visuel'], ['thalamus', 'moteur'], ['prefrontal', 'caude'], ['moteur', 'putamen'], ['hippocampe', 'pfc_median'], ['moteur', 'tronc']],
  },
  gaba: {
    name: 'GABA', type: 'inh', color: '#ff7a59',
    desc: "Principal neurotransmetteur inhibiteur : il « freine » le neurone suivant. Exemples : striatum → pallidum → thalamus (contrôle du mouvement).",
    routes: [['putamen', 'pallidum'], ['caude', 'pallidum'], ['pallidum', 'thalamus'], ['caude', 'substance_noire'], ['accumbens', 'vta']],
  },
  dopamine: {
    name: 'Dopamine', type: 'mod', color: '#ff4f8b',
    desc: "Signal de la motivation et de l'apprentissage par la récompense (« vouloir », plus que « aimer »), et de la facilitation du mouvement. Voies : ATV → accumbens (mésolimbique), ATV → préfrontal (mésocorticale), substance noire → striatum. Cible commune des drogues stimulantes.",
    routes: [['vta', 'accumbens'], ['vta', 'pfc_median'], ['vta', 'prefrontal'], ['substance_noire', 'putamen'], ['substance_noire', 'caude']],
  },
  serotonine: {
    name: 'Sérotonine', type: 'mod', color: '#b78cff',
    desc: "Module l'humeur, le sommeil, l'appétit. Les noyaux du raphé envoient des fibres vers presque tout le cerveau.",
    routes: [['raphe', 'prefrontal'], ['raphe', 'hippocampe'], ['raphe', 'amygdale'], ['raphe', 'caude'], ['raphe', 'cervelet'], ['raphe', 'cingulaire_ant']],
  },
  noradrenaline: {
    name: 'Noradrénaline', type: 'mod', color: '#3fd0b0',
    desc: "Vigilance et alerte : le locus coeruleus « réveille » tout le cerveau en cas de danger ou de surprise (cœur qui accélère, muscles prêts).",
    routes: [['locus_coeruleus', 'prefrontal'], ['locus_coeruleus', 'hippocampe'], ['locus_coeruleus', 'amygdale'], ['locus_coeruleus', 'thalamus'], ['locus_coeruleus', 'cervelet'], ['locus_coeruleus', 'parietal']],
  },
  acetylcholine: {
    name: 'Acétylcholine', type: 'mod', color: '#9ad94f',
    desc: "Attention et apprentissage dans le cerveau (noyau basal de Meynert → cortex). C'est aussi le neurotransmetteur de la jonction neurone–muscle.",
    routes: [['meynert', 'prefrontal'], ['meynert', 'parietal'], ['meynert', 'temporal'], ['meynert', 'hippocampe'], ['meynert', 'amygdale']],
  },
  histamine: {
    name: 'Histamine', type: 'mod', color: '#ffd23f',
    desc: "Maintient l'éveil (d'où la somnolence causée par certains antihistaminiques). Source : hypothalamus postérieur.",
    routes: [['hypothalamus', 'prefrontal'], ['hypothalamus', 'thalamus'], ['hypothalamus', 'cingulaire_ant'], ['hypothalamus', 'hippocampe']],
  },
  orexine: {
    name: 'Orexine', type: 'mod', color: '#ff9f1c',
    desc: "Stabilise l'éveil et l'appétit ; active les autres systèmes d'éveil (locus coeruleus, raphé, ATV). Source : hypothalamus latéral.",
    routes: [['hypothalamus', 'locus_coeruleus'], ['hypothalamus', 'raphe'], ['hypothalamus', 'vta'], ['hypothalamus', 'prefrontal']],
  },
};

// Systèmes émotionnels de Panksepp (modèle théorique, 1998)
export const SYSTEMS = {
  seeking: {
    name: 'RECHERCHE (SEEKING)', valence: 'agréable', color: '#ff4f8b',
    desc: "Envie d'explorer, curiosité, motivation à obtenir quelque chose. Circuit de la dopamine : hypothalamus latéral → aire tegmentale ventrale → noyau accumbens → cortex préfrontal médian. C'est ce circuit que les drogues et les conduites addictives détournent.",
    structures: ['hypothalamus', 'vta', 'accumbens', 'pfc_median', 'orbitofrontal'],
    circuit: [['hypothalamus', 'vta'], ['vta', 'accumbens'], ['accumbens', 'pfc_median'], ['vta', 'pfc_median']],
  },
  fear: {
    name: 'PEUR (FEAR)', valence: 'désagréable', color: '#e4572e',
    desc: "Réaction à un danger : l'amygdale déclenche l'alerte, l'hypothalamus et la substance grise périaqueducale (SGPA) déclenchent les réactions du corps (fuite, immobilisation, cœur qui bat vite). Le cortex préfrontal médian peut moduler cette alarme.",
    structures: ['amygdale', 'hypothalamus', 'pag', 'pfc_median'],
    circuit: [['amygdale', 'hypothalamus'], ['hypothalamus', 'pag'], ['amygdale', 'pag'], ['pfc_median', 'amygdale']],
  },
  rage: {
    name: 'COLÈRE (RAGE)', valence: 'désagréable', color: '#c0392b',
    desc: "Réaction à une frustration ou une contrainte. Circuit amygdale médiane → hypothalamus → SGPA.",
    structures: ['amygdale', 'hypothalamus', 'pag'],
    circuit: [['amygdale', 'hypothalamus'], ['hypothalamus', 'pag']],
  },
  lust: {
    name: 'DÉSIR SEXUEL (LUST)', valence: 'agréable', color: '#e86fb0',
    desc: "Désir et plaisir liés à la reproduction. Les messages des récepteurs sensoriels (toucher) arrivent au cortex somesthésique ; l'hypothalamus, l'amygdale et le circuit de la récompense participent à la sensation de plaisir.",
    structures: ['hypothalamus', 'amygdale', 'somesthesique', 'insula', 'accumbens', 'vta'],
    circuit: [['amygdale', 'hypothalamus'], ['hypothalamus', 'pag'], ['vta', 'accumbens'], ['somesthesique', 'insula']],
  },
  care: {
    name: 'SOIN (CARE)', valence: 'agréable', color: '#f2a65a',
    desc: "Tendresse, envie de prendre soin des autres (attachement parent–enfant, amitié). Hypothalamus (aire préoptique), aire tegmentale ventrale, noyau accumbens, cortex cingulaire antérieur.",
    structures: ['hypothalamus', 'vta', 'accumbens', 'cingulaire_ant'],
    circuit: [['hypothalamus', 'vta'], ['vta', 'accumbens'], ['cingulaire_ant', 'hypothalamus']],
  },
  panic: {
    name: 'DÉTRESSE (PANIC/GRIEF)', valence: 'désagréable', color: '#5b7db1',
    desc: "Tristesse et détresse de la séparation (sentiment de solitude). Cortex cingulaire antérieur → thalamus/hypothalamus → SGPA.",
    structures: ['cingulaire_ant', 'thalamus', 'hypothalamus', 'pag'],
    circuit: [['cingulaire_ant', 'thalamus'], ['thalamus', 'hypothalamus'], ['hypothalamus', 'pag']],
  },
  play: {
    name: 'JEU (PLAY)', valence: 'agréable', color: '#2bb673',
    desc: "Joie du jeu social, du rire, des jeux de bagarre « pour de faux ». Thalamus, SGPA, cortex somesthésique (toucher) et circuit de la récompense.",
    structures: ['thalamus', 'pag', 'somesthesique', 'accumbens', 'pfc_median'],
    circuit: [['pag', 'thalamus'], ['thalamus', 'somesthesique'], ['thalamus', 'accumbens'], ['accumbens', 'pfc_median']],
  },
};

export const LEXIQUE = [
  ['cerebellum', 'cervelet'], ['brainstem', 'tronc cérébral'], ['deep structures', 'structures profondes'],
  ['hippocampus', 'hippocampe'], ['amygdala', 'amygdale'], ['nucleus accumbens', 'noyau accumbens'],
  ['ventral tegmental area (VTA)', 'aire tegmentale ventrale (ATV)'], ['pathway', 'voie (nerveuse)'],
  ['slice', 'coupe'], ['axial / coronal / sagittal', 'horizontale / frontale / sagittale'],
  ['reward / seeking', 'récompense / recherche (motivation)'], ['network', 'réseau'],
  ['lobe', 'lobe'], ['cortex', 'cortex'], ['gyrus / sulcus', 'circonvolution / sillon'],
  ['white matter / grey matter', 'substance blanche / substance grise'], ['neurotransmitter', 'neurotransmetteur'],
  ['receptor', 'récepteur'], ['synapse / synaptic cleft', 'synapse / fente synaptique'],
  ['excitatory / inhibitory', 'excitateur / inhibiteur'], ['left / right hemisphere', 'hémisphère gauche / droit'],
  ['medial / lateral', 'médian (vers le milieu) / latéral (vers l\'extérieur)'], ['anterior / posterior', 'antérieur (avant) / postérieur (arrière)'],
  ['superior / inferior', 'supérieur (haut) / inférieur (bas)'], ['fear / play / care', 'peur / jeu / soin'],
];
