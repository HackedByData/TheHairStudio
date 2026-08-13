import * as React from 'react';

/**
 * A client quote set in italic Bodoni with a oxblood rule under the attribution.
 */
export interface TestimonialProps {
  quote: string;
  author: string;
  meta?: string;
  rating?: number;
  onLight?: boolean;
  style?: React.CSSProperties;
}

export declare function Testimonial(props: TestimonialProps): JSX.Element;
