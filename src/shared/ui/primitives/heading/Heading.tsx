import { baseToken, resolveResponsive } from '@shared/lib/primitives';
import { clsx } from 'clsx';

import { responsiveStyles, root } from './heading.css';
import type { HeadingProps } from './heading.types';

export const Heading = ({
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
}: HeadingProps) => {
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
    <Tag className={clsx(recipeClass, ...responsiveClasses, className)} {...rest}>
      {children}
    </Tag>
  );
};
