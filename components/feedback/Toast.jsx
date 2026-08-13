import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';

const TONES = {
  success: { icon: 'circle-check', color: 'var(--green-500)' },
  info:    { icon: 'sparkles', color: 'var(--accent-400)' },
  error:   { icon: 'x', color: 'var(--red-500)' },
};

export function Toast({ title, message, tone = 'success', onClose, style, ...rest }) {
  const t = TONES[tone] || TONES.info;
  return (
    <div
      role="status"
      style={{
        display: 'flex', gap: 14, alignItems: 'flex-start', minWidth: 320, maxWidth: 420,
        padding: '18px 18px 18px 20px', background: 'var(--surface-card)',
        border: '1px solid var(--border-default)', borderRadius: 'var(--radius-card)',
        boxShadow: 'var(--shadow-lg)', ...style,
      }}
      {...rest}
    >
      <span style={{ color: t.color, marginTop: 1 }}><Icon name={t.icon} size={18} strokeWidth={1.5} /></span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 'var(--body-sm-size)', fontWeight: 'var(--weight-semibold)', letterSpacing: '0.02em' }}>{title}</div>
        {message && <div style={{ marginTop: 4, fontSize: 'var(--caption-size)', color: 'var(--text-muted)', lineHeight: 1.6 }}>{message}</div>}
      </div>
      {onClose && <IconButton icon="x" label="Dismiss" size="sm" onClick={onClose} />}
    </div>
  );
}
