import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Checkbox({ label, description, checked = false, onChange, disabled = false, id, style, ...rest }) {
  const uid = id || React.useId();
  return (
    <label htmlFor={uid} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, ...style }}>
      <input id={uid} type="checkbox" checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{
        width: 18, height: 18, flex: '0 0 auto', marginTop: 2, display: 'grid', placeItems: 'center',
        border: `1px solid ${checked ? 'var(--accent-500)' : 'var(--border-strong)'}`,
        background: checked ? 'var(--accent-500)' : 'transparent',
        color: 'var(--text-on-accent)', borderRadius: 'var(--radius-xs)', transition: 'var(--transition-color)',
      }}>
        {checked && <Icon name="check" size={12} strokeWidth={2.5} />}
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 'var(--body-sm-size)', color: 'var(--text-primary)' }}>{label}</span>
        {description && <span style={{ fontSize: 'var(--caption-size)', color: 'var(--text-muted)' }}>{description}</span>}
      </span>
    </label>
  );
}
