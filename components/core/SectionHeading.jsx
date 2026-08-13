import React from 'react';

/** Overline + display heading + optional lede. The standard opener for every section on every surface. */
export function SectionHeading({ overline, title, lede, align = 'left', level = 2, onLight = false, style, ...rest }) {
  const Tag = `h${level}`;
  const sizes = { 1: 'var(--display-3-size)', 2: 'var(--h1-size)', 3: 'var(--h2-size)', 4: 'var(--h3-size)' };
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? 680 : undefined, marginInline: align === 'center' ? 'auto' : undefined, ...style }} {...rest}>
      {overline && (
        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--overline-size)', fontWeight: 'var(--weight-semibold)',
          letterSpacing: 'var(--overline-track)', textTransform: 'uppercase',
          color: onLight ? 'var(--accent-600)' : 'var(--accent-400)', marginBottom: 18,
        }}>{overline}</div>
      )}
      <Tag style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-light)',
        fontSize: sizes[level] || sizes[2], lineHeight: 1.12, letterSpacing: '0.09em',
        textTransform: 'uppercase', color: onLight ? 'var(--text-on-light)' : 'var(--text-primary)',
      }}>{title}</Tag>
      {lede && (
        <p style={{
          margin: '20px 0 0', maxWidth: 560, marginInline: align === 'center' ? 'auto' : undefined,
          fontSize: 'var(--body-lg-size)', lineHeight: 'var(--body-lg-line)', fontWeight: 'var(--weight-light)',
          color: onLight ? 'var(--text-on-light-muted)' : 'var(--text-secondary)', textWrap: 'pretty',
        }}>{lede}</p>
      )}
    </div>
  );
}
