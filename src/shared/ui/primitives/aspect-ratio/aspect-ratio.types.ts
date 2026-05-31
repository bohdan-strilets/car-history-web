import type { root } from './aspect-ratio.css';

export type AspectRatioVariants = NonNullable<Parameters<typeof root>[0]>;
export type AspectRatioRatio = NonNullable<AspectRatioVariants['ratio']>;

export interface AspectRatioProps {
  ratio?: AspectRatioRatio;
  children: React.ReactNode;
}
