import { clsx } from 'clsx';

import { Icons } from '@shared/icons';
import { baseToken, resolveResponsive } from '@shared/lib';

import { weightMap } from './icon.config';
import { responsiveStyles, root } from './icon.css';

import type { IconProps } from './icon.types';

export const Icon = ({
  name,
  size,
  color,
  weight = 'regular',
  className,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}: IconProps) => {
  const PhosphorIcon = Icons[name];
  const responsiveClasses = resolveResponsive(responsiveStyles.size, size);

  return (
    <PhosphorIcon
      className={clsx(root({ size: baseToken(size), color }), ...responsiveClasses, className)}
      weight={weightMap[weight]}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden ?? (ariaLabel ? undefined : true)}
    />
  );
};
