import { type ElementType } from 'react';

import { clsx } from 'clsx';

import { resolveResponsive } from '@shared/lib';

import { Icon } from '../icon';

import { responsiveStyles, root } from './badge.css';
import { iconSizeMap } from './badge.utils';

import type { BadgeProps } from './badge.types';

export const Badge = <T extends ElementType = 'span'>({
  as,
  children,
  className,
  size,
  soft,
  solid,
  gradient,
  border,
  startIcon,
  endIcon,
  ...rest
}: BadgeProps<T>) => {
  const Tag = (as ?? 'span') as ElementType;

  const mobileSize = typeof size === 'string' ? size : (size?.mobile ?? 'md');

  const rootClass = root({
    size: mobileSize,
    ...(solid ? { solid } : {}),
    ...(gradient ? { gradient } : {}),
    ...(border ? { border } : {}),
    ...(!solid && !gradient && !border ? { soft: soft ?? 'gray' } : {}),
  });

  const responsiveClasses = [
    ...resolveResponsive(responsiveStyles.sizeHeight, size),
    ...resolveResponsive(responsiveStyles.sizePaddingInline, size),
    ...resolveResponsive(responsiveStyles.sizeFontSize, size),
  ];

  const iconSize = iconSizeMap[mobileSize];

  return (
    <Tag className={clsx(rootClass, ...responsiveClasses, className)} {...rest}>
      {startIcon && <Icon name={startIcon} size={iconSize} color="inherit" weight="fill" />}
      {children}
      {endIcon && <Icon name={endIcon} size={iconSize} color="inherit" weight="fill" />}
    </Tag>
  );
};
