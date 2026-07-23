import { clsx } from 'clsx';

import { root } from './pulsing-dot.css';

import type { PulsingDotProps } from './pulsing-dot.types';

export const PulsingDot = ({
  color,
  size = 'md',
  isPulsing = true,
  className,
  ...rest
}: PulsingDotProps) => {
  return <span className={clsx(root({ size, color, isPulsing }), className)} {...rest} />;
};
