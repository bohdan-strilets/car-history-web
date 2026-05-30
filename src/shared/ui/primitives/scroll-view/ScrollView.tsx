import { clsx } from 'clsx';

import { root } from './scroll-view.css';
import type { ScrollViewProps } from './scroll-view.types';

export const ScrollView = ({
  children,
  direction = 'horizontal',
  className,
  ...rest
}: ScrollViewProps) => {
  return (
    <div className={clsx(root({ direction }), className)} {...rest}>
      {children}
    </div>
  );
};
