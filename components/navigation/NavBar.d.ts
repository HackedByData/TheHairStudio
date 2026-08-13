import * as React from 'react';

/**
 * Sticky top bar: wordmark, links, call button, booking CTA.
 *
 * @startingPoint section="Navigation" subtitle="Sticky salon header with booking CTA" viewport="1280x120"
 */
export interface NavBarProps {
  links?: Array<{ id: string; label: string }>;
  /** Oversized/splash headers only — the square two-line mark is illegible under ~56px. Omit for the standard bar, which sets the name in Bodoni. */
  markSrc?: string;
  active?: string;
  cta?: string;
  /** Solidifies the bar once the page has scrolled past the hero. */
  scrolled?: boolean;
  onNavigate?: (id: string) => void;
  onCta?: () => void;
  style?: React.CSSProperties;
}

export declare function NavBar(props: NavBarProps): JSX.Element;
