import React from 'react';

export function Tabs({ items = [], value, onChange, align = 'left', style, ...rest }) {
  return (
    <div role="tablist" style={{ display: 'flex', gap: 32, justifyContent: align === 'center' ? 'center' : 'flex-start', borderBottom: '1px solid var(--border-default)', ...style }} {...rest}>
      {items.map((it) => {
        const item = typeof it === 'string' ? { id: it, label: it } : it;
        const on = value === item.id;
        return (
          <button
            key={item.id} role="tab" aria-selected={on} onClick={() => onChange && onChange(item.id)}
            style={{
              background: 'none', border: 'none', padding: '0 0 16px', cursor: 'pointer',
              fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 'var(--weight-semibold)',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: on ? 'var(--text-primary)' : 'var(--text-muted)',
              boxShadow: on ? 'inset 0 -1px 0 var(--accent-500)' : 'none',
              transition: 'var(--transition-color)',
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
