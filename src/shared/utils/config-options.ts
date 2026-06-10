import type { EntityOption } from '@shared/types';

import type { ParseKeys, TFunction } from 'i18next';

// Translate config options

export const translateConfigOption = <T extends string>(
  t: TFunction,
  config: EntityOption<T>,
): EntityOption<T> => {
  return {
    ...config,
    label: t(config.label as ParseKeys),
    description: config.description ? t(config.description as ParseKeys) : undefined,
  };
};

// Translate config options array

export const translateConfigOptions = <T extends string>(
  t: TFunction,
  config: EntityOption<T>[],
): EntityOption<T>[] => {
  return config.map((option) => translateConfigOption(t, option));
};

// Get config option by value and translate it

export const getConfigOption = <T extends string>(
  t: TFunction,
  config: EntityOption<T>[],
  value: T,
): EntityOption<T> | undefined => {
  const option = config.find((option) => option.value === value);

  if (!option) return undefined;

  return translateConfigOption(t, option);
};
