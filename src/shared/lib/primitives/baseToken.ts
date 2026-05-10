import type { ResponsiveValue } from '@shared/types';

export const baseToken = <T extends string | number>(
  value: ResponsiveValue<T> | undefined,
): T | undefined => {
  if (value === undefined || value === null) return undefined;
  if (typeof value === 'string' || typeof value === 'number') return value;

  return value.mobile;
};
