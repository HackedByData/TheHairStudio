import React from 'react';
import { PhotoFrame } from './PhotoFrame.jsx';

/** One square in the work grid — the Instagram feed pattern, credited to a stylist on hover. */
export function WorkTile({ photo, service, stylist, ratio = '1 / 1', onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', overflow: 'hidden', cursor: onClick ? 'pointer' : 'default', ...style }}
      {...rest}
    >
      <PhotoFrame src={photo} ratio={ratio} label={service || 'Work'} radius="var(--radius-none)"
        style={{ transform: hover ? 'scale(1.03)' : 'scale(1)', transition: 'transform var(--dur-slow) var(--ease-out-soft)' }} />
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 18, background: 'var(--scrim-bottom)', opacity: hover ? 1 : 0,
        transition: 'opacity var(--dur-base) var(--ease-standard)', pointerEvents: 'none',
      }}>
        {service && <span style={{ fontFamily: 'var(--font-display)', fontSize: 17, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--bone-50)' }}>{service}</span>}
        {stylist && <span style={{ marginTop: 4, fontSize: 'var(--caption-size)', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--accent-300)' }}>{stylist}</span>}
      </div>
    </div>
  );
}
