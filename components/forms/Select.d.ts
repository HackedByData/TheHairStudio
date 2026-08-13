import * as React from 'react';

/**
 * Native select with the house chevron. Use for service and stylist pickers.
 */
export interface SelectProps {
  label?: string;
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
}

export declare function Select(props: SelectProps): JSX.Element;
