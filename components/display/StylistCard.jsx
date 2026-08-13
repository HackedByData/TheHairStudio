import React from 'react';
import { PhotoFrame } from './PhotoFrame.jsx';
import { Icon } from '../core/Icon.jsx';

/** Stylist highlight — portrait, name, specialty, handle. The Instagram "highlights" pattern. */
export function StylistCard({ name, role, specialties = [], handle, photo, years, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ cursor: onClick ? 'pointer' : 'default', ...style }}
      {...rest}
    >
      <div style={{ overflow: 'hidden', transition: 'var(--transition-transform)' }}>
        <PhotoFrame src={photo} alt={name} ratio="4 / 5" label={`${name || 'Stylist'} portrait`}
          style={{ transform: hover && onClick ? 'scale(1.02)' : 'scale(1)', transition: 'var(--transition-transform)' }} />
      </div>
      <div style={{ paddingTop: 20 }}>
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-light)', fontSize: 'var(--h3-size)', letterSpacing: '0.10em', textTransform: 'uppercase', color: hover && onClick ? 'var(--accent-200)' : 'var(--text-primary)', transition: 'var(--transition-color)' }}>{name}</h3>
        {role && <div style={{ marginTop: 6, fontSize: 'var(--caption-size)', letterSpacing: 'var(--overline-track)', textTransform: 'uppercase', color: 'var(--accent-400)' }}>{role}</div>}
        {specialties.length > 0 && (
          <p style={{ margin: '14px 0 0', fontSize: 'var(--body-sm-size)', lineHeight: 1.6, color: 'var(--text-secondary)', fontWeight: 'var(--weight-light)' }}>{specialties.join(' · ')}</p>
        )}
        <div style={{ display: 'flex', gap: 18, marginTop: 16, alignItems: 'center' }}>
          {handle && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 'var(--caption-size)', color: 'var(--text-muted)' }}>
              <Icon name="sparkles" size={13} strokeWidth={1.4} />{handle}
            </span>
          )}
          {years && <span style={{ fontSize: 'var(--caption-size)', color: 'var(--text-muted)' }}>{years}</span>}
        </div>
      </div>
    </article>
  );
}
