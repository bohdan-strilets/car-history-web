import { root } from './overlay.css';

import type { OverlayProps } from './overlay.types';

export const Overlay = ({ onClick, style }: OverlayProps) => {
  return <div className={root} onClick={onClick} style={style} aria-hidden="true" />;
};
