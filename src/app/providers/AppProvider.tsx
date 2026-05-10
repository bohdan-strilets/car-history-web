import { App } from '../../App';

import { I18nProvider } from './I18nProvider';
import { ThemeProvider } from './ThemeProvider';

export const AppProvider = () => {
  return (
    <I18nProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </I18nProvider>
  );
};
