import { AppRouter } from '@app/router';

import { I18nProvider } from './I18nProvider';
import { InitProvider } from './InitProvider';
import { ModalProvider } from './ModalProvider';
import { QueryProvider } from './QueryProvider';
import { ThemeProvider } from './ThemeProvider';
import { ToastProvider } from './ToastProvider';

export const AppProvider = () => {
  return (
    <I18nProvider>
      <ThemeProvider>
        <QueryProvider>
          <InitProvider>
            <ModalProvider>
              <ToastProvider />
              <AppRouter />
            </ModalProvider>
          </InitProvider>
        </QueryProvider>
      </ThemeProvider>
    </I18nProvider>
  );
};
