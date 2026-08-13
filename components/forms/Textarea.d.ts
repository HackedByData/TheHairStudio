import * as React from 'react';

/**
 * Multi-line field for booking notes and consultation requests.
 */
export interface TextareaProps {
  label?: string;
  hint?: string;
  error?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
}

export declare function Textarea(props: TextareaProps): JSX.Element;
