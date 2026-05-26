import type { SegmentControlOption } from '@shared/ui';
import type { ParseKeys, TFunction } from 'i18next';

export const translateSegmentControlOptions = <T extends string>(
  t: TFunction,
  options: SegmentControlOption<T>[],
): SegmentControlOption<T>[] => {
  return options.map((option) => ({
    ...option,
    label: option.label ? t(option.label as ParseKeys) : option.label,
  }));
};
