The home hero background — a real-time 3D scene of a woman's hair being cut straight across, driven by scroll.

```jsx
const [p, setP] = React.useState(0);
<div onScroll={e => setP(Math.min(1, e.target.scrollTop / (e.target.clientHeight * 1.15)))}>
  <section style={{ position: 'relative', minHeight: 760, display: 'grid', alignItems: 'center' }}>
    <HaircutScene progress={p} style={{ position: 'fixed', zIndex: 0 }} />
    <div style={{ position: 'relative', zIndex: 1, display: 'grid', justifyItems: 'center', textAlign: 'center' }}>…hero content…</div>
  </section>
  <section style={{ position: 'relative', zIndex: 1, background: 'var(--black-ink)' }}>…everything below…</section>
</div>
```

**Every section after the hero must be positioned.** The scene mounts `position: fixed; z-index: 0`, which puts it in the positioned-descendants paint layer — a `position: static` section can never paint above it no matter how opaque its background or how late it sits in the DOM. Give each following section `position: relative; z-index: 1`. Do not reach for `z-index: -1` on the scene instead: it would fall behind the scroll container's own opaque background and vanish. The wrapper is `pointer-events: none`, so it never steals a click.

**The host page must load three.js.** Put the pinned import map from `ui_kits/website/index.html` in `<head>`, followed by `<script type="module">import * as THREE from 'three'; window.THREE = THREE;</script>`. The component polls for `window.THREE` and renders flat black until it resolves, so a module failure degrades to a plain black hero rather than breaking the page.

At `progress` 0 the hair is long and the scissors is off-frame left; by 1 it is a blunt cut and the scissors has exited right. Cut lengths fall away in the shader, so the whole scene is one draw per progress change with no idle animation loop — any frame is reproducible from `progress` alone.

**The subject is centred, so hero copy is centred over it.** The scrim is a broad soft darkening rather than a heavy centre spot — that would bury the head. Give the type a shadow instead: `0 2px 30px rgba(0,0,0,.92), 0 1px 4px rgba(0,0,0,.9)`. Lower `vignette` only when showing the scene for its own sake.

Materials are a closed set of six: `figure` and `cape` (near-black), `steel`, `steel-dark`, `handle`, `pivot` (oxblood). Hair runs warm caramel to near-black, biased dark — a balayage, not a blonde. Do not add colour beyond these.

The renderer runs with `preserveDrawingBuffer`, so the hero survives screenshot, PDF and PPTX capture.

**Use once, on the home hero.** A second instance is a gimmick, and a second WebGL context is a cost.
