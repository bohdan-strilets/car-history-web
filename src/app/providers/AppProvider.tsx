import { AppRouter } from '@app/router';

import { I18nProvider } from './I18nProvider';
import { ThemeProvider } from './ThemeProvider';

export const AppProvider = () => {
  return (
    <I18nProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </I18nProvider>
  );
};
