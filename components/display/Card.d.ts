import * as React from 'react';

/**
 * Surface container. Square by default; hairline border, shadow only as a second signal.
 *
 * @startingPoint section="Core" subtitle="Dark, void, light and outline surfaces" viewport="700x300"
 */
export interface CardProps {
  children: React.ReactNode;
  tone?: 'dark' | 'void' | 'light' | 'outline';
  /** Opts into the 14px print-flier radius instead of square corners. */
  soft?: boolean;
  interactive?: boolean;
  padding?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export declare function Card(props: CardProps): JSX.Element;
