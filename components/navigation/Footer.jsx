import React from 'react';
import { Logo } from '../core/Logo.jsx';
import { Icon } from '../core/Icon.jsx';

export function Footer({ address, phone, instagram, hours = [], columns = [], style, ...rest }) {
  return (
    <footer style={{ position: 'relative', zIndex: 1, background: 'var(--black-void)', borderTop: '1px solid var(--border-default)', padding: '80px var(--gutter-desktop) 40px', ...style }} {...rest}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <Logo variant="stacked" size="md" />
          {address && (
            <p style={{ margin: '28px 0 0', fontSize: 'var(--body-sm-size)', lineHeight: 1.8, color: 'var(--text-muted)' }}>
              {address}
            </p>
          )}
          <div style={{ display: 'flex', gap: 18, marginTop: 20 }}>
            {phone && <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 'var(--body-sm-size)', borderBottom: 'none', color: 'var(--text-secondary)' }}><Icon name="phone" size={14} />{phone}</a>}
          </div>
          {instagram && <a href={`https://www.instagram.com/${String(instagram).replace(/@/g, '')}/`} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 12, fontSize: 'var(--body-sm-size)', borderBottom: 'none', color: 'var(--accent-300)' }}><Icon name="external-link" size={14} />{instagram}</a>}
        </div>
        {hours.length > 0 && (
          <div>
            <h4 style={{ margin: '0 0 20px', fontSize: 'var(--overline-size)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--overline-track)', textTransform: 'uppercase', color: 'var(--text-primary)' }}>Hours</h4>
            <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: 'auto 1fr', rowGap: 8, columnGap: 16, fontSize: 'var(--body-sm-size)' }}>
              {hours.map((h) => (
                <React.Fragment key={h.day}>
                  <dt style={{ color: 'var(--text-muted)' }}>{h.day}</dt>
                  <dd style={{ margin: 0, color: 'var(--text-secondary)', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{h.time}</dd>
                </React.Fragment>
              ))}
            </dl>
          </div>
        )}
        {columns.map((c) => (
          <div key={c.title}>
            <h4 style={{ margin: '0 0 20px', fontSize: 'var(--overline-size)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--overline-track)', textTransform: 'uppercase', color: 'var(--text-primary)' }}>{c.title}</h4>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {c.links.map((l) => <li key={l}><a href="#" style={{ fontSize: 'var(--body-sm-size)', color: 'var(--text-muted)', borderBottom: 'none' }}>{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 'var(--container-max)', margin: '64px auto 0', paddingTop: 24, borderTop: '1px solid var(--line-faint)', display: 'flex', justifyContent: 'space-between', fontSize: 'var(--caption-size)', color: 'var(--text-disabled)', letterSpacing: '0.04em' }}>
        <span>© {new Date().getFullYear()} The Hair Studio</span>
        <span>Fontana, California</span>
      </div>
    </footer>
  );
}
