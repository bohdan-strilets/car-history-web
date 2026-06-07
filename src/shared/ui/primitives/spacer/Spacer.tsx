import { clsx } from 'clsx';

import { root } from './spacer.css';

import type { SpacerProps } from './spacer.types';

export const Spacer = ({ size, className }: SpacerProps) => (
  <div aria-hidden="true" className={clsx(root({ size }), className)} />
);
