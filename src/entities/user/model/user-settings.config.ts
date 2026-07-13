import { LANGUAGE, THEME } from '@entities/user';
import type { CardSelectOption } from '@shared/ui';

export const LANGUAGE_CONFIG: CardSelectOption[] = [
  {
    id: '1',
    value: LANGUAGE.PL,
    label: `enums.language.${LANGUAGE.PL}`,
    description: 'PL',
    color: 'rose',
  },
  {
    id: '2',
    value: LANGUAGE.UK,
    label: `enums.language.${LANGUAGE.UK}`,
    description: 'UA',
    color: 'blue',
  },
  {
    id: '3',
    value: LANGUAGE.EN,
    label: `enums.language.${LANGUAGE.EN}`,
    description: 'EN',
    color: 'green',
  },
];

export const THEME_CONFIG: CardSelectOption[] = [
  {
    id: '1',
    value: THEME.LIGHT,
    label: `enums.theme.${THEME.LIGHT}`,
    icon: 'sun',
    color: 'orange',
  },
  {
    id: '2',
    value: THEME.DARK,
    label: `enums.theme.${THEME.DARK}`,
    icon: 'moon',
    color: 'purple',
  },
  {
    id: '3',
    value: THEME.SYSTEM,
    label: `enums.theme.${THEME.SYSTEM}`,
    icon: 'monitor',
    color: 'sky',
  },
];
