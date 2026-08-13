import * as React from 'react';

/**
 * A hairline rule, optionally with the house diamond ornament.
 */
export interface DividerProps {
  /** Adds the oxblood diamond in the centre of the rule. */
  ornament?: boolean;
  tone?: 'default' | 'strong' | 'accent';
  spacing?: number;
  style?: React.CSSProperties;
}

export declare function Divider(props: DividerProps): JSX.Element;
