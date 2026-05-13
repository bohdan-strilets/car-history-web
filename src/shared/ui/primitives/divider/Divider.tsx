import { clsx } from 'clsx';

import { labelText, root, withLabel } from './divider.css';
import type { DividerProps } from './divider.types';

export const Divider = ({ orientation, color, label, className }: DividerProps) => {
  if (label) {
    return (
      <div className={clsx(withLabel, className)}>
        <span className={labelText}>{label}</span>
      </div>
    );
  }

  return (
    <hr
      role="separator"
      aria-orientation={orientation}
      className={clsx(root({ orientation, color }), className)}
    />
  );
};
