import { clsx } from 'clsx';

import { root } from './divider.css';
import type { DividerProps } from './divider.types';

export const Divider = ({ orientation, color, className }: DividerProps) => (
  <hr
    role="separator"
    aria-orientation={orientation}
    className={clsx(root({ orientation, color }), className)}
  />
);
