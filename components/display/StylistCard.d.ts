import * as React from 'react';

/**
 * A stylist highlight — portrait, name, specialty, handle.
 *
 * @startingPoint section="Salon" subtitle="Stylist highlight card with portrait" viewport="700x400"
 */
export interface StylistCardProps {
  name: string;
  role?: string;
  /** Not yet supplied by the salon — omit rather than invent. */
  specialties?: string[];
  /** Instagram handle, including the @. */
  handle?: string;
  photo?: string;
  years?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export declare function StylistCard(props: StylistCardProps): JSX.Element;
