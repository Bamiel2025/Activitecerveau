// Décodeur des données 3D et IRM (gzip + base64 -> TypedArrays)
import { gunzipSync } from 'fflate';

function b64ToBytes(b64) {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export function decodeBrain() {
  const meta = window.BRAIN_DATA;
  const raw = gunzipSync(b64ToBytes(window.BRAIN_BLOB));
  const buf = raw.buffer;
  const base = raw.byteOffset;
  const q = meta.quant;

  const parts = meta.parts.map((p) => {
    const posQ = new Int16Array(buf, base + p.pos, p.nv * 3);
    const nrmQ = new Int8Array(buf, base + p.nrm, p.nv * 3);
    const shadeU = new Uint8Array(buf, base + p.shade, p.nv);
    const idx = p.i32
      ? new Uint32Array(buf, base + p.idx, p.ni)
      : new Uint16Array(buf, base + p.idx, p.ni);
    const net = p.net !== undefined ? new Uint8Array(buf, base + p.net, p.nv) : null;

    const positions = new Float32Array(p.nv * 3);
    for (let i = 0; i < positions.length; i++) positions[i] = posQ[i] * q;

    const normals = new Float32Array(p.nv * 3);
    for (let i = 0; i < normals.length; i++) normals[i] = nrmQ[i] / 127;

    const shade = new Float32Array(p.nv);
    for (let i = 0; i < shade.length; i++) shade[i] = shadeU[i] / 255;

    return {
      ...p,
      positions,
      normals,
      shade,
      indices: idx,
      net,
    };
  });

  return { parts };
}

function classifyVisionVertex(x, y, z, origKey) {
  if (!['visuel', 'occipital', 'temporal', 'parietal'].includes(origKey)) return 'cortex_neutre';
  const ax = Math.abs(x);

  // V5 (rouge) : jonction temporo-occipitale latérale
  const dV5 = Math.hypot((y + 52) * 1.05, (z - 3) * 1.25);
  if (ax > 36 && dV5 < 9.5) return 'v5';

  // V4 (vert) : face ventro-latérale occipito-temporale au-dessus du cervelet (lésion Patient A)
  const dV4 = Math.hypot((y + 66) * 0.95, (z + 15) * 1.15);
  if (ax > 18 && z < -6 && y > -80 && y < -52 && dV4 < 13.5) return 'v4';

  // Arches concentriques V1 (jaune), V2 (orange), V3 (bleu, lésion Patient B)
  if (origKey === 'visuel' || origKey === 'occipital' || (origKey === 'parietal' && y < -66 && z < 28)) {
    const dy = Math.max(0, y + 100);
    const dz = Math.max(0, z + 15) * 0.65 + Math.max(0, -15 - z) * 1.25;
    const r = Math.hypot(dy, dz);
    if (r < 15.0 && z < 7) return 'v1';
    if (r < 24.5 && z < 17) return 'v2';
    if (r < 38.0 && y < -63 && z > -16 && z < 32) return 'v3';
    if (origKey === 'visuel') return 'v1';
  }
  return 'cortex_neutre';
}

/**
 * Transforme le maillage cérébral complet en modèle ciblé pour l'activité Vision :
 * conserve uniquement les aires visuelles V1..V5, le thalamus (relais des yeux),
 * le reste du cortex en teinte neutre et le cervelet/tronc en repères anatomiques.
 */
export function repartitionBrainForVision(brainData) {
  const newParts = [];
  const visionKeys = ['v1', 'v2', 'v3', 'v4', 'v5', 'cortex_neutre'];

  for (const hemi of ['L', 'R']) {
    const buckets = {};
    for (const k of visionKeys) {
      buckets[k] = { pos: [], nrm: [], shade: [], idx: [], nv: 0 };
    }

    for (const p of brainData.parts) {
      if (p.hemi !== hemi || p.kind !== 'cortex') continue;
      const vClass = new Array(p.nv);
      for (let i = 0; i < p.nv; i++) {
        vClass[i] = classifyVisionVertex(
          p.positions[i * 3],
          p.positions[i * 3 + 1],
          p.positions[i * 3 + 2],
          p.key
        );
      }

      // Associe chaque triangle à une aire visuelle puis copie uniquement les sommets utilisés
      const triCount = p.indices.length / 3;
      const usedPerKey = {};
      for (let t = 0; t < triCount; t++) {
        const i0 = p.indices[t * 3];
        const i1 = p.indices[t * 3 + 1];
        const i2 = p.indices[t * 3 + 2];
        const k0 = vClass[i0], k1 = vClass[i1], k2 = vClass[i2];
        const triKey = (k0 === k1 || k0 === k2) ? k0 : (k1 === k2 ? k1 : k0);

        const b = buckets[triKey];
        let map = usedPerKey[triKey];
        if (!map) {
          map = new Map();
          usedPerKey[triKey] = map;
        }
        for (const vi of [i0, i1, i2]) {
          let newVi = map.get(vi);
          if (newVi === undefined) {
            newVi = b.nv++;
            map.set(vi, newVi);
            b.pos.push(p.positions[vi * 3], p.positions[vi * 3 + 1], p.positions[vi * 3 + 2]);
            b.nrm.push(p.normals[vi * 3], p.normals[vi * 3 + 1], p.normals[vi * 3 + 2]);
            b.shade.push(p.shade[vi]);
          }
          b.idx.push(newVi);
        }
      }
    }

    for (const key of visionKeys) {
      const b = buckets[key];
      if (!b.nv || !b.idx.length) continue;
      const positions = new Float32Array(b.pos);
      const normals = new Float32Array(b.nrm);
      const shade = new Float32Array(b.shade);
      const indices = b.nv < 65536 ? new Uint16Array(b.idx) : new Uint32Array(b.idx);

      let minX = Infinity, minY = Infinity, minZ = Infinity;
      let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
      let sx = 0, sy = 0, sz = 0;
      for (let i = 0; i < b.nv; i++) {
        const x = positions[i * 3], y = positions[i * 3 + 1], z = positions[i * 3 + 2];
        if (x < minX) minX = x; if (x > maxX) maxX = x;
        if (y < minY) minY = y; if (y > maxY) maxY = y;
        if (z < minZ) minZ = z; if (z > maxZ) maxZ = z;
        sx += x; sy += y; sz += z;
      }

      newParts.push({
        id: `${key}_${hemi}`,
        key,
        kind: 'cortex',
        hemi,
        nv: b.nv,
        ni: indices.length,
        positions,
        normals,
        shade,
        indices,
        net: null,
        center: [sx / b.nv, sy / b.nv, sz / b.nv],
        min: [minX, minY, minZ],
        max: [maxX, maxY, maxZ],
      });
    }
  }

  // Conserver uniquement les repères utiles : paroi médiane, cervelet, tronc cérébral et thalamus (relais optique)
  for (const p of brainData.parts) {
    if (p.key === 'paroi_mediane' || p.key === 'thalamus') {
      newParts.push(p);
    } else if (p.key === 'cervelet') {
      newParts.push({ ...p, key: 'cervelet_neutre' });
    } else if (p.key === 'tronc') {
      newParts.push({ ...p, key: 'tronc_neutre' });
    }
  }

  return { parts: newParts, isVisionModel: true };
}

export function decodeMri() {
  const meta = window.MRI_DATA;
  const t1 = gunzipSync(b64ToBytes(window.MRI_T1));
  const lab = gunzipSync(b64ToBytes(window.MRI_LAB));
  return {
    shape: meta.shape,     // [nx, ny, nz]
    origin: meta.origin,   // [ox, oy, oz] en mm MNI
    vox: meta.vox,         // 1.5 mm
    labels: meta.labels,   // index -> 'hippocampe_L' etc.
    t1,
    lab,
  };
}

export function decodeMicro() {
  const meta = window.MICRO_DATA;
  if (!meta || !window.MICRO_BLOB) return null;
  const raw = gunzipSync(b64ToBytes(window.MICRO_BLOB));
  const buf = raw.buffer;
  const base = raw.byteOffset;
  const q = meta.quant;

  const parts = meta.parts.map((p) => {
    const posQ = new Int16Array(buf, base + p.offPos, p.nv * 3);
    const nrmQ = new Int8Array(buf, base + p.offNrm, p.nv * 3);
    const shadeU = new Uint8Array(buf, base + p.offShade, p.nv);
    const comp = new Uint8Array(buf, base + p.offComp, p.nv);
    const tAlongU = new Uint8Array(buf, base + p.offTalong, p.nv);
    const idx = p.i32
      ? new Uint32Array(buf, base + p.offIdx, p.ni)
      : new Uint16Array(buf, base + p.offIdx, p.ni);

    const positions = new Float32Array(p.nv * 3);
    for (let i = 0; i < positions.length; i++) positions[i] = posQ[i] * q;

    const normals = new Float32Array(p.nv * 3);
    for (let i = 0; i < normals.length; i++) normals[i] = nrmQ[i] / 127;

    const shade = new Float32Array(p.nv);
    for (let i = 0; i < shade.length; i++) shade[i] = shadeU[i] / 255;

    const compF = new Float32Array(p.nv);
    const tAlong = new Float32Array(p.nv);
    for (let i = 0; i < p.nv; i++) {
      compF[i] = comp[i];
      tAlong[i] = tAlongU[i] / 255;
    }

    return {
      ...p,
      positions,
      normals,
      shade,
      comp: compF,
      tAlong,
      indices: idx,
    };
  });

  const traces = new Uint8Array(buf, base + meta.swarm.offTraces, meta.swarm.lenTraces);
  return {
    parts,
    synapsePaths: meta.synapsePaths,
    swarm: {
      ...meta.swarm,
      traces,
    },
  };
}

