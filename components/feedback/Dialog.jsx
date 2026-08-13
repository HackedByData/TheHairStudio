import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

export function Dialog({ open = true, title, description, children, footer, onClose, width = 520, style, ...rest }) {
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 'var(--z-modal)', display: 'grid', placeItems: 'center', padding: 24, background: 'var(--black-overlay)', backdropFilter: 'blur(6px)' }} onClick={onClose}>
      <div
        role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: width, background: 'var(--surface-card)',
          border: '1px solid var(--border-default)', borderRadius: 'var(--radius-card)',
          boxShadow: 'var(--shadow-modal)', padding: 36, ...style,
        }}
        {...rest}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}>
          <div style={{ flex: 1 }}>
            {title && <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-light)', fontSize: 'var(--h2-size)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{title}</h2>}
            {description && <p style={{ margin: '14px 0 0', fontSize: 'var(--body-sm-size)', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{description}</p>}
          </div>
          {onClose && <IconButton icon="x" label="Close" onClick={onClose} size="sm" />}
        </div>
        {children && <div style={{ marginTop: 28 }}>{children}</div>}
        {footer && <div style={{ marginTop: 32, display: 'flex', gap: 12, justifyContent: 'flex-end' }}>{footer}</div>}
      </div>
    </div>
  );
}
