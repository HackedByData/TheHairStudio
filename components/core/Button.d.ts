import * as React from 'react';

/**
 * The primary action. Always uppercase, always tracked; square corners, no radius.
 *
 * @startingPoint section="Core" subtitle="Oxblood, outline, ghost and light actions" viewport="700x220"
 */
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'light' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  /** Icon name from the Icon set. */
  icon?: string;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  href?: string;
  as?: keyof JSX.IntrinsicElements;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): JSX.Element;
