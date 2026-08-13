import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function EmptyState({ icon = 'calendar', title, message, action, style, ...rest }) {
  return (
    <div style={{ display: 'grid', placeItems: 'center', gap: 14, textAlign: 'center', padding: '64px 24px', border: '1px dashed var(--border-default)', borderRadius: 'var(--radius-card)', ...style }} {...rest}>
      <span style={{ color: 'var(--text-disabled)' }}><Icon name={icon} size={26} strokeWidth={1} /></span>
      <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-light)', fontSize: 'var(--h3-size)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{title}</h3>
      {message && <p style={{ margin: 0, maxWidth: 340, fontSize: 'var(--body-sm-size)', color: 'var(--text-muted)', lineHeight: 1.7 }}>{message}</p>}
      {action && <div style={{ marginTop: 10 }}>{action}</div>}
    </div>
  );
}
