import { clsx } from 'clsx';

import { root } from './skeleton.css';

import type { SkeletonProps } from './skeleton.types';

export const Skeleton = ({ variant = 'rect', width, height, radius, className }: SkeletonProps) => {
  return (
    <span
      className={clsx(root({ variant }), className)}
      style={{ width, height, borderRadius: radius }}
      aria-hidden
    />
  );
};

Skeleton.displayName = 'Skeleton';
