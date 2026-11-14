import * as THREE from 'three';
import {
  INDEX_GROUPS, LEXIQUE, LOBES, NETWORKS, PATHWAYS, STRUCTURES, SYSTEMS,
} from './content.js';
import { CLINICAL_MODELS, EVIDENCE_LEVELS, LIBRARY_ITEMS } from './content_extra.js';
import { ACTIVITIES, PROGRAMME_SPIRALAIRE } from './pedagogie.js';
import {
  mountAuditionDoc, mountRecompenseDoc, mountReflexeDoc, mountSommeilDoc, mountSynapseDoc,
} from './schemas.js';
import { decodeBrain, decodeMicro, decodeMri } from './decoder.js';
import { BrainScene } from './brain3d.js';
import { MICRO_STAGES, MicroScene } from './micro3d.js';
import { MriTriplanar } from './mri2d.js';

const STORAGE_KEY = 'cerveau_plie_svt_v1';

function loadSaved() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveState(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Quota localStorage éventuel si de très nombreuses captures sont stockées
  }
}

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

window.addEventListener('DOMContentLoaded', () => {
  const saved = loadSaved();
  const ui = {
    theme: saved.theme || 'light',
    leftTab: 'regions',       // regions | voies | reseaux | emotions | clinique
    rightTab: 'activites',    // fiche | activites
    actId: saved.actId || 'A1', // PROG | A1..A6 | DNB3
    voie: saved.voie || 1,
    answers: saved.answers || {},
    captures: saved.captures || {}, // { [actId]: [{ img, caption, date }] }
    projMode: false,
    microMode: false,
    drawerLeftOpen: true,
    drawerRightOpen: true,
  };

  document.documentElement.setAttribute('data-theme', ui.theme);

  const canvas = document.getElementById('stageCanvas');
  const microCanvas = document.getElementById('microCanvas');
  const brainData = decodeBrain();
  const mriData = decodeMri();
  let microData = null;

  let mri2d = null;
  let brain = null;
  let micro = null;

  const hoverTip = document.getElementById('hoverTip');
  const orientLayer = document.getElementById('orientLayer');
  const epLayer = document.getElementById('endpointsLayer');
  const microCalloutsLayer = document.getElementById('microCallouts');
  const mriDock = document.getElementById('mriDock');
  const macroToolbar = document.getElementById('macroToolbar');
  const microHudCard = document.getElementById('microHudCard');
  const microToolbar = document.getElementById('microToolbar');

  // Points cardinaux en MNI (mm)
  const ORIENT_PTS = [
    { lbl: 'G', vec: new THREE.Vector3(-88, -14, 6) },
    { lbl: 'D', vec: new THREE.Vector3(88, -14, 6) },
    { lbl: 'A', vec: new THREE.Vector3(0, 88, 6) },
    { lbl: 'P', vec: new THREE.Vector3(0, -118, 6) },
    { lbl: 'S', vec: new THREE.Vector3(0, -14, 94) },
    { lbl: 'I', vec: new THREE.Vector3(0, -14, -74) },
  ];
  const orientEls = ORIENT_PTS.map((o) => {
    const el = document.createElement('div');
    el.className = 'orient-lbl';
    el.textContent = o.lbl;
    orientLayer.appendChild(el);
    return { ...o, el };
  });

  function updateFloatingOverlays() {
    if (!brain) return;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    for (const o of orientEls) {
      const p = brain.projectMniToScreen(o.vec);
      const inside = p.visible && p.x > 16 && p.x < w - 16 && p.y > 16 && p.y < h - 16;
      o.el.style.opacity = inside ? '0.9' : '0';
      if (inside) {
        o.el.style.left = `${p.x}px`;
        o.el.style.top = `${p.y}px`;
      }
    }
    epLayer.innerHTML = '';
    for (const ep of brain.routeEndpoints) {
      const p = brain.projectMniToScreen(ep.posMni);
      if (!p.visible) continue;
      const el = document.createElement('div');
      el.className = 'ep-lbl';
      el.style.left = `${p.x}px`;
      el.style.top = `${p.y}px`;
      el.style.borderColor = ep.color;
      el.textContent = ep.text;
      epLayer.appendChild(el);
    }
  }

  brain = new BrainScene(canvas, brainData, mriData, {
    onHover(part, cx, cy) {
      if (!part || !STRUCTURES[part.key]) {
        hoverTip.hidden = true;
        return;
      }
      const st = STRUCTURES[part.key];
      const side = part.hemi === 'L' ? ' (G)' : (part.hemi === 'R' ? ' (D)' : '');
      hoverTip.innerHTML = `<strong>${esc(st.name)}${side}</strong><small>${esc(st.en)}</small>`;
      hoverTip.style.left = `${cx}px`;
      hoverTip.style.top = `${cy}px`;
      hoverTip.hidden = false;
    },
    onSelectStructure(key) {
      if (key) {
        // Si l'élève explore librement, on affiche la fiche sans perdre l'activité en arrière-plan
        if (ui.rightTab === 'fiche') renderRight();
        else renderSelectionBanner();
      } else {
        renderRight();
      }
      renderLeft();
    },
    onStateChange(st) {
      syncToolbar(st);
      mriDock.hidden = !st.mriOpen;
      if (st.mriOpen && mri2d) mri2d.update();
    },
    onFrame: updateFloatingOverlays,
  });

  brain.setTheme(ui.theme);
  brain.resize();

  mri2d = new MriTriplanar(mriDock, mriData, brain);
  mriDock.hidden = true;

  document.getElementById('loader').hidden = true;

  // ---------------- Barre supérieure & Recherche ----------------
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  const searchItems = [];
  for (const [k, st] of Object.entries(STRUCTURES)) {
    if (!st.hidden) searchItems.push({ kind: 'structure', id: k, label: st.name, sub: st.en });
  }
  for (const [k, pw] of Object.entries(PATHWAYS)) {
    if (pw.hidden) continue;
    searchItems.push({ kind: 'pathway', id: k, label: `Voie : ${pw.name}`, sub: pw.type === 'exc' ? 'Excitateur' : pw.type === 'inh' ? 'Inhibiteur' : 'Neuromodulateur' });
  }
  for (let i = 1; i < NETWORKS.length; i++) {
    searchItems.push({ kind: 'network', id: i, label: NETWORKS[i].name, sub: NETWORKS[i].en });
  }
  for (const [k, sys] of Object.entries(SYSTEMS)) {
    searchItems.push({ kind: 'system', id: k, label: sys.name, sub: `Système émotionnel (${sys.valence})` });
  }

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) { searchResults.hidden = true; return; }
    const hits = searchItems.filter(it =>
      it.label.toLowerCase().includes(q) || it.sub.toLowerCase().includes(q)
    ).slice(0, 12);
    if (!hits.length) {
      searchResults.innerHTML = '<div class="sr-item muted">Aucun résultat…</div>';
      searchResults.hidden = false;
      return;
    }
    searchResults.innerHTML = hits.map((h, idx) =>
      `<button type="button" class="sr-item" data-sidx="${idx}"><span>${esc(h.label)}</span><small>${esc(h.sub)}</small></button>`
    ).join('');
    searchResults.hidden = false;
    searchResults.querySelectorAll('[data-sidx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const hit = hits[Number(btn.dataset.sidx)];
        searchInput.value = '';
        searchResults.hidden = true;
        if (hit.kind === 'structure') {
          if (STRUCTURES[hit.id]?.group === 'profond' || STRUCTURES[hit.id]?.group === 'tronc') {
            brain.setDeep(true);
          }
          brain.isolate(hit.id);
          ui.rightTab = 'fiche';
        } else if (hit.kind === 'pathway') {
          ui.leftTab = 'voies';
          brain.setDeep(true);
          brain.setPathway(hit.id);
          ui.rightTab = 'fiche';
        } else if (hit.kind === 'network') {
          ui.leftTab = 'reseaux';
          brain.setColorMode('networks', hit.id);
          ui.rightTab = 'fiche';
        } else if (hit.kind === 'system') {
          ui.leftTab = 'emotions';
          brain.setDeep(true);
          brain.setSystem(hit.id);
          ui.rightTab = 'fiche';
        }
        renderLeft();
        renderRight();
      });
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrap')) searchResults.hidden = true;
  });

  // Boutons haut de page
  document.getElementById('btnTheme').addEventListener('click', () => {
    ui.theme = ui.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', ui.theme);
    brain.setTheme(ui.theme);
    saved.theme = ui.theme;
    saveState(saved);
    document.getElementById('btnTheme').textContent = ui.theme === 'light' ? '☾ Sombre' : '☀ Clair';
  });
  document.getElementById('btnTheme').textContent = ui.theme === 'light' ? '☾ Sombre' : '☀ Clair';

  document.getElementById('btnProj').addEventListener('click', () => {
    ui.projMode = !ui.projMode;
    document.body.classList.toggle('proj-mode', ui.projMode);
    document.getElementById('btnProj').classList.toggle('on', ui.projMode);
  });

  function updateMicroCallouts() {
    if (!ui.microMode || !micro) {
      microCalloutsLayer.innerHTML = '';
      return;
    }
    const pts = micro.state.stage === 'neurone'
      ? micro.getNeuronCallouts()
      : micro.state.stage === 'synapse'
        ? micro.getSynapseCallouts()
        : [];
    const w = microCanvas.clientWidth;
    const h = microCanvas.clientHeight;
    let html = '';
    for (const pt of pts) {
      if (!pt.visible || pt.x < 40 || pt.x > w - 40 || pt.y < 60 || pt.y > h - 75) continue;
      html += `<div class="micro-callout" style="left:${pt.x.toFixed(1)}px;top:${pt.y.toFixed(1)}px">${esc(pt.label)}</div>`;
    }
    microCalloutsLayer.innerHTML = html;
  }

  function ensureMicroScene() {
    if (micro) return micro;
    if (!microData) microData = decodeMicro();
    if (!microData) return null;
    micro = new MicroScene(microCanvas, microData, {
      onHoverCell(cell, cx, cy) {
        if (!ui.microMode) return;
        if (!cell) {
          hoverTip.hidden = true;
          return;
        }
        const roleTxt = cell.role === 'excitatory' ? 'Excitateur' : cell.role === 'inhibitory' ? 'Inhibiteur' : 'Projection';
        hoverTip.innerHTML = `<strong>${esc(cell.label)}</strong><small>${roleTxt} · ${esc(cell.source)}</small>`;
        hoverTip.style.left = `${cx}px`;
        hoverTip.style.top = `${cy}px`;
        hoverTip.hidden = false;
      },
      onSelectCell() {
        renderMicroUi();
      },
      onStateChange() {
        renderMicroUi();
      },
      onFrame: updateMicroCallouts,
    });
    return micro;
  }

  function renderMicroUi() {
    if (!ui.microMode || !micro) return;
    const st = micro.state;
    const stage = MICRO_STAGES.find((s) => s.id === st.stage) || MICRO_STAGES[0];

    let stageControls = '';
    if (st.stage === 'cortex') {
      const cells = micro.getClusterCells();
      const selCell = st.selectedCellKey ? cells.find((c) => c.key === st.selectedCellKey) : null;
      stageControls = `
        <div class="grp-title" style="margin-top:0">10 neurones réels (Allen VISp / MTG · cliquer pour isoler)</div>
        <div class="micro-legend">
          ${cells.map((c) => `
            <button type="button" class="micro-leg-item ${st.selectedCellKey === c.key ? 'on' : ''}" data-cellkey="${esc(c.key)}">
              <span class="micro-dot" style="background:${c.color};box-shadow:0 0 8px ${c.color}"></span>
              <span>${esc(c.label)}</span>
            </button>
          `).join('')}
        </div>
        ${selCell ? `
          <div class="micro-info-box">
            <strong>${esc(selCell.label)}</strong><br>
            Spécimen Allen : <code>${esc(selCell.source)}</code><br>
            Rôle : ${selCell.role === 'excitatory' ? 'Libère du glutamate (stimule les cibles).' : selCell.role === 'inhibitory' ? 'Libère du GABA (freine le circuit local).' : 'Transmet des signaux entre aires corticales.'}
          </div>
        ` : ''}
      `;
    } else if (st.stage === 'neurone') {
      const comps = [
        ['all', 'Tout voir'],
        ['dendrites', 'Dendrites'],
        ['soma', 'Corps cellulaire'],
        ['axon', 'Axone'],
      ];
      stageControls = `
        <div class="micro-actions">
          <button type="button" class="micro-fire-btn" id="btnMicroNeuronPulse">⚡ Simuler l’influx</button>
        </div>
        <div class="seg-row">
          ${comps.map(([id, lbl]) => `<button type="button" class="seg-btn ${st.compartment === id ? 'on' : ''}" data-comp="${id}">${lbl}</button>`).join('')}
        </div>
        <div class="micro-info-box">
          ${st.compartment === 'dendrites'
            ? '<strong>Dendrites & épines :</strong> reçoivent les neurotransmetteurs venus d’autres neurones (~1 000 à 10 000 synapses).'
            : st.compartment === 'soma'
              ? '<strong>Corps cellulaire (soma) :</strong> contient le noyau et intègre l’ensemble des signaux excitateurs et inhibiteurs.'
              : st.compartment === 'axon'
                ? '<strong>Axone :</strong> long prolongement unique conduisant le potentiel d’action jusqu’aux terminaisons synaptiques.'
                : '<strong>Neurone humain H16.06 (couche 5) :</strong> cliquez sur une zone pour isoler réception, intégration ou conduction.'}
        </div>
      `;
    } else if (st.stage === 'synapse') {
      const modes = [
        ['normal', 'Normale (A4)'],
        ['curare', 'Curare · Bloqué (A4)'],
        ['nicotine', 'Nicotine · Suractivée (A6)'],
      ];
      stageControls = `
        <div class="seg-row" style="margin-bottom:7px;">
          <button type="button" class="seg-btn ${st.synapseZoom !== 'ultra' ? 'on' : ''}" data-synzoom="contact">🔭 Contact réel</button>
          <button type="button" class="seg-btn ${st.synapseZoom === 'ultra' ? 'on' : ''}" data-synzoom="ultra">🔬 Zoom ~20 nm</button>
        </div>
        <div class="micro-actions">
          <button type="button" class="micro-fire-btn" id="btnMicroFireAp">⚡ Envoyer un signal</button>
          <button type="button" class="btn-ghost" id="btnMicroLoop">${st.autoLoop ? '🔁 Boucle : ON' : '🔁 Boucle : OFF'}</button>
        </div>
        <div class="seg-row">
          ${modes.map(([id, lbl]) => `<button type="button" class="seg-btn ${st.synapseMode === id ? 'on' : ''}" data-synmode="${id}">${lbl}</button>`).join('')}
        </div>
        <div class="micro-info-box ${st.synapseMode === 'curare' ? 'warn' : st.synapseMode === 'nicotine' ? 'ok' : ''}">
          ${st.synapseMode === 'curare'
            ? '<strong>Blocage par le curare (rouge) :</strong> les molécules de curare occupent les récepteurs sans les activer. Les neurotransmetteurs s’accumulent dans la fente de 20 nm : aucun influx ne part !'
            : st.synapseMode === 'nicotine'
              ? '<strong>Action de la nicotine (émeraude) :</strong> elle imite le neurotransmetteur naturel, force l’ouverture prolongée des récepteurs et provoque des décharges répétées (dopamine / dépendance).'
              : st.synapseZoom !== 'ultra'
                ? '<strong>Contact synaptique réel :</strong> l’arborisation axonale dorée vient toucher la dendrite apicale du neurone pyramidal bleu. Passez en <em>Zoom ~20 nm</em> ou testez Curare / Nicotine pour observer la fente synaptique.'
                : '<strong>Transmission chimique (~20 nm) :</strong> l’influx provoque l’exocytose des vésicules dorées ; les neurotransmetteurs traversent la fente (~20 nm) et activent les récepteurs cyan.'}
        </div>
      `;
    } else if (st.stage === 'pa') {
      stageControls = `
        <div class="micro-actions">
          <button type="button" class="micro-fire-btn" id="btnMicroFireAp">⚡ Envoyer un potentiel d’action</button>
          <button type="button" class="btn-ghost" id="btnMicroSlow">${st.slowMo ? '🐢 Ralenti ×0,35' : '▶ Vitesse ×1'}</button>
          <button type="button" class="btn-ghost" id="btnMicroLoop">${st.autoLoop ? '🔁 Boucle : ON' : '🔁 Boucle : OFF'}</button>
        </div>
        <div class="micro-info-box">
          <strong>Séquence observée (4 s) :</strong><br>
          1. Comète dorée le long de l’axone présynaptique<br>
          2. Relais chimique dans la synapse (~20 nm)<br>
          3. Propagation bleue dendrite → soma<br>
          4. Décharge d’un nouvel influx le long de l’axone bleu
        </div>
      `;
    } else if (st.stage === 'activite') {
      stageControls = `
        <div class="micro-actions">
          <button type="button" class="micro-fire-btn" id="btnMicroWave">🌊 Vague corticale</button>
          <button type="button" class="btn-ghost" id="btnMicroPlay">${st.activityPlaying ? '⏸ Pause' : '▶ Lecture'}</button>
        </div>
        <div class="seg-row">
          <button type="button" class="seg-btn ${st.activityStyle === 'swarm' ? 'on' : ''}" data-actstyle="swarm">Essaim calcique</button>
          <button type="button" class="seg-btn ${st.activityStyle === 'waves' ? 'on' : ''}" data-actstyle="waves">Ondes Fresnel</button>
        </div>
        <div class="micro-info-box">
          <strong>76 neurones pyramidaux réels (Allen VISp / MTG) :</strong> glissez pour pivoter. L’activité oscille spontanément puis s’embrase lorsqu’une vague sensorielle traverse la colonne corticale.
        </div>
      `;
    }

    microHudCard.innerHTML = `
      <div class="micro-eyebrow">Micro-Monde 3D · Étape ${esc(stage.num)}</div>
      <h2>${esc(stage.title)}</h2>
      <div class="micro-scale">${esc(stage.scale)}</div>
      <p class="micro-summary">${esc(stage.summary)}</p>
      ${stageControls}
    `;

    microHudCard.querySelectorAll('[data-cellkey]').forEach((b) => {
      b.addEventListener('click', () => micro.focusCell(b.dataset.cellkey));
    });
    microHudCard.querySelectorAll('[data-comp]').forEach((b) => {
      b.addEventListener('click', () => micro.setCompartment(b.dataset.comp));
    });
    microHudCard.querySelector('#btnMicroNeuronPulse')?.addEventListener('click', () => micro.fireNeuronDemo());
    microHudCard.querySelector('#btnMicroFireAp')?.addEventListener('click', () => micro.fireActionPotential());
    microHudCard.querySelector('#btnMicroSlow')?.addEventListener('click', () => micro.setSlowMo(!st.slowMo));
    microHudCard.querySelector('#btnMicroLoop')?.addEventListener('click', () => micro.setAutoLoop(!st.autoLoop));
    microHudCard.querySelectorAll('[data-synzoom]').forEach((b) => {
      b.addEventListener('click', () => micro.setSynapseZoom(b.dataset.synzoom));
    });
    microHudCard.querySelectorAll('[data-synmode]').forEach((b) => {
      b.addEventListener('click', () => micro.setSynapseMode(b.dataset.synmode));
    });
    microHudCard.querySelector('#btnMicroPlay')?.addEventListener('click', () => micro.setActivityPlaying(!st.activityPlaying));
    microHudCard.querySelector('#btnMicroWave')?.addEventListener('click', () => micro.triggerCorticalWave());
    microHudCard.querySelectorAll('[data-actstyle]').forEach((b) => {
      b.addEventListener('click', () => micro.setActivityStyle(b.dataset.actstyle));
    });

    microToolbar.innerHTML = `
      ${MICRO_STAGES.map((s) => `
        <button type="button" class="tbtn ${st.stage === s.id ? 'stage-on' : ''}" data-mstage="${s.id}">${esc(s.short)}</button>
      `).join('')}
      <span class="tsep"></span>
      <button type="button" class="tbtn" id="btnMicroReset">Reset vue</button>
      <button type="button" class="tbtn ${st.autoRotate ? 'on' : ''}" id="btnMicroRot">↻ Rotation</button>
      <button type="button" class="tbtn" id="btnMicroCap">📸 Capture</button>
      <button type="button" class="tbtn" id="btnMicroBack">← Atlas</button>
    `;

    microToolbar.querySelectorAll('[data-mstage]').forEach((b) => {
      b.addEventListener('click', () => micro.setStage(b.dataset.mstage));
    });
    microToolbar.querySelector('#btnMicroReset')?.addEventListener('click', () => micro.resetView());
    microToolbar.querySelector('#btnMicroRot')?.addEventListener('click', () => micro.setAutoRotate(!micro.state.autoRotate));
    microToolbar.querySelector('#btnMicroCap')?.addEventListener('click', () => openCaptureModal());
    microToolbar.querySelector('#btnMicroBack')?.addEventListener('click', () => exitMicroMode(true));
  }

  function enterMicroMode(stageId = 'cortex', opts = {}) {
    const m = ensureMicroScene();
    if (!m) return;
    ui.microMode = true;
    ui.projMode = false;
    brain.paused = true;
    m.paused = false;

    document.body.classList.remove('proj-mode');
    document.body.classList.add('micro-mode');
    document.body.classList.toggle('micro-hide-right', !opts.keepRight);
    document.getElementById('btnProj').classList.remove('on');
    document.getElementById('btnNavMicro').classList.add('on');
    document.getElementById('btnNavExplore').classList.remove('on');
    document.getElementById('btnNavActivites').classList.toggle('on', Boolean(opts.keepRight));

    canvas.hidden = true;
    microCanvas.hidden = false;
    orientLayer.hidden = true;
    epLayer.hidden = true;
    hoverTip.hidden = true;
    mriDock.hidden = true;
    macroToolbar.hidden = true;
    microHudCard.hidden = false;
    microToolbar.hidden = false;
    microCalloutsLayer.hidden = false;

    m.resize();
    m.setStage(stageId);
    if (opts.synapseMode) m.setSynapseMode(opts.synapseMode);
    if (opts.compartment) m.setCompartment(opts.compartment);
    renderMicroUi();
  }

  function exitMicroMode(openActivites = false) {
    if (!ui.microMode) return;
    ui.microMode = false;
    if (micro) micro.paused = true;
    brain.paused = false;

    document.body.classList.remove('micro-mode', 'micro-hide-right');
    document.getElementById('btnNavMicro').classList.remove('on');
    document.getElementById('btnNavExplore').classList.toggle('on', !openActivites);
    document.getElementById('btnNavActivites').classList.toggle('on', openActivites);

    microCanvas.hidden = true;
    canvas.hidden = false;
    orientLayer.hidden = false;
    epLayer.hidden = false;
    hoverTip.hidden = true;
    macroToolbar.hidden = false;
    microHudCard.hidden = true;
    microToolbar.hidden = true;
    microCalloutsLayer.hidden = true;
    mriDock.hidden = !brain.state.mriOpen;
    brain.resize();
  }

  window.addEventListener('resize', () => {
    if (ui.microMode && micro) micro.resize();
  });

  document.getElementById('btnNavExplore').addEventListener('click', () => {
    exitMicroMode(false);
    ui.projMode = false;
    document.body.classList.remove('proj-mode');
    document.getElementById('btnProj').classList.remove('on');
    document.getElementById('btnNavExplore').classList.add('on');
    document.getElementById('btnNavActivites').classList.remove('on');
    ui.rightTab = 'fiche';
    renderRight();
  });

  document.getElementById('btnNavMicro').addEventListener('click', () => {
    enterMicroMode(micro?.state.stage || 'cortex');
  });

  document.getElementById('btnNavActivites').addEventListener('click', () => {
    if (ui.microMode) {
      // Autoriser l'affichage des fiches A1-A6 à côté ou revenir en mode macro si déjà affiché
      if (document.body.classList.contains('micro-hide-right')) {
        document.body.classList.remove('micro-hide-right');
        document.getElementById('btnNavActivites').classList.add('on');
        ui.rightTab = 'activites';
        renderRight();
        return;
      }
      exitMicroMode(true);
    }
    ui.projMode = false;
    document.body.classList.remove('proj-mode');
    document.getElementById('btnProj').classList.remove('on');
    document.getElementById('btnNavActivites').classList.add('on');
    document.getElementById('btnNavExplore').classList.remove('on');
    ui.rightTab = 'activites';
    renderRight();
  });

  document.getElementById('btnNavDocs').addEventListener('click', () => openDocsModal('synapse'));
  document.getElementById('btnNavSources').addEventListener('click', () => openSourcesModal());

  // ---------------- Barre d'outils inférieure ----------------
  document.querySelectorAll('[data-view]').forEach((b) => {
    b.addEventListener('click', () => brain.setView(b.dataset.view));
  });

  document.getElementById('btnDeep').addEventListener('click', () => brain.setDeep(!brain.state.deep));
  document.getElementById('btnFlip').addEventListener('click', () => brain.flipSide());
  document.getElementById('btnMri').addEventListener('click', () => brain.setMri({ open: !brain.state.mriOpen }));
  document.getElementById('btnPathways').addEventListener('click', () => {
    if (brain.state.activePathway) {
      brain.setPathway(null);
    } else {
      ui.leftTab = 'voies';
      brain.setDeep(true);
      brain.setPathway('glutamate');
      renderLeft();
      renderRight();
    }
  });
  document.getElementById('btnCapture').addEventListener('click', () => openCaptureModal());

  function syncToolbar(st) {
    document.getElementById('btnDeep').classList.toggle('on', st.deep);
    document.getElementById('btnMri').classList.toggle('on', st.mriOpen);
    document.getElementById('btnPathways').classList.toggle('on', Boolean(st.activePathway));
  }

  // Raccourcis clavier (inactifs dans les champs texte)
  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
      if (e.key === 'Escape') document.activeElement.blur();
      return;
    }
    const k = e.key.toLowerCase();
    if (k === 'd') { e.preventDefault(); brain.setDeep(!brain.state.deep); }
    else if (k === 'm') { e.preventDefault(); brain.setMri({ open: !brain.state.mriOpen }); }
    else if (k === 'n') { e.preventDefault(); document.getElementById('btnPathways').click(); }
    else if (e.key === '/') { e.preventDefault(); searchInput.focus(); }
    else if (e.key === 'Escape') {
      const fsCard = document.querySelector('.card.is-fs-corpus');
      if (fsCard) {
        fsCard.classList.remove('is-fs-corpus');
        document.querySelector('.drawer-right')?.classList.remove('has-fs-corpus');
        const btnC = document.getElementById('btnCorpusFs');
        if (btnC) btnC.textContent = '⛶ Plein écran';
      } else if (!document.getElementById('modalBackdrop').hidden) closeModal();
      else brain.isolate(null);
    }
  });

  // ---------------- Panneau gauche (Index & Couches) ----------------
  const leftBody = document.getElementById('leftBody');
  document.querySelectorAll('#leftTabs .tab').forEach((t) => {
    t.addEventListener('click', () => {
      ui.leftTab = t.dataset.ltab;
      renderLeft();
    });
  });

  function renderLeft() {
    document.querySelectorAll('#leftTabs .tab').forEach(t => t.classList.toggle('on', t.dataset.ltab === ui.leftTab));
    const st = brain.state;

    if (ui.leftTab === 'regions') {
      let html = `
        <div class="seg-row">
          <button type="button" class="seg-btn ${st.colorMode === 'regions' ? 'on' : ''}" data-cm="regions">Régions</button>
          <button type="button" class="seg-btn ${st.colorMode === 'lobes' ? 'on' : ''}" data-cm="lobes">Lobes</button>
        </div>
        <div class="seg-row">
          <button type="button" class="seg-btn ${st.hemiMode === 'both' ? 'on' : ''}" data-hm="both">2 hémisphères</button>
          <button type="button" class="seg-btn ${st.hemiMode === 'onlyR' ? 'on' : ''}" data-hm="onlyR">Masquer G.</button>
          <button type="button" class="seg-btn ${st.hemiMode === 'onlyL' ? 'on' : ''}" data-hm="onlyL">Masquer D.</button>
        </div>
      `;
      if (st.isolatedKey) {
        html += `<button type="button" class="btn-ghost" id="btnClearIso" style="width:100%;margin-bottom:6px">✕ Tout réafficher (Échap)</button>`;
      }
      for (const grp of INDEX_GROUPS) {
        html += `<div class="grp-title">${esc(grp.title)}</div>`;
        for (const k of grp.keys) {
          const info = STRUCTURES[k];
          if (!info || info.hidden) continue;
          const col = st.colorMode === 'lobes' && info.lobe ? LOBES[info.lobe].color : info.color;
          const on = st.isolatedKey === k;
          html += `<button type="button" class="item-btn ${on ? 'on' : ''}" data-struct="${k}">
            <span class="dot" style="background:${col}"></span>
            <span>${esc(info.name)}</span>
          </button>`;
        }
      }
      leftBody.innerHTML = html;

      leftBody.querySelectorAll('[data-cm]').forEach(b => b.addEventListener('click', () => {
        brain.setColorMode(b.dataset.cm, 0);
        renderLeft();
      }));
      leftBody.querySelectorAll('[data-hm]').forEach(b => b.addEventListener('click', () => {
        brain.setHemiMode(b.dataset.hm);
        renderLeft();
      }));
      leftBody.querySelector('#btnClearIso')?.addEventListener('click', () => brain.isolate(null));
      leftBody.querySelectorAll('[data-struct]').forEach(b => b.addEventListener('click', () => {
        const k = b.dataset.struct;
        if (STRUCTURES[k]?.group === 'profond' || STRUCTURES[k]?.group === 'tronc') brain.setDeep(true);
        brain.isolate(st.isolatedKey === k ? null : k);
        ui.rightTab = 'fiche';
        renderRight();
      }));
      return;
    }

    if (ui.leftTab === 'voies') {
      let html = `
        <div class="legend-box">
          <strong>Légende des particules (touche N)</strong><br>
          ● <strong>Sphères pleines</strong> = Excitateur (Glutamate)<br>
          ○ <strong>Anneaux</strong> = Inhibiteur / freinage (GABA)<br>
          ✦ <strong>Impulsions</strong> = Neuromodulateur<br>
          <small class="muted">Échelle macroscopique : pour voir la fente synaptique, ouvre le doc. Synapse (A2).</small>
        </div>
        <button type="button" class="btn-ghost" id="btnOpenSynFromVoies" style="width:100%;margin-bottom:8px">🔬 Changer d'échelle : doc. Synapse (A2)</button>
      `;
      if (st.activePathway) {
        html += `<button type="button" class="btn-ghost" id="btnClearPw" style="width:100%;margin-bottom:8px">✕ Masquer les voies</button>`;
      }
      for (const [k, pw] of Object.entries(PATHWAYS)) {
        if (pw.hidden) continue;
        const on = st.activePathway === k;
        const tLbl = pw.type === 'exc' ? 'Excitateur ●' : (pw.type === 'inh' ? 'Inhibiteur ○' : 'Modulateur ✦');
        html += `<button type="button" class="item-btn ${on ? 'on' : ''}" data-pw="${k}">
          <span class="dot" style="background:${pw.color}"></span>
          <span style="flex:1">${esc(pw.name)}</span>
          <small class="muted">${tLbl}</small>
        </button>`;
        if (on) {
          html += `<div class="route-list">` + pw.routes.map(([a, b], idx) => `
            <button type="button" class="route-btn ${st.activeRouteIdx === idx ? 'on' : ''}" data-ridx="${idx}">
              ${esc(STRUCTURES[a]?.name || a)} → ${esc(STRUCTURES[b]?.name || b)}
            </button>`).join('') + `</div>`;
        }
      }
      leftBody.innerHTML = html;
      leftBody.querySelector('#btnOpenSynFromVoies')?.addEventListener('click', () => openDocsModal('synapse'));
      leftBody.querySelector('#btnClearPw')?.addEventListener('click', () => { brain.setPathway(null); renderLeft(); renderRight(); });
      leftBody.querySelectorAll('[data-pw]').forEach(b => b.addEventListener('click', () => {
        const k = b.dataset.pw;
        brain.setDeep(true);
        brain.setPathway(st.activePathway === k ? null : k);
        ui.rightTab = 'fiche';
        renderLeft(); renderRight();
      }));
      leftBody.querySelectorAll('[data-ridx]').forEach(b => b.addEventListener('click', () => {
        const idx = Number(b.dataset.ridx);
        brain.setPathway(st.activePathway, st.activeRouteIdx === idx ? -1 : idx);
        renderLeft();
      }));
      return;
    }

    if (ui.leftTab === 'reseaux') {
      let html = `
        <p class="muted" style="margin:0 0 8px;font-size:12px">Une fonction mobilise un <strong>réseau distribué</strong> sur plusieurs lobes (parcellation de Yeo, 2011) — jamais une seule case isolée.</p>
        <button type="button" class="item-btn ${st.colorMode === 'networks' && st.activeNetwork === 0 ? 'on' : ''}" data-net="0">
          <span class="dot" style="background:var(--accent)"></span>
          <span>Tous les 7 réseaux</span>
        </button>
      `;
      for (let i = 1; i < NETWORKS.length; i++) {
        const n = NETWORKS[i];
        const on = st.colorMode === 'networks' && st.activeNetwork === i;
        html += `<button type="button" class="item-btn ${on ? 'on' : ''}" data-net="${i}">
          <span class="dot" style="background:${n.color}"></span>
          <span>${esc(n.name)}</span>
        </button>`;
      }
      html += `<button type="button" class="btn-ghost" id="btnNetReset" style="width:100%;margin-top:8px">Revenir aux couleurs anatomiques</button>`;
      leftBody.innerHTML = html;
      leftBody.querySelectorAll('[data-net]').forEach(b => b.addEventListener('click', () => {
        brain.setDeep(false);
        brain.isolate(null);
        brain.setColorMode('networks', Number(b.dataset.net));
        ui.rightTab = 'fiche';
        renderLeft(); renderRight();
      }));
      leftBody.querySelector('#btnNetReset')?.addEventListener('click', () => {
        brain.setColorMode('regions', 0);
        renderLeft();
      });
      return;
    }

    if (ui.leftTab === 'emotions') {
      let html = `
        <div class="legend-box">
          <strong>Modèle de Panksepp (7 systèmes)</strong><br>
          <span class="muted">Modèle théorique (niveau C) incluant des émotions <strong>agréables</strong> ET <strong>désagréables</strong> (garde-fou programme 2025).</span>
        </div>
      `;
      if (st.activeSystem) {
        html += `<button type="button" class="btn-ghost" id="btnClearSys" style="width:100%;margin-bottom:8px">✕ Masquer le circuit</button>`;
      }
      for (const [k, sys] of Object.entries(SYSTEMS)) {
        const on = st.activeSystem === k;
        const valCls = sys.valence === 'agréable' ? 'good' : 'bad';
        html += `<button type="button" class="item-btn ${on ? 'on' : ''}" data-sys="${k}">
          <span class="dot" style="background:${sys.color}"></span>
          <span style="flex:1">${esc(sys.name)}</span>
          <span class="badge ${valCls}">${esc(sys.valence)}</span>
        </button>`;
      }
      leftBody.innerHTML = html;
      leftBody.querySelector('#btnClearSys')?.addEventListener('click', () => { brain.setSystem(null); renderLeft(); renderRight(); });
      leftBody.querySelectorAll('[data-sys]').forEach(b => b.addEventListener('click', () => {
        const k = b.dataset.sys;
        brain.setDeep(true);
        brain.setSystem(st.activeSystem === k ? null : k);
        ui.rightTab = 'fiche';
        renderLeft(); renderRight();
      }));
      return;
    }

    if (ui.leftTab === 'clinique') {
      let html = `
        <div class="ethic-banner">
          <strong>Éducation, pas diagnostic :</strong> ces modèles illustrent des tendances statistiques de circuits en recherche. Ils ne permettent jamais de diagnostiquer une personne.
        </div>
        <div class="legend-box">
          <span style="color:#d9381e;font-weight:700">● Pulsation rouge (↑)</span> : suractivation / alerte<br>
          <span style="color:#2d78c4;font-weight:700">● Pulsation bleue (↓)</span> : régulation / frein affaibli
        </div>
      `;
      if (st.activeClinical) {
        html += `<button type="button" class="btn-ghost" id="btnClearClin" style="width:100%;margin-bottom:8px">✕ Quitter la lentille clinique</button>`;
      }
      for (const [k, cm] of Object.entries(CLINICAL_MODELS)) {
        const on = st.activeClinical === k;
        html += `<button type="button" class="item-btn ${on ? 'on' : ''}" data-clin="${k}">
          <span class="badge neutral">Niv. ${cm.level}</span>
          <span>${esc(cm.short)}</span>
        </button>`;
      }
      leftBody.innerHTML = html;
      leftBody.querySelector('#btnClearClin')?.addEventListener('click', () => { brain.setClinical(null); renderLeft(); renderRight(); });
      leftBody.querySelectorAll('[data-clin]').forEach(b => b.addEventListener('click', () => {
        const k = b.dataset.clin;
        brain.setDeep(true);
        brain.setClinical(st.activeClinical === k ? null : k);
        ui.rightTab = 'fiche';
        renderLeft(); renderRight();
      }));
    }
  }

  // ---------------- Panneau droit (Fiche Info & Activités skillsvt) ----------------
  const rightBody = document.getElementById('rightBody');
  document.querySelectorAll('#rightTabs .tab').forEach((t) => {
    t.addEventListener('click', () => {
      ui.rightTab = t.dataset.rtab;
      renderRight();
    });
  });

  function renderSelectionBanner() {
    const el = document.getElementById('activeSelBanner');
    if (!el) return;
    const k = brain.state.isolatedKey;
    if (k && STRUCTURES[k]) {
      el.innerHTML = `<div class="card" style="display:flex;justify-content:space-between;align-items:center;gap:8px;padding:7px 10px;border-color:var(--accent)">
        <span>📌 <strong>${esc(STRUCTURES[k].name)}</strong> <small class="muted">(${esc(STRUCTURES[k].en)})</small></span>
        <span style="display:flex;gap:4px;white-space:nowrap;flex-shrink:0">
          <button type="button" class="pill" id="btnBannerFiche">Fiche</button>
          <button type="button" class="pill" id="btnBannerMri">IRM</button>
          <button type="button" class="pill" id="btnBannerEsc">✕</button>
        </span>
      </div>`;
      el.querySelector('#btnBannerFiche')?.addEventListener('click', () => { ui.rightTab = 'fiche'; renderRight(); });
      el.querySelector('#btnBannerMri')?.addEventListener('click', () => brain.focusMriOn(k));
      el.querySelector('#btnBannerEsc')?.addEventListener('click', () => brain.isolate(null));
    } else {
      el.innerHTML = '';
    }
  }

  function renderRight() {
    document.querySelectorAll('#rightTabs .tab').forEach(t => t.classList.toggle('on', t.dataset.rtab === ui.rightTab));
    const st = brain.state;

    if (ui.rightTab === 'fiche') {
      let html = '';
      if (st.isolatedKey && STRUCTURES[st.isolatedKey]) {
        const info = STRUCTURES[st.isolatedKey];
        html += `
          <div class="card">
            <div class="meta-row">
              <span class="badge">${esc(info.group)}</span>
              ${info.lobe ? `<span class="badge neutral">${esc(LOBES[info.lobe]?.name || info.lobe)}</span>` : ''}
              ${info.approx ? `<span class="badge bad">Position approximée</span>` : ''}
            </div>
            <h2 style="margin:2px 0;font-family:var(--f-display)">${esc(info.name)}</h2>
            <div class="muted" style="font-family:var(--f-mono);font-size:12px;margin-bottom:8px">EN : ${esc(info.en)}</div>
            <p style="margin:0 0 8px">${esc(info.desc)}</p>
            <p style="margin:0 0 8px"><strong>Rôle biologique :</strong> ${esc(info.role)}</p>
            ${info.limite ? `<p class="doc-note"><strong>Limite du modèle :</strong> ${esc(info.limite)}</p>` : ''}
            <div class="doc-controls" style="margin-top:10px">
              <button type="button" class="btn-primary" id="btnFicheMri">Centrer l'IRM ici</button>
              <button type="button" class="btn-ghost" id="btnFicheClear">Libérer (Échap)</button>
            </div>
          </div>
        `;
      }
      if (st.activePathway && PATHWAYS[st.activePathway]) {
        const pw = PATHWAYS[st.activePathway];
        html += `
          <div class="card">
            <div class="meta-row">
              <span class="badge">${pw.type === 'exc' ? 'Excitateur ●' : pw.type === 'inh' ? 'Inhibiteur ○' : 'Neuromodulateur ✦'}</span>
            </div>
            <h3 style="margin:2px 0;font-family:var(--f-display)">Voie : ${esc(pw.name)}</h3>
            <p style="margin:6px 0">${esc(pw.desc)}</p>
            <button type="button" class="btn-ghost" id="btnFicheSyn">Ouvrir le doc. Synapse microscopique</button>
          </div>
        `;
      }
      if (st.activeSystem && SYSTEMS[st.activeSystem]) {
        const sys = SYSTEMS[st.activeSystem];
        html += `
          <div class="card">
            <div class="meta-row">
              <span class="badge ${sys.valence === 'agréable' ? 'good' : 'bad'}">Valence : ${esc(sys.valence)}</span>
              <span class="badge neutral">Modèle de Panksepp (niveau C)</span>
            </div>
            <h3 style="margin:2px 0;font-family:var(--f-display)">${esc(sys.name)}</h3>
            <p style="margin:6px 0">${esc(sys.desc)}</p>
          </div>
        `;
      }
      if (st.colorMode === 'networks' && st.activeNetwork > 0 && NETWORKS[st.activeNetwork]) {
        const n = NETWORKS[st.activeNetwork];
        html += `
          <div class="card">
            <div class="meta-row"><span class="badge">Réseau distribué (Yeo 2011)</span></div>
            <h3 style="margin:2px 0;font-family:var(--f-display)">${esc(n.name)}</h3>
            <div class="muted" style="font-family:var(--f-mono);font-size:11.5px;margin-bottom:6px">EN : ${esc(n.en)}</div>
            <p style="margin:0">${esc(n.desc)}</p>
          </div>
        `;
      }
      if (st.activeClinical && CLINICAL_MODELS[st.activeClinical]) {
        const cm = CLINICAL_MODELS[st.activeClinical];
        html += `
          <div class="card">
            <div class="ethic-banner">${esc(cm.disclaimer)}</div>
            <div class="meta-row">
              <span class="badge">4 lentilles</span>
              <span class="badge neutral">Niveau de preuve ${cm.level}</span>
            </div>
            <h3 style="margin:2px 0;font-family:var(--f-display)">${esc(cm.name)}</h3>
            <p style="margin:6px 0">${esc(cm.circuitDesc)}</p>
            <p style="margin:6px 0"><strong>1. Circuit :</strong> ${esc(cm.lenses.circuit)}</p>
            <p style="margin:6px 0"><strong>2. Données d'études :</strong> ${esc(cm.lenses.etudes)}</p>
            <p style="margin:6px 0"><strong>3. Manifestations :</strong> ${esc(cm.lenses.symptomes)}</p>
            <p style="margin:6px 0"><strong>4. Accompagnement :</strong> ${esc(cm.lenses.traitements)}</p>
          </div>
        `;
      }
      if (!html) {
        html = `
          <div class="card">
            <h3 style="margin:0 0 6px;font-family:var(--f-display)">Explorer le modèle 3D</h3>
            <p style="margin:0 0 8px">Clique sur une région du cerveau (ou utilise l'Index à gauche) pour l'isoler tout en gardant le contexte 3D.</p>
            <ul style="margin:0;padding-left:18px;font-size:12.5px">
              <li><strong>Touche D</strong> : rendre le cortex translucide (« sous verre »)</li>
              <li><strong>Double-clic / Échap</strong> : réafficher tout le cerveau</li>
              <li><strong>Touche M</strong> : ouvrir les coupes IRM réelles (MNI152)</li>
              <li><strong>Touche N</strong> : animer les voies de neurotransmetteurs</li>
            </ul>
            <button type="button" class="btn-primary" id="btnGoAct" style="margin-top:10px;width:100%">Ouvrir la séquence A1–A6 & DNB 3 →</button>
          </div>
        `;
      }
      rightBody.innerHTML = html;
      rightBody.querySelector('#btnFicheMri')?.addEventListener('click', () => brain.focusMriOn(st.isolatedKey));
      rightBody.querySelector('#btnFicheClear')?.addEventListener('click', () => brain.isolate(null));
      rightBody.querySelector('#btnFicheSyn')?.addEventListener('click', () => openDocsModal('synapse'));
      rightBody.querySelector('#btnGoAct')?.addEventListener('click', () => { ui.rightTab = 'activites'; renderRight(); });
      return;
    }

    // Onglet Activités A1..A6 + DNB 3 + Programme
    let navHtml = `<div class="act-nav">
      <button type="button" class="act-chip ${ui.actId === 'PROG' ? 'on' : ''}" data-act="PROG">Prog.</button>
      ${ACTIVITIES.map(a => `<button type="button" class="act-chip ${ui.actId === a.id ? 'on' : ''}" data-act="${a.id}">${esc(a.code)}</button>`).join('')}
    </div><div id="activeSelBanner"></div>`;

    if (ui.actId === 'PROG') {
      const p = PROGRAMME_SPIRALAIRE;
      rightBody.innerHTML = navHtml + `
        <div class="card">
          <div class="meta-row"><span class="badge">Programme SVT · Cycle 4</span><span class="badge good">Nouvelle séquence</span></div>
          <h3 style="margin:0 0 6px;font-family:var(--f-display)">Progression spiralaire Cycle 4 (5e → 4e → 3e)</h3>
          <p style="margin:0 0 8px">${esc(p.intro)}</p>
          <table class="data-table">
            <thead><tr><th>Niveau</th><th>Activités</th><th>Attendus officiels</th></tr></thead>
            <tbody>
              ${p.niveaux.map(n => `<tr><td><strong>${esc(n.niveau)}</strong></td><td>${esc(n.place)}</td><td>${esc(n.attendus)}</td></tr>`).join('')}
            </tbody>
          </table>
          <div class="grp-title" style="margin-top:10px">Principes didactiques &amp; rigueur des sources</div>
          <ul style="margin:4px 0 0;padding-left:18px;font-size:12px">
            ${p.gardefous.map(g => `<li style="margin-bottom:4px">${esc(g)}</li>`).join('')}
          </ul>
        </div>
      `;
    } else {
      const act = ACTIVITIES.find(a => a.id === ui.actId) || ACTIVITIES[0];
      const vObj = ui.voie === 1 ? act.voie1 : act.voie2;
      const caps = ui.captures[act.id] || [];

      rightBody.innerHTML = navHtml + `
        <div class="card">
          <div class="meta-row">
            <span class="badge">${esc(act.niveau)}</span>
            <span class="badge neutral">${esc(act.type)}</span>
            <span class="badge neutral">${esc(act.semaine)} · ${esc(act.duree)}</span>
          </div>
          <h3 style="margin:2px 0 8px;font-family:var(--f-display)">${esc(act.code)} — ${esc(act.titre)}</h3>
          <div class="ctx-box">
            <div class="box-kicker">📌 Situation d'ancrage réelle</div>
            <p style="margin:2px 0 4px">${esc(act.accroche)}</p>
            <div class="muted" style="font-size:11px">Source : ${esc(act.sourceAccroche)}</div>
          </div>
          <div class="prob-box">
            <div class="box-kicker">❓ Problématique</div>
            <p style="margin:2px 0 0;font-weight:600">${esc(act.problematique)}</p>
          </div>
          <details class="hint-box" style="margin-top:6px">
            <summary>📖 Les mots pour comprendre (${act.vocab.length}) &amp; obstacle initial</summary>
            <div class="vocab-mini">
              ${act.vocab.map(v => `<div class="v-item"><strong>${esc(v.term)}</strong> : ${esc(v.def)}</div>`).join('')}
            </div>
            <p style="margin:6px 0 2px;font-size:11.5px"><span class="badge bad">Conception initiale</span> ${esc(act.obstacle)}</p>
            <p style="margin:2px 0 0;font-size:11.5px"><strong>Rupture :</strong> ${esc(act.rupture)}</p>
          </details>
        </div>

        <div class="card">
          <div class="grp-title" style="margin-top:0">Exploration 3D &amp; documents interactifs (cliquer pour piloter)</div>
          <div style="margin-bottom:8px">
            ${act.scenario3d.map((s, idx) => `<button type="button" class="step-btn" data-step="${idx}">${esc(s.label)}</button>`).join('')}
          </div>
          <div class="grp-title" style="margin-top:8px;display:flex;justify-content:space-between;align-items:center;gap:8px">
            <span>Corpus documentaire (${act.docs.length} documents)</span>
            <button type="button" class="pill" id="btnCorpusFs" title="Afficher les documents en plein écran">⛶ Plein écran</button>
          </div>
          ${act.docs.map(d => `
            <div class="doc-mini">
              <div class="doc-mini-head">
                <span class="badge">${esc(d.num)}</span>
                <strong>${esc(d.title)}</strong>
              </div>
              <div class="muted" style="font-size:10.5px;margin-bottom:4px">Source : ${esc(d.source)}</div>
              <p style="margin:0 0 5px;font-size:12px">${esc(d.text)}</p>
              ${d.table ? `
                <table class="data-table" style="margin-bottom:5px;font-size:11.5px">
                  <thead><tr>${d.table.headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>
                  <tbody>${d.table.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody>
                </table>
              ` : ''}
              <div class="doc-mini-leg">${esc(d.legend)}</div>
            </div>
          `).join('')}
        </div>

        <div class="card">
          <div class="seg-row">
            <button type="button" class="seg-btn ${ui.voie === 1 ? 'on' : ''}" data-voie="1">Voie 1 · Tâche autonome</button>
            <button type="button" class="seg-btn ${ui.voie === 2 ? 'on' : ''}" data-voie="2">Voie 2 · Parcours guidé</button>
          </div>
          <p style="margin:4px 0 6px;font-size:12.5px">${esc(vObj.consigne)}</p>
          <div class="mdl-bar">
            <span><strong>MDL · Verbes :</strong> ${esc(act.mdl.verbeAction)}</span>
            <span><strong>Connecteurs :</strong> ${act.mdl.marqueurs.map(m => `<code>${esc(m)}</code>`).join(' ')}</span>
          </div>
          ${vObj.fields.map(f => `
            <label class="field-lbl" for="fld_${f.id}">${esc(f.label)}</label>
            <textarea class="stu-input" id="fld_${f.id}" rows="${f.rows}" data-fid="${f.id}" placeholder="Écris ta réponse ici...">${esc(ui.answers[f.id] || '')}</textarea>
          `).join('')}

          <div class="check-box">
            <div style="font-weight:600;font-size:11.5px;margin-bottom:3px">✔ Avant de rendre (auto-vérification) :</div>
            <ul style="margin:0;padding-left:16px;font-size:11.5px">
              ${act.avantDeRendre.map(c => `<li>${esc(c)}</li>`).join('')}
            </ul>
          </div>

          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;gap:6px;flex-wrap:wrap">
            <strong style="font-size:12px">Captures 3D (${caps.length})</strong>
            <div style="display:flex;gap:5px;flex-wrap:wrap">
              <a class="btn-primary" href="activites/${esc(act.id.toLowerCase())}.html" style="text-decoration:none;display:inline-flex;align-items:center">📤 Envoyer au professeur</a>
              <button type="button" class="btn-ghost" id="btnActCap">+ Capture 3D</button>
              <button type="button" class="btn-ghost" id="btnPrintAct">🖨️ Fiche Élève A4</button>
              <button type="button" class="btn-ghost" id="btnPrintProf">🔒 Guide Prof A4</button>
            </div>
          </div>
          ${caps.length ? `<div class="cap-grid">${caps.map((c, ci) => `
            <div class="cap-card">
              <img src="${c.img}" alt="Capture ${ci + 1}">
              <div class="cap-meta">
                <span>${esc(c.caption || 'Capture 3D')}</span>
                <button type="button" class="pill" data-delcap="${ci}" title="Supprimer">✕</button>
              </div>
            </div>`).join('')}</div>` : ''}
        </div>

        <div class="card">
          <div class="grp-title" style="margin-top:0">Coups de pouce progressifs (N1 → N3)</div>
          ${act.coupsDePouce.map(cp => `
            <details class="hint-box"><summary>${esc(cp.niv)}</summary><p style="margin:4px 0 0">${esc(cp.txt)}</p></details>
          `).join('')}
          <div class="hint-box" id="profLockBox" style="margin-top:8px">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;flex-wrap:wrap">
              <strong>🔒 Trace écrite &amp; Corrigé professeur (${esc(act.id)})</strong>
              <button type="button" class="btn-ghost" id="btnUnlockGlobalProf" style="font-size:11.5px;padding:4px 8px">Déverrouiller (code prof)</button>
            </div>
            <div id="profUnlockedContent" style="display:none;margin-top:8px"></div>
          </div>
        </div>
      `;

      renderSelectionBanner();

      document.querySelector('.drawer-right')?.classList.remove('has-fs-corpus');
      rightBody.querySelector('#btnCorpusFs')?.addEventListener('click', (ev) => {
        const card = ev.currentTarget.closest('.card');
        const drawer = document.querySelector('.drawer-right');
        if (!card) return;
        const next = !card.classList.contains('is-fs-corpus');
        card.classList.toggle('is-fs-corpus', next);
        drawer?.classList.toggle('has-fs-corpus', next);
        ev.currentTarget.textContent = next ? '✕ Quitter plein écran' : '⛶ Plein écran';
      });

      rightBody.querySelectorAll('[data-step]').forEach((b) => {
        b.addEventListener('click', () => {
          const step = act.scenario3d[Number(b.dataset.step)];
          if (step.action?.microStage) {
            enterMicroMode(step.action.microStage, {
              keepRight: true,
              synapseMode: step.action.synapseMode,
              compartment: step.action.compartment,
            });
            return;
          }
          if (ui.microMode) exitMicroMode(true);
          const has3d = step.action && ('view' in step.action || 'isolate' in step.action || 'pathway' in step.action || 'colorMode' in step.action || 'mri' in step.action || 'deep' in step.action);
          if (has3d) {
            brain.applyAction({
              hemiMode: 'both',
              deep: false,
              colorMode: 'regions',
              network: 0,
              isolate: null,
              pathway: null,
              system: null,
              clinical: null,
              mri: { open: false, clip: false },
              ...step.action,
            });
          }
          if (step.action?.doc) openDocsModal(step.action.doc);
          renderLeft();
        });
      });

      rightBody.querySelectorAll('[data-voie]').forEach((b) => {
        b.addEventListener('click', () => {
          ui.voie = Number(b.dataset.voie);
          saved.voie = ui.voie;
          saveState(saved);
          renderRight();
        });
      });

      rightBody.querySelectorAll('[data-fid]').forEach((ta) => {
        ta.addEventListener('input', () => {
          ui.answers[ta.dataset.fid] = ta.value;
          saved.answers = ui.answers;
          saveState(saved);
        });
      });

      rightBody.querySelector('#btnActCap')?.addEventListener('click', () => openCaptureModal());
      rightBody.querySelector('#btnPrintAct')?.addEventListener('click', () => printActivity(act));
      rightBody.querySelector('#btnPrintProf')?.addEventListener('click', () => {
        const code = window.prompt('Code enseignant requis pour imprimer le guide professeur :');
        if (code === '2027') printProfGuide(act);
      });
      rightBody.querySelector('#btnUnlockGlobalProf')?.addEventListener('click', () => {
        const code = window.prompt('Code enseignant requis :');
        const target = rightBody.querySelector('#profUnlockedContent');
        if (code !== '2027' || !target) return;
        target.style.display = 'block';
        target.innerHTML = `
          <p style="margin:4px 0"><strong>✍️ Je retiens :</strong> ${esc(act.traceEcrite)}</p>
          <div class="meta-row" style="margin-bottom:6px">${act.notions.map(n => `<span class="badge neutral">${esc(n)}</span>`).join('')}</div>
          <p style="margin:4px 0;font-size:12px"><strong>Repère « Faire des sciences » :</strong> ${esc(act.fds)}</p>
          <div style="margin:6px 0 4px;font-size:12px"><strong>Barème :</strong> ${esc(act.prof.bareme)}</div>
          <ul style="margin:4px 0 6px;padding-left:16px;font-size:12px">
            ${act.prof.corrige.map(r => `<li style="margin-bottom:3px">${esc(r)}</li>`).join('')}
          </ul>
          <div style="font-size:11.5px;margin-bottom:4px"><strong>Erreurs fréquentes :</strong> ${esc(act.prof.erreursFrequentes.join(' · '))}</div>
          <div style="font-size:11.5px">
            <strong>LSU :</strong>
            MI : ${esc(act.prof.lsu.MI)} | MF : ${esc(act.prof.lsu.MF)} | MS : ${esc(act.prof.lsu.MS)} | TBM : ${esc(act.prof.lsu.TBM)}
          </div>
        `;
      });
      rightBody.querySelectorAll('[data-delcap]').forEach((b) => {
        b.addEventListener('click', () => {
          caps.splice(Number(b.dataset.delcap), 1);
          ui.captures[act.id] = caps;
          saved.captures = ui.captures;
          saveState(saved);
          renderRight();
        });
      });
    }

    rightBody.querySelectorAll('[data-act]').forEach((b) => {
      b.addEventListener('click', () => {
        ui.actId = b.dataset.act;
        saved.actId = ui.actId;
        saveState(saved);
        renderRight();
      });
    });
  }

  // ---------------- Modales (Capture, Docs complémentaires, Lexique & Sources) ----------------
  const backdrop = document.getElementById('modalBackdrop');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  document.getElementById('modalClose').addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeModal(); });

  function closeModal() {
    backdrop.hidden = true;
    modalBody.innerHTML = '';
    backdrop.querySelector('.modal')?.classList.remove('is-fs-modal');
    const fsBtn = document.getElementById('btnModalFs');
    if (fsBtn) {
      fsBtn.hidden = true;
      fsBtn.textContent = '⛶ Plein écran';
    }
  }

  function openCaptureModal() {
    const imgUrl = ui.microMode && micro ? micro.capturePng() : brain.capturePng();
    const targetActId = ui.actId === 'PROG' ? 'A1' : ui.actId;
    const microStageObj = ui.microMode && micro ? MICRO_STAGES.find((s) => s.id === micro.state.stage) : null;
    const defaultCap = microStageObj
      ? `Micro-Monde · ${microStageObj.title} (${targetActId})`
      : brain.state.isolatedKey && STRUCTURES[brain.state.isolatedKey]
        ? `${STRUCTURES[brain.state.isolatedKey].name} (${targetActId})`
        : `Observation 3D (${targetActId})`;

    modalTitle.textContent = 'Capture 3D · Enregistrer ou télécharger';
    modalBody.innerHTML = `
      <img src="${imgUrl}" alt="Aperçu capture 3D" style="width:100%;border-radius:10px;border:1px solid var(--line);margin-bottom:10px">
      <label class="field-lbl" for="capLegend">Légende / annotation de la capture :</label>
      <input id="capLegend" class="stu-input" value="${esc(defaultCap)}" style="margin-bottom:10px">
      <div class="doc-controls">
        <button type="button" class="btn-primary" id="btnSaveCap">Enregistrer dans la fiche ${esc(targetActId)}</button>
        <a class="btn-ghost" href="${imgUrl}" download="cerveau_${targetActId.toLowerCase()}.png" style="text-decoration:none">Télécharger PNG</a>
      </div>
    `;
    backdrop.hidden = false;

    modalBody.querySelector('#btnSaveCap').addEventListener('click', () => {
      const capText = modalBody.querySelector('#capLegend').value.trim();
      if (!ui.captures[targetActId]) ui.captures[targetActId] = [];
      ui.captures[targetActId].push({ img: imgUrl, caption: capText });
      saved.captures = ui.captures;
      saveState(saved);
      closeModal();
      ui.rightTab = 'activites';
      if (ui.actId === 'PROG') ui.actId = targetActId;
      renderRight();
    });
  }

  function openDocsModal(tab = 'synapse') {
    modalTitle.textContent = 'Documents complémentaires (données sourcées & changements d’échelle)';
    const mHead = backdrop.querySelector('.modal-head');
    const mClose = document.getElementById('modalClose');
    if (mHead && mClose) {
      let btnFs = document.getElementById('btnModalFs');
      if (!btnFs) {
        btnFs = document.createElement('button');
        btnFs.type = 'button';
        btnFs.className = 'pill';
        btnFs.id = 'btnModalFs';
        btnFs.title = 'Afficher les documents en plein écran';
        btnFs.style.marginLeft = 'auto';
        btnFs.style.marginRight = '6px';
        mHead.insertBefore(btnFs, mClose);
        btnFs.addEventListener('click', () => {
          const modalEl = backdrop.querySelector('.modal');
          if (!modalEl) return;
          const next = !modalEl.classList.contains('is-fs-modal');
          modalEl.classList.toggle('is-fs-modal', next);
          btnFs.textContent = next ? '✕ Réduire' : '⛶ Plein écran';
        });
      }
      btnFs.hidden = false;
      btnFs.textContent = '⛶ Plein écran';
    }
    backdrop.querySelector('.modal')?.classList.remove('is-fs-modal');
    modalBody.innerHTML = `
      <div class="seg-row" style="margin-bottom:12px">
        <button type="button" class="seg-btn ${tab === 'audition' ? 'on' : ''}" data-dtab="audition">🎧 Audition (A2)</button>
        <button type="button" class="seg-btn ${tab === 'reflexe' ? 'on' : ''}" data-dtab="reflexe">⚡ Réflexe (A3)</button>
        <button type="button" class="seg-btn ${tab === 'synapse' ? 'on' : ''}" data-dtab="synapse">🔬 Synapse (A4 / DNB)</button>
        <button type="button" class="seg-btn ${tab === 'sommeil' ? 'on' : ''}" data-dtab="sommeil">🌙 Sommeil (A5 / DNB)</button>
        <button type="button" class="seg-btn ${tab === 'recompense' ? 'on' : ''}" data-dtab="recompense">🎯 Récompense (A6)</button>
      </div>
      <div id="docMount"></div>
    `;
    backdrop.hidden = false;

    const mount = (which) => {
      modalBody.querySelectorAll('[data-dtab]').forEach(b => b.classList.toggle('on', b.dataset.dtab === which));
      const target = modalBody.querySelector('#docMount');
      if (which === 'audition') mountAuditionDoc(target);
      else if (which === 'reflexe') mountReflexeDoc(target);
      else if (which === 'synapse') mountSynapseDoc(target);
      else if (which === 'sommeil') mountSommeilDoc(target);
      else mountRecompenseDoc(target);
    };
    modalBody.querySelectorAll('[data-dtab]').forEach(b => b.addEventListener('click', () => mount(b.dataset.dtab)));
    mount(tab);
  }

  function openSourcesModal() {
    modalTitle.textContent = 'Lexique FR↔EN, Bibliothèque A/B/C & Sources ouvertes';
    modalBody.innerHTML = `
      <div class="card">
        <h3 style="margin:0 0 6px;font-family:var(--f-display)">Lexique bilingue FR ↔ EN</h3>
        <table class="data-table">
          <thead><tr><th>Anglais (littérature / ressources)</th><th>Français (programme SVT)</th></tr></thead>
          <tbody>
            ${LEXIQUE.map(([en, fr]) => `<tr><td style="font-family:var(--f-mono)">${esc(en)}</td><td>${esc(fr)}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>

      <div class="card">
        <h3 style="margin:0 0 6px;font-family:var(--f-display)">Bibliothèque scientifique & Niveaux de preuve (EMI)</h3>
        <div class="meta-row" style="margin-bottom:8px">
          ${Object.entries(EVIDENCE_LEVELS).map(([k, v]) => `<span class="badge" style="background:${v.color}22;color:${v.color}" title="${esc(v.desc)}">${esc(v.label)}</span>`).join('')}
        </div>
        ${LIBRARY_ITEMS.map(item => `
          <div style="border-top:1px solid var(--line);padding:7px 0">
            <div style="display:flex;justify-content:space-between;gap:8px;align-items:center">
              <strong>${esc(item.title)}</strong>
              <span class="badge neutral">Niv. ${item.level} · ${item.activite}</span>
            </div>
            <div class="muted" style="font-size:11.5px;margin:2px 0">${esc(item.source)}</div>
            <p style="margin:4px 0 0;font-size:12.5px">${esc(item.summary)}</p>
          </div>
        `).join('')}
      </div>

      <div class="card">
        <h3 style="margin:0 0 6px;font-family:var(--f-display)">Sources des données 3D, IRM & Licences (Faire des sciences)</h3>
        <p style="margin:0 0 6px;font-size:12.5px">Cet atlas autonome est construit à partir de données scientifiques libres et ouvertes :</p>
        <ul style="margin:0;padding-left:18px;font-size:12px">
          <li><strong>Template IRM MNI ICBM152 2009 symétrique</strong> — Copyright © 1993–2009 Louis Collins, McConnell Brain Imaging Centre, Montreal Neurological Institute, McGill University (Fonov et al., 2009/2011).</li>
          <li><strong>Surfaces corticales fsaverage6</strong> — FreeSurfer (Fischl et al., 1999) + <strong>Parcellation de Destrieux</strong> (Destrieux et al., 2010).</li>
          <li><strong>Structures sous-corticales</strong> — Atlas Harvard-Oxford (FSL, Desikan/Makris) + Atlas CIT168 (Pauli et al., 2018) + Talairach / Lancaster 2000 (cervelet).</li>
          <li><strong>Réseaux à grande échelle (Yeo 2011)</strong> — via la parcellation de Schaefer et al. (2018), licence MIT.</li>
          <li><strong>Échelle microscopique (Micro-Monde 3D : cortex, neurone, synapse, potentiel d'action, essaim calcique)</strong> — Reconstructions morphologiques SWC réelles (cellules pyramidales humaines L2/3 & L5 et interneurones Pvalb, Chandelier Vipr2, Martinotti Sst, Vip) issues de l'<strong>Allen Brain Atlas · Cell Types Database</strong> (Allen Institute for Brain Science, licence ouverte / Terms of Use CC BY 4.0).</li>
          <li><strong>Rendu WebGL & Occlusion ambiante</strong> — Three.js (licence MIT) + occlusion ambiante par sommet calculée avec Blender 4.4 Cycles (macro-cerveau & micro-maillages).</li>
          <li><strong>Usage pédagogique uniquement</strong> : inspiration fonctionnelle issue de l'exploration pédagogique du projet <em>The Folded Mind</em> et de la progression multi-échelle <em>What Is a Brain</em>, avec un code et des maillages reconstruits de façon indépendante et en français. Ne constitue pas un outil de diagnostic médical.</li>
        </ul>
      </div>
    `;
    backdrop.hidden = false;
  }

  function printActivity(act) {
    const vObj = ui.voie === 1 ? act.voie1 : act.voie2;
    const caps = ui.captures[act.id] || [];
    const ps = document.getElementById('printSheet');
    ps.innerHTML = `
      <div class="ps-topbar">
        <span><strong>SVT · Cycle 4</strong> · ${esc(act.niveau)} · ${esc(act.type)}</span>
        <span>${esc(act.semaine)} · ${esc(act.duree)} · Voie ${ui.voie}</span>
      </div>
      <div class="ps-identity">
        <span>Nom / Prénom : __________________________</span>
        <span>Classe : ________</span>
        <span>Date : ____ / ____ / 20__</span>
      </div>
      <div class="ps-hero">
        <h1>${esc(act.code)} — ${esc(act.titre)}</h1>
        <div class="ps-meta">Compétences : ${esc(act.lsu.join(' · '))}</div>
      </div>

      <div class="ps-box ps-context">
        <div class="ps-box-lbl">Situation d'ancrage réelle (${esc(act.sourceAccroche)})</div>
        <div>${esc(act.accroche)}</div>
      </div>
      <div class="ps-box ps-problem">
        <div class="ps-box-lbl">Problématique scientifique</div>
        <div><strong>${esc(act.problematique)}</strong></div>
      </div>

      <div class="ps-box ps-vocab">
        <div class="ps-box-lbl">Les mots pour comprendre</div>
        <div class="ps-vocab-grid">
          ${act.vocab.map(v => `<div><strong>${esc(v.term)}</strong> : ${esc(v.def)}</div>`).join('')}
        </div>
      </div>

      <div class="ps-docs">
        ${act.docs.map(d => `
          <div class="ps-doc">
            <div class="ps-doc-head"><span class="ps-doc-num">${esc(d.num)}</span><strong>${esc(d.title)}</strong> <span class="ps-src">(${esc(d.source)})</span></div>
            <p>${esc(d.text)}</p>
            ${d.table ? `<table class="ps-tbl"><thead><tr>${d.table.headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${d.table.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>` : ''}
            <div class="ps-leg">${esc(d.legend)}</div>
          </div>
        `).join('')}
      </div>

      <div class="ps-questions">
        <div class="ps-q-intro"><strong>Travail demandé (Voie ${ui.voie}) :</strong> ${esc(vObj.consigne)} <em>(Connecteurs MDL : ${esc(act.mdl.marqueurs.join(', '))})</em></div>
        ${vObj.fields.map(f => `
          <div class="ps-block">
            <div class="ps-qlbl">${esc(f.label)}</div>
            <div class="ps-ans">${esc(ui.answers[f.id] || '')}</div>
          </div>
        `).join('')}
      </div>

      ${caps.length ? `<div class="ps-block"><strong>Captures 3D annotées :</strong><div class="ps-caps">${caps.map(c => `<div><img src="${c.img}"><div>${esc(c.caption)}</div></div>`).join('')}</div></div>` : ''}

      <div class="ps-box ps-check">
        <div class="ps-box-lbl">Avant de rendre (auto-vérification)</div>
        <ul>${act.avantDeRendre.map(c => `<li>☐ ${esc(c)}</li>`).join('')}</ul>
      </div>

      <div class="ps-box ps-wonder">
        <div class="ps-box-lbl">Trace écrite — Je retiens (${esc(act.notions.join(' · '))})</div>
        <div>${esc(act.traceEcrite)}</div>
      </div>
    `;
    window.print();
  }

  function printProfGuide(act) {
    const ps = document.getElementById('printSheet');
    ps.innerHTML = `
      <div class="ps-topbar">
        <span><strong>GUIDE PROFESSEUR · CORRIGÉ &amp; ÉVALUATION</strong></span>
        <span>${esc(act.code)} · ${esc(act.niveau)} · ${esc(act.duree)}</span>
      </div>
      <div class="ps-hero">
        <h1>Corrigé — ${esc(act.code)} : ${esc(act.titre)}</h1>
        <div class="ps-meta">Sources : ${esc(act.sourceAccroche)}</div>
      </div>

      <div class="ps-box ps-context">
        <div class="ps-box-lbl">Obstacle initial &amp; Rupture didactique</div>
        <div><strong>Conception initiale :</strong> ${esc(act.obstacle)}<br><strong>Rupture :</strong> ${esc(act.rupture)}</div>
      </div>

      <div class="ps-box">
        <div class="ps-box-lbl">Réponses attendues (Parcours guidé &amp; Tâche complexe)</div>
        <ul style="margin:4pt 0 0;padding-left:16pt">
          ${act.prof.corrige.map(r => `<li style="margin-bottom:4pt">${esc(r)}</li>`).join('')}
        </ul>
      </div>

      <div class="ps-box ps-problem">
        <div class="ps-box-lbl">Barème &amp; Maîtrise de la langue (MDL)</div>
        <div><strong>Barème :</strong> ${esc(act.prof.bareme)}<br><strong>Critères MDL :</strong> ${esc(act.mdl.structure)} · Mots-clés : ${esc(act.mdl.marqueurs.join(', '))}</div>
      </div>

      <div class="ps-box">
        <div class="ps-box-lbl">Erreurs fréquentes à anticiper</div>
        <ul style="margin:4pt 0 0;padding-left:16pt">${act.prof.erreursFrequentes.map(e => `<li>${esc(e)}</li>`).join('')}</ul>
      </div>

      <table class="ps-tbl" style="margin-top:8pt">
        <thead><tr><th>Niveau LSU</th><th>Descripteur de maîtrise</th></tr></thead>
        <tbody>
          <tr><td><strong>MI</strong> (Maîtrise insuffisante)</td><td>${esc(act.prof.lsu.MI)}</td></tr>
          <tr><td><strong>MF</strong> (Maîtrise fragile)</td><td>${esc(act.prof.lsu.MF)}</td></tr>
          <tr><td><strong>MS</strong> (Maîtrise satisfaisante)</td><td>${esc(act.prof.lsu.MS)}</td></tr>
          <tr><td><strong>TBM</strong> (Très bonne maîtrise)</td><td>${esc(act.prof.lsu.TBM)}</td></tr>
        </tbody>
      </table>
    `;
    window.print();
  }

  // Premier rendu
  renderLeft();
  renderRight();
});
