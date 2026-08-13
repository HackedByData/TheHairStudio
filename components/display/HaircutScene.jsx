import React from 'react';

/**
 * The home hero background: a real-time 3D scene — the back of a woman's head,
 * her dark hair transformed to a warm ombre as the page scrolls: the colour
 * melts from the roots down through the lengths, the ends settle into soft
 * layers, and the gloss builds to a finished-treatment shine. The camera
 * pushes in from the wide figure to a close-up of the lengths. No scissors —
 * this is the colour chair, not the cutting chair. Pure with respect to
 * scroll: drive it with `progress` 0→1 — any frame is reproducible from
 * `progress` alone, and nothing animates while the page is idle.
 *
 * three.js is read from `window.THREE`, which the host page loads through the
 * pinned import map (see ui_kits/website/index.html). Until it resolves the
 * component renders flat black, so a module failure never takes the page down.
 */
export function HaircutScene({ progress = 0, strands = 2800, seed = 7, vignette = 0.62, style, ...rest }) {
  const hostRef = React.useRef(null);
  const apiRef = React.useRef(null);
  const progressRef = React.useRef(progress);
  const [ready, setReady] = React.useState(false);
  progressRef.current = progress;

  React.useEffect(() => {
    let cancelled = false;
    let timer = 0;

    const tick = () => {
      if (cancelled) return;
      if (window.THREE && hostRef.current) {
        try {
          apiRef.current = buildScene(window.THREE, hostRef.current, { strands, seed });
          apiRef.current.setProgress(progressRef.current);
          setReady(true);
        } catch (e) {
          apiRef.current = null; // context creation failed — stay flat black, never take the page down
        }
      } else {
        timer = window.setTimeout(tick, 60);
      }
    };
    tick();

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      if (apiRef.current) apiRef.current.dispose();
      apiRef.current = null;
    };
  }, [strands, seed]);

  React.useEffect(() => {
    if (apiRef.current) apiRef.current.setProgress(progress);
  }, [progress, ready]);

  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', background: 'var(--black-void)', ...style }} {...rest}>
      <div ref={hostRef} style={{ position: 'absolute', inset: 0, opacity: ready ? 1 : 0, transition: 'opacity var(--dur-slow) var(--ease-out-soft)' }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(96% 84% at 50% 46%, rgba(0,0,0,${vignette * 0.52}) 0%, rgba(0,0,0,${vignette * 0.40}) 44%, rgba(0,0,0,${vignette * 0.30}) 72%, rgba(0,0,0,${vignette * 0.92}) 100%)`,
      }} />
    </div>
  );
}

/* ── scene ─────────────────────────────────────────────────────────────── */

const FOCUS_Y = 0.02;    // world height the camera settles on — the lengths band
const HEAD_C = [0, 1.34, 0];
const HEAD_R = 0.50;

function buildScene(THREE, host, { strands, seed }) {
  /* Park–Miller: the multiply stays under 2^53, so the sequence is exact in doubles */
  let s = ((seed % 2147483646) + 2147483646) % 2147483646 + 1;
  const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  const gauss = () => (rnd() + rnd() + rnd() - 1.5) * 0.82;
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const mix = (a, b, t) => a + (b - a) * t;
  const sstep = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.02;
  host.appendChild(renderer.domElement);
  Object.assign(renderer.domElement.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block' });

  const scene = new THREE.Scene();
  const envTex = studioEnvironment(THREE);
  scene.environment = envTex;
  scene.environmentIntensity = 0.55;

  const camera = new THREE.PerspectiveCamera(32, 1, 0.05, 100);

  scene.add(new THREE.AmbientLight(0xfff6ea, 0.14));
  const key = new THREE.DirectionalLight(0xfff3e2, 1.5);
  key.position.set(2.4, 3.2, 2.6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xf0d5c2, 2.3);
  rim.position.set(-2.8, 1.8, -2.2);
  scene.add(rim);
  const rimWarm = new THREE.DirectionalLight(0xd4949b, 1.1);
  rimWarm.position.set(3.0, 0.4, -2.0);
  scene.add(rimWarm);
  const front = new THREE.DirectionalLight(0xfff0dd, 0.38);
  front.position.set(-0.6, 0.9, 4.2);
  scene.add(front);

  /* ── the figure, seen from behind ── */
  const skin = new THREE.MeshStandardMaterial({ name: 'figure', color: 0x0f0e0d, roughness: 0.78, metalness: 0.04, envMapIntensity: 0.18 });
  const cloth = new THREE.MeshStandardMaterial({ name: 'cape', color: 0x030303, roughness: 1.0, metalness: 0.0, envMapIntensity: 0.05 });

  const figure = new THREE.Group();
  figure.name = 'figure';

  const head = new THREE.Mesh(new THREE.SphereGeometry(HEAD_R, 48, 36), skin);
  head.name = 'head';
  head.scale.set(1, 1.13, 1.04);
  head.position.set(...HEAD_C);
  figure.add(head);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.155, 0.20, 0.36, 28), skin);
  neck.name = 'neck';
  neck.position.set(0, 0.90, -0.02);
  figure.add(neck);

  const shoulders = new THREE.Mesh(new THREE.CapsuleGeometry(0.26, 0.52, 10, 28), cloth);
  shoulders.name = 'shoulders';
  shoulders.rotation.z = Math.PI / 2;
  shoulders.position.set(0, 0.56, -0.04);
  figure.add(shoulders);

  const back = new THREE.Mesh(new THREE.CylinderGeometry(0.40, 0.72, 2.6, 36), cloth);
  back.name = 'cape';
  back.position.set(0, -0.78, -0.12);
  back.scale.z = 0.6;
  figure.add(back);

  scene.add(figure);

  /* ── hair: clump-groomed ribbons, two baked poses per strand ─────────── */

  const CLUMP_N = 120;
  const clumps = [];
  for (let i = 0; i < CLUMP_N; i++) {
    clumps.push({
      az: (rnd() * 2 - 1) * 1.5,
      waveFreq: 2.0 + rnd() * 3.0,
      wavePhase: rnd() * 6.2831,
      waveAmp: 0.006 + rnd() * 0.011,
      flick: (rnd() - 0.5) * 0.12,
      lenVar: rnd() - 0.5,
      highlight: rnd() < 0.075,
      cr: rnd(),
    });
  }

  const espresso = new THREE.Color(0x3a2318);
  const nearBlack = new THREE.Color(0x140e0b);
  const caramel = new THREE.Color(0x7a4c26);
  const flyTone = new THREE.Color(0x6b4c33);

  // growable per-vertex streams; converted to typed arrays once at the end
  const G = { pos: [], tan: [], posB: [], tanB: [], side: [], u: [], w: [], col: [], rand: [], stag: [], idx: [], vc: 0 };

  const pushRibbon = (ptsA, ptsB, opts) => {
    const n = ptsA.length;
    const base = G.vc;
    const tangentAt = (pts, i) => {
      const a = pts[Math.max(0, i - 1)], b = pts[Math.min(n - 1, i + 1)];
      const tx = b.x - a.x, ty = b.y - a.y, tz = b.z - a.z;
      const l = Math.sqrt(tx * tx + ty * ty + tz * tz) || 1;
      return [tx / l, ty / l, tz / l];
    };
    for (let i = 0; i < n; i++) {
      const pA = ptsA[i], pB = ptsB[i];
      const tA = tangentAt(ptsA, i), tB = tangentAt(ptsB, i);
      const v = i / (n - 1);
      const w = opts.halfW
        * (0.70 + 0.30 * sstep(0.0, 0.12, v))
        * mix(1, opts.tipTaper, sstep(0.70, 1.0, v));
      for (const side of [-1, 1]) {
        G.pos.push(pA.x, pA.y, pA.z);
        G.tan.push(tA[0], tA[1], tA[2]);
        G.posB.push(pB.x, pB.y, pB.z);
        G.tanB.push(tB[0], tB[1], tB[2]);
        G.side.push(side);
        G.u.push(v);
        G.w.push(w);
        G.col.push(opts.color.r, opts.color.g, opts.color.b);
        G.rand.push(opts.rand[0], opts.rand[1]);
        G.stag.push(opts.stagger);
      }
    }
    for (let i = 0; i < n - 1; i++) {
      const a = base + i * 2;
      G.idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    G.vc += n * 2;
  };

  const resample = (pts, n) => {
    const d = [0];
    for (let i = 1; i < pts.length; i++) d.push(d[i - 1] + pts[i].distanceTo(pts[i - 1]));
    const total = d[d.length - 1] || 1;
    const out = [];
    let j = 0;
    for (let k = 0; k < n; k++) {
      const target = total * (k / (n - 1));
      while (j < pts.length - 2 && d[j + 1] < target) j++;
      const span = d[j + 1] - d[j] || 1;
      out.push(pts[j].clone().lerp(pts[j + 1], clamp01((target - d[j]) / span)));
    }
    return out;
  };

  for (let i = 0; i < strands; i++) {
    const c = clumps[(rnd() * CLUMP_N) | 0];
    const isFly = rnd() < 0.045;
    const az0 = Math.max(-1.55, Math.min(1.55, c.az + gauss() * 0.11));
    const phi0 = 0.16 + Math.pow(rnd(), 0.75) * 1.34;
    const shell = HEAD_R + 0.013 + rnd() * 0.045 + (isFly ? 0.03 + rnd() * 0.05 : 0);
    const halfW = isFly ? 0.0006 + rnd() * 0.0006 : 0.0011 + rnd() * rnd() * 0.0018;

    const tone = new THREE.Color().lerpColors(espresso, nearBlack, Math.pow(rnd(), 0.55));
    if (c.highlight) tone.lerp(caramel, 0.16 + rnd() * 0.20);
    if (isFly) tone.lerp(flyTone, 0.22);
    tone.multiplyScalar(0.92 + rnd() * 0.16);

    const tipY = isFly
      ? FOCUS_Y + 0.15 - rnd() * 0.9
      : FOCUS_Y - (0.50 + c.lenVar * 0.13 + (rnd() - 0.5) * 0.06);
    const exitPhi = 1.62 + 0.38 * Math.cos(az0 * 0.85) + rnd() * 0.05;

    /* section A — hug the scalp shell from root to nape exit (shared by both poses) */
    const scalp = [];
    const KA = 8;
    for (let k = 0; k < KA; k++) {
      const u = k / (KA - 1);
      const phi = phi0 + (exitPhi - phi0) * u;
      const a = az0 * (1 - 0.15 * u * u);
      const r = shell + 0.018 * Math.sin(u * Math.PI);
      scalp.push(new THREE.Vector3(
        HEAD_C[0] + r * Math.sin(phi) * Math.sin(a),
        HEAD_C[1] + r * Math.cos(phi) * 1.15,
        HEAD_C[2] + r * Math.sin(phi) * Math.cos(a) * 1.05,
      ));
    }

    const E = scalp[scalp.length - 1];
    const jx = gauss() * 0.02, jz = gauss() * 0.02;
    const dirOut = Math.abs(az0) < 0.18 ? (rnd() < 0.5 ? -0.4 : 0.4) : Math.sign(az0);
    const flickAmt = (0.02 + Math.abs(c.flick)) * 0.55 * (0.4 + 0.6 * sstep(0.1, 0.8, Math.abs(az0)));
    const zTarget = 0.34 + 0.10 * Math.cos(az0 * 1.2);
    const KB = 16;

    /* pose A — before: the straight dark fall, as the client sat down */
    const rawA = scalp.slice();
    for (let k = 1; k <= KB; k++) {
      const v = k / KB;
      const tight = 1 - 0.7 * sstep(0.06, 0.4, v) + 0.55 * sstep(0.78, 1, v);
      const wobX = c.waveAmp * Math.sin(v * c.waveFreq * 3.0 + c.wavePhase) * (0.4 + 0.6 * v);
      const wobZ = c.waveAmp * 0.6 * Math.cos(v * c.waveFreq * 2.4 + c.wavePhase * 1.3) * v;
      rawA.push(new THREE.Vector3(
        E.x * (1 - 0.32 * v) + wobX + jx * tight + dirOut * flickAmt * Math.pow(v, 3.2),
        E.y + (tipY - E.y) * v,
        mix(E.z, zTarget, Math.pow(v, 1.05)) + wobZ + jz * tight + flickAmt * 0.4 * Math.pow(v, 3.0),
      ));
    }

    /* pose B — after: layered lengths (outer shell and sides graduate shorter),
       bigger softer waves, ends flipped out — the finished blowout */
    const outerness = clamp01((shell - (HEAD_R + 0.013)) / 0.045);
    const sideness = Math.abs(Math.sin(az0));
    const layer = 0.7 * outerness + 0.3 * sideness;
    const tipYB = Math.min(tipY + 0.65, FOCUS_Y - 0.52 + layer * 0.40 + (rnd() - 0.5) * 0.03);
    const rawB = scalp.slice();
    for (let k = 1; k <= KB; k++) {
      const v = k / KB;
      const tight = 1 - 0.7 * sstep(0.06, 0.4, v) + 0.55 * sstep(0.78, 1, v);
      const wobX = c.waveAmp * 2.1 * Math.sin(v * c.waveFreq * 1.9 + c.wavePhase) * (0.35 + 0.65 * v);
      const wobZ = c.waveAmp * 1.2 * Math.cos(v * c.waveFreq * 1.5 + c.wavePhase * 1.2) * v;
      rawB.push(new THREE.Vector3(
        E.x * (1 - 0.26 * v) + wobX + jx * tight + dirOut * flickAmt * 1.6 * Math.pow(v, 2.8),
        E.y + (tipYB - E.y) * v,
        mix(E.z, zTarget + 0.03, Math.pow(v, 1.02)) + wobZ + jz * tight + flickAmt * 0.9 * Math.pow(v, 2.6),
      ));
    }

    pushRibbon(resample(rawA, 21), resample(rawB, 21), {
      halfW, tipTaper: isFly ? 0.15 : 0.5, color: tone,
      rand: [c.cr, rnd()], stagger: rnd(),
    });
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(Float32Array.from(G.pos), 3));
  geo.setAttribute('aTangent', new THREE.BufferAttribute(Float32Array.from(G.tan), 3));
  geo.setAttribute('aPosB', new THREE.BufferAttribute(Float32Array.from(G.posB), 3));
  geo.setAttribute('aTanB', new THREE.BufferAttribute(Float32Array.from(G.tanB), 3));
  geo.setAttribute('aSide', new THREE.BufferAttribute(Float32Array.from(G.side), 1));
  geo.setAttribute('aU', new THREE.BufferAttribute(Float32Array.from(G.u), 1));
  geo.setAttribute('aWidth', new THREE.BufferAttribute(Float32Array.from(G.w), 1));
  geo.setAttribute('aColor', new THREE.BufferAttribute(Float32Array.from(G.col), 3));
  geo.setAttribute('aRand', new THREE.BufferAttribute(Float32Array.from(G.rand), 2));
  geo.setAttribute('aStagger', new THREE.BufferAttribute(Float32Array.from(G.stag), 1));
  geo.setIndex(new THREE.BufferAttribute(Uint32Array.from(G.idx), 1));

  const uniforms = {
    uStyleT: { value: 0 },
    uColorT: { value: 0 },
    uSwayAmp: { value: 0 },
    uSwayPhase: { value: 0 },
    uSheen: { value: 0 },
  };

  const hairMesh = new THREE.Mesh(geo, new THREE.ShaderMaterial({
    name: 'hair',
    uniforms,
    vertexShader: HAIR_VERT,
    fragmentShader: HAIR_FRAG,
    side: THREE.DoubleSide,
    transparent: false,
    alphaToCoverage: true,
  }));
  hairMesh.name = 'hair';
  hairMesh.frustumCulled = false;
  scene.add(hairMesh);

  /* ── drive: every value below is a pure function of progress ── */
  let progress = 0;
  let aspect = 1;

  const apply = () => {
    const p = clamp01(progress);

    /* the transformation: colour melts root→tip, then the layers settle,
       then the gloss sweep — the client turning toward the mirror */
    /* the melt front parks mid-length — an ombre keeps its dark roots, and
       the close-up frame shows u≈0.6→1, so the gradient must live there */
    uniforms.uColorT.value = 0.30 * sstep(0.12, 0.55, p);
    uniforms.uStyleT.value = sstep(0.52, 0.90, p);
    uniforms.uSheen.value = sstep(0.80, 1.0, p);
    uniforms.uSwayAmp.value = 0.024 * sstep(0.03, 0.22, p) * (1 - sstep(0.55, 0.80, p)) + 0.006;
    uniforms.uSwayPhase.value = 4.5 * p;

    /* camera: wide figure → close-up on the lengths (unchanged from the cut
       version — the ombre reveal lands in the upper band that stays visible
       longest as the next section covers the fixed scene) */
    const t1 = sstep(0, 0.62, p);
    const creep = sstep(0.62, 1, p);
    const wideZ = aspect < 1 ? 7.2 : aspect < 1.7 ? 6.4 : 5.9;
    const closeZ = aspect < 1 ? 3.0 : aspect < 1.7 ? 2.25 : 2.05;
    camera.position.set(
      0.16 * t1,
      mix(0.56, FOCUS_Y + 0.10, t1) - 0.04 * creep,
      mix(wideZ, closeZ, t1) - 0.12 * creep,
    );
    camera.fov = (aspect < 1 ? 48 : aspect < 1.7 ? 36 : 33) - 3 * t1;
    camera.updateProjectionMatrix();
    camera.lookAt(0.02 * t1, mix(0.46, FOCUS_Y - 0.22, t1) - 0.08 * creep, 0.20 * t1);

    renderer.render(scene, camera);
  };

  const resize = () => {
    const w = host.clientWidth || 1;
    const h = host.clientHeight || 1;
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.setSize(w, h, false);
    aspect = w / h;
    camera.aspect = aspect;
    apply();
  };

  const ro = new ResizeObserver(resize);
  ro.observe(host);
  resize();

  return {
    setProgress: (v) => { progress = v; apply(); },
    dispose: () => {
      ro.disconnect();
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose());
      });
      envTex.dispose();
      scene.environment = null;
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    },
  };
}

/* ── hair shaders: dual-pose ribbons, ombre melt, Kajiya–Kay highlight ─── */

const HAIR_VERT = /* glsl */`
attribute vec3 aTangent;
attribute vec3 aPosB;
attribute vec3 aTanB;
attribute float aSide;
attribute float aU;
attribute float aWidth;
attribute vec3 aColor;
attribute vec2 aRand;
attribute float aStagger;
uniform float uStyleT;
uniform float uSwayAmp;
uniform float uSwayPhase;
varying vec3 vColor;
varying vec3 vT;
varying vec3 vN;
varying vec3 vWorld;
varying float vU;
varying float vSide;
varying vec2 vRand;

void main(){
  float k = clamp(uStyleT * 1.3 - aStagger * 0.3, 0.0, 1.0);
  k = k * k * (3.0 - 2.0 * k);
  vec3 p = mix(position, aPosB, k);
  vec3 T = mix(aTangent, aTanB, k);

  float swPh = aRand.x * 6.2831 + uSwayPhase;
  float sw = uSwayAmp * aU * aU;
  p.x += sw * sin(swPh);
  p.z += sw * 0.5 * cos(swPh * 0.8);

  /* the lengths swing softly while the layers settle */
  p.x += 0.04 * sin(k * 4.6) * (1.0 - k) * aU;

  T = normalize(T);
  vec3 toCam = normalize(cameraPosition - p);
  vec3 S = normalize(cross(T, toCam));
  vec3 world = p + S * (aWidth * aSide);
  vN = normalize(cross(S, T));
  vT = T;
  vU = aU;
  vColor = aColor;
  vRand = aRand;
  vWorld = world;
  vSide = aSide;
  gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
}
`;

const HAIR_FRAG = /* glsl */`
uniform float uColorT;
uniform float uSheen;
varying vec3 vColor;
varying vec3 vT;
varying vec3 vN;
varying vec3 vWorld;
varying float vU;
varying float vSide;
varying vec2 vRand;

float strandSpec(vec3 T, vec3 V, vec3 L, float ex){
  vec3 H = normalize(L + V);
  float TdH = dot(T, H);
  float s = sqrt(max(0.0, 1.0 - TdH * TdH));
  return pow(s, ex);
}

void main(){
  vec3 V = normalize(cameraPosition - vWorld);
  vec3 T = normalize(vT);
  vec3 N = normalize(vN);
  if (!gl_FrontFacing) N = -N;

  /* the ombre: dark roots melting through caramel to honey ends; the melt
     front climbs tip→root with the scroll, the way colour is painted on.
     After-tones stay dark-valued — this pipeline blows anything brighter. */
  /* linear-space values: three.js converts the JS-side hex tones to linear,
     so these must live in the same range or they render five stops too hot */
  vec3 caramelC = vec3(0.085, 0.036, 0.010);
  vec3 honeyC = vec3(0.140, 0.068, 0.022);
  vec3 after = mix(vColor, caramelC, smoothstep(0.52, 0.85, vU));
  after = mix(after, honeyC, 0.70 * smoothstep(0.84, 0.98, vU));
  after *= 0.88 + 0.24 * fract(vRand.y * 9.7);
  float ck = smoothstep(0.0, 0.25, uColorT * 1.35 - (1.0 - vU) + (vRand.x - 0.5) * 0.08);
  vec3 pigment = mix(vColor, after, ck);

  vec3 base = pigment;
  base *= 0.30 + 0.70 * smoothstep(0.0, 0.30, vU);
  base = mix(base, base * vec3(1.18, 1.06, 0.94), 0.18 * smoothstep(0.55, 1.0, vU));

  /* the key light drifts late in the scroll — the mirror-turn sheen */
  vec3 L1 = normalize(mix(vec3(0.55, 0.75, 0.55), vec3(0.18, 0.85, 0.50), uSheen));
  vec3 C1 = vec3(1.0, 0.94, 0.84) * 1.25;
  vec3 L2 = normalize(vec3(-0.70, 0.35, -0.55));
  vec3 C2 = vec3(1.0, 0.70, 0.58) * 1.05;
  vec3 L3 = normalize(vec3(-0.08, 0.18, 0.98));
  vec3 C3 = vec3(0.92, 0.87, 0.82) * 0.30;

  vec3 col = vec3(0.0);
  #define HAIR_DIFF(Ld) (pow(sqrt(max(0.0, 1.0 - dot(T, Ld) * dot(T, Ld))), 1.3) * (0.32 + 0.68 * clamp(dot(N, Ld) * 0.5 + 0.5, 0.0, 1.0)))
  col += base * C1 * HAIR_DIFF(L1);
  col += base * C2 * HAIR_DIFF(L2);
  col += base * C3 * HAIR_DIFF(L3);
  col += base * mix(vec3(0.055, 0.05, 0.055), vec3(0.17, 0.16, 0.165), N.y * 0.5 + 0.5);

  /* gloss builds as the treatment develops */
  float jitter = vRand.y - 0.5;
  vec3 T1 = normalize(T + N * (-0.10 + jitter * 0.08));
  vec3 T2 = normalize(T + N * ( 0.10 + jitter * 0.10));
  float sparkle = 0.65 + 0.55 * fract(vRand.y * 37.13);
  col += vec3(1.0, 0.88, 0.68) * strandSpec(T1, V, L1, 240.0) * (0.55 + 0.30 * ck) * sparkle;
  col += (base * 1.6 + vec3(0.02)) * strandSpec(T2, V, L1, 60.0) * (1.0 + 0.5 * ck);
  col += vec3(1.0, 0.80, 0.66) * strandSpec(T1, V, L2, 180.0) * 0.55 * sparkle;

  // inner layers of the fall sit deeper in z — darken them for volume
  float occ = mix(1.0, 0.55 + 0.45 * smoothstep(0.05, 0.42, vWorld.z), 1.0 - smoothstep(0.30, 0.80, vWorld.y));
  col *= occ;

  col *= 1.05;
  col = (col * (2.51 * col + 0.03)) / (col * (2.43 * col + 0.59) + 0.14);
  col = clamp(col, 0.0, 1.0);
  col = pow(col, vec3(0.4545));

  float alpha = 1.0 - smoothstep(0.55, 1.0, abs(vSide)) * 0.6;
  gl_FragColor = vec4(col, alpha);
}
`;

/** A gradient equirect map so the scene reads warm without an HDR file. */
function studioEnvironment(THREE) {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 256;
  const g = c.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, '#0d0d0d');
  grad.addColorStop(0.42, '#3a3a3c');
  grad.addColorStop(0.5, '#f2ede6');
  grad.addColorStop(0.58, '#2a2a2c');
  grad.addColorStop(1, '#050505');
  g.fillStyle = grad;
  g.fillRect(0, 0, 512, 256);
  g.fillStyle = 'rgba(255,250,242,1)';
  g.fillRect(276, 88, 170, 34);
  g.fillStyle = 'rgba(255,255,255,.7)';
  g.fillRect(60, 104, 120, 14);
  g.fillStyle = 'rgba(140,28,43,.55)';
  g.fillRect(40, 150, 90, 16);
  const tex = new THREE.CanvasTexture(c);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
