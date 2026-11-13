// Moteur 3D Micro-échelle (Three.js) :
// 1. Morceau de cortex | 2. Un neurone | 3. Une synapse | 4. Potentiel d'action | 5. Activité corticale
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export const MICRO_STAGES = [
  {
    id: 'cortex',
    num: '1/5',
    short: 'Cortex (~1 mm³)',
    title: 'Un morceau de cortex cérébral',
    scale: 'Échelle : ~1 mm³ · ~100 000 neurones',
    summary:
      'Dans 1 mm³ de cortex visuel, des neurones excitateurs (pyramidaux, bleu) reçoivent et transmettent l’information tandis que des interneurones inhibiteurs (Pvalb, chandelier, Martinotti, bipolaire) régulent finement l’activité du réseau.',
  },
  {
    id: 'neurone',
    num: '2/5',
    short: 'Un neurone',
    title: 'Architecture d’un neurone pyramidal',
    scale: 'Échelle : cellulaire (~100 à 1 200 µm)',
    summary:
      'Les dendrites (garnies d’épines) reçoivent des milliers de signaux ; le corps cellulaire (soma) les intègre ; l’axone conduit le message électrique (potentiel d’action) vers les neurones suivants.',
  },
  {
    id: 'synapse',
    num: '3/5',
    short: 'Une synapse',
    title: 'La jonction synaptique (~20 nm)',
    scale: 'Échelle : nanométrique (~20 nm)',
    summary:
      'Les neurones sont séparés par une fente synaptique de ~20 nm (Cajal). À l’arrivée d’un message, les vésicules libèrent des neurotransmetteurs chimiques qui se fixent sur les récepteurs du neurone suivant.',
  },
  {
    id: 'pa',
    num: '4/5',
    short: 'Potentiel d’action',
    title: 'Propagation d’un potentiel d’action',
    scale: 'Échelle : milliseconde · fibre → synapse → neurone',
    summary:
      'Un influx électrique parcourt l’axone présynaptique doré, déclenche la transmission chimique à la synapse, puis engendre un nouveau potentiel d’action dans le neurone pyramidal bleu.',
  },
  {
    id: 'activite',
    num: '5/5',
    short: 'Activité',
    title: 'Activité d’une population corticale',
    scale: 'Échelle : réseau vivant · imagerie calcique',
    summary:
      'Pendant une tâche sensorielle ou cognitive, des dizaines de neurones pyramidaux interconnectés déchargent en vagues synchronisées pour coder et traiter l’information nerveuse.',
  },
];

// Palette exacte de l'atlas cellulaire
const NEURON_VERT = `
  attribute float aAo;
  attribute float aComp;
  attribute float aTalong;
  varying float vAo;
  varying float vComp;
  varying float vTalong;
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    vAo = aAo;
    vComp = aComp;
    vTalong = aTalong;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;

const NEURON_FRAG = `
  precision highp float;
  uniform vec3 uColor;
  uniform vec3 uEdgeColor;
  uniform float uOpacity;
  uniform float uTime;
  uniform float uFocusComp;   // 0=tout, 1=soma, 2=axone, 34=dendrites+épines
  uniform float uPulse;
  uniform float uFlowPhase;   // <0 inactif, 0..1 onde le long de aTalong
  uniform float uWaveComp;    // filtre compartiment pour uFlowPhase (-1 = tous)
  uniform float uTransMode;   // 1 = rendre le bouton doré translucide sur comp==2

  varying float vAo;
  varying float vComp;
  varying float vTalong;
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    vec3 N = normalize(vNormal);
    vec3 V = normalize(vViewDir);
    float facing = abs(dot(N, V));
    float fres = pow(1.0 - max(0.0, facing), 2.3);

    vec3 L1 = normalize(vec3(0.45, 0.75, 0.55));
    vec3 L2 = normalize(vec3(-0.6, -0.3, 0.4));
    float nd1 = max(0.0, abs(dot(N, L1)));
    float nd2 = max(0.0, abs(dot(N, L2)));
    float ao = mix(0.56, 1.0, vAo);
    float lit = (0.58 + 0.44 * nd1 + 0.28 * nd2) * ao;

    vec3 baseCol = uColor;
    float alpha = uOpacity;
    bool isBouton = (uTransMode > 0.5 && vComp > 1.5 && vComp < 2.5);

    // Coloration spécialisée sur l'ultrastructure synaptique
    if (vComp > 5.5 && vComp < 6.5) {
      // Récepteurs postsynaptiques : cyan brillant (+ teinte émeraude modulée sans saturer en blanc)
      baseCol = mix(vec3(0.14, 0.78, 0.98), vec3(0.32, 0.95, 0.76), clamp(uPulse, 0.0, 1.0));
      lit += 0.10 + 0.16 * clamp(uPulse, 0.0, 1.0);
    } else if (vComp > 6.5 && vComp < 7.5) {
      // Vésicules synaptiques : ambre doré luminescent
      baseCol = vec3(1.0, 0.78, 0.20);
      lit += 0.22 + 0.25 * clamp(uPulse, 0.0, 1.0);
    } else if (vComp > 7.5) {
      // Mitochondrie interne : corail chaud
      baseCol = vec3(0.95, 0.40, 0.32);
      lit += 0.18;
    } else if (vComp > 4.5 && vComp < 5.5 && uTransMode > 0.5) {
      // Épine dendritique cible
      baseCol = vec3(0.32, 0.62, 1.0);
    }

    // Mode translucide du bouton présynaptique pour voir les vésicules à l'intérieur sans halo éblouissant
    if (isBouton) {
      alpha *= mix(0.10, 0.42, pow(1.0 - max(0.0, facing), 1.5));
      lit *= 0.45;
    }

    // Surbrillance pédagogique de compartiment (Étape Neurone)
    if (uFocusComp > 0.5) {
      bool match = false;
      if (uFocusComp < 1.5 && vComp < 1.5) match = true;
      else if (uFocusComp > 1.5 && uFocusComp < 2.5 && vComp > 1.5 && vComp < 2.5) match = true;
      else if (uFocusComp > 10.0 && (vComp > 2.5 && vComp < 5.5)) match = true;
      if (!match) {
        alpha *= 0.22;
        lit *= 0.55;
      } else {
        lit *= 1.32;
      }
    }

    // Onde de potentiel d'action glissant le long de la membrane
    float flowGlow = 0.0;
    if (uFlowPhase >= -0.05) {
      bool compOk = (uWaveComp < -0.5) ||
        (abs(vComp - uWaveComp) < 0.6) ||
        (uWaveComp > 30.0 && vComp > 2.5 && vComp < 5.5);
      if (compOk) {
        float d = vTalong - uFlowPhase;
        flowGlow = exp(-d * d * 42.0) * 1.45;
      }
    }

    float pulseGain = isBouton ? 0.0 : clamp(uPulse, 0.0, 1.0);
    float rimAmp = isBouton ? 0.26 : (0.28 + 0.45 * pulseGain + 0.90 * flowGlow);
    vec3 iri = mix(uEdgeColor, vec3(0.85, 0.55, 1.0), 0.35 + 0.35 * sin(uTime * 0.7 + vTalong * 6.0));
    vec3 rim = mix(baseCol, iri, isBouton ? 0.25 : 0.55) * fres * rimAmp;
    vec3 waveCol = mix(uEdgeColor, vec3(1.0, 0.96, 0.82), 0.6) * flowGlow;
    vec3 finalCol = baseCol * lit + rim + baseCol * (0.24 * pulseGain) + waveCol;

    gl_FragColor = vec4(finalCol, clamp(alpha, 0.0, 1.0));
  }
`;

const SWARM_VERT = `
  attribute float aAo;
  attribute float aCellId;
  attribute float aCellHue;
  uniform sampler2D uActivityTex;
  uniform float uTexWidth;
  varying float vActivity;
  varying float vAo;
  varying float vHue;
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    float u = (aCellId + 0.5) / uTexWidth;
    vActivity = texture2D(uActivityTex, vec2(u, 0.5)).r;
    vAo = aAo;
    vHue = aCellHue;
    vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * (mat3(instanceMatrix) * normal));
    vViewDir = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;

const SWARM_FRAG = `
  precision highp float;
  uniform float uTime;
  uniform float uStyle; // 0 = essaim calcique multicolore, 1 = ondes spectrales plasma
  varying float vActivity;
  varying float vAo;
  varying float vHue;
  varying vec3 vNormal;
  varying vec3 vViewDir;

  vec3 hsl2rgb(float h, float s, float l) {
    vec3 rgb = clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
    return l + s * (rgb - 0.5) * (1.0 - abs(2.0 * l - 1.0));
  }

  void main() {
    float a = clamp(vActivity, 0.0, 1.0);
    vec3 N = normalize(vNormal);
    vec3 V = normalize(vViewDir);
    float ndotl = abs(dot(N, normalize(vec3(0.4, 0.7, 0.6))));
    float fres = pow(1.0 - max(0.0, dot(N, V)), 2.4);
    float ao = mix(0.45, 1.0, vAo);

    vec3 col;
    vec3 rim;
    float glow;

    if (uStyle < 0.5) {
      // Essaim calcique multicolore (angle d'or HSL -> flambe vers blanc chaud)
      vec3 baseC = hsl2rgb(fract(vHue / 360.0), 0.82, 0.60);
      vec3 hotC = mix(baseC, vec3(1.0, 0.98, 0.92), 0.72);
      col = mix(baseC * 0.55, hotC, smoothstep(0.12, 0.90, a));
      float lit = (0.48 + 0.52 * ndotl) * ao;
      glow = 0.25 + a * a * 2.25;
      rim = mix(col, vec3(0.75, 0.92, 1.0), 0.45) * fres * (0.45 + 1.4 * a);
      gl_FragColor = vec4(col * lit + rim + col * glow, 0.95);
    } else {
      // Rampe asymétrique exacte whatisabrain : indigo -> violet -> magenta -> rose -> blanc chaud
      const vec3 BASE_DEEP = vec3(0.06, 0.04, 0.16);
      const vec3 BASE_MID  = vec3(0.32, 0.18, 0.55);
      const vec3 HOT_LO    = vec3(0.85, 0.30, 0.95);
      const vec3 HOT_MID   = vec3(1.00, 0.55, 0.85);
      const vec3 HOT_HI    = vec3(1.00, 0.93, 0.78);

      float shifted = clamp(0.18 + a * 0.82, 0.0, 1.0);
      if (shifted < 0.5) {
        col = mix(BASE_DEEP, BASE_MID, smoothstep(0.0, 1.0, shifted * 2.0));
      } else {
        float t = (shifted - 0.5) * 2.0;
        col = mix(BASE_MID, HOT_LO, smoothstep(0.0, 0.55, t));
        col = mix(col, HOT_MID, smoothstep(0.45, 0.85, t));
        col = mix(col, HOT_HI, smoothstep(0.75, 1.0, t));
      }
      float lit = (0.55 + 0.45 * ndotl) * ao;
      vec3 iri = mix(vec3(0.45, 0.65, 1.0), vec3(1.0, 0.45, 0.95), 0.5 + 0.5 * sin(uTime * 0.6 + shifted * 5.0));
      rim = mix(col, iri, 0.65) * fres * (0.6 + 1.6 * a);
      glow = pow(max(0.0, a - 0.35), 1.5) * 1.55;
      gl_FragColor = vec4(col * lit + rim + col * glow, 1.0);
    }
  }
`;

const HALO_VERT = `
  attribute float aCellId;
  uniform sampler2D uActivityTex;
  uniform float uTexWidth;
  varying float vActivity;
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    float u = (aCellId + 0.5) / uTexWidth;
    vActivity = texture2D(uActivityTex, vec2(u, 0.5)).r;
    vec3 inflated = position + normal * 0.0085;
    vec4 mv = modelViewMatrix * instanceMatrix * vec4(inflated, 1.0);
    vNormal = normalize(normalMatrix * (mat3(instanceMatrix) * normal));
    vViewDir = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;

const HALO_FRAG = `
  precision highp float;
  varying float vActivity;
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    float fres = pow(1.0 - max(0.0, dot(normalize(vNormal), normalize(vViewDir))), 3.0);
    float a = clamp(vActivity, 0.0, 1.0);
    vec3 cool = vec3(0.55, 0.50, 1.00);
    vec3 warm = vec3(1.00, 0.55, 0.90);
    vec3 col = mix(cool, warm, smoothstep(0.35, 0.92, a));
    float intensity = fres * (0.28 + 1.25 * a);
    gl_FragColor = vec4(col * intensity, intensity);
  }
`;

function createRadialSprite(rgb, scale = 0.25) {
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  const [r, gr, b] = rgb;
  g.addColorStop(0.0, `rgba(255,255,255,1)`);
  g.addColorStop(0.22, `rgba(${r},${gr},${b},0.92)`);
  g.addColorStop(0.55, `rgba(${r},${gr},${b},0.32)`);
  g.addColorStop(1.0, `rgba(${r},${gr},${b},0)`);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  const mat = new THREE.SpriteMaterial({
    map: tex,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(scale, scale, 1);
  return { sprite, mat, tex };
}

function createTrailPoints(colorHex, headSize = 72) {
  const N = 28;
  const positions = new Float32Array(N * 3);
  const idxs = new Float32Array(N);
  for (let i = 0; i < N; i++) idxs[i] = i;
  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geom.setAttribute('aIdx', new THREE.BufferAttribute(idxs, 1));
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uHeadSize: { value: headSize },
      uOpacity: { value: 0 },
      uColor: { value: new THREE.Color(colorHex) },
    },
    vertexShader: `
      attribute float aIdx;
      uniform float uHeadSize;
      uniform float uOpacity;
      varying float vAlpha;
      void main() {
        float age = aIdx / 28.0;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vAlpha = pow(1.0 - age, 1.55) * uOpacity;
        gl_PointSize = uHeadSize * (0.35 + 0.65 * pow(1.0 - age, 1.2)) * (1.0 / max(0.05, -mv.z));
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      varying float vAlpha;
      void main() {
        float r = length(gl_PointCoord - 0.5);
        if (r > 0.5) discard;
        float core = smoothstep(0.5, 0.0, r);
        gl_FragColor = vec4(uColor, core * core * vAlpha);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const points = new THREE.Points(geom, mat);
  points.frustumCulled = false;
  return { points, mat, positions, geom, N };
}

function samplePolyline(pts, t, outVec) {
  const len = pts.length;
  if (!len) return outVec.set(0, 0, 0);
  const clamped = Math.max(0, Math.min(1, t)) * (len - 1);
  const i = Math.floor(clamped);
  const f = clamped - i;
  if (i >= len - 1) return outVec.copy(pts[len - 1]);
  return outVec.copy(pts[i]).lerp(pts[i + 1], f);
}

function updateTrail(trail, pts, t, step = 0.1 / 27) {
  const tmp = new THREE.Vector3();
  for (let i = 0; i < trail.N; i++) {
    samplePolyline(pts, Math.max(0, t - i * step), tmp);
    trail.positions[i * 3] = tmp.x;
    trail.positions[i * 3 + 1] = tmp.y;
    trail.positions[i * 3 + 2] = tmp.z;
  }
  trail.geom.getAttribute('position').needsUpdate = true;
}

export class MicroScene {
  constructor(canvas, microData, callbacks = {}) {
    this.canvas = canvas;
    this.data = microData;
    this.cb = callbacks;
    this.paused = true;

    this.state = {
      stage: 'cortex',        // 'cortex' | 'neurone' | 'synapse' | 'pa' | 'activite'
      compartment: 'all',     // 'all' | 'dendrites' | 'soma' | 'axon'
      synapseMode: 'normal',  // 'normal' | 'curare' | 'nicotine'
      autoLoop: true,
      slowMo: false,
      activityPlaying: true,
      activityStyle: 'swarm', // 'swarm' | 'waves'
      autoRotate: true,
      selectedCellKey: null,
      hoveredCell: null,
    };

    this._initRenderer();
    this._initScene();
    this._buildStageGroups();
    this._buildBackgroundSomas();
    this._buildApPulsePool();
    this._buildNeurotransmitters();
    this._bindEvents();

    this.flyAnim = null;
    this.clock = new THREE.Clock();
    this.simTime = 0;
    this.neuronDemoPhase = -1;
    this.stimulusWaveAt = -99;
    this.lastAutoApAt = -2;
    this.synapseFlash = 0;

    this.setActivityStyle('swarm');
    this.setStage('cortex', { immediateCamera: true });
    this._animate();
  }

  _initRenderer() {
    const renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    this.renderer = renderer;
  }

  _initScene() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x04060c, 0.14);
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(54, w / h, 0.004, 120);
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.enablePan = true;
    this.controls.screenSpacePanning = true;
    this.controls.minDistance = 0.05;
    this.controls.maxDistance = 12;

    this.raycaster = new THREE.Raycaster();
    this.pointerNdc = new THREE.Vector2();
    this.userDragging = false;
    this.controls.addEventListener('start', () => {
      this.userDragging = true;
    });
    this.controls.addEventListener('end', () => {
      this.userDragging = false;
    });

    // Halo atmosphérique violet profond discret derrière le spécimen actif
    this.bgAura = createRadialSprite([120, 80, 200], 3.8);
    this.bgAura.sprite.position.set(0, -0.1, -1.2);
    this.bgAura.mat.opacity = 0.13;
    this.bgAura.mat.depthTest = false;
    this.bgAura.sprite.renderOrder = -10;
    this.scene.add(this.bgAura.sprite);
  }

  _buildGeometry(part) {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(part.positions, 3));
    geom.setAttribute('normal', new THREE.BufferAttribute(part.normals, 3));
    geom.setAttribute('aAo', new THREE.BufferAttribute(part.shade, 1));
    geom.setAttribute('aComp', new THREE.BufferAttribute(part.comp, 1));
    geom.setAttribute('aTalong', new THREE.BufferAttribute(part.tAlong, 1));
    geom.setIndex(new THREE.BufferAttribute(part.indices, 1));
    return geom;
  }

  _makeNeuronShader(colorHex, edgeHex = '#a7f0ff', transMode = 0) {
    return new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(colorHex) },
        uEdgeColor: { value: new THREE.Color(edgeHex) },
        uOpacity: { value: 0.94 },
        uTime: { value: 0 },
        uFocusComp: { value: 0 },
        uPulse: { value: 0 },
        uFlowPhase: { value: -1 },
        uWaveComp: { value: -1 },
        uTransMode: { value: transMode },
      },
      vertexShader: NEURON_VERT,
      fragmentShader: NEURON_FRAG,
      transparent: true,
      depthWrite: true,
      side: THREE.DoubleSide,
    });
  }

  _buildStageGroups() {
    this.partsByKey = new Map();
    for (const p of this.data.parts) this.partsByKey.set(p.key, p);

    // ---- Stage 1 : Morceau de cortex (10 cellules dans un cube stéréotaxique 1 mm³) ----
    this.cortexGroup = new THREE.Group();
    this.scene.add(this.cortexGroup);
    this.clusterCells = [];
    this.clusterHitMeshes = [];

    for (const p of this.data.parts) {
      if (p.group !== 'cluster') continue;
      const geom = this._buildGeometry(p);
      const mat = this._makeNeuronShader(p.color, '#9de8ff');
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(...p.pos);
      mesh.scale.setScalar(p.scale);
      mesh.userData.cellMeta = p;
      this.cortexGroup.add(mesh);

      const wireMat = new THREE.MeshBasicMaterial({
        color: p.color,
        wireframe: true,
        transparent: true,
        opacity: 0.045,
        depthWrite: false,
      });
      const wire = new THREE.Mesh(geom, wireMat);
      mesh.add(wire);

      this.clusterCells.push({ p, mesh, mat, wireMat });
      this.clusterHitMeshes.push(mesh);
    }

    // Cube cortical ~1 mm³ discret en fil de fer brillant
    const boxGeom = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.75, 1.75, 1.75));
    const boxMat = new THREE.LineBasicMaterial({
      color: 0x628cff,
      transparent: true,
      opacity: 0.22,
    });
    this.cortexCube = new THREE.LineSegments(boxGeom, boxMat);
    this.cortexGroup.add(this.cortexCube);

    // ---- Stage 2 : Un neurone (Héros pyramidal + épines) ----
    this.heroGroup = new THREE.Group();
    this.scene.add(this.heroGroup);
    const hp = this.partsByKey.get('hero_pyramidal');
    if (hp) {
      const hGeom = this._buildGeometry(hp);
      this.heroMat = this._makeNeuronShader('#5b7cff', '#7ee0ff');
      this.heroMesh = new THREE.Mesh(hGeom, this.heroMat);
      this.heroMesh.position.set(...hp.pos);
      this.heroMesh.scale.setScalar(hp.scale);
      this.heroGroup.add(this.heroMesh);
      const wireMat = new THREE.MeshBasicMaterial({
        color: '#88cfff',
        wireframe: true,
        transparent: true,
        opacity: 0.04,
        depthWrite: false,
      });
      this.heroMesh.add(new THREE.Mesh(hGeom, wireMat));

      // Calculer les ancres réelles (soma, dendrite apicale haute, milieu de l'axone)
      const nV = hp.comp.length;
      const sx = [0, 0, 0];
      let sc = 0;
      let topY = -Infinity;
      let topIdx = 0;
      for (let i = 0; i < nV; i++) {
        const c = Math.round(hp.comp[i]);
        const vy = hp.positions[i * 3 + 1];
        if (c === 1) {
          sx[0] += hp.positions[i * 3];
          sx[1] += vy;
          sx[2] += hp.positions[i * 3 + 2];
          sc += 1;
        }
        if ((c === 3 || c === 4) && vy > topY) {
          topY = vy;
          topIdx = i;
        }
      }
      const somaLocal = sc > 0 ? new THREE.Vector3(sx[0] / sc, sx[1] / sc, sx[2] / sc) : new THREE.Vector3(0, 0, 0);
      let axSum = [0, 0, 0];
      let axN = 0;
      let dMax = 0;
      for (let i = 0; i < nV; i++) {
        if (Math.round(hp.comp[i]) !== 2) continue;
        const dx = hp.positions[i * 3] - somaLocal.x;
        const dy = hp.positions[i * 3 + 1] - somaLocal.y;
        const dz = hp.positions[i * 3 + 2] - somaLocal.z;
        dMax = Math.max(dMax, Math.hypot(dx, dy, dz));
      }
      for (let i = 0; i < nV; i++) {
        if (Math.round(hp.comp[i]) !== 2) continue;
        const x = hp.positions[i * 3];
        const y = hp.positions[i * 3 + 1];
        const z = hp.positions[i * 3 + 2];
        const d = Math.hypot(x - somaLocal.x, y - somaLocal.y, z - somaLocal.z);
        if (d > dMax * 0.35 && d < dMax * 0.78) {
          axSum[0] += x;
          axSum[1] += y;
          axSum[2] += z;
          axN += 1;
        }
      }
      const toWorld = (v) => v.multiplyScalar(hp.scale).add(new THREE.Vector3(...hp.pos));
      const dendLocal = new THREE.Vector3(
        hp.positions[topIdx * 3],
        topY * 0.72 + somaLocal.y * 0.28,
        hp.positions[topIdx * 3 + 2]
      );
      const axonLocal = axN > 0
        ? new THREE.Vector3(axSum[0] / axN, axSum[1] / axN, axSum[2] / axN)
        : new THREE.Vector3(somaLocal.x + 0.25, somaLocal.y - 0.1, somaLocal.z);
      this.heroAnchors = {
        soma: toWorld(somaLocal.clone()),
        dendrites: toWorld(dendLocal),
        axon: toWorld(axonLocal),
      };
    }

    // ---- Stages 3 & 4 : Synapse (~20 nm) & Potentiel d'action ----
    this.synGroup = new THREE.Group();
    this.scene.add(this.synGroup);

    const pPost = this.partsByKey.get('synapse_post');
    const pPre = this.partsByKey.get('synapse_pre');
    const pDet = this.partsByKey.get('synapse_detail');

    if (pPost) {
      this.synPostMat = this._makeNeuronShader('#4a8bff', '#9ad4ff');
      this.synPostMesh = new THREE.Mesh(this._buildGeometry(pPost), this.synPostMat);
      this.synGroup.add(this.synPostMesh);
    }
    if (pPre) {
      this.synPreMat = this._makeNeuronShader('#ffd24a', '#fff0a8');
      this.synPreMesh = new THREE.Mesh(this._buildGeometry(pPre), this.synPreMat);
      this.synGroup.add(this.synPreMesh);
    }
    if (pDet) {
      // Séparer les organites/récepteurs opaques (comp != 2) de l'enveloppe translucide du bouton (comp == 2)
      const innerIdx = [];
      const outerIdx = [];
      const idx = pDet.indices;
      for (let i = 0; i < idx.length; i += 3) {
        const a = idx[i];
        const b = idx[i + 1];
        const c = idx[i + 2];
        const isBouton = Math.round(pDet.comp[a]) === 2 && Math.round(pDet.comp[b]) === 2 && Math.round(pDet.comp[c]) === 2;
        if (isBouton) outerIdx.push(a, b, c);
        else innerIdx.push(a, b, c);
      }
      const innerGeom = this._buildGeometry(pDet);
      innerGeom.setIndex(new THREE.BufferAttribute(new Uint32Array(innerIdx), 1));
      this.synDetailMat = this._makeNeuronShader('#ffd24a', '#a7f0ff', 1.0);
      this.synDetailMesh = new THREE.Mesh(innerGeom, this.synDetailMat);
      this.synDetailMesh.renderOrder = 1;
      this.synGroup.add(this.synDetailMesh);

      if (outerIdx.length > 0) {
        const outerGeom = this._buildGeometry(pDet);
        outerGeom.setIndex(new THREE.BufferAttribute(new Uint32Array(outerIdx), 1));
        this.synBoutonMat = this._makeNeuronShader('#ffd24a', '#ffe8a3', 1.0);
        this.synBoutonMat.depthWrite = false;
        this.synBoutonMat.side = THREE.FrontSide;
        this.synBoutonMesh = new THREE.Mesh(outerGeom, this.synBoutonMat);
        this.synBoutonMesh.renderOrder = 3;
        this.synGroup.add(this.synBoutonMesh);
      }
    }

    // Marqueur lumineux vert menthe sur le locus synaptique
    const sp = this.data.synapsePaths;
    this.synPaths = {
      center: new THREE.Vector3(...sp.synapse_center),
      spineHead: new THREE.Vector3(...sp.spine_head),
      boutonCenter: new THREE.Vector3(...sp.bouton_center),
      cleftDir: new THREE.Vector3(...sp.cleft_dir),
      receptors: sp.receptors.map((v) => new THREE.Vector3(...v)),
      preAxon: sp.pre_axon.map((v) => new THREE.Vector3(...v)),
      postApical: sp.post_apical.map((v) => new THREE.Vector3(...v)),
      postAxon: sp.post_axon.map((v) => new THREE.Vector3(...v)),
    };

    this.synMarker = createRadialSprite([156, 232, 192], 0.065);
    this.synMarker.sprite.position.copy(this.synPaths.center);
    this.synGroup.add(this.synMarker.sprite);

    // Molécules de Curare (bloqueurs rouge rubis sur les récepteurs) & Nicotine (agonistes émeraude)
    this.curareGroup = new THREE.Group();
    this.nicotineGroup = new THREE.Group();
    const blockerGeom = new THREE.SphereGeometry(0.0011, 16, 12);
    const curareMat = new THREE.MeshBasicMaterial({ color: 0xff4066 });
    const nicMat = new THREE.MeshBasicMaterial({ color: 0x1ee8a0 });
    this.blockerMeshes = [];
    this.nicMeshes = [];
    for (const rPos of this.synPaths.receptors) {
      const mC = new THREE.Mesh(blockerGeom, curareMat);
      mC.position.copy(rPos).addScaledVector(this.synPaths.cleftDir, 0.0007);
      this.curareGroup.add(mC);
      this.blockerMeshes.push(mC);

      const mN = new THREE.Mesh(blockerGeom, nicMat);
      mN.position.copy(rPos).addScaledVector(this.synPaths.cleftDir, 0.0006);
      this.nicotineGroup.add(mN);
      this.nicMeshes.push(mN);
    }
    this.curareGroup.visible = false;
    this.nicotineGroup.visible = false;
    this.synGroup.add(this.curareGroup);
    this.synGroup.add(this.nicotineGroup);

    // ---- Stage 5 : Activité corticale (76 neurones pyramidaux en InstancedMesh + Halo) ----
    this.swarmGroup = new THREE.Group();
    this.scene.add(this.swarmGroup);
    const sw = this.data.swarm;
    const texData = new Uint8Array((sw.nCells + 1) * 4);
    texData.fill(40);
    this.activityTexData = texData;
    this.activityTex = new THREE.DataTexture(texData, sw.nCells + 1, 1, THREE.RGBAFormat, THREE.UnsignedByteType);
    this.activityTex.minFilter = THREE.NearestFilter;
    this.activityTex.magFilter = THREE.NearestFilter;
    this.activityTex.needsUpdate = true;

    this.swarmCoreMat = new THREE.ShaderMaterial({
      uniforms: {
        uActivityTex: { value: this.activityTex },
        uTexWidth: { value: sw.nCells + 1 },
        uTime: { value: 0 },
        uStyle: { value: 0 },
      },
      vertexShader: SWARM_VERT,
      fragmentShader: SWARM_FRAG,
      transparent: true,
      side: THREE.DoubleSide,
    });

    this.swarmHaloMat = new THREE.ShaderMaterial({
      uniforms: {
        uActivityTex: { value: this.activityTex },
        uTexWidth: { value: sw.nCells + 1 },
      },
      vertexShader: HALO_VERT,
      fragmentShader: HALO_FRAG,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.BackSide,
    });

    // Grouper les 76 instances par archétype (8 appels de rendu seulement!)
    const byArch = Array.from({ length: 8 }, () => []);
    for (const inst of sw.instances) byArch[inst.arch % 8].push(inst);

    const dummy = new THREE.Object3D();
    this.swarmHaloMeshes = [];
    this.somaFlashPoints = null;

    byArch.forEach((instList, archIdx) => {
      if (!instList.length) return;
      const part = this.partsByKey.get(`swarm_arch_${archIdx}`);
      if (!part) return;

      const baseGeom = this._buildGeometry(part);
      const cnt = instList.length;
      const cellIds = new Float32Array(cnt);
      const cellHues = new Float32Array(cnt);
      for (let i = 0; i < cnt; i++) {
        cellIds[i] = instList[i].id;
        cellHues[i] = instList[i].hue;
      }

      const instGeom = baseGeom.clone();
      instGeom.setAttribute('aCellId', new THREE.InstancedBufferAttribute(cellIds, 1));
      instGeom.setAttribute('aCellHue', new THREE.InstancedBufferAttribute(cellHues, 1));

      const imCore = new THREE.InstancedMesh(instGeom, this.swarmCoreMat, cnt);
      const imHalo = new THREE.InstancedMesh(instGeom, this.swarmHaloMat, cnt);
      for (let i = 0; i < cnt; i++) {
        const it = instList[i];
        dummy.position.set(...it.pos);
        dummy.rotation.set(0, it.rotY, 0);
        dummy.scale.setScalar(it.scale);
        dummy.updateMatrix();
        imCore.setMatrixAt(i, dummy.matrix);
        imHalo.setMatrixAt(i, dummy.matrix);
      }
      imCore.instanceMatrix.needsUpdate = true;
      imHalo.instanceMatrix.needsUpdate = true;
      this.swarmGroup.add(imCore);
      this.swarmGroup.add(imHalo);
      this.swarmHaloMeshes.push(imHalo);
    });

    // Particules lumineuses aux somas de l'essaim calcique
    const somaPos = new Float32Array(sw.nCells * 3);
    const somaCellId = new Float32Array(sw.nCells);
    for (let i = 0; i < sw.nCells; i++) {
      const it = sw.instances[i];
      somaPos[i * 3] = it.pos[0];
      somaPos[i * 3 + 1] = it.pos[1];
      somaPos[i * 3 + 2] = it.pos[2];
      somaCellId[i] = it.id;
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(somaPos, 3));
    sg.setAttribute('aCellId', new THREE.BufferAttribute(somaCellId, 1));
    this.somaFlashMat = new THREE.ShaderMaterial({
      uniforms: {
        uActivityTex: { value: this.activityTex },
        uTexWidth: { value: sw.nCells + 1 },
      },
      vertexShader: `
        attribute float aCellId;
        uniform sampler2D uActivityTex;
        uniform float uTexWidth;
        varying float vAct;
        void main() {
          vAct = texture2D(uActivityTex, vec2((aCellId + 0.5) / uTexWidth, 0.5)).r;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = (10.0 + 38.0 * vAct * vAct) * (1.0 / max(0.25, -mv.z));
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        varying float vAct;
        void main() {
          float r = length(gl_PointCoord - 0.5);
          if (r > 0.5) discard;
          float c = pow(smoothstep(0.5, 0.0, r), 2.4);
          vec3 col = mix(vec3(0.55, 0.45, 1.0), vec3(1.0, 0.94, 0.85), vAct);
          gl_FragColor = vec4(col, c * (0.02 + 0.44 * vAct * vAct));
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.somaFlashPoints = new THREE.Points(sg, this.somaFlashMat);
    this.swarmGroup.add(this.somaFlashPoints);
  }

  _buildBackgroundSomas() {
    // Nuage de somas cosmiques scintillants en toile de fond
    const count = 220;
    const pos = new Float32Array(count * 3);
    const seed = new Float32Array(count * 4);
    for (let i = 0; i < count; i++) {
      const r = 1.8 + Math.random() * 4.5;
      const a = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 4.2;
      const sp = 0.02 + Math.random() * 0.06;
      seed[i * 4] = r;
      seed[i * 4 + 1] = a;
      seed[i * 4 + 2] = y;
      seed[i * 4 + 3] = sp;
      pos[i * 3] = Math.cos(a) * r;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(a) * r;
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geom.setAttribute('seed', new THREE.BufferAttribute(seed, 4));
    this.bgSomasMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 0.55 },
      },
      vertexShader: `
        attribute vec4 seed;
        uniform float uTime;
        uniform float uOpacity;
        varying float vAlpha;
        void main() {
          float r = seed.x;
          float a = seed.y + uTime * seed.w;
          vec3 p = vec3(cos(a) * r, seed.z + sin(a * 0.4) * 0.25, sin(a) * r);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          float twinkle = 0.45 + 0.55 * sin(uTime * 1.1 + seed.y * 5.0);
          vAlpha = clamp(1.0 / (1.0 + length(mv.xyz) * 0.22), 0.06, 0.5) * twinkle * uOpacity;
          gl_PointSize = (1.5 - clamp(length(mv.xyz) * 0.14, 0.0, 1.0)) * twinkle * (180.0 / max(0.3, -mv.z));
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        void main() {
          float r = length(gl_PointCoord - 0.5);
          if (r > 0.5) discard;
          float core = pow(1.0 - r * 2.0, 1.8);
          vec3 col = mix(vec3(0.50, 0.65, 1.0), vec3(0.95, 0.85, 1.0), core);
          gl_FragColor = vec4(col * core, core * vAlpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.bgSomas = new THREE.Points(geom, this.bgSomasMat);
    this.scene.add(this.bgSomas);
  }

  _buildApPulsePool() {
    // Pool de 8 signaux simultanés (comète dorée présynaptique + comète bleue postsynaptique)
    this.apPool = [];
    for (let i = 0; i < 8; i++) {
      const slot = {
        axonBloom: createRadialSprite([255, 216, 96], 0.24),
        pyrBloom: createRadialSprite([136, 207, 255], 0.24),
        trailGold: createTrailPoints('#ffe28a', 68),
        trailBlue: createTrailPoints('#9ad4ff', 68),
        firedAt: -1,
      };
      this.synGroup.add(slot.axonBloom.sprite);
      this.synGroup.add(slot.pyrBloom.sprite);
      this.synGroup.add(slot.trailGold.points);
      this.synGroup.add(slot.trailBlue.points);
      this.apPool.push(slot);
    }
  }

  _buildNeurotransmitters() {
    // 32 neurotransmetteurs dans la fente synaptique (~20 nm)
    this.ntCount = 32;
    this.ntPos = new Float32Array(this.ntCount * 3);
    this.ntSeeds = Array.from({ length: this.ntCount }, (_, i) => ({
      lat1: (Math.sin(i * 12.9898) * 0.5) * 0.0052,
      lat2: (Math.cos(i * 78.233) * 0.5) * 0.0052,
      delay: (i % 8) * 0.035,
      speed: 0.78 + (i % 5) * 0.08,
    }));

    const oc = document.createElement('canvas');
    oc.width = 64;
    oc.height = 64;
    const octx = oc.getContext('2d');
    const og = octx.createRadialGradient(32, 32, 0, 32, 32, 32);
    og.addColorStop(0.0, 'rgba(255,255,255,1)');
    og.addColorStop(0.45, 'rgba(255,255,255,0.92)');
    og.addColorStop(0.80, 'rgba(255,255,255,0.35)');
    og.addColorStop(1.0, 'rgba(255,255,255,0)');
    octx.fillStyle = og;
    octx.fillRect(0, 0, 64, 64);
    const orbTex = new THREE.CanvasTexture(oc);

    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.ntPos, 3));
    this.ntMat = new THREE.PointsMaterial({
      size: 0.0034,
      map: orbTex,
      alphaTest: 0.004,
      color: '#a8ffda',
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    this.ntPoints = new THREE.Points(g, this.ntMat);
    this.ntPoints.frustumCulled = false;
    this.synGroup.add(this.ntPoints);
    this.ntBurstAt = -99;
  }

  _bindEvents() {
    this.canvas.addEventListener('pointermove', (e) => {
      if (this.paused || this.state.stage !== 'cortex') return;
      const rect = this.canvas.getBoundingClientRect();
      this.pointerNdc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.pointerNdc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      this.raycaster.setFromCamera(this.pointerNdc, this.camera);
      const hits = this.raycaster.intersectObjects(this.clusterHitMeshes, false);
      const cell = hits.length ? hits[0].object.userData.cellMeta : null;
      this.state.hoveredCell = cell;
      this.canvas.classList.toggle('pointer', Boolean(cell));
      this.cb.onHoverCell?.(cell, e.clientX, e.clientY);
    });

    this.canvas.addEventListener('click', (e) => {
      if (this.paused) return;
      if (this.state.stage === 'synapse' || this.state.stage === 'pa') {
        this.fireActionPotential();
      } else if (this.state.stage === 'cortex' && this.state.hoveredCell) {
        const key = this.state.hoveredCell.key;
        this.state.selectedCellKey = this.state.selectedCellKey === key ? null : key;
        this.cb.onSelectCell?.(this.state.selectedCellKey ? this.state.hoveredCell : null);
      }
    });
  }

  // -------------------- API publique pilotée par app.js --------------------

  setStage(stageId, opts = {}) {
    this.state.stage = stageId;
    this.state.selectedCellKey = null;
    this.state.hoveredCell = null;
    if (stageId === 'synapse') {
      this.state.synapseZoom = opts.synapseZoom || 'contact';
    }

    const targetFov = stageId === 'activite' ? 40 : 54;
    if (this.camera.fov !== targetFov) {
      this.camera.fov = targetFov;
      this.camera.updateProjectionMatrix();
    }
    if (this.scene.fog) {
      this.scene.fog.density =
        stageId === 'cortex' ? 0.15 : stageId === 'neurone' ? 0.12 : stageId === 'activite' ? 0.07 : 0.05;
    }

    this.cortexGroup.visible =
      stageId === 'cortex' || stageId === 'neurone' || stageId === 'synapse' || stageId === 'pa';
    this.heroGroup.visible = stageId === 'neurone';
    this.synGroup.visible = stageId === 'synapse' || stageId === 'pa';
    this.swarmGroup.visible = stageId === 'activite';
    if (this.cortexCube) this.cortexCube.visible = false;

    const dur = opts.immediateCamera ? 0 : 760;
    for (const s of this.apPool) s.firedAt = -1;
    this.ntBurstAt = -99;

    if (stageId === 'cortex') {
      this.cortexGroup.rotation.y = 0;
      for (const c of this.clusterCells) {
        c.mesh.visible = true;
        c.mat.uniforms.uOpacity.value = 0.94;
        c.wireMat.opacity = 0.04;
      }
      this.controls.minDistance = 0.7;
      this.controls.maxDistance = 8.0;
      this._flyTo([0.16, 0.16, 3.35], [-0.24, -0.20, 0], dur);
    } else if (stageId === 'neurone') {
      for (const c of this.clusterCells) {
        c.mesh.visible = c.p.key !== 'cluster_pyramidal_1';
        c.mat.uniforms.uOpacity.value = 0.065;
        c.wireMat.opacity = 0.008;
      }
      this.controls.minDistance = 0.45;
      this.controls.maxDistance = 6.5;
      this.fireNeuronDemo();
      this._flyTo([-0.18, 0.08, 2.15], [-0.22, -0.24, 0], dur);
    } else if (stageId === 'synapse') {
      for (const c of this.clusterCells) {
        c.mesh.visible = c.p.key !== 'cluster_pyramidal_1';
        c.mat.uniforms.uOpacity.value = 0.032;
        c.wireMat.opacity = 0.003;
      }
      this._applySynapseZoom(dur);
      this.fireActionPotential();
    } else if (stageId === 'pa') {
      for (const c of this.clusterCells) {
        c.mesh.visible = c.p.key !== 'cluster_pyramidal_1';
        c.mat.uniforms.uOpacity.value = 0.032;
        c.wireMat.opacity = 0.003;
      }
      if (this.synDetailMesh) this.synDetailMesh.visible = true;
      if (this.synBoutonMesh) {
        this.synBoutonMesh.visible = true;
        this.synBoutonMat.uniforms.uTransMode.value = 0.0;
      }
      this.curareGroup.visible = false;
      this.nicotineGroup.visible = false;
      this.ntPoints.visible = false;
      this.controls.minDistance = 0.35;
      this.controls.maxDistance = 6.0;
      this._flyTo([0.22, -0.12, 2.42], [0.03, -0.32, 0], dur);
      this.fireActionPotential();
    } else if (stageId === 'activite') {
      const box = new THREE.Box3().setFromObject(this.swarmGroup);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const j = Math.max(size.x, size.y, size.z) * 0.56 + 0.32;
      const dist = j / Math.tan((40 * Math.PI) / 360);
      this.controls.minDistance = 1.1;
      this.controls.maxDistance = 12.0;
      this._flyTo(
        [center.x + 0.65 * dist - 0.28, center.y + 0.40 * dist, center.z + 0.86 * dist],
        [center.x - 0.36, center.y - 0.04, center.z],
        dur,
      );
    }
    this.cb.onStateChange?.(this.state);
  }

  _applySynapseZoom(durMs = 740) {
    const ultra = this.state.synapseZoom === 'ultra';
    if (this.synDetailMesh) this.synDetailMesh.visible = true;
    if (this.synBoutonMesh) {
      this.synBoutonMesh.visible = true;
      this.synBoutonMat.uniforms.uTransMode.value = ultra ? 1.0 : 0.0;
    }
    this.curareGroup.visible = ultra && this.state.synapseMode === 'curare';
    this.nicotineGroup.visible = ultra && this.state.synapseMode === 'nicotine';
    this.ntPoints.visible = ultra;
    this.controls.minDistance = 0.025;
    this.controls.maxDistance = 2.4;
    if (ultra) {
      const c = this.synPaths.center;
      this._flyTo([c.x + 0.008, c.y + 0.006, c.z + 0.076], [c.x - 0.004, c.y, c.z], durMs);
    } else {
      this._flyTo([0.06, 0.015, 1.05], [0.10, -0.05, 0.0], durMs);
    }
  }

  setSynapseZoom(zoom) {
    this.state.synapseZoom = zoom === 'ultra' ? 'ultra' : 'contact';
    if (this.state.stage === 'synapse') {
      for (const s of this.apPool) s.firedAt = -1;
      this._applySynapseZoom(740);
      this.fireActionPotential();
    }
    this.cb.onStateChange?.(this.state);
  }

  setCompartment(compId) {
    this.state.compartment = compId;
    if (this.heroMat) {
      this.heroMat.uniforms.uFocusComp.value =
        compId === 'soma' ? 1 : compId === 'axon' ? 2 : compId === 'dendrites' ? 34 : 0;
    }
    if (compId !== 'all') this.fireNeuronDemo();
    this.cb.onStateChange?.(this.state);
  }

  fireNeuronDemo() {
    this.neuronDemoPhase = 0;
  }

  setSynapseMode(mode) {
    this.state.synapseMode = mode;
    if (mode === 'curare' || mode === 'nicotine') {
      this.state.synapseZoom = 'ultra';
    }
    if (this.state.stage === 'synapse') {
      this._applySynapseZoom(680);
    } else {
      this.curareGroup.visible = mode === 'curare';
      this.nicotineGroup.visible = mode === 'nicotine';
    }
    for (const s of this.apPool) s.firedAt = -1;
    this.fireActionPotential();
    this.cb.onStateChange?.(this.state);
  }

  fireActionPotential() {
    const slot = this.apPool.find((s) => s.firedAt < 0) || this.apPool[0];
    slot.firedAt = this.simTime;
    this.lastAutoApAt = this.simTime;
    if (this.state.stage === 'synapse') {
      this.ntBurstAt = this.simTime;
    }
  }

  setSlowMo(on) {
    this.state.slowMo = Boolean(on);
    this.cb.onStateChange?.(this.state);
  }

  setAutoLoop(on) {
    this.state.autoLoop = Boolean(on);
    this.cb.onStateChange?.(this.state);
  }

  setActivityPlaying(on) {
    this.state.activityPlaying = Boolean(on);
    this.cb.onStateChange?.(this.state);
  }

  setActivityStyle(style) {
    this.state.activityStyle = style;
    const isWaves = style === 'waves';
    this.swarmCoreMat.uniforms.uStyle.value = isWaves ? 1 : 0;
    for (const h of this.swarmHaloMeshes) h.visible = isWaves;
    this.somaFlashPoints.visible = !isWaves;
    this.cb.onStateChange?.(this.state);
  }

  triggerCorticalWave() {
    this.stimulusWaveAt = this.simTime;
  }

  setAutoRotate(on) {
    this.state.autoRotate = Boolean(on);
    this.cb.onStateChange?.(this.state);
  }

  getClusterCells() {
    return this.clusterCells.map((c) => c.p);
  }

  focusCell(cellKey) {
    const next = !cellKey || this.state.selectedCellKey === cellKey ? null : cellKey;
    this.state.selectedCellKey = next;
    const found = next ? this.clusterCells.find((c) => c.p.key === next)?.p || null : null;
    this.cb.onSelectCell?.(found);
    this.cb.onStateChange?.(this.state);
  }

  resetView() {
    this.setStage(this.state.stage, {
      immediateCamera: false,
      synapseZoom: this.state.synapseZoom,
    });
  }

  projectPointToScreen(vec3) {
    const v = vec3.clone().project(this.camera);
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    return {
      visible: v.z < 1 && v.z > -1,
      x: (v.x * 0.5 + 0.5) * w,
      y: (-v.y * 0.5 + 0.5) * h,
    };
  }

  getNeuronCallouts() {
    if (this.state.stage !== 'neurone') return [];
    const a = this.heroAnchors || {
      dendrites: new THREE.Vector3(0.14, 0.38, 0),
      soma: new THREE.Vector3(0, -0.15, 0),
      axon: new THREE.Vector3(0.42, -0.25, 0),
    };
    return [
      { id: 'dendrites', label: 'Dendrites & épines · Réception', pos: a.dendrites },
      { id: 'soma', label: 'Corps cellulaire (soma) · Intégration', pos: a.soma },
      { id: 'axon', label: 'Axone · Conduction du message', pos: a.axon },
    ].map((pt) => ({ ...pt, ...this.projectPointToScreen(pt.pos) }));
  }

  getSynapseCallouts() {
    if (this.state.stage !== 'synapse') return [];
    const s = this.synPaths;
    if (this.state.synapseZoom !== 'ultra') {
      return [
        { label: 'Arborisation axonale présynaptique (doré)', pos: new THREE.Vector3(0.36, 0.16, 0) },
        { label: 'Zone de contact synaptique (~20 nm)', pos: s.center.clone().add(new THREE.Vector3(0, 0.03, 0)) },
        { label: 'Dendrite apicale postsynaptique (bleu)', pos: new THREE.Vector3(-0.08, -0.22, 0) },
      ].map((pt) => ({ ...pt, ...this.projectPointToScreen(pt.pos) }));
    }
    return [
      { label: 'Bouton présynaptique & vésicules', pos: s.boutonCenter.clone().add(new THREE.Vector3(0.008, 0.015, 0)) },
      { label: 'Fente synaptique (~20 nm)', pos: s.center.clone().add(new THREE.Vector3(0, -0.020, 0)) },
      { label: 'Épine & récepteurs postsynaptiques', pos: s.spineHead.clone().add(new THREE.Vector3(-0.014, 0.015, 0)) },
    ].map((pt) => ({ ...pt, ...this.projectPointToScreen(pt.pos) }));
  }

  _flyTo(posArr, lookArr, dur = 750) {
    const to = new THREE.Vector3(...posArr);
    const toTarget = new THREE.Vector3(...lookArr);
    if (dur <= 0) {
      this.camera.position.copy(to);
      this.controls.target.copy(toTarget);
      this.controls.update();
      this.flyAnim = null;
      return;
    }
    this.flyAnim = {
      t0: performance.now(),
      dur,
      from: this.camera.position.clone(),
      to,
      fromTarget: this.controls.target.clone(),
      toTarget,
    };
  }

  resize() {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    this.camera.aspect = w / Math.max(1, h);
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h, false);
  }

  capturePng() {
    this.renderer.render(this.scene, this.camera);
    // Compositer sur le fond obsidienne cosmique pour une capture fidèle et lisible à l'impression
    const w = this.canvas.width;
    const h = this.canvas.height;
    const out = document.createElement('canvas');
    out.width = w;
    out.height = h;
    const ctx = out.getContext('2d');
    const g = ctx.createRadialGradient(w * 0.5, h * 0.45, 0, w * 0.5, h * 0.5, Math.max(w, h) * 0.65);
    g.addColorStop(0, '#1c2742');
    g.addColorStop(1, '#04060c');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(this.canvas, 0, 0);
    return out.toDataURL('image/png');
  }

  // -------------------- Boucle d'animation --------------------

  _updateSynapseAndAp(dt) {
    const isSynView = this.state.stage === 'synapse';
    const isApView = this.state.stage === 'pa';
    if (!isSynView && !isApView) return;

    const speedMul = this.state.slowMo ? 0.35 : 1.0;
    const dur = isSynView ? 3.2 : 3.9;
    const anyActive = this.apPool.some((s) => s.firedAt >= 0);

    // Boucle automatique propre : relancer un unique influx une fois le précédent terminé
    if (this.state.autoLoop && !anyActive && this.simTime - this.lastAutoApAt > (isSynView ? 0.8 : 0.7)) {
      this.fireActionPotential();
    }

    const tCut1 = 0.30; // fin descente axone présynaptique
    const tCut2 = 0.40; // franchissement fente synaptique ~20 nm
    const tCut3 = 0.67; // descente dendrite -> soma bleu
    const tCut4 = 0.96; // décharge axone du neurone bleu

    let preFlow = -1;
    let postFlow = -1;
    let postWaveComp = -1;
    let bestPulse = 0;

    for (const slot of this.apPool) {
      if (slot.firedAt < 0) {
        slot.axonBloom.mat.opacity = 0;
        slot.pyrBloom.mat.opacity = 0;
        slot.axonBloom.sprite.visible = false;
        slot.pyrBloom.sprite.visible = false;
        slot.trailGold.mat.uniforms.uOpacity.value = 0;
        slot.trailBlue.mat.uniforms.uOpacity.value = 0;
        continue;
      }

      const elapsed = (this.simTime - slot.firedAt) * speedMul;
      const c = elapsed / dur;
      if (c >= 1.0) {
        slot.firedAt = -1;
        continue;
      }

      const blocked = this.state.synapseMode === 'curare';
      const nicHyper = this.state.synapseMode === 'nicotine';
      const isUltra = isSynView && this.state.synapseZoom === 'ultra';
      const bloomScale = isUltra ? 0.008 : isSynView ? 0.024 : 0.088;
      const bloomOpMul = isUltra ? 0.0 : isSynView ? 0.42 : 0.92;
      slot.axonBloom.sprite.scale.setScalar(bloomScale);
      slot.pyrBloom.sprite.scale.setScalar(bloomScale * (nicHyper ? 1.12 : 1.0));

      if (c < tCut1) {
        const u = c / tCut1;
        samplePolyline(this.synPaths.preAxon, u, slot.axonBloom.sprite.position);
        slot.axonBloom.mat.opacity = 0.95 * bloomOpMul;
        slot.axonBloom.sprite.visible = bloomOpMul > 0.01;
        slot.pyrBloom.sprite.visible = false;
        updateTrail(slot.trailGold, this.synPaths.preAxon, u);
        slot.trailGold.mat.uniforms.uOpacity.value = isUltra ? 0.0 : 0.85;
        slot.trailBlue.mat.uniforms.uOpacity.value = 0;
        preFlow = u;
      } else if (c < tCut2) {
        const u = (c - tCut1) / (tCut2 - tCut1);
        slot.axonBloom.sprite.position.copy(this.synPaths.boutonCenter);
        slot.pyrBloom.sprite.position.copy(this.synPaths.spineHead);
        slot.axonBloom.mat.opacity = 0.95 * (1 - u) * bloomOpMul;
        slot.axonBloom.sprite.visible = bloomOpMul > 0.01;
        slot.pyrBloom.mat.opacity = blocked ? 0 : 0.92 * u * bloomOpMul;
        slot.pyrBloom.sprite.visible = !blocked && bloomOpMul > 0.01;
        slot.trailGold.mat.uniforms.uOpacity.value = isUltra ? 0.0 : 0.8 * (1 - u);
        slot.trailBlue.mat.uniforms.uOpacity.value = 0;
        bestPulse = Math.max(bestPulse, blocked ? 0.25 : 1.0);
        if (this.ntBurstAt < slot.firedAt) this.ntBurstAt = this.simTime;
      } else if (!blocked && c < tCut3) {
        const u = (c - tCut2) / (tCut3 - tCut2);
        samplePolyline(this.synPaths.postApical, u, slot.pyrBloom.sprite.position);
        slot.axonBloom.sprite.visible = false;
        slot.pyrBloom.mat.opacity = 0.96 * bloomOpMul;
        slot.pyrBloom.sprite.visible = bloomOpMul > 0.01;
        updateTrail(slot.trailBlue, this.synPaths.postApical, u);
        slot.trailGold.mat.uniforms.uOpacity.value = 0;
        slot.trailBlue.mat.uniforms.uOpacity.value = isUltra ? 0.0 : 0.85;
        postFlow = 0.85 - 0.7 * u;
        postWaveComp = 34;
        bestPulse = Math.max(bestPulse, 0.75);
      } else if (!blocked && c < tCut4) {
        const u = (c - tCut3) / (tCut4 - tCut3);
        samplePolyline(this.synPaths.postAxon, u, slot.pyrBloom.sprite.position);
        slot.axonBloom.sprite.visible = false;
        slot.pyrBloom.mat.opacity = 0.96 * bloomOpMul;
        slot.pyrBloom.sprite.visible = bloomOpMul > 0.01;
        updateTrail(slot.trailBlue, this.synPaths.postAxon, u);
        slot.trailGold.mat.uniforms.uOpacity.value = 0;
        slot.trailBlue.mat.uniforms.uOpacity.value = isUltra ? 0.0 : 0.85;
        postFlow = u;
        postWaveComp = 2;
        bestPulse = Math.max(bestPulse, 0.55);
      } else {
        slot.axonBloom.sprite.visible = false;
        slot.pyrBloom.sprite.visible = false;
        slot.trailGold.mat.uniforms.uOpacity.value = 0;
        slot.trailBlue.mat.uniforms.uOpacity.value = 0;
      }
    }

    if (this.synPreMat) {
      this.synPreMat.uniforms.uFlowPhase.value = preFlow;
      this.synPreMat.uniforms.uWaveComp.value = 2;
      this.synPreMat.uniforms.uTime.value = this.simTime;
    }
    if (this.synPostMat) {
      this.synPostMat.uniforms.uFlowPhase.value = postFlow;
      this.synPostMat.uniforms.uWaveComp.value = postWaveComp;
      this.synPostMat.uniforms.uPulse.value = bestPulse;
      this.synPostMat.uniforms.uTime.value = this.simTime;
    }
    const pulseDetail =
      this.state.synapseMode === 'curare' ? 0.1 : Math.max(bestPulse, this.state.synapseMode === 'nicotine' ? 0.55 : 0);
    if (this.synDetailMat) {
      this.synDetailMat.uniforms.uPulse.value = pulseDetail;
      this.synDetailMat.uniforms.uTime.value = this.simTime;
    }
    if (this.synBoutonMat) {
      this.synBoutonMat.uniforms.uPulse.value = pulseDetail;
      this.synBoutonMat.uniforms.uTime.value = this.simTime;
    }

    // Marqueur vert menthe synaptique (visible en vue contact réel + étape Potentiel d'action)
    const mOsc = 1 + 0.22 * Math.sin((this.simTime * Math.PI * 2) / 2.8);
    const showMarker = this.state.stage === 'pa' || (isSynView && this.state.synapseZoom !== 'ultra');
    this.synMarker.sprite.visible = showMarker;
    this.synMarker.mat.opacity = (isSynView ? 0.62 : 0.85) * mOsc;
    this.synMarker.sprite.scale.setScalar((isSynView ? 0.055 : 0.092) * mOsc);

    // Libération des neurotransmetteurs dans la fente de ~20 nm
    const ntAge = (this.simTime - this.ntBurstAt) * speedMul;
    if (ntAge >= 0 && ntAge < 2.2) {
      const nAttr = this.ntPoints.geometry.getAttribute('position');
      const blocked = this.state.synapseMode === 'curare';
      const nicHyper = this.state.synapseMode === 'nicotine';
      const dir = this.synPaths.cleftDir;
      const o1 = new THREE.Vector3(-dir.y, dir.x, 0).normalize();
      const o2 = new THREE.Vector3().crossVectors(dir, o1).normalize();
      for (let i = 0; i < this.ntCount; i++) {
        const s = this.ntSeeds[i];
        let u = Math.max(0, Math.min(1, (ntAge - s.delay) * s.speed * 0.72));
        if (blocked && u > 0.65) u = 0.65 + 0.08 * Math.sin(u * 12 + i);
        const start = this.synPaths.spineHead.clone().addScaledVector(dir, 0.0125);
        const end = this.synPaths.spineHead.clone().addScaledVector(dir, 0.0104);
        const pos = start.lerp(end, u);
        pos.addScaledVector(o1, s.lat1 * (1 + u * 0.4));
        pos.addScaledVector(o2, s.lat2 * (1 + u * 0.4));
        this.ntPos[i * 3] = pos.x;
        this.ntPos[i * 3 + 1] = pos.y;
        this.ntPos[i * 3 + 2] = pos.z;
      }
      nAttr.needsUpdate = true;
      this.ntMat.color.setHex(blocked ? 0xffb347 : nicHyper ? 0x38f2b8 : 0xa8ffda);
      this.ntMat.opacity = ntAge < 0.2 ? ntAge / 0.2 : Math.max(0, 1 - (ntAge - 0.5) / 1.7);
    } else {
      this.ntMat.opacity = 0;
    }
  }

  _updateSwarm() {
    if (this.state.stage !== 'activite') return;
    const sw = this.data.swarm;
    const loopT = ((this.simTime % sw.seconds) + sw.seconds) % sw.seconds;
    const fFloat = loopT * sw.fps;
    const f0 = Math.floor(fFloat) % sw.frames;
    const f1 = (f0 + 1) % sw.frames;
    const alpha = fFloat - Math.floor(fFloat);
    const waveAge = this.simTime - this.stimulusWaveAt;

    for (let i = 0; i < sw.nCells; i++) {
      const a0 = sw.traces[f0 * sw.nCells + i];
      const a1 = sw.traces[f1 * sw.nCells + i];
      let val = a0 + (a1 - a0) * alpha;
      // Vague déclenchée manuellement par le bouton "Stimuler le cortex"
      if (waveAge >= 0 && waveAge < 3.6) {
        const px = sw.instances[i].pos[0];
        const tHit = (px + 2.4) * 0.42;
        const dw = waveAge - tHit;
        if (dw > 0 && dw < 1.2) {
          val = Math.min(255, val + 215 * Math.exp(-dw * 2.5) * (1 - Math.exp(-dw * 25)));
        }
      }
      const v8 = Math.min(255, Math.max(0, val | 0));
      const off = i * 4;
      this.activityTexData[off] = v8;
      this.activityTexData[off + 1] = v8;
      this.activityTexData[off + 2] = v8;
      this.activityTexData[off + 3] = 255;
    }
    this.activityTex.needsUpdate = true;
    this.swarmCoreMat.uniforms.uTime.value = this.simTime;
  }

  _animate() {
    requestAnimationFrame(() => this._animate());
    const rawDt = Math.min(this.clock.getDelta(), 0.05);
    if (this.paused) return;

    const advanceTime = this.state.stage !== 'activite' || this.state.activityPlaying;
    if (advanceTime) this.simTime += rawDt;

    if (this.flyAnim) {
      const u = Math.min(1, (performance.now() - this.flyAnim.t0) / this.flyAnim.dur);
      const ease = u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
      this.camera.position.lerpVectors(this.flyAnim.from, this.flyAnim.to, ease);
      this.controls.target.lerpVectors(this.flyAnim.fromTarget, this.flyAnim.toTarget, ease);
      if (u >= 1) this.flyAnim = null;
    }

    // Rotation douce des spécimens (Cortex, Neurone, Activité) si l'utilisateur ne manipule pas
    if (this.state.autoRotate && !this.userDragging && !this.flyAnim) {
      if (this.state.stage === 'cortex') this.cortexGroup.rotation.y += rawDt * 0.06;
      if (this.state.stage === 'neurone' && this.heroMesh) this.heroMesh.rotation.y += rawDt * 0.08;
      if (this.state.stage === 'activite') this.swarmGroup.rotation.y += rawDt * 0.055;
    }

    // Surbrillance & étincelles discrètes sur Cortex & Neurone
    if (this.state.stage === 'cortex') {
      for (let i = 0; i < this.clusterCells.length; i++) {
        const c = this.clusterCells[i];
        c.mat.uniforms.uTime.value = this.simTime;
        const sel = this.state.selectedCellKey;
        const focus = sel ? (c.p.key === sel ? 1.0 : 0.16) : 0.94;
        c.mat.uniforms.uOpacity.value = focus;
        c.mat.uniforms.uFlowPhase.value = ((this.simTime * 0.25 + i * 0.37) % 2.4) - 0.2;
        c.mat.uniforms.uPulse.value = sel && c.p.key === sel ? 0.55 : 0.0;
      }
    }

    if (this.state.stage === 'neurone' && this.heroMat) {
      this.heroMat.uniforms.uTime.value = this.simTime;
      if (this.neuronDemoPhase >= 0) {
        this.neuronDemoPhase += rawDt * 0.42;
        if (this.neuronDemoPhase > 1.35) {
          this.neuronDemoPhase = -1;
          this.heroMat.uniforms.uFlowPhase.value = -1;
          this.heroMat.uniforms.uPulse.value = 0;
        } else if (this.neuronDemoPhase < 0.45) {
          // Onde dendritique convergente vers le soma
          const u = this.neuronDemoPhase / 0.45;
          this.heroMat.uniforms.uWaveComp.value = 34;
          this.heroMat.uniforms.uFlowPhase.value = 1.0 - u;
          this.heroMat.uniforms.uPulse.value = 0.25 * u;
        } else if (this.neuronDemoPhase < 0.60) {
          // Sommation au corps cellulaire (soma)
          this.heroMat.uniforms.uWaveComp.value = 1;
          this.heroMat.uniforms.uFlowPhase.value = 0.0;
          this.heroMat.uniforms.uPulse.value = 0.85;
        } else {
          // Décharge axonale efférente
          const u = (this.neuronDemoPhase - 0.60) / 0.75;
          this.heroMat.uniforms.uWaveComp.value = 2;
          this.heroMat.uniforms.uFlowPhase.value = u;
          this.heroMat.uniforms.uPulse.value = 0.4 * (1 - u);
        }
      }
    }

    this._updateSynapseAndAp(rawDt);
    this._updateSwarm();

    this.bgSomasMat.uniforms.uTime.value = this.simTime;
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    this.cb.onFrame?.();
  }
}
