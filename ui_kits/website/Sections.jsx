const DS = window.TheHairStudioDesignSystem_03d078;
const { SectionHeading, Button, Divider, PhotoFrame, Card, ServiceRow, StylistCard, WorkTile, Testimonial, Tag, Badge, Icon, Logo, Rating } = DS;
const HaircutScene = DS.HaircutScene || (() => <div style={{ position: 'absolute', inset: 0, background: 'var(--black-void)' }} />);
const HERO_SHADOW = '0 2px 30px rgba(0,0,0,.92), 0 1px 4px rgba(0,0,0,.9)';

const PAGE = { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter-desktop)' };

function Hero({ onBook, progress = 0 }) {
  const s = window.THS.studio;
  return (
    <section style={{ position: 'relative', minHeight: 760, display: 'grid', alignItems: 'center', background: 'var(--black-void)' }}>
      <HaircutScene progress={progress} style={{ position: 'fixed', zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', padding: '104px var(--gutter-desktop) 56px', display: 'grid', justifyItems: 'center', textAlign: 'center' }}>
        <div style={{ fontSize: 'var(--overline-size)', fontWeight: 600, letterSpacing: 'var(--overline-track)', textTransform: 'uppercase', color: 'var(--accent-300)', textShadow: HERO_SHADOW }}>
          Fontana, California · {s.years} in business
        </div>
        <h1 style={{ margin: '26px 0 0' }}>
          <img src="../../assets/logo-mark-white.png" alt="The Hair Studio" style={{ width: 250, height: 250, filter: 'drop-shadow(0 6px 40px rgba(0,0,0,.95)) drop-shadow(0 2px 6px rgba(0,0,0,.9))' }} />
        </h1>
        <p style={{ margin: '18px 0 0', maxWidth: 560, fontSize: 'var(--body-lg-size)', lineHeight: 1.66, fontWeight: 300, color: 'var(--text-secondary)', textWrap: 'pretty', textShadow: HERO_SHADOW }}>
          Our mission is to make everyone feel more beautiful and happier than when they walked in the door.
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 34, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button size="lg" variant="light" icon="arrow-right" onClick={onBook}>Book an appointment</Button>
          <Button size="lg" variant="secondary" href="#services">See the menu</Button>
        </div>
      </div>
    </section>
  );
}

function MissionStrip() {
  const s = window.THS.studio;
  return (
    <section style={{ position: 'relative', zIndex: 1, background: 'var(--bone-100)', padding: 'var(--section-y) var(--gutter-desktop)' }}>
      <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 'var(--overline-size)', fontWeight: 600, letterSpacing: 'var(--overline-track)', textTransform: 'uppercase', color: 'var(--accent-600)' }}>Our mission</div>
        <p style={{ margin: '26px 0 0', fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 34, lineHeight: 1.42, color: 'var(--text-on-light)', textWrap: 'pretty' }}>
          {s.mission}
        </p>
        <Divider ornament tone="accent" spacing={40} style={{ maxWidth: 260, marginInline: 'auto' }} />
        <p style={{ margin: 0, fontSize: 'var(--body-size)', lineHeight: 1.8, color: 'var(--text-on-light-muted)', maxWidth: 560, marginInline: 'auto' }}>
          We have been colouring and cutting on Sierra Lakes Parkway for {s.years}. Same chairs, same hands, the same all-black room.
        </p>
      </div>
    </section>
  );
}

function Menu({ compact = false, onBook }) {
  const d = window.THS;
  return (
    <section id="services" style={{ position: 'relative', zIndex: 1, background: 'var(--black-ink)', padding: 'var(--section-y) 0' }}>
      <div style={PAGE}>
        <SectionHeading overline="Pricing list" title="Services" lede="Every price below is a starting price." />
        <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : 'repeat(3, 1fr)', gap: 56, marginTop: 56, alignItems: 'start' }}>
          {d.menu.map((g) => (
            <div key={g.group}>
              <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 24, letterSpacing: '0.11em', textTransform: 'uppercase' }}>{g.group}</h3>
              <div style={{ height: 1, background: 'var(--line-accent)', marginBottom: 10 }} />
              {g.items.map((it) => <ServiceRow key={it.name} name={it.name} price={it.price} from />)}
            </div>
          ))}
        </div>
        <p style={{ margin: '56px 0 0', paddingTop: 24, borderTop: '1px solid var(--line-faint)', fontSize: 'var(--body-sm-size)', color: 'var(--text-muted)', letterSpacing: '0.02em' }}>
          <span style={{ color: 'var(--accent-400)' }}>*</span> {d.priceDisclaimer}
        </p>
        <div style={{ marginTop: 40 }}><Button icon="arrow-right" onClick={onBook}>Book a service</Button></div>
      </div>
    </section>
  );
}

function Stylists({ onBook }) {
  /* The roster lives on Instagram, where each stylist's highlight stays
     current — the site never needs editing when the team changes. */
  const ig = `https://www.instagram.com/${window.THS.studio.instagram.replace(/@/g, '')}/`;
  return (
    <section style={{ position: 'relative', zIndex: 1, background: 'var(--black-void)', padding: 'var(--section-y) 0', borderTop: '1px solid var(--line-faint)' }}>
      <div style={PAGE}>
        <SectionHeading overline="Highlights" title="The stylists" lede="Each chair keeps its own book. The stylists' latest work lives in our Instagram highlights — always current, straight from the chair." />
        <div style={{ display: 'flex', gap: 14, marginTop: 40, flexWrap: 'wrap' }}>
          <Button icon="external-link" href={ig} target="_blank" rel="noopener">See the stylists on Instagram</Button>
          <Button variant="secondary" onClick={onBook}>Book with a stylist</Button>
        </div>
      </div>
    </section>
  );
}

function WorkGrid({ filterable = true }) {
  const [tab, setTab] = React.useState('All');
  const tags = ['All', 'Color', 'Cuts', 'Treatments'];
  const map = { Color: ['Balayage', 'Full highlights', 'Color correction', 'Root touch-up'], Cuts: ['Curtain bangs', 'Precision cut', 'Style / updo'], Treatments: ['Brazilian blowout'] };
  const items = tab === 'All' ? window.THS.work : window.THS.work.filter((w) => (map[tab] || []).includes(w.service));
  return (
    <section style={{ position: 'relative', zIndex: 1, background: 'var(--black-ink)', padding: 'var(--section-y) 0' }}>
      <div style={PAGE}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <SectionHeading overline="Recent work" title="From the chair" />
          {filterable && (
            <div style={{ display: 'flex', gap: 10 }}>
              {tags.map((t) => <Tag key={t} selected={tab === t} onClick={() => setTab(t)}>{t}</Tag>)}
            </div>
          )}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, marginTop: 48 }}>
          {items.map((w, i) => <WorkTile key={i} {...w} />)}
        </div>
        <p style={{ margin: '28px 0 0', fontSize: 'var(--caption-size)', color: 'var(--text-disabled)' }}>
          Grid mirrors the @_thehairstudio_ feed. Photography to be supplied by the salon.
        </p>
      </div>
    </section>
  );
}

function Voices() {
  return (
    <section style={{ position: 'relative', zIndex: 1, background: 'var(--bone-50)', padding: 'var(--section-y) 0' }}>
      <div style={{ ...PAGE, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
        <div style={{ display: 'grid', gap: 48 }}>
          {window.THS.testimonials.map((t) => <Testimonial key={t.author} {...t} onLight />)}
        </div>
        <PhotoFrame ratio="4 / 5" label="Client / detail shot" />
      </div>
    </section>
  );
}

function VisitBlock() {
  const s = window.THS.studio;
  const rows = [
    { icon: 'map-pin', label: 'Address', value: s.address },
    { icon: 'phone', label: 'Phone', value: s.phone },
    { icon: 'clock', label: 'Hours', value: window.THS.hours.map((h) => `${h.day}  ${h.time}`).join('\n') },
  ];
  return (
    <section style={{ position: 'relative', zIndex: 1, background: 'var(--black-void)', padding: 'var(--section-y) 0', borderTop: '1px solid var(--line-faint)' }}>
      <div style={{ ...PAGE, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72 }}>
        <div>
          <SectionHeading overline="Visit" title="Sierra Lakes Parkway" lede="Free parking in the plaza. Walk-ins when the book allows — call first." />
          <div style={{ display: 'grid', gap: 28, marginTop: 48 }}>
            {rows.map((r) => (
              <div key={r.label} style={{ display: 'flex', gap: 16 }}>
                <span style={{ color: 'var(--accent-400)', marginTop: 3 }}><Icon name={r.icon} size={17} strokeWidth={1.4} /></span>
                <div>
                  <div style={{ fontSize: 'var(--label-size)', fontWeight: 600, letterSpacing: 'var(--label-track)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6 }}>{r.label}</div>
                  <div style={{ fontSize: 'var(--body-size)', lineHeight: 1.8, color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>{r.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PhotoFrame ratio="1 / 1" src={window.THS.photos.interior} alt="Inside the studio" />
      </div>
    </section>
  );
}

Object.assign(window, { Hero, MissionStrip, Menu, Stylists, WorkGrid, Voices, VisitBlock, PAGE });
