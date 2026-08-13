import * as React from 'react';

/**
 * A transient confirmation. Bottom-right, one at a time.
 */
export interface ToastProps {
  title: string;
  message?: string;
  tone?: 'success' | 'info' | 'error';
  onClose?: () => void;
  style?: React.CSSProperties;
}

export declare function Toast(props: ToastProps): JSX.Element;
