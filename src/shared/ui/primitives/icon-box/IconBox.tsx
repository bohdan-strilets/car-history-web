import { clsx } from 'clsx';

import { baseToken, resolveResponsive } from '@shared/lib';
import { Icon } from '@shared/ui';

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
  weight,
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
      <Icon name={name} weight={weight} size={size} color="inherit" />
    </span>
  );
};
