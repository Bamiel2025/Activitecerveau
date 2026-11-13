// Documents complémentaires interactifs (changements d'échelle, protocoles & données sourcées)
// Complètent l'atlas cérébral 3D MNI152 pour les activités A2, A3, A4, A5, A6 et DNB 3.

// ============================================================================
// 1. AUDITION & BRUIT (Activité A2 — OMS, DNB Amérique du Nord 2018 & DNB Pro 2022)
// ============================================================================
export function mountAuditionDoc(container) {
  let dbLevel = 85; // 85 | 100 | 110 | 120

  const dbInfo = {
    85: { ex: 'Trafic dense · Seuil de risque OMS', rule: 'Durée repère : ~8 h max sans protection ; au-delà, risque cumulatif pour les cellules ciliées.', color: '#d99b00' },
    100: { ex: 'Écouteurs volume élevé', rule: '+15 dB (+5 paliers de +3 dB → temps toléré ÷ 32) : risque en ~15 minutes.', color: '#e67e22' },
    110: { ex: 'Concert / boîte / casque au max', rule: '+25 dB au-dessus du seuil de risque : danger grave en quelques minutes sans bouchons.', color: '#e4572e' },
    120: { ex: 'Seuil de douleur (sirène, enceinte)', rule: 'Lésions mécaniques et destruction irréversible immédiate des cellules ciliées.', color: '#b82424' },
  };

  function render() {
    const info = dbInfo[dbLevel];
    // Audiogramme DNB Amérique du Nord 2018 : x = fréquences [125, 250, 500, 1000, 2000, 4000] Hz
    // Valeurs conformes à la description DNB : seuil normal < 20 dB ; témoin 60 ans ~ 5 dB à 1000 Hz ;
    // M. X proche témoin dans les graves (125-500 Hz) puis ~30 dB à 1000 Hz, aggravé vers 2000-4000 Hz.
    const freqs = ['125 Hz', '250 Hz', '500 Hz', '1000 Hz', '2000 Hz', '4000 Hz'];
    const xs = [70, 150, 230, 310, 390, 470];
    const toY = db => 24 + (db / 60) * 126; // 0 dB en haut -> 60 dB en bas (audiogramme clinique)
    const temoinPts = [10, 10, 8, 5, 10, 15];
    const mxPts = [12, 14, 18, 30, 42, 48];
    const polyT = xs.map((x, i) => `${x},${toY(temoinPts[i]).toFixed(1)}`).join(' ');
    const polyM = xs.map((x, i) => `${x},${toY(mxPts[i]).toFixed(1)}`).join(' ');

    container.innerHTML = `
      <div class="doc-card">
        <div class="doc-head">
          <div>
            <span class="badge-scale">Activité A2 · OMS · DNB Amérique du Nord 2018 &amp; DNB Pro 2022</span>
            <h3>Audiogramme clinique &amp; règle physique du +3 dB</h3>
          </div>
          <div class="doc-controls">
            ${[85, 100, 110, 120].map(v => `<button type="button" class="pill ${dbLevel === v ? 'on' : ''}" data-db="${v}">${v} dB</button>`).join('')}
          </div>
        </div>

        <p class="doc-note" style="margin:0 0 8px;border-left:4px solid ${info.color}">
          <strong>${dbLevel} dB (${info.ex}) :</strong> ${info.rule}
        </p>

        <svg viewBox="0 0 530 185" class="sci-svg" role="img" aria-label="Audiogramme comparant témoin 60 ans et M. X chaudronnier">
          <!-- Zones normal (<20 dB) vs perte -->
          <rect x="52" y="24" width="446" height="${toY(20) - 24}" fill="rgba(29,154,108,0.10)"/>
          <line x1="52" y1="${toY(20)}" x2="498" y2="${toY(20)}" stroke="#1d9a6c" stroke-width="1.6" stroke-dasharray="5 3"/>
          <text x="494" y="${toY(20) - 4}" text-anchor="end" class="svg-tag" fill="#1d9a6c">Seuil normal (&lt; 20 dB de perte)</text>

          <!-- Axes et graduations -->
          <line x1="52" y1="24" x2="52" y2="152" stroke="var(--fg-3)" stroke-width="1.4"/>
          <line x1="52" y1="24" x2="498" y2="24" stroke="var(--fg-3)" stroke-width="1.2"/>
          ${[0, 10, 20, 30, 40, 50].map(d => `
            <text x="46" y="${toY(d) + 3}" text-anchor="end" class="svg-sub">${d}</text>
            <line x1="52" y1="${toY(d)}" x2="498" y2="${toY(d)}" stroke="var(--line)" stroke-width="0.6"/>
          `).join('')}
          <text x="12" y="92" transform="rotate(-90 12 92)" text-anchor="middle" class="svg-sub">Perte auditive (dB)</text>

          ${xs.map((x, i) => `
            <line x1="${x}" y1="24" x2="${x}" y2="152" stroke="var(--line)" stroke-width="0.6"/>
            <text x="${x}" y="168" text-anchor="middle" class="svg-sub">${freqs[i]}</text>
          `).join('')}

          <!-- Courbe témoin 60 ans -->
          <polyline fill="none" stroke="#1d9a6c" stroke-width="2.6" points="${polyT}"/>
          ${xs.map((x, i) => `<circle cx="${x}" cy="${toY(temoinPts[i])}" r="3.8" fill="#1d9a6c"/>`).join('')}
          <text x="310" y="${toY(5) - 6}" text-anchor="middle" class="svg-tag" fill="#1d9a6c">Témoin (~5 dB à 1000 Hz)</text>

          <!-- Courbe M. X -->
          <polyline fill="none" stroke="#e4572e" stroke-width="2.6" points="${polyM}"/>
          ${xs.map((x, i) => `<circle cx="${x}" cy="${toY(mxPts[i])}" r="4" fill="#e4572e"/>`).join('')}
          <text x="322" y="${toY(30) + 14}" text-anchor="start" class="svg-tag" fill="#e4572e">M. X (~30 dB à 1000 Hz, chute aigus)</text>
        </svg>

        <p class="doc-note">
          <strong>Lecture DNB :</strong> dans les sons graves (125–500 Hz), M. X reste sous les 20 dB. À 1 000 Hz et dans les aigus (2 000–4 000 Hz), ses <strong>cellules ciliées</strong> (non renouvelables) ont été détruites par le bruit répété.
        </p>
      </div>
    `;

    container.querySelectorAll('[data-db]').forEach(b => {
      b.addEventListener('click', () => { dbLevel = Number(b.dataset.db); render(); });
    });
  }
  render();
}

// ============================================================================
// 2. RÉFLEXE, MOUVEMENT VOLONTAIRE & SÉCURITÉ ROUTIÈRE (Activité A3)
// ============================================================================
export function mountReflexeDoc(container) {
  let circuitMode = 'reflexe'; // reflexe | volontaire
  let reactState = 'idle'; // idle | wait | go
  let goAt = 0;
  let waitTimer = null;
  const times = [];

  function renderCircuit() {
    const isVol = circuitMode === 'volontaire';
    container.innerHTML = `
      <div class="doc-card">
        <div class="doc-head">
          <div>
            <span class="badge-scale">Activité A3 · Sécurité routière France &amp; protocole classe</span>
            <h3>Comparer réflexe médullaire et mouvement volontaire</h3>
          </div>
          <div class="doc-controls">
            <button type="button" class="pill ${!isVol ? 'on' : ''}" data-cmode="reflexe">1. Réflexe (moelle épinière)</button>
            <button type="button" class="pill ${isVol ? 'on' : ''}" data-cmode="volontaire">2. Freinage volontaire (cerveau)</button>
          </div>
        </div>

        <svg viewBox="0 0 540 200" class="sci-svg" role="img" aria-label="Comparaison trajet nerveux réflexe vs mouvement volontaire">
          <defs>
            <marker id="arrRef" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,1 L8,5 L0,9 z" fill="currentColor"/>
            </marker>
          </defs>

          <!-- Cerveau -->
          <rect x="200" y="14" width="160" height="44" rx="12"
                fill="${isVol ? 'rgba(106,63,176,0.20)' : 'rgba(128,140,160,0.08)'}"
                stroke="${isVol ? '#6a3fb0' : 'var(--fg-3)'}" stroke-width="${isVol ? 2.4 : 1.3}"/>
          <text x="280" y="34" text-anchor="middle" class="svg-lbl">Cerveau (Cortex visuel → moteur)</text>
          <text x="280" y="49" text-anchor="middle" class="svg-sub">${isVol ? 'Intégration consciente indispensable (~0,25 à 1 s)' : 'Informé APRÈS l’ordre réflexe'}</text>

          <!-- Moelle épinière -->
          <rect x="205" y="102" width="150" height="58" rx="10" fill="rgba(63,182,255,0.14)" stroke="#3fb6ff" stroke-width="2.2"/>
          <text x="280" y="126" text-anchor="middle" class="svg-lbl">Moelle épinière</text>
          <text x="280" y="143" text-anchor="middle" class="svg-sub">${isVol ? 'Relais descendant vers les nerfs' : 'Centre nerveux du réflexe court'}</text>

          <!-- Capteur -->
          <rect x="22" y="108" width="110" height="46" rx="8" fill="rgba(29,154,108,0.16)" stroke="#1d9a6c" stroke-width="2"/>
          <text x="77" y="128" text-anchor="middle" class="svg-lbl">${isVol ? 'Œil (danger)' : 'Peau (chaleur)'}</text>
          <text x="77" y="143" text-anchor="middle" class="svg-sub">Récepteur sensoriel</text>

          <!-- Muscle -->
          <rect x="408" y="108" width="110" height="46" rx="8" fill="rgba(228,87,46,0.16)" stroke="#e4572e" stroke-width="2"/>
          <text x="463" y="128" text-anchor="middle" class="svg-lbl">Muscle</text>
          <text x="463" y="143" text-anchor="middle" class="svg-sub">${isVol ? 'Pied sur le frein' : 'Retrait de la main'}</text>

          ${!isVol ? `
            <!-- Boucle courte réflexe -->
            <path d="M134,124 L201,124" stroke="#1d9a6c" stroke-width="3" marker-end="url(#arrRef)" style="color:#1d9a6c"/>
            <text x="167" y="114" text-anchor="middle" class="svg-tag" fill="#1d9a6c">Nerf sensitif</text>
            <path d="M358,136 L403,136" stroke="#e4572e" stroke-width="3" marker-end="url(#arrRef)" style="color:#e4572e"/>
            <text x="380" y="168" text-anchor="middle" class="svg-tag" fill="#e4572e">Nerf moteur</text>
            <path d="M280,100 L280,62" stroke="var(--fg-3)" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#arrRef)" style="color:var(--fg-3)"/>
          ` : `
            <!-- Boucle longue volontaire -->
            <path d="M84,106 Q110,40 195,38" fill="none" stroke="#1d9a6c" stroke-width="2.8" marker-end="url(#arrRef)" style="color:#1d9a6c"/>
            <text x="112" y="54" text-anchor="middle" class="svg-tag" fill="#1d9a6c">Nerf optique</text>
            <path d="M280,60 L280,98" stroke="#6a3fb0" stroke-width="2.8" marker-end="url(#arrRef)" style="color:#6a3fb0"/>
            <path d="M358,136 L403,136" stroke="#e4572e" stroke-width="3" marker-end="url(#arrRef)" style="color:#e4572e"/>
            <text x="380" y="168" text-anchor="middle" class="svg-tag" fill="#e4572e">Nerf moteur</text>
          `}
        </svg>

        <table class="data-table" style="margin-top:8px">
          <thead><tr><th>Situation (Sécurité routière France)</th><th>Temps de réaction</th><th>Distance avant freinage / Risque</th></tr></thead>
          <tbody>
            <tr><td>Conducteur sobre et attentif</td><td><strong>~1 s</strong></td><td>15 m à 50 km/h · 24 m à 80 km/h</td></tr>
            <tr><td>Appel téléphonique</td><td><strong>+46 %</strong></td><td>Risque d’accident <strong>×3</strong></td></tr>
            <tr><td>Lire / écrire un SMS (~5 s)</td><td><strong>+37 %</strong></td><td><strong>70 à 83 m</strong> « à l’aveugle » à 50 km/h · <strong>×23</strong></td></tr>
            <tr><td>Alcoolémie positive</td><td><strong>+13 % minimum</strong></td><td>Ralentissement cérébral global</td></tr>
          </tbody>
        </table>

        <div class="react-box">
          <h4>Mesure expérimentale en classe : chronomètre de mouvement volontaire (test de la règle)</h4>
          <p class="muted" style="margin:2px 0 8px;font-size:12px">Clique sur « Démarrer », puis clique dès que le bouton passe au VERT (temps œil → cortex visuel → cortex moteur → doigt).</p>
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
            <button type="button" class="btn-primary" id="btnReactStart">Démarrer un essai</button>
            <button type="button" class="react-pad" id="btnReactCatch" disabled>En attente…</button>
            <button type="button" class="btn-ghost" id="btnReactReset">Effacer (${times.length})</button>
          </div>
          <div class="react-stats" id="reactStats"></div>
        </div>
      </div>
    `;

    container.querySelectorAll('[data-cmode]').forEach(b => {
      b.addEventListener('click', () => { circuitMode = b.dataset.cmode; renderCircuit(); });
    });

    const btnStart = container.querySelector('#btnReactStart');
    const btnCatch = container.querySelector('#btnReactCatch');
    const btnReset = container.querySelector('#btnReactReset');
    const statsEl = container.querySelector('#reactStats');

    function updateStats(msg = '') {
      const avg = times.length ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : 0;
      const dist50 = times.length ? ((50 / 3.6) * (avg / 1000)).toFixed(1) : '—';
      btnReset.textContent = `Effacer (${times.length})`;
      statsEl.innerHTML = `
        ${msg ? `<span class="badge">${msg}</span>` : ''}
        <span>Essais : <strong>${times.length ? times.map(t => `${t} ms`).join(', ') : '—'}</strong></span>
        <span>Moyenne : <strong>${avg ? `${avg} ms (${dist50} m à 50 km/h)` : '—'}</strong></span>
      `;
    }

    btnStart.addEventListener('click', () => {
      clearTimeout(waitTimer);
      reactState = 'wait';
      btnCatch.disabled = false;
      btnCatch.classList.remove('ready');
      btnCatch.textContent = 'Attends le VERT…';
      waitTimer = setTimeout(() => {
        reactState = 'go';
        goAt = performance.now();
        btnCatch.classList.add('ready');
        btnCatch.textContent = 'CLIQUE MAINTENANT !';
      }, 1100 + Math.random() * 1900);
    });

    btnCatch.addEventListener('click', () => {
      if (reactState === 'wait') {
        clearTimeout(waitTimer);
        reactState = 'idle';
        btnCatch.disabled = true;
        btnCatch.textContent = 'Trop tôt !';
        updateStats('Faux départ (anticipation)');
      } else if (reactState === 'go') {
        const dt = Math.round(performance.now() - goAt);
        times.push(dt);
        reactState = 'idle';
        btnCatch.disabled = true;
        btnCatch.classList.remove('ready');
        btnCatch.textContent = `${dt} ms`;
        updateStats(`Mesure enregistrée : ${dt} ms`);
      }
    });

    btnReset.addEventListener('click', () => {
      clearTimeout(waitTimer);
      times.length = 0;
      reactState = 'idle';
      renderCircuit();
    });

    updateStats();
  }

  renderCircuit();
}

// ============================================================================
// 3. SYNAPSE CHIMIQUE (~20 nm) & CURARE / AGONISTE (Activité A4 & DNB 3)
// ============================================================================
export function mountSynapseDoc(container) {
  let mode = 'normal'; // normal | block | mimic
  let target = 'muscle'; // muscle | neurone
  let quizMode = false;
  let pickedLabel = null;
  const placed = {};

  const labels = [
    { id: 'pre', text: 'Élément présynaptique', x: 108, y: 55 },
    { id: 'vesicule', text: 'Vésicule synaptique', x: 192, y: 112 },
    { id: 'fente', text: 'Fente synaptique (~20 nm)', x: 262, y: 38 },
    { id: 'nt', text: 'Neurotransmetteur', x: 262, y: 158 },
    { id: 'rec', text: 'Récepteur spécifique', x: 374, y: 74 },
    { id: 'post', text: 'Élément postsynaptique', x: 432, y: 55 },
  ];

  function render() {
    const isBlock = mode === 'block';
    const isMimic = mode === 'mimic';
    const postLabel = target === 'muscle' ? 'Fibre musculaire (jonction neuromusculaire)' : 'Neurone postsynaptique';
    const statusText = isBlock
      ? 'Blocage type curare (Claude Bernard, 1856) / anesthésique : la molécule X occupe les récepteurs sans les activer → aucun message transmis malgré nerf et muscle intacts.'
      : isMimic
      ? 'Molécule Y (mimétique / agoniste) : imite la forme du neurotransmetteur naturel et active directement les récepteurs.'
      : 'Transmission normale (Cajal, Nobel 1906) : le message électrique déclenche l’ouverture des vésicules ; les neurotransmetteurs traversent la fente (~20 nm) de façon UNIDIRECTIONNELLE.';

    const responseActive = !isBlock;
    const responseLabel = target === 'muscle'
      ? (responseActive ? 'Contraction musculaire' : 'Paralysie (message bloqué)')
      : (responseActive ? 'Nouveau message nerveux' : 'Aucun message transmis');

    container.innerHTML = `
      <div class="doc-card">
        <div class="doc-head">
          <div>
            <span class="badge-scale">Activité A4 &amp; DNB 3 · Échelle ~20 nm (Cajal 1906 / Claude Bernard 1856)</span>
            <h3>La synapse chimique (${target === 'muscle' ? 'neurone → muscle' : 'neurone → neurone'})</h3>
          </div>
          <div class="doc-controls">
            <button type="button" class="pill ${target === 'muscle' ? 'on' : ''}" data-target="muscle">Neurone–Muscle</button>
            <button type="button" class="pill ${target === 'neurone' ? 'on' : ''}" data-target="neurone">Neurone–Neurone</button>
            <button type="button" class="pill ${quizMode ? 'on' : ''}" data-quiz="1">${quizMode ? 'Quitter quiz légende' : 'Quiz légende (DNB)'}</button>
          </div>
        </div>

        <div class="doc-controls" style="margin-bottom:8px">
          <button type="button" class="pill ${mode === 'normal' ? 'on' : ''}" data-mode="normal">1. Normal</button>
          <button type="button" class="pill ${mode === 'block' ? 'on' : ''}" data-mode="block">2. Curare / Molécule X (bloquante)</button>
          <button type="button" class="pill ${mode === 'mimic' ? 'on' : ''}" data-mode="mimic">3. Molécule Y (mimétique)</button>
        </div>

        ${quizMode ? `
          <div class="quiz-bank">
            <span class="muted">Clique sur une étiquette puis sur la pastille correspondante sur le schéma :</span>
            <div class="quiz-chips">
              ${labels.map(l => {
                const ok = placed[l.id] === l.id;
                return `<button type="button" class="qchip ${pickedLabel === l.id ? 'sel' : ''} ${ok ? 'done' : ''}" data-pick="${l.id}">${l.text}${ok ? ' ✓' : ''}</button>`;
              }).join('')}
            </div>
          </div>
        ` : ''}

        <svg viewBox="0 0 540 235" class="sci-svg" role="img" aria-label="Schéma fonctionnel de la synapse chimique">
          <defs>
            <linearGradient id="synPre" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#3a6ea5" stop-opacity="0.25"/>
              <stop offset="100%" stop-color="#3a6ea5" stop-opacity="0.55"/>
            </linearGradient>
            <linearGradient id="synPost" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="${target === 'muscle' ? '#c9624a' : '#6a3fb0'}" stop-opacity="0.5"/>
              <stop offset="100%" stop-color="${target === 'muscle' ? '#c9624a' : '#6a3fb0'}" stop-opacity="0.22"/>
            </linearGradient>
            <marker id="arrSyn" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,1 L8,5 L0,9 z" fill="currentColor"/>
            </marker>
          </defs>

          <rect x="236" y="45" width="54" height="145" rx="6" fill="rgba(128,150,190,0.08)" stroke="rgba(128,150,190,0.28)" stroke-dasharray="4 3"/>

          <path d="M12,92 L130,92 Q185,55 232,68 Q242,120 232,172 Q185,185 130,148 L12,148 Z"
                fill="url(#synPre)" stroke="#4c8fd6" stroke-width="2.2"/>
          <text x="20" y="198" class="svg-sub">Sens unidirectionnel →</text>
          <path d="M24,120 L118,120" stroke="#ffd23f" stroke-width="3.5" marker-end="url(#arrSyn)" style="color:#ffd23f"/>
          <text x="20" y="110" class="svg-tag" fill="#d99b00">Message électrique</text>

          <circle cx="165" cy="100" r="14" fill="rgba(63,182,255,0.22)" stroke="#3fb6ff" stroke-width="1.8"/>
          <circle cx="161" cy="97" r="3" fill="#3fb6ff"/><circle cx="169" cy="103" r="3" fill="#3fb6ff"/>
          <circle cx="195" cy="128" r="14" fill="rgba(63,182,255,0.22)" stroke="#3fb6ff" stroke-width="1.8"/>
          <circle cx="192" cy="125" r="3" fill="#3fb6ff"/><circle cx="199" cy="131" r="3" fill="#3fb6ff"/>

          ${!isMimic ? `
            <g class="nt-float">
              <circle cx="250" cy="96" r="4.2" fill="#3fb6ff"/>
              <circle cx="264" cy="120" r="4.2" fill="#3fb6ff"/>
              <circle cx="252" cy="144" r="4.2" fill="#3fb6ff"/>
              <circle cx="274" cy="106" r="4.2" fill="#3fb6ff"/>
              <circle cx="272" cy="135" r="4.2" fill="#3fb6ff"/>
            </g>
          ` : `
            <g class="nt-float">
              <polygon points="256,88 262,98 250,98" fill="#2bb673"/>
              <polygon points="274,116 280,126 268,126" fill="#2bb673"/>
              <polygon points="260,142 266,152 254,152" fill="#2bb673"/>
            </g>
          `}

          <path d="M294,68 Q340,56 392,84 L528,84 L528,158 L392,158 Q340,186 294,172 Q284,120 294,68 Z"
                fill="url(#synPost)" stroke="${target === 'muscle' ? '#d96b52' : '#8b63d9'}" stroke-width="2.2"/>
          <text x="415" y="198" text-anchor="middle" class="svg-sub">${postLabel}</text>

          ${[86, 120, 152].map(ry => `
            <path d="M286,${ry - 7} L298,${ry - 7} L298,${ry + 7} L286,${ry + 7}" fill="none" stroke="#e2a832" stroke-width="3"/>
            ${isBlock ? `<rect x="280" y="${ry - 5}" width="11" height="10" rx="2" fill="#e4572e"/>`
              : isMimic ? `<polygon points="282,${ry} 292,${ry - 5} 292,${ry + 5}" fill="#2bb673"/>`
              : `<circle cx="288" cy="${ry}" r="4.5" fill="#3fb6ff"/>`}
          `).join('')}

          <path d="M370,120 L488,120" stroke="${responseActive ? '#2bb673' : '#e4572e'}" stroke-width="3.5"
                stroke-dasharray="${responseActive ? 'none' : '5 5'}" marker-end="url(#arrSyn)"
                style="color:${responseActive ? '#2bb673' : '#e4572e'}"/>
          <text x="366" y="109" class="svg-tag" fill="${responseActive ? '#1b8a54' : '#c0392b'}">${responseLabel}</text>

          ${labels.map((l, idx) => {
            if (!quizMode) {
              return `<g>
                <rect x="${l.x - 65}" y="${l.y - 11}" width="142" height="18" rx="4" fill="var(--surface-solid)" stroke="var(--line)"/>
                <text x="${l.x + 6}" y="${l.y + 1}" text-anchor="middle" class="svg-lbl">${l.text}</text>
              </g>`;
            }
            const ok = placed[l.id] === l.id;
            return `<g class="svg-slot" data-slot="${l.id}" style="cursor:pointer">
              <circle cx="${l.x}" cy="${l.y}" r="11" fill="${ok ? '#2bb673' : 'var(--accent)'}"/>
              <text x="${l.x}" y="${l.y + 4}" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">${ok ? '✓' : idx + 1}</text>
            </g>`;
          }).join('')}
        </svg>

        <p class="doc-note ${isBlock ? 'warn' : ''}">${statusText}</p>
      </div>
    `;

    container.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => { mode = b.dataset.mode; render(); }));
    container.querySelectorAll('[data-target]').forEach(b => b.addEventListener('click', () => { target = b.dataset.target; render(); }));
    container.querySelector('[data-quiz]')?.addEventListener('click', () => { quizMode = !quizMode; pickedLabel = null; render(); });
    container.querySelectorAll('[data-pick]').forEach(b => b.addEventListener('click', () => { pickedLabel = b.dataset.pick; render(); }));
    container.querySelectorAll('[data-slot]').forEach(g => g.addEventListener('click', () => {
      if (!pickedLabel) return;
      if (pickedLabel === g.dataset.slot) {
        placed[g.dataset.slot] = pickedLabel;
        pickedLabel = null;
      } else {
        g.querySelector('circle')?.setAttribute('fill', '#e4572e');
      }
      render();
    }));
  }
  render();
}

// ============================================================================
// 4. SOMMEIL, ÉCRANS & MÉMOIRE (Activité A5 & DNB 3 — EnCLASS 2024, ANSES 2026, Gais/Born)
// ============================================================================
export function mountSommeilDoc(container) {
  let viewTab = 'enclass'; // enclass | protocole

  function render() {
    const isProto = viewTab === 'protocole';
    container.innerHTML = `
      <div class="doc-card">
        <div class="doc-head">
          <div>
            <span class="badge-scale">Activité A5 &amp; DNB 3 · EnCLASS 2024 · ANSES (13 janv. 2026) · Gais &amp; Born</span>
            <h3>Sommeil, smartphones et consolidation de la mémoire</h3>
          </div>
          <div class="doc-controls">
            <button type="button" class="pill ${!isProto ? 'on' : ''}" data-stab="enclass">1. Enquêtes France (2024–2026)</button>
            <button type="button" class="pill ${isProto ? 'on' : ''}" data-stab="protocole">2. Expérience Gais &amp; Born + H.M.</button>
          </div>
        </div>

        ${!isProto ? `
          <p style="margin:0 0 8px"><strong>Besoin physiologique au collège : 8 à 9 h par nuit.</strong> Durée moyenne mesurée en semaine (<em>EnCLASS 2024</em>) : <strong>8 h 16 min</strong>.</p>
          <svg viewBox="0 0 520 165" class="sci-svg" role="img" aria-label="Données officielles EnCLASS 2024 et ANSES 2026">
            <!-- EnCLASS 2024 -->
            <text x="14" y="20" class="svg-tag" fill="var(--accent)">EnCLASS 2024 — Collégiens (OFDT / Santé publique France)</text>
            ${[
              { lbl: 'Dorment moins de 7 h / nuit', val: 13.8, col: '#e67e22', y: 34 },
              { lbl: 'En dette de sommeil (> 2 h le week-end)', val: 26.7, col: '#e4572e', y: 58 },
              { lbl: 'Fatigués presque tous les matins', val: 30.6, col: '#c0392b', y: 82 },
            ].map(r => `
              <text x="14" y="${r.y + 12}" class="svg-sub">${r.lbl}</text>
              <rect x="250" y="${r.y}" width="${(r.val / 100) * 215}" height="16" rx="4" fill="${r.col}"/>
              <text x="${256 + (r.val / 100) * 215}" y="${r.y + 12}" class="svg-lbl">${String(r.val).replace('.', ',')} %</text>
            `).join('')}

            <!-- ANSES 2026 -->
            <text x="14" y="120" class="svg-tag" fill="#1d9a6c">ANSES (avis du 13 janv. 2026) — Jeunes de 12–17 ans</text>
            ${[
              { lbl: 'Consultent les réseaux sociaux chaque jour', val: 58.0, col: '#6a3fb0', y: 132 },
              { lbl: 'Passent 2 à 5 h/jour sur smartphone', val: 42.0, col: '#3a6ea5', y: 156 },
            ].map(r => `
              <text x="14" y="${r.y + 2}" class="svg-sub">${r.lbl}</text>
              <rect x="250" y="${r.y - 10}" width="${(r.val / 100) * 215}" height="15" rx="4" fill="${r.col}"/>
              <text x="${256 + (r.val / 100) * 215}" y="${r.y + 2}" class="svg-lbl">${r.val.toFixed(0)} % (et 9 % &gt; 5 h/j)</text>
            `).join('')}
          </svg>
          <p class="doc-note"><strong>Méthode (DNB) :</strong> ces enquêtes décrivent une situation fréquente ; pour prouver que le sommeil cause la consolidation, il faut une expérience contrôlée (onglet 2).</p>
        ` : `
          <table class="data-table">
            <thead>
              <tr><th>Étude scientifique</th><th>Protocole / Observation</th><th>Conclusion validée</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Gais, Lucas &amp; Born (2006)</strong><br><em>Learning &amp; Memory</em></td>
                <td>2 groupes comparables apprennent des paires de mots : le <strong>groupe Sommeil</strong> dort juste après ; le <strong>groupe Éveil</strong> attend la même durée réveillé avant d'être testé.</td>
                <td>Le sommeil suivant immédiatement l'apprentissage consolide activement le rappel et protège contre l'oubli/interférence.</td>
              </tr>
              <tr>
                <td><strong>Patient H.M. (Scoville &amp; Milner, 1957)</strong></td>
                <td>Retrait des deux <strong>hippocampes</strong> : aucun nouveau souvenir conscient, mais progression conservée au dessin en miroir.</td>
                <td>Mémoires multiples : <strong>hippocampe + cortex</strong> (savoirs/leçons) vs <strong>cervelet + striatum</strong> (gestes).</td>
              </tr>
            </tbody>
          </table>
          <p class="doc-note"><strong>Mécanisme cellulaire :</strong> durant le sommeil, l'hippocampe réactive les réseaux de synapses formés le jour, stabilisant la trace mnésique dans le cortex.</p>
        `}
      </div>
    `;

    container.querySelectorAll('[data-stab]').forEach(b => {
      b.addEventListener('click', () => { viewTab = b.dataset.stab; render(); });
    });
  }
  render();
}

// ============================================================================
// 5. RÉCOMPENSE, PUFFS & ADDICTION (Activité A6 — Lelivrescolaire Doc. 8 & EnCLASS 2024)
// ============================================================================
export function mountRecompenseDoc(container) {
  let showPrefrontal = true;

  const bars = [
    { lbl: 'Manger (besoin vital)', val: 88, col: '#1d9a6c' },
    { lbl: 'Boire (besoin vital)', val: 88, col: '#2bb673' },
    { lbl: 'Obtenir une bonne note', val: 52, col: '#3a6ea5' },
    { lbl: 'Rédiger une punition', val: 3, col: '#7f8c8d' },
    { lbl: 'Addiction à un jeu', val: 82, col: '#e4572e' },
  ];

  function render() {
    container.innerHTML = `
      <div class="doc-card">
        <div class="doc-head">
          <div>
            <span class="badge-scale">Activité A6 · Lelivrescolaire.fr SVT 3e (Doc. 8) &amp; EnCLASS 2024 / Loi fév. 2025</span>
            <h3>Dopamine dans le circuit de la récompense &amp; maturation du contrôle</h3>
          </div>
          <button type="button" class="pill ${showPrefrontal ? 'on' : ''}" id="btnTogglePfc">${showPrefrontal ? 'Masquer note préfrontale' : 'Afficher note ado'}</button>
        </div>

        <svg viewBox="0 0 520 165" class="sci-svg" role="img" aria-label="Libération relative de dopamine en unité arbitraire">
          <text x="14" y="20" class="svg-tag" fill="var(--fg)">Libération relative de dopamine (Unité arbitraire / 100 — d’après Lelivrescolaire Doc. 8)</text>
          ${bars.map((b, i) => {
            const y = 34 + i * 25;
            return `
              <text x="14" y="${y + 13}" class="svg-sub">${b.lbl}</text>
              <rect x="210" y="${y + 2}" width="${(b.val / 100) * 245}" height="15" rx="4" fill="${b.col}"/>
              <text x="${216 + (b.val / 100) * 245}" y="${y + 13}" class="svg-lbl">~${b.val} UA</text>
            `;
          }).join('')}
        </svg>

        <table class="data-table" style="margin-top:8px">
          <thead><tr><th>Indicateur santé publique</th><th>Mesure officielle</th><th>Source</th></tr></thead>
          <tbody>
            <tr><td>Tabac fumé au collège</td><td><strong>7,7 %</strong> d'expérimentation · <strong>0,9 %</strong> quotidien</td><td>EnCLASS 2024</td></tr>
            <tr><td>Vapotage au lycée / puffs</td><td>Près de <strong>46 %</strong> d'expérimentation au lycée → <strong>puffs interdites</strong></td><td>EnCLASS 2024 · Loi 24 fév. 2025</td></tr>
          </tbody>
        </table>

        ${showPrefrontal ? `
          <p class="doc-note warn">
            <strong>Pourquoi les adolescents sont-ils plus vulnérables ?</strong> Le noyau accumbens répond déjà très fortement aux pics artificiels (nicotine des puffs, boucles de récompense aléatoire), tandis que le <strong>cortex préfrontal</strong> (frein, évaluation des risques) poursuit sa maturation jusqu'à ~25 ans.
          </p>
        ` : ''}
      </div>
    `;
    container.querySelector('#btnTogglePfc')?.addEventListener('click', () => { showPrefrontal = !showPrefrontal; render(); });
  }
  render();
}
