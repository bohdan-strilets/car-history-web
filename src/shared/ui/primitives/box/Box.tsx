import { type ElementType } from 'react';

import { clsx } from 'clsx';

import { baseToken, resolveResponsive } from '@shared/lib';

import { responsiveStyles, root } from './box.css';

import type { BoxProps } from './box.types';

export const Box = <T extends ElementType = 'div'>({
  as,
  children,
  className,
  p,
  px,
  py,
  radius,
  width,
  maxWidth,
  height,
  overflow,
  position,
  ...rest
}: BoxProps<T>) => {
  const Tag = (as ?? 'div') as ElementType;

  const recipeClass = root({
    p: baseToken(p),
    px: baseToken(px),
    py: baseToken(py),
    radius: baseToken(radius),
    width: typeof width === 'string' ? width : width?.mobile,
    maxWidth,
    height: typeof height === 'string' ? height : height?.mobile,
    overflow: typeof overflow === 'string' ? overflow : overflow?.mobile,
    position: typeof position === 'string' ? position : position?.mobile,
  });

  const responsiveClasses = [
    ...resolveResponsive(responsiveStyles.p, p),
    ...resolveResponsive(responsiveStyles.px, px),
    ...resolveResponsive(responsiveStyles.py, py),
    ...resolveResponsive(responsiveStyles.radius, radius),
  ];

  return (
    <Tag className={clsx(recipeClass, ...responsiveClasses, className)} {...rest}>
      {children}
    </Tag>
  );
};
