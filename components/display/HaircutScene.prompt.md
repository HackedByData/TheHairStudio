The home hero background — a real-time 3D scene of a client's colour transformation, driven by scroll: dark lengths melt into a warm ombre and settle into soft layers. No scissors — this is the colour chair.

```jsx
const [p, setP] = React.useState(0);
<div onScroll={e => setP(Math.min(1, e.target.scrollTop / (e.target.clientHeight * 0.72)))}>
  <section style={{ position: 'relative', minHeight: 760, display: 'grid', alignItems: 'center' }}>
    <HaircutScene progress={p} style={{ position: 'fixed', zIndex: 0 }} />
    <div style={{ position: 'relative', zIndex: 1, display: 'grid', justifyItems: 'center', textAlign: 'center' }}>…hero content…</div>
  </section>
  <section style={{ position: 'relative', zIndex: 1, background: 'var(--black-ink)' }}>…everything below…</section>
</div>
```

**The choreography, by progress.** 0→0.12: the wide figure — the back of her head under the hero copy, dark espresso lengths drifting faintly. 0.12→0.55: the colour melts in from the ends upward while the camera glides down the fall into a close-up — caramel climbing the lengths, honey arriving at the tips, gloss building as the treatment develops. The melt front parks mid-length: an ombre keeps its dark roots. 0.52→0.90: the lengths settle into soft layers — outer and side strands graduate shorter, waves loosen, ends flip out, with a gentle swing as each section lands. 0.80→1: the key light sweeps once across the finished colour — the mirror turn. Every frame is a pure function of `progress` — no idle animation loop, scrubbing backwards rewinds the transformation, and any frame survives screenshot, PDF and PPTX capture (`preserveDrawingBuffer` is on).

**The 0.72 scroll divisor is load-bearing.** The scene mounts `position: fixed`, so the opaque sections that follow the hero slide up and cover it while the user scrolls. Dividing by `clientHeight * 0.72` finishes the choreography while the top band of the viewport is still showing scene, and the ombre gradient is placed on the part of the strand the close-up actually frames. Slow the divisor down and the reveal happens behind the section that covered it.

**Every section after the hero must be positioned.** `position: fixed; z-index: 0` puts the scene in the positioned-descendants paint layer — a `position: static` section can never paint above it no matter how opaque its background. Give each following section `position: relative; z-index: 1`. Do not reach for `z-index: -1` on the scene instead: it would fall behind the scroll container's own opaque background and vanish. The wrapper is `pointer-events: none`, so it never steals a click.

**The host page must load three.js.** Put the pinned import map from `ui_kits/website/index.html` in `<head>`, followed by `<script type="module">import * as THREE from 'three'; window.THREE = THREE;</script>`. The component polls for `window.THREE` and renders flat black until it resolves, so a module failure degrades to a plain black hero rather than breaking the page.

**The hair is a custom shader, not a mesh material.** ~2800 clump-groomed camera-facing ribbons in one draw call, each carrying two baked poses (before and layered after) blended in the vertex shader, lit by a Kajiya–Kay dual highlight. The ombre tones live in the fragment shader as linear-space constants — anything brighter renders five stops too hot through the tone pipeline. Colour runs espresso roots to caramel-honey ends: warm, never platinum. The material set is `figure` and `cape` (near-black) plus the hair shader — nothing else.

**The subject is centred, so hero copy is centred over it.** The scrim is a broad soft darkening rather than a heavy centre spot — that would bury the head. Give the type a shadow instead: `0 2px 30px rgba(0,0,0,.92), 0 1px 4px rgba(0,0,0,.9)`. Lower `vignette` only when showing the scene for its own sake.

**Use once, on the home hero.** A second instance is a gimmick, and a second WebGL context is a cost.
