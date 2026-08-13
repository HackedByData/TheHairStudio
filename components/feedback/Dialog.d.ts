import * as React from 'react';

/**
 * Modal over a blurred black scrim. Booking confirmation and consultation forms.
 */
export interface DialogProps {
  open?: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  width?: number;
  onClose?: () => void;
  style?: React.CSSProperties;
}

export declare function Dialog(props: DialogProps): JSX.Element;
