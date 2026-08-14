const { NavBar, Footer, Button, SectionHeading, Divider, Logo } = window.TheHairStudioDesignSystem_03d078;

function BookCta() {
  return (
    <section style={{ position: 'relative', zIndex: 1, background: 'var(--accent-500)', padding: '72px var(--gutter-desktop)', textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-script)', fontSize: 52, lineHeight: 1, color: 'var(--text-on-accent)' }}>Book an appointment today</div>
      <p style={{ margin: '20px auto 32px', maxWidth: 440, fontSize: 'var(--body-size)', lineHeight: 1.7, color: 'rgba(250,248,245,.72)' }}>
        {window.THS.studio.phone} · {window.THS.studio.address.replace('\n', ', ')}
      </p>
      <Button variant="light" size="lg" icon="arrow-right" href={window.THS.studio.booking} target="_blank" rel="noopener">Book on Booker</Button>
    </section>
  );
}

function PageHeader({ overline, title, lede }) {
  return (
    <section style={{ position: 'relative', zIndex: 1, background: 'var(--black-void)', padding: '140px var(--gutter-desktop) 72px', borderBottom: '1px solid var(--line-faint)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeading overline={overline} title={title} lede={lede} level={1} />
      </div>
    </section>
  );
}

function App() {
  const [page, setPage] = React.useState('home');
  const [scrolled, setScrolled] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const ref = React.useRef(null);
  const go = (id) => {
    /* the stylist roster lives on Instagram — the nav item goes straight there */
    if (id === 'team') { window.open(`https://www.instagram.com/${window.THS.studio.instagram.replace(/@/g, '')}/`, '_blank', 'noopener'); return; }
    setPage(id); setProgress(0); if (ref.current) ref.current.scrollTop = 0;
  };
  const onScroll = (e) => {
    const y = e.target.scrollTop;
    setScrolled(y > 40);
    setProgress(Math.max(0, Math.min(1, y / (e.target.clientHeight * 0.72))));
  };
  const book = () => window.open(window.THS.studio.booking, '_blank');

  const pages = {
    home: <><Hero onBook={book} progress={progress} /><MissionStrip /><Menu onBook={book} /><Stylists onBook={book} /><WorkGrid /><Voices /><BookCta /></>,
    services: <><PageHeader overline="Pricing list" title="Services" lede="Starting prices for bra length or shorter." /><Menu onBook={book} /><BookCta /></>,
    work: <><PageHeader overline="Recent work" title="Work" lede="Straight from the feed." /><WorkGrid /><BookCta /></>,
    visit: <><PageHeader overline="Visit" title="Find us" /><VisitBlock /><Menu compact onBook={book} /></>,
  };

  return (
    <div ref={ref} onScroll={onScroll} style={{ height: '100vh', overflowY: 'auto', background: 'var(--black-ink)', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 200 }}>
        <NavBar links={window.THS.nav} active={page} onNavigate={go} onCta={book} scrolled={scrolled || page !== 'home'} />
      </div>
      <div style={{ marginTop: 'calc(var(--header-height) * -1)' }}>{pages[page]}</div>
      <Footer
        address={window.THS.studio.address}
        phone={window.THS.studio.phone}
        instagram={window.THS.studio.instagram}
        hours={window.THS.hours}
        columns={[
          { title: 'Services', links: ['Haircuts & styling', 'Color services', 'Treatments & specials'] },
          { title: 'Studio', links: ['Our stylists', 'Recent work', 'Book online'] },
        ]}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
