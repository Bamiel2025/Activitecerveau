// Enrichissements visuels, graphiques SVG sourcés et préréglages 3D simplifiés
// pour les 6 applications indépendantes A1..A6 (Cycle 4 SVT).
import {
  mountAuditionDoc,
  mountReflexeDoc,
  mountSynapseDoc,
  mountSommeilDoc,
  mountRecompenseDoc,
} from './schemas.js';

export const MINI_META = {
  A1: {
    triggerImg: 'img/a1.jpg',
    triggerAlt: 'Athlète en pleine course avec illustration du cerveau actif en réseau et cœur accéléré',
    triggerCaption: "Pendant l'effort physique, muscles et cœur accélèrent — mais que fait le cerveau au même moment ?",
    needsMri: true,
    targetKeys: ['moteur', 'somesthesique', 'cervelet'],
    presets3d: [
      {
        id: 'a1_net',
        label: '1. Réseau bouger & sentir',
        subtitle: 'Réseau somatomoteur (lobe frontal + pariétal)',
        role: "Pendant une course, plusieurs aires travaillent ensemble : déclencher la foulée et recevoir les appuis du corps.",
        action: { colorMode: 'networks', network: 2, view: 'lat_L', deep: false },
        legend: [{ color: '#4a90d9', name: 'Réseau somatomoteur (mouvement + toucher)' }],
      },
      {
        id: 'a1_moteur',
        label: '2. Cortex moteur',
        subtitle: 'Lobe frontal · Commande volontaire',
        role: "Envoie l'ordre nerveux volontaire aux muscles des jambes et adapte l'intensité de la course.",
        action: { isolate: 'moteur', view: 'lat_L', deep: false },
        legend: [{ color: '#e0754f', name: 'Cortex moteur primaire' }],
      },
      {
        id: 'a1_cervelet',
        label: '3. Cervelet',
        subtitle: 'À l’arrière · Équilibre et précision',
        role: "Coordonne l'équilibre, la posture et la précision de chaque geste sportif sans y penser consciemment.",
        action: { isolate: 'cervelet', view: 'post', deep: false },
        legend: [{ color: '#86bcb6', name: 'Cervelet' }],
      },
      {
        id: 'a1_somes',
        label: '4. Cortex somesthésique',
        subtitle: 'Lobe pariétal · Sensations corporelles',
        role: "Reçoit en direct les informations des articulations et des appuis du pied sur le sol.",
        action: { isolate: 'somesthesique', view: 'lat_L', deep: false },
        legend: [{ color: '#5b9bd5', name: 'Cortex somesthésique primaire' }],
      },
      {
        id: 'a1_irm',
        label: '5. Coupe IRM réelle',
        subtitle: 'Atlas ICBM152 · Coupe anatomique sagittale',
        role: "Une vraie coupe IRM montre l'ensemble des tissus nerveux : aucune région du cerveau ne reste « éteinte à 90 % ».",
        action: { isolate: 'moteur', view: 'mri_34', mri: { open: true, axis: 'sag', sliceMm: -32, clip: true, overlay: true } },
        legend: [{ color: '#e0754f', name: 'Cortex moteur + plan IRM sagittal' }],
      },
    ],
  },

  A2: {
    triggerImg: 'img/a2.jpg',
    triggerAlt: 'Adolescent avec casque audio et scène de concert lumineuse, ondes sonores vers le lobe temporal',
    triggerCaption: "Casque à fond ou concert : quel chemin suit le son jusqu'au cerveau et où commence le danger ?",
    needsMri: false,
    targetKeys: ['auditif', 'visuel', 'somesthesique'],
    presets3d: [
      {
        id: 'a2_auditif',
        label: '1. Cortex auditif primaire',
        subtitle: 'Lobe temporal · Intégration des sons',
        role: "Reçoit les messages nerveux émis par les cellules ciliées de la cochlée (oreille interne) via le nerf auditif.",
        action: { isolate: 'auditif', view: 'lat_L', deep: false },
        legend: [{ color: '#5fae6e', name: 'Cortex auditif primaire (lobe temporal)' }],
      },
      {
        id: 'a2_visuel',
        label: '2. Comparer : Cortex visuel',
        subtitle: 'Lobe occipital · À l’arrière du cerveau',
        role: "Montre la spécialisation cérébrale : la vue est traitée à l'arrière, tandis que le son arrive sur le côté.",
        action: { isolate: 'visuel', view: 'post', deep: false },
        legend: [{ color: '#a970c4', name: 'Cortex visuel primaire (lobe occipital)' }],
      },
      {
        id: 'a2_somes',
        label: '3. Comparer : Cortex toucher',
        subtitle: 'Cortex somesthésique · Lobe pariétal',
        role: "Distingue l'aire du toucher/pression de celle de l'audition : chaque sens possède son territoire.",
        action: { isolate: 'somesthesique', view: 'lat_L', deep: false },
        legend: [{ color: '#5b9bd5', name: 'Cortex somesthésique primaire' }],
      },
      {
        id: 'a2_lobes',
        label: '4. Vue globale des lobes',
        subtitle: 'Les 4 lobes de chaque hémisphère',
        role: "Permet de repérer où se situe le lobe temporal (audition) par rapport au reste du cerveau.",
        action: { colorMode: 'lobes', view: 'lat_L', deep: false },
        legend: [{ color: '#5fae6e', name: 'Lobe temporal (zone auditive)' }],
      },
    ],
  },

  A3: {
    triggerImg: 'img/a3.jpg',
    triggerAlt: 'Vue intérieure d un véhicule avec smartphone distrayant le conducteur et piéton traversant',
    triggerCaption: "Lire un message en roulant ralentit la prise de décision : quel circuit nerveux est alors ralenti ?",
    needsMri: false,
    targetKeys: ['visuel', 'moteur', 'tronc'],
    presets3d: [
      {
        id: 'a3_visuel',
        label: '1. Cortex visuel (percevoir)',
        subtitle: 'Étape 1 · Lobe occipital',
        role: "Les yeux transmettent le signal du danger jusqu'à l'arrière du cerveau : sans regard sur la route, pas d'alerte.",
        action: { isolate: 'visuel', view: 'post', deep: false },
        legend: [{ color: '#a970c4', name: 'Cortex visuel primaire' }],
      },
      {
        id: 'a3_moteur',
        label: '2. Cortex moteur (freiner)',
        subtitle: 'Étape 2 · Lobe frontal (commande volontaire)',
        role: "Élabore la réponse motrice consciente pour lever l'accélérateur et appuyer sur la pédale de frein.",
        action: { isolate: 'moteur', view: 'lat_L', deep: false },
        legend: [{ color: '#e0754f', name: 'Cortex moteur primaire' }],
      },
      {
        id: 'a3_tronc',
        label: '3. Tronc cérébral (croisement)',
        subtitle: 'Relais vers la moelle épinière',
        role: "Zone de passage où les voies motrices croisent gauche ↔ droite avant de descendre dans la moelle épinière.",
        action: { isolate: 'tronc', view: 'ant', deep: true },
        legend: [{ color: '#b07aa1', name: 'Tronc cérébral' }],
      },
      {
        id: 'a3_flip',
        label: '4. Basculer hémisphère G ↔ D',
        subtitle: 'Contrôle croisé des deux côtés du corps',
        role: "L'hémisphère gauche commande la droite du corps (et inversement) grâce au croisement dans le tronc cérébral.",
        action: { isolate: 'moteur', hemiToggle: true },
        legend: [{ color: '#e0754f', name: 'Cortex moteur (côté G ou D)' }],
      },
    ],
  },

  A4: {
    triggerImg: 'img/a4.jpg',
    triggerAlt: 'Illustration scientifique de synapse neuronale libérant des vésicules face à un blocage par curare',
    triggerCaption: "Les neurones ne se touchent pas : comment le signal traverse-t-il l'espace de 20 nm et comment agit le curare ?",
    needsMri: false,
    targetKeys: ['moteur', 'tronc', 'cervelet'],
    presets3d: [
      {
        id: 'a4_glut',
        label: '1. Voie excitatrice Glutamate',
        subtitle: 'Active les neurones suivants',
        role: "Principal neurotransmetteur excitateur du cerveau : favorise le déclenchement d'un nouveau signal électrique.",
        action: { pathway: 'glutamate', deep: true, view: 'lat_L' },
        legend: [{ color: '#3fb6ff', name: 'Voie Glutamate (excitatrice)' }],
      },
      {
        id: 'a4_gaba',
        label: '2. Voie inhibitrice GABA',
        subtitle: 'Freine les neurones cibles',
        role: "Principal neurotransmetteur inhibiteur : diminue l'excitation pour réguler l'activité nerveuse.",
        action: { pathway: 'gaba', deep: true, view: 'lat_L' },
        legend: [{ color: '#ff7a59', name: 'Voie GABA (inhibitrice)' }],
      },
      {
        id: 'a4_moteur',
        label: '3. Cortex moteur (vers muscle)',
        subtitle: 'Origine du message vers le nerf moteur',
        role: "Le message descend vers les nerfs moteurs puis traverse la synapse nerf–muscle (bloquée par le curare).",
        action: { isolate: 'moteur', view: 'lat_L', deep: false },
        legend: [{ color: '#e0754f', name: 'Cortex moteur primaire' }],
      },
      {
        id: 'a4_transp',
        label: '4. Vue globale en transparence',
        subtitle: 'Milliards de connexions synaptiques',
        role: "Rappelle que tout le cerveau communique d'un neurone à l'autre par des synapses chimiques (~20 nm).",
        action: { deep: true, view: 'mri_34' },
        legend: [{ color: '#7ea2c9', name: 'Cerveau transparent (réseaux)' }],
      },
    ],
  },

  A5: {
    triggerImg: 'img/a5.jpg',
    triggerAlt: 'Chambre sombre le soir : bureau avec cahier de révisions et smartphone lumineux retardant le sommeil',
    triggerCaption: "Réviser tard ou garder son téléphone la nuit : quel rôle joue l'hippocampe pendant le sommeil ?",
    needsMri: false,
    targetKeys: ['hippocampe', 'cervelet', 'prefrontal', 'pfc_median'],
    presets3d: [
      {
        id: 'a5_hippo',
        label: '1. Hippocampe (savoirs)',
        subtitle: 'Lobe temporal interne · Souvenirs conscients',
        role: "Indispensable pour fixer puis consolider pendant le sommeil les connaissances révisées (lésé chez le patient H.M.).",
        action: { isolate: 'hippocampe', deep: true, view: 'medial' },
        legend: [{ color: '#f2c14e', name: 'Hippocampe' }],
      },
      {
        id: 'a5_cervelet',
        label: '2. Cervelet (gestes moteurs)',
        subtitle: 'Apprentissages moteurs automatiques',
        role: "Gère la mémoire des gestes (ex. dessin dans le cas H.M.), qui reste fonctionnelle sans l'hippocampe.",
        action: { isolate: 'cervelet', deep: false, view: 'post' },
        legend: [{ color: '#86bcb6', name: 'Cervelet' }],
      },
      {
        id: 'a5_pfc',
        label: '3. Cortex préfrontal (attention)',
        subtitle: 'Avant du lobe frontal · Concentration',
        role: "Sensible à la dette de sommeil (< 8 h) : fatigue matinale, baisse d'attention et erreurs en classe.",
        action: { isolate: 'prefrontal', deep: false, view: 'ant' },
        legend: [{ color: '#d9a066', name: 'Cortex préfrontal latéral' }],
      },
      {
        id: 'a5_medial',
        label: '4. Coupe médiale transparente',
        subtitle: 'Voir hippocampe et cortex ensemble',
        role: "Permet de visualiser l'hippocampe profond et les cortex associatifs où les souvenirs se stabilisent.",
        action: { hemiMode: 'onlyR', deep: true, view: 'medial' },
        legend: [{ color: '#f2c14e', name: 'Hippocampe (interne)' }, { color: '#86bcb6', name: 'Cervelet' }],
      },
    ],
  },

  A6: {
    triggerImg: 'img/a6.jpg',
    triggerAlt: 'Design coloré de puff et notifications comparé au circuit cérébral de la dopamine',
    triggerCaption: "Pourquoi les puffs et écrans très stimulants créent-ils rapidement une envie irrépressible ?",
    needsMri: false,
    targetKeys: ['accumbens', 'vta', 'prefrontal', 'pfc_median'],
    presets3d: [
      {
        id: 'a6_dopa',
        label: '1. Voie Dopamine (récompense)',
        subtitle: 'Faisceau ATV → Accumbens → Préfrontal',
        role: "Circuit chimique de la récompense : la nicotine provoque un pic brutal et rapide de dopamine dans ce trajet.",
        action: { pathway: 'dopamine', deep: true, view: 'medial' },
        legend: [{ color: '#ff4f8b', name: 'Voie Dopamine' }],
      },
      {
        id: 'a6_acc',
        label: '2. Noyau accumbens',
        subtitle: 'Cœur du plaisir et du besoin de répéter',
        role: "Reçoit la dopamine libérée ; la répétition dérègle ce noyau et entretient la dépendance.",
        action: { isolate: 'accumbens', deep: true, view: 'ant' },
        legend: [{ color: '#ff9da7', name: 'Noyau accumbens' }],
      },
      {
        id: 'a6_vta',
        label: '3. ATV (source dopamine)',
        subtitle: 'Aire tegmentale ventrale · Tronc cérébral',
        role: "Contient les neurones à dopamine directement stimulés par la nicotine absorbée via les poumons.",
        action: { isolate: 'vta', deep: true, view: 'medial' },
        legend: [{ color: '#ff6f91', name: 'Aire tegmentale ventrale (ATV)' }],
      },
      {
        id: 'a6_pfc',
        label: '4. Cortex préfrontal (contrôle)',
        subtitle: 'Frein des impulsions (maturation ~25 ans)',
        role: "Encore en développement chez l'adolescent : sa maturité inachevée explique la plus grande vulnérabilité aux addictions.",
        action: { isolate: 'prefrontal', deep: false, view: 'ant' },
        legend: [{ color: '#d9a066', name: 'Cortex préfrontal latéral' }],
      },
    ],
  },

  A7: {
    triggerImg: 'img/a7.jpg',
    triggerAlt: 'Carte des aires visuelles V1 à V5 et dessins décolorés du patient A face à une pomme rouge et des feuilles vertes',
    triggerCaption: "Des yeux intacts mais des troubles visuels différents après une lésion cérébrale.",
    needsMri: false,
    isVisionModel: true,
    targetKeys: ['v1', 'v2', 'v3', 'v4', 'v5', 'thalamus'],
    presets3d: [
      {
        id: 'a7_all',
        label: '1. Carte des 5 aires visuelles (Doc. 4)',
        subtitle: 'Aires V1 à V5 uniquement colorées',
        role: "Seules les zones visuelles sont colorées. Clique sur une aire pour connaître son rôle.",
        action: { lesions: null, hideVisualColors: false, pathway: null, isolate: null, view: 'lat_L', deep: false },
        legend: [
          { color: '#f5d11d', name: 'V1 (Réception)' },
          { color: '#f59e42', name: 'V2 (Relais)' },
          { color: '#3898d4', name: 'V3 (Formes)' },
          { color: '#8cc63f', name: 'V4 (Couleurs)' },
          { color: '#e04636', name: 'V5 (Mouvement)' },
        ],
      },
      {
        id: 'a7_lesions',
        label: '2. Lésions Patients A et B (Doc. 3)',
        subtitle: 'Zones lésées sur l’hémisphère gauche',
        role: "Compare la lésion A (bas) et la lésion B (haut) avec le Document 3.",
        action: { lesions: 'both', hideVisualColors: true, pathway: null, isolate: null, view: 'lat_L', deep: false },
        legend: [
          { color: '#e52b20', name: 'Lésion Patient A (basse) & Patient B (haute)' },
        ],
      },
      {
        id: 'a7_superpose',
        label: '3. Superposer Lésions + Aires V1–V5',
        subtitle: 'Croiser Doc. 3 et Doc. 4 en 3D',
        role: "Superpose les lésions A et B sur les aires V1–V5 pour identifier chaque zone touchée.",
        action: { lesions: 'both', hideVisualColors: false, pathway: null, isolate: null, view: 'lat_L', deep: false },
        legend: [
          { color: '#8cc63f', name: 'Lésion A → Aire V4 (couleurs)' },
          { color: '#3898d4', name: 'Lésion B → Aire V3 (formes)' },
        ],
      },
      {
        id: 'a7_v4',
        label: '4. Patient A · Aire V4 (Couleurs)',
        subtitle: 'Lésion basse · Doc. 1',
        role: "V4 traite les couleurs. Sa lésion supprime la vision des couleurs (Patient A).",
        action: { isolate: 'v4', lesions: 'A', hideVisualColors: false, pathway: null, view: 'lat_L', deep: false },
        legend: [{ color: '#8cc63f', name: 'Aire V4 + Lésion Patient A' }],
      },
      {
        id: 'a7_v3',
        label: '5. Patient B · Aire V3 (Formes)',
        subtitle: 'Lésion haute · Doc. 2',
        role: "V3 analyse les formes. Sa lésion empêche de reconnaître les figures (Patient B).",
        action: { isolate: 'v3', lesions: 'B', hideVisualColors: false, pathway: null, view: 'lat_L', deep: false },
        legend: [{ color: '#3898d4', name: 'Aire V3 + Lésion Patient B' }],
      },
      {
        id: 'a7_v1v2',
        label: '6. Aires V1 & V2 (Entrée & Relais)',
        subtitle: 'Pôle occipital arrière',
        role: "V1 reçoit les signaux des yeux et V2 les distribue vers V3, V4 et V5.",
        action: { isolate: 'v1', lesions: null, hideVisualColors: false, pathway: null, view: 'post', deep: false },
        legend: [{ color: '#f5d11d', name: 'Aire V1 (réception)' }, { color: '#f59e42', name: 'Aire V2 (relais)' }],
      },
      {
        id: 'a7_v5',
        label: '7. Aire V5 · Mouvement',
        subtitle: 'Zone temporo-occipitale latérale',
        role: "V5 détecte le mouvement et la vitesse des objets.",
        action: { isolate: 'v5', lesions: null, hideVisualColors: false, pathway: null, view: 'lat_L', deep: false },
        legend: [{ color: '#e04636', name: 'Aire V5 / MT (mouvement)' }],
      },
      {
        id: 'a7_integration',
        label: '8. 🔗 Intégration cérébrale (Réseau)',
        subtitle: 'Thalamus → V1 → V2 → V3 + V4 + V5',
        role: "Toutes les aires V1 à V5 communiquent en réseau pour former une vision complète.",
        action: { pathway: 'vision_integration', lesions: null, hideVisualColors: false, isolate: null, view: 'lat_L', deep: false },
        legend: [
          { color: '#3fb6ff', name: 'Messages nerveux d’intégration entre aires' },
          { color: '#76b7b2', name: 'Thalamus (relais des yeux)' },
        ],
      },
    ],
  },

  A8: {
    triggerImg: 'img/a8.jpg',
    triggerAlt: 'Observation au microscope électronique d une synapse (terminaisons neurones A et B face au neurone C)',
    triggerCaption: "Au niveau d'une synapse, comment se transmet le message nerveux et à quel endroit chaque drogue bloque-t-elle ou dérègle-t-elle cette transmission ?",
    needsMri: false,
    targetKeys: ['accumbens', 'vta', 'prefrontal', 'hippocampe', 'cervelet'],
    presets3d: [
      {
        id: 'a8_dopa',
        label: '1. Circuit Dopamine (Récompense)',
        subtitle: 'ATV → Noyau accumbens → Préfrontal',
        role: "Les drogues (cocaïne, héroïne, cannabis, alcool, amphétamines) dérèglent la transmission synaptique dans ce circuit et provoquent une dépendance.",
        action: { pathway: 'dopamine', deep: true, view: 'medial' },
        legend: [{ color: '#ff4f8b', name: 'Voie Dopamine (circuit de la récompense)' }],
      },
      {
        id: 'a8_glut_gaba',
        label: '2. Voies Glutamate & GABA',
        subtitle: 'Synapses excitatrices et inhibitrices',
        role: "L'alcool bloque les synapses excitatrices et modifie le GABA, ralentissant les réflexes, l'attention et la coordination motrice.",
        action: { pathway: 'gaba', deep: true, view: 'lat_L' },
        legend: [{ color: '#ff7a59', name: 'Voie GABA (inhibitrice)' }],
      },
      {
        id: 'a8_hippo',
        label: '3. Hippocampe (Mémoire & apprentissage)',
        subtitle: 'Lobe temporal interne',
        role: "Ciblé par le cannabis : perturbation synaptique entraînant troubles de l'attention, de la mémorisation et des apprentissages.",
        action: { isolate: 'hippocampe', deep: true, view: 'medial' },
        legend: [{ color: '#f2c14e', name: 'Hippocampe (mémoire)' }],
      },
      {
        id: 'a8_cervelet',
        label: '4. Cervelet (Équilibre & réflexes)',
        subtitle: 'À l’arrière du cerveau',
        role: "Perturbé par l'alcool : perte d'équilibre, gestes imprécis et temps de réaction allongé.",
        action: { isolate: 'cervelet', deep: false, view: 'post' },
        legend: [{ color: '#86bcb6', name: 'Cervelet' }],
      },
    ],
  },
};

export const VISION_ZONES = {
  v1: {
    code: 'V1',
    color: '#f5d11d',
    textDark: true,
    title: 'Aire visuelle V1 (réception)',
    subtitle: "Pôle occipital · Entrée",
    role: "Reçoit en premier les messages nerveux venant des yeux.",
    lesionTitle: 'Lésion de V1 : cécité corticale',
    lesionDesc: "L'information visuelle n'arrive plus au cortex : perte de la vision.",
    img: 'img/vision_doc4.png',
    imgCaption: 'Doc. 4 — V1 (jaune) : entrée des messages visuels.',
  },
  v2: {
    code: 'V2',
    color: '#f59e42',
    textDark: true,
    title: 'Aire visuelle V2 (relais)',
    subtitle: 'Tri et distribution',
    role: "Trie et envoie les messages de V1 vers V3, V4 et V5.",
    lesionTitle: 'Lésion de V2 : relais coupé',
    lesionDesc: "Les messages ne sont plus répartis vers les aires spécialisées.",
    img: 'img/vision_doc4.png',
    imgCaption: 'Doc. 4 — V2 (orange) : relais vers V3, V4 et V5.',
  },
  v3: {
    code: 'V3',
    color: '#3898d4',
    textDark: false,
    title: 'Aire visuelle V3 (formes)',
    subtitle: 'Lésion du Patient B',
    role: "Analyse les contours et permet de reconnaître les formes.",
    lesionTitle: 'Lésion Patient B (Docs 2 & 3) : formes perdues',
    lesionDesc: "Le patient B ne reconnaît plus les formes (0/4 au test de Benson).",
    img: 'img/vision_doc2.png',
    imgCaption: 'Doc. 2 — Test du patient B (D.F. Benson) : formes non reconnues.',
  },
  v4: {
    code: 'V4',
    color: '#8cc63f',
    textDark: true,
    title: 'Aire visuelle V4 (couleurs)',
    subtitle: 'Lésion du Patient A',
    role: "Traite et reconstitue les couleurs des objets.",
    lesionTitle: 'Lésion Patient A (Docs 1 & 3) : couleurs perdues',
    lesionDesc: "Le patient A garde les formes mais dessine tout en gris/brun.",
    img: 'img/vision_doc1.png',
    imgCaption: 'Doc. 1 — Dessins du patient A : formes justes mais sans couleur.',
  },
  v5: {
    code: 'V5',
    color: '#e04636',
    textDark: false,
    title: 'Aire visuelle V5 (mouvement)',
    subtitle: 'Vitesse et direction',
    role: "Détecte les déplacements et la vitesse des objets.",
    lesionTitle: 'Lésion de V5 : mouvement saccadé',
    lesionDesc: "Les objets en mouvement apparaissent comme des images figées.",
    img: 'img/vision_doc4.png',
    imgCaption: 'Doc. 4 — V5 (rouge) : analyse du mouvement.',
  },
  thalamus: {
    code: 'Thalamus',
    color: '#76b7b2',
    textDark: true,
    title: 'Thalamus (relais des yeux)',
    subtitle: 'Relais profond',
    role: "Transmet les messages des yeux (nerf optique) jusqu'à V1.",
    lesionTitle: 'Relais thalamique interrompu',
    lesionDesc: "Les messages des yeux n'atteignent plus le cortex visuel.",
    img: 'img/vision_doc4.png',
    imgCaption: 'Le thalamus relaie les messages visuels vers V1.',
  },
};

function renderVisionSimulationSvg({ v1, v2, v3, v4, v5, integration }) {
  // Cas 1 : Entrée V1 coupée -> cécité corticale
  if (!v1) {
    return `
      <svg viewBox="0 0 360 155" class="sci-svg" role="img" aria-label="Simulation visuelle : aire V1 lésée, cécité corticale">
        <rect x="0" y="0" width="360" height="155" rx="8" fill="#0d1117"/>
        <text x="180" y="68" text-anchor="middle" font-size="13" font-weight="700" fill="#f8fafc">Aucune perception visuelle consciente</text>
        <text x="180" y="90" text-anchor="middle" font-size="10.5" fill="#94a3b8">Aire V1 inactive : les messages des yeux n'arrivent pas au cortex</text>
        <text x="180" y="138" text-anchor="middle" font-size="10" fill="#f5d11d">Cécité corticale (yeux sains mais V1 lésée)</text>
      </svg>
    `;
  }

  // Cas 2 : V2 coupée -> relais brouillé
  if (!v2) {
    return `
      <svg viewBox="0 0 360 155" class="sci-svg" role="img" aria-label="Simulation visuelle : aire V2 coupée, relais désorganisé">
        <rect x="0" y="0" width="360" height="155" rx="8" fill="#1e2430"/>
        <g opacity="0.35">
          <circle cx="95" cy="78" r="24" fill="#888"/>
          <circle cx="115" cy="70" r="18" fill="#aaa"/>
          <rect x="200" y="55" width="75" height="40" rx="8" fill="#777"/>
        </g>
        <text x="180" y="68" text-anchor="middle" font-size="12.5" font-weight="700" fill="#f59e42">Signaux reçus en V1 mais non triés (V2 coupée)</text>
        <text x="180" y="88" text-anchor="middle" font-size="10.5" fill="#cbd5e1">Les aires V3, V4 et V5 ne reçoivent plus correctement le relais</text>
      </svg>
    `;
  }

  // Cas 3 : Aires actives mais SANS intégration (travail isolé non mis en relation)
  if (!integration) {
    const colApple = v4 ? '#d93829' : '#7b8088';
    const colLeaf = v4 ? '#4ba336' : '#7b8088';
    return `
      <svg viewBox="0 0 360 155" class="sci-svg" role="img" aria-label="Informations fragmentées sans intégration cérébrale">
        <rect x="8" y="8" width="108" height="114" rx="8" fill="rgba(56,152,212,0.1)" stroke="#3898d4" stroke-width="1.5"/>
        <text x="62" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#3898d4">V3 seule (Formes)</text>
        ${v3 ? `
          <path d="M62 46 C46 46 38 60 40 76 C42 94 53 102 62 99 C71 102 82 94 84 76 C86 60 78 46 62 46 Z" fill="none" stroke="currentColor" stroke-width="2"/>
          <path d="M62 46 Q74 32 86 38 Q74 49 62 46 Z" fill="none" stroke="currentColor" stroke-width="1.6"/>
          <text x="62" y="114" text-anchor="middle" font-size="9" class="svg-sub">Contour sans couleur</text>
        ` : `<text x="62" y="74" text-anchor="middle" font-size="10" fill="#c84b31">V3 inactive</text>`}

        <rect x="126" y="8" width="108" height="114" rx="8" fill="rgba(140,198,63,0.1)" stroke="#8cc63f" stroke-width="1.5"/>
        <text x="180" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#5e8f1d">V4 seule (Couleurs)</text>
        ${v4 ? `
          <circle cx="174" cy="73" r="19" fill="${colApple}" opacity="0.72"/>
          <circle cx="192" cy="52" r="12" fill="${colLeaf}" opacity="0.72"/>
          <text x="180" y="114" text-anchor="middle" font-size="9" class="svg-sub">Taches sans contour</text>
        ` : `<text x="180" y="74" text-anchor="middle" font-size="10" fill="#c84b31">V4 inactive</text>`}

        <rect x="244" y="8" width="108" height="114" rx="8" fill="rgba(224,70,54,0.1)" stroke="#e04636" stroke-width="1.5"/>
        <text x="298" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="#e04636">V5 seule (Mouv.)</text>
        ${v5 ? `
          <line x1="264" y1="70" x2="328" y2="70" stroke="#e04636" stroke-width="3" stroke-dasharray="5 3"/>
          <polygon points="326,64 338,70 326,76" fill="#e04636"/>
          <text x="298" y="114" text-anchor="middle" font-size="9" class="svg-sub">Vecteur sans objet</text>
        ` : `<text x="298" y="74" text-anchor="middle" font-size="10" fill="#c84b31">V5 inactive</text>`}

        <text x="180" y="143" text-anchor="middle" font-size="10.5" font-weight="700" fill="#c84b31">⚠️ Liens coupés : pas d'intégration → pas d'objet unifié reconnu !</text>
      </svg>
    `;
  }

  // Cas 4 : Intégration active, on observe l'effet exact d'une lésion de V3, V4 ou V5
  const appleFill = v4 ? '#d93829' : '#7a7a75';
  const leafFill = v4 ? '#4ca635' : '#8a867c';
  const shapeOk = v3;
  const motionOk = v5;

  return `
    <svg viewBox="0 0 360 155" class="sci-svg" role="img" aria-label="Perception résultante selon les aires V3, V4 et V5 actives">
      <!-- Fond de scène -->
      <rect x="6" y="6" width="348" height="122" rx="8" fill="var(--surface)" stroke="currentColor" stroke-opacity="0.14"/>

      <!-- Pomme & feuille (statiques, test de V3 formes & V4 couleurs) -->
      <g transform="translate(86, 72)">
        ${shapeOk ? `
          <path d="M0,-24 C-20,-24 -30,-8 -28,12 C-26,30 -12,38 0,34 C12,38 26,30 28,12 C30,-8 20,-24 0,-24 Z" fill="${appleFill}" stroke="#334155" stroke-width="1.3"/>
          <path d="M0,-24 Q0,-34 4,-38" fill="none" stroke="#5c4033" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M2,-31 Q22,-42 28,-24 Q14,-18 2,-31 Z" fill="${leafFill}" stroke="#334155" stroke-width="1"/>
        ` : `
          <!-- V3 lésée (Patient B) : formes brouillées / méconnaissables -->
          <polygon points="-24,-18 14,-28 28,4 6,34 -26,18" fill="${appleFill}" opacity="0.65"/>
          <ellipse cx="14" cy="-22" rx="16" ry="6" transform="rotate(24)" fill="${leafFill}" opacity="0.65"/>
          <text x="0" y="48" text-anchor="middle" font-size="9" fill="#c84b31">Formes confuses (V3)</text>
        `}
      </g>

      <!-- Test de formes (style Patient B) -->
      <g transform="translate(178, 42)">
        ${shapeOk ? `
          <polygon points="14,0 28,24 0,24" fill="none" stroke="currentColor" stroke-width="2"/>
          <polygon points="14,34 28,58 0,58" fill="${v4 ? '#3898d4' : '#64748b'}"/>
          <text x="14" y="76" text-anchor="middle" font-size="9" class="svg-sub">Formes nettes</text>
        ` : `
          <path d="M2,12 Q16,2 28,18 Q10,28 2,12 Z" fill="none" stroke="#c84b31" stroke-width="1.8" stroke-dasharray="3 2"/>
          <path d="M0,45 Q18,32 28,54 Q8,62 0,45 Z" fill="${v4 ? '#3898d4' : '#64748b'}" opacity="0.65"/>
          <text x="14" y="76" text-anchor="middle" font-size="9" fill="#c84b31">Appariement impossible</text>
        `}
      </g>

      <!-- Balle en mouvement (test de V5) -->
      <g transform="translate(232, 24)">
        <rect x="0" y="0" width="110" height="90" rx="8" fill="var(--chip)" stroke="currentColor" stroke-opacity="0.12"/>
        <text x="55" y="15" text-anchor="middle" font-size="9" font-weight="700" class="svg-sub">${motionOk ? 'Mouvement fluide (V5)' : 'Images saccadées (V5 OFF)'}</text>
        ${motionOk ? `
          <circle cx="22" cy="52" r="11" fill="${v4 ? '#e04636' : '#64748b'}" class="${shapeOk ? 'vision-ball-move' : 'vision-ball-move'}">
            <animate attributeName="cx" values="22;88;22" dur="2.1s" repeatCount="indefinite"/>
          </circle>
        ` : `
          <circle cx="22" cy="52" r="10" fill="${v4 ? '#e04636' : '#64748b'}" opacity="0.25"/>
          <circle cx="55" cy="52" r="10" fill="${v4 ? '#e04636' : '#64748b'}" opacity="0.5"/>
          <circle cx="88" cy="52" r="10" fill="${v4 ? '#e04636' : '#64748b'}" opacity="0.9"/>
          <text x="55" y="80" text-anchor="middle" font-size="8.5" fill="#c84b31">Effet stroboscopique</text>
        `}
      </g>

      <text x="180" y="144" text-anchor="middle" font-size="10.5" font-weight="700" fill="${(v3 && v4 && v5) ? '#1d9a6c' : '#c84b31'}">
        ${(v3 && v4 && v5)
          ? '✓ Vision globale correcte : formes (V3) + couleurs (V4) + mouvement (V5) intégrés'
          : (!v4 && v3 && v5)
            ? 'Patient A (V4 lésée) : formes et mouvements vus, mais couleurs perdues'
            : (!v3 && v4 && v5)
              ? 'Patient B (V3 lésée) : couleurs et mouvements vus, mais formes méconnaissables'
              : !v5
                ? 'Lésion V5 : couleurs et formes vues, mais perte de la fluidité du mouvement'
                : 'Plusieurs aires lésées : perception visuelle partielle'}
      </text>
    </svg>
  `;
}

// Construit des graphiques et schémas vectoriels SVG complémentaires sourcés pour l'onglet Activité
export function mountActivityVisuals(actId, container, onJumpTo3d = null) {
  container.innerHTML = '';

  if (actId === 'A1') {
    container.innerHTML = `
      <div class="doc-card">
        <div class="doc-head">
          <div>
            <span class="badge-scale">Graphiques scientifiques à analyser · Activité A1</span>
            <h3>Adaptation cardiaque (DNB 2018) &amp; part énergétique du cerveau (Inserm / CNRS)</h3>
          </div>
        </div>
        <div class="charts-grid-2">
          <div>
            <svg viewBox="0 0 320 205" class="sci-svg" role="img" aria-label="Graphique du rythme cardiaque avant et pendant un effort maximal : 70 contre 180 battements par minute">
              <title>Rythme cardiaque au repos vs effort maximal (DNB Métropole 2018)</title>
              <text x="160" y="18" text-anchor="middle" class="svg-lbl">1. Rythme cardiaque (DNB Métropole 2018)</text>
              ${[0, 50, 100, 150, 200].map((v) => {
                const y = 165 - (v / 200) * 125;
                return `
                  <line x1="52" y1="${y}" x2="296" y2="${y}" stroke="currentColor" stroke-opacity="0.16" stroke-dasharray="${v === 0 ? '' : '3 3'}"/>
                  <text x="46" y="${y + 3.5}" text-anchor="end" class="svg-sub">${v}</text>
                `;
              }).join('')}
              <line x1="52" y1="36" x2="52" y2="165" stroke="currentColor" stroke-opacity="0.5"/>
              <text x="14" y="102" transform="rotate(-90 14 102)" text-anchor="middle" class="svg-sub">bpm</text>
              <rect x="86" y="${165 - (70 / 200) * 125}" width="54" height="${(70 / 200) * 125}" rx="5" fill="#2b6de0"/>
              <text x="113" y="${165 - (70 / 200) * 125 - 6}" text-anchor="middle" class="svg-lbl">70 bpm</text>
              <text x="113" y="182" text-anchor="middle" class="svg-sub">Repos</text>
              <rect x="196" y="${165 - (180 / 200) * 125}" width="54" height="${(180 / 200) * 125}" rx="5" fill="#d64531"/>
              <text x="223" y="${165 - (180 / 200) * 125 - 6}" text-anchor="middle" class="svg-lbl">180 bpm</text>
              <text x="223" y="182" text-anchor="middle" class="svg-sub">Effort maximal</text>
              <text x="160" y="198" text-anchor="middle" class="svg-sub">Besoins musculaires en O₂ et glucose : très élevés</text>
            </svg>
          </div>
          <div>
            <svg viewBox="0 0 320 205" class="sci-svg" role="img" aria-label="Comparaison part du poids du corps 2 pour cent versus part énergétique 20 pour cent">
              <title>Masse corporelle vs consommation énergétique du cerveau (Inserm / CNRS)</title>
              <text x="160" y="18" text-anchor="middle" class="svg-lbl">2. Coût énergétique réel (Inserm &amp; CNRS)</text>
              ${[0, 5, 10, 15, 20, 25].map((v) => {
                const y = 165 - (v / 25) * 125;
                return `
                  <line x1="52" y1="${y}" x2="296" y2="${y}" stroke="${v === 10 ? '#d64531' : 'currentColor'}" stroke-opacity="${v === 10 ? '0.6' : '0.16'}" stroke-dasharray="${v === 0 ? '' : '4 3'}"/>
                  <text x="46" y="${y + 3.5}" text-anchor="end" class="svg-sub">${v} %</text>
                `;
              }).join('')}
              <line x1="52" y1="36" x2="52" y2="165" stroke="currentColor" stroke-opacity="0.5"/>
              <text x="58" y="${165 - (10 / 25) * 125 - 5}" text-anchor="start" class="svg-sub" fill="#d64531">Mythe des 10 %</text>
              <rect x="86" y="${165 - (2 / 25) * 125}" width="54" height="${(2 / 25) * 125}" rx="3" fill="#1d9a6c"/>
              <text x="113" y="${165 - (2 / 25) * 125 - 6}" text-anchor="middle" class="svg-lbl">~2 %</text>
              <text x="113" y="182" text-anchor="middle" class="svg-sub">Masse du corps</text>
              <rect x="196" y="${165 - (20 / 25) * 125}" width="54" height="${(20 / 25) * 125}" rx="5" fill="#d98200"/>
              <text x="223" y="${165 - (20 / 25) * 125 - 6}" text-anchor="middle" class="svg-lbl">~20 %</text>
              <text x="223" y="182" text-anchor="middle" class="svg-sub">O₂ + glucose utilisés</text>
              <text x="160" y="198" text-anchor="middle" class="svg-sub">Le cerveau consomme ~10× plus que sa part de poids</text>
            </svg>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (actId === 'A2') {
    const slot = document.createElement('div');
    container.appendChild(slot);
    mountAuditionDoc(slot);
    return;
  }

  if (actId === 'A3') {
    const chartCard = document.createElement('div');
    chartCard.className = 'doc-card';
    chartCard.innerHTML = `
      <div class="doc-head">
        <div>
          <span class="badge-scale">Graphique de sécurité routière · Activité A3</span>
          <h3>Distance parcourue avant freinage à 50 km/h &amp; sur-risque (Sécurité routière)</h3>
        </div>
      </div>
      <svg viewBox="0 0 540 175" class="sci-svg" role="img" aria-label="Distances parcourues pendant le temps de réaction à 50 km/h : 15 m attentif contre 70 à 83 m en écrivant un SMS">
        <title>Distances sans freiner à 50 km/h et multiplicateur de risque d'accident</title>
        <text x="270" y="19" text-anchor="middle" class="svg-lbl">À 50 km/h (~14 m/s), distance parcourue avant même de toucher la pédale de frein</text>
        ${[0, 20, 40, 60, 80, 90].map((m) => {
          const x = 148 + (m / 95) * 330;
          return `
            <line x1="${x}" y1="32" x2="${x}" y2="136" stroke="currentColor" stroke-opacity="0.16" stroke-dasharray="${m === 0 ? '' : '3 3'}"/>
            <text x="${x}" y="150" text-anchor="middle" class="svg-sub">${m} m</text>
          `;
        }).join('')}
        <!-- Ligne 1 : Attentif ~1 s -> 15 m -->
        <text x="140" y="54" text-anchor="end" class="svg-lbl">Conducteur attentif (~1 s)</text>
        <rect x="148" y="40" width="${(15 / 95) * 330}" height="20" rx="4" fill="#1d9a6c"/>
        <text x="${148 + (15 / 95) * 330 + 6}" y="54" class="svg-lbl">~15 m · Risque ×1</text>

        <!-- Ligne 2 : Appel (+46 % -> ~1,5 s -> ~21 m) -->
        <text x="140" y="88" text-anchor="end" class="svg-lbl">Téléphone en appel (+46 %)</text>
        <rect x="148" y="74" width="${(21 / 95) * 330}" height="20" rx="4" fill="#d98200"/>
        <text x="${148 + (21 / 95) * 330 + 6}" y="88" class="svg-lbl">+46 % de réaction · Risque ×3</text>

        <!-- Ligne 3 : SMS ~5 s -> 70 à 83 m à l'aveugle -->
        <text x="140" y="122" text-anchor="end" class="svg-lbl">Lire / écrire un SMS (~5 s)</text>
        <rect x="148" y="108" width="${(70 / 95) * 330}" height="20" rx="4" fill="#c84b31"/>
        <rect x="${148 + (70 / 95) * 330}" y="108" width="${(13 / 95) * 330}" height="20" rx="3" fill="#c84b31" fill-opacity="0.55"/>
        <text x="${148 + (83 / 95) * 330 + 6}" y="122" class="svg-lbl" fill="#c84b31">70–83 m · ×23</text>

        <text x="270" y="167" text-anchor="middle" class="svg-sub">Source : Sécurité routière France · DNB (alcoolémie positive : au moins +13 % sur le temps de réaction)</text>
      </svg>
    `;
    const simSlot = document.createElement('div');
    container.appendChild(chartCard);
    container.appendChild(simSlot);
    mountReflexeDoc(simSlot);
    return;
  }

  if (actId === 'A4') {
    const expCard = document.createElement('div');
    expCard.className = 'doc-card';
    expCard.innerHTML = `
      <div class="doc-head">
        <div>
          <span class="badge-scale">Expériences historiques comparatives · Activité A4</span>
          <h3>Protocole de Claude Bernard sur le curare (1856)</h3>
        </div>
      </div>
      <svg viewBox="0 0 540 165" class="sci-svg" role="img" aria-label="Schéma des 3 expériences de Claude Bernard montrant que le curare bloque uniquement la jonction entre le nerf et le muscle">
        <title>Expériences historiques de Claude Bernard (1856) sur nerf, jonction nerf-muscle et muscle</title>
        <!-- Montage 1 -->
        <rect x="10" y="10" width="166" height="142" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.24"/>
        <text x="93" y="28" text-anchor="middle" class="svg-lbl">1. Témoin (sans curare)</text>
        <text x="93" y="45" text-anchor="middle" class="svg-sub">Stimulation électrique du nerf</text>
        <line x1="36" y1="68" x2="106" y2="68" stroke="#2b6de0" stroke-width="4" stroke-linecap="round"/>
        <circle cx="112" cy="68" r="5" fill="#1d9a6c"/>
        <ellipse cx="138" cy="68" rx="18" ry="11" fill="#e0754f" fill-opacity="0.8"/>
        <text x="93" y="96" text-anchor="middle" class="svg-sub">Nerf → Jonction → Muscle</text>
        <rect x="30" y="108" width="126" height="28" rx="6" fill="rgba(29,154,108,0.16)" stroke="#1d9a6c"/>
        <text x="93" y="126" text-anchor="middle" class="svg-lbl" fill="#1d9a6c">Contraction : OUI</text>

        <!-- Montage 2 -->
        <rect x="187" y="10" width="166" height="142" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.24"/>
        <text x="270" y="28" text-anchor="middle" class="svg-lbl">2. Curare sur le nerf seul</text>
        <text x="270" y="45" text-anchor="middle" class="svg-sub">Jonction protégée (ligature)</text>
        <rect x="218" y="57" x="34" height="22" rx="5" fill="rgba(217,130,0,0.2)" stroke="#d98200"/>
        <line x1="212" y1="68" x2="282" y2="68" stroke="#2b6de0" stroke-width="4" stroke-linecap="round"/>
        <circle cx="288" cy="68" r="5" fill="#1d9a6c"/>
        <ellipse cx="314" cy="68" rx="18" ry="11" fill="#e0754f" fill-opacity="0.8"/>
        <text x="270" y="96" text-anchor="middle" class="svg-sub">Nerf conducteur intact</text>
        <rect x="207" y="108" width="126" height="28" rx="6" fill="rgba(29,154,108,0.16)" stroke="#1d9a6c"/>
        <text x="270" y="126" text-anchor="middle" class="svg-lbl" fill="#1d9a6c">Contraction : OUI</text>

        <!-- Montage 3 -->
        <rect x="364" y="10" width="166" height="142" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.35"/>
        <text x="447" y="28" text-anchor="middle" class="svg-lbl">3. Curare sur la jonction</text>
        <text x="447" y="45" text-anchor="middle" class="svg-sub">Via le sang (nerf stimulé)</text>
        <line x1="388" y1="68" x2="458" y2="68" stroke="#2b6de0" stroke-width="4" stroke-linecap="round"/>
        <circle cx="464" cy="68" r="7" fill="#c84b31"/>
        <ellipse cx="492" cy="68" rx="18" ry="11" fill="#e0754f" fill-opacity="0.4"/>
        <text x="447" y="96" text-anchor="middle" class="svg-sub">Stimulation directe muscle : OUI</text>
        <rect x="384" y="108" width="126" height="28" rx="6" fill="rgba(200,75,49,0.16)" stroke="#c84b31"/>
        <text x="447" y="126" text-anchor="middle" class="svg-lbl" fill="#c84b31">Via nerf : PARALYSIE</text>
      </svg>
    `;
    const simSlot = document.createElement('div');
    container.appendChild(expCard);
    container.appendChild(simSlot);
    mountSynapseDoc(simSlot);
    return;
  }

  if (actId === 'A5') {
    const graphCard = document.createElement('div');
    graphCard.className = 'doc-card';
    graphCard.innerHTML = `
      <div class="doc-head">
        <div>
          <span class="badge-scale">Graphiques épidémiologiques · Activité A5</span>
          <h3>Sommeil réel des collégiens (EnCLASS 2024) &amp; écrans 12–17 ans (ANSES 2026)</h3>
        </div>
      </div>
      <div class="charts-grid-2">
        <div>
          <svg viewBox="0 0 320 205" class="sci-svg" role="img" aria-label="Enquête EnCLASS 2024 : 13,8 pour cent dorment moins de 7h, 26,7 pour cent en dette de sommeil, 30,6 pour cent fatigués le matin">
            <title>Indicateurs de manque de sommeil au collège (EnCLASS 2024)</title>
            <text x="160" y="18" text-anchor="middle" class="svg-lbl">EnCLASS 2024 · Collégiens (France)</text>
            ${[0, 10, 20, 30, 40].map((p) => {
              const y = 160 - (p / 40) * 120;
              return `
                <line x1="44" y1="${y}" x2="300" y2="${y}" stroke="currentColor" stroke-opacity="0.16" stroke-dasharray="${p === 0 ? '' : '3 3'}"/>
                <text x="38" y="${y + 3.5}" text-anchor="end" class="svg-sub">${p}%</text>
              `;
            }).join('')}
            <line x1="44" y1="36" x2="44" y2="160" stroke="currentColor" stroke-opacity="0.5"/>
            <rect x="64" y="${160 - (13.8 / 40) * 120}" width="50" height="${(13.8 / 40) * 120}" rx="4" fill="#d98200"/>
            <text x="89" y="${160 - (13.8 / 40) * 120 - 5}" text-anchor="middle" class="svg-lbl">13,8 %</text>
            <text x="89" y="176" text-anchor="middle" class="svg-sub">&lt; 7 h / nuit</text>
            <rect x="140" y="${160 - (26.7 / 40) * 120}" width="50" height="${(26.7 / 40) * 120}" rx="4" fill="#e0754f"/>
            <text x="165" y="${160 - (26.7 / 40) * 120 - 5}" text-anchor="middle" class="svg-lbl">26,7 %</text>
            <text x="165" y="176" text-anchor="middle" class="svg-sub">Dette &gt; 2 h</text>
            <rect x="216" y="${160 - (30.6 / 40) * 120}" width="50" height="${(30.6 / 40) * 120}" rx="4" fill="#c84b31"/>
            <text x="241" y="${160 - (30.6 / 40) * 120 - 5}" text-anchor="middle" class="svg-lbl">30,6 %</text>
            <text x="241" y="176" text-anchor="middle" class="svg-sub">Fatigués matin</text>
            <text x="160" y="196" text-anchor="middle" class="svg-sub">Moyenne semaine : 8 h 16 (besoin recommandé : 8–9 h)</text>
          </svg>
        </div>
        <div>
          <svg viewBox="0 0 320 205" class="sci-svg" role="img" aria-label="Enquête ANSES janvier 2026 chez les 12 à 17 ans : 90 pour cent smartphone par jour, 58 pour cent réseaux, 42 pour cent 2 à 5h, 9 pour cent plus de 5h">
            <title>Usages smartphone et réseaux sociaux 12–17 ans (ANSES 2026)</title>
            <text x="160" y="18" text-anchor="middle" class="svg-lbl">ANSES (13 janv. 2026) · 12–17 ans</text>
            ${[0, 25, 50, 75, 100].map((p) => {
              const y = 160 - (p / 100) * 120;
              return `
                <line x1="44" y1="${y}" x2="300" y2="${y}" stroke="currentColor" stroke-opacity="0.16" stroke-dasharray="${p === 0 ? '' : '3 3'}"/>
                <text x="38" y="${y + 3.5}" text-anchor="end" class="svg-sub">${p}%</text>
              `;
            }).join('')}
            <line x1="44" y1="36" x2="44" y2="160" stroke="currentColor" stroke-opacity="0.5"/>
            <rect x="58" y="${160 - (90 / 100) * 120}" width="44" height="${(90 / 100) * 120}" rx="4" fill="#2b6de0"/>
            <text x="80" y="${160 - (90 / 100) * 120 - 5}" text-anchor="middle" class="svg-lbl">~90 %</text>
            <text x="80" y="176" text-anchor="middle" class="svg-sub">Tél./jour</text>
            <rect x="118" y="${160 - (58 / 100) * 120}" width="44" height="${(58 / 100) * 120}" rx="4" fill="#7c5cd6"/>
            <text x="140" y="${160 - (58 / 100) * 120 - 5}" text-anchor="middle" class="svg-lbl">58 %</text>
            <text x="140" y="176" text-anchor="middle" class="svg-sub">Réseaux/j</text>
            <rect x="178" y="${160 - (42 / 100) * 120}" width="44" height="${(42 / 100) * 120}" rx="4" fill="#d98200"/>
            <text x="200" y="${160 - (42 / 100) * 120 - 5}" text-anchor="middle" class="svg-lbl">42 %</text>
            <text x="200" y="176" text-anchor="middle" class="svg-sub">2 à 5 h/j</text>
            <rect x="238" y="${160 - (9 / 100) * 120}" width="44" height="${(9 / 100) * 120}" rx="4" fill="#c84b31"/>
            <text x="260" y="${160 - (9 / 100) * 120 - 5}" text-anchor="middle" class="svg-lbl">9 %</text>
            <text x="260" y="176" text-anchor="middle" class="svg-sub">&gt; 5 h/j</text>
            <text x="160" y="196" text-anchor="middle" class="svg-sub">Usage tardif : endormissement retardé et fragmentation</text>
          </svg>
        </div>
      </div>
    `;
    const simSlot = document.createElement('div');
    container.appendChild(graphCard);
    container.appendChild(simSlot);
    mountSommeilDoc(simSlot);
    return;
  }

  if (actId === 'A6') {
    const simSlot = document.createElement('div');
    const epiCard = document.createElement('div');
    epiCard.className = 'doc-card';
    epiCard.innerHTML = `
      <div class="doc-head">
        <div>
          <span class="badge-scale">Données nationales · Activité A6</span>
          <h3>Tabac vs Vapotage / Puffs chez les jeunes (EnCLASS 2024 · Loi 24 fév. 2025)</h3>
        </div>
      </div>
      <svg viewBox="0 0 540 145" class="sci-svg" role="img" aria-label="Comparaison collège et lycée : 0,9 pour cent tabac quotidien au collège, 7,7 pour cent expérimentation tabac, contre environ 46 pour cent expérimentation vapotage au lycée">
        <title>Exposition tabac et vapotage chez les jeunes français (EnCLASS 2024)</title>
        ${[0, 10, 20, 30, 40, 50].map((p) => {
          const x = 186 + (p / 52) * 304;
          return `
            <line x1="${x}" y1="22" x2="${x}" y2="108" stroke="currentColor" stroke-opacity="0.16" stroke-dasharray="${p === 0 ? '' : '3 3'}"/>
            <text x="${x}" y="122" text-anchor="middle" class="svg-sub">${p}%</text>
          `;
        }).join('')}
        <text x="178" y="42" text-anchor="end" class="svg-lbl">Tabac quotidien (collège)</text>
        <rect x="186" y="29" width="${Math.max(4, (0.9 / 52) * 304)}" height="18" rx="3" fill="#1d9a6c"/>
        <text x="${186 + (0.9 / 52) * 304 + 8}" y="42" class="svg-lbl">0,9 %</text>

        <text x="178" y="70" text-anchor="end" class="svg-lbl">Expérimentation tabac (collège)</text>
        <rect x="186" y="57" width="${(7.7 / 52) * 304}" height="18" rx="4" fill="#d98200"/>
        <text x="${186 + (7.7 / 52) * 304 + 8}" y="70" class="svg-lbl">7,7 %</text>

        <text x="178" y="98" text-anchor="end" class="svg-lbl">Exp. vapotage / puffs (lycée)</text>
        <rect x="186" y="85" width="${(46 / 52) * 304}" height="18" rx="4" fill="#ff4f8b"/>
        <text x="${186 + (46 / 52) * 304 + 8}" y="98" class="svg-lbl" fill="#c84b31">~46 %</text>

        <text x="270" y="138" text-anchor="middle" class="svg-sub">EnCLASS 2024 (OFDT) · Loi du 24 février 2025 : interdiction des puffs jetables en France</text>
      </svg>
    `;
    container.appendChild(simSlot);
    mountRecompenseDoc(simSlot);
    container.appendChild(epiCard);
    return;
  }

  if (actId === 'A7') {
    // 1. Galerie des 4 documents visuels originaux de l'exercice
    const docsGallery = document.createElement('div');
    docsGallery.className = 'doc-card';
    docsGallery.innerHTML = `
      <div class="doc-head">
        <div>
          <span class="badge-scale">Documents de l'exercice · Activité A7</span>
          <h3>Cas cliniques (Patients A et B) et aires visuelles (V1 à V5)</h3>
        </div>
      </div>
      <div class="vision-orig-grid">
        <figure class="vision-orig-fig">
          <img src="img/vision_doc1.png" alt="Document 1 : modèles pomme et feuilles en haut, dessins décolorés du patient A en bas" loading="eager">
          <figcaption><strong>Doc. 1 — Patient A :</strong> formes justes, couleurs perdues.</figcaption>
        </figure>
        <figure class="vision-orig-fig">
          <img src="img/vision_doc2.png" alt="Document 2 : test de D.F. Benson où le patient B barre de mauvaises formes" loading="eager">
          <figcaption><strong>Doc. 2 — Patient B :</strong> test des formes (<em>D.F. Benson</em>).</figcaption>
        </figure>
        <figure class="vision-orig-fig">
          <img src="img/vision_doc3.png" alt="Document 3 : localisation des lésions cérébrales des patients A et B sur l'hémisphère gauche" loading="eager">
          <figcaption><strong>Doc. 3 — Lésions :</strong> patient A (bas) et patient B (haut).</figcaption>
        </figure>
        <figure class="vision-orig-fig">
          <img src="img/vision_doc4.png" alt="Document 4 : aires cérébrales impliquées dans la vision V1 à V5" loading="eager">
          <figcaption><strong>Doc. 4 — Aires visuelles :</strong> zones V1 à V5.</figcaption>
        </figure>
      </div>
    `;

    // 2. Simulateur interactif : Cliquer sur V1..V5 (Rôles & Lésions) + Tester l'intégration cérébrale
    const simCard = document.createElement('div');
    simCard.className = 'doc-card';
    const simState = {
      mode: 'explore', // 'explore' | 'integrate'
      selectedZone: 'v4',
      v1: true,
      v2: true,
      v3: true,
      v4: true,
      v5: true,
      integration: true,
    };

    function renderVisionSim() {
      const z = VISION_ZONES[simState.selectedZone] || VISION_ZONES.v4;
      const explMode = simState.mode === 'explore';
      const activeSimParams = explMode
        ? {
            v1: simState.selectedZone !== 'v1',
            v2: simState.selectedZone !== 'v2',
            v3: simState.selectedZone !== 'v3',
            v4: simState.selectedZone !== 'v4',
            v5: simState.selectedZone !== 'v5',
            integration: true,
          }
        : {
            v1: simState.v1,
            v2: simState.v2,
            v3: simState.v3,
            v4: simState.v4,
            v5: simState.v5,
            integration: simState.integration,
          };

      simCard.innerHTML = `
        <div class="doc-head">
          <div>
            <span class="badge-scale">Simulateur · V1–V5 &amp; Intégration</span>
            <h3>Explore les aires visuelles puis teste leur coopération</h3>
          </div>
          <div class="doc-controls">
            <button type="button" class="pill ${explMode ? 'on' : ''}" data-vmode="explore">1. Cliquer les zones (V1–V5)</button>
            <button type="button" class="pill ${!explMode ? 'on' : ''}" data-vmode="integrate">2. Tester l'intégration</button>
          </div>
        </div>

        ${explMode ? `
          <div class="vision-sim-grid">
            <div class="vision-brain-map">
              <p class="vision-map-hint">Clique sur une zone (V1 à V5) pour voir son rôle et l'effet d'une lésion :</p>
              <svg viewBox="0 0 360 250" class="sci-svg" role="img" aria-label="Schéma interactif des aires visuelles V1 à V5 et lésions A et B">
                <!-- Cerveau neutre (profil gauche) -->
                <path d="M56,128 C44,104 54,64 88,46 C125,27 185,22 238,34 C284,46 318,86 316,130 C314,164 290,184 256,188 C236,190 218,184 204,174 C188,162 162,158 142,164 C112,172 72,160 56,128 Z" fill="#eee7dc" stroke="#9b8e7b" stroke-width="2"/>
                <!-- Cervelet neutre -->
                <path d="M188,174 C194,205 228,216 260,202 C272,196 278,186 276,180 C248,188 214,184 188,174 Z" fill="#cca596" stroke="#9b786a" stroke-width="1.5"/>
                <!-- Tronc cérébral neutre -->
                <path d="M206,188 L224,240 L246,240 L232,192 Z" fill="#eae4da" stroke="#a69a88" stroke-width="1.4"/>
                <!-- Sillons schématiques -->
                <path d="M108,124 Q152,118 195,94" fill="none" stroke="#b6aa98" stroke-width="1.8" stroke-linecap="round"/>
                <path d="M148,48 Q154,84 146,112" fill="none" stroke="#b6aa98" stroke-width="1.4" stroke-linecap="round"/>

                <!-- Zones visuelles cliquables V3, V2, V1, V4, V5 -->
                <g class="vzone-hit ${simState.selectedZone === 'v3' ? 'active' : ''}" data-vzone="v3" tabindex="0" role="button" aria-label="Aire V3 (Formes · Patient B)">
                  <path d="M250,82 C276,72 302,88 311,120 C316,144 307,172 292,181 L248,184 C244,158 248,116 250,82 Z" fill="#3898d4" fill-opacity="0.88" stroke="#1e4e79" stroke-width="${simState.selectedZone === 'v3' ? 3 : 1.3}"/>
                  <text x="278" y="108" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">V3</text>
                </g>
                <g class="vzone-hit ${simState.selectedZone === 'v2' ? 'active' : ''}" data-vzone="v2" tabindex="0" role="button" aria-label="Aire V2 (Relais)">
                  <path d="M255,184 C252,148 265,120 285,118 C302,116 311,142 304,178 Z" fill="#f59e42" fill-opacity="0.93" stroke="#9a5610" stroke-width="${simState.selectedZone === 'v2' ? 3 : 1.3}"/>
                  <text x="282" y="138" text-anchor="middle" font-size="11.5" font-weight="800" fill="#141c28">V2</text>
                </g>
                <g class="vzone-hit ${simState.selectedZone === 'v1' ? 'active' : ''}" data-vzone="v1" tabindex="0" role="button" aria-label="Aire V1 (Cortex visuel primaire)">
                  <path d="M266,184 C266,158 276,142 290,142 C300,142 305,160 298,182 Z" fill="#f5d11d" fill-opacity="0.95" stroke="#8f7400" stroke-width="${simState.selectedZone === 'v1' ? 3 : 1.3}"/>
                  <text x="286" y="170" text-anchor="middle" font-size="11.5" font-weight="800" fill="#141c28">V1</text>
                </g>
                <g class="vzone-hit ${simState.selectedZone === 'v4' ? 'active' : ''}" data-vzone="v4" tabindex="0" role="button" aria-label="Aire V4 (Couleurs · Patient A)">
                  <path d="M225,182 C226,166 244,162 252,184 Z" fill="#8cc63f" fill-opacity="0.95" stroke="#456e12" stroke-width="${simState.selectedZone === 'v4' ? 3 : 1.3}"/>
                  <text x="239" y="178" text-anchor="middle" font-size="10.5" font-weight="800" fill="#141c28">V4</text>
                </g>
                <g class="vzone-hit ${simState.selectedZone === 'v5' ? 'active' : ''}" data-vzone="v5" tabindex="0" role="button" aria-label="Aire V5 (Mouvement)">
                  <path d="M188,128 L206,120 L203,136 L191,137 Z" fill="#e04636" fill-opacity="0.95" stroke="#7f1d1d" stroke-width="${simState.selectedZone === 'v5' ? 3 : 1.3}"/>
                  <text x="197" y="114" text-anchor="middle" font-size="11" font-weight="800" fill="#c84b31">V5</text>
                </g>

                <!-- Badges rapides Patients A & B -->
                <g class="vzone-hit" data-vzone="v4" role="button">
                  <circle cx="239" cy="176" r="6" fill="none" stroke="#e52b20" stroke-width="2" stroke-dasharray="2 2"/>
                  <rect x="82" y="196" width="102" height="22" rx="6" fill="${simState.selectedZone === 'v4' ? '#8cc63f' : '#ffffff'}" stroke="#456e12"/>
                  <text x="133" y="211" text-anchor="middle" font-size="10" font-weight="700" fill="#141c28">Lésion Patient A (V4)</text>
                </g>
                <g class="vzone-hit" data-vzone="v3" role="button">
                  <circle cx="277" cy="105" r="8" fill="none" stroke="#e52b20" stroke-width="2" stroke-dasharray="2 2"/>
                  <rect x="82" y="222" width="102" height="22" rx="6" fill="${simState.selectedZone === 'v3' ? '#3898d4' : '#ffffff'}" stroke="#1e4e79"/>
                  <text x="133" y="237" text-anchor="middle" font-size="10" font-weight="700" fill="${simState.selectedZone === 'v3' ? '#ffffff' : '#141c28'}">Lésion Patient B (V3)</text>
                </g>
              </svg>
              <div class="quiz-chips" style="margin-top:8px">
                ${['v1', 'v2', 'v3', 'v4', 'v5'].map((k) => {
                  const zz = VISION_ZONES[k];
                  return `<button type="button" class="qchip ${simState.selectedZone === k ? 'sel' : ''}" data-vzone="${k}" style="${simState.selectedZone === k ? `background:${zz.color};border-color:${zz.color};color:${zz.textDark ? '#141c28' : '#fff'}` : ''}">${zz.code} · ${k === 'v1' ? 'Réception' : k === 'v2' ? 'Relais' : k === 'v3' ? 'Formes (B)' : k === 'v4' ? 'Couleurs (A)' : 'Mouvement'}</button>`;
                }).join('')}
              </div>
            </div>

            <div class="vision-zone-detail">
              <div class="vzd-head">
                <span class="vzd-badge" style="background:${z.color};color:${z.textDark ? '#141c28' : '#fff'}">${z.code}</span>
                <div>
                  <h4>${z.title}</h4>
                  <small>${z.subtitle}</small>
                </div>
              </div>
              <p class="vzd-role"><strong>Rôle dans la vision :</strong> ${z.role}</p>
              <div class="vzd-lesion">
                <strong>⚠️ ${z.lesionTitle}</strong>
                <p>${z.lesionDesc}</p>
                <div class="vzd-media-row">
                  <img src="${z.img}" alt="${z.imgCaption}">
                </div>
                <small class="vzd-cap">${z.imgCaption}</small>
              </div>
              <div style="margin-top:8px">
                <strong style="display:block;font-size:11.5px;margin-bottom:4px;color:var(--fg-2)">Simulation : ce que perçoit le patient en cas de lésion de ${z.code}</strong>
                ${renderVisionSimulationSvg(activeSimParams)}
              </div>
              ${onJumpTo3d ? `<button type="button" class="btn-primary" id="btnSimGo3d" style="margin-top:8px;width:100%">Observer ${z.code} sur le cerveau 3D →</button>` : ''}
            </div>
          </div>
        ` : `
          <div>
            <p style="margin:0 0 8px;font-size:13px;color:var(--fg-2)">Active ou désactive les zones et leurs liens pour tester l'intégration :</p>
            <div class="vision-toggles">
              ${[
                ['v1', 'V1 · Réception', '#f5d11d'],
                ['v2', 'V2 · Relais', '#f59e42'],
                ['v3', 'V3 · Formes', '#3898d4'],
                ['v4', 'V4 · Couleurs', '#8cc63f'],
                ['v5', 'V5 · Mouvement', '#e04636'],
                ['integration', '🔗 Intégration (liens)', '#2b6de0'],
              ].map(([k, lbl, col]) => `
                <label class="vtoggle ${simState[k] ? 'on' : 'off'}">
                  <input type="checkbox" data-vtoggle="${k}" ${simState[k] ? 'checked' : ''}>
                  <span class="leg-dot" style="background:${col}"></span>
                  <span>${lbl}</span>
                </label>
              `).join('')}
            </div>
            <div class="quiz-chips" style="margin:8px 0">
              <button type="button" class="qchip" data-vpreset="normal">✓ Vision saine (tout intégré)</button>
              <button type="button" class="qchip" data-vpreset="patientA">Patient A (V4 coupée)</button>
              <button type="button" class="qchip" data-vpreset="patientB">Patient B (V3 coupée)</button>
              <button type="button" class="qchip" data-vpreset="noIntegration">⚠️ Sans intégration (aires isolées)</button>
            </div>
            ${renderVisionSimulationSvg(activeSimParams)}
            ${onJumpTo3d ? `<button type="button" class="btn-primary" id="btnSimGo3dNet" style="margin-top:10px">Voir le réseau d'intégration animé sur le cerveau 3D →</button>` : ''}
          </div>
        `}
      `;

      simCard.querySelectorAll('[data-vmode]').forEach((b) => {
        b.addEventListener('click', () => {
          simState.mode = b.dataset.vmode;
          renderVisionSim();
        });
      });
      simCard.querySelectorAll('[data-vzone]').forEach((el) => {
        el.addEventListener('click', () => {
          simState.selectedZone = el.dataset.vzone;
          renderVisionSim();
        });
      });
      simCard.querySelectorAll('[data-vtoggle]').forEach((cb) => {
        cb.addEventListener('change', () => {
          simState[cb.dataset.vtoggle] = cb.checked;
          renderVisionSim();
        });
      });
      simCard.querySelectorAll('[data-vpreset]').forEach((b) => {
        b.addEventListener('click', () => {
          const p = b.dataset.vpreset;
          simState.v1 = true; simState.v2 = true; simState.v3 = true; simState.v4 = true; simState.v5 = true; simState.integration = true;
          if (p === 'patientA') simState.v4 = false;
          else if (p === 'patientB') simState.v3 = false;
          else if (p === 'noIntegration') simState.integration = false;
          renderVisionSim();
        });
      });
      simCard.querySelector('#btnSimGo3d')?.addEventListener('click', () => onJumpTo3d(simState.selectedZone));
      simCard.querySelector('#btnSimGo3dNet')?.addEventListener('click', () => onJumpTo3d('integration'));
    }

    container.appendChild(docsGallery);
    container.appendChild(simCard);
    renderVisionSim();
    return;
  }

  if (actId === 'A8') {
    // 1. Galerie des 3 planches documentaires de l'exercice
    const docsGallery = document.createElement('div');
    docsGallery.className = 'doc-card';
    docsGallery.innerHTML = `
      <div class="doc-head">
        <div>
          <span class="badge-scale">Documents de l'exercice · Activité A8</span>
          <h3>Zone de jonction (MET × 10 000) &amp; Modes d'action des drogues</h3>
        </div>
      </div>
      <div class="vision-orig-grid" style="grid-template-columns:1fr">
        <figure class="vision-orig-fig">
          <img src="img/drogues_doc1.png" alt="Document 1 : microscopie électronique à transmission de la zone de jonction entre neurones A et B et neurone C avant et pendant transmission" loading="eager">
          <figcaption><strong>Doc. 1 — Zone de jonction (Synapse) :</strong> Terminaisons A et B face au corps cellulaire C (1 : avant · 2 : pendant transmission).</figcaption>
        </figure>
        <figure class="vision-orig-fig">
          <img src="img/drogues_doc2.png" alt="Document 2 : tableau des modes d'action du cannabis, héroïne, cocaïne, ecstasy, alcool et amphétamines" loading="eager">
          <figcaption><strong>Doc. 2 — Tableau des modes d'action :</strong> cannabis, héroïne, cocaïne, ecstasy, alcool et amphétamines.</figcaption>
        </figure>
        <figure class="vision-orig-fig">
          <img src="img/drogues_doc3.png" alt="Document 3 : effets ressentis par le consommateur et localisation membranaire A/B pour cannabis et héroïne" loading="eager">
          <figcaption><strong>Doc. 3 — Effets ressentis &amp; Lieux d'action :</strong> conséquences comportementales et cibles cellulaires.</figcaption>
        </figure>
      </div>
    `;

    // 2. Simulateur interactif de la Synapse (Neurones A/B -> Espace -> Neurone C)
    const DROGUES_STATES = {
      avant: {
        label: '1. Avant transmission',
        badge: 'Repos · Avant message',
        title: 'Neurones A et B au repos (avant l’arrivée du message)',
        lieu: 'Aucun passage actif dans la fente synaptique',
        desc: "Les terminaisons des neurones A et B contiennent de nombreuses vésicules circulaires remplies de messagers chimiques. Le corps cellulaire du neurone C ne contient aucune vésicule et l'espace synaptique est vide.",
        vesicleRelease: 0,
        cleftMessengers: 0,
        drugType: 'none',
        receptorsActive: false,
        signalC: 'En attente'
      },
      normal: {
        label: '2. Transmission normale',
        badge: 'Physiologique · Pendant transmission',
        title: 'Transmission normale du message nerveux (B → C)',
        lieu: 'Vésicules (A/B) → Espace synaptique → Membrane du neurone C',
        desc: "Lorsqu'un message nerveux arrive, des vésicules du neurone A ou B s'ouvrent sur la membrane et déversent leur substance chimique dans l'espace synaptique. Cette substance se fixe sur la membrane du neurone C qui émet un message nerveux normal.",
        vesicleRelease: 3,
        cleftMessengers: 5,
        drugType: 'none',
        receptorsActive: true,
        signalC: 'Message normal transmis ✓'
      },
      cannabis: {
        label: '🌿 Cannabis & Héroïne',
        badge: 'Lieu : Membrane neurones A/B',
        title: 'Cannabis & Héroïne : blocage sur la membrane des neurones A ou B',
        lieu: 'Membrane des terminaisons axonales A ou B',
        desc: "Ces drogues se fixent sur la membrane des neurones A ou B et empêchent la majorité des vésicules de déverser leurs substances dans l'espace de la zone de jonction. Conséquences : relaxation, somnolence, troubles de l'attention, de la mémoire et de l'apprentissage (cannabis) ou hallucinations et dépendance (héroïne).",
        vesicleRelease: 0,
        cleftMessengers: 1,
        drugType: 'cannabis',
        receptorsActive: false,
        signalC: 'Transmission fortement diminuée ⚠️'
      },
      cocaine: {
        label: '❄️ Cocaïne & Ecstasy',
        badge: 'Lieu : Espace synaptique',
        title: 'Cocaïne & Ecstasy : maintien dans l’espace de la zone de jonction',
        lieu: 'Espace de la zone de jonction (fente synaptique)',
        desc: "Au moment de l'arrivée du message, cocaïne et ecstasy maintiennent la substance déversée par les vésicules A ou B dans l'espace de la zone de jonction (elle n'est plus éliminée). Le neurone C est sur-stimulé en continu (hyperactivité, puis épuisement et dépendance).",
        vesicleRelease: 3,
        cleftMessengers: 11,
        drugType: 'cocaine',
        receptorsActive: true,
        signalC: 'Sur-stimulation continue ⚡'
      },
      alcool: {
        label: '🍺 Alcool',
        badge: 'Lieu : Membrane neurone C',
        title: 'Alcool : blocage d’action sur la membrane du neurone C',
        lieu: 'Membrane du corps cellulaire du neurone C',
        desc: "Les vésicules des neurones A ou B libèrent normalement la substance dans l'espace, mais l'alcool empêche cette substance d'agir sur la membrane du neurone C. Conséquences : baisse des réflexes, troubles de l'équilibre, mauvais jugement et somnolence.",
        vesicleRelease: 3,
        cleftMessengers: 5,
        drugType: 'alcool',
        receptorsActive: false,
        signalC: 'Réception bloquée sur C ⚠️'
      },
      amphet: {
        label: '💊 Amphétamines',
        badge: 'Lieu : Vésicules neurones A/B',
        title: 'Amphétamines : vidange massive des vésicules A ou B',
        lieu: 'Intérieur des vésicules des neurones A ou B',
        desc: "Les amphétamines pénètrent directement dans les vésicules du neurone A ou B : celles-ci se vident de leur contenu dans l'espace de la zone de jonction où la substance déversée s'accumule fortement.",
        vesicleRelease: 5,
        cleftMessengers: 12,
        drugType: 'amphet',
        receptorsActive: true,
        signalC: 'Accumulation & hyper-stimulation ⚡'
      }
    };

    const simCard = document.createElement('div');
    simCard.className = 'doc-card';
    let currentKey = 'normal';

    function renderSynapseDrugSim() {
      const s = DROGUES_STATES[currentKey] || DROGUES_STATES.normal;
      const cleftX = [110, 140, 165, 195, 225, 250, 128, 178, 212, 240, 152, 265];
      const cleftY = [125, 132, 122, 134, 124, 131, 137, 128, 136, 123, 129, 135];
      const dotsSvg = cleftX.slice(0, s.cleftMessengers).map((x, idx) =>
        `<circle cx="${x}" cy="${cleftY[idx]}" r="4.2" fill="#0d9488" stroke="#ffffff" stroke-width="0.9"/>`
      ).join('');

      let drugOverlaySvg = '';
      if (s.drugType === 'cannabis') {
        drugOverlaySvg = `
          <rect x="88" y="106" width="84" height="10" rx="5" fill="#dc2626"/>
          <rect x="198" y="106" width="84" height="10" rx="5" fill="#dc2626"/>
          <text x="180" y="25" text-anchor="middle" font-size="10.5" font-weight="800" fill="#dc2626">⬇ Fixation sur membrane A / B (libération bloquée)</text>
        `;
      } else if (s.drugType === 'cocaine') {
        drugOverlaySvg = `
          <rect x="102" y="119" width="168" height="22" rx="6" fill="#7c3aed" fill-opacity="0.16" stroke="#7c3aed" stroke-dasharray="3 2"/>
          <text x="186" y="25" text-anchor="middle" font-size="10.5" font-weight="800" fill="#7c3aed">★ Maintien excessif dans l’espace synaptique</text>
        `;
      } else if (s.drugType === 'alcool') {
        drugOverlaySvg = `
          <rect x="105" y="143" width="22" height="11" rx="4" fill="#ea580c"/>
          <rect x="175" y="143" width="22" height="11" rx="4" fill="#ea580c"/>
          <rect x="245" y="143" width="22" height="11" rx="4" fill="#ea580c"/>
          <text x="186" y="25" text-anchor="middle" font-size="10.5" font-weight="800" fill="#ea580c">⬇ Blocage sur la membrane du neurone C</text>
        `;
      } else if (s.drugType === 'amphet') {
        drugOverlaySvg = `
          <text x="186" y="25" text-anchor="middle" font-size="10.5" font-weight="800" fill="#be185d">⬇ Pénétration dans les vésicules → vidange massive</text>
        `;
      }

      simCard.innerHTML = `
        <div class="doc-head">
          <div>
            <span class="badge-scale">Simulateur interactif · Zone de jonction (Synapse)</span>
            <h3>Comparer la transmission normale et l'action de chaque drogue</h3>
          </div>
        </div>

        <div class="quiz-chips" style="margin-bottom:10px">
          ${Object.entries(DROGUES_STATES).map(([k, item]) =>
            `<button type="button" class="qchip ${currentKey === k ? 'sel' : ''}" data-drug="${k}">${item.label}</button>`
          ).join('')}
        </div>

        <div class="vision-sim-grid" style="grid-template-columns:1.05fr 0.95fr;align-items:center">
          <div class="vision-brain-map">
            <svg viewBox="0 0 360 220" class="sci-svg" role="img" aria-label="Schéma fonctionnel de la synapse entre neurones A, B et neurone C">
              <rect x="0" y="0" width="360" height="220" rx="10" fill="#f8fafc"/>
              <!-- Neurone A (gauche) & Neurone B (droite) -->
              <path d="M84,35 L168,35 L168,104 Q168,112 158,112 L94,112 Q84,112 84,104 Z" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
              <text x="126" y="54" text-anchor="middle" font-size="10" font-weight="800" fill="#92400e">Neurone A</text>
              <path d="M194,35 L278,35 L278,104 Q278,112 268,112 L204,112 Q194,112 194,104 Z" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
              <text x="236" y="54" text-anchor="middle" font-size="10" font-weight="800" fill="#92400e">Neurone B</text>

              <!-- Vésicules dans A et B -->
              ${[[108,72],[132,76],[150,70],[115,93],[142,92],[216,72],[238,76],[258,72],[222,93],[250,92]].map(([vx, vy], idx) => {
                const isEmptied = idx >= 10 - s.vesicleRelease * 2;
                return `<circle cx="${vx}" cy="${vy}" r="7.5" fill="${isEmptied ? '#e2e8f0' : '#0f766e'}" fill-opacity="${isEmptied ? '0.4' : '0.85'}" stroke="#0f172a" stroke-width="1.1"/>`;
              }).join('')}

              <!-- Espace de la zone de jonction (fente synaptique) -->
              <text x="38" y="131" text-anchor="middle" font-size="8.5" font-weight="700" fill="#64748b">Espace synaptique</text>
              ${dotsSvg}

              <!-- Corps cellulaire du neurone C -->
              <path d="M72,150 Q180,144 288,150 L288,205 L72,205 Z" fill="${s.receptorsActive ? '#dbeafe' : '#e2e8f0'}" stroke="#1d4ed8" stroke-width="2"/>
              <!-- Récepteurs sur membrane C -->
              <path d="M108,148 v-6 h14 v6 M178,146 v-6 h14 v6 M248,148 v-6 h14 v6" fill="none" stroke="#1e40af" stroke-width="2.5"/>
              <text x="180" y="176" text-anchor="middle" font-size="11" font-weight="800" fill="#1e3a8a">Corps cellulaire · Neurone C</text>
              <text x="180" y="194" text-anchor="middle" font-size="10" font-weight="700" fill="${s.receptorsActive ? '#0f766e' : '#b91c1c'}">${s.signalC}</text>

              ${drugOverlaySvg}
            </svg>
          </div>

          <div class="vision-zone-detail">
            <div class="vzd-head">
              <span class="vzd-badge" style="background:#0f766e;color:#fff">${s.badge}</span>
            </div>
            <h4 style="margin:6px 0 4px;font-size:14.5px">${s.title}</h4>
            <p class="vzd-role" style="margin:0 0 6px;font-size:12.5px"><strong>Lieu d’action :</strong> ${s.lieu}</p>
            <p style="margin:0 0 10px;font-size:12.5px;line-height:1.45;color:var(--fg-2)">${s.desc}</p>
            ${onJumpTo3d ? `<button type="button" class="btn-primary" id="btnDrugGo3d" style="width:100%">Observer le circuit Dopamine / Hippocampe en 3D →</button>` : ''}
          </div>
        </div>
      `;

      simCard.querySelectorAll('[data-drug]').forEach((b) => {
        b.addEventListener('click', () => {
          currentKey = b.dataset.drug;
          renderSynapseDrugSim();
        });
      });
      simCard.querySelector('#btnDrugGo3d')?.addEventListener('click', () => onJumpTo3d('dopamine'));
    }

    container.appendChild(docsGallery);
    container.appendChild(simCard);
    renderSynapseDrugSim();
  }
}
