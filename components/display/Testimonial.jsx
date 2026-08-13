import React from 'react';
import { Rating } from './Rating.jsx';

export function Testimonial({ quote, author, meta, rating, onLight = false, style, ...rest }) {
  return (
    <blockquote style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 20, ...style }} {...rest}>
      {rating != null && <Rating value={rating} onLight={onLight} />}
      <p style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-light)', fontStyle: 'italic',
        fontSize: 'var(--h3-size)', lineHeight: 1.5, letterSpacing: '0.01em', textWrap: 'pretty',
        color: onLight ? 'var(--text-on-light)' : 'var(--text-primary)',
      }}>{quote}</p>
      <footer style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 'var(--caption-size)', letterSpacing: 'var(--label-track)', textTransform: 'uppercase', color: onLight ? 'var(--text-on-light-muted)' : 'var(--text-muted)' }}>
        <span style={{ width: 20, height: 1, background: 'var(--accent-500)' }} />
        <span>{author}</span>{meta && <span style={{ opacity: 0.6 }}>· {meta}</span>}
      </footer>
    </blockquote>
  );
}
