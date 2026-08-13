import * as React from 'react';

/**
 * A pill-shaped filter chip. The only pill-radius element in the system.
 */
export interface TagProps {
  children: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export declare function Tag(props: TagProps): JSX.Element;
