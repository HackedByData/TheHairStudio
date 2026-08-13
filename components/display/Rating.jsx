import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Rating({ value = 5, count, size = 14, label, onLight = false, style, ...rest }) {
  const full = Math.round(value);
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, ...style }} {...rest}>
      <span style={{ display: 'inline-flex', gap: 3 }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} style={{ color: i < full ? 'var(--accent-400)' : onLight ? 'rgba(17,17,17,.18)' : 'var(--text-disabled)', fill: 'currentColor' }}>
            <Icon name="star" size={size} strokeWidth={i < full ? 1.2 : 1} style={i < full ? { fill: 'currentColor' } : undefined} />
          </span>
        ))}
      </span>
      {(count || label) && (
        <span style={{ fontSize: 'var(--caption-size)', color: onLight ? 'var(--text-on-light-muted)' : 'var(--text-muted)', letterSpacing: '0.04em' }}>
          {label || `${value.toFixed(1)} · ${count} reviews`}
        </span>
      )}
    </div>
  );
}
