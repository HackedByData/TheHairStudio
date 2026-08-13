import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Select({ label, options = [], value, onChange, placeholder = 'Select…', disabled = false, error, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', ...style }}>
      {label && <label htmlFor={uid} style={{ fontSize: 'var(--label-size)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--label-track)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</label>}
      <div style={{ position: 'relative' }}>
        <select
          id={uid} value={value} onChange={onChange} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            width: '100%', padding: '14px 42px 14px 16px', appearance: 'none',
            background: disabled ? 'var(--surface-inset)' : 'var(--black-void)',
            border: `1px solid ${error ? 'var(--red-500)' : focus ? 'var(--accent-400)' : 'var(--border-default)'}`,
            borderRadius: 'var(--radius-input)', color: value ? 'var(--text-primary)' : 'var(--text-muted)',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--body-size)', outline: 'none',
            cursor: disabled ? 'not-allowed' : 'pointer', transition: 'var(--transition-color)',
          }}
          {...rest}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((o) => {
            const opt = typeof o === 'string' ? { value: o, label: o } : o;
            return <option key={opt.value} value={opt.value}>{opt.label}</option>;
          })}
        </select>
        <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)' }}>
          <Icon name="chevron-down" size={16} />
        </span>
      </div>
    </div>
  );
}
