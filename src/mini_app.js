// Moteur léger commun aux applications autonomes A1..A7 (4 onglets ciblés)
import { decodeBrain, decodeMri, repartitionBrainForVision } from './decoder.js';
import { BrainScene } from './brain3d.js';
import { MriTriplanar } from './mri2d.js';
import { STRUCTURES } from './content.js';
import { PUBLIC_ACTS, LOCKED_B64 } from './generated_mini_payload.js';
import { MINI_META, VISION_ZONES, mountActivityVisuals } from './mini_data.js';
import {
  evaluateActivityResponse,
  evaluateLanguage,
  countWords,
  buildSheetRowPayload,
  highlightStudentTextHTML
} from './scoring_cerveau.js';

const UNLOCK_CODE = '2027';
const GS_URL_STORAGE_KEY = 'cerveau_gs_url';
const LOCAL_COPIES_KEY = 'cerveau_local_copies_v1';
const PENDING_QUEUE_KEY = 'cerveau_pending_gs_v1';
const PROFILE_KEY = 'cerveau_student_profile_v1';

// URL Google Apps Script par défaut (surchargée par config.secret.js si présent en local)
const DEFAULT_GS_URL =
  'https://script.google.com/macros/s/AKfycbwBA_zUE5hnlWr0xdUgpzg1Y5zvr_aZjcRUv40hGpWed0o_twZN90hWKlIgEes0T0_H/exec';
const DEFAULT_GS_TOKEN = 'cerveau-svt-2026';

function getConfiguredGsUrl() {
  try {
    if (window.CERVEAU_SECRET_CONFIG && window.CERVEAU_SECRET_CONFIG.gsUrl) {
      return String(window.CERVEAU_SECRET_CONFIG.gsUrl).trim();
    }
    const params = new URLSearchParams(window.location.search);
    const fromParam = params.get('gs');
    if (fromParam && fromParam.startsWith('http')) {
      localStorage.setItem(GS_URL_STORAGE_KEY, fromParam.trim());
      return fromParam.trim();
    }
    const stored = (localStorage.getItem(GS_URL_STORAGE_KEY) || '').trim();
    return stored && stored.startsWith('http') ? stored : DEFAULT_GS_URL;
  } catch {
    return DEFAULT_GS_URL;
  }
}

function getConfiguredGsToken() {
  try {
    if (window.CERVEAU_SECRET_CONFIG && window.CERVEAU_SECRET_CONFIG.token) {
      return String(window.CERVEAU_SECRET_CONFIG.token).trim();
    }
  } catch {
    // ignore
  }
  return DEFAULT_GS_TOKEN;
}

function saveCopyLocally(rowObj) {
  try {
    const list = JSON.parse(localStorage.getItem(LOCAL_COPIES_KEY) || '[]');
    const idx = list.findIndex((r) =>
      String(r.Classe || '').trim().toLowerCase() === String(rowObj.Classe || '').trim().toLowerCase() &&
      String(r.Eleve || '').trim().toLowerCase() === String(rowObj.Eleve || '').trim().toLowerCase() &&
      String(r.Sujet || '').trim().toUpperCase() === String(rowObj.Sujet || '').trim().toUpperCase() &&
      String(r.Modalite || '').trim() === String(rowObj.Modalite || '').trim()
    );
    if (idx >= 0) {
      // Conserver Tentative_1 d'origine si Tentative_2 vient d'être ajoutée
      if (rowObj.Tentative_2 && list[idx].Tentative_1) {
        rowObj.Tentative_1 = list[idx].Tentative_1;
      }
      list[idx] = { ...list[idx], ...rowObj };
    } else {
      list.push(rowObj);
    }
    localStorage.setItem(LOCAL_COPIES_KEY, JSON.stringify(list));
  } catch {
    // ignore
  }
}

async function fetchWithTimeout(url, options, timeoutMs = 12000) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: ctrl.signal });
  } finally {
    clearTimeout(id);
  }
}

async function sendRowToGoogleSheet(gsUrl, rowObj, idEnvoi) {
  if (!gsUrl || !gsUrl.startsWith('http')) {
    return { status: 'no_url', message: 'URL Google Sheet non configurée (copie enregistrée localement pour le Dashboard).' };
  }
  const bodyStr = JSON.stringify({
    action: 'append',
    token: getConfiguredGsToken(),
    idEnvoi,
    ...rowObj
  });

  // 1) Tentative standard (text/plain évite le preflight CORS sur Apps Script)
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const resp = await fetchWithTimeout(gsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: bodyStr
      }, 12000);
      if (resp.ok) {
        const text = await resp.text();
        try {
          const json = JSON.parse(text);
          if (json && json.ok) {
            return { status: 'sent', message: 'Copie bien reçue dans le Google Sheet du professeur ✅' };
          }
        } catch {
          return { status: 'sent', message: 'Copie transmise au Google Sheet du professeur ✅' };
        }
      }
    } catch {
      // retry or fallback to no-cors
    }
  }

  // 2) Repli no-cors (utile en fichier local file:// ou restriction réseau)
  try {
    await fetchWithTimeout(gsUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: bodyStr
    }, 10000);
    return { status: 'sent_nocors', message: 'Copie transmise au Google Sheet du professeur ✅' };
  } catch {
    // 3) File d'attente hors-ligne
    try {
      const q = JSON.parse(localStorage.getItem(PENDING_QUEUE_KEY) || '[]');
      q.push({ idEnvoi, gsUrl, rowObj });
      localStorage.setItem(PENDING_QUEUE_KEY, JSON.stringify(q));
    } catch {
      // ignore
    }
    return { status: 'queued', message: 'Hors-ligne : copie sauvegardée localement, prête à être synchronisée.' };
  }
}

function esc(s) {
  return String(s ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function decryptLocked(b64, code) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  const key = new TextEncoder().encode(code);
  const out = new Uint8Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) out[i] = bytes[i] ^ key[i % key.length];
  return JSON.parse(new TextDecoder().decode(out));
}

function loadStore(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || '{}');
  } catch {
    return {};
  }
}

function saveStore(key, obj) {
  try {
    localStorage.setItem(key, JSON.stringify(obj));
  } catch {
    // Contexte restreint sans stockage local
  }
}

function boot() {
  const actId = window.MINI_ACT_ID || 'A1';
  const act = PUBLIC_ACTS[actId];
  const meta = MINI_META[actId];
  const lockedB64 = LOCKED_B64[actId];
  if (!act || !meta) {
    document.body.innerHTML = '<p style="padding:24px">Activité introuvable.</p>';
    return;
  }

  const storeKey = `cerveau_mini_${actId}_v1`;
  const saved = loadStore(storeKey);
  const profile = loadStore(PROFILE_KEY);
  getConfiguredGsUrl(); // Enregistre ?gs= si fourni dans l'URL
  const rawSavedClass = String(profile.classe || '').trim();
  const normalizedSavedClass = /^4e[A-E]$/i.test(rawSavedClass) ? '4eme1' : (rawSavedClass || '4eme1');
  const state = {
    tab: 'pb',
    voie: saved.voie === 'voie1' ? 'voie1' : 'voie2',
    answers: saved.answers || {},
    checks: saved.checks || {},
    submissions: saved.submissions || {}, // { voie2: { t1Text, t1Eval, lastEval }, ... }
    eleve: profile.eleve || '',
    classe: normalizedSavedClass,
    theme: saved.theme === 'dark' ? 'dark' : 'light',
    presetIdx: 0,
    unlockedData: null, // Toujours verrouillé au chargement
    sideIsRight: false,
  };

  document.documentElement.setAttribute('data-theme', state.theme);

  function persist() {
    saveStore(storeKey, {
      voie: state.voie,
      answers: state.answers,
      checks: state.checks,
      submissions: state.submissions,
      theme: state.theme,
    });
    saveStore(PROFILE_KEY, {
      eleve: state.eleve,
      classe: state.classe,
    });
  }

  // Construction du squelette 4 onglets
  const app = document.getElementById('app');
  app.innerHTML = `
    <header class="mini-header">
      <div class="mh-id">
        <span class="mh-code">${esc(act.code)}</span>
        <span class="mh-lvl">${esc(act.niveau)}</span>
        <div class="mh-titles">
          <h1>${esc(act.titre)}</h1>
          <small>${esc(act.semaine)} · ${esc(act.duree)} · ${esc(act.type)}</small>
        </div>
      </div>
      <nav class="mini-tabs" role="tablist" aria-label="Navigation de l'activité">
        <button type="button" class="mtab active" data-tab="pb" role="tab" aria-selected="true">1. Problématique</button>
        <button type="button" class="mtab" data-tab="act" role="tab" aria-selected="false">2. Activité &amp; Graphiques</button>
        <button type="button" class="mtab" data-tab="3d" role="tab" aria-selected="false">3. Modèle 3D</button>
        <button type="button" class="mtab" data-tab="corr" role="tab" aria-selected="false" id="tabCorrBtn">🔒 4. Correction</button>
      </nav>
      <div class="mh-actions">
        <button type="button" class="icon-btn" id="btnTheme" title="Changer le thème clair / sombre">${state.theme === 'dark' ? '☀️ Clair' : '🌙 Sombre'}</button>
        <button type="button" class="icon-btn" id="btnPrint" title="Imprimer ou exporter ma fiche en PDF">🖨️ Fiche élève</button>
        <a class="icon-btn" href="./index.html" title="Retour à toutes les activités">Toutes les activités</a>
      </div>
    </header>

    <main class="mini-main">
      <!-- ONGLET 1 : PROBLÉMATIQUE -->
      <section class="panel active" id="panel-pb"></section>

      <!-- ONGLET 2 : ACTIVITÉ & GRAPHIQUES -->
      <section class="panel" id="panel-act"></section>

      <!-- ONGLET 3 : MODÈLE 3D SIMPLIFIÉ -->
      <section class="panel" id="panel-3d"></section>

      <!-- ONGLET 4 : CORRECTION VERROUILLÉE (CODE 2027) -->
      <section class="panel" id="panel-corr"></section>
    </main>

    <div class="hover-tip" id="hoverTip" hidden></div>
    <div id="printSheet" aria-hidden="true"></div>
  `;

  // ---------------- 1. ONGLET PROBLÉMATIQUE ----------------
  function renderProblematique() {
    const el = document.getElementById('panel-pb');
    el.innerHTML = `
      <div class="prob-hero">
        <div class="prob-media">
          <img src="${esc(meta.triggerImg)}" alt="${esc(meta.triggerAlt)}" loading="eager">
          <div class="prob-caption">${esc(meta.triggerCaption)}</div>
        </div>
        <div class="prob-body">
          <div>
            <span class="kicker">Situation déclenchante · ${esc(act.niveau)}</span>
            <p class="accroche-txt" style="margin-top:8px">${esc(act.accroche)}</p>
          </div>

          <div class="pb-callout">
            <small>Problématique scientifique</small>
            <p>${esc(act.problematique)}</p>
          </div>

          <div class="prob-cta">
            <button type="button" class="btn-ghost" id="btnGo3dFromPb">Aperçu 3D rapide</button>
            <button type="button" class="btn-primary" id="btnStartAct">Démarrer l'activité →</button>
          </div>
        </div>
      </div>

      <div class="fold-stack">
        <details class="fold-panel">
          <summary>💡 Idée reçue &amp; piste de recherche</summary>
          <div class="fold-body">
            <div class="ruse-grid">
              <div class="ruse-card myth">
                <strong>Idée reçue fréquente</strong>
                ${esc(act.obstacle)}
              </div>
              <div class="ruse-card fact">
                <strong>Piste d'investigation</strong>
                ${esc(act.rupture)}
              </div>
            </div>
            <p class="source-tag" style="margin-top:8px"><strong>Sources :</strong> ${esc(act.sourceAccroche)}</p>
          </div>
        </details>

        <details class="fold-panel">
          <summary>📖 Vocabulaire utile (${act.vocab.length} mots-clés)</summary>
          <div class="fold-body">
            <div class="vocab-grid">
              ${act.vocab.map(v => `
                <div class="vocab-card">
                  <strong>${esc(v.term)}</strong>
                  <span>${esc(v.def)}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </details>
      </div>
    `;

    el.querySelector('#btnStartAct').addEventListener('click', () => switchTab('act'));
    el.querySelector('#btnGo3dFromPb').addEventListener('click', () => switchTab('3d'));
  }

  // ---------------- 2. ONGLET ACTIVITÉ & GRAPHIQUES ----------------
  function renderActivite() {
    const el = document.getElementById('panel-act');
    const docsHtml = act.docs.map((d) => {
      let extra = '';
      if (d.table) {
        extra = `
          <table class="data-table">
            <thead><tr>${d.table.headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>
            <tbody>${d.table.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>
        `;
      }
      const btn3d = d.type === '3d'
        ? `<button type="button" class="btn-ghost go-3d-doc" style="margin-top:8px">Ouvrir l'onglet Modèle 3D →</button>`
        : '';
      return `
        <details class="doc-fold">
          <summary>
            <span class="doc-num">${esc(d.num)}</span>
            <strong>${esc(d.title)}</strong>
            <button type="button" class="btn-doc-fs btn-doc-fs-sm" data-fs-fold title="Afficher ce document en plein écran">⛶ Plein écran</button>
          </summary>
          <div class="doc-fold-body">
            <p class="doc-src">Source : ${esc(d.source)}</p>
            <p class="doc-txt">${esc(d.text)}</p>
            ${extra}
            ${d.legend ? `<p class="doc-legend">${esc(d.legend)}</p>` : ''}
            ${btn3d}
          </div>
        </details>
      `;
    }).join('');

    el.innerHTML = `
      <div class="act-layout">
        <div class="act-docs">
          <div class="docs-fs-bar">
            <span class="docs-fs-hint">🔍 Clique sur une image ou sur <strong>⛶ Plein écran</strong> pour agrandir un document</span>
            <button type="button" class="btn-doc-fs" id="btnAllDocsFs" title="Afficher tous les documents en plein écran">⛶ Documents en plein écran</button>
          </div>
          <div id="visualsMount"></div>
          <details class="fold-panel docs-drawer">
            <summary>📄 Textes et tableau récapitulatif des documents 1 à 3 (cliquer pour dérouler)</summary>
            <div class="docs-drawer-body">
              ${docsHtml}
            </div>
          </details>
        </div>

        <aside class="act-work">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap">
            <strong style="font-size:15px">Ton espace de réponse</strong>
            <span class="save-badge" id="saveStatus">Enregistré automatiquement</span>
          </div>

          <div class="student-id-bar">
            <div class="sid-field">
              <label for="studentNameInput">Nom &amp; Prénom</label>
              <input type="text" id="studentNameInput" placeholder="Ex : Léna Martin" value="${esc(state.eleve)}" autocomplete="name">
            </div>
            <div class="sid-field sid-class">
              <label for="studentClassSelect">Classe</label>
              <select id="studentClassSelect">
                ${['4eme1', '4eme2', '4eme3', '4eme4', '4eme5', '4eme6', '4eme7', 'Autre'].map(c =>
                  `<option value="${esc(c)}" ${state.classe === c ? 'selected' : ''}>${esc(c)}</option>`
                ).join('')}
              </select>
            </div>
          </div>

          <div class="voie-switch" role="group" aria-label="Choix du parcours">
            <button type="button" class="voie-btn ${state.voie === 'voie2' ? 'on' : ''}" data-voie="voie2">Parcours guidé (Q1 → Q3)</button>
            <button type="button" class="voie-btn ${state.voie === 'voie1' ? 'on' : ''}" data-voie="voie1">Tâche complexe (Synthèse)</button>
          </div>

          <div id="fieldsHost"></div>

          <div class="live-writing-bar" id="liveWritingBar" aria-live="polite">
            <span id="lwWords">0 mot</span>
            <span id="lwSentences">0 phrase complète</span>
            <span id="lwConns">0 connecteur logique</span>
          </div>

          <details class="fold-panel">
            <summary>💡 Coups de pouce (si tu es bloqué)</summary>
            <div class="fold-body">
              <div class="hints-box">
                ${act.coupsDePouce.map(c => `
                  <details>
                    <summary>${esc(c.niv)}</summary>
                    <p>${esc(c.txt)}</p>
                  </details>
                `).join('')}
              </div>
            </div>
          </details>

          <details class="fold-panel">
            <summary>✍️ Aide à la rédaction &amp; auto-vérification</summary>
            <div class="fold-body" style="display:flex;flex-direction:column;gap:10px">
              <div class="mdl-box">
                <strong>Coup d'œil rédaction (${esc(act.mdl.verbeAction)}) :</strong> ${esc(act.mdl.structure)}
                <div class="mdl-chips">
                  ${act.mdl.marqueurs.map(m => `<span>${esc(m)}</span>`).join('')}
                </div>
              </div>
              <div>
                <strong style="display:block;font-size:12px;margin-bottom:4px">Avant de passer à la correction :</strong>
                <ul class="check-list">
                  ${act.avantDeRendre.map((chk, idx) => `
                    <li>
                      <label style="display:flex;gap:7px;align-items:flex-start;cursor:pointer">
                        <input type="checkbox" class="chk-ready" data-chk="${idx}" ${state.checks[idx] ? 'checked' : ''}>
                        <span>${esc(chk)}</span>
                      </label>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
          </details>

          <div class="work-actions">
            <button type="button" class="btn-ghost" id="btnGo3dAct">Explorer en 3D →</button>
            <div class="work-actions-right">
              <button type="button" class="btn-send-prof" id="btnSendProf">📤 Envoyer au professeur</button>
              <button type="button" class="btn-primary" id="btnGoCorrAct">Aller à la Correction 🔒</button>
            </div>
          </div>

          <div id="studentEvalBox" class="student-eval-box" style="display:none"></div>
        </aside>
      </div>
    `;

    // Montage des graphiques / simulateurs dédiés
    mountActivityVisuals(actId, el.querySelector('#visualsMount'), (targetZone) => {
      switchTab('3d');
      if (meta.isVisionModel && applyPresetFn) {
        const idxMap = { v4: 3, v3: 4, v1: 5, v2: 5, v5: 6, integration: 7 };
        const idx = idxMap[targetZone] ?? 0;
        applyPresetFn(idx);
        if (targetZone === 'v2') {
          brain?.isolate('v2');
        }
      }
    });

    setupDocsFullscreen(el);

    function getCombinedAnswerText() {
      const v = act[state.voie];
      return v.fields
        .map((f) => {
          const domTa = el.querySelector(`#${CSS.escape(f.id)}`);
          const val = domTa ? domTa.value : (state.answers[f.id] || '');
          return String(val || '').trim();
        })
        .filter(Boolean)
        .join('\n\n');
    }

    function updateLiveIndicators() {
      const txt = getCombinedAnswerText();
      const lg = evaluateLanguage(txt);
      const wEl = el.querySelector('#lwWords');
      const sEl = el.querySelector('#lwSentences');
      const cEl = el.querySelector('#lwConns');
      if (wEl) {
        wEl.textContent = `${lg.wordCount} mot${lg.wordCount > 1 ? 's' : ''}`;
        wEl.classList.toggle('ok', lg.wordCount >= 20);
      }
      if (sEl) {
        sEl.textContent = `${lg.sentenceCount} phrase${lg.sentenceCount > 1 ? 's' : ''} complète${lg.sentenceCount > 1 ? 's' : ''}`;
        sEl.classList.toggle('ok', lg.hasTwoDistinctSentences);
      }
      if (cEl) {
        cEl.textContent = `${lg.connectorsFound.length} connecteur${lg.connectorsFound.length > 1 ? 's' : ''}`;
        cEl.classList.toggle('ok', lg.connectorsFound.length >= 2);
      }
    }

    function renderStudentEvalPanel(evalObj, submittedText, sendStatusObj, attemptNum = 1, deltaVsT1 = 0) {
      const box = el.querySelector('#studentEvalBox');
      if (!box) return;
      box.style.display = 'block';

      const scoreCls = evalObj.total >= 3.5 ? 'high' : (evalObj.total >= 2 ? 'mid' : 'low');
      const pct = Math.min(100, Math.round((evalObj.total / 5) * 100));

      const statusBadge = sendStatusObj
        ? `<div class="se-send-status ${esc(sendStatusObj.status)}">${esc(sendStatusObj.message)}</div>`
        : '';

      const deltaBadge = attemptNum >= 2
        ? (deltaVsT1 > 0
            ? `<span class="se-delta pos">+${deltaVsT1.toFixed(2).replace(/\.?0+$/, '')} pt vs 1er envoi 🎉</span>`
            : `<span class="se-delta">${deltaVsT1 === 0 ? 'Tentative 2 enregistrée' : `${deltaVsT1.toFixed(2)} pt`}</span>`)
        : '';

      const critRows = evalObj.criteria.map((c, idx) => {
        const cls = c.score >= 1 ? 'ok' : (c.score >= 0.5 ? 'mid' : 'miss');
        const label = c.score >= 1 ? 'Acquis (1/1)' : (c.score >= 0.5 ? 'Partiel (0,5/1)' : 'À compléter (0/1)');
        const tags = c.matched && c.matched.length
          ? `<div class="se-tags">${c.matched.map(m => `<span>${esc(m)}</span>`).join('')}</div>`
          : '';
        return `
          <div class="se-crit-item ${cls}">
            <div class="se-crit-top">
              <span><strong>C${idx + 1}. ${esc(c.titre)}</strong> <small>(${esc(c.competence)})</small></span>
              <span class="se-crit-badge ${cls}">${label}</span>
            </div>
            ${tags}
          </div>
        `;
      }).join('');

      const ld = evalObj.langDetail;
      const langCls = evalObj.langue >= 0.75 ? 'ok' : (evalObj.langue >= 0.5 ? 'mid' : 'miss');

      const errorsHtml = evalObj.erreursDetectees.length > 0
        ? `
          <div class="se-errors">
            <strong>⚠️ Mes erreurs ou oublis détectés :</strong>
            <ul>
              ${evalObj.erreursDetectees.map(err => `<li>${esc(err)}</li>`).join('')}
            </ul>
          </div>
        `
        : `
          <div class="se-success-msg">
            <strong>✅ Aucune erreur ni oubli majeur détecté !</strong> Ta réponse mobilise l'ensemble des critères attendus.
          </div>
        `;

      const conseilsHtml = evalObj.conseilsProgression.length > 0
        ? `
          <div class="se-advice">
            <strong>🚀 Comment progresser pour améliorer mon score :</strong>
            <ul>
              ${evalObj.conseilsProgression.map(item => `<li><strong>${esc(item.critere)} :</strong> ${esc(item.conseil)}</li>`).join('')}
            </ul>
          </div>
        `
        : '';

      const highlightedCopy = highlightStudentTextHTML(submittedText, actId);

      box.innerHTML = `
        <div class="se-head">
          <div>
            <span class="se-kicker">Bilan immédiat · Tentative ${attemptNum}</span>
            <h4>Analyse de ta réponse</h4>
          </div>
          <div class="se-score-wrap">
            <div class="se-score-pill ${scoreCls}">
              <strong>${evalObj.total.toFixed(2).replace(/\.?0+$/, '')}</strong><span>/ 5</span>
            </div>
            <small>${esc(evalObj.niveauMaitrise)} (${evalObj.total20}/20)</small>
            ${deltaBadge}
          </div>
        </div>

        <div class="se-progress-track" aria-hidden="true">
          <div class="se-progress-fill ${scoreCls}" style="width:${pct}%"></div>
        </div>

        ${statusBadge}

        <div class="se-crit-list">
          ${critRows}
          <div class="se-crit-item ${langCls}">
            <div class="se-crit-top">
              <span><strong>Maîtrise de la langue</strong> <small>(D1.3 · Connecteurs + Phrases complètes)</small></span>
              <span class="se-crit-badge ${langCls}">${evalObj.langue.toFixed(2).replace(/\.?0+$/, '')} / 1</span>
            </div>
            <div class="se-lang-sub">
              <span>🔗 Connecteurs logiques : <strong>${ld.l1Score}/0.5</strong> (${ld.connectorsFound.length ? ld.connectorsFound.map(c => esc(c)).join(', ') : 'aucun'})</span>
              <span>✍️ Phrases complètes (${ld.sentenceCount}) &amp; longueur (${ld.wordCount} mots) : <strong>${ld.l2Score}/0.5</strong></span>
            </div>
          </div>
        </div>

        ${errorsHtml}
        ${conseilsHtml}

        <details class="se-copy-details">
          <summary>🔍 Voir ma réponse analysée (mots scientifiques et connecteurs repérés)</summary>
          <div class="se-copy-legend">
            <span class="leg-sci">Notions scientifiques repérées</span>
            <span class="leg-conn">Connecteurs logiques</span>
          </div>
          <div class="se-highlighted-copy">${highlightedCopy}</div>
        </details>

        <div class="se-footer-actions">
          <button type="button" class="btn-ghost" id="btnImproveReply" style="font-size:12.5px">✏️ Améliorer ma réponse et renvoyer au professeur</button>
          <button type="button" class="se-reset-sub" id="btnResetAttempt" title="Effacer l'historique d'envoi local pour tester avec un autre élève">Nouvel élève ↺</button>
        </div>
      `;

      box.querySelector('#btnImproveReply')?.addEventListener('click', () => {
        const firstTa = el.querySelector('#fieldsHost textarea');
        if (firstTa) {
          firstTa.focus();
          firstTa.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });

      box.querySelector('#btnResetAttempt')?.addEventListener('click', () => {
        delete state.submissions[state.voie];
        persist();
        box.style.display = 'none';
        box.innerHTML = '';
      });
    }

    function restoreSubmissionView() {
      const box = el.querySelector('#studentEvalBox');
      const sub = state.submissions[state.voie];
      if (!box || !sub || !sub.lastEval) {
        if (box) {
          box.style.display = 'none';
          box.innerHTML = '';
        }
        return;
      }
      const isT2 = Boolean(sub.t2Text);
      const delta = isT2 && sub.t1Eval
        ? Math.round((sub.lastEval.total - sub.t1Eval.total) * 100) / 100
        : 0;
      renderStudentEvalPanel(
        sub.lastEval,
        sub.t2Text || sub.t1Text,
        { status: 'sent', message: 'Dernier envoi enregistré localement ✅' },
        isT2 ? 2 : 1,
        delta
      );
    }

    function renderFields() {
      const host = el.querySelector('#fieldsHost');
      const v = act[state.voie];
      host.innerHTML = `
        <p style="margin:0 0 8px;font-size:12.5px;color:var(--fg-2)">${esc(v.consigne)}</p>
        ${v.fields.map(f => `
          <div class="q-field" style="margin-bottom:9px">
            <label for="${esc(f.id)}">${esc(f.label)}</label>
            <textarea id="${esc(f.id)}" rows="${f.rows || 3}" placeholder="Écris ta réponse ici...">${esc(state.answers[f.id] || '')}</textarea>
          </div>
        `).join('')}
      `;

      host.querySelectorAll('textarea').forEach((ta) => {
        ta.addEventListener('input', () => {
          state.answers[ta.id] = ta.value;
          persist();
          const st = el.querySelector('#saveStatus');
          st.textContent = 'Sauvegardé · ' + new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
          updateLiveIndicators();
        });
      });

      updateLiveIndicators();
    }

    renderFields();
    restoreSubmissionView();

    // Identité élève & configuration Google Sheets
    const nameInput = el.querySelector('#studentNameInput');
    const classSelect = el.querySelector('#studentClassSelect');
    nameInput?.addEventListener('input', () => {
      state.eleve = nameInput.value;
      persist();
    });
    classSelect?.addEventListener('change', () => {
      state.classe = classSelect.value;
      persist();
    });

    el.querySelectorAll('[data-voie]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.voie = btn.dataset.voie;
        persist();
        el.querySelectorAll('[data-voie]').forEach(b => b.classList.toggle('on', b === btn));
        renderFields();
        restoreSubmissionView();
      });
    });

    el.querySelectorAll('.chk-ready').forEach((cb) => {
      cb.addEventListener('change', () => {
        state.checks[cb.dataset.chk] = cb.checked;
        persist();
      });
    });

    el.querySelector('#btnSendProf')?.addEventListener('click', async () => {
      const studentName = (el.querySelector('#studentNameInput')?.value || state.eleve || '').trim();
      const studentClass = (el.querySelector('#studentClassSelect')?.value || state.classe || '4eme1').trim();
      const combinedText = getCombinedAnswerText();
      const box = el.querySelector('#studentEvalBox');

      if (!studentName) {
        box.style.display = 'block';
        box.innerHTML = `<div class="se-errors"><strong>⚠️ Indique d'abord ton Nom et Prénom</strong> dans le champ en haut de l'espace de réponse avant d'envoyer ta copie au professeur.</div>`;
        el.querySelector('#studentNameInput')?.focus();
        return;
      }

      if (countWords(combinedText) < 5) {
        box.style.display = 'block';
        box.innerHTML = `<div class="se-errors"><strong>⚠️ Réponse trop courte pour être évaluée :</strong> rédige d'abord au moins une phrase complète dans ton espace de réponse.</div>`;
        el.querySelector('#fieldsHost textarea')?.focus();
        return;
      }

      state.eleve = studentName;
      state.classe = studentClass;

      const btn = el.querySelector('#btnSendProf');
      if (btn) {
        btn.disabled = true;
        btn.textContent = '⏳ Analyse & envoi...';
      }

      const modalite = state.voie === 'voie1' ? 'TACHE_COMPLEXE' : 'VOIE_GUIDEE';
      const evalObj = evaluateActivityResponse(combinedText, actId, modalite);

      const prevSub = state.submissions[state.voie];
      let attemptNum = 1;
      let deltaVsT1 = 0;
      let t1Text = combinedText;
      let t2Text = '';
      let relance = evalObj.relanceTexte;

      if (prevSub && prevSub.t1Text && prevSub.t1Text !== combinedText) {
        attemptNum = 2;
        t1Text = prevSub.t1Text;
        t2Text = combinedText;
        relance = prevSub.t1Eval ? prevSub.t1Eval.relanceTexte : evalObj.relanceTexte;
        deltaVsT1 = Math.round((evalObj.total - (prevSub.t1Eval?.total ?? 0)) * 100) / 100;
        state.submissions[state.voie] = {
          t1Text,
          t1Eval: prevSub.t1Eval,
          t2Text,
          lastEval: evalObj
        };
      } else {
        state.submissions[state.voie] = {
          t1Text: combinedText,
          t1Eval: evalObj,
          t2Text: '',
          lastEval: evalObj
        };
      }
      persist();

      const rowObj = buildSheetRowPayload({
        eleve: studentName,
        classe: studentClass,
        actId,
        modalite,
        tentative1Text: t1Text,
        tentative2Text: t2Text,
        evalObj
      });
      rowObj.Relance_Systeme = relance;

      saveCopyLocally(rowObj);
      const gsUrl = getConfiguredGsUrl();
      const idEnvoi = `${actId}_${studentClass}_${studentName}_${Date.now()}`;
      const sendRes = await sendRowToGoogleSheet(gsUrl, rowObj, idEnvoi);

      renderStudentEvalPanel(evalObj, combinedText, sendRes, attemptNum, deltaVsT1);

      if (btn) {
        btn.disabled = false;
        btn.textContent = attemptNum >= 2 ? '📤 Renvoyer au professeur' : '📤 Envoyer au professeur';
      }
    });

    el.querySelectorAll('.go-3d-doc').forEach(b => b.addEventListener('click', () => switchTab('3d')));
    el.querySelector('#btnGo3dAct').addEventListener('click', () => switchTab('3d'));
    el.querySelector('#btnGoCorrAct').addEventListener('click', () => switchTab('corr'));
  }

  // ---------------- 3. ONGLET MODÈLE 3D SIMPLIFIÉ ----------------
  let brain = null;
  let mri2d = null;
  let stageBuilt = false;
  let resizeObs = null;
  let applyPresetFn = null;

  function build3dShell() {
    if (stageBuilt) return;
    stageBuilt = true;
    const el = document.getElementById('panel-3d');
    el.innerHTML = `
      <div class="view3d-layout">
        <aside class="v3d-side">
          <div>
            <h2>Zones utiles pour ${esc(act.code)}</h2>
            <p style="margin:3px 0 0;font-size:12px;color:var(--fg-3)">${meta.isVisionModel ? 'Seules les aires visuelles V1 à V5 sont colorées : clique sur une zone pour voir son rôle et sa lésion.' : "Interface simplifiée : sélectionne une étape pour l'observer en 3D."}</p>
          </div>

          <div class="preset-list" id="presetList">
            ${meta.presets3d.map((p, idx) => `
              <button type="button" class="preset-btn ${idx === 0 ? 'on' : ''}" data-pidx="${idx}">
                <strong>${esc(p.label)}</strong>
                <small>${esc(p.subtitle)}</small>
              </button>
            `).join('')}
          </div>

          <div class="focus-card" id="focusCard"></div>

          <div>
            <strong style="display:block;font-size:11.5px;color:var(--fg-3);margin-bottom:5px">Contrôles rapides de la caméra</strong>
            <div class="cam-strip">
              <button type="button" class="pill" id="camSide">Gauche / Droite</button>
              <button type="button" class="pill" id="camTop">Dessus</button>
              <button type="button" class="pill" id="camDeep">Transparent</button>
              <button type="button" class="pill" id="camReset">Recentrer</button>
              <button type="button" class="pill" id="camShot">📷 Capture</button>
            </div>
          </div>
        </aside>

        <div class="v3d-stage" id="v3dStage">
          <canvas id="stageCanvas" aria-label="Modèle 3D interactif du cerveau centré sur l'activité ${esc(act.code)}"></canvas>
          ${meta.isVisionModel ? '<div class="vision-labels" id="visionLabels"></div>' : ''}
          <div class="stage-tip">
            <span class="stage-pill">Cliquer-glisser : tourner · Molette : zoomer</span>
            <span class="stage-pill" id="clickFeedback">Survole ou clique une région colorée</span>
          </div>
        </div>
      </div>
      ${meta.needsMri ? '<div class="mri-wrap" id="mriDock" hidden></div>' : ''}
    `;

    const canvas = el.querySelector('#stageCanvas');
    const hoverTip = document.getElementById('hoverTip');
    const clickFb = el.querySelector('#clickFeedback');
    const mriDock = el.querySelector('#mriDock');
    const deepBtn = el.querySelector('#camDeep');
    const labelsLayer = el.querySelector('#visionLabels');

    const rawBrainData = decodeBrain();
    const brainData = meta.isVisionModel ? repartitionBrainForVision(rawBrainData) : rawBrainData;
    const mriData = (meta.needsMri && window.MRI_DATA) ? decodeMri() : null;

    // Création des badges flottants interactifs sur le cerveau 3D (V1..V5 + Lésions A & B)
    const visionLabelNodes = [];
    function initVisionLabels() {
      if (!labelsLayer || !brain?.visionAnchors) return;
      const defs = [
        { key: 'v1', text: 'V1', color: '#f5d11d', dark: true, anchor: 'v1' },
        { key: 'v2', text: 'V2', color: '#f59e42', dark: true, anchor: 'v2' },
        { key: 'v3', text: 'V3 · Formes', color: '#3898d4', dark: false, anchor: 'v3' },
        { key: 'v4', text: 'V4 · Couleurs', color: '#8cc63f', dark: true, anchor: 'v4' },
        { key: 'v5', text: 'V5 · Mouvement', color: '#e04636', dark: false, anchor: 'v5' },
        { key: 'v4', text: 'Lésion Patient A', color: '#e52b20', dark: false, anchor: 'lesionA', lesion: 'A' },
        { key: 'v3', text: 'Lésion Patient B', color: '#e52b20', dark: false, anchor: 'lesionB', lesion: 'B' },
      ];
      for (const d of defs) {
        const pos = brain.visionAnchors[d.anchor];
        if (!pos) continue;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `v3d-tag ${d.lesion ? 'lesion' : ''}`;
        btn.style.setProperty('--tag-col', d.color);
        btn.style.color = d.dark ? '#141c28' : '#ffffff';
        btn.textContent = d.text;
        btn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          brain.isolate(brain.state.isolatedKey === d.key ? null : d.key, {
            key: d.key,
            lesionId: d.lesion || null,
            isLesionMarker: Boolean(d.lesion),
          });
        });
        labelsLayer.appendChild(btn);
        visionLabelNodes.push({ ...d, pos, btn });
      }
    }

    function syncVisionLabels() {
      if (!visionLabelNodes.length || state.tab !== '3d' || !brain) return;
      const showLeftSide = brain.state.hemiMode !== 'onlyR' && brain.camera.position.x <= brain.centerWorld.x + 65;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const lesMode = brain.state.visionLesions;
      const iso = brain.state.isolatedKey;

      for (const item of visionLabelNodes) {
        let visible = showLeftSide;
        if (item.lesion) {
          visible = visible && (lesMode === 'both' || lesMode === item.lesion);
        } else if (brain.state.visionHideAreaColors) {
          visible = false;
        }
        if (!visible) {
          item.btn.hidden = true;
          continue;
        }
        const p = brain.projectMniToScreen(item.pos);
        if (!p.visible || p.x < 24 || p.x > w - 24 || p.y < 18 || p.y > h - 18) {
          item.btn.hidden = true;
          continue;
        }
        item.btn.hidden = false;
        item.btn.classList.toggle('on', iso === item.key);
        item.btn.style.transform = `translate(${Math.round(p.x)}px, ${Math.round(p.y)}px) translate(-50%, -50%)`;
      }
    }

    brain = new BrainScene(canvas, brainData, mriData, {
      onHover(part, cx, cy) {
        if (!part || !STRUCTURES[part.key]) {
          hoverTip.hidden = true;
          return;
        }
        if (meta.isVisionModel && (
          part.key === 'cortex_neutre' || part.key === 'cervelet_neutre' || part.key === 'tronc_neutre'
        )) {
          hoverTip.innerHTML = `<strong>${esc(STRUCTURES[part.key].name)}</strong><small>Hors aires visuelles — clique sur V1 à V5</small>`;
          hoverTip.style.left = `${cx}px`;
          hoverTip.style.top = `${cy}px`;
          hoverTip.hidden = false;
          return;
        }
        const st = STRUCTURES[part.key];
        const title = part.isLesionMarker && part.name ? part.name : st.name;
        const sub = part.isLesionMarker
          ? "Cliquer pour afficher l'image de lésion"
          : (meta.targetKeys.includes(part.key) ? 'Zone clé de cette activité (cliquer)' : 'Autre région du cortex');
        hoverTip.innerHTML = `<strong>${esc(title)}</strong><small>${esc(sub)}</small>`;
        hoverTip.style.left = `${cx}px`;
        hoverTip.style.top = `${cy}px`;
        hoverTip.hidden = false;
      },
      onSelectStructure(key, metaPart) {
        if (!key || !STRUCTURES[key]) {
          clickFb.textContent = 'Survole ou clique une région colorée';
          if (meta.isVisionModel) updateFocusCard(meta.presets3d[state.presetIdx]);
          return;
        }
        if (meta.isVisionModel && (
          key === 'cortex_neutre' || key === 'cervelet_neutre' || key === 'tronc_neutre'
        )) {
          clickFb.textContent = 'Zone hors vision — clique sur une aire colorée V1 à V5';
          updateFocusCard(meta.presets3d[state.presetIdx]);
          return;
        }
        const st = STRUCTURES[key];
        if (meta.targetKeys.includes(key)) {
          clickFb.textContent = metaPart?.lesionId
            ? `Lésion Patient ${metaPart.lesionId} → ${st.name}`
            : `Sélection : ${st.name}`;
          renderFocusCardCustom(st, key);
        } else {
          clickFb.textContent = `Zone cliquée : ${st.name} (hors cible principale de ${act.code})`;
        }
      },
      onStateChange(st) {
        deepBtn.classList.toggle('on', !!st.deep);
        if (mriDock) {
          mriDock.hidden = !st.mriOpen;
          if (st.mriOpen && mri2d) mri2d.update();
        }
        syncVisionLabels();
      },
      onFrame() {
        syncVisionLabels();
      },
    });

    if (meta.isVisionModel) initVisionLabels();

    brain.setTheme(state.theme);
    const rawRender = brain.renderer.render.bind(brain.renderer);
    brain.renderer.render = (scene, cam) => {
      if (state.tab === '3d') rawRender(scene, cam);
    };
    brain.resize();

    if (mriData && mriDock) {
      mri2d = new MriTriplanar(mriDock, mriData, brain);
      mriDock.hidden = true;
    }

    resizeObs = new ResizeObserver(() => brain?.resize());
    resizeObs.observe(el.querySelector('#v3dStage'));

    function updateFocusCard(preset) {
      const fc = el.querySelector('#focusCard');
      const isoKey = preset.action?.isolate;
      const vz = meta.isVisionModel && isoKey ? VISION_ZONES[isoKey] : null;
      fc.innerHTML = `
        <h3>${esc(preset.label.replace(/^\d+\.\s*/, ''))}</h3>
        <p>${esc(preset.role)}</p>
        ${vz ? `
          <div class="v3d-lesion-box">
            <strong>⚠️ ${esc(vz.lesionTitle)}</strong>
            <p>${esc(vz.lesionDesc)}</p>
            <img src="${esc(vz.img)}" alt="${esc(vz.imgCaption)}">
            <small>${esc(vz.imgCaption)}</small>
          </div>
        ` : ''}
        <div class="legend-row">
          ${preset.legend.map(l => `
            <span class="leg-item"><span class="leg-dot" style="background:${esc(l.color)}"></span>${esc(l.name)}</span>
          `).join('')}
        </div>
      `;
    }

    function renderFocusCardCustom(st, key) {
      const fc = el.querySelector('#focusCard');
      const vz = meta.isVisionModel ? VISION_ZONES[key] : null;
      if (vz) {
        fc.innerHTML = `
          <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:4px">
            <h3 style="margin:0">${esc(vz.title)}</h3>
            <button type="button" class="qchip" id="btnV3dShowAll">Tout V1–V5</button>
          </div>
          <p><strong>Rôle :</strong> ${esc(vz.role)}</p>
          <div class="v3d-lesion-box">
            <strong>⚠️ ${esc(vz.lesionTitle)}</strong>
            <p>${esc(vz.lesionDesc)}</p>
            <img src="${esc(vz.img)}" alt="${esc(vz.imgCaption)}">
            <small>${esc(vz.imgCaption)}</small>
          </div>
          <div class="legend-row" style="margin-top:6px">
            <span class="leg-item"><span class="leg-dot" style="background:${esc(vz.color)}"></span>${esc(vz.code)}</span>
          </div>
        `;
        fc.querySelector('#btnV3dShowAll')?.addEventListener('click', () => applyPreset(0));
        return;
      }
      fc.innerHTML = `
        <h3>${esc(st.name)}</h3>
        <p>${esc(st.role || st.desc || 'Structure impliquée dans cette activité.')}</p>
        <div class="legend-row">
          <span class="leg-item"><span class="leg-dot" style="background:${esc(st.color)}"></span>${esc(st.name)}</span>
        </div>
      `;
    }

    function applyPreset(idx) {
      state.presetIdx = idx;
      const p = meta.presets3d[idx];
      el.querySelectorAll('.preset-btn').forEach((b, i) => b.classList.toggle('on', i === idx));

      const actCfg = { ...p.action };
      if (actCfg.hemiToggle) {
        delete actCfg.hemiToggle;
        state.sideIsRight = !state.sideIsRight;
        actCfg.view = state.sideIsRight ? 'lat_R' : 'lat_L';
      }

      brain.applyAction({
        hemiMode: 'both',
        deep: false,
        colorMode: 'regions',
        network: 0,
        isolate: null,
        pathway: null,
        system: null,
        clinical: null,
        lesions: null,
        hideVisualColors: false,
        mri: { open: false, clip: false },
        ...actCfg,
      });
      updateFocusCard(p);
    }
    applyPresetFn = applyPreset;

    el.querySelectorAll('.preset-btn').forEach((btn) => {
      btn.addEventListener('click', () => applyPreset(Number(btn.dataset.pidx)));
    });

    el.querySelector('#camSide').addEventListener('click', () => {
      state.sideIsRight = !state.sideIsRight;
      brain.setView(state.sideIsRight ? 'lat_R' : 'lat_L');
    });
    el.querySelector('#camTop').addEventListener('click', () => brain.setView('sup'));
    deepBtn.addEventListener('click', () => brain.setDeep(!brain.state.deep));
    el.querySelector('#camReset').addEventListener('click', () => applyPreset(state.presetIdx));
    el.querySelector('#camShot').addEventListener('click', () => {
      const a = document.createElement('a');
      a.href = brain.capturePng();
      a.download = `cerveau_${act.code.toLowerCase()}.png`;
      a.click();
    });

    // Appliquer le 1er préréglage dès l'ouverture
    applyPreset(0);
  }

  // ---------------- 4. ONGLET CORRECTION VERROUILLÉ (CODE 2027) ----------------
  function renderCorrection() {
    const el = document.getElementById('panel-corr');
    const tabBtn = document.getElementById('tabCorrBtn');

    if (!state.unlockedData) {
      tabBtn.textContent = '🔒 4. Correction';
      tabBtn.classList.remove('unlocked');
      el.innerHTML = `
        <div class="lock-card" id="lockCard">
          <div class="lock-icon">🔒</div>
          <h2>Correction &amp; Bilan verrouillés</h2>
          <p>Rédige d'abord tes réponses dans l'onglet <strong>2. Activité</strong>, puis saisis le code donné par ton professeur pour afficher la correction détaillée et le bilan à retenir.</p>
          <form class="lock-form" id="unlockForm" autocomplete="off">
            <label for="unlockCodeInput" class="sr-only" style="position:absolute;left:-9999px">Code correction</label>
            <input type="password" inputmode="numeric" maxlength="8" id="unlockCodeInput" placeholder="Code..." aria-label="Code de déverrouillage correction">
            <button type="submit" class="btn-primary">Déverrouiller</button>
          </form>
          <div class="lock-err" id="lockErr" role="alert"></div>
        </div>
      `;

      const form = el.querySelector('#unlockForm');
      const input = el.querySelector('#unlockCodeInput');
      const err = el.querySelector('#lockErr');
      const card = el.querySelector('#lockCard');

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const code = input.value.trim();
        if (code !== UNLOCK_CODE) {
          err.textContent = 'Code incorrect — demande le code au professeur.';
          card.classList.remove('shake');
          void card.offsetWidth;
          card.classList.add('shake');
          input.select();
          return;
        }
        try {
          state.unlockedData = decryptLocked(lockedB64, code);
          renderCorrection();
        } catch {
          err.textContent = 'Erreur de déverrouillage.';
        }
      });
      return;
    }

    // État déverrouillé uniquement après saisie exacte de 2027
    tabBtn.textContent = '🔓 4. Correction';
    tabBtn.classList.add('unlocked');

    const d = state.unlockedData;
    const prof = d.prof;
    const guidedFields = act.voie2.fields;
    const complexField = act.voie1.fields[0];
    const studentSynth = (state.answers[complexField.id] || '').trim();

    el.innerHTML = `
      <div class="corr-wrap">
        <div class="corr-banner">
          <div>
            <strong>🔓 Correction déverrouillée (${esc(act.code)})</strong>
            <span style="display:block;font-size:12.5px;color:var(--fg-2)">Compare chaque réponse attendue avec ton brouillon puis recopie le bilan à retenir.</span>
          </div>
          <button type="button" class="btn-ghost" id="btnRelock">🔒 Verrouiller</button>
        </div>

        <article class="bilan-card">
          <h3>Bilan à retenir (« Je retiens »)</h3>
          <p style="margin:0;font-size:14.5px;line-height:1.58">${esc(d.traceEcrite)}</p>
          <p style="margin:8px 0 0;font-size:12.5px;color:var(--fg-2)"><strong>Esprit scientifique :</strong> ${esc(d.fds)}</p>
          <div class="notions-row">
            ${d.notions.map(n => `<span>${esc(n)}</span>`).join('')}
          </div>
        </article>

        <div>
          <h3 class="sec-title">Questions corrigées (${esc(act.code)})</h3>
          <div class="corr-list">
            ${prof.corrige.map((ans, idx) => {
              const f = guidedFields[idx];
              const mine = f ? (state.answers[f.id] || '').trim() : '';
              return `
                <div class="corr-qcard">
                  <div><strong>${esc(ans.split(':')[0])} :</strong> ${esc(ans.split(':').slice(1).join(':').trim())}</div>
                  ${mine ? `<div class="corr-my"><strong>Ta réponse (${esc(f.id.toUpperCase())}) :</strong> ${esc(mine)}</div>` : ''}
                </div>
              `;
            }).join('')}
            ${studentSynth ? `
              <div class="corr-qcard">
                <strong>Ta synthèse (Tâche complexe) :</strong>
                <div class="corr-my">${esc(studentSynth)}</div>
              </div>
            ` : ''}
          </div>
        </div>

        <div class="corr-grid2">
          <div class="corr-qcard">
            <h4 style="margin:0 0 6px;color:var(--warn)">Erreurs fréquentes à éviter</h4>
            <ul style="margin:0;padding-left:18px;font-size:13px">
              ${prof.erreursFrequentes.map(er => `<li>${esc(er)}</li>`).join('')}
            </ul>
          </div>
          <div class="corr-qcard">
            <h4 style="margin:0 0 6px">Barème &amp; repères de réussite</h4>
            <p style="margin:0 0 6px;font-size:12.5px;font-weight:600">${esc(prof.bareme)}</p>
            <ul style="margin:0;padding-left:18px;font-size:12px;color:var(--fg-2)">
              <li><strong>MI :</strong> ${esc(prof.lsu.MI)}</li>
              <li><strong>MF :</strong> ${esc(prof.lsu.MF)}</li>
              <li><strong>MS :</strong> ${esc(prof.lsu.MS)}</li>
              <li><strong>TBM :</strong> ${esc(prof.lsu.TBM)}</li>
            </ul>
          </div>
        </div>
      </div>
    `;

    el.querySelector('#btnRelock').addEventListener('click', () => {
      state.unlockedData = null;
      renderCorrection();
    });
  }

  // ---------------- GESTION ONGLETS, THÈME ET IMPRESSION ----------------
  function switchTab(nextTab) {
    state.tab = nextTab;
    document.querySelectorAll('.mtab').forEach((btn) => {
      const on = btn.dataset.tab === nextTab;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    document.querySelectorAll('.panel').forEach((p) => {
      p.classList.toggle('active', p.id === `panel-${nextTab}`);
    });
    if (nextTab === '3d') {
      build3dShell();
      requestAnimationFrame(() => brain?.resize());
    }
  }

  document.querySelectorAll('.mtab').forEach((btn) => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  document.getElementById('btnTheme').addEventListener('click', (e) => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    e.currentTarget.textContent = state.theme === 'dark' ? '☀️ Clair' : '🌙 Sombre';
    brain?.setTheme(state.theme);
    persist();
  });

  document.getElementById('btnPrint').addEventListener('click', () => {
    const ps = document.getElementById('printSheet');
    const fields = act[state.voie].fields;
    let corrBlock = '';
    if (state.unlockedData) {
      corrBlock = `
        <div class="ps-pb" style="border-left-color:#1d9a6c;background:#effaf5;margin-top:10pt">
          <strong>Bilan à retenir :</strong> ${esc(state.unlockedData.traceEcrite)}
        </div>
      `;
    }
    ps.innerHTML = `
      <div class="ps-head">
        <span>SVT Cycle 4 · ${esc(act.code)} (${esc(act.niveau)}) · Nom / Prénom : _________________________</span>
        <span>${new Date().toLocaleDateString('fr-FR')}</span>
      </div>
      <h1 class="ps-title">${esc(act.titre)}</h1>
      <div class="ps-pb"><strong>Problématique :</strong> ${esc(act.problematique)}</div>
      ${fields.map(f => `
        <div class="ps-ans">
          <strong>${esc(f.label)}</strong>
          <div>${esc(state.answers[f.id] || '').replaceAll('\n', '<br>') || '<span style="color:#94a3b8">(Réponse manuscrite ou à compléter)</span>'}</div>
        </div>
      `).join('')}
      ${corrBlock}
    `;
    window.print();
  });

  renderProblematique();
  renderActivite();
  renderCorrection();
}

const docFsState = {
  overlaysReady: false,
  activeEl: null,
  lightboxOpen: false,
  zoom: 100
};

function setupDocsFullscreen(rootEl) {
  function syncFsButtons() {
    document.querySelectorAll('[data-fs-card]').forEach((btn) => {
      const card = btn.closest('.doc-card');
      const on = Boolean(card && card.classList.contains('is-fs-active'));
      btn.textContent = on ? '✕ Quitter le plein écran' : '⛶ Plein écran';
    });
    document.querySelectorAll('[data-fs-fold]').forEach((btn) => {
      const fold = btn.closest('.doc-fold');
      const on = Boolean(fold && fold.classList.contains('is-fs-active'));
      btn.textContent = on ? '✕ Quitter' : '⛶ Plein écran';
    });
    const btnAll = document.getElementById('btnAllDocsFs');
    const actDocs = document.querySelector('#panel-act .act-docs');
    if (btnAll && actDocs) {
      const on = actDocs.classList.contains('is-fs-active');
      btnAll.textContent = on ? '✕ Quitter le plein écran' : '⛶ Documents en plein écran';
    }
  }

  function exitElementFs() {
    if (docFsState.activeEl) {
      docFsState.activeEl.classList.remove('is-fs-active');
      docFsState.activeEl = null;
    }
    const bd = document.getElementById('docFsBackdrop');
    const tb = document.getElementById('docFsToolbar');
    if (bd) bd.hidden = true;
    if (tb) tb.hidden = true;
    if (!docFsState.lightboxOpen) {
      document.body.style.overflow = '';
    }
    if (document.fullscreenElement && !docFsState.lightboxOpen) {
      try { document.exitFullscreen().catch(() => {}); } catch {}
    }
    syncFsButtons();
  }

  function openElementFs(targetEl, titleText) {
    if (!targetEl) return;
    if (docFsState.activeEl === targetEl) {
      exitElementFs();
      return;
    }
    if (docFsState.activeEl) {
      docFsState.activeEl.classList.remove('is-fs-active');
    }
    ensureFsOverlays();
    docFsState.activeEl = targetEl;
    targetEl.classList.add('is-fs-active');
    const bd = document.getElementById('docFsBackdrop');
    const tb = document.getElementById('docFsToolbar');
    const titleEl = document.getElementById('docFsTitle');
    if (titleEl) titleEl.textContent = `📄 ${String(titleText || 'Document pédagogique').trim()}`;
    if (bd) bd.hidden = false;
    if (tb) tb.hidden = false;
    document.body.style.overflow = 'hidden';
    syncFsButtons();
  }

  function applyLightboxZoom(nextZoom) {
    docFsState.zoom = Math.max(60, Math.min(250, nextZoom));
    const imgEl = document.getElementById('docImgLightboxTarget');
    const lblEl = document.getElementById('lbZoomPct');
    if (imgEl) {
      imgEl.style.setProperty('--img-zoom', String(docFsState.zoom));
      imgEl.classList.toggle('custom-zoom', docFsState.zoom !== 100);
    }
    if (lblEl) {
      lblEl.textContent = `${docFsState.zoom}%`;
    }
  }

  function closeImgLightbox() {
    const lb = document.getElementById('docImgLightbox');
    if (lb) lb.hidden = true;
    docFsState.lightboxOpen = false;
    if (!docFsState.activeEl) {
      document.body.style.overflow = '';
      if (document.fullscreenElement) {
        try { document.exitFullscreen().catch(() => {}); } catch {}
      }
    }
  }

  function openImgLightbox(imgNode) {
    if (!imgNode || !imgNode.getAttribute('src')) return;
    ensureFsOverlays();
    const lb = document.getElementById('docImgLightbox');
    const target = document.getElementById('docImgLightboxTarget');
    const capEl = document.getElementById('docImgLightboxCap');
    const titleEl = document.getElementById('lbImgTitle');
    const wrap = imgNode.closest('figure, .vzd-media-row, .prob-media');
    const capText = wrap?.querySelector('figcaption, .vzd-cap, .prob-caption')?.textContent?.trim() || imgNode.alt || '';
    if (target) {
      target.src = imgNode.src;
      target.alt = imgNode.alt || 'Document SVT';
    }
    if (capEl) {
      capEl.textContent = capText;
      capEl.style.display = capText ? 'block' : 'none';
    }
    if (titleEl) {
      titleEl.textContent = `🔍 ${imgNode.alt || 'Document en plein écran'}`;
    }
    docFsState.lightboxOpen = true;
    applyLightboxZoom(100);
    if (lb) lb.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function toggleBrowserNativeFs() {
    try {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()?.catch(() => {});
      } else {
        document.exitFullscreen()?.catch(() => {});
      }
    } catch {
      // Ignorer si restreint
    }
  }

  function ensureFsOverlays() {
    if (docFsState.overlaysReady) return;
    docFsState.overlaysReady = true;

    const backdrop = document.createElement('div');
    backdrop.id = 'docFsBackdrop';
    backdrop.hidden = true;

    const toolbar = document.createElement('div');
    toolbar.id = 'docFsToolbar';
    toolbar.hidden = true;
    toolbar.innerHTML = `
      <span id="docFsTitle">📄 Document pédagogique</span>
      <div class="doc-fs-toolbar-actions">
        <button type="button" class="btn-doc-fs" id="btnDocNativeFs">⛶ Plein écran navigateur</button>
        <button type="button" class="btn-doc-fs primary" id="btnDocFsClose">✕ Quitter le plein écran (Échap)</button>
      </div>
    `;

    const lightbox = document.createElement('div');
    lightbox.id = 'docImgLightbox';
    lightbox.hidden = true;
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.innerHTML = `
      <div class="lb-toolbar">
        <span class="lb-title" id="lbImgTitle">🔍 Document en plein écran</span>
        <div class="lb-controls">
          <button type="button" class="btn-doc-fs" id="btnLbZoomOut" title="Zoom arrière">🔍 -</button>
          <button type="button" class="btn-doc-fs" id="btnLbZoomReset" title="Taille d'origine"><span id="lbZoomPct">100%</span></button>
          <button type="button" class="btn-doc-fs" id="btnLbZoomIn" title="Zoom avant">🔍 +</button>
          <button type="button" class="btn-doc-fs" id="btnLbNativeFs" title="Plein écran navigateur">⛶</button>
          <button type="button" class="btn-doc-fs primary" id="btnLbClose">✕ Fermer (Échap)</button>
        </div>
      </div>
      <div class="lb-stage" id="lbStage">
        <img id="docImgLightboxTarget" src="" alt="">
        <div id="docImgLightboxCap"></div>
      </div>
    `;

    document.body.append(backdrop, toolbar, lightbox);

    backdrop.addEventListener('click', exitElementFs);
    toolbar.querySelector('#btnDocFsClose').addEventListener('click', exitElementFs);
    toolbar.querySelector('#btnDocNativeFs').addEventListener('click', toggleBrowserNativeFs);

    lightbox.querySelector('#btnLbClose').addEventListener('click', closeImgLightbox);
    lightbox.querySelector('#btnLbZoomOut').addEventListener('click', () => applyLightboxZoom(docFsState.zoom - 25));
    lightbox.querySelector('#btnLbZoomIn').addEventListener('click', () => applyLightboxZoom(docFsState.zoom + 25));
    lightbox.querySelector('#btnLbZoomReset').addEventListener('click', () => applyLightboxZoom(100));
    lightbox.querySelector('#btnLbNativeFs').addEventListener('click', toggleBrowserNativeFs);
    lightbox.querySelector('#lbStage').addEventListener('click', (ev) => {
      if (ev.target.id === 'lbStage') closeImgLightbox();
    });

    document.addEventListener('keydown', (ev) => {
      if (ev.key !== 'Escape') return;
      if (docFsState.lightboxOpen) {
        closeImgLightbox();
      } else if (docFsState.activeEl) {
        exitElementFs();
      }
    });

    // Clic sur l'image d'accroche de l'onglet Problématique
    document.getElementById('panel-pb')?.addEventListener('click', (ev) => {
      const btn = ev.target.closest('[data-fs-img-btn]');
      if (btn) {
        ev.preventDefault();
        ev.stopPropagation();
        const img = btn.closest('.prob-media')?.querySelector('img');
        if (img) openImgLightbox(img);
        return;
      }
      if (ev.target.tagName === 'IMG' && ev.target.closest('.prob-media')) {
        openImgLightbox(ev.target);
      }
    });
  }

  let isDecorating = false;
  function decorateVisualCards() {
    if (isDecorating) return;
    isDecorating = true;
    try {
      rootEl.querySelectorAll('#visualsMount .doc-card').forEach((card) => {
        if (!card.querySelector('.btn-doc-fs-card')) {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'btn-doc-fs btn-doc-fs-card';
          btn.dataset.fsCard = '1';
          btn.title = 'Afficher ce document / simulateur en plein écran';
          btn.textContent = card.classList.contains('is-fs-active') ? '✕ Quitter le plein écran' : '⛶ Plein écran';
          const head = card.querySelector('.doc-head');
          if (head) head.appendChild(btn);
          else card.prepend(btn);
        }
      });

      document.querySelectorAll('.act-docs .vision-orig-fig, .act-docs .vzd-media-row, #panel-pb .prob-media').forEach((wrap) => {
        if (wrap.querySelector('img') && !wrap.querySelector('.img-zoom-badge')) {
          const badge = document.createElement('button');
          badge.type = 'button';
          badge.className = 'img-zoom-badge';
          badge.dataset.fsImgBtn = '1';
          badge.title = 'Agrandir cette image en plein écran';
          badge.textContent = '🔍 Plein écran';
          wrap.appendChild(badge);
        }
      });
      syncFsButtons();
    } finally {
      isDecorating = false;
    }
  }

  ensureFsOverlays();
  decorateVisualCards();

  const visualsHost = rootEl.querySelector('#visualsMount');
  if (visualsHost && !visualsHost.dataset.fsObserved) {
    visualsHost.dataset.fsObserved = '1';
    const observer = new MutationObserver(() => decorateVisualCards());
    observer.observe(visualsHost, { childList: true, subtree: true });
  }

  rootEl.addEventListener('click', (ev) => {
    const fsCardBtn = ev.target.closest('[data-fs-card]');
    if (fsCardBtn) {
      ev.preventDefault();
      ev.stopPropagation();
      const card = fsCardBtn.closest('.doc-card');
      const title = card?.querySelector('h3')?.textContent || 'Document interactif';
      openElementFs(card, title);
      return;
    }

    const allBtn = ev.target.closest('#btnAllDocsFs');
    if (allBtn) {
      ev.preventDefault();
      ev.stopPropagation();
      openElementFs(rootEl.querySelector('.act-docs'), 'Documents de l’activité');
      return;
    }

    const foldBtn = ev.target.closest('[data-fs-fold]');
    if (foldBtn) {
      ev.preventDefault();
      ev.stopPropagation();
      const fold = foldBtn.closest('.doc-fold');
      if (fold) {
        fold.open = true;
        const title = fold.querySelector('summary strong')?.textContent || 'Document';
        openElementFs(fold, title);
      }
      return;
    }

    const imgBtn = ev.target.closest('[data-fs-img-btn]');
    if (imgBtn) {
      ev.preventDefault();
      ev.stopPropagation();
      const img = imgBtn.closest('figure, .vzd-media-row')?.querySelector('img');
      if (img) openImgLightbox(img);
      return;
    }

    if (ev.target.tagName === 'IMG' && ev.target.closest('.act-docs')) {
      openImgLightbox(ev.target);
    }
  });
}

boot();
