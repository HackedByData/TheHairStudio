const { NavBar, Button, IconButton, Card, Input, Textarea, Checkbox, RadioGroup, SectionHeading, ServiceRow, Badge, Divider, Icon, Dialog, Toast, Tag, PhotoFrame, EmptyState } = window.TheHairStudioDesignSystem_03d078;

const STEPS = ['Service', 'Stylist', 'Time', 'Details'];
const DAYS = [
  { id: 'thu', label: 'Thu 14', sub: 'Aug' },
  { id: 'fri', label: 'Fri 15', sub: 'Aug' },
  { id: 'sat', label: 'Sat 16', sub: 'Aug' },
  { id: 'mon', label: 'Mon 18', sub: 'Aug' },
  { id: 'tue', label: 'Tue 19', sub: 'Aug' },
];
const SLOTS = { thu: ['9:00', '10:30', '13:00', '15:30'], fri: ['9:30', '11:00', '14:00'], sat: ['8:00', '9:30', '11:00', '12:30', '14:00'], mon: [], tue: ['10:00', '13:30', '16:00'] };

function Stepper({ step }) {
  return (
    <ol style={{ display: 'flex', gap: 0, listStyle: 'none', margin: 0, padding: 0 }}>
      {STEPS.map((s, i) => {
        const done = i < step, now = i === step;
        return (
          <li key={s} style={{ display: 'flex', alignItems: 'center', gap: 12, paddingRight: 20 }}>
            <span style={{
              width: 26, height: 26, borderRadius: '50%', display: 'grid', placeItems: 'center', flex: '0 0 auto',
              border: `1px solid ${done || now ? 'var(--accent-500)' : 'var(--border-default)'}`,
              background: done ? 'var(--accent-500)' : 'transparent',
              color: done ? 'var(--text-on-accent)' : now ? 'var(--accent-300)' : 'var(--text-disabled)',
              fontSize: 11, fontWeight: 600,
            }}>{done ? <Icon name="check" size={12} strokeWidth={2.5} /> : i + 1}</span>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: now ? 'var(--text-primary)' : done ? 'var(--text-secondary)' : 'var(--text-disabled)' }}>{s}</span>
            {i < STEPS.length - 1 && <span style={{ width: 34, height: 1, background: 'var(--line-hairline)', marginLeft: 8 }} />}
          </li>
        );
      })}
    </ol>
  );
}

function Summary({ service, stylist, day, slot }) {
  const d = DAYS.find((x) => x.id === day);
  const rows = [
    { label: 'Service', value: service ? `${service.name} · ${service.price}+` : '—' },
    { label: 'Stylist', value: stylist ? stylist.label : '—' },
    { label: 'When', value: d && slot ? `${d.label} ${d.sub} · ${slot}` : '—' },
  ];
  return (
    <Card tone="void" padding={28} style={{ position: 'sticky', top: 108 }}>
      <div style={{ fontSize: 'var(--overline-size)', fontWeight: 600, letterSpacing: 'var(--overline-track)', textTransform: 'uppercase', color: 'var(--accent-400)' }}>Your appointment</div>
      <Divider spacing={20} />
      <div style={{ display: 'grid', gap: 18 }}>
        {rows.map((r) => (
          <div key={r.label}>
            <div style={{ fontSize: 'var(--label-size)', letterSpacing: 'var(--label-track)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 5 }}>{r.label}</div>
            <div style={{ fontSize: 'var(--body-size)', color: r.value === '—' ? 'var(--text-disabled)' : 'var(--text-primary)' }}>{r.value}</div>
          </div>
        ))}
      </div>
      <Divider spacing={20} />
      <p style={{ margin: 0, fontSize: 'var(--caption-size)', lineHeight: 1.65, color: 'var(--text-muted)' }}>
        <span style={{ color: 'var(--accent-400)' }}>*</span> Starting price for bra length or shorter. Length and thickness are extra — your stylist confirms in the chair.
      </p>
    </Card>
  );
}

function BookingApp() {
  const [step, setStep] = React.useState(0);
  const [service, setService] = React.useState(null);
  const [group, setGroup] = React.useState('Color Services');
  const [stylist, setStylist] = React.useState(null);
  const [day, setDay] = React.useState('thu');
  const [slot, setSlot] = React.useState(null);
  const [done, setDone] = React.useState(false);
  const [toast, setToast] = React.useState(false);

  const menu = window.THS.menu;
  const stylistOptions = [
    { value: 'any', label: 'First available', meta: 'Soonest opening' },
    ...window.THS.stylists.map((s) => ({ value: s.name.toLowerCase(), label: s.name, meta: s.role })),
  ];
  const canNext = [Boolean(service), Boolean(stylist), Boolean(slot), true][step];

  const confirm = () => { setDone(true); setToast(true); };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--black-ink)' }}>
      <NavBar links={window.THS.nav} active="visit" cta="Call instead" scrolled onCta={() => {}} />
      <main style={{ maxWidth: 1080, margin: '0 auto', padding: '56px var(--gutter-desktop) 96px' }}>
        <SectionHeading overline="Booking" title="Reserve your chair" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24, padding: '14px 18px', border: '1px solid var(--border-accent)', background: 'rgba(140,28,43,.10)' }}>
          <span style={{ color: 'var(--accent-300)' }}><Icon name="external-link" size={15} /></span>
          <span style={{ fontSize: 'var(--body-sm-size)', color: 'var(--text-secondary)' }}>
            Design reference only. Live bookings are taken on <a href={window.THS.studio.booking} target="_blank" rel="noopener">Booker</a>.
          </span>
        </div>
        <div style={{ marginTop: 40, paddingBottom: 32, borderBottom: '1px solid var(--line-faint)' }}><Stepper step={step} /></div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 56, marginTop: 44, alignItems: 'start' }}>
          <div>
            {step === 0 && (
              <div>
                <div style={{ display: 'flex', gap: 10, marginBottom: 28, flexWrap: 'wrap' }}>
                  {menu.map((g) => <Tag key={g.group} selected={group === g.group} onClick={() => setGroup(g.group)}>{g.group}</Tag>)}
                </div>
                <div style={{ display: 'grid', gap: 2 }}>
                  {menu.find((g) => g.group === group).items.map((it) => {
                    const on = service && service.name === it.name;
                    return (
                      <div key={it.name} onClick={() => setService(it)} style={{ padding: '4px 18px', cursor: 'pointer', border: `1px solid ${on ? 'var(--accent-500)' : 'transparent'}`, background: on ? 'rgba(140,28,43,.09)' : 'transparent', transition: 'var(--transition-color)' }}>
                        <ServiceRow name={it.name} price={it.price} from />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 1 && (
              <RadioGroup style={{ maxHeight: 520, overflowY: 'auto', paddingRight: 8 }} label="Who is cutting?" value={stylist && stylist.value} onChange={(v) => setStylist(stylistOptions.find((o) => o.value === v))} options={stylistOptions} />
            )}

            {step === 2 && (
              <div>
                <div style={{ display: 'flex', gap: 10, marginBottom: 32 }}>
                  {DAYS.map((d) => {
                    const on = day === d.id;
                    return (
                      <button key={d.id} onClick={() => { setDay(d.id); setSlot(null); }} style={{
                        flex: 1, padding: '16px 8px', background: on ? 'var(--surface-card)' : 'transparent',
                        border: `1px solid ${on ? 'var(--accent-500)' : 'var(--border-default)'}`, cursor: 'pointer',
                        color: on ? 'var(--text-primary)' : 'var(--text-muted)', fontFamily: 'var(--font-sans)', transition: 'var(--transition-color)',
                      }}>
                        <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: '0.04em' }}>{d.label}</div>
                        <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 4, opacity: 0.6 }}>{d.sub}</div>
                      </button>
                    );
                  })}
                </div>
                {SLOTS[day].length === 0 ? (
                  <EmptyState icon="calendar" title="Closed that day" message="The studio is closed Mondays. Pick another date." />
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                    {SLOTS[day].map((t) => {
                      const on = slot === t;
                      return (
                        <button key={t} onClick={() => setSlot(t)} style={{
                          padding: '16px 0', background: on ? 'var(--accent-500)' : 'transparent',
                          border: `1px solid ${on ? 'var(--accent-500)' : 'var(--border-default)'}`,
                          color: on ? 'var(--text-on-accent)' : 'var(--text-secondary)', cursor: 'pointer',
                          fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600, letterSpacing: '0.06em',
                          fontVariantNumeric: 'tabular-nums', transition: 'var(--transition-color)',
                        }}>{t}</button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {step === 3 && (
              <div style={{ display: 'grid', gap: 20, maxWidth: 480 }}>
                <Input label="Full name" placeholder="First and last" required />
                <Input label="Phone" icon="phone" placeholder="(909) 000-0000" required hint="We text a reminder the day before." />
                <Input label="Email" icon="mail" placeholder="you@example.com" />
                <Textarea label="Anything we should know?" rows={3} placeholder="Previous colour, allergies, inspiration photos…" />
                <Checkbox label="Text me a reminder" description="The day before, once." checked onChange={() => {}} />
                <Checkbox label="I understand the 24-hour cancellation notice" checked onChange={() => {}} />
              </div>
            )}

            <div style={{ display: 'flex', gap: 12, marginTop: 44, alignItems: 'center' }}>
              {step > 0 && <Button variant="ghost" icon="arrow-left" iconPosition="left" onClick={() => setStep(step - 1)}>Back</Button>}
              <div style={{ flex: 1 }} />
              {step < 3
                ? <Button icon="arrow-right" disabled={!canNext} onClick={() => setStep(step + 1)}>Continue</Button>
                : <Button icon="check" onClick={confirm}>Confirm booking</Button>}
            </div>
          </div>

          <Summary service={service} stylist={stylist} day={day} slot={slot} />
        </div>
      </main>

      <Dialog
        open={done}
        title="You're booked"
        description={service && slot ? `${service.name} with ${stylist ? stylist.label : 'first available'} — ${(DAYS.find((d) => d.id === day) || {}).label} August at ${slot}.` : ''}
        onClose={() => setDone(false)}
        footer={<><Button variant="ghost" onClick={() => setDone(false)}>Close</Button><Button icon="calendar" iconPosition="left">Add to calendar</Button></>}
      >
        <div style={{ display: 'grid', gap: 14, padding: '20px 22px', background: 'var(--black-void)', border: '1px solid var(--border-default)' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 14, color: 'var(--text-secondary)' }}><Icon name="map-pin" size={15} />16923 Sierra Lakes Pkwy, Unit 107, Fontana</div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 14, color: 'var(--text-secondary)' }}><Icon name="phone" size={15} />(909) 365-4443</div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}><Icon name="sparkles" size={15} />Starting price shown. Length and thickness are extra.</div>
        </div>
      </Dialog>

      {toast && (
        <div style={{ position: 'fixed', right: 28, bottom: 28, zIndex: 500 }}>
          <Toast tone="success" title="Appointment confirmed" message="We texted the details to your phone." onClose={() => setToast(false)} />
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BookingApp />);
