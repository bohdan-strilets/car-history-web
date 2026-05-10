import { baseToken, resolveResponsive } from '@shared/lib/primitives';
import { Icon } from '@shared/ui/primitives/icon';
import { clsx } from 'clsx';

import {
  ghostVariants,
  gradientVariants,
  responsiveStyles,
  root,
  softVariants,
  solidVariants,
} from './icon-box.css';
import type { IconBoxProps } from './icon-box.types';

export const IconBox = ({
  name,
  size,
  color,
  variant = 'soft',
  gradient,
  radius,
  shadow,
  strokeWidth,
  className,
  'aria-label': ariaLabel,
}: IconBoxProps) => {
  const baseSize = baseToken(size);
  const responsiveClasses = resolveResponsive(responsiveStyles.size, size);

  const fillClass = gradient
    ? gradientVariants[gradient]
    : color
      ? variant === 'solid'
        ? solidVariants[color]
        : variant === 'ghost'
          ? ghostVariants[color]
          : softVariants[color]
      : undefined;

  return (
    <span
      className={clsx(
        root({ size: baseSize, radius, shadow }),
        fillClass,
        ...responsiveClasses,
        className,
      )}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    >
      <Icon name={name} size={baseSize} strokeWidth={strokeWidth} color="inherit" />
    </span>
  );
};
