import { clsx } from 'clsx';
import { type ElementType } from 'react';

import { root } from './center.css';
import type { CenterProps } from './center.types';

export const Center = <T extends ElementType = 'div'>({
  as,
  children,
  className,
  inline,
  ...rest
}: CenterProps<T>) => {
  const Tag = (as ?? 'div') as ElementType;

  return (
    <Tag className={clsx(root({ inline }), className)} {...rest}>
      {children}
    </Tag>
  );
};
