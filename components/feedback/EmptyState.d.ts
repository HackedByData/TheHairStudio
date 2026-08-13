import * as React from 'react';

/**
 * Dashed-border placeholder for an empty appointment list or gallery filter.
 */
export interface EmptyStateProps {
  /** Icon name from the Icon set. */
  icon?: string;
  title: string;
  message?: string;
  action?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function EmptyState(props: EmptyStateProps): JSX.Element;
