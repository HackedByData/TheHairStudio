import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { padding: '9px 18px', fontSize: 11, tracking: '0.18em', icon: 14, gap: 8 },
  md: { padding: '14px 28px', fontSize: 12, tracking: '0.20em', icon: 16, gap: 10 },
  lg: { padding: '19px 40px', fontSize: 13, tracking: '0.22em', icon: 18, gap: 12 },
};

const VARIANTS = {
  primary:   { background: 'var(--accent-500)', color: 'var(--text-on-accent)', border: '1px solid var(--accent-500)' },
  secondary: { background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-strong)' },
  ghost:     { background: 'transparent', color: 'var(--text-secondary)', border: '1px solid transparent' },
  light:     { background: 'var(--bone-50)', color: 'var(--text-on-light)', border: '1px solid var(--bone-50)' },
  danger:    { background: 'transparent', color: 'var(--red-500)', border: '1px solid rgba(193,95,82,.5)' },
};

const HOVER = {
  primary:   { background: 'var(--accent-400)', borderColor: 'var(--accent-400)' },
  secondary: { background: 'var(--veil-8)', borderColor: 'var(--accent-400)', color: 'var(--accent-200)' },
  ghost:     { color: 'var(--text-primary)', background: 'var(--veil-4)' },
  light:     { background: 'var(--bone-200)', borderColor: 'var(--bone-200)' },
  danger:    { background: 'rgba(193,95,82,.10)', borderColor: 'var(--red-500)' },
};

export function Button({
  children, variant = 'primary', size = 'md', icon, iconPosition = 'right',
  fullWidth = false, disabled = false, as = 'button', href, onClick, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const Tag = href ? 'a' : as;

  const composed = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center', justifyContent: 'center', gap: s.gap,
    padding: s.padding, fontFamily: 'var(--font-sans)', fontSize: s.fontSize,
    fontWeight: 'var(--weight-semibold)', letterSpacing: s.tracking,
    textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap',
    borderRadius: 'var(--radius-button)', cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-color), transform var(--dur-fast) var(--ease-standard), opacity var(--dur-fast) linear',
    opacity: disabled ? 0.38 : 1,
    transform: press && !disabled ? 'translateY(1px)' : 'none',
    ...v,
    ...(hover && !disabled ? HOVER[variant] : null),
    ...style,
  };

  return (
    <Tag
      href={href} onClick={disabled ? undefined : onClick} disabled={Tag === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={composed} {...rest}
    >
      {icon && iconPosition === 'left' && <Icon name={icon} size={s.icon} strokeWidth={1.6} />}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <Icon name={icon} size={s.icon} strokeWidth={1.6} />}
    </Tag>
  );
}
