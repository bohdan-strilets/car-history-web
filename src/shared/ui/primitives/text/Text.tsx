import { type ElementType } from 'react';

import { clsx } from 'clsx';

import { baseToken, resolveResponsive } from '@shared/lib';

import { responsiveStyles, root } from './text.css';

import type { TextProps } from './text.types';

export const Text = <T extends ElementType = 'p'>({
  as,
  children,
  className,
  size,
  weight,
  color,
  align,
  lineHeight,
  letterSpacing,
  transform,
  italic,
  underline,
  strike,
  truncate,
  family,
  ...rest
}: TextProps<T>) => {
  const Tag = (as ?? 'p') as ElementType;

  const recipeClass = root({
    size: baseToken(size),
    weight,
    color,
    align: baseToken(align),
    lineHeight,
    letterSpacing,
    transform,
    italic,
    underline,
    strike,
    truncate,
    family,
  });

  const responsiveClasses = [
    ...resolveResponsive(responsiveStyles.size, size),
    ...resolveResponsive(responsiveStyles.align, align),
  ];

  return (
    <Tag className={clsx(recipeClass, ...responsiveClasses, className)} {...rest}>
      {children}
    </Tag>
  );
};
