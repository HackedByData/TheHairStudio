import React from 'react';

export function Tag({ children, selected = false, onClick, disabled = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const interactive = Boolean(onClick);
  return (
    <button
      type="button" onClick={disabled ? undefined : onClick} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        padding: '8px 16px', borderRadius: 'var(--radius-pill)',
        border: `1px solid ${selected ? 'var(--accent-400)' : hover && interactive ? 'var(--border-strong)' : 'var(--border-default)'}`,
        background: selected ? 'rgba(140,28,43,.14)' : hover && interactive ? 'var(--veil-4)' : 'transparent',
        color: selected ? 'var(--accent-200)' : 'var(--text-secondary)',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--body-sm-size)', fontWeight: 'var(--weight-medium)',
        letterSpacing: '0.02em', whiteSpace: 'nowrap', cursor: disabled ? 'not-allowed' : interactive ? 'pointer' : 'default',
        opacity: disabled ? 0.4 : 1, transition: 'var(--transition-color)', ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
