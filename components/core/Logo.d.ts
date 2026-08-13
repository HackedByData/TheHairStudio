import * as React from 'react';

/**
 * The wordmark. Never recolour the raster mark; never set it on a light field without inverting.
 */
export interface LogoProps {
  /** "type" sets the name in Bodoni; "mark" uses the supplied raster; "stacked" is the two-line lockup. */
  variant?: 'type' | 'mark' | 'stacked';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  /** Path to the white-on-transparent mark. Adjust per project depth. */
  src?: string;
  style?: React.CSSProperties;
}

export declare function Logo(props: LogoProps): JSX.Element;
