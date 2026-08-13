import * as React from 'react';

/**
 * The only icon source. Renders a Lucide glyph at the house 1.5px stroke weight.
 */
export interface IconProps {
  /** Lucide icon name, e.g. "scissors" | "calendar" | "map-pin". */
  name?: string;
  size?: number;
  /** 1.5 is the house weight. Never go above 2. */
  strokeWidth?: number;
  color?: string;
  /** Accessible name. Omit for purely decorative icons. */
  label?: string;
  style?: React.CSSProperties;
}

export declare function Icon(props: IconProps): JSX.Element;
