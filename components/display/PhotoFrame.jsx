import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * Every image on every surface goes through this. With no `src` it renders an honest,
 * labelled placeholder instead of a decorative fake — the salon's photography comes
 * from Instagram and must be supplied, never invented.
 */
export function PhotoFrame({ src, alt = '', ratio = '4 / 5', label = 'Photograph', caption, overlay = false, grayscale = false, radius = 'var(--radius-image)', style, ...rest }) {
  return (
    <figure style={{ margin: 0, position: 'relative', width: '100%', height: ratio === 'auto' ? '100%' : undefined, ...style }} {...rest}>
      <div style={{
        position: 'relative', width: '100%', aspectRatio: ratio === 'auto' ? undefined : ratio, height: ratio === 'auto' ? '100%' : undefined, overflow: 'hidden',
        borderRadius: radius, background: 'var(--surface-inset)',
        boxShadow: src ? 'none' : 'inset 0 0 0 1px var(--line-hairline)',
      }}>
        {src ? (
          <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: grayscale ? 'grayscale(1) contrast(1.05)' : 'none' }} />
        ) : (
          <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', gap: 10, alignContent: 'center', color: 'var(--text-disabled)' }}>
            <Icon name="sparkles" size={22} strokeWidth={1} />
            <span style={{ fontSize: 'var(--overline-size)', letterSpacing: 'var(--overline-track)', textTransform: 'uppercase' }}>{label}</span>
          </div>
        )}
        {overlay && <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-bottom)' }} />}
      </div>
      {caption && <figcaption style={{ marginTop: 12, fontSize: 'var(--caption-size)', color: 'var(--text-muted)', letterSpacing: '0.02em' }}>{caption}</figcaption>}
    </figure>
  );
}
