import * as React from 'react';

/**
 * Uppercase tab strip with an oxblood underline on the active item.
 */
export interface TabsProps {
  items?: Array<string | { id: string; label: string }>;
  value?: string;
  align?: 'left' | 'center';
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}

export declare function Tabs(props: TabsProps): JSX.Element;
