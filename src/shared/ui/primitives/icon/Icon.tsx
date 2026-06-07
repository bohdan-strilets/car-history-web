import { clsx } from 'clsx';

import { Icons } from '@shared/icons';
import { baseToken, resolveResponsive } from '@shared/lib';

import { strokeWidthMap } from './icon.config';
import { responsiveStyles, root } from './icon.css';

import type { IconProps } from './icon.types';

export const Icon = ({
  name,
  size,
  color,
  strokeWidth = 'regular',
  className,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}: IconProps) => {
  const LucideIcon = Icons[name];
  const responsiveClasses = resolveResponsive(responsiveStyles.size, size);

  return (
    <LucideIcon
      className={clsx(root({ size: baseToken(size), color }), ...responsiveClasses, className)}
      strokeWidth={strokeWidthMap[strokeWidth]}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden ?? (ariaLabel ? undefined : true)}
    />
  );
};
