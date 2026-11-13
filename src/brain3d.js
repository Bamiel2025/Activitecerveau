// Moteur 3D WebGL (Three.js) — Atlas cérébral interactif
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { LOBES, NETWORKS, PATHWAYS, STRUCTURES, SYSTEMS } from './content.js';
import { CLINICAL_MODELS } from './content_extra.js';

const Z_AXIS = new THREE.Vector3(0, 0, 1);

function hexToColor(hex) {
  return new THREE.Color(hex);
}

export class BrainScene {
  constructor(canvas, brainData, mriData, callbacks = {}) {
    this.canvas = canvas;
    this.brainData = brainData;
    this.mri = mriData;
    this.cb = callbacks;

    this.state = {
      theme: 'light',
      deep: false,
      hemiMode: 'both', // 'both' | 'onlyR' | 'onlyL'
      colorMode: 'regions', // 'regions' | 'lobes' | 'networks'
      activeNetwork: 0,
      isolatedKey: null,
      hoveredPart: null,
      activePathway: null,
      activeRouteIdx: -1,
      activeSystem: null,
      activeClinical: null,
      mriOpen: false,
      mriAxis: 'sag', // 'ax' | 'cor' | 'sag'
      mriPosMm: [24, -22, 6], // [x, y, z] MNI en mm
      mriClip: false,
      mriOverlay: true,
    };

    this._initRenderer();
    this._initScene();
    this._buildBrainMeshes();
    this._initMriPlane();
    this._bindEvents();

    this.flyAnim = null;
    this.paused = false;
    this.clock = new THREE.Clock();
    this.pathwayGroup = new THREE.Group();
    this.brainRoot.add(this.pathwayGroup);
    this.particles = [];
    this.routeMeshes = [];
    this.routeEndpoints = []; // { label, posMni, color }

    this._applyMaterials();
    this._animate();
  }

  _initRenderer() {
    const renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true, // permet des captures PNG instantanées nettes
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.06;
    renderer.localClippingEnabled = true;
    this.renderer = renderer;

    const pmrem = new THREE.PMREMGenerator(renderer);
    this.envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
  }

  _initScene() {
    const scene = new THREE.Scene();
    scene.environment = this.envTex;
    this.scene = scene;

    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(34, w / h, 1, 1600);
    this.camera = camera;

    const controls = new OrbitControls(camera, this.canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.78;
    controls.zoomSpeed = 0.9;
    controls.minDistance = 95;
    controls.maxDistance = 600;
    this.controls = controls;

    // Éclairage studio anatomique (clé chaude + contour froid + rebond)
    const hemi = new THREE.HemisphereLight(0xf6f8ff, 0x262e3d, 0.55);
    scene.add(hemi);

    const key = new THREE.DirectionalLight(0xfff7ed, 1.35);
    key.position.set(-140, 180, 120);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xd7e6ff, 0.55);
    fill.position.set(160, 40, -130);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0xb9ccff, 0.75);
    rim.position.set(40, -120, 160);
    scene.add(rim);

    // Racine orientée : MNI (x=G->D, y=Post->Ant, z=Inf->Sup) -> Three.js (x, z, -y)
    const root = new THREE.Group();
    root.rotation.x = -Math.PI / 2;
    scene.add(root);
    this.brainRoot = root;

    this.centerMni = new THREE.Vector3(0, -16, 4);
    this.centerWorld = new THREE.Vector3(0, 4, 16);
    controls.target.copy(this.centerWorld);
    camera.position.set(-335, 28, 22);
    controls.update();

    this.clipPlane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0);
  }

  _buildBrainMeshes() {
    this.parts = [];
    this.partsByKey = new Map();
    const box = new THREE.Box3();

    for (const p of this.brainData.parts) {
      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.BufferAttribute(p.positions, 3));
      geom.setAttribute('normal', new THREE.BufferAttribute(p.normals, 3));
      geom.setIndex(new THREE.BufferAttribute(p.indices, 1));

      // Couleurs par sommet (mises à jour selon le mode régions / lobes / réseaux)
      const colors = new Float32Array(p.nv * 3);
      geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      // Striation discrète des folia sur le cervelet pour le rendu visuel
      let effectiveShade = p.shade;
      if (p.key === 'cervelet') {
        effectiveShade = new Float32Array(p.nv);
        for (let i = 0; i < p.nv; i++) {
          const y = p.positions[i * 3 + 1];
          const z = p.positions[i * 3 + 2];
          const folia = 0.90 + 0.10 * Math.sin(z * 1.45 + y * 0.35);
          effectiveShade[i] = p.shade[i] * folia;
        }
      }

      const isDeep = p.kind !== 'cortex' && p.kind !== 'medial';
      const needsDouble = p.kind === 'medial' || p.key === 'insula' || p.key === 'pfc_median';
      const solidMat = new THREE.MeshPhysicalMaterial({
        vertexColors: true,
        roughness: isDeep ? 0.34 : 0.48,
        metalness: 0.02,
        clearcoat: isDeep ? 0.42 : 0.22,
        clearcoatRoughness: 0.36,
        envMapIntensity: 0.68,
        side: needsDouble ? THREE.DoubleSide : THREE.FrontSide,
      });

      const ghostMat = new THREE.MeshPhysicalMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.14,
        depthWrite: false,
        roughness: 0.22,
        metalness: 0.0,
        clearcoat: 0.55,
        clearcoatRoughness: 0.25,
        envMapIntensity: 0.55,
        side: needsDouble ? THREE.DoubleSide : THREE.FrontSide,
      });

      const mesh = new THREE.Mesh(geom, solidMat);
      mesh.userData.partRef = p;
      this.brainRoot.add(mesh);

      const entry = {
        ...p,
        geom,
        colors,
        effectiveShade,
        solidMat,
        ghostMat,
        mesh,
        isDeep,
        centerVec: new THREE.Vector3(...p.center),
      };
      this.parts.push(entry);
      if (!this.partsByKey.has(p.key)) this.partsByKey.set(p.key, []);
      this.partsByKey.get(p.key).push(entry);

      if (p.kind !== 'medial') {
        box.expandByPoint(new THREE.Vector3(...p.min));
        box.expandByPoint(new THREE.Vector3(...p.max));
      }
    }

    // Recentre les contrôles sur le centre géométrique réel du modèle
    box.getCenter(this.centerMni);
    this.centerWorld.set(this.centerMni.x, this.centerMni.z, -this.centerMni.y);
    this.controls.target.copy(this.centerWorld);
    this.camera.position.set(this.centerWorld.x - 335, this.centerWorld.y + 22, this.centerWorld.z + 12);
    this.controls.update();

    this._recolorVertices();
  }

  _recolorVertices() {
    const mode = this.state.colorMode;
    const activeNet = this.state.activeNetwork;
    const col = new THREE.Color();
    const neutral = new THREE.Color('#8f97a4');

    const netColors = NETWORKS.map(n => (n ? new THREE.Color(n.color) : neutral));

    for (const part of this.parts) {
      const info = STRUCTURES[part.key] || { color: '#99a2b0', lobe: null };
      let baseColor = hexToColor(info.color);
      if (mode === 'lobes' && info.lobe && LOBES[info.lobe]) {
        baseColor = hexToColor(LOBES[info.lobe].color);
      }

      const arr = part.colors;
      const sh = part.effectiveShade;
      if (mode === 'networks' && part.net) {
        for (let i = 0; i < part.nv; i++) {
          const nid = part.net[i];
          const useCol = (nid > 0 && (activeNet === 0 || activeNet === nid)) ? netColors[nid] : neutral;
          const dim = (activeNet > 0 && nid !== activeNet) ? 0.52 : 1.0;
          const s = sh[i] * dim;
          arr[i * 3] = useCol.r * s;
          arr[i * 3 + 1] = useCol.g * s;
          arr[i * 3 + 2] = useCol.b * s;
        }
      } else {
        const c = (mode === 'networks' && !part.net) ? neutral : baseColor;
        const dim = (mode === 'networks' && !part.net) ? 0.55 : 1.0;
        for (let i = 0; i < part.nv; i++) {
          const s = sh[i] * dim;
          arr[i * 3] = c.r * s;
          arr[i * 3 + 1] = c.g * s;
          arr[i * 3 + 2] = c.b * s;
        }
      }
      part.geom.attributes.color.needsUpdate = true;
      // Stocke la teinte de référence pour les effets de sélection/clinique
      col.copy(baseColor);
    }
  }

  _applyMaterials() {
    const s = this.state;
    const isLight = s.theme === 'light';
    const ghostOpacityCortex = s.isolatedKey ? 0.08 : (s.deep ? 0.14 : 0.12);
    const ghostOpacityDeep = s.isolatedKey ? 0.11 : 0.16;

    const clinical = s.activeClinical ? CLINICAL_MODELS[s.activeClinical] : null;
    const sys = s.activeSystem ? SYSTEMS[s.activeSystem] : null;
    const netOnly = s.colorMode === 'networks' && s.activeNetwork > 0;
    const hasPathwayFocus = Boolean(s.activePathway || sys || clinical);

    // Visibilité des hémisphères
    const showL = s.hemiMode !== 'onlyR';
    const showR = s.hemiMode !== 'onlyL';

    const clipArr = (s.mriOpen && s.mriClip) ? [this.clipPlane] : [];

    for (const part of this.parts) {
      if (part.hemi === 'L' && !showL) {
        part.mesh.visible = false;
        continue;
      }
      if (part.hemi === 'R' && !showR) {
        part.mesh.visible = false;
        continue;
      }
      if (part.key === 'paroi_mediane' && s.hemiMode === 'both' && !s.isolatedKey) {
        part.mesh.visible = true;
      } else {
        part.mesh.visible = true;
      }

      // Détermine si la pièce doit être solide, cible corticale semi-translucide, ou « verre »
      let solid = true;
      let softTarget = false;
      if (s.isolatedKey) {
        solid = part.key === s.isolatedKey;
      } else if (clinical) {
        solid = clinical.up.includes(part.key) || clinical.down.includes(part.key);
      } else if (sys) {
        const hit = sys.structures.includes(part.key);
        solid = hit && part.isDeep;
        softTarget = hit && !part.isDeep;
      } else if (s.activePathway) {
        const pw = PATHWAYS[s.activePathway];
        const involved = new Set(pw.routes.flat());
        const hit = involved.has(part.key);
        solid = hit && part.isDeep;
        softTarget = hit && !part.isDeep;
      } else if (netOnly) {
        solid = part.kind === 'cortex';
      } else if (s.deep) {
        solid = part.isDeep;
      }

      if (part.key === 'paroi_mediane' && (s.deep || s.isolatedKey || hasPathwayFocus || netOnly)) {
        part.mesh.visible = false;
        continue;
      }

      if (solid) {
        part.mesh.material = part.solidMat;
        part.mesh.renderOrder = 0;
        const isHovered = s.hoveredPart && s.hoveredPart.key === part.key;
        const isIso = s.isolatedKey === part.key;
        part.solidMat.emissive.setHex(isIso ? 0x261a42 : (isHovered ? 0x1e2536 : 0x000000));
        part.solidMat.emissiveIntensity = isIso ? 0.45 : (isHovered ? 0.55 : 0);
        part.solidMat.clippingPlanes = clipArr;
        part.solidMat.needsUpdate = true;
      } else {
        part.mesh.material = part.ghostMat;
        part.mesh.renderOrder = 1;
        part.ghostMat.opacity = softTarget ? 0.34 : (part.isDeep ? ghostOpacityDeep : ghostOpacityCortex);
        part.ghostMat.color.setHex(softTarget ? 0xffffff : (isLight ? 0xc8d2e2 : 0xb2c3e0));
        part.ghostMat.emissive.setHex(isLight ? 0x455878 : 0x2c3c5a);
        part.ghostMat.emissiveIntensity = softTarget ? 0.08 : (isLight ? 0.12 : 0.22);
        part.ghostMat.clippingPlanes = clipArr;
        part.ghostMat.needsUpdate = true;
      }
    }
  }

  // ---------------- Voies & circuits animés ----------------
  _rebuildPathways() {
    while (this.pathwayGroup.children.length) {
      const ch = this.pathwayGroup.children[0];
      this.pathwayGroup.remove(ch);
      if (ch.geometry) ch.geometry.dispose();
      if (ch.material) ch.material.dispose();
    }
    this.particles = [];
    this.routeMeshes = [];
    this.routeEndpoints = [];

    const pwKey = this.state.activePathway;
    const sysKey = this.state.activeSystem;
    let routes = [];
    let type = 'mod';
    let colorHex = '#ae8cff';

    if (pwKey && PATHWAYS[pwKey]) {
      const pw = PATHWAYS[pwKey];
      routes = pw.routes;
      type = pw.type;
      colorHex = pw.color;
    } else if (sysKey && SYSTEMS[sysKey]) {
      const sys = SYSTEMS[sysKey];
      routes = sys.circuit;
      type = 'mod';
      colorHex = sys.color;
    } else {
      return;
    }

    const baseColor = new THREE.Color(colorHex);
    const showL = this.state.hemiMode !== 'onlyR';
    const showR = this.state.hemiMode !== 'onlyL';

    const pairsForSide = (kA, kB) => {
      const listA = this.partsByKey.get(kA) || [];
      const listB = this.partsByKey.get(kB) || [];
      const out = [];
      for (const a of listA) {
        if ((a.hemi === 'L' && !showL) || (a.hemi === 'R' && !showR)) continue;
        for (const b of listB) {
          if ((b.hemi === 'L' && !showL) || (b.hemi === 'R' && !showR)) continue;
          if (a.hemi !== 'M' && b.hemi !== 'M' && a.hemi !== b.hemi) continue;
          out.push([a, b]);
        }
      }
      return out;
    };

    const sphGeom = new THREE.SphereGeometry(1.55, 12, 12);
    const ringGeom = new THREE.TorusGeometry(1.85, 0.44, 10, 22);
    const modGeom = new THREE.SphereGeometry(1.35, 10, 10);

    routes.forEach(([kA, kB], rIdx) => {
      const isFocused = this.state.activeRouteIdx === rIdx;
      const dimOther = this.state.activeRouteIdx >= 0 && !isFocused;
      const sidePairs = pairsForSide(kA, kB);

      for (const [pA, pB] of sidePairs) {
        const cA = pA.centerVec;
        const cB = pB.centerVec;
        const mid = cA.clone().add(cB).multiplyScalar(0.5);
        // Courbure anatomique douce vers l'extérieur/haut
        const outDir = mid.clone().sub(this.centerMni);
        if (outDir.lengthSq() < 1) outDir.set(0, 0, 1);
        outDir.normalize();
        const dist = cA.distanceTo(cB);
        mid.addScaledVector(outDir, Math.min(18, dist * 0.24));

        const curve = new THREE.CatmullRomCurve3([cA.clone(), mid, cB.clone()]);
        const tubeGeom = new THREE.TubeGeometry(curve, 28, isFocused ? 0.85 : 0.48, 8, false);
        const tubeMat = new THREE.MeshBasicMaterial({
          color: baseColor,
          transparent: true,
          opacity: dimOther ? 0.14 : (isFocused ? 0.85 : 0.42),
          depthWrite: false,
        });
        const tube = new THREE.Mesh(tubeGeom, tubeMat);
        tube.userData.routeIdx = rIdx;
        this.pathwayGroup.add(tube);
        this.routeMeshes.push(tube);

        if (isFocused) {
          this.routeEndpoints.push(
            { text: STRUCTURES[kA]?.name || kA, posMni: cA.clone(), color: colorHex },
            { text: STRUCTURES[kB]?.name || kB, posMni: cB.clone(), color: colorHex }
          );
        }

        if (dimOther) continue;

        const count = isFocused ? 5 : 3;
        const pGeom = type === 'exc' ? sphGeom : (type === 'inh' ? ringGeom : modGeom);
        for (let k = 0; k < count; k++) {
          const pMat = new THREE.MeshBasicMaterial({
            color: type === 'inh' ? 0xffa07a : (type === 'exc' ? 0x7fd8ff : baseColor),
            transparent: true,
            opacity: 0.95,
          });
          if (type === 'mod') pMat.color.lerp(new THREE.Color('#ffffff'), 0.28);
          const pm = new THREE.Mesh(pGeom, pMat);
          this.pathwayGroup.add(pm);
          this.particles.push({
            mesh: pm,
            curve,
            type,
            phase: (k / count) + (rIdx * 0.17) % 1,
            speed: type === 'exc' ? 0.48 : (type === 'inh' ? 0.34 : 0.38),
          });
        }
      }
    });
  }

  // ---------------- Coupe IRM 3D ----------------
  _initMriPlane() {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(12), 3));
    geom.setAttribute('uv', new THREE.BufferAttribute(new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), 2));
    geom.setIndex([0, 1, 2, 0, 2, 3]);

    this.mriCanvas = document.createElement('canvas');
    this.mriTex = new THREE.CanvasTexture(this.mriCanvas);
    this.mriTex.colorSpace = THREE.SRGBColorSpace;
    this.mriTex.flipY = false;
    this.mriTex.minFilter = THREE.LinearFilter;
    this.mriTex.magFilter = THREE.LinearFilter;

    const mat = new THREE.MeshBasicMaterial({
      map: this.mriTex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.94,
      toneMapped: false,
    });
    this.mriMesh = new THREE.Mesh(geom, mat);
    this.mriMesh.visible = false;
    this.mriMesh.renderOrder = 0;

    // Cadre subtil autour de la coupe IRM
    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(15), 3));
    const lineMat = new THREE.LineBasicMaterial({ color: 0xae8cff, transparent: true, opacity: 0.7 });
    this.mriFrame = new THREE.Line(lineGeom, lineMat);
    this.mriFrame.visible = false;

    this.brainRoot.add(this.mriMesh);
    this.brainRoot.add(this.mriFrame);
  }

  _updateMriPlane() {
    const visible = this.state.mriOpen;
    this.mriMesh.visible = visible;
    this.mriFrame.visible = visible;
    if (!visible) return;

    const { shape, origin, vox, t1, lab, labels } = this.mri;
    const [nx, ny, nz] = shape;
    const [ox, oy, oz] = origin;
    const [mx, my, mz] = this.state.mriPosMm;
    const axis = this.state.mriAxis;

    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
    const ix0 = clamp(Math.round((mx - ox) / vox), 0, nx - 1);
    const iy0 = clamp(Math.round((my - oy) / vox), 0, ny - 1);
    const iz0 = clamp(Math.round((mz - oz) / vox), 0, nz - 1);

    let W = 0, H = 0;
    const corners = new Float32Array(12);
    if (axis === 'ax') {
      W = nx; H = ny;
      const z = oz + iz0 * vox;
      const x0 = ox - 0.5 * vox, x1 = ox + (nx - 0.5) * vox;
      const y0 = oy - 0.5 * vox, y1 = oy + (ny - 0.5) * vox;
      corners.set([x0, y0, z, x1, y0, z, x1, y1, z, x0, y1, z]);
    } else if (axis === 'cor') {
      W = nx; H = nz;
      const y = oy + iy0 * vox;
      const x0 = ox - 0.5 * vox, x1 = ox + (nx - 0.5) * vox;
      const z0 = oz - 0.5 * vox, z1 = oz + (nz - 0.5) * vox;
      corners.set([x0, y, z0, x1, y, z0, x1, y, z1, x0, y, z1]);
    } else {
      W = ny; H = nz;
      const x = ox + ix0 * vox;
      const y0 = oy - 0.5 * vox, y1 = oy + (ny - 0.5) * vox;
      const z0 = oz - 0.5 * vox, z1 = oz + (nz - 0.5) * vox;
      corners.set([x, y0, z0, x, y1, z0, x, y1, z1, x, y0, z1]);
    }
    this._updateClipPlane();

    const posAttr = this.mriMesh.geometry.attributes.position;
    posAttr.array.set(corners);
    posAttr.needsUpdate = true;

    const frameArr = this.mriFrame.geometry.attributes.position.array;
    frameArr.set(corners, 0);
    frameArr[12] = corners[0]; frameArr[13] = corners[1]; frameArr[14] = corners[2];
    this.mriFrame.geometry.attributes.position.needsUpdate = true;

    // Dessine la coupe T1 + superposition colorée optionnelle sur mriCanvas
    this.mriCanvas.width = W;
    this.mriCanvas.height = H;
    const ctx = this.mriCanvas.getContext('2d');
    const imgData = ctx.createImageData(W, H);
    const data = imgData.data;

    // Palette RGB précalculée pour chaque étiquette IRM
    const lutRgb = labels.map((name) => {
      if (!name) return null;
      const k = name.replace(/_[LR]$/, '');
      const st = STRUCTURES[k];
      if (!st) return null;
      const c = hexToColor(st.color);
      return [Math.round(c.r * 255), Math.round(c.g * 255), Math.round(c.b * 255), k];
    });

    const overlay = this.state.mriOverlay;
    const iso = this.state.isolatedKey;

    for (let py = 0; py < H; py++) {
      for (let px = 0; px < W; px++) {
        let ix = ix0, iy = iy0, iz = iz0;
        if (axis === 'ax') { ix = px; iy = py; }
        else if (axis === 'cor') { ix = px; iz = py; }
        else { iy = px; iz = py; }

        const vIdx = ix + nx * (iy + ny * iz);
        const val = t1[vIdx];
        const lIdx = lab[vIdx];
        const p4 = (py * W + px) * 4;

        if (val < 12 && lIdx === 0) {
          data[p4] = 0; data[p4 + 1] = 0; data[p4 + 2] = 0; data[p4 + 3] = 0;
          continue;
        }
        let r = val, g = val, b = val;
        if (overlay && lIdx > 0 && lutRgb[lIdx]) {
          const [cr, cg, cb, sk] = lutRgb[lIdx];
          const a = (iso && sk === iso) ? 0.62 : (iso ? 0.12 : 0.34);
          r = Math.round(r * (1 - a) + cr * a);
          g = Math.round(g * (1 - a) + cg * a);
          b = Math.round(b * (1 - a) + cb * a);
        }
        data[p4] = r; data[p4 + 1] = g; data[p4 + 2] = b; data[p4 + 3] = 242;
      }
    }
    ctx.putImageData(imgData, 0, 0);
    this.mriTex.needsUpdate = true;
  }

  // ---------------- Interactions souris & tactile ----------------
  _bindEvents() {
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    let downPt = null;
    let lastTap = 0;

    const updatePointer = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const pick = () => {
      this.raycaster.setFromCamera(this.pointer, this.camera);
      // En mode structures profondes (D), on ignore le cortex fantôme pour cliquer aisément dedans
      const candidates = this.parts
        .filter(p => p.mesh.visible && (!this.state.deep || p.isDeep || this.state.isolatedKey === p.key))
        .map(p => p.mesh);
      const hits = this.raycaster.intersectObjects(candidates, false);
      if (hits.length) return hits[0].object.userData.partRef;
      if (this.state.deep) {
        const all = this.parts.filter(p => p.mesh.visible && p.key !== 'paroi_mediane').map(p => p.mesh);
        const h2 = this.raycaster.intersectObjects(all, false);
        if (h2.length) return h2[0].object.userData.partRef;
      }
      return null;
    };

    this.canvas.addEventListener('pointerdown', (e) => {
      downPt = { x: e.clientX, y: e.clientY };
    });

    this.canvas.addEventListener('pointermove', (e) => {
      updatePointer(e);
      const part = pick();
      if (part !== this.state.hoveredPart) {
        this.state.hoveredPart = part;
        this.canvas.classList.toggle('pointer', Boolean(part));
        this._applyMaterials();
      }
      if (this.cb.onHover) this.cb.onHover(part, e.clientX, e.clientY);
    });

    this.canvas.addEventListener('pointerup', (e) => {
      if (!downPt) return;
      const dist = Math.hypot(e.clientX - downPt.x, e.clientY - downPt.y);
      downPt = null;
      if (dist > 6) return;

      const now = performance.now();
      if (now - lastTap < 310) {
        lastTap = 0;
        this.isolate(null);
        return;
      }
      lastTap = now;

      updatePointer(e);
      const part = pick();
      if (part) {
        this.isolate(part.key === this.state.isolatedKey ? null : part.key);
      } else if (this.state.isolatedKey) {
        this.isolate(null);
      }
    });

    this.canvas.addEventListener('pointerleave', () => {
      if (this.state.hoveredPart) {
        this.state.hoveredPart = null;
        this._applyMaterials();
      }
      if (this.cb.onHover) this.cb.onHover(null, 0, 0);
    });

    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h, false);
  }

  // ---------------- API publique de contrôle ----------------
  setTheme(theme) {
    this.state.theme = theme;
    this._applyMaterials();
  }

  setDeep(on) {
    this.state.deep = Boolean(on);
    this._applyMaterials();
    this.cb.onStateChange?.(this.state);
  }

  setHemiMode(mode) {
    this.state.hemiMode = mode;
    this._applyMaterials();
    this._rebuildPathways();
    this.cb.onStateChange?.(this.state);
  }

  flipSide() {
    if (this.state.hemiMode === 'onlyR') {
      this.setHemiMode('onlyL');
      this.setView('lat_R');
    } else if (this.state.hemiMode === 'onlyL') {
      this.setHemiMode('onlyR');
      this.setView('lat_L');
    } else {
      // Bascule latérale gauche <-> droite
      const isCurrentlyLeft = this.camera.position.x < this.centerWorld.x;
      this.setView(isCurrentlyLeft ? 'lat_R' : 'lat_L');
    }
  }

  setColorMode(mode, netIdx = 0) {
    this.state.colorMode = mode;
    this.state.activeNetwork = netIdx;
    if (mode === 'networks') {
      this.state.activePathway = null;
      this.state.activeSystem = null;
      this.state.activeClinical = null;
      this.state.isolatedKey = null;
      this.state.deep = false;
      this._rebuildPathways();
    }
    this._recolorVertices();
    this._applyMaterials();
    this.cb.onStateChange?.(this.state);
  }

  isolate(key) {
    this.state.isolatedKey = key || null;
    this._applyMaterials();
    if (this.state.mriOpen) this._updateMriPlane();
    this.cb.onSelectStructure?.(this.state.isolatedKey);
    this.cb.onStateChange?.(this.state);
  }

  setPathway(pwKey, routeIdx = -1) {
    this.state.activePathway = pwKey || null;
    this.state.activeRouteIdx = routeIdx;
    if (pwKey) {
      this.state.activeSystem = null;
      this.state.activeClinical = null;
    }
    this._rebuildPathways();
    this._applyMaterials();
    this.cb.onStateChange?.(this.state);
  }

  setSystem(sysKey) {
    this.state.activeSystem = sysKey || null;
    this.state.activeRouteIdx = -1;
    if (sysKey) {
      this.state.activePathway = null;
      this.state.activeClinical = null;
    }
    this._rebuildPathways();
    this._applyMaterials();
    this.cb.onStateChange?.(this.state);
  }

  setClinical(clinKey) {
    this.state.activeClinical = clinKey || null;
    if (clinKey) {
      this.state.activePathway = null;
      this.state.activeSystem = null;
      this._rebuildPathways();
    }
    this._applyMaterials();
    this.cb.onStateChange?.(this.state);
  }

  setMri(opts = {}) {
    if (opts.open !== undefined) this.state.mriOpen = opts.open;
    if (opts.axis) this.state.mriAxis = opts.axis;
    if (opts.sliceMm !== undefined) {
      const idx = this.state.mriAxis === 'sag' ? 0 : (this.state.mriAxis === 'cor' ? 1 : 2);
      this.state.mriPosMm[idx] = opts.sliceMm;
    }
    if (opts.posMm) this.state.mriPosMm = [...opts.posMm];
    if (opts.clip !== undefined) this.state.mriClip = opts.clip;
    if (opts.overlay !== undefined) this.state.mriOverlay = opts.overlay;
    this._updateMriPlane();
    this._applyMaterials();
    this.cb.onStateChange?.(this.state);
  }

  setView(preset) {
    const c = this.centerWorld;
    const d = 335;
    let offset = new THREE.Vector3(-d, 20, 12);
    if (preset === 'lat_L') offset.set(-d, 16, 10);
    else if (preset === 'lat_R') offset.set(d, 16, 10);
    else if (preset === 'mri_34') offset.set(d * 0.72, 62, -d * 0.62);
    else if (preset === 'medial') {
      if (this.state.hemiMode === 'both') this.setHemiMode('onlyR');
      const side = this.state.hemiMode === 'onlyL' ? 1 : -1;
      offset.set(side * (d * 0.92), 16, 6);
    } else if (preset === 'sup') offset.set(0, d, 16);
    else if (preset === 'inf') offset.set(0, -d, 16);
    else if (preset === 'ant') offset.set(0, 14, -d);
    else if (preset === 'post') offset.set(0, 14, d);
    else if (preset === 'reset') {
      this.state.deep = false;
      this.state.isolatedKey = null;
      this.state.activePathway = null;
      this.state.activeSystem = null;
      this.state.activeClinical = null;
      this.state.colorMode = 'regions';
      this.state.activeNetwork = 0;
      this.state.hemiMode = 'both';
      this.state.mriOpen = false;
      this.state.mriClip = false;
      this._recolorVertices();
      this._rebuildPathways();
      this._updateMriPlane();
      this._applyMaterials();
      this.cb.onSelectStructure?.(null);
      this.cb.onStateChange?.(this.state);
      offset.set(-d, 22, 12);
    }

    const goal = c.clone().add(offset);
    this.flyAnim = {
      t0: performance.now(),
      dur: 420,
      from: this.camera.position.clone(),
      to: goal,
    };
  }

  applyAction(action) {
    if (!action) return;
    if (action.hemiMode) this.setHemiMode(action.hemiMode);
    if (action.hideLeft !== undefined) this.setHemiMode(action.hideLeft ? 'onlyR' : 'both');
    if (action.deep !== undefined) this.setDeep(action.deep);
    if (action.colorMode !== undefined) this.setColorMode(action.colorMode, action.network || 0);
    else if (action.network !== undefined) this.setColorMode(action.network > 0 ? 'networks' : 'regions', action.network);
    if (action.isolate !== undefined) this.isolate(action.isolate);
    if (action.pathway !== undefined) this.setPathway(action.pathway);
    if (action.system !== undefined) this.setSystem(action.system);
    if (action.clinical !== undefined) this.setClinical(action.clinical);
    if (action.mri !== undefined) this.setMri(action.mri);
    if (action.view) this.setView(action.view);
    if (action.flipSide) this.flipSide();
  }

  capturePng() {
    this.renderer.render(this.scene, this.camera);
    return this.canvas.toDataURL('image/png');
  }

  projectMniToScreen(vecMni) {
    const world = vecMni.clone().applyMatrix4(this.brainRoot.matrixWorld);
    world.project(this.camera);
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    return {
      x: (world.x * 0.5 + 0.5) * w,
      y: (-world.y * 0.5 + 0.5) * h,
      visible: world.z < 1,
    };
  }

  _updateClipPlane() {
    const [mx, my, mz] = this.state.mriPosMm;
    const axis = this.state.mriAxis;
    if (axis === 'ax') {
      const top = this.camera.position.y >= mz;
      this.clipPlane.normal.set(0, top ? -1 : 1, 0);
      this.clipPlane.constant = top ? mz : -mz;
    } else if (axis === 'cor') {
      const ant = this.camera.position.z <= -my;
      this.clipPlane.normal.set(0, 0, ant ? 1 : -1);
      this.clipPlane.constant = ant ? my : -my;
    } else {
      const right = this.camera.position.x >= mx;
      this.clipPlane.normal.set(right ? -1 : 1, 0, 0);
      this.clipPlane.constant = right ? mx : -mx;
    }
  }

  focusMriOn(key) {
    const list = this.partsByKey.get(key);
    if (!list || !list.length) return;
    const target = list.find(p => (this.state.hemiMode === 'onlyR' ? p.hemi !== 'L' : true)) || list[0];
    this.setMri({ open: true, posMm: target.center.map(v => Math.round(v)) });
  }

  _animate() {
    requestAnimationFrame(() => this._animate());
    const dt = Math.min(this.clock.getDelta(), 0.05);
    if (this.paused) return;
    const now = performance.now();

    if (this.flyAnim) {
      const u = Math.min(1, (now - this.flyAnim.t0) / this.flyAnim.dur);
      const ease = 1 - Math.pow(1 - u, 3);
      this.camera.position.lerpVectors(this.flyAnim.from, this.flyAnim.to, ease);
      if (u >= 1) this.flyAnim = null;
    }

    this.controls.update();

    // Animation des particules le long des voies (sphères pleines vs anneaux)
    if (this.particles.length) {
      const tangent = new THREE.Vector3();
      for (const p of this.particles) {
        p.phase = (p.phase + dt * p.speed) % 1;
        p.curve.getPointAt(p.phase, p.mesh.position);
        if (p.type === 'inh') {
          p.curve.getTangentAt(p.phase, tangent);
          p.mesh.quaternion.setFromUnitVectors(Z_AXIS, tangent);
        }
      }
    }

    // Pulsation des lentilles cliniques (↑ hyperactif en corail-rouge, ↓ frein affaibli en bleu)
    if (this.state.activeClinical) {
      const clin = CLINICAL_MODELS[this.state.activeClinical];
      const t = now * 0.005;
      const pulseUp = 0.5 + 0.5 * Math.sin(t * 1.6);
      const pulseDn = 0.5 + 0.5 * Math.sin(t * 0.7);
      for (const part of this.parts) {
        if (!part.mesh.visible || part.mesh.material !== part.solidMat) continue;
        if (clin.up.includes(part.key)) {
          part.solidMat.emissive.setHex(0xd9381e);
          part.solidMat.emissiveIntensity = 0.25 + 0.55 * pulseUp;
        } else if (clin.down.includes(part.key)) {
          part.solidMat.emissive.setHex(0x2d78c4);
          part.solidMat.emissiveIntensity = 0.18 + 0.35 * pulseDn;
        }
      }
    }

    if (this.state.mriOpen && this.state.mriClip) {
      this._updateClipPlane();
    }

    this.renderer.render(this.scene, this.camera);
    this.cb.onFrame?.();
  }
}
