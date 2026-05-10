import { baseToken, resolveResponsive } from '@shared/lib/primitives';
import { clsx } from 'clsx';
import { forwardRef, type ElementType } from 'react';

import { responsiveStyles, root } from './grid.css';
import type { GridProps } from './grid.types';

const GridInner = <T extends ElementType = 'div'>(
  { as, children, className, columns, gap, ...rest }: GridProps<T>,
  ref: React.Ref<Element>,
) => {
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
    <Tag ref={ref} className={clsx(recipeClass, ...responsiveClasses, className)} {...rest}>
      {children}
    </Tag>
  );
};

export const Grid = forwardRef(GridInner) as <T extends ElementType = 'div'>(
  props: GridProps<T> & { ref?: React.Ref<Element> },
) => React.ReactElement | null;
