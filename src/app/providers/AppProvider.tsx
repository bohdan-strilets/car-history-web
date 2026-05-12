import { AppRouter } from '@app/router';

import { I18nProvider } from './I18nProvider';
import { QueryProvider } from './QueryProvider';
import { ThemeProvider } from './ThemeProvider';

export const AppProvider = () => {
  return (
    <I18nProvider>
      <ThemeProvider>
        <QueryProvider>
          <AppRouter />
        </QueryProvider>
      </ThemeProvider>
    </I18nProvider>
  );
};
