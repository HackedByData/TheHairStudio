import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = { sm: 32, md: 40, lg: 48 };

export function IconButton({ icon, label, variant = 'ghost', size = 'md', round = false, disabled = false, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const d = SIZES[size] || SIZES.md;
  const base = {
    outline:  { background: 'transparent', border: '1px solid var(--border-default)', color: 'var(--text-secondary)' },
    ghost:    { background: 'transparent', border: '1px solid transparent', color: 'var(--text-secondary)' },
    solid:    { background: 'var(--accent-500)', border: '1px solid var(--accent-500)', color: 'var(--text-on-accent)' },
    light:    { background: 'var(--bone-50)', border: '1px solid var(--bone-50)', color: 'var(--text-on-light)' },
  }[variant];
  const hoverStyle = {
    outline: { borderColor: 'var(--accent-400)', color: 'var(--accent-200)' },
    ghost:   { background: 'var(--veil-8)', color: 'var(--text-primary)' },
    solid:   { background: 'var(--accent-400)', borderColor: 'var(--accent-400)' },
    light:   { background: 'var(--bone-200)', borderColor: 'var(--bone-200)' },
  }[variant];

  return (
    <button
      type="button" aria-label={label} disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: d, height: d, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: round ? 'var(--radius-circle)' : 'var(--radius-xs)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.38 : 1,
        transition: 'var(--transition-color)', padding: 0,
        ...base, ...(hover && !disabled ? hoverStyle : null), ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={size === 'sm' ? 15 : size === 'lg' ? 20 : 17} strokeWidth={1.5} />
    </button>
  );
}
