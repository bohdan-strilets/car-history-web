import { storage, STORAGE_KEYS } from '@shared/lib/storage';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { DEFAULT_LANGUAGE } from './i18n.constants';
import { resources } from './i18n.resources';

const savedLanguage = storage.get<string>(STORAGE_KEYS.LANGUAGE_STORAGE_KEY) ?? DEFAULT_LANGUAGE;

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
