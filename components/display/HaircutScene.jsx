import React from 'react';

/**
 * The home hero background: a real-time 3D scene — the back of a woman's head,
 * her hair cut straight across by a travelling pair of scissors as the page
 * scrolls. The cut lengths fall away. Pure with respect to scroll: drive it
 * with `progress` 0→1.
 *
 * three.js is read from `window.THREE`, which the host page loads through the
 * pinned import map (see ui_kits/website/index.html). Until it resolves the
 * component renders flat black, so a module failure never takes the page down.
 */
export function HaircutScene({ progress = 0, strands = 620, seed = 7, vignette = 0.62, style, ...rest }) {
  const hostRef = React.useRef(null);
  const apiRef = React.useRef(null);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    let timer = 0;

    const tick = () => {
      if (cancelled) return;
      if (window.THREE && hostRef.current) {
        apiRef.current = buildScene(window.THREE, hostRef.current, { strands, seed });
        setReady(true);
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

const CUT_Y = 0.02;
const HEAD_C = [0, 1.34, 0];
const HEAD_R = 0.50;

function buildScene(THREE, host, { strands, seed }) {
  let s = seed;
  const rnd = () => { s = (s * 1103515245 + 12345) % 2147483648; return s / 2147483648; };

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.02;
  host.appendChild(renderer.domElement);
  Object.assign(renderer.domElement.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block' });

  const scene = new THREE.Scene();
  scene.environment = studioEnvironment(THREE);
  scene.environmentIntensity = 0.55;

  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  const camTarget = new THREE.Vector3(0, 0.46, 0);

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
  const skin = new THREE.MeshStandardMaterial({ name: 'figure', color: 0x0f0e0d, roughness: 0.78, metalness: 0.04 });
  const cloth = new THREE.MeshStandardMaterial({ name: 'cape', color: 0x090909, roughness: 0.94, metalness: 0.0 });

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

  const back = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.86, 2.6, 36), cloth);
  back.name = 'cape';
  back.position.set(0, -0.78, -0.06);
  back.scale.z = 0.6;
  figure.add(back);

  scene.add(figure);

  /* ── hair ── */
  const NAPE_PHI = 1.95;
  const strandData = [];

  for (let i = 0; i < strands; i++) {
    const az = (rnd() * 2 - 1) * 1.46;
    const azDrift = (rnd() - 0.5) * 0.42;
    const phi0 = 0.10 + Math.pow(rnd(), 0.7) * 1.55;
    const shell = HEAD_R + 0.012 + rnd() * 0.075;
    const radius = 0.0016 + rnd() * rnd() * 0.0032;
    const tone = new THREE.Color().lerpColors(new THREE.Color(0xcaa974), new THREE.Color(0x1b1410), Math.pow(rnd(), 0.55));
    const flare = 0.06 + rnd() * 0.30;
    const curl = (rnd() - 0.5) * 0.26;
    const wave = 2.4 + rnd() * 3.6;
    const tipY = CUT_Y - (0.34 + Math.pow(rnd(), 1.3) * 1.5);
    const sway = (rnd() - 0.5) * 1.1;
    const spin = (rnd() - 0.5) * 3.2;

    const pts = [];
    const N = 9;
    for (let k = 0; k <= N; k++) {
      const u = k / N;
      const phi = phi0 + (NAPE_PHI - phi0) * u;
      const a = az + azDrift * u * u;
      pts.push(new THREE.Vector3(
        HEAD_C[0] + shell * Math.sin(phi) * Math.sin(a),
        HEAD_C[1] + shell * Math.cos(phi),
        HEAD_C[2] + shell * Math.sin(phi) * Math.cos(a),
      ));
    }
    const exit = pts[pts.length - 1].clone();
    const M = 12;
    for (let k = 1; k <= M; k++) {
      const u = k / M;
      const y = exit.y + (tipY - exit.y) * u;
      pts.push(new THREE.Vector3(
        exit.x + Math.sin(az) * flare * u * u + curl * Math.sin(u * wave),
        y,
        exit.z * (1 - 0.30 * u) + curl * 0.7 * Math.cos(u * wave * 0.8),
      ));
    }

    const curve = new THREE.CatmullRomCurve3(pts);
    strandData.push({ curve, radius, tone, tipY, sway, spin });
  }

  const sampleAt = (curve, y0, y1, n) => {
    const out = [];
    const dense = curve.getPoints(140);
    const pick = (targetY) => {
      let best = dense[0], bd = Infinity;
      for (const p of dense) { const d = Math.abs(p.y - targetY); if (d < bd) { bd = d; best = p; } }
      return best;
    };
    for (let k = 0; k <= n; k++) out.push(pick(y0 + (y1 - y0) * (k / n)).clone());
    return out;
  };

  const attachedGeos = [], attachedColors = [];
  const cutGeos = [], cutColors = [], cutPivots = [], cutThresholds = [], cutSpins = [];
  let minX = Infinity, maxX = -Infinity;
  const crossings = [];

  for (const d of strandData) {
    const dense = d.curve.getPoints(160);
    let cross = null;
    for (let k = 1; k < dense.length; k++) {
      if (dense[k - 1].y >= CUT_Y && dense[k].y < CUT_Y) { cross = dense[k].clone(); break; }
    }
    crossings.push(cross);
    if (cross) { minX = Math.min(minX, cross.x); maxX = Math.max(maxX, cross.x); }
  }
  const span = Math.max(0.2, maxX - minX);
  const startX = minX - 1.5;
  const travel = span + 3.0;

  strandData.forEach((d, i) => {
    const cross = crossings[i];
    const upperEnd = cross ? CUT_Y : d.tipY;
    const upPts = sampleAt(d.curve, d.curve.getPoint(0).y, upperEnd, 14);
    const gUp = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(upPts), 22, d.radius, 4, false).toNonIndexed();
    attachedGeos.push(gUp);
    attachedColors.push(d.tone);

    if (cross) {
      const lowPts = sampleAt(d.curve, CUT_Y, d.tipY, 8);
      const g = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(lowPts), 12, d.radius, 4, false).toNonIndexed();
      cutGeos.push(g);
      cutColors.push(d.tone);
      cutPivots.push(cross);
      cutThresholds.push((cross.x - startX) / travel);
      cutSpins.push([d.spin, d.sway]);
    }
  });

  const hairMatBase = { roughness: 0.42, metalness: 0.07, vertexColors: true };

  const attachedMesh = new THREE.Mesh(
    mergeTubes(THREE, attachedGeos, attachedColors),
    new THREE.MeshStandardMaterial({ name: 'hair', ...hairMatBase }),
  );
  attachedMesh.name = 'hair-attached';
  scene.add(attachedMesh);

  const uProgress = { value: 0 };
  const cutGeo = mergeTubes(THREE, cutGeos, cutColors, { pivots: cutPivots, thresholds: cutThresholds, spins: cutSpins });
  const cutMat = new THREE.MeshStandardMaterial({ name: 'hair-cut', ...hairMatBase });
  cutMat.onBeforeCompile = (sh) => {
    sh.uniforms.uProgress = uProgress;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
attribute vec3 aPivot;
attribute float aThreshold;
attribute vec2 aSpin;
uniform float uProgress;
mat3 rotZ(float a){float c=cos(a),s=sin(a);return mat3(c,-s,0.0,s,c,0.0,0.0,0.0,1.0);}
mat3 rotX(float a){float c=cos(a),s=sin(a);return mat3(1.0,0.0,0.0,0.0,c,-s,0.0,s,c);}`)
      .replace('#include <begin_vertex>', `
float t = clamp((uProgress - aThreshold) / 0.34, 0.0, 1.0);
float e = t * t;
vec3 local = position - aPivot;
local = rotZ(aSpin.x * e) * rotX(aSpin.x * 0.4 * e) * local;
vec3 transformed = aPivot + local + vec3(aSpin.y * 0.6 * e, -2.4 * e, aSpin.y * 0.25 * e);`);
  };
  const cutMesh = new THREE.Mesh(cutGeo, cutMat);
  cutMesh.name = 'hair-cut';
  scene.add(cutMesh);

  /* ── scissors ── */
  const steel = new THREE.MeshStandardMaterial({ name: 'steel', color: 0xf4f6f8, metalness: 0.52, roughness: 0.15 });
  const steelDark = new THREE.MeshStandardMaterial({ name: 'steel-dark', color: 0xb9c0c7, metalness: 0.62, roughness: 0.26 });
  const handleMat = new THREE.MeshStandardMaterial({ name: 'handle', color: 0x1d1d1f, metalness: 0.35, roughness: 0.44 });
  const pivotMat = new THREE.MeshStandardMaterial({ name: 'pivot', color: 0x8c1c2b, metalness: 0.9, roughness: 0.3 });

  const scissors = new THREE.Group();
  scissors.name = 'scissors';

  const bladeShape = new THREE.Shape();
  bladeShape.moveTo(0, -0.036);
  bladeShape.lineTo(0.60, -0.003);
  bladeShape.quadraticCurveTo(0.628, 0.0, 0.60, 0.004);
  bladeShape.lineTo(0.05, 0.054);
  bladeShape.quadraticCurveTo(0, 0.058, 0, 0.036);
  bladeShape.closePath();
  const bladeGeo = new THREE.ExtrudeGeometry(bladeShape, { depth: 0.015, bevelEnabled: true, bevelSize: 0.0035, bevelThickness: 0.0025, bevelSegments: 2, curveSegments: 12 });
  bladeGeo.translate(0, 0, -0.0075);

  const shankShape = new THREE.Shape();
  shankShape.moveTo(0, -0.033);
  shankShape.lineTo(-0.27, -0.026);
  shankShape.lineTo(-0.27, 0.026);
  shankShape.lineTo(0, 0.040);
  shankShape.closePath();
  const shankGeo = new THREE.ExtrudeGeometry(shankShape, { depth: 0.013, bevelEnabled: true, bevelSize: 0.0025, bevelThickness: 0.0025, bevelSegments: 2 });
  shankGeo.translate(0, 0, -0.0065);

  const ringGeo = new THREE.TorusGeometry(0.115, 0.019, 16, 40);
  const arms = [];
  for (const dir of [1, -1]) {
    const arm = new THREE.Group();
    arm.name = dir > 0 ? 'blade-upper' : 'blade-lower';
    const blade = new THREE.Mesh(bladeGeo, dir > 0 ? steel : steelDark);
    blade.name = dir > 0 ? 'blade-face-upper' : 'blade-face-lower';
    blade.scale.y = dir; blade.position.z = dir * 0.010;
    arm.add(blade);
    const shank = new THREE.Mesh(shankGeo, dir > 0 ? steel : steelDark);
    shank.name = dir > 0 ? 'shank-upper' : 'shank-lower';
    shank.scale.y = dir; shank.position.z = dir * 0.010;
    arm.add(shank);
    const ring = new THREE.Mesh(ringGeo, handleMat);
    ring.name = dir > 0 ? 'ring-upper' : 'ring-lower';
    ring.position.set(-0.375, dir * 0.09, dir * 0.010);
    ring.rotation.y = Math.PI / 2; ring.rotation.x = dir * 0.2;
    ring.scale.set(1, 1.16, 1);
    arm.add(ring);
    scissors.add(arm);
    arms.push(arm);
  }
  const pivotScrew = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.046, 24), pivotMat);
  pivotScrew.name = 'pivot-screw';
  pivotScrew.rotation.x = Math.PI / 2;
  scissors.add(pivotScrew);
  scissors.rotation.set(0.08, -0.34, 0.09);
  scissors.scale.setScalar(0.98);
  scene.add(scissors);

  const spark = new THREE.PointLight(0xfff4e4, 9.0, 3.6, 2);
  spark.name = 'blade-light';
  scene.add(spark);

  /* ── drive ── */
  let progress = 0;
  const apply = () => {
    const p = Math.max(0, Math.min(1, progress));
    uProgress.value = p;

    const bx = startX + p * travel;
    scissors.position.set(bx, CUT_Y + 0.015, 1.08);
    spark.position.set(bx + 0.32, CUT_Y + 0.22, 1.35);
    const snip = 0.15 + 0.12 * Math.sin(p * Math.PI * 20);
    arms[0].rotation.z = snip;
    arms[1].rotation.z = -snip;
    scissors.rotation.z = 0.09 + Math.sin(p * Math.PI * 6) * 0.025;

    renderer.render(scene, camera);
  };

  const resize = () => {
    const w = host.clientWidth || 1;
    const h = host.clientHeight || 1;
    renderer.setSize(w, h, false);
    const a = w / h;
    camera.aspect = a;
    camera.fov = a < 1 ? 48 : a < 1.7 ? 36 : 33;
    camera.position.set(0, 0.56, a < 1.7 ? 6.4 : 5.9);
    camera.lookAt(camTarget);
    camera.updateProjectionMatrix();
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
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    },
  };
}

/** Concatenate non-indexed tube geometries into one, baking per-strand colour and cut attributes. */
function mergeTubes(THREE, geos, colors, extra) {
  let total = 0;
  for (const g of geos) total += g.attributes.position.count;

  const pos = new Float32Array(total * 3);
  const nrm = new Float32Array(total * 3);
  const col = new Float32Array(total * 3);
  const piv = extra ? new Float32Array(total * 3) : null;
  const thr = extra ? new Float32Array(total) : null;
  const spn = extra ? new Float32Array(total * 2) : null;

  let o = 0;
  geos.forEach((g, i) => {
    const n = g.attributes.position.count;
    pos.set(g.attributes.position.array, o * 3);
    nrm.set(g.attributes.normal.array, o * 3);
    const c = colors[i];
    for (let k = 0; k < n; k++) {
      col[(o + k) * 3] = c.r; col[(o + k) * 3 + 1] = c.g; col[(o + k) * 3 + 2] = c.b;
      if (extra) {
        const p = extra.pivots[i];
        piv[(o + k) * 3] = p.x; piv[(o + k) * 3 + 1] = p.y; piv[(o + k) * 3 + 2] = p.z;
        thr[o + k] = extra.thresholds[i];
        spn[(o + k) * 2] = extra.spins[i][0];
        spn[(o + k) * 2 + 1] = extra.spins[i][1];
      }
    }
    o += n;
    g.dispose();
  });

  const merged = new THREE.BufferGeometry();
  merged.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  merged.setAttribute('normal', new THREE.BufferAttribute(nrm, 3));
  merged.setAttribute('color', new THREE.BufferAttribute(col, 3));
  if (extra) {
    merged.setAttribute('aPivot', new THREE.BufferAttribute(piv, 3));
    merged.setAttribute('aThreshold', new THREE.BufferAttribute(thr, 1));
    merged.setAttribute('aSpin', new THREE.BufferAttribute(spn, 2));
  }
  return merged;
}

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
