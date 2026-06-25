import { getNames, registerLocale } from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
import plLocale from 'i18n-iso-countries/langs/pl.json';
import ukLocale from 'i18n-iso-countries/langs/uk.json';

import { DEFAULT_LANGUAGE, i18n } from '@shared/i18n';
import type { ComboboxOption } from '@shared/ui';

registerLocale(enLocale);
registerLocale(plLocale);
registerLocale(ukLocale);

const PRIORITY_COUNTRIES = ['DE', 'JP', 'PL', 'FR', 'IT', 'US', 'KR', 'CZ', 'SE', 'GB'];

export const getCountryOptions = (): ComboboxOption[] => {
  const lang = i18n.language?.toUpperCase() ?? DEFAULT_LANGUAGE;
  const names = getNames(lang);

  const priorityOptions: ComboboxOption[] = PRIORITY_COUNTRIES.map((code) => ({
    id: `priority-${code}`,
    value: code,
    label: names[code] ?? code,
  }));

  const allOptions: ComboboxOption[] = Object.entries(names)
    .filter(([code]) => !PRIORITY_COUNTRIES.includes(code))
    .sort(([, a], [, b]) => a.localeCompare(b, lang))
    .map(([code, name]) => ({
      id: code,
      value: code,
      label: name,
    }));

  return [...priorityOptions, ...allOptions];
};
