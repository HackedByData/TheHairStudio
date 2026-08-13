import * as React from 'react';

/**
 * Every image goes through this. Without a src it shows a labelled placeholder.
 */
export interface PhotoFrameProps {
  /** Omit to render the honest placeholder rather than a fake image. */
  src?: string;
  alt?: string;
  /** CSS aspect-ratio string, e.g. "4 / 5". */
  ratio?: string;
  /** Placeholder caption shown when there is no src. */
  label?: string;
  caption?: string;
  /** Lays the bottom scrim over the image for text legibility. */
  overlay?: boolean;
  grayscale?: boolean;
  radius?: string;
  style?: React.CSSProperties;
}

export declare function PhotoFrame(props: PhotoFrameProps): JSX.Element;
