import type { Language } from '@entities/user';
import { storage, STORAGE_KEYS } from '@shared/lib/storage';

import i18n from './i18n.config';

export const useLanguage = () => {
  const setLanguage = (lang: Language) => {
    const lower = lang.toLowerCase();
    storage.set(STORAGE_KEYS.LANGUAGE_STORAGE_KEY, lower);
    i18n.changeLanguage(lower);
  };

  const currentLanguage = i18n.language.toUpperCase() as Language;

  return { setLanguage, currentLanguage };
};
