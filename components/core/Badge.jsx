import React from 'react';

const TONES = {
  neutral:   { background: 'var(--veil-8)', color: 'var(--text-secondary)', border: 'var(--line-hairline)' },
  accent:    { background: 'rgba(140,28,43,.16)', color: 'var(--accent-300)', border: 'var(--line-accent)' },
  confirmed: { background: 'var(--green-900)', color: 'var(--green-500)', border: 'rgba(127,163,122,.4)' },
  pending:   { background: 'var(--amber-900)', color: 'var(--amber-500)', border: 'rgba(217,164,65,.4)' },
  cancelled: { background: 'var(--red-900)', color: 'var(--red-500)', border: 'rgba(193,95,82,.4)' },
  solid:     { background: 'var(--bone-50)', color: 'var(--text-on-light)', border: 'var(--bone-50)' },
};

export function Badge({ children, tone = 'neutral', dot = false, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '5px 10px 4px', background: t.background, color: t.color,
        border: `1px solid ${t.border}`, borderRadius: 'var(--radius-xs)',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--label-size)', fontWeight: 'var(--weight-semibold)',
        letterSpacing: 'var(--label-track)', textTransform: 'uppercase', lineHeight: 1.2, ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'currentColor' }} />}
      {children}
    </span>
  );
}
