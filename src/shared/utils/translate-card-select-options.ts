import type { CardSelectOption } from '@shared/ui';
import type { ParseKeys, TFunction } from 'i18next';

export const translateCardSelectOptions = (
  t: TFunction,
  config: CardSelectOption[],
): CardSelectOption[] => {
  return config.map((option) => ({
    ...option,
    label: t(option.label as ParseKeys),
    description: option.description ? t(option.description as ParseKeys) : undefined,
  }));
};
