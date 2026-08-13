import React from 'react';

/** Vertical radio list. Used for stylist choice and appointment time in the booking flow. */
export function RadioGroup({ label, name, options = [], value, onChange, disabled = false, style, ...rest }) {
  const gid = React.useId();
  return (
    <div role="radiogroup" aria-label={label} style={{ display: 'flex', flexDirection: 'column', gap: 10, ...style }} {...rest}>
      {label && <span style={{ fontSize: 'var(--label-size)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--label-track)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 2 }}>{label}</span>}
      {options.map((o) => {
        const opt = typeof o === 'string' ? { value: o, label: o } : o;
        const on = value === opt.value;
        return (
          <label key={opt.value} htmlFor={`${gid}-${opt.value}`} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px',
            border: `1px solid ${on ? 'var(--accent-500)' : 'var(--border-default)'}`,
            background: on ? 'rgba(140,28,43,.09)' : 'transparent',
            borderRadius: 'var(--radius-xs)', cursor: disabled ? 'not-allowed' : 'pointer',
            transition: 'var(--transition-color)',
          }}>
            <input id={`${gid}-${opt.value}`} type="radio" name={name || gid} value={opt.value} checked={on}
              onChange={() => onChange && onChange(opt.value)} disabled={disabled}
              style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
            <span style={{ width: 16, height: 16, borderRadius: '50%', flex: '0 0 auto', display: 'grid', placeItems: 'center', border: `1px solid ${on ? 'var(--accent-500)' : 'var(--border-strong)'}` }}>
              {on && <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent-500)' }} />}
            </span>
            <span style={{ flex: 1, fontSize: 'var(--body-sm-size)', color: 'var(--text-primary)' }}>{opt.label}</span>
            {opt.meta && <span style={{ fontSize: 'var(--caption-size)', color: 'var(--text-muted)' }}>{opt.meta}</span>}
          </label>
        );
      })}
    </div>
  );
}
