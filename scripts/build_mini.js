// Script de build des 8 applications autonomes A1..A8 (Cycle 4 SVT)
// - Extrait les données pédagogiques de src/pedagogie.js
// - Chiffre la correction et le bilan (clé 2027) dans src/generated_mini_payload.js
// - Empaquette docs/activites/mini_app.js + mini.css
// - Génère docs/activites/a1.html..a8.html, docs/activites/vision.html, drogues.html et index.html

const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'docs', 'activites');
const LOCK_KEY = '2027';

function encryptJson(obj, keyStr) {
  const data = Buffer.from(JSON.stringify(obj), 'utf8');
  const key = Buffer.from(keyStr, 'utf8');
  const out = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i++) {
    out[i] = data[i] ^ key[i % key.length];
  }
  return out.toString('base64');
}

function escHtml(s) {
  return String(s ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function loadActivities() {
  const pedPath = path.join(ROOT, 'src', 'pedagogie.js');
  const compiled = esbuild.buildSync({
    entryPoints: [pedPath],
    bundle: false,
    format: 'cjs',
    write: false,
  });
  const mod = { exports: {} };
  new Function('module', 'exports', compiled.outputFiles[0].text)(mod, mod.exports);
  return mod.exports.ACTIVITIES.filter((a) => /^A[1-8]$/.test(a.id));
}

function buildPayload(acts) {
  const publicActs = {};
  const lockedB64 = {};

  for (const a of acts) {
    publicActs[a.id] = {
      id: a.id,
      code: a.code,
      niveau: a.niveau,
      semaine: a.semaine,
      duree: a.duree,
      titre: a.titre,
      type: a.type,
      accroche: a.accroche,
      sourceAccroche: a.sourceAccroche,
      problematique: a.problematique,
      obstacle: a.obstacle,
      rupture: a.rupture,
      vocab: a.vocab,
      docs: a.docs,
      voie1: a.voie1,
      voie2: a.voie2,
      mdl: a.mdl,
      coupsDePouce: a.coupsDePouce,
      avantDeRendre: a.avantDeRendre,
      lsu: a.lsu,
    };

    lockedB64[a.id] = encryptJson(
      {
        traceEcrite: a.traceEcrite,
        notions: a.notions,
        fds: a.fds,
        prof: a.prof,
      },
      LOCK_KEY
    );
  }

  const content = [
    '// Fichier généré automatiquement par scripts/build_mini.js — ne pas modifier à la main',
    `export const PUBLIC_ACTS = ${JSON.stringify(publicActs, null, 2)};`,
    `export const LOCKED_B64 = ${JSON.stringify(lockedB64, null, 2)};`,
    '',
  ].join('\n');

  fs.writeFileSync(path.join(ROOT, 'src', 'generated_mini_payload.js'), content, 'utf8');
}

function renderActivityHtml(act) {
  const mriScript = act.id === 'A1'
    ? '  <script src="../data/mri.js"></script>\n'
    : '';
  return `<!DOCTYPE html>
<html lang="fr" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escHtml(act.code)} · ${escHtml(act.titre)} — SVT Cycle 4</title>
  <link rel="stylesheet" href="mini.css">
</head>
<body>
  <div id="app"></div>
  <script>window.MINI_ACT_ID = ${JSON.stringify(act.id)};</script>
  <script src="../data/brain.js"></script>
${mriScript}  <script src="mini_app.js"></script>
</body>
</html>
`;
}

function renderPortalHtml(acts, opts = {}) {
  const basePrefix = opts.basePrefix || '';
  const atlasHref = opts.atlasHref || '../atlas.html';
  const cards = acts.map((a) => {
    const imgName = basePrefix + 'img/' + a.id.toLowerCase() + '.jpg';
    const fileName = basePrefix + a.id.toLowerCase() + '.html';
    return `
      <article class="card">
        <a class="card-thumb" href="${fileName}" target="_blank" rel="noopener">
          <img src="${imgName}" alt="${escHtml(a.titre)}" loading="lazy">
          <span class="card-lvl">${escHtml(a.niveau)} · ${escHtml(a.duree)}</span>
        </a>
        <div class="card-body">
          <div class="card-code">${escHtml(a.code)} · ${escHtml(a.semaine)}</div>
          <h2><a href="${fileName}" target="_blank" rel="noopener">${escHtml(a.titre)}</a></h2>
          <p class="card-pb">${escHtml(a.problematique)}</p>
          <p class="card-src">${escHtml(a.sourceAccroche)}</p>
          <a class="card-go" href="${fileName}" target="_blank" rel="noopener">Ouvrir l'activité ${escHtml(a.code)} ↗</a>
        </div>
      </article>
    `;
  }).join('');

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Activités autonomes SVT Cycle 4 — Système nerveux, cerveau &amp; santé</title>
  <style>
    :root { --bg:#f4f6fa; --surface:#ffffff; --fg:#141c28; --fg2:#475569; --line:rgba(20,28,40,.13); --accent:#2b6de0; --ok:#1d9a6c; }
    * { box-sizing: border-box; }
    body { margin: 0; background: var(--bg); color: var(--fg); font: 14.5px/1.5 "Segoe UI", system-ui, sans-serif; }
    .wrap { max-width: 1180px; margin: 0 auto; padding: 22px 18px 42px; }
    header { display:flex; justify-content:space-between; align-items:flex-end; gap:14px; flex-wrap:wrap; border-bottom:1px solid var(--line); padding-bottom:14px; margin-bottom:20px; }
    h1 { margin: 0 0 4px; font-size: 23px; }
    .sub { margin: 0; color: var(--fg2); font-size: 13.5px; }
    .top-links { display:flex; gap:8px; flex-wrap:wrap; }
    .btn { display:inline-flex; align-items:center; gap:6px; padding:8px 13px; border-radius:9px; text-decoration:none; font-weight:700; font-size:13px; border:1px solid var(--line); background:var(--surface); color:var(--fg); }
    .btn.pri { background:var(--accent); color:#fff; border-color:var(--accent); }
    .btn.dnb { background:rgba(29,154,108,.12); color:var(--ok); border-color:var(--ok); }
    .grid { display:grid; grid-template-columns: repeat(3, 1fr); gap:16px; }
    .card { background:var(--surface); border:1px solid var(--line); border-radius:14px; overflow:hidden; display:flex; flex-direction:column; box-shadow:0 6px 20px rgba(15,23,42,.06); }
    .card-thumb { position:relative; display:block; background:#0e1726; }
    .card-thumb img { width:100%; aspect-ratio:16/9; object-fit:cover; display:block; }
    .card-lvl { position:absolute; top:10px; right:10px; background:rgba(15,23,42,.82); color:#fff; padding:3px 9px; border-radius:99px; font-size:11.5px; font-weight:700; }
    .card-body { padding:14px; display:flex; flex-direction:column; gap:7px; flex:1; }
    .card-code { font:700 11.5px monospace; color:var(--accent); text-transform:uppercase; }
    .card-body h2 { margin:0; font-size:16px; line-height:1.3; }
    .card-body h2 a { color:inherit; text-decoration:none; }
    .card-pb { margin:0; font-size:13px; color:var(--fg2); }
    .card-src { margin:0; font-size:11.5px; color:#64748b; }
    .card-go { margin-top:auto; display:inline-block; padding:8px 12px; border-radius:8px; background:rgba(43,109,224,.1); color:var(--accent); font-weight:700; text-decoration:none; text-align:center; }
    .card-go:hover { background:var(--accent); color:#fff; }
    .dnb-strip { margin-top:22px; background:var(--surface); border:1px solid var(--line); border-radius:14px; padding:16px; display:flex; justify-content:space-between; align-items:center; gap:14px; flex-wrap:wrap; }
    @media (max-width: 960px) { .grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 620px) { .grid { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <div>
        <h1>Activités autonomes 3D · Système nerveux, cerveau &amp; santé</h1>
        <p class="sub">${acts.length} applications indépendantes et centrées élève (Problématique · Activité &amp; Graphiques · Modèle 3D ciblé · Correction verrouillée)</p>
      </div>
      <div class="top-links">
        <a class="btn pri" href="${atlasHref}" target="_blank" rel="noopener">🧠 Atlas 3D complet</a>
        <a class="btn" href="${basePrefix}vision.html" target="_blank" rel="noopener">👁️ Activité Vision (A7)</a>
        <a class="btn" href="${basePrefix}drogues.html" target="_blank" rel="noopener">💊 Activité Drogues (A8)</a>
        <a class="btn dnb" href="${basePrefix}brevet_dnb3_sujet.pdf" target="_blank" rel="noopener">Sujet Brevet DNB 3 (PDF)</a>
      </div>
    </header>

    <div class="grid">${cards}</div>

    <div class="dnb-strip">
      <div>
        <strong>Activité indépendante « Intégration du cerveau dans la vision » (A7 · 4e/3e · 50 min)</strong>
        <div style="font-size:13px;color:var(--fg2)">Fiche élève imprimable et modifiable (aires visuelles V1–V5, cas cliniques patients A &amp; B).</div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <a class="btn dnb" href="${basePrefix}fiche_eleve_integration_vision.pdf" target="_blank" rel="noopener">📄 Fiche élève Vision (PDF)</a>
        <a class="btn" href="${basePrefix}fiche_eleve_integration_vision.odt" target="_blank" rel="noopener">📝 Fiche élève (ODT)</a>
      </div>
    </div>

    <div class="dnb-strip">
      <div>
        <strong>Évaluation type Brevet (DNB 3 · 10,0 pts · 30 min)</strong>
        <div style="font-size:13px;color:var(--fg2)">Sommeil, smartphones et consolidation synaptique (avec graphique vectoriel EnCLASS 2024 / ANSES 2026 à analyser et schéma de synapse ~20 nm).</div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <a class="btn dnb" href="${basePrefix}brevet_dnb3_sujet.pdf" target="_blank" rel="noopener">📄 Télécharger le sujet PDF</a>
      </div>
    </div>
  </div>
</body>
</html>
`;
}

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const acts = loadActivities();
  buildPayload(acts);

  esbuild.buildSync({
    entryPoints: [path.join(ROOT, 'src', 'mini_app.js')],
    bundle: true,
    minify: true,
    format: 'iife',
    outfile: path.join(OUT_DIR, 'mini_app.js'),
  });

  esbuild.buildSync({
    entryPoints: [path.join(ROOT, 'src', 'scoring_cerveau.js')],
    bundle: true,
    minify: true,
    format: 'iife',
    outfile: path.join(OUT_DIR, 'scoring_cerveau.js'),
  });

  fs.copyFileSync(path.join(ROOT, 'src', 'mini.css'), path.join(OUT_DIR, 'mini.css'));
  const codeGsSrc = path.join(ROOT, 'Code.gs');
  if (fs.existsSync(codeGsSrc)) {
    fs.copyFileSync(codeGsSrc, path.join(OUT_DIR, 'Code.gs'));
  }

  for (const act of acts) {
    const htmlName = act.id.toLowerCase() + '.html';
    fs.writeFileSync(path.join(OUT_DIR, htmlName), renderActivityHtml(act), 'utf8');
    if (act.id === 'A7') {
      fs.writeFileSync(path.join(OUT_DIR, 'vision.html'), renderActivityHtml(act), 'utf8');
    }
    if (act.id === 'A8') {
      fs.writeFileSync(path.join(OUT_DIR, 'drogues.html'), renderActivityHtml(act), 'utf8');
    }
  }

  fs.writeFileSync(
    path.join(OUT_DIR, 'index.html'),
    renderPortalHtml(acts, { basePrefix: '', atlasHref: '../atlas.html' }),
    'utf8'
  );
  fs.writeFileSync(
    path.join(ROOT, 'docs', 'index.html'),
    renderPortalHtml(acts, { basePrefix: 'activites/', atlasHref: 'atlas.html' }),
    'utf8'
  );
  console.log(`Built ${acts.length} standalone apps in docs/activites/ (A1..A${acts.length} + vision.html + drogues.html + docs/index.html + docs/activites/index.html)`);
}

main();
