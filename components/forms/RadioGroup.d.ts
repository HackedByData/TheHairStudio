import * as React from 'react';

/**
 * Boxed vertical radio list. The booking flow's stylist and time picker.
 */
export interface RadioGroupProps {
  label?: string;
  name?: string;
  options?: Array<string | { value: string; label: string; meta?: string }>;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}

export declare function RadioGroup(props: RadioGroupProps): JSX.Element;
