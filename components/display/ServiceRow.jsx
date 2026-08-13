import React from 'react';

/**
 * A menu line: service name, dotted leader, price. Lifted straight from the salon's
 * printed pricing list — the leader dots are a brand signature, not decoration.
 */
export function ServiceRow({ name, price, note, from = false, onLight = false, dense = false, style, ...rest }) {
  const ink = onLight ? 'var(--text-on-light)' : 'var(--text-primary)';
  const dim = onLight ? 'var(--text-on-light-muted)' : 'var(--text-muted)';
  const dot = onLight ? 'rgba(17,17,17,.28)' : 'rgba(250,248,245,.26)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 3, padding: dense ? '7px 0' : '11px 0', ...style }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, width: '100%' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--body-size)', fontWeight: 'var(--weight-medium)', color: ink, letterSpacing: '0.01em', whiteSpace: 'nowrap' }}>{name}</span>
        <span aria-hidden="true" style={{ flex: 1, minWidth: 24, height: '1em', borderBottom: `1px dotted ${dot}`, transform: 'translateY(-.28em)' }} />
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--price-size)', fontWeight: 'var(--weight-semibold)', color: onLight ? 'var(--accent-700)' : 'var(--accent-300)', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>
          {from && <span style={{ fontSize: 11, fontWeight: 'var(--weight-medium)', letterSpacing: '0.14em', textTransform: 'uppercase', color: dim, marginRight: 6 }}>from</span>}
          {price}
        </span>
      </div>
      {note && <span style={{ fontSize: 'var(--caption-size)', color: dim, letterSpacing: '0.01em' }}>{note}</span>}
    </div>
  );
}
