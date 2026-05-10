import { clsx } from 'clsx';
import { forwardRef, type ElementType } from 'react';

import { colorSoftVariants, colorSolidVariants, gradientVariants, root } from './surface.css';
import type { SurfaceProps } from './surface.types';

const SurfaceInner = <T extends ElementType = 'div'>(
  {
    as,
    children,
    className,
    variant,
    color,
    colorVariant = 'soft',
    gradient,
    border,
    shadow,
    radius,
    ...rest
  }: SurfaceProps<T>,
  ref: React.Ref<Element>,
) => {
  const Tag = (as ?? 'div') as ElementType;

  const fillClass = gradient
    ? gradientVariants[gradient]
    : color
      ? colorVariant === 'solid'
        ? colorSolidVariants[color]
        : colorSoftVariants[color]
      : undefined;

  return (
    <Tag
      ref={ref}
      className={clsx(root({ variant, border, shadow, radius }), fillClass, className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const Surface = forwardRef(SurfaceInner) as <T extends ElementType = 'div'>(
  props: SurfaceProps<T> & { ref?: React.Ref<Element> },
) => React.ReactElement | null;
