import type { IconWeight } from './icon.types';

export const weightMap: Record<IconWeight, IconWeight> = {
  thin: 'thin',
  light: 'light',
  regular: 'regular',
  bold: 'bold',
  fill: 'fill',
  duotone: 'duotone',
} as const;
