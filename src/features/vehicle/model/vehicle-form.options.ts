import { getNames, registerLocale } from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
import plLocale from 'i18n-iso-countries/langs/pl.json';
import ukLocale from 'i18n-iso-countries/langs/uk.json';

import { VEHICLE_GENERATIONS, VEHICLE_MODELS } from '@entities/vehicle';
import { DEFAULT_LANGUAGE, i18n } from '@shared/i18n';
import type { ComboboxOption } from '@shared/ui';

registerLocale(enLocale);
registerLocale(plLocale);
registerLocale(ukLocale);

// Vehicle
export const getBrandOptions = (): ComboboxOption[] =>
  Object.keys(VEHICLE_MODELS).map((brand) => ({
    id: brand,
    value: brand,
    label: brand,
  }));

export const getModelOptions = (brand: string): ComboboxOption[] =>
  VEHICLE_MODELS[brand]?.map((model) => ({
    id: model,
    value: model,
    label: model,
  })) || [];

export const getGenerationOptions = (brand: string, model: string): ComboboxOption[] =>
  VEHICLE_GENERATIONS[brand]?.[model]?.map((generation) => ({
    id: generation,
    value: generation,
    label: generation,
  })) || [];

// Country

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
