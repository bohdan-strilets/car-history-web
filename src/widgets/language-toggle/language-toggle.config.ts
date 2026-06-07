import { LANGUAGE, type Language } from '@entities/user';

import type { SegmentControlOption } from '@shared/ui';

export const LANGUAGE_CYCLE: Language[] = Object.values(LANGUAGE);

export const LANGUAGE_OPTIONS: SegmentControlOption<Language>[] = [
  {
    value: LANGUAGE.PL,
    displayLabel: LANGUAGE.PL,
    label: `languages.${LANGUAGE.PL}`,
  },
  {
    value: LANGUAGE.UK,
    displayLabel: LANGUAGE.UK,
    label: `languages.${LANGUAGE.UK}`,
  },
  {
    value: LANGUAGE.EN,
    displayLabel: LANGUAGE.EN,
    label: `languages.${LANGUAGE.EN}`,
  },
];
