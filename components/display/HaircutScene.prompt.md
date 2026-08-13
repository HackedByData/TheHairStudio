The home hero background — a real-time 3D close-up of a woman's salon-fresh hair taking a single decisive snip, driven by scroll.

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

**The choreography, by progress.** 0→0.3: the wide figure — the back of her head under the hero copy, hair drifting faintly. 0.3→0.62: the camera glides down the fall into a close-up while the lengths gather into a thick lock at the nape, the way a stylist collects hair before a cut. 0.56→0.72: slim shears slide in from the right, open. 0.75: the snip — blades close once, and the freed length releases with a small per-strand stagger radiating from the blades. 0.75→1: the cut fall drops out of frame, the remaining hair springs up slightly and relaxes into a clean blunt edge. Every frame is a pure function of `progress` — no idle animation loop, scrubbing backwards replays in reverse, and any frame survives screenshot, PDF and PPTX capture (`preserveDrawingBuffer` is on).

**The 0.72 scroll divisor is load-bearing.** The scene mounts `position: fixed`, so the opaque sections that follow the hero slide up and cover it while the user scrolls. Dividing by `clientHeight * 0.72` finishes the choreography while the top band of the viewport is still showing scene, and the camera aims the cut line at the upper quarter of the frame for the same reason — the snip and the fresh edge play in the sliver that stays visible longest. Slow the divisor down and the cut happens behind the section that covered it.

**Every section after the hero must be positioned.** `position: fixed; z-index: 0` puts the scene in the positioned-descendants paint layer — a `position: static` section can never paint above it no matter how opaque its background. Give each following section `position: relative; z-index: 1`. Do not reach for `z-index: -1` on the scene instead: it would fall behind the scroll container's own opaque background and vanish. The wrapper is `pointer-events: none`, so it never steals a click.

**The host page must load three.js.** Put the pinned import map from `ui_kits/website/index.html` in `<head>`, followed by `<script type="module">import * as THREE from 'three'; window.THREE = THREE;</script>`. The component polls for `window.THREE` and renders flat black until it resolves, so a module failure degrades to a plain black hero rather than breaking the page.

**The hair is a custom shader, not a mesh material.** ~2800 clump-groomed camera-facing ribbons in two draw calls (attached and cut lengths), lit by a Kajiya–Kay dual highlight — the sharp cool band plus the broader warm one is what makes it read as gloss-treated. Colour runs espresso to near-black with sparse caramel balayage ribbons: inside the palette, biased dark. Do not brighten it into a blonde, and do not add colour beyond the existing closed set — `figure` and `cape` (near-black), `steel`, `steel-dark`, `handle`, `pivot` (oxblood).

**The subject is centred, so hero copy is centred over it.** The scrim is a broad soft darkening rather than a heavy centre spot — that would bury the head. Give the type a shadow instead: `0 2px 30px rgba(0,0,0,.92), 0 1px 4px rgba(0,0,0,.9)`. Lower `vignette` only when showing the scene for its own sake.

**Use once, on the home hero.** A second instance is a gimmick, and a second WebGL context is a cost.
