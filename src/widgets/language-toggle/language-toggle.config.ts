import type { Language } from '@entities/user';
import type { SegmentControlOption } from '@shared/ui';

export const LANGUAGE_CYCLE: Language[] = ['PL', 'UK', 'EN'];

export const LANGUAGE_OPTIONS: SegmentControlOption<Language>[] = [
  {
    value: 'PL',
    displayLabel: 'PL',
    label: 'Polski',
  },
  {
    value: 'UK',
    displayLabel: 'UK',
    label: 'Українська',
  },
  {
    value: 'EN',
    displayLabel: 'EN',
    label: 'English',
  },
];
