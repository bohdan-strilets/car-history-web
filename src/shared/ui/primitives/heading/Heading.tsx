import { baseToken, resolveResponsive } from '@shared/lib/primitives';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

import { responsiveStyles, root } from './heading.css';
import type { HeadingProps } from './heading.types';

const HeadingInner = (
  {
    as: Tag = 'h2',
    children,
    className,
    size,
    weight,
    font,
    color,
    align,
    transform,
    truncate,
    ...rest
  }: HeadingProps,
  ref: React.Ref<HTMLHeadingElement>,
) => {
  const recipeClass = root({
    size: baseToken(size),
    weight,
    font,
    color,
    align: baseToken(align),
    transform,
    truncate,
  });

  const responsiveClasses = [
    ...resolveResponsive(responsiveStyles.size, size),
    ...resolveResponsive(responsiveStyles.align, align),
  ];

  return (
    <Tag ref={ref} className={clsx(recipeClass, ...responsiveClasses, className)} {...rest}>
      {children}
    </Tag>
  );
};

export const Heading = forwardRef(HeadingInner);
