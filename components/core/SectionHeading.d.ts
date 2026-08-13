import * as React from 'react';

/**
 * Overline + display title + lede. Opens every section on every surface.
 */
export interface SectionHeadingProps {
  overline?: string;
  title: string;
  lede?: string;
  align?: 'left' | 'center';
  level?: 1 | 2 | 3 | 4;
  /** Set true on bone surfaces so the type flips to ink. */
  onLight?: boolean;
  style?: React.CSSProperties;
}

export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
