import type { Breakpoint } from '@shared/styles';
import type { ResponsiveStyleMap, ResponsiveValue } from '@shared/types';

export const resolveResponsive = <T extends string>(
  map: ResponsiveStyleMap,
  value: ResponsiveValue<T> | undefined,
): string[] => {
  if (!value || typeof value === 'string') return [];

  const classes: string[] = [];

  for (const [bp, token] of Object.entries(value) as [Breakpoint, T][]) {
    if (bp === 'mobile') continue;
    const cls = map[bp]?.[token];
    if (cls) classes.push(cls);
  }

  return classes;
};
