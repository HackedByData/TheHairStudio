import React from 'react';

/** Surface container. Square corners by default; `soft` opts into the print-flier radius. */
export function Card({ children, tone = 'dark', soft = false, interactive = false, padding = 32, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    dark:  { background: 'var(--surface-card)', color: 'var(--text-primary)', border: '1px solid var(--border-default)', boxShadow: 'var(--shadow-sm)' },
    void:  { background: 'var(--black-void)', color: 'var(--text-primary)', border: '1px solid var(--border-default)', boxShadow: 'none' },
    light: { background: 'var(--surface-light)', color: 'var(--text-on-light)', border: '1px solid transparent', boxShadow: 'var(--shadow-light-md)' },
    outline: { background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-default)', boxShadow: 'none' },
  }[tone];
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        padding, borderRadius: soft ? 'var(--radius-card-soft)' : 'var(--radius-card)',
        transition: 'var(--transition-color), transform var(--dur-base) var(--ease-out-soft), box-shadow var(--dur-base) var(--ease-standard)',
        cursor: interactive || onClick ? 'pointer' : 'default', ...tones,
        ...(hover && (interactive || onClick) ? {
          borderColor: tone === 'light' ? 'transparent' : 'var(--border-accent)',
          background: tone === 'light' ? 'var(--surface-light)' : 'var(--surface-card-hover)',
          transform: 'translateY(-2px)',
          boxShadow: tone === 'light' ? 'var(--shadow-light-lg)' : 'var(--shadow-md)',
        } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
