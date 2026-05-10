import { baseToken, resolveResponsive } from '@shared/lib/primitives';
import { clsx } from 'clsx';
import { forwardRef, type ElementType } from 'react';

import { responsiveStyles, root } from './text.css';
import type { TextProps } from './text.types';

const TextInner = <T extends ElementType = 'p'>(
  {
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
    ...rest
  }: TextProps<T>,
  ref: React.Ref<Element>,
) => {
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

export const Text = forwardRef(TextInner) as <T extends ElementType = 'p'>(
  props: TextProps<T> & { ref?: React.Ref<Element> },
) => React.ReactElement | null;
