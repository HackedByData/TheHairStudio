import * as React from 'react';

/**
 * Square checkbox; fills oxblood when on.
 */
export interface CheckboxProps {
  label: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

export declare function Checkbox(props: CheckboxProps): JSX.Element;
