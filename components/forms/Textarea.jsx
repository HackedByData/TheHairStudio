import React from 'react';

export function Textarea({ label, hint, error, rows = 4, value, onChange, placeholder, disabled = false, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', ...style }}>
      {label && <label htmlFor={uid} style={{ fontSize: 'var(--label-size)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--label-track)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</label>}
      <textarea
        id={uid} rows={rows} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: '100%', padding: '14px 16px', resize: 'vertical',
          background: disabled ? 'var(--surface-inset)' : 'var(--black-void)',
          border: `1px solid ${error ? 'var(--red-500)' : focus ? 'var(--accent-400)' : 'var(--border-default)'}`,
          borderRadius: 'var(--radius-input)', color: 'var(--text-primary)',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--body-size)', lineHeight: 1.6,
          outline: 'none', transition: 'var(--transition-color)',
        }}
        {...rest}
      />
      {(error || hint) && <span style={{ fontSize: 'var(--caption-size)', color: error ? 'var(--red-500)' : 'var(--text-muted)' }}>{error || hint}</span>}
    </div>
  );
}
