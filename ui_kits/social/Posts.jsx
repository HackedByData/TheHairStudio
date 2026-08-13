const { Logo, ServiceRow, PhotoFrame, Divider, Badge, Icon, Rating } = window.TheHairStudioDesignSystem_03d078;

/* 1080×1920 story and 1080×1080 feed posts, rendered at 0.28 / 0.34 scale for the grid. */

function Frame({ w, h, scale, children, bg = 'var(--black-void)', label }) {
  return (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
      <div style={{ width: w * scale, height: h * scale, overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '1px solid var(--line-faint)' }}>
        <div style={{ width: w, height: h, transform: `scale(${scale})`, transformOrigin: 'top left', background: bg, position: 'relative' }}>{children}</div>
      </div>
      <span style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--text-disabled)' }}>{label}</span>
    </div>
  );
}

function StoryPricing() {
  const menu = window.THS.menu;
  return (
    <Frame w={1080} h={1920} scale={0.28} label="Story · 1080×1920 · pricing">
      <div style={{ position: 'absolute', inset: 0, background: 'var(--surface-inset)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,.86),rgba(0,0,0,.72))' }} />
      <div style={{ position: 'absolute', inset: 0, padding: '120px 80px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 60, letterSpacing: '.34em', textIndent: '.34em', textTransform: 'uppercase', color: 'var(--bone-50)' }}>The Hair</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 104, letterSpacing: '.2em', textIndent: '.2em', textTransform: 'uppercase', color: 'var(--bone-50)', marginTop: 8 }}>Studio</div>
          <div style={{ marginTop: 34, fontSize: 30, fontWeight: 600, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent-400)' }}>Pricing list</div>
        </div>
        <div style={{ marginTop: 70, background: 'var(--bone-100)', borderRadius: 26, padding: '54px 56px', flex: 1 }}>
          {menu.map((g, i) => (
            <div key={g.group} style={{ marginTop: i ? 40 : 0 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 44, letterSpacing: '.06em', textTransform: 'uppercase', color: '#111', textAlign: 'center', marginBottom: 14 }}>{g.group}</div>
              {g.items.map((it) => (
                <div key={it.name} style={{ display: 'flex', alignItems: 'baseline', gap: 10, padding: '9px 0' }}>
                  <span style={{ fontSize: 30, color: '#1a1a1a', whiteSpace: 'nowrap' }}>{it.name}</span>
                  <span style={{ flex: 1, borderBottom: '2px dotted rgba(17,17,17,.32)', transform: 'translateY(-.3em)' }} />
                  <span style={{ fontSize: 30, fontWeight: 700, color: 'var(--accent-700)' }}>{it.price}</span>
                </div>
              ))}
            </div>
          ))}
          <div style={{ marginTop: 40, paddingTop: 22, borderTop: '1px solid rgba(17,17,17,.16)', fontSize: 23, lineHeight: 1.5, color: '#57503f', textAlign: 'center' }}>
            *Starting prices are for bra length or shorter.<br />Length and thickness are extra.
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <div style={{ fontFamily: 'var(--font-script)', fontSize: 82, lineHeight: 1, color: 'var(--bone-50)' }}>Book an appointment today</div>
          <div style={{ marginTop: 26, fontSize: 26, letterSpacing: '.1em', color: 'var(--accent-300)' }}>16923 Sierra Lakes Pkwy Unit 107 · Fontana, CA</div>
        </div>
      </div>
    </Frame>
  );
}

function PostStylist() {
  const s = window.THS.stylists[0];
  return (
    <Frame w={1080} h={1080} scale={0.34} label="Feed · 1080×1080 · stylist highlight">
      <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ background: 'var(--surface-inset)', display: 'grid', placeItems: 'center', color: 'var(--text-disabled)' }}>
          <div style={{ display: 'grid', gap: 18, justifyItems: 'center' }}><Icon name="sparkles" size={54} strokeWidth={0.8} /><span style={{ fontSize: 22, letterSpacing: '.22em', textTransform: 'uppercase' }}>Stylist portrait</span></div>
        </div>
        <div style={{ padding: '84px 66px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--accent-400)' }}>Stylist highlight</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 92, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--bone-50)', marginTop: 26 }}>{s.name}</div>
          <div style={{ width: 90, height: 2, background: 'var(--accent-500)', margin: '30px 0' }} />
          <div style={{ fontSize: 28, lineHeight: 1.6, fontWeight: 300, color: 'rgba(250,248,245,.72)' }}>{s.role}</div>
          <div style={{ marginTop: 46, fontSize: 24, letterSpacing: '.14em', color: 'var(--text-muted)' }}>{s.handle}</div>
        </div>
      </div>
    </Frame>
  );
}

function PostQuote() {
  return (
    <Frame w={1080} h={1080} scale={0.34} bg="var(--bone-50)" label="Feed · 1080×1080 · mission">
      <div style={{ position: 'absolute', inset: 0, padding: '110px 96px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 30, letterSpacing: '.34em', textIndent: '.34em', textTransform: 'uppercase', color: '#111' }}>The Hair Studio</div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 58, lineHeight: 1.4, color: '#111' }}>{window.THS.studio.mission}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'center', marginTop: 54 }}>
            <span style={{ width: 70, height: 1, background: 'var(--accent-500)' }} />
            <span style={{ width: 9, height: 9, background: 'var(--accent-500)', transform: 'rotate(45deg)' }} />
            <span style={{ width: 70, height: 1, background: 'var(--accent-500)' }} />
          </div>
        </div>
        <div style={{ fontSize: 24, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6E665C' }}>11+ years · Fontana, California</div>
      </div>
    </Frame>
  );
}

function PostService() {
  return (
    <Frame w={1080} h={1080} scale={0.34} label="Feed · 1080×1080 · service card">
      <div style={{ position: 'absolute', inset: 0, background: 'var(--surface-inset)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-bottom)' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '0 76px 84px' }}>
        <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--accent-400)' }}>Color services</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 104, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--bone-50)', marginTop: 20 }}>Balayage</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginTop: 26 }}>
          <span style={{ fontSize: 24, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(250,248,245,.6)' }}>From</span>
          <span style={{ fontSize: 56, fontWeight: 700, color: 'var(--accent-300)' }}>$295</span>
        </div>
        <div style={{ marginTop: 22, fontSize: 22, color: 'rgba(250,248,245,.5)' }}>*Bra length or shorter. Length and thickness extra.</div>
      </div>
    </Frame>
  );
}

function Feed() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3, width: 330 }}>
      {window.THS.work.slice(0, 9).map((w, i) => (
        <div key={i} style={{ aspectRatio: '1/1', background: 'var(--surface-inset)', boxShadow: 'inset 0 0 0 1px var(--line-faint)', display: 'grid', placeItems: 'center', padding: 8, textAlign: 'center' }}>
          <span style={{ fontSize: 9, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-disabled)' }}>{w.service}</span>
        </div>
      ))}
    </div>
  );
}

function SocialKit() {
  return (
    <div style={{ padding: 36, background: 'var(--black-ink)', minHeight: '100vh' }}>
      <div style={{ display: 'flex', gap: 34, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <StoryPricing />
        <div style={{ display: 'grid', gap: 26 }}>
          <PostStylist />
          <PostQuote />
        </div>
        <div style={{ display: 'grid', gap: 26 }}>
          <PostService />
          <div style={{ display: 'grid', gap: 12 }}>
            <Feed />
            <span style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--text-disabled)' }}>Feed grid · 3-up</span>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<SocialKit />);
