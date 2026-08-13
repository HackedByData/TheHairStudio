import * as React from 'react';

/**
 * Real-time 3D hero background — the back of a woman's freshly gloss-treated hair, gathered and cut with a single snip as the page scrolls; the camera pushes in from the wide figure to a close-up of the lock.
 */
export interface HaircutSceneProps {
  /** Scroll position, 0 to 1. The host owns the scroll listener; this component is pure with respect to it. */
  progress?: number;
  /** Strand count. 2800 reads as a full head at 1280px; drop to ~1200 in a small frame. */
  strands?: number;
  /** Changes the pseudo-random hair layout. */
  seed?: number;
  /** Strength of the legibility scrim, 0 to 1. 0.62 under centred hero copy; ~0.3 to inspect the scene. */
  vignette?: number;
  style?: React.CSSProperties;
}

export declare function HaircutScene(props: HaircutSceneProps): JSX.Element;
