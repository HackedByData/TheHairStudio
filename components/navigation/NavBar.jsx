import React from 'react';
import { Logo } from '../core/Logo.jsx';
import { Button } from '../core/Button.jsx';
import { IconButton } from '../core/IconButton.jsx';

/** Fixed top bar. Transparent over a hero, solid black once scrolled — never a border until then. */
export function NavBar({ links = [], active, onNavigate, cta = 'Book now', onCta, scrolled = false, markSrc, style, ...rest }) {
  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 'var(--z-header)',
        height: 'var(--header-height)', display: 'flex', alignItems: 'center',
        padding: '0 var(--gutter-desktop)', gap: 40,
        background: scrolled ? 'rgba(11,11,11,.86)' : 'transparent',
        backdropFilter: scrolled ? 'var(--blur-glass)' : 'none',
        WebkitBackdropFilter: scrolled ? 'var(--blur-glass)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--border-default)' : 'transparent'}`,
        transition: 'background-color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(links[0]?.id); }} style={{ borderBottom: 'none', display: 'flex', alignItems: 'center' }}>
{markSrc ? <img src={markSrc} alt="The Hair Studio" style={{ height: 40, width: 40 }} /> : <Logo variant="type" size="sm" />}
      </a>
      <nav style={{ display: 'flex', gap: 34, marginLeft: 'auto', alignItems: 'center' }}>
        {links.map((l) => (
          <NavLink key={l.id} {...l} active={active === l.id} onClick={() => onNavigate && onNavigate(l.id)} />
        ))}
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <IconButton icon="phone" label="Call the salon" variant="ghost" size="sm" />
        <Button size="sm" variant={scrolled ? 'primary' : 'light'} onClick={onCta}>{cta}</Button>
      </div>
    </header>
  );
}

function NavLink({ label, active, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button" onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: 'none', border: 'none', padding: '4px 0', cursor: 'pointer',
        fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 'var(--weight-semibold)',
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: active ? 'var(--text-primary)' : hover ? 'var(--accent-300)' : 'var(--text-muted)',
        borderBottom: `1px solid ${active ? 'var(--accent-500)' : 'transparent'}`,
        transition: 'var(--transition-color)',
      }}
    >
      {label}
    </button>
  );
}
