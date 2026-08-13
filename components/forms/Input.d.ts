import * as React from 'react';

/**
 * Single-line text field. Sits on true black, not the card grey.
 */
export interface InputProps {
  label?: string;
  hint?: string;
  error?: string;
  /** Icon name rendered inside the field's left edge. */
  icon?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

export declare function Input(props: InputProps): JSX.Element;
