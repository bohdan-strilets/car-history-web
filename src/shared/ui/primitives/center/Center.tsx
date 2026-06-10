import type { ElementType } from 'react';

import clsx from 'clsx';

import { root } from './center.css';

import type { CenterProps } from './center.types';

export const Center = <T extends ElementType = 'div'>({
  as,
  children,
  className,
  inline,
  fullHeight,
  fullWidth,
  ...rest
}: CenterProps<T>) => {
  const Tag = (as ?? 'div') as ElementType;

  return (
    <Tag
      className={clsx(
        root({
          inline,
          fullHeight,
          fullWidth,
        }),
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};
