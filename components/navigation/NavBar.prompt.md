Sticky top bar: wordmark, links, call, book.

```jsx
<NavBar links={[{ id: 'services', label: 'Services' }, { id: 'team', label: 'Team' }]} active="services" onNavigate={go} cta="Book now" />
```

The bar sets the name in tracked Bodoni by default, and that is the right choice: the supplied mark is a square two-line lockup and goes illegible below about 56px, well under the 76px header. `markSrc` exists for oversized or splash headers only — never for the standard bar. Transparent over a hero; pass `scrolled` to solidify it to 86% black with an 18px backdrop blur. The booking CTA is always present and always primary.
