import * as React from 'react';

/**
 * Oxblood star rating with an optional review count.
 */
export interface RatingProps {
  value?: number;
  count?: number;
  size?: number;
  /** Overrides the generated "4.3 · 514 reviews" string. */
  label?: string;
  onLight?: boolean;
  style?: React.CSSProperties;
}

export declare function Rating(props: RatingProps): JSX.Element;
