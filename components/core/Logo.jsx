import React from 'react';

/**
 * The wordmark. `variant="mark"` uses the supplied raster mark (white on transparent);
 * `variant="type"` sets the name in Bodoni Moda for places the raster is too heavy.
 */
export function Logo({ variant = 'type', size = 'md', color = 'var(--text-primary)', src = '/assets/logo-mark-white.png', style, ...rest }) {
  const scale = { sm: 0.72, md: 1, lg: 1.55, xl: 2.4 }[size] || 1;

  if (variant === 'mark') {
    return <img src={src} alt="The Hair Studio" style={{ width: 44 * scale, height: 44 * scale, ...style }} {...rest} />;
  }

  if (variant === 'stacked') {
    return (
      <span style={{ display: 'inline-block', textAlign: 'center', color, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-light)', lineHeight: 1.12, ...style }} {...rest}>
        <span style={{ display: 'block', fontSize: 13 * scale, letterSpacing: `${0.42 * scale}em`, textIndent: `${0.42 * scale}em`, textTransform: 'uppercase' }}>The Hair</span>
        <span style={{ display: 'block', fontSize: 22 * scale, letterSpacing: `${0.24 * scale}em`, textIndent: `${0.24 * scale}em`, textTransform: 'uppercase' }}>Studio</span>
      </span>
    );
  }

  return (
    <span
      style={{
        display: 'inline-block', color, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-light)',
        fontSize: 18 * scale, letterSpacing: `${0.30 * scale}em`, textIndent: `${0.30 * scale}em`,
        textTransform: 'uppercase', whiteSpace: 'nowrap', ...style,
      }}
      {...rest}
    >
      The Hair Studio
    </span>
  );
}
