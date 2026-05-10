import { clsx } from 'clsx';
import { forwardRef, type ElementType } from 'react';

import { root } from './center.css';
import type { CenterProps } from './center.types';

const CenterInner = <T extends ElementType = 'div'>(
  { as, children, className, inline, ...rest }: CenterProps<T>,
  ref: React.Ref<Element>,
) => {
  const Tag = (as ?? 'div') as ElementType;

  return (
    <Tag ref={ref} className={clsx(root({ inline }), className)} {...rest}>
      {children}
    </Tag>
  );
};

export const Center = forwardRef(CenterInner) as <T extends ElementType = 'div'>(
  props: CenterProps<T> & { ref?: React.Ref<Element> },
) => React.ReactElement | null;
