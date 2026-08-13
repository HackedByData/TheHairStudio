import * as React from 'react';

/**
 * One square in the work grid, credited to a stylist on hover.
 */
export interface WorkTileProps {
  photo?: string;
  /** Service name revealed on hover. */
  service?: string;
  /** Stylist credit revealed on hover. */
  stylist?: string;
  ratio?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export declare function WorkTile(props: WorkTileProps): JSX.Element;
