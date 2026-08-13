import * as React from 'react';

/**
 * Binary preference toggle — reminders, marketing opt-in.
 */
export interface SwitchProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

export declare function Switch(props: SwitchProps): JSX.Element;
