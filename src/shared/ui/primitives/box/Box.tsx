import { baseToken, resolveResponsive } from '@shared/lib/primitives';
import { clsx } from 'clsx';
import { forwardRef, type ElementType } from 'react';

import { responsiveStyles, root } from './box.css';
import type { BoxProps } from './box.types';

const BoxInner = <T extends ElementType = 'div'>(
  {
    as,
    children,
    className,
    p,
    px,
    py,
    radius,
    width,
    height,
    overflow,
    position,
    ...rest
  }: BoxProps<T>,
  ref: React.Ref<Element>,
) => {
  const Tag = (as ?? 'div') as ElementType;

  const recipeClass = root({
    p: baseToken(p),
    px: baseToken(px),
    py: baseToken(py),
    radius: baseToken(radius),
    width: typeof width === 'string' ? width : width?.mobile,
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
    <Tag ref={ref} className={clsx(recipeClass, ...responsiveClasses, className)} {...rest}>
      {children}
    </Tag>
  );
};

export const Box = forwardRef(BoxInner) as <T extends ElementType = 'div'>(
  props: BoxProps<T> & { ref?: React.Ref<Element> },
) => React.ReactElement | null;
