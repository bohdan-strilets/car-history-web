import { baseToken, resolveResponsive } from '@shared/lib/primitives';
import { clsx } from 'clsx';

import { innerRing, outerRing, responsiveStyles, root } from './spinner.css';
import type { SpinnerProps } from './spinner.types';

export const Spinner = ({ size, color = 'accent', className }: SpinnerProps) => {
  const baseSize = baseToken(size);

  const responsiveClasses = resolveResponsive(responsiveStyles.size, size);

  return (
    <span
      className={clsx(root({ size: baseSize }), ...responsiveClasses, className)}
      role="status"
      aria-label="Loading"
    >
      <span className={outerRing({ color })} />
      <span className={innerRing({ color })} />
    </span>
  );
};

Spinner.displayName = 'Spinner';
