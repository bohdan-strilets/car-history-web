import { baseToken, resolveResponsive } from '@shared/lib/primitives';
import { Icon } from '@shared/ui/primitives/icon';
import { clsx } from 'clsx';

import { responsiveStyles, root } from './icon-box.css';
import type { IconBoxProps } from './icon-box.types';

export const IconBox = ({
  name,
  size,
  soft,
  solid,
  gradient,
  border,
  radius,
  shadow,
  strokeWidth,
  className,
  'aria-label': ariaLabel,
}: IconBoxProps) => {
  const baseSize = baseToken(size);
  const responsiveClasses = resolveResponsive(responsiveStyles.size, size);

  return (
    <span
      className={clsx(
        root({ size: baseSize, soft, solid, gradient, border, radius, shadow }),
        ...responsiveClasses,
        className,
      )}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    >
      <Icon name={name} strokeWidth={strokeWidth} />
    </span>
  );
};
