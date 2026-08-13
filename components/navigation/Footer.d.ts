import * as React from 'react';

/**
 * Site footer with the stacked lockup, address, hours table and link columns.
 */
export interface FooterProps {
  address?: string;
  phone?: string;
  /** Instagram handle, including the @. */
  instagram?: string;
  hours?: Array<{ day: string; time: string }>;
  columns?: Array<{ title: string; links: string[] }>;
  style?: React.CSSProperties;
}

export declare function Footer(props: FooterProps): JSX.Element;
