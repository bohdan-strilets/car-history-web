import { type ElementType } from 'react';

import { clsx } from 'clsx';

import { root } from './surface.css';

import type { SurfaceProps } from './surface.types';

export const Surface = <T extends ElementType = 'div'>({
  as,
  children,
  className,
  variant,
  soft,
  solid,
  gradient,
  border,
  shadow,
  radius,
  ...rest
}: SurfaceProps<T>) => {
  const Tag = (as ?? 'div') as ElementType;
  const rootClass = root({
    variant,
    soft,
    solid,
    gradient,
    border,
    shadow,
    radius,
  });

  return (
    <Tag className={clsx(rootClass, className)} {...rest}>
      {children}
    </Tag>
  );
};
