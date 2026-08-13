import React from 'react';

/**
 * The home hero background: a real-time 3D scene — the back of a woman's head,
 * her freshly gloss-treated hair gathered, then cut with a single snip as the
 * page scrolls. The camera pushes in from the wide figure to a close-up of the
 * lock; the cut fall drops away and the fresh edge springs back. Pure with
 * respect to scroll: drive it with `progress` 0→1 — any frame is reproducible
 * from `progress` alone, and nothing animates while the page is idle.
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

const CUT_Y = 0.02;      // world height of the cut line
const SNIP_P = 0.75;     // scroll progress at which the blades close
const LOCK_Z = 0.40;     // z-plane the gathered lock hangs in
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

  /* ── hair: clump-groomed ribbons ─────────────────────────────────────── */

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
  const A = { pos: [], tan: [], side: [], u: [], w: [], col: [], rand: [], idx: [], vc: 0 };
  const C = { pos: [], tan: [], side: [], u: [], w: [], col: [], rand: [], idx: [], vc: 0, piv: [], delay: [], spin: [] };

  const pushRibbon = (B, pts, opts) => {
    const n = pts.length;
    const base = B.vc;
    for (let i = 0; i < n; i++) {
      const p = pts[i];
      const t0 = pts[Math.max(0, i - 1)];
      const t1 = pts[Math.min(n - 1, i + 1)];
      const tx = t1.x - t0.x, ty = t1.y - t0.y, tz = t1.z - t0.z;
      const tl = Math.sqrt(tx * tx + ty * ty + tz * tz) || 1;
      const v = i / (n - 1);
      const u = mix(opts.u0, opts.u1, v);
      const w = opts.halfW
        * (0.70 + 0.30 * sstep(0.0, 0.12, u))
        * mix(1, opts.tipTaper, sstep(0.70, 1.0, v));
      for (const side of [-1, 1]) {
        B.pos.push(p.x, p.y, p.z);
        B.tan.push(tx / tl, ty / tl, tz / tl);
        B.side.push(side);
        B.u.push(u);
        B.w.push(w);
        B.col.push(opts.color.r, opts.color.g, opts.color.b);
        B.rand.push(opts.rand[0], opts.rand[1]);
        if (opts.cut) {
          B.piv.push(opts.cut.pivot.x, opts.cut.pivot.y, opts.cut.pivot.z);
          B.delay.push(opts.cut.delay);
          B.spin.push(opts.cut.spin[0], opts.cut.spin[1]);
        }
      }
    }
    for (let i = 0; i < n - 1; i++) {
      const a = base + i * 2;
      B.idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    B.vc += n * 2;
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
      ? CUT_Y + 0.15 - rnd() * 0.9
      : CUT_Y - (0.50 + c.lenVar * 0.13 + (rnd() - 0.5) * 0.06);
    const exitPhi = 1.62 + 0.38 * Math.cos(az0 * 0.85) + rnd() * 0.05;

    /* section A — hug the scalp shell from root to nape exit */
    const raw = [];
    const KA = 8;
    for (let k = 0; k < KA; k++) {
      const u = k / (KA - 1);
      const phi = phi0 + (exitPhi - phi0) * u;
      const a = az0 * (1 - 0.15 * u * u);
      const r = shell + 0.018 * Math.sin(u * Math.PI);
      raw.push(new THREE.Vector3(
        HEAD_C[0] + r * Math.sin(phi) * Math.sin(a),
        HEAD_C[1] + r * Math.cos(phi) * 1.15,
        HEAD_C[2] + r * Math.sin(phi) * Math.cos(a) * 1.05,
      ));
    }

    /* section B — the fall: clump wave, converge mid-length, flick at tip */
    const E = raw[raw.length - 1];
    const jx = gauss() * 0.02, jz = gauss() * 0.02;
    const dirOut = Math.abs(az0) < 0.18 ? (rnd() < 0.5 ? -0.4 : 0.4) : Math.sign(az0);
    const flickAmt = (0.02 + Math.abs(c.flick)) * 0.55 * (0.4 + 0.6 * sstep(0.1, 0.8, Math.abs(az0)));
    const zTarget = 0.34 + 0.10 * Math.cos(az0 * 1.2);
    const KB = 16;
    for (let k = 1; k <= KB; k++) {
      const v = k / KB;
      const tight = 1 - 0.7 * sstep(0.06, 0.4, v) + 0.55 * sstep(0.78, 1, v);
      const wobX = c.waveAmp * Math.sin(v * c.waveFreq * 3.0 + c.wavePhase) * (0.4 + 0.6 * v);
      const wobZ = c.waveAmp * 0.6 * Math.cos(v * c.waveFreq * 2.4 + c.wavePhase * 1.3) * v;
      raw.push(new THREE.Vector3(
        E.x * (1 - 0.32 * v) + wobX + jx * tight + dirOut * flickAmt * Math.pow(v, 3.2),
        E.y + (tipY - E.y) * v,
        mix(E.z, zTarget, Math.pow(v, 1.05)) + wobZ + jz * tight + flickAmt * 0.4 * Math.pow(v, 3.0),
      ));
    }

    /* split at the cut line */
    let crossIdx = -1, crossPt = null;
    for (let k = 1; k < raw.length; k++) {
      if (raw[k - 1].y >= CUT_Y && raw[k].y < CUT_Y) {
        const f = (raw[k - 1].y - CUT_Y) / (raw[k - 1].y - raw[k].y);
        crossPt = raw[k - 1].clone().lerp(raw[k], f);
        crossIdx = k;
        break;
      }
    }

    const arc = [0];
    for (let k = 1; k < raw.length; k++) arc.push(arc[k - 1] + raw[k].distanceTo(raw[k - 1]));
    const totalArc = arc[arc.length - 1];
    const rand2 = [c.cr, rnd()];

    if (crossPt) {
      const upArc = arc[crossIdx - 1] + raw[crossIdx - 1].distanceTo(crossPt);
      const uCut = upArc / totalArc;
      const upRaw = raw.slice(0, crossIdx).concat([crossPt]);
      const downRaw = [crossPt].concat(raw.slice(crossIdx));
      pushRibbon(A, resample(upRaw, 21), { u0: 0, u1: uCut, halfW, tipTaper: 1.0, color: tone, rand: rand2 });
      pushRibbon(C, resample(downRaw, 10), {
        u0: uCut, u1: 1, halfW, tipTaper: 0.4, color: tone, rand: rand2,
        cut: {
          pivot: crossPt,
          delay: Math.min(0.6, Math.abs(crossPt.x * 0.48) * 1.2 + rnd() * 0.12),
          spin: [(rnd() - 0.5) * 2.6, (rnd() - 0.5) * 1.2],
        },
      });
    } else {
      pushRibbon(A, resample(raw, 21), { u0: 0, u1: 1, halfW, tipTaper: 0.15, color: tone, rand: rand2 });
    }
  }

  const buildGeo = (B, withCut) => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(Float32Array.from(B.pos), 3));
    g.setAttribute('aTangent', new THREE.BufferAttribute(Float32Array.from(B.tan), 3));
    g.setAttribute('aSide', new THREE.BufferAttribute(Float32Array.from(B.side), 1));
    g.setAttribute('aU', new THREE.BufferAttribute(Float32Array.from(B.u), 1));
    g.setAttribute('aWidth', new THREE.BufferAttribute(Float32Array.from(B.w), 1));
    g.setAttribute('aColor', new THREE.BufferAttribute(Float32Array.from(B.col), 3));
    g.setAttribute('aRand', new THREE.BufferAttribute(Float32Array.from(B.rand), 2));
    if (withCut) {
      g.setAttribute('aPivot', new THREE.BufferAttribute(Float32Array.from(B.piv), 3));
      g.setAttribute('aDelay', new THREE.BufferAttribute(Float32Array.from(B.delay), 1));
      g.setAttribute('aSpin', new THREE.BufferAttribute(Float32Array.from(B.spin), 2));
    }
    g.setIndex(new THREE.BufferAttribute(Uint32Array.from(B.idx), 1));
    return g;
  };

  const hairUniformsFor = () => ({
    uGather: { value: 0 },
    uSwayAmp: { value: 0 },
    uSwayPhase: { value: 0 },
    uLift: { value: 0 },
    uCutT: { value: 0 },
  });
  const uAtt = hairUniformsFor();
  const uCut = hairUniformsFor();

  const hairMaterial = (uniforms, cut) => new THREE.ShaderMaterial({
    name: cut ? 'hair-cut' : 'hair',
    uniforms,
    defines: cut ? { CUT: '' } : {},
    vertexShader: HAIR_VERT,
    fragmentShader: HAIR_FRAG,
    side: THREE.DoubleSide,
    transparent: false,
    alphaToCoverage: true,
  });

  const attachedMesh = new THREE.Mesh(buildGeo(A, false), hairMaterial(uAtt, false));
  attachedMesh.name = 'hair-attached';
  attachedMesh.frustumCulled = false;
  scene.add(attachedMesh);

  const cutMesh = new THREE.Mesh(buildGeo(C, true), hairMaterial(uCut, true));
  cutMesh.name = 'hair-cut';
  cutMesh.frustumCulled = false;
  scene.add(cutMesh);

  /* ── shears ── */
  const steel = new THREE.MeshStandardMaterial({ name: 'steel', color: 0xc9d0d6, metalness: 0.95, roughness: 0.22 });
  const steelDark = new THREE.MeshStandardMaterial({ name: 'steel-dark', color: 0x8f979f, metalness: 0.95, roughness: 0.30 });
  const handleMat = new THREE.MeshStandardMaterial({ name: 'handle', color: 0x1d1d1f, metalness: 0.35, roughness: 0.44 });
  const pivotMat = new THREE.MeshStandardMaterial({ name: 'pivot', color: 0x8c1c2b, metalness: 0.9, roughness: 0.3 });

  const scissors = new THREE.Group();
  scissors.name = 'scissors';

  const bladeShape = new THREE.Shape();
  bladeShape.moveTo(0, -0.030);
  bladeShape.lineTo(0.68, -0.0025);
  bladeShape.quadraticCurveTo(0.705, 0.0, 0.68, 0.0035);
  bladeShape.lineTo(0.05, 0.046);
  bladeShape.quadraticCurveTo(0, 0.050, 0, 0.030);
  bladeShape.closePath();
  const bladeGeo = new THREE.ExtrudeGeometry(bladeShape, { depth: 0.012, bevelEnabled: true, bevelSize: 0.003, bevelThickness: 0.002, bevelSegments: 2, curveSegments: 12 });
  bladeGeo.translate(0, 0, -0.006);

  const shankShape = new THREE.Shape();
  shankShape.moveTo(0, -0.028);
  shankShape.lineTo(-0.26, -0.022);
  shankShape.lineTo(-0.26, 0.022);
  shankShape.lineTo(0, 0.034);
  shankShape.closePath();
  const shankGeo = new THREE.ExtrudeGeometry(shankShape, { depth: 0.011, bevelEnabled: true, bevelSize: 0.0022, bevelThickness: 0.0022, bevelSegments: 2 });
  shankGeo.translate(0, 0, -0.0055);

  const ringGeo = new THREE.TorusGeometry(0.085, 0.010, 16, 40);
  const arms = [];
  for (const dir of [1, -1]) {
    const arm = new THREE.Group();
    arm.name = dir > 0 ? 'blade-upper' : 'blade-lower';
    const blade = new THREE.Mesh(bladeGeo, dir > 0 ? steel : steelDark);
    blade.name = dir > 0 ? 'blade-face-upper' : 'blade-face-lower';
    blade.scale.y = dir; blade.position.z = dir * 0.009;
    arm.add(blade);
    const shank = new THREE.Mesh(shankGeo, dir > 0 ? steel : steelDark);
    shank.name = dir > 0 ? 'shank-upper' : 'shank-lower';
    shank.scale.y = dir; shank.position.z = dir * 0.009;
    arm.add(shank);
    const ring = new THREE.Mesh(ringGeo, handleMat);
    ring.name = dir > 0 ? 'ring-upper' : 'ring-lower';
    ring.position.set(-0.345, dir * 0.095, dir * 0.009);
    ring.rotation.y = Math.PI / 2; ring.rotation.x = dir * 0.04;
    ring.scale.set(1, 1.10, 1);
    arm.add(ring);
    scissors.add(arm);
    arms.push(arm);
  }
  const pivotScrew = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.036, 24), pivotMat);
  pivotScrew.name = 'pivot-screw';
  pivotScrew.rotation.x = Math.PI / 2;
  scissors.add(pivotScrew);
  scissors.scale.setScalar(0.74);
  scene.add(scissors);

  const spark = new THREE.PointLight(0xfff4e4, 0, 3.6, 2);
  spark.name = 'blade-light';
  scene.add(spark);

  /* ── drive: every value below is a pure function of progress ── */
  let progress = 0;
  let aspect = 1;

  const apply = () => {
    const p = clamp01(progress);

    /* hair uniforms */
    const gBase = sstep(0.30, 0.66, p);
    uAtt.uGather.value = gBase * (1 - 0.55 * sstep(0.82, 1, p));
    uCut.uGather.value = sstep(0.30, 0.66, Math.min(p, SNIP_P));
    const swayAmp = 0.030 * sstep(0.04, 0.28, p) * (1 - sstep(0.52, 0.72, p));
    uAtt.uSwayAmp.value = swayAmp;
    uCut.uSwayAmp.value = swayAmp;
    uAtt.uSwayPhase.value = uCut.uSwayPhase.value = 4.5 * p;
    uCut.uCutT.value = clamp01((p - SNIP_P) / 0.24);
    uAtt.uLift.value = 0.055 * sstep(SNIP_P, 0.84, p) - 0.032 * sstep(0.84, 1, p);

    /* camera: wide figure → close-up on the lock */
    const t1 = sstep(0, 0.62, p);
    const creep = sstep(0.62, 1, p);
    const wideZ = aspect < 1 ? 7.2 : aspect < 1.7 ? 6.4 : 5.9;
    const closeZ = aspect < 1 ? 3.0 : aspect < 1.7 ? 2.25 : 2.05;
    camera.position.set(
      0.16 * t1,
      mix(0.56, CUT_Y + 0.10, t1) - 0.04 * creep,
      mix(wideZ, closeZ, t1) - 0.12 * creep,
    );
    camera.fov = (aspect < 1 ? 48 : aspect < 1.7 ? 36 : 33) - 3 * t1;
    camera.updateProjectionMatrix();
    /* the target sits below the cut line so the snip plays in the upper
       quarter of the frame — the part still uncovered late in the scroll;
       the late creep keeps the fresh edge above the next section's cover line */
    camera.lookAt(0.02 * t1, mix(0.46, CUT_Y - 0.22, t1) - 0.08 * creep, 0.20 * t1);

    /* shears: glide in from the right, one snip, withdraw */
    const enter = sstep(0.56, 0.72, p);
    const closeT = sstep(0.725, 0.755, p);
    const wd = sstep(0.80, 0.97, p);
    scissors.visible = enter > 0.001 && wd < 0.999;
    scissors.position.set(
      mix(2.1, 0.22, enter) + 1.7 * wd * wd,
      CUT_Y + 0.012 + 0.06 * (1 - enter) - 0.05 * wd,
      0.47,
    );
    scissors.rotation.set(-0.16, Math.PI, -0.06 - 0.12 * wd);
    const open = 0.20 * (1 - closeT) + 0.08 * sstep(0.80, 0.92, p);
    arms[0].rotation.z = open;
    arms[1].rotation.z = -open;

    spark.position.set(scissors.position.x - 0.30, CUT_Y + 0.10, 0.72);
    spark.intensity = 1.2 * enter * (1 - wd) + 5 * Math.exp(-Math.pow((p - 0.745) / 0.018, 2));

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

/* ── hair shaders: camera-facing ribbons, Kajiya–Kay dual highlight ────── */

const HAIR_VERT = /* glsl */`
attribute vec3 aTangent;
attribute float aSide;
attribute float aU;
attribute float aWidth;
attribute vec3 aColor;
attribute vec2 aRand;
#ifdef CUT
attribute vec3 aPivot;
attribute float aDelay;
attribute vec2 aSpin;
#endif
uniform float uGather;
uniform float uSwayAmp;
uniform float uSwayPhase;
uniform float uLift;
uniform float uCutT;
varying vec3 vColor;
varying vec3 vT;
varying vec3 vN;
varying vec3 vWorld;
varying float vU;
varying float vSide;
varying vec2 vRand;

mat3 rotZ(float a){ float c = cos(a), s = sin(a); return mat3(c, -s, 0., s, c, 0., 0., 0., 1.); }
mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1., 0., 0., 0., c, -s, 0., s, c); }

vec3 gatherP(vec3 p, float g){
  float wy = 1.0 - smoothstep(-0.02, 0.42, p.y);
  float k = g * wy;
  p.x = mix(p.x, p.x * 0.48, k);
  p.z = mix(p.z, 0.40 + (p.z - 0.40) * 0.55, k);
  return p;
}

void main(){
  vec3 p = position;
  vec3 T = aTangent;

  float swPh = aRand.x * 6.2831 + uSwayPhase;
  float sw = uSwayAmp * aU * aU;
  p.x += sw * sin(swPh);
  p.z += sw * 0.5 * cos(swPh * 0.8);
  p = gatherP(p, uGather);

#ifdef CUT
  vec3 piv = gatherP(aPivot, uGather);
  float t = clamp((uCutT - aDelay) / max(0.15, 1.0 - aDelay), 0.0, 1.0);
  float e = t * t;
  float wob = sin(t * 8.0 + aRand.y * 12.0);
  mat3 R = rotZ(aSpin.x * (0.25 * t + 0.65 * e) + wob * 0.05 * t) * rotX(aSpin.y * (0.15 * t + 0.65 * e));
  p = piv + R * (p - piv);
  p.y -= 2.9 * e + 0.35 * t;
  p.x += aSpin.y * 0.30 * e + wob * 0.02 * t;
  p.z += aSpin.x * 0.08 * e;
  T = R * T;
#else
  p.y += uLift * smoothstep(0.45, 1.0, aU);
#endif

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

  vec3 base = vColor;
  base *= 0.30 + 0.70 * smoothstep(0.0, 0.30, vU);
  base = mix(base, base * vec3(1.18, 1.06, 0.94), 0.28 * smoothstep(0.55, 1.0, vU));

  vec3 L1 = normalize(vec3(0.55, 0.75, 0.55));  vec3 C1 = vec3(1.0, 0.94, 0.84) * 1.25;
  vec3 L2 = normalize(vec3(-0.70, 0.35, -0.55)); vec3 C2 = vec3(1.0, 0.70, 0.58) * 1.05;
  vec3 L3 = normalize(vec3(-0.08, 0.18, 0.98));  vec3 C3 = vec3(0.92, 0.87, 0.82) * 0.30;

  vec3 col = vec3(0.0);
  #define HAIR_DIFF(Ld) (pow(sqrt(max(0.0, 1.0 - dot(T, Ld) * dot(T, Ld))), 1.3) * (0.32 + 0.68 * clamp(dot(N, Ld) * 0.5 + 0.5, 0.0, 1.0)))
  col += base * C1 * HAIR_DIFF(L1);
  col += base * C2 * HAIR_DIFF(L2);
  col += base * C3 * HAIR_DIFF(L3);
  col += base * mix(vec3(0.055, 0.05, 0.055), vec3(0.17, 0.16, 0.165), N.y * 0.5 + 0.5);

  float jitter = vRand.y - 0.5;
  vec3 T1 = normalize(T + N * (-0.10 + jitter * 0.08));
  vec3 T2 = normalize(T + N * ( 0.10 + jitter * 0.10));
  float sparkle = 0.65 + 0.55 * fract(vRand.y * 37.13);
  col += vec3(1.0, 0.93, 0.80) * strandSpec(T1, V, L1, 240.0) * 0.70 * sparkle;
  col += (base * 1.6 + vec3(0.02)) * strandSpec(T2, V, L1, 60.0);
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

/** A gradient equirect map so the steel reads as metal without an HDR file. */
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
