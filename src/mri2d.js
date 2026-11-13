// Inspecteur IRM triplanaire 2D synchronisé avec la scène 3D (Axial, Coronal, Sagittal)
import { STRUCTURES } from './content.js';

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export class MriTriplanar {
  constructor(container, mriData, brainScene, callbacks = {}) {
    this.root = container;
    this.mri = mriData;
    this.brain = brainScene;
    this.cb = callbacks;

    this.lutRgb = this.mri.labels.map((name) => {
      if (!name) return null;
      const k = name.replace(/_[LR]$/, '');
      const st = STRUCTURES[k];
      return st ? [...hexToRgb(st.color), k] : null;
    });

    this.renderShell();
  }

  renderShell() {
    this.root.innerHTML = `
      <div class="mri-panel">
        <div class="mri-head">
          <div>
            <strong>IRM triplanaire réelle (MNI ICBM152)</strong>
            <span class="mri-coords" id="mriCoords">x=0 y=0 z=0 mm</span>
          </div>
          <div class="mri-actions">
            <label class="chk"><input type="checkbox" id="chkMriOverlay" checked> Régions colorées</label>
            <label class="chk"><input type="checkbox" id="chkMriClip"> Sectionner le 3D</label>
          </div>
        </div>
        <div class="mri-grid">
          <div class="mri-view" data-axis="ax">
            <div class="mri-vhead"><span>Axiale (Z)</span><span class="mri-mm" id="mmAx"></span></div>
            <canvas id="cvAx"></canvas>
          </div>
          <div class="mri-view" data-axis="cor">
            <div class="mri-vhead"><span>Coronale (Y)</span><span class="mri-mm" id="mmCor"></span></div>
            <canvas id="cvCor"></canvas>
          </div>
          <div class="mri-view" data-axis="sag">
            <div class="mri-vhead"><span>Sagittale (X)</span><span class="mri-mm" id="mmSag"></span></div>
            <canvas id="cvSag"></canvas>
          </div>
        </div>
        <div class="mri-readout" id="mriReadout">Cliquez sur une coupe pour déplacer le plan ou sélectionner la structure.</div>
      </div>
    `;

    this.cv = {
      ax: this.root.querySelector('#cvAx'),
      cor: this.root.querySelector('#cvCor'),
      sag: this.root.querySelector('#cvSag'),
    };
    this.lbl = {
      coords: this.root.querySelector('#mriCoords'),
      ax: this.root.querySelector('#mmAx'),
      cor: this.root.querySelector('#mmCor'),
      sag: this.root.querySelector('#mmSag'),
      readout: this.root.querySelector('#mriReadout'),
    };

    const chkOv = this.root.querySelector('#chkMriOverlay');
    const chkCl = this.root.querySelector('#chkMriClip');
    chkOv.checked = this.brain.state.mriOverlay;
    chkCl.checked = this.brain.state.mriClip;

    chkOv.addEventListener('change', () => this.brain.setMri({ overlay: chkOv.checked }));
    chkCl.addEventListener('change', () => this.brain.setMri({ clip: chkCl.checked }));

    for (const axis of ['ax', 'cor', 'sag']) {
      const c = this.cv[axis];
      let dragging = false;
      const handle = (e, selectStructure) => {
        const rect = c.getBoundingClientRect();
        const u = Math.max(0, Math.min(0.999, (e.clientX - rect.left) / rect.width));
        const v = Math.max(0, Math.min(0.999, (e.clientY - rect.top) / rect.height));
        const { shape, origin, vox } = this.mri;
        const [nx, ny, nz] = shape;
        const [ox, oy, oz] = origin;
        const pos = [...this.brain.state.mriPosMm];

        if (axis === 'ax') {
          pos[0] = Math.round(ox + Math.floor(u * nx) * vox);
          pos[1] = Math.round(oy + Math.floor((1 - v) * ny) * vox);
        } else if (axis === 'cor') {
          pos[0] = Math.round(ox + Math.floor(u * nx) * vox);
          pos[2] = Math.round(oz + Math.floor((1 - v) * nz) * vox);
        } else {
          pos[1] = Math.round(oy + Math.floor(u * ny) * vox);
          pos[2] = Math.round(oz + Math.floor((1 - v) * nz) * vox);
        }
        this.brain.setMri({ open: true, axis, posMm: pos });
        if (selectStructure) {
          const hit = this._labelAtMm(pos);
          if (hit) this.brain.isolate(hit);
        }
      };
      c.addEventListener('pointerdown', (e) => { dragging = true; c.setPointerCapture(e.pointerId); handle(e, true); });
      c.addEventListener('pointermove', (e) => { if (dragging) handle(e, false); });
      c.addEventListener('pointerup', () => { dragging = false; });
    }
  }

  _mmToIjk([mx, my, mz]) {
    const { shape, origin, vox } = this.mri;
    const clamp = (v, hi) => Math.max(0, Math.min(hi - 1, v));
    return [
      clamp(Math.round((mx - origin[0]) / vox), shape[0]),
      clamp(Math.round((my - origin[1]) / vox), shape[1]),
      clamp(Math.round((mz - origin[2]) / vox), shape[2]),
    ];
  }

  _labelAtMm(pos) {
    const [ix, iy, iz] = this._mmToIjk(pos);
    const [nx, ny] = this.mri.shape;
    const lIdx = this.mri.lab[ix + nx * (iy + ny * iz)];
    if (!lIdx) return null;
    const raw = this.mri.labels[lIdx];
    return raw ? raw.replace(/_[LR]$/, '') : null;
  }

  update() {
    const chkOv = this.root.querySelector('#chkMriOverlay');
    const chkCl = this.root.querySelector('#chkMriClip');
    if (chkOv) chkOv.checked = this.brain.state.mriOverlay;
    if (chkCl) chkCl.checked = this.brain.state.mriClip;

    const pos = this.brain.state.mriPosMm;
    const [ix0, iy0, iz0] = this._mmToIjk(pos);
    const [nx, ny, nz] = this.mri.shape;

    this.lbl.coords.textContent = `x=${pos[0]} · y=${pos[1]} · z=${pos[2]} mm`;
    this.lbl.ax.textContent = `${pos[2]} mm`;
    this.lbl.cor.textContent = `${pos[1]} mm`;
    this.lbl.sag.textContent = `${pos[0]} mm`;

    this.root.querySelectorAll('.mri-view').forEach((el) => {
      el.classList.toggle('active', el.dataset.axis === this.brain.state.mriAxis);
    });

    const hitKey = this._labelAtMm(pos);
    const st = hitKey && STRUCTURES[hitKey];
    this.lbl.readout.innerHTML = st
      ? `Sous le réticule : <strong>${st.name}</strong> <span class="muted">(${st.en})</span>`
      : 'Sous le réticule : substance blanche / liquide / hors masque';

    this._drawSlice('ax', nx, ny, ix0, iy0, iz0, ['G', 'D', 'A', 'P']);
    this._drawSlice('cor', nx, nz, ix0, iy0, iz0, ['G', 'D', 'S', 'I']);
    this._drawSlice('sag', ny, nz, ix0, iy0, iz0, ['P', 'A', 'S', 'I']);
  }

  _drawSlice(axis, W, H, ix0, iy0, iz0, orient) {
    const c = this.cv[axis];
    if (c.width !== W || c.height !== H) { c.width = W; c.height = H; }
    const ctx = c.getContext('2d');
    const img = ctx.createImageData(W, H);
    const d = img.data;
    const { shape, t1, lab } = this.mri;
    const [nx, ny, nz] = shape;
    const overlay = this.brain.state.mriOverlay;
    const iso = this.brain.state.isolatedKey;

    for (let py = 0; py < H; py++) {
      for (let px = 0; px < W; px++) {
        let ix = ix0, iy = iy0, iz = iz0;
        if (axis === 'ax') { ix = px; iy = ny - 1 - py; }
        else if (axis === 'cor') { ix = px; iz = nz - 1 - py; }
        else { iy = px; iz = nz - 1 - py; }

        const vIdx = ix + nx * (iy + ny * iz);
        const val = t1[vIdx];
        const lIdx = lab[vIdx];
        let r = val, g = val, b = val;
        if (overlay && lIdx > 0 && this.lutRgb[lIdx]) {
          const [cr, cg, cb, sk] = this.lutRgb[lIdx];
          const a = (iso && sk === iso) ? 0.65 : (iso ? 0.14 : 0.36);
          r = Math.round(r * (1 - a) + cr * a);
          g = Math.round(g * (1 - a) + cg * a);
          b = Math.round(b * (1 - a) + cb * a);
        }
        const p4 = (py * W + px) * 4;
        d[p4] = r; d[p4 + 1] = g; d[p4 + 2] = b; d[p4 + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);

    // Réticule + repères anatomiques
    const cx = axis === 'sag' ? iy0 + 0.5 : ix0 + 0.5;
    const cy = axis === 'ax' ? (ny - 1 - iy0) + 0.5 : (nz - 1 - iz0) + 0.5;
    ctx.strokeStyle = 'rgba(174, 140, 255, 0.85)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx, 0); ctx.lineTo(cx, H);
    ctx.moveTo(0, cy); ctx.lineTo(W, cy);
    ctx.stroke();

    ctx.font = 'bold 9px monospace';
    ctx.fillStyle = 'rgba(235, 240, 250, 0.78)';
    ctx.fillText(orient[0], 3, H / 2 + 3);
    ctx.fillText(orient[1], W - 9, H / 2 + 3);
    ctx.fillText(orient[2], W / 2 - 3, 9);
    ctx.fillText(orient[3], W / 2 - 3, H - 3);
  }
}
