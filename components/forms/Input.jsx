import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Input({ label, hint, error, icon, type = 'text', value, onChange, placeholder, disabled = false, required = false, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const borderColor = error ? 'var(--red-500)' : focus ? 'var(--accent-400)' : 'var(--border-default)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', ...style }}>
      {label && (
        <label htmlFor={uid} style={{ fontSize: 'var(--label-size)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--label-track)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          {label}{required && <span style={{ color: 'var(--accent-400)' }}> *</span>}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {icon && <span style={{ position: 'absolute', left: 14, color: focus ? 'var(--accent-400)' : 'var(--text-muted)', transition: 'var(--transition-color)' }}><Icon name={icon} size={16} /></span>}
        <input
          id={uid} type={type} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            width: '100%', padding: icon ? '14px 16px 14px 42px' : '14px 16px',
            background: disabled ? 'var(--surface-inset)' : 'var(--black-void)',
            border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-input)',
            color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', fontSize: 'var(--body-size)',
            outline: 'none', transition: 'var(--transition-color)', opacity: disabled ? 0.5 : 1,
          }}
          {...rest}
        />
      </div>
      {(error || hint) && (
        <span style={{ fontSize: 'var(--caption-size)', color: error ? 'var(--red-500)' : 'var(--text-muted)' }}>{error || hint}</span>
      )}
    </div>
  );
}
