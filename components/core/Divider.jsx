import React from 'react';

/** Hairline rule. `ornament` drops a small oxblood diamond in the middle — the salon's one flourish. */
export function Divider({ ornament = false, tone = 'default', spacing = 32, style, ...rest }) {
  const color = tone === 'strong' ? 'var(--border-strong)' : tone === 'accent' ? 'var(--line-accent)' : 'var(--border-default)';
  if (!ornament) return <hr style={{ border: 0, borderTop: `1px solid ${color}`, margin: `${spacing}px 0`, ...style }} {...rest} />;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: `${spacing}px 0`, ...style }} {...rest}>
      <span style={{ flex: 1, height: 1, background: color }} />
      <span style={{ width: 5, height: 5, background: 'var(--accent-500)', transform: 'rotate(45deg)' }} />
      <span style={{ flex: 1, height: 1, background: color }} />
    </div>
  );
}
