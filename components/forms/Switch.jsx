import React from 'react';

export function Switch({ label, checked = false, onChange, disabled = false, id, style, ...rest }) {
  const uid = id || React.useId();
  return (
    <label htmlFor={uid} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, ...style }}>
      <input id={uid} type="checkbox" role="switch" checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{
        width: 42, height: 22, padding: 3, borderRadius: 'var(--radius-pill)',
        background: checked ? 'var(--accent-500)' : 'var(--surface-inset)',
        border: `1px solid ${checked ? 'var(--accent-500)' : 'var(--border-strong)'}`,
        display: 'flex', justifyContent: checked ? 'flex-end' : 'flex-start',
        transition: 'background-color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
      }}>
        <span style={{ width: 16, height: 16, borderRadius: '50%', background: checked ? 'var(--bone-50)' : 'var(--greige-400)', transition: 'var(--transition-transform)' }} />
      </span>
      {label && <span style={{ fontSize: 'var(--body-sm-size)', color: 'var(--text-secondary)' }}>{label}</span>}
    </label>
  );
}
