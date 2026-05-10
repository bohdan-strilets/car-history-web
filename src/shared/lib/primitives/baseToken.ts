import type { ResponsiveValue } from '@shared/types';

export const baseToken = <T extends string>(
  value: ResponsiveValue<T> | undefined,
): T | undefined => {
  if (!value) return undefined;
  if (typeof value === 'string') return value;

  return value.mobile;
};
