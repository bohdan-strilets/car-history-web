import clsx from 'clsx';

import { root, track } from './progress-bar.css';

import type { ProgressBarProps } from './progress-bar.types';

export const ProgressBar = ({ value, color, className }: ProgressBarProps) => {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div
      className={clsx(track, className)}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className={root({ color })} style={{ width: `${clamped}%` }} />
    </div>
  );
};
