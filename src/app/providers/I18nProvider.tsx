import { i18n } from '@shared/i18n';
import { Suspense, type PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';

export const I18nProvider = ({ children }: PropsWithChildren) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={null}>{children}</Suspense>
    </I18nextProvider>
  );
};
