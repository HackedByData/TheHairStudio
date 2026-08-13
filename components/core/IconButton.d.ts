import * as React from 'react';

/**
 * A square-or-round action carrying only a glyph. Always pass `label`.
 */
export interface IconButtonProps {
  /** Icon name from the Icon set. */
  icon: string;
  /** Required accessible label. */
  label: string;
  variant?: 'outline' | 'ghost' | 'solid' | 'light';
  size?: 'sm' | 'md' | 'lg';
  round?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
