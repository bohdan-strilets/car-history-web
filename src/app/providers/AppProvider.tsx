import { LanguageToggle } from '@widgets/language-toggle';
import { ThemeToggle } from '@widgets/theme-toggle';
import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

import { I18nProvider } from './I18nProvider';
import { ThemeProvider } from './ThemeProvider';

export const AppProvider = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation();

  return (
    <I18nProvider>
      <ThemeProvider>
        {children}
        <p>{t('welcome')}</p>
        <ThemeToggle />
        <LanguageToggle />
      </ThemeProvider>
    </I18nProvider>
  );
};
