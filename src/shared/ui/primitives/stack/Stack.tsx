import { baseToken, resolveResponsive } from '@shared/lib/primitives';
import { clsx } from 'clsx';
import { forwardRef, type ElementType } from 'react';

import { responsiveStyles, root } from './stack.css';
import type { StackProps } from './stack.types';

function StackInner<T extends ElementType = 'div'>(
  { as, children, className, direction, gap, align, justify, wrap, inline, ...rest }: StackProps<T>,
  ref: React.Ref<Element>,
) {
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
    <Tag ref={ref} className={clsx(recipeClass, ...responsiveClasses, className)} {...rest}>
      {children}
    </Tag>
  );
}

export const Stack = forwardRef(StackInner) as <T extends ElementType = 'div'>(
  props: StackProps<T> & { ref?: React.Ref<Element> },
) => React.ReactElement | null;
