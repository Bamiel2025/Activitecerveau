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

