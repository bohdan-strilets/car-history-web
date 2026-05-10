import { baseToken, resolveResponsive } from '@shared/lib/primitives';
import { clsx } from 'clsx';
import { type ElementType } from 'react';

import { responsiveStyles, root } from './stack.css';
import type { StackProps } from './stack.types';

export const Stack = <T extends ElementType = 'div'>({
  as,
  children,
  className,
  direction,
  gap,
  align,
  justify,
  wrap,
  inline,
  ...rest
}: StackProps<T>) => {
  const Tag = (as ?? 'div') as ElementType;

  const recipeClass = root({
    direction: baseToken(direction),
    gap: baseToken(gap),
    align,
    justify,
    wrap: baseToken(wrap),
    inline,
  });

  const responsiveClasses = [
    ...resolveResponsive(responsiveStyles.direction, direction),
    ...resolveResponsive(responsiveStyles.gap, gap),
    ...resolveResponsive(responsiveStyles.wrap, wrap),
  ];

  return (
    <Tag className={clsx(recipeClass, ...responsiveClasses, className)} {...rest}>
      {children}
    </Tag>
  );
};
