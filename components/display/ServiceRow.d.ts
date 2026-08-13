import * as React from 'react';

/**
 * A menu line with dotted leader — the salon's pricing-list signature.
 *
 * @startingPoint section="Salon" subtitle="Dotted-leader price menu line" viewport="700x260"
 */
export interface ServiceRowProps {
  name: string;
  /** Formatted with the currency symbol, e.g. "$285". */
  price: string;
  /** Small note under the row, e.g. length surcharge wording. */
  note?: string;
  /** Prefixes the price with "FROM" — required for every starting price. */
  from?: boolean;
  onLight?: boolean;
  dense?: boolean;
  style?: React.CSSProperties;
}

export declare function ServiceRow(props: ServiceRowProps): JSX.Element;
