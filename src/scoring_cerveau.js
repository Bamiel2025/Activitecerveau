/**
 * MOTEUR D'ÉVALUATION CRITÉRIÉE (/5 PTS) — ACTIVITÉS CERVEAU & VISION (CYCLE 4)
 * -----------------------------------------------------------------------------
 * - 4 critères scientifiques par activité (C1, C2, C3, C4 chacun sur /1 pt => /4 pts)
 * - 1 point de Maîtrise de la langue (Score_Langue /1 pt) :
 *     * L1 (0.5 pt) : Connecteurs logiques (0.25 pt si 1 connecteur, 0.5 pt si >= 2)
 *     * L2 (0.5 pt) : Phrases complètes ponctuées (>= 2 phrases = 0.25 pt) + longueur (>= 20 mots = 0.25 pt)
 * - Détection d'erreurs / confusions fréquentes et génération de conseils ciblés pour l'élève
 *   sans jamais dévoiler le corrigé verbatim avant le code enseignant.
 */

export function normalizeText(str) {
  if (!str) return '';
  return String(str)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’`]/g, ' ')
    .replace(/[-‐‑–—/]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function escapeRegex(str) {
  return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function escapeHTML(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function normalizeActivityId(raw) {
  const s = String(raw || '').trim().toUpperCase();
  if (s === 'VISION' || s === 'VISION_A7') return 'A7';
  if (s === 'DROGUES' || s === 'DROGUE' || s === 'DROGUES_A8') return 'A8';
  if (/^A[1-8]$/.test(s)) return s;
  return 'A7';
}

// ============================================================================
// CONNECTEURS LOGIQUES & MAÎTRISE DE LA LANGUE (1 PT = L1 0.5 + L2 0.5)
// ============================================================================
export const CONNECTEURS_CATEGORIES = {
  opposition: [
    'tandis que', 'alors que', 'en revanche', 'au contraire', 'cependant',
    'pourtant', 'par contre', 'mais', 'a l inverse'
  ],
  cause: [
    'parce que', 'car', 'puisque', 'etant donne que', 'grace a',
    'a cause de', 'en raison de', 'du fait de', 'du fait que'
  ],
  consequence: [
    'c est pourquoi', 'par consequent', 'donc', 'ainsi', 'de ce fait',
    'ce qui provoque', 'ce qui entraine', 'ce qui explique', 'si bien que',
    'pour cette raison'
  ],
  addition_organisation: [
    'd une part', 'd autre part', 'tout d abord', 'ensuite', 'enfin',
    'de plus', 'par ailleurs', 'en effet', 'notamment', 'premièrement',
    'premierement', 'deuxiemement'
  ]
};

export const ALL_CONNECTEURS = Object.values(CONNECTEURS_CATEGORIES).flat();

export function matchExpression(normText, rawText, expr) {
  if (expr instanceof RegExp) {
    return expr.test(normText) || expr.test(rawText);
  }
  const nExpr = normalizeText(expr);
  if (!nExpr) return false;
  const escaped = escapeRegex(nExpr).replace(/\\ /g, '[\\s\\-\']+');
  // Tolérance pluriel simple (s)
  const rx = new RegExp('(?:^|[^a-z0-9])' + escaped + 's?(?=$|[^a-z0-9])', 'i');
  return rx.test(normText);
}

export function countMatches(normText, rawText, exprList) {
  const matched = [];
  for (const item of exprList) {
    const label = typeof item === 'object' && !(item instanceof RegExp) ? item.label : String(item);
    const patterns = typeof item === 'object' && !(item instanceof RegExp) ? item.patterns : [item];
    if (patterns.some((p) => matchExpression(normText, rawText, p))) {
      if (!matched.includes(label)) matched.push(label);
    }
  }
  return matched;
}

export function countWords(text) {
  const cleaned = String(text || '')
    .replace(/['’]/g, ' ')
    .replace(/[^\p{L}\p{N}\s-]/gu, ' ')
    .trim();
  if (!cleaned) return 0;
  return cleaned.split(/\s+/).filter(Boolean).length;
}

export function analyzeSentences(text) {
  const raw = String(text || '').trim();
  if (!raw) {
    return {
      sentenceCount: 0,
      completeSentences: 0,
      hasTwoDistinctSentences: false,
      startsWithCapital: false,
      endsWithPunctuation: false
    };
  }
  // Découpage sur les fins de phrases ou retours à la ligne entre Q1/Q2/Q3
  const segments = raw
    .split(/(?:[.!?]+(?:\s+|$)|\n+)/)
    .map((s) => s.trim())
    .filter((s) => countWords(s) >= 3);

  const punctuatedCount = (raw.match(/[.!?]+/g) || []).length;
  // Extraire uniquement les phrases réellement terminées par . ! ou ?
  const endedMatches = raw.match(/[^.!?]+[.!?]+/g) || [];
  const completeSegments = endedMatches
    .map((s) => s.replace(/[.!?]+$/, '').trim())
    .filter((s) => countWords(s) >= 4 && /^[A-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ0-9]/.test(s));

  const startsWithCapital = /^[A-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ]/.test(raw);
  const endsWithPunctuation = /[.!?]\s*$/.test(raw);
  const sentenceCount = completeSegments.length;
  const hasTwoDistinctSentences = completeSegments.length >= 2;

  return {
    sentenceCount: segments.length,
    completeSentences: completeSegments.length,
    hasTwoDistinctSentences,
    startsWithCapital,
    endsWithPunctuation,
    punctuatedCount
  };
}

export function evaluateLanguage(text) {
  const raw = String(text || '').trim();
  const norm = normalizeText(raw);
  const words = countWords(raw);
  const sent = analyzeSentences(raw);

  const connectorsFound = [];
  const categoriesUsed = [];

  for (const [cat, list] of Object.entries(CONNECTEURS_CATEGORIES)) {
    let catHit = false;
    for (const conn of list) {
      if (matchExpression(norm, raw, conn)) {
        if (!connectorsFound.includes(conn)) connectorsFound.push(conn);
        catHit = true;
      }
    }
    if (catHit) categoriesUsed.push(cat);
  }

  // L1 : Connecteurs logiques (/0.5 pt)
  let l1Score = 0;
  if (connectorsFound.length >= 2) {
    l1Score = 0.5;
  } else if (connectorsFound.length === 1) {
    l1Score = 0.25;
  }

  // L2 : Phrases complètes ponctuées (0.25 pt) + développement >= 20 mots (0.25 pt)
  let l2Score = 0;
  if (sent.hasTwoDistinctSentences) {
    l2Score += 0.25;
  }
  if (words >= 20) {
    l2Score += 0.25;
  }

  const score = Math.round((l1Score + l2Score) * 100) / 100;

  const erreursLangue = [];
  const conseilsLangue = [];

  if (words < 20) {
    erreursLangue.push(`Réponse encore trop courte (${words} mots).`);
    conseilsLangue.push('Développe ta justification en rédigeant au moins 2 phrases complètes (20 mots ou plus).');
  }
  if (!sent.hasTwoDistinctSentences) {
    erreursLangue.push('Phrases incomplètes ou ponctuation absente (majuscules / points).');
    conseilsLangue.push('Rédige des phrases complètes (Sujet + Verbe + Complément) commençant par une majuscule et terminées par un point.');
  }
  if (connectorsFound.length === 0) {
    erreursLangue.push('Aucun connecteur logique détecté pour relier les faits scientifiques et les explications.');
    conseilsLangue.push('Utilise des connecteurs logiques comme « car », « parce que », « alors que », « tandis que », « donc » ou « c\'est pourquoi ».');
  } else if (connectorsFound.length === 1) {
    conseilsLangue.push('Tu as utilisé 1 connecteur logique (« ' + connectorsFound[0] + ' ») : ajoutes-en un second (ex. d\'opposition ou de conséquence : « alors que », « donc ») pour obtenir 0,5/0,5.');
  }

  return {
    score,
    max: 1,
    l1Score,
    l2Score,
    wordCount: words,
    sentenceCount: sent.sentenceCount,
    completeSentences: sent.completeSentences,
    hasTwoDistinctSentences: sent.hasTwoDistinctSentences,
    connectorsFound,
    categoriesUsed,
    erreursLangue,
    conseilsLangue
  };
}

// ============================================================================
// RÉFÉRENTIEL DES 7 ACTIVITÉS & GRILLES CRITÉRIÉES (C1..C4 SUR /1 PT CHACUN)
// ============================================================================
export const ACTIVITIES_META = {
  A1: { id: 'A1', titre: 'A1 — Le cerveau, un organe hyperactif (Besoins & IRMf)' },
  A2: { id: 'A2', titre: 'A2 — Audition et prévention des risques sonores' },
  A3: { id: 'A3', titre: 'A3 — Temps de réaction et sécurité routière' },
  A4: { id: 'A4', titre: 'A4 — Communication synaptique et action du curare' },
  A5: { id: 'A5', titre: 'A5 — Sommeil, mémoire et écrans le soir' },
  A6: { id: 'A6', titre: 'A6 — Addictions, dopamine et cerveau adolescent' },
  A7: { id: 'A7', titre: 'A7 — Vision et intégration cérébrale' },
  A8: { id: 'A8', titre: 'A8 — Mode d\'action des drogues sur les synapses' }
};

/**
 * Helper générique pour évaluer un critère composé de 2 sous-objectifs A et B (0 / 0.5 / 1 pt).
 */
function scoreTwoParts(partAOk, partBOk, matchedA, matchedB) {
  let score = 0;
  if (partAOk && partBOk) score = 1;
  else if (partAOk || partBOk) score = 0.5;
  return {
    score,
    matched: Array.from(new Set([...matchedA, ...matchedB]))
  };
}

/**
 * Helper générique basé sur un ensemble d'indices pondérés.
 */
function scoreFromGroups(norm, raw, groupList, fullThreshold = 2) {
  const matched = [];
  let hits = 0;
  for (const g of groupList) {
    const ok = g.patterns.some((p) => matchExpression(norm, raw, p));
    if (ok) {
      hits++;
      matched.push(g.label);
    }
  }
  let score = 0;
  if (hits >= fullThreshold) score = 1;
  else if (hits >= 1) score = 0.5;
  return { score, matched, hits };
}

export const RUBRICS = {
  // --------------------------------------------------------------------------
  // A7 — VISION ET INTÉGRATION CÉRÉBRALE
  // --------------------------------------------------------------------------
  A7: {
    id: 'A7',
    titre: 'Vision et intégration cérébrale',
    highlightTerms: [
      'patient a', 'patient b', 'v1', 'v2', 'v3', 'v4', 'v5', 'thalamus',
      'couleur', 'couleurs', 'gris', 'achromatopsie', 'forme', 'formes',
      'benson', 'agnosie', 'mouvement', 'mouvements', 'reception', 'relais',
      'cortex visuel', 'cortex occipital', 'occipital', 'lesion', 'lesions',
      'integration', 'integrer', 'reseau', 'communiquer', 'cooperer',
      'aires visuelles', 'specialisees', 'specialisee', 'faisceaux', 'retine', 'oeil', 'yeux'
    ],
    criteria: [
      {
        id: 'c1',
        titre: 'Dissociation clinique (Patients A et B)',
        competence: 'D4.2',
        description: 'Décrire précisément les symptômes opposés du patient A (perte des couleurs, formes conservées) et du patient B (perte des formes, couleurs conservées).',
        adviceIfIncomplete: 'Compare précisément les deux patients du Doc. 1 et 2 : qu\'est-ce que le patient A continue de voir vs ce qu\'il perd ? Et pour le patient B (test de Benson) ?',
        evaluate(norm, raw) {
          const hitA = matchExpression(norm, raw, 'patient a') || matchExpression(norm, raw, 'premier patient');
          const hitB = matchExpression(norm, raw, 'patient b') || matchExpression(norm, raw, 'deuxieme patient') || matchExpression(norm, raw, 'second patient');
          const colorLoss = countMatches(norm, raw, [
            { label: 'perte des couleurs / gris', patterns: ['gris', 'achromatopsie', 'noir et blanc', 'sans couleur', 'ne voit plus les couleurs', 'perd les couleurs', 'plus les couleurs', 'trouble des couleurs'] },
            { label: 'couleurs', patterns: ['couleur', 'couleurs'] }
          ]);
          const shapeLoss = countMatches(norm, raw, [
            { label: 'test de Benson (0/4)', patterns: ['benson', '0/4', '0 sur 4', 'objets'] },
            { label: 'trouble des formes', patterns: ['forme', 'formes', 'dessins', 'agnosie', 'reconnaitre les formes', 'identifier les objets'] }
          ]);
          const partAOk = (hitA && colorLoss.length > 0) || colorLoss.includes('perte des couleurs / gris');
          const partBOk = (hitB && shapeLoss.length > 0) || shapeLoss.includes('test de Benson (0/4)') || shapeLoss.includes('trouble des formes');
          return scoreTwoParts(partAOk, partBOk, colorLoss, shapeLoss);
        }
      },
      {
        id: 'c2',
        titre: 'Spécialisation des aires V4 et V3',
        competence: 'D4.2',
        description: 'Relier la perte des couleurs du patient A à une lésion de V4 et la perte des formes du patient B à une lésion de V3.',
        adviceIfIncomplete: 'Nomme les deux aires lésées (Doc. 2 et cerveau 3D) et associe clairement chacune à sa fonction : quelle aire traite les couleurs ? Quelle aire traite les formes ?',
        evaluate(norm, raw) {
          const v4Match = matchExpression(norm, raw, 'v4');
          const v3Match = matchExpression(norm, raw, 'v3');
          const colorNear = matchExpression(norm, raw, 'couleur');
          const shapeNear = matchExpression(norm, raw, 'forme') || matchExpression(norm, raw, 'objet');

          // Vérifier qu'il n'y a pas d'inversion pure sans la bonne association
          const v4ColorExplicit = /v4[^.!?\n]{0,45}couleur|couleur[^.!?\n]{0,45}v4|patient a[^.!?\n]{0,45}v4|v4[^.!?\n]{0,45}patient a/i.test(norm);
          const v3ShapeExplicit = /v3[^.!?\n]{0,45}(forme|objet|benson)|(forme|objet|benson)[^.!?\n]{0,45}v3|patient b[^.!?\n]{0,45}v3|v3[^.!?\n]{0,45}patient b/i.test(norm);

          const m = [];
          if (v4Match) m.push('aire V4');
          if (v3Match) m.push('aire V3');

          const okV4 = v4ColorExplicit || (v4Match && colorNear && !/v4[^.!?\n]{0,25}forme/i.test(norm));
          const okV3 = v3ShapeExplicit || (v3Match && shapeNear && !/v3[^.!?\n]{0,25}couleur/i.test(norm));

          return scoreTwoParts(okV4, okV3, okV4 ? ['V4 -> couleurs'] : (v4Match ? ['V4'] : []), okV3 ? ['V3 -> formes'] : (v3Match ? ['V3'] : []));
        }
      },
      {
        id: 'c3',
        titre: 'Organisation modulaire (V1, V2, V5, Thalamus)',
        competence: 'D4.1',
        description: 'Identifier que le cortex visuel occipital possède plusieurs aires spécialisées (V1 réception, V2 relais/contours, V5 mouvement).',
        adviceIfIncomplete: 'Explique comment l\'information arrive au cortex visuel et cite d\'autres aires spécialisées du modèle 3D (comme V1 qui reçoit le message, V2 qui relaie ou V5 qui analyse le mouvement).',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'aire V1 (réception)', patterns: ['v1', 'aire primaire', 'premiere etape', 'recoit le message'] },
            { label: 'aire V2 (relais/contours)', patterns: ['v2', 'relais', 'contours', 'distribue'] },
            { label: 'aire V5 (mouvement)', patterns: ['v5', 'mouvement', 'mouvements'] },
            { label: 'aires spécialisées / cortex occipital', patterns: ['aires specialisees', 'zones specialisees', 'cortex occipital', 'lobe occipital', 'cortex visuel'] },
            { label: 'thalamus / voies visuelles', patterns: ['thalamus', 'nerf optique', 'retine'] }
          ], 2);
        }
      },
      {
        id: 'c4',
        titre: 'Fonction d\'intégration cérébrale en réseau',
        competence: 'D1.3',
        description: 'Conclure que la vision normale exige l\'intégration : les aires spécialisées doivent communiquer et coopérer en réseau.',
        adviceIfIncomplete: 'Rédige une conclusion sur l\'intégration cérébrale : pourquoi une seule aire ne suffit-elle pas et que doivent faire toutes ces aires ensemble pour reconstruire une image complète ?',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'notion d\'intégration', patterns: ['integration', 'integrer', 'integre', 'integrent'] },
            { label: 'communication / mise en relation / réseau', patterns: ['communiquent', 'communiquer', 'communication', 'reseau', 'faisceaux', 'mise en relation', 'connectees', 'echangent', 'reliees'] },
            { label: 'coopération / synthèse complète', patterns: ['cooperer', 'cooperent', 'ensemble', 'combiner', 'rassembler', 'assembler', 'image complete', 'vision complete', 'perception complete'] }
          ], 2);
        }
      }
    ],
    detectErrors(norm) {
      const errs = [];
      const clauses = norm
        .split(/[.!?\n;]|,\s*(?:alors que|tandis que|en revanche)|\b(?:alors que|tandis que|en revanche)\b/i)
        .map((s) => s.trim())
        .filter(Boolean);

      let inverted = false;
      for (const cl of clauses) {
        const hasV3 = /\bv3\b/.test(cl);
        const hasV4 = /\bv4\b/.test(cl);
        const hasColor = /\b(couleur|couleurs|gris|achromatopsie)\b/.test(cl);
        const hasShape = /\b(forme|formes|benson|agnosie)\b/.test(cl);
        const hasPatA = /\bpatient a\b/.test(cl);
        const hasPatB = /\bpatient b\b/.test(cl);

        if (hasV3 && !hasV4 && !hasShape && (hasColor || hasPatA)) {
          inverted = true;
        }
        if (hasV4 && !hasV3 && !hasColor && (hasShape || hasPatB)) {
          inverted = true;
        }
      }
      if (inverted) {
        errs.push('Confusion V3 / V4 : attention, tu sembles associer V3 aux couleurs ou V4 aux formes. Vérifie dans le tableau du Doc. 2 (et dans le modèle 3D) : c\'est V4 qui traite les couleurs (Patient A) et V3 qui traite les formes (Patient B).');
      }
      const blamesEye = /(oeil|yeux|retine)[^.!?\n,;]{0,35}(abime|lese|detruit|malade|ne fonctionne pas|responsable)/i.test(norm);
      if (blamesEye) {
        errs.push('Confusion œil / cerveau : d\'après le Doc. 1, les yeux et la rétine des deux patients sont parfaitement normaux. La cause du trouble est une lésion dans une zone précise du cerveau.');
      }
      return errs;
    }
  },

  // --------------------------------------------------------------------------
  // A1 — BESOINS ÉNERGÉTIQUES & IRMf
  // --------------------------------------------------------------------------
  A1: {
    id: 'A1',
    titre: 'Besoins énergétiques & imagerie cérébrale (IRMf)',
    highlightTerms: [
      '2 %', '2%', '20 %', '20%', 'dioxygene', 'o2', 'glucose', 'sang', 'arteres',
      'arteres cerebrales', 'irrigation', 'irmf', 'zones actives', 'aires',
      '10 %', '10%', 'mythe', 'neuromythe', '100 %', 'reseau', 'energie'
    ],
    criteria: [
      {
        id: 'c1',
        titre: 'Disproportion masse (2 %) / énergie (20 %)',
        competence: 'D4.2',
        description: 'Relever que le cerveau pèse environ 2 % du corps mais consomme 20 % du dioxygène et du glucose.',
        adviceIfIncomplete: 'Appuie-toi sur les chiffres du Doc. 1 : compare la part du cerveau dans la masse du corps (%) et sa part dans la consommation d\'énergie (%).',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: '2 % de la masse', patterns: ['2 %', '2%', 'deux pour cent', '1,4 kg', '1 4 kg'] },
            { label: '20 % de la consommation', patterns: ['20 %', '20%', 'vingt pour cent', 'un cinquieme'] },
            { label: 'dioxygène et glucose', patterns: ['dioxygene', 'o2', 'glucose', 'sucre', 'energie'] }
          ], 2);
        }
      },
      {
        id: 'c2',
        titre: 'Approvisionnement par les artères cérébrales',
        competence: 'D4.1',
        description: 'Expliquer que le sang des artères cérébrales apporte en permanence dioxygène et glucose aux neurones.',
        adviceIfIncomplete: 'Explique comment le dioxygène et le glucose arrivent jusqu\'au cerveau (rôle du sang et des artères cérébrales).',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'artères cérébrales / vaisseaux', patterns: ['artere', 'arteres', 'vaisseau', 'vaisseaux', 'irrigation', 'irrigation sanguine'] },
            { label: 'apport sanguin continu / AVC', patterns: ['sang', 'circulation sanguine', 'en permanence', 'continu', 'avc', 'privation'] }
          ], 2);
        }
      },
      {
        id: 'c3',
        titre: 'Exploitation de l\'imagerie fonctionnelle (IRMf)',
        competence: 'D4.2',
        description: 'Montrer à l\'aide de l\'IRMf que plusieurs aires spécialisées s\'activent selon les tâches réalisées.',
        adviceIfIncomplete: 'Explique ce que montre l\'IRMf (Doc. 3) : voit-on une seule zone active ou plusieurs aires différentes selon la tâche ?',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'IRMf / imagerie cérébrale', patterns: ['irm', 'irmf', 'imagerie'] },
            { label: 'activation de multiples zones', patterns: ['plusieurs aires', 'plusieurs zones', 'differentes zones', 'zones actives', 'activite cerebrale', 'debit sanguin'] }
          ], 2);
        }
      },
      {
        id: 'c4',
        titre: 'Réfutation argumentée du mythe des 10 %',
        competence: 'D1.3',
        description: 'Conclure que l\'idée qu\'on n\'utilise que 10 % du cerveau est fausse : 100 % des aires travaillent en réseau.',
        adviceIfIncomplete: 'Réponds clairement au mythe des « 10 % du cerveau » : est-il vrai ou faux ? Justifie avec les besoins énergétiques et l\'IRMf.',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'réfutation du mythe des 10 %', patterns: ['10 %', '10%', 'mythe', 'neuromythe', 'faux', 'fausse', 'idee recue'] },
            { label: 'utilisation complète / en réseau', patterns: ['100 %', 'totalite', 'entierement', 'tout le cerveau', 'en reseau', 'au fil des taches', 'sommeil'] }
          ], 2);
        }
      }
    ],
    detectErrors(norm) {
      const errs = [];
      if (/on n utilise que 10|vrai.{0,20}10\s?%/i.test(norm) && !/faux|mythe|refut/i.test(norm)) {
        errs.push('Attention : affirmer qu\'on n\'utilise que 10 % du cerveau est un neuromythe. L\'IRMf et l\'énorme consommation d\'énergie (20 %) prouvent que tout le cerveau est utilisé.');
      }
      return errs;
    }
  },

  // --------------------------------------------------------------------------
  // A2 — AUDITION & RISQUES SONORES
  // --------------------------------------------------------------------------
  A2: {
    id: 'A2',
    titre: 'Audition et prévention des risques sonores',
    highlightTerms: [
      'oreille', 'tympan', 'osselets', 'cochlee', 'cellules ciliees', 'nerf auditif',
      'cortex auditif', 'lobe temporal', '85 db', '100 db', 'decibels', 'duree',
      'irreversible', 'detruites', 'surdite', 'acouphenes', 'bouchons', 'volume', 'pauses'
    ],
    criteria: [
      {
        id: 'c1',
        titre: 'Trajet du message auditif jusqu\'au cortex',
        competence: 'D4.1',
        description: 'Décrire la chaîne oreille/tympan → cochlée (cellules ciliées) → nerf auditif → cortex auditif.',
        adviceIfIncomplete: 'Décris le trajet complet du son : organes de l\'oreille (tympan, cochlée et cellules ciliées) puis nerf auditif jusqu\'au cortex auditif.',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'cochlée / cellules ciliées', patterns: ['cochlee', 'cellules ciliees', 'cellule ciliee', 'oreille interne', 'tympan'] },
            { label: 'nerf auditif', patterns: ['nerf auditif'] },
            { label: 'cortex auditif / cerveau', patterns: ['cortex auditif', 'aire auditive', 'lobe temporal', 'cerveau'] }
          ], 2);
        }
      },
      {
        id: 'c2',
        titre: 'Exploitation des seuils en décibels et durée',
        competence: 'D4.2',
        description: 'Citer le seuil de danger (85 dB) et/ou le niveau d\'un concert/casque (≥ 100 dB) ainsi que le rôle de la durée d\'exposition.',
        adviceIfIncomplete: 'Appuie-toi sur les valeurs du graphique (seuil de danger à 85 dB, 100 dB en concert/écouteurs et durée d\'exposition maximale).',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'seuil 85 dB / décibels', patterns: ['85', '100', '105', 'decibel', 'db'] },
            { label: 'durée d\'exposition', patterns: ['duree', 'temps d exposition', 'heures', 'minutes', 'seuil'] }
          ], 2);
        }
      },
      {
        id: 'c3',
        titre: 'Lésion irréversible des cellules ciliées',
        competence: 'D4.1',
        description: 'Expliquer que les cellules ciliées détruites ne se renouvellent pas (surdité définitive, acouphènes).',
        adviceIfIncomplete: 'Explique pourquoi les dommages auditifs sont graves : les cellules ciliées détruites peuvent-elles repousser ? Quelles conséquences (acouphènes, surdité) ?',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'destruction irréversible', patterns: ['irreversible', 'definitif', 'definitive', 'ne se renouvellent pas', 'ne repoussent pas', 'ne se regenerent pas', 'detruites', 'detruit'] },
            { label: 'acouphènes / surdité', patterns: ['acouphene', 'acouphenes', 'surdite', 'sourd', 'bourdonnement', 'sifflement'] }
          ], 2);
        }
      },
      {
        id: 'c4',
        titre: 'Mesures concrètes de prévention',
        competence: 'D3.4',
        description: 'Proposer au moins deux gestes efficaces de protection (bouchons d\'oreilles, baisser le volume, pauses, s\'éloigner des enceintes).',
        adviceIfIncomplete: 'Propose des règles concrètes pour protéger l\'audition en concert ou au casque (bouchons, volume, pauses, distance aux enceintes).',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'bouchons / protection', patterns: ['bouchon', 'bouchons', 'casque anti bruit', 'protection'] },
            { label: 'limiter volume / pauses / distance', patterns: ['baisser le volume', 'limiter le volume', 'volume', 'pause', 'pauses', 'eloigner', 'enceintes', 'duree d ecoute'] }
          ], 2);
        }
      }
    ],
    detectErrors(norm) {
      const errs = [];
      if (/cellules ciliees.{0,30}(repoussent|guerissent|se regenerent)/i.test(norm) && !/ne.{0,10}(repoussent|regenerent|renouvellent)/i.test(norm)) {
        errs.push('Erreur scientifique : chez l\'être humain, les cellules ciliées détruites ne se renouvellent jamais ; la perte auditive est irréversible.');
      }
      return errs;
    }
  },

  // --------------------------------------------------------------------------
  // A3 — TEMPS DE RÉACTION & SÉCURITÉ ROUTIÈRE
  // --------------------------------------------------------------------------
  A3: {
    id: 'A3',
    titre: 'Temps de réaction, téléphone et sécurité routière',
    highlightTerms: [
      'oeil', 'recepteur', 'nerf sensitif', 'cerveau', 'aires visuelles',
      'aire motrice', 'moelle epiniere', 'nerf moteur', 'muscle', 'muscles',
      'temps de reaction', '1 s', '2,5 s', '15 m', '35 m', '70 m', '83 m',
      'distance d arret', 'cortex prefrontal', 'attention', 'surcharge', 'sms', 'telephone'
    ],
    criteria: [
      {
        id: 'c1',
        titre: 'Trajet de la commande nerveuse du freinage',
        competence: 'D4.1',
        description: 'Tracer la chaîne : œil (récepteur) → nerf sensitif → cerveau → moelle épinière / nerf moteur → muscle.',
        adviceIfIncomplete: 'Décris le trajet complet du message nerveux lors du freinage : de l\'œil (récepteur) aux muscles (effecteurs) en passant par les nerfs et les centres nerveux.',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'récepteur + voie sensitive', patterns: ['oeil', 'retine', 'recepteur', 'nerf sensitif', 'nerf optique', 'message sensitif'] },
            { label: 'centres nerveux (cerveau / moelle)', patterns: ['cerveau', 'aire motrice', 'cortex', 'moelle epiniere'] },
            { label: 'voie motrice + muscle effecteur', patterns: ['nerf moteur', 'message moteur', 'muscle', 'muscles', 'pied', 'effecteur'] }
          ], 2);
        }
      },
      {
        id: 'c2',
        titre: 'Comparaison chiffrée des distances à 50 km/h',
        competence: 'D4.2',
        description: 'Exploiter les données (temps de réaction multiplié par ~2,5 avec SMS, distance de réaction 14-15 m vs 35 m, arrêt total ~70-83 m).',
        adviceIfIncomplete: 'Utilise les chiffres du document à 50 km/h : compare la distance de réaction normale (~15 m) à celle avec un SMS (~35 m) et la distance d\'arrêt totale.',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'temps de réaction augmenté', patterns: ['temps de reaction', '1 s', '2,5 s', '2.5 s', 'plus long', 'ralentit', 'allonge'] },
            { label: 'distances en mètres (15 m / 35 m / 70-83 m)', patterns: ['14 m', '15 m', '35 m', '70 m', '83 m', 'distance de reaction', 'distance d arret', 'distance de freinage'] }
          ], 2);
        }
      },
      {
        id: 'c3',
        titre: 'Explication cérébrale (surcharge attentionnelle)',
        competence: 'D4.1',
        description: 'Expliquer que le cortex préfrontal/cerveau ne peut pas traiter deux tâches attentionnelles simultanément (surcharge cognitive).',
        adviceIfIncomplete: 'Explique ce qui se passe dans le cerveau quand on lit un message en conduisant (rôle du cortex préfrontal et limite du traitement simultané).',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'surcharge / attention divisée', patterns: ['attention', 'surcharge', 'distrait', 'distraction', 'deux taches', 'en meme temps', 'simultane', 'multitache'] },
            { label: 'cortex préfrontal / traitement', patterns: ['cortex prefrontal', 'prefrontal', 'traite l information', 'traitement', 'prise de decision'] }
          ], 2);
        }
      },
      {
        id: 'c4',
        titre: 'Argumentation prévention & sécurité routière',
        competence: 'D3.4',
        description: 'Formuler une conclusion argumentée montrant le danger d\'accident et les règles de sécurité (ne pas utiliser le téléphone au volant/vélo).',
        adviceIfIncomplete: 'Rédige une conclusion de prévention claire reliant le risque d\'accident aux distances parcourues sans freiner.',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'risque de collision / accident', patterns: ['accident', 'collision', 'danger', 'obstacle', 'pieton', 'percuter', 'trop tard'] },
            { label: 'règle de sécurité / pas de téléphone', patterns: ['interdit', 'ne pas utiliser', 'mode avion', 'ne pas regarder', 'securite', 'concentration', 'conduite'] }
          ], 2);
        }
      }
    ],
    detectErrors(norm) {
      const errs = [];
      if (/cerveau.{0,25}deux taches.{0,20}sans probleme|pas de danger/i.test(norm)) {
        errs.push('Attention : le cerveau ne sait pas traiter efficacement deux tâches cognitives complexes en même temps ; le cortex préfrontal bascule de l\'une à l\'autre, ce qui allonge dangereusement le temps de réaction.');
      }
      return errs;
    }
  },

  // --------------------------------------------------------------------------
  // A4 — COMMUNICATION SYNAPTIQUE & CURARE
  // --------------------------------------------------------------------------
  A4: {
    id: 'A4',
    titre: 'Communication synaptique et mode d\'action du curare',
    highlightTerms: [
      'claude bernard', 'grenouille', 'curare', 'jonction', 'synapse', 'fente synaptique',
      '20 nm', 'vesicules', 'neurotransmetteur', 'acetylcholine', 'messager chimique',
      'recepteurs', 'neurone presynaptique', 'postsynaptique', 'bloque', 'paralysie', 'exocytose'
    ],
    criteria: [
      {
        id: 'c1',
        titre: 'Localisation par l\'expérience de Claude Bernard',
        competence: 'D4.2',
        description: 'Montrer que le nerf et le muscle restent individuellement fonctionnels, mais que la transmission échoue à la jonction nerf-muscle.',
        adviceIfIncomplete: 'Explique ce que prouvent les résultats de Claude Bernard (Doc. 1) : le nerf est-il détruit ? Le muscle ? Où agit exactement le curare ?',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'Claude Bernard / expériences', patterns: ['claude bernard', 'grenouille', 'ligature', 'nerf sciatique'] },
            { label: 'jonction nerf-muscle ciblée', patterns: ['jonction', 'entre le nerf et le muscle', 'passage du message', 'nerf fonctionne', 'muscle se contracte'] }
          ], 2);
        }
      },
      {
        id: 'c2',
        titre: 'Organisation de la synapse (fente synaptique)',
        competence: 'D4.1',
        description: 'Décrire la discontinuité physique entre les deux cellules : fente synaptique (~20 nm), vésicules et membranes.',
        adviceIfIncomplete: 'Décris l\'échelle microscopique de la synapse : les neurones se touchent-ils ? Quel espace les sépare et que contiennent les vésicules ?',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'synapse / fente synaptique', patterns: ['synapse', 'fente synaptique', 'espace synaptique', '20 nm', 'ne se touchent pas', 'discontinuite'] },
            { label: 'vésicules / éléments pré et post', patterns: ['vesicule', 'vesicules', 'presynaptique', 'postsynaptique', 'bouton synaptique'] }
          ], 2);
        }
      },
      {
        id: 'c3',
        titre: 'Transmission chimique par neurotransmetteurs',
        competence: 'D4.1',
        description: 'Expliquer que l\'arrivée du message électrique déclenche la libération de neurotransmetteurs qui se fixent sur des récepteurs spécifiques.',
        adviceIfIncomplete: 'Explique comment le message franchit la fente synaptique : par quel messager chimique et sur quelle structure se fixe-t-il ?',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'libération de neurotransmetteur', patterns: ['neurotransmetteur', 'neurotransmetteurs', 'acetylcholine', 'messager chimique', 'molecule chimique', 'liberation', 'libere', 'exocytose'] },
            { label: 'fixation sur récepteurs spécifiques', patterns: ['recepteur', 'recepteurs', 'se fixe', 'se fixent', 'clef serrure', 'cle serrure', 'contraction'] }
          ], 2);
        }
      },
      {
        id: 'c4',
        titre: 'Mécanisme de blocage par le curare',
        competence: 'D1.3',
        description: 'Expliquer que le curare prend la place du neurotransmetteur sur les récepteurs sans activer le muscle → paralysie.',
        adviceIfIncomplete: 'Explique au niveau moléculaire pourquoi le curare bloque la contraction musculaire (compétition sur les récepteurs).',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'blocage compétitif des récepteurs', patterns: ['bloque', 'blocage', 'prend la place', 'empeche la fixation', 'leurre', 'inhibiteur', 'occupe les recepteurs'] },
            { label: 'conséquence : absence de contraction / paralysie', patterns: ['paralysie', 'paralyse', 'ne se contracte plus', 'pas de contraction', 'message bloque', 'asphyxie'] }
          ], 2);
        }
      }
    ],
    detectErrors(norm) {
      const errs = [];
      if (/detruit le nerf|brule le muscle|detruit le muscle/i.test(norm)) {
        errs.push('Attention : les expériences de Claude Bernard montrent que le curare ne détruit ni le nerf ni le muscle (le muscle se contracte encore si on le stimule directement). Il bloque uniquement la synapse entre les deux.');
      }
      return errs;
    }
  },

  // --------------------------------------------------------------------------
  // A5 — SOMMEIL, ÉCRANS & MÉMOIRE
  // --------------------------------------------------------------------------
  A5: {
    id: 'A5',
    titre: 'Sommeil, apprentissages et écrans le soir',
    highlightTerms: [
      'enclass', 'anses', 'ecrans', 'lumiere bleue', 'melatonine', 'dette de sommeil',
      'gais', 'born', '48 h', 'privation', 'hippocampe', 'cortex', 'synapses',
      'consolidation', 'memoire', 'reactivation', 'tri', 'couvre feu', '9 h'
    ],
    criteria: [
      {
        id: 'c1',
        titre: 'Constat sanitaire (écrans et manque de sommeil)',
        competence: 'D4.2',
        description: 'Relever l\'impact des écrans le soir (lumière bleue, retard d\'endormissement / mélatonine) et la dette de sommeil au collège.',
        adviceIfIncomplete: 'Appuie-toi sur les données d\'enquête (EnCLASS / ANSES) : quel est l\'effet des écrans le soir sur l\'horloge biologique et la durée de sommeil ?',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'écrans / lumière bleue / mélatonine', patterns: ['ecran', 'ecrans', 'smartphone', 'lumiere bleue', 'melatonine', 'endormissement'] },
            { label: 'données de dette de sommeil', patterns: ['enclass', 'anses', 'dette de sommeil', 'manque de sommeil', '7 h', '8 h', '9 h', 'heures de sommeil'] }
          ], 2);
        }
      },
      {
        id: 'c2',
        titre: 'Expérience de Gais & Born (mémorisation à 48 h)',
        competence: 'D4.2',
        description: 'Comparer le groupe ayant dormi au groupe privé de sommeil : le sommeil améliore durablement la restitution.',
        adviceIfIncomplete: 'Compare les deux groupes de l\'expérience de Gais et Born (Doc. 2) : que deviennent les performances après 48 h selon qu\'on a dormi ou non ?',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'expérience Gais & Born / groupes comparés', patterns: ['gais', 'born', 'groupe', 'temoin', 'prive de sommeil', '48 h', '48 heures', 'mots'] },
            { label: 'meilleure mémorisation après sommeil', patterns: ['mieux memorise', 'retient mieux', 'meilleur rappel', 'meilleurs resultats', 'performance', 'chute'] }
          ], 2);
        }
      },
      {
        id: 'c3',
        titre: 'Mécanismes cérébraux nocturnes (hippocampe & synapses)',
        competence: 'D4.1',
        description: 'Expliquer que pendant le sommeil, le cerveau est actif : l\'hippocampe réactive les souvenirs et renforce/trie les synapses.',
        adviceIfIncomplete: 'Explique ce que fait le cerveau pendant la nuit (rôle de l\'hippocampe, réactivation des neurones et consolidation des synapses).',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'consolidation / hippocampe', patterns: ['hippocampe', 'consolidation', 'consolide', 'memoire a long terme', 'reactivation', 'rejoue'] },
            { label: 'plasticité des synapses / nettoyage', patterns: ['synapse', 'synapses', 'connexions', 'tri', 'renforcement', 'renforce', 'elimine', 'cerveau actif'] }
          ], 2);
        }
      },
      {
        id: 'c4',
        titre: 'Règles d\'hygiène du sommeil',
        competence: 'D3.4',
        description: 'Proposer des habitudes protectrices concrètes (arrêt des écrans 1 h avant de dormir, horaires réguliers, durée adaptée).',
        adviceIfIncomplete: 'Propose au moins deux conseils concrets d\'hygiène du sommeil pour un collégien (couvre-feu des écrans, régularité, durée).',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'coupure écrans avant coucher', patterns: ['couvre feu', 'arreter les ecrans', 'sans ecran', 'hors de la chambre', '1 heure avant', '1h avant', 'pas de telephone'] },
            { label: 'horaires réguliers / durée suffisante', patterns: ['horaires reguliers', 'heure fixe', 'dormir 9', '9 heures', '8 a 10 heures', 'chambre calme', 'obscurite'] }
          ], 2);
        }
      }
    ],
    detectErrors(norm) {
      const errs = [];
      if (/cerveau.{0,20}eteint|cerveau.{0,20}se repose completement|ne fait rien la nuit/i.test(norm)) {
        errs.push('Idée reçue : pendant le sommeil, le cerveau ne s\'éteint pas ! Il reste très actif pour trier les informations, consolider la mémoire et renforcer les synapses.');
      }
      return errs;
    }
  },

  // --------------------------------------------------------------------------
  // A6 — ADDICTIONS, DOPAMINE & CERVEAU ADOLESCENT
  // --------------------------------------------------------------------------
  A6: {
    id: 'A6',
    titre: 'Addictions, circuit de la récompense et vulnérabilité adolescente',
    highlightTerms: [
      'puff', 'puffs', 'nicotine', 'tabac', 'dopamine', 'circuit de la recompense',
      'atv', 'noyau accumbens', '100 ua', '250', '1000', 'cortex prefrontal',
      'immature', '25 ans', 'dependance', 'tolerance', 'manque', 'prevention'
    ],
    criteria: [
      {
        id: 'c1',
        titre: 'Constat sur les puffs et la nicotine chez les jeunes',
        competence: 'D4.2',
        description: 'Relever l\'exposition précoce (13-15 ans) aux puffs contenant de la nicotine et le risque de passage au tabac.',
        adviceIfIncomplete: 'Appuie-toi sur les données d\'enquête (Doc. 1) concernant la consommation des puffs chez les collégiens et la présence de nicotine.',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'puffs / nicotine / tabac', patterns: ['puff', 'puffs', 'nicotine', 'cigarette electronique', 'tabac', 'porte d entree'] },
            { label: 'données adolescents (13-15 ans)', patterns: ['13 15 ans', 'collegiens', 'adolescents', 'jeunes', 'aromes'] }
          ], 2);
        }
      },
      {
        id: 'c2',
        titre: 'Circuit de la récompense et libération de dopamine',
        competence: 'D4.2',
        description: 'Expliquer l\'activation du circuit de la récompense (ATV → noyau accumbens) et la libération massive et artificielle de dopamine.',
        adviceIfIncomplete: 'Décris l\'action de la drogue/nicotine sur le circuit de la récompense : quelle molécule augmente anormalement (dopamine) et dans quelles zones (ATV, noyau accumbens) ?',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'dopamine (pic anormal)', patterns: ['dopamine', 'pic', '250', '1000', '100 ua', 'massivement', 'artificiellement'] },
            { label: 'circuit de la récompense (ATV / accumbens)', patterns: ['circuit de la recompense', 'recompense', 'atv', 'accumbens', 'plaisir'] }
          ], 2);
        }
      },
      {
        id: 'c3',
        titre: 'Vulnérabilité du cerveau adolescent (immaturité préfrontale)',
        competence: 'D4.1',
        description: 'Expliquer le déséquilibre entre un système de récompense hyperactif et un cortex préfrontal encore immature (~25 ans).',
        adviceIfIncomplete: 'Explique pourquoi le cerveau d\'un adolescent est plus vulnérable à l\'addiction que celui d\'un adulte (maturation tardive du cortex préfrontal vers 25 ans).',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'cortex préfrontal immature (~25 ans)', patterns: ['cortex prefrontal', 'prefrontal', 'immature', 'maturation', '25 ans', 'controle', 'frein'] },
            { label: 'vulnérabilité adolescente accrue', patterns: ['vulnerable', 'vulnerabilite', 'hyperactif', 'desequilibre', 'adolescent', 'adolescence', 'impulsif'] }
          ], 2);
        }
      },
      {
        id: 'c4',
        titre: 'Dépendance / tolérance et arguments de prévention',
        competence: 'D3.4',
        description: 'Expliquer l\'installation de la dépendance (besoin d\'augmenter les doses, manque) et formuler des moyens d\'éviter le piège.',
        adviceIfIncomplete: 'Explique comment s\'installe la dépendance (tolérance, sensation de manque) et donne des arguments pour refuser ces produits.',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'dépendance / tolérance / manque', patterns: ['dependance', 'addiction', 'addict', 'tolerance', 'manque', 'augmenter les doses', 'besoin'] },
            { label: 'prévention / esprit critique', patterns: ['refuser', 'prevention', 'aide', 'tabac info service', 'marketing', 'piege', 'eviter'] }
          ], 2);
        }
      }
    ],
    detectErrors(norm) {
      const errs = [];
      if (/puff.{0,25}(sans danger|inoffensive|pas de nicotine)/i.test(norm)) {
        errs.push('Attention : les puffs sont loin d\'être inoffensives ; la majorité contiennent de la nicotine fortement addictive qui dérègle le circuit de la récompense.');
      }
      return errs;
    }
  },

  A8: {
    id: 'A8',
    titre: 'Mode d\'action des drogues sur les synapses',
    highlightTerms: [
      'vesicule', 'vesicules', 'neurone a', 'neurone b', 'neurone c',
      'zone de jonction', 'synapse', 'espace synaptique', 'substance', 'neurotransmetteur',
      'membrane', 'cannabis', 'heroine', 'cocaine', 'ecstasy', 'alcool', 'amphetamines',
      'euphorie', 'attention', 'memoire', 'memorisation', 'hallucinations', 'dependance'
    ],
    criteria: [
      {
        id: 'c1',
        competence: 'D4.2',
        titre: 'Comparaison neurones B/C (avant/pendant) & troubles nerveux',
        description: 'Comparer le contenu des neurones B (vésicules) et C (sans vésicules) avant et pendant la transmission et relever les troubles nerveux.',
        adviceIfIncomplete: 'Compare d\'abord les clichés avant/pendant (vésicules présentes dans B mais absentes dans C) et relève les troubles nerveux du Doc. 3 (attention, mémoire, euphorie, dépendance).',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'vésicules dans B / absentes dans C', patterns: ['vesicule', 'vesicules', /neurone\s*c.{0,35}(aucun|pas\s*de|sans|vide)/] },
            { label: 'évolution avant / pendant la transmission', patterns: [/avant.{0,35}pendant/, /cliche\s*1.{0,35}cliche\s*2/, 'moins de vesicule', /s.?ouvrent/, /fusionn/] },
            { label: 'troubles nerveux (attention, mémoire, euphorie, dépendance)', patterns: ['trouble', 'attention', 'memoire', 'memorisation', 'apprentissage', 'euphorie', 'hallucination', 'dependance', 'apathie', 'somnolence', 'agitation'] }
          ], 2);
        }
      },
      {
        id: 'c2',
        competence: 'D4.1',
        titre: 'Transmission normale : libération vésiculaire dans l\'espace synaptique',
        description: 'Expliquer que les vésicules du neurone B s\'ouvrent et libèrent une substance chimique dans l\'espace de jonction qui agit sur le neurone C.',
        adviceIfIncomplete: 'Explique le mécanisme normal au niveau de la synapse : les vésicules du neurone B déversent une substance chimique dans l\'espace de jonction, qui agit sur la membrane du neurone C.',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'déversement / libération par les vésicules', patterns: [/devers/, /liber/, /vide.{0,25}contenu/, /ouverture.{0,20}vesicule/, /s.?ouvrent/] },
            { label: 'substance chimique dans l\'espace synaptique', patterns: ['substance', 'messager', 'neurotransmetteur', 'espace synaptique', 'zone de jonction', 'synapse', 'fente'] },
            { label: 'action sur la membrane du neurone C', patterns: [/membrane.{0,25}neurone\s*c/, /agit\s*sur.{0,25}neurone\s*c/, /vers\s*le\s*neurone\s*c/, 'recepteur'] }
          ], 2);
        }
      },
      {
        id: 'c3',
        competence: 'D4.2',
        titre: 'Action sur A/B et dans l\'espace synaptique (cannabis, héroïne, cocaïne, amphétamines)',
        description: 'Préciser l\'action du cannabis/héroïne (bloquent les vésicules sur A/B), de la cocaïne/ecstasy (maintiennent la substance dans l\'espace) et des amphétamines (vident les vésicules).',
        adviceIfIncomplete: 'Décris le mode et le lieu d\'action du cannabis/héroïne (membrane A/B, bloquent les vésicules), de la cocaïne/ecstasy (maintiennent la substance dans l\'espace synaptique) et des amphétamines (vident les vésicules).',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'cannabis / héroïne (membrane A/B, bloquent libération)', patterns: [/cannabis.{0,65}(empech|bloqu|membrane)/, /heroine.{0,65}(empech|bloqu|membrane)/] },
            { label: 'cocaïne / ecstasy (maintien dans l\'espace synaptique)', patterns: [/cocaine.{0,65}(maintien|espace|accumul|reste)/, /ecstasy.{0,65}(maintien|espace|accumul|reste)/] },
            { label: 'amphétamines (vident les vésicules dans l\'espace)', patterns: [/amphetamine.{0,65}(penetr|vid|accumul)/] }
          ], 2);
        }
      },
      {
        id: 'c4',
        competence: 'D4.1',
        titre: 'Action de l\'alcool sur le neurone C et perturbation du message nerveux',
        description: 'Indiquer que l\'alcool empêche la substance d\'agir sur la membrane du neurone C et relier ces perturbations aux troubles nerveux.',
        adviceIfIncomplete: 'Précise le mode et le lieu d\'action de l\'alcool (empêche la substance d\'agir sur la membrane du neurone C) et montre comment cela perturbe le message nerveux.',
        evaluate(norm, raw) {
          return scoreFromGroups(norm, raw, [
            { label: 'alcool bloque l\'action sur la membrane du neurone C', patterns: [/alcool.{0,65}(empech|bloqu|agit\s*pas).{0,80}(membrane|neurone\s*c)/, /membrane.{0,35}neurone\s*c.{0,45}alcool/] },
            { label: 'perturbation de la transmission du message nerveux / dépendance', patterns: [/perturb/, /dereg/, /modifi.{0,25}(transmission|message)/, 'dependance', 'trouble'] }
          ], 2);
        }
      }
    ],
    detectErrors(norm) {
      const errs = [];
      if (/neurone\s*c.{0,30}(contient|possede|a\s*des|avec\s*des).{0,20}vesicule/.test(norm) && !/aucun|pas\s*de\s*vesicule|sans\s*vesicule/.test(norm)) {
        errs.push('Attention aux clichés MET : le corps cellulaire du neurone C ne contient aucune vésicule ; elles se trouvent uniquement dans les terminaisons des neurones A et B.');
      }
      if ((/alcool.{0,45}(empech|bloqu|vid|cibl|fix).{0,35}(vesicule|neurone\s*b|neurone\s*a)/.test(norm) || /alcool.{0,35}(vesicule|neurone\s*b|neurone\s*a).{0,25}(empech|bloqu|vid)/.test(norm)) && !/membrane.{0,25}neurone\s*c/.test(norm)) {
        errs.push('Attention : l\'alcool n\'empêche pas les vésicules de sortir, il empêche la substance déjà déversée d\'agir sur la membrane du neurone C.');
      }
      if (/(cannabis|heroine).{0,35}(maintien|accumul.{0,20}espace)/.test(norm)) {
        errs.push('Attention à ne pas confondre : cannabis et héroïne empêchent les vésicules (A/B) de libérer leur contenu ; ce sont la cocaïne, l\'ecstasy et les amphétamines qui augmentent/maintiennent la substance dans l\'espace synaptique.');
      }
      if (/cannabis.{0,25}(sans danger|inoffensif|aucun effet|pas de dependance)/.test(norm)) {
        errs.push('Attention au Doc. 3 : le cannabis provoque des troubles de l\'attention, de la mémorisation et de l\'apprentissage.');
      }
      return errs;
    }
  }
};

// ============================================================================
// ÉVALUATION D'UNE COPIE & GÉNÉRATION DU BILAN ÉLÈVE / ENSEIGNANT
// ============================================================================
export function evaluateActivityResponse(text, rawActId, modalite = 'VOIE_GUIDEE') {
  const actId = normalizeActivityId(rawActId);
  const rubric = RUBRICS[actId] || RUBRICS.A7;
  const raw = String(text || '').trim();
  const norm = normalizeText(raw);

  const lang = evaluateLanguage(raw);
  const critResults = [];
  const allMatched = [];
  const conseilsProgression = [];

  for (const crit of rubric.criteria) {
    const res = crit.evaluate(norm, raw);
    critResults.push({
      id: crit.id,
      titre: crit.titre,
      competence: crit.competence,
      description: crit.description,
      score: res.score,
      max: 1,
      matched: res.matched
    });
    for (const m of res.matched) {
      if (!allMatched.includes(m)) allMatched.push(m);
    }
    if (res.score < 1) {
      conseilsProgression.push({
        critere: crit.titre,
        score: res.score,
        conseil: crit.adviceIfIncomplete
      });
    }
  }

  const c1 = critResults[0]?.score || 0;
  const c2 = critResults[1]?.score || 0;
  const c3 = critResults[2]?.score || 0;
  const c4 = critResults[3]?.score || 0;

  const sciScore = Math.round((c1 + c2 + c3 + c4) * 100) / 100;
  const total = Math.round((sciScore + lang.score) * 100) / 100;

  // Erreurs détectées (scientifiques + langue + critères à 0)
  const scientificErrors = typeof rubric.detectErrors === 'function' ? rubric.detectErrors(norm, raw) : [];
  const missingCriteriaErrors = critResults
    .filter((c) => c.score === 0)
    .map((c) => `Critère manquant (${c.titre}) : cet élément n'apparaît pas encore dans ta réponse.`);
  const partialCriteriaNotes = critResults
    .filter((c) => c.score === 0.5)
    .map((c) => `Critère incomplet (${c.titre}) : bonne piste, mais il manque une précision pour obtenir 1/1.`);

  const erreursDetectees = [
    ...scientificErrors,
    ...missingCriteriaErrors,
    ...partialCriteriaNotes,
    ...lang.erreursLangue
  ];

  // Conseils de langue ajoutés à la liste des pistes de progression
  for (const cl of lang.conseilsLangue) {
    conseilsProgression.push({
      critere: 'Maîtrise de la langue',
      score: lang.score,
      conseil: cl
    });
  }

  let niveauMaitrise = 'Maîtrise insuffisante';
  if (total >= 4.25) niveauMaitrise = 'Très bonne maîtrise';
  else if (total >= 3.25) niveauMaitrise = 'Maîtrise satisfaisante';
  else if (total >= 2.0) niveauMaitrise = 'Maîtrise fragile';

  const relanceTexte = conseilsProgression.length > 0
    ? conseilsProgression.slice(0, 3).map((x) => `[${x.critere}] ${x.conseil}`).join(' | ')
    : 'Critères complets et rédaction structurée !';

  const bilanTexte = [
    `Note ${total}/5 (${niveauMaitrise})`,
    `C1:${c1} C2:${c2} C3:${c3} C4:${c4} Langue:${lang.score} (L1:${lang.l1Score} L2:${lang.l2Score})`,
    scientificErrors.length ? `Confusions: ${scientificErrors.length}` : '',
    `Mots:${lang.wordCount} Phrases:${lang.sentenceCount} Connecteurs:${lang.connectorsFound.length}`
  ].filter(Boolean).join(' | ');

  return {
    actId,
    titre: rubric.titre,
    modalite,
    c1,
    c2,
    c3,
    c4,
    sciScore,
    langue: lang.score,
    langDetail: lang,
    total,
    total20: Math.round(total * 4 * 10) / 10,
    niveauMaitrise,
    criteria: critResults,
    keywordsFound: allMatched,
    connectorsFound: lang.connectorsFound,
    scientificErrors,
    erreursDetectees,
    conseilsProgression,
    relanceTexte,
    bilanTexte
  };
}

/**
 * Construit un objet ligne à 16 colonnes prêt pour Google Sheets & Dashboard.
 */
export function buildSheetRowPayload({
  eleve,
  classe,
  actId,
  modalite,
  tentative1Text,
  tentative2Text = '',
  evalObj
}) {
  const act = normalizeActivityId(actId);
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const horodateur = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

  const motsList = [
    ...(evalObj.keywordsFound || []),
    ...(evalObj.connectorsFound || []).map((c) => `conn:${c}`)
  ];

  return {
    Horodateur: horodateur,
    Modalite: modalite || 'VOIE_GUIDEE',
    Classe: String(classe || '4eme1').trim(),
    Eleve: String(eleve || 'Élève').trim(),
    Sujet: act,
    Tentative_1: String(tentative1Text || ''),
    Relance_Systeme: String(evalObj.relanceTexte || ''),
    Tentative_2: String(tentative2Text || ''),
    Score_C1: evalObj.c1,
    Score_C2: evalObj.c2,
    Score_C3: evalObj.c3,
    Score_C4: evalObj.c4,
    Score_Langue: evalObj.langue,
    Note_Finale_5: evalObj.total,
    Mots_Detectes: motsList.join(', '),
    Bilan_Texte: evalObj.bilanTexte
  };
}

/**
 * Surligne automatiquement les termes scientifiques (vert) et les connecteurs logiques (bleu)
 * dans la copie de l'élève (protégé contre les injections HTML).
 */
export function highlightStudentTextHTML(rawText, rawActId) {
  const actId = normalizeActivityId(rawActId);
  const rubric = RUBRICS[actId] || RUBRICS.A7;
  const text = String(rawText || '');
  if (!text.trim()) return '<em style="color:#94a3b8;">(Aucune réponse saisie)</em>';

  // Liste triée par longueur décroissante pour matcher les expressions composées d'abord
  const sciTerms = [...(rubric.highlightTerms || [])].sort((a, b) => b.length - a.length);
  const connTerms = [...ALL_CONNECTEURS].sort((a, b) => b.length - a.length);

  // Tokenisation mot-à-mot / expression par recherche sur texte échappé sans accents via table d'index
  const normChars = [];
  const origIndices = [];
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const base = ch.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    for (let k = 0; k < base.length; k++) {
      normChars.push(base[k]);
      origIndices.push(i);
    }
  }
  const normStr = normChars.join('');
  const spans = []; // { start, end, cls }

  const addMatches = (terms, cls) => {
    for (const term of terms) {
      const nTerm = normalizeText(term);
      if (!nTerm || nTerm.length < 2) continue;
      const escaped = escapeRegex(nTerm).replace(/\\ /g, '[\\s\\-\'’]+');
      const rx = new RegExp(`(^|[^a-z0-9])(${escaped}s?)(?=$|[^a-z0-9])`, 'g');
      let m;
      while ((m = rx.exec(normStr)) !== null) {
        const nStart = m.index + m[1].length;
        const nEnd = nStart + m[2].length - 1;
        const oStart = origIndices[nStart];
        const oEnd = (origIndices[nEnd] !== undefined ? origIndices[nEnd] : text.length - 1) + 1;
        // Éviter chevauchement avec un span déjà pris
        const overlaps = spans.some((s) => !(oEnd <= s.start || oStart >= s.end));
        if (!overlaps) {
          spans.push({ start: oStart, end: oEnd, cls });
        }
      }
    }
  };

  addMatches(sciTerms, 'hl-sci');
  addMatches(connTerms, 'hl-conn');

  spans.sort((a, b) => a.start - b.start);

  let html = '';
  let cursor = 0;
  for (const sp of spans) {
    if (sp.start > cursor) {
      html += escapeHTML(text.slice(cursor, sp.start));
    }
    html += `<mark class="${sp.cls}">${escapeHTML(text.slice(sp.start, sp.end))}</mark>`;
    cursor = sp.end;
  }
  if (cursor < text.length) {
    html += escapeHTML(text.slice(cursor));
  }
  return html.replace(/\n/g, '<br>');
}

const CerveauScoring = {
  ACTIVITIES_META,
  RUBRICS,
  CONNECTEURS_CATEGORIES,
  ALL_CONNECTEURS,
  normalizeText,
  normalizeActivityId,
  countWords,
  analyzeSentences,
  evaluateLanguage,
  evaluateActivityResponse,
  buildSheetRowPayload,
  highlightStudentTextHTML
};

if (typeof window !== 'undefined') {
  window.CerveauScoring = CerveauScoring;
}

export default CerveauScoring;
