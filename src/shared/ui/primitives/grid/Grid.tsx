import { type ElementType } from 'react';

import { clsx } from 'clsx';

import { baseToken, resolveResponsive } from '@shared/lib';

import { responsiveStyles, root } from './grid.css';

import type { GridProps } from './grid.types';

export const Grid = <T extends ElementType = 'div'>({
  as,
  children,
  className,
  columns,
  gap,
  ...rest
}: GridProps<T>) => {
  const Tag = (as ?? 'div') as ElementType;

  const recipeClass = root({
    columns: baseToken(columns),
    gap: baseToken(gap),
  });

  const responsiveClasses = [
    ...resolveResponsive(responsiveStyles.columns, columns),
    ...resolveResponsive(responsiveStyles.gap, gap),
  ];

  return (
    <Tag className={clsx(recipeClass, ...responsiveClasses, className)} {...rest}>
      {children}
    </Tag>
  );
};
