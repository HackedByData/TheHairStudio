import * as React from 'react';

/**
 * A small uppercase status marker — booking states, "new", "member".
 */
export interface BadgeProps {
  children: React.ReactNode;
  tone?: 'neutral' | 'accent' | 'confirmed' | 'pending' | 'cancelled' | 'solid';
  dot?: boolean;
  style?: React.CSSProperties;
}

export declare function Badge(props: BadgeProps): JSX.Element;
