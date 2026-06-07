import { root } from './aspect-ratio.css';

import type { AspectRatioProps } from './aspect-ratio.types';

export const AspectRatio = ({ ratio = '16/9', children }: AspectRatioProps) => {
  return <div className={root({ ratio })}>{children}</div>;
};
