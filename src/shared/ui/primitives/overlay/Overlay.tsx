import { root } from './overlay.css';
import type { OverlayProps } from './overlay.types';

export const Overlay = ({ onClick }: OverlayProps) => {
  return <div className={root} onClick={onClick} aria-hidden="true" />;
};
