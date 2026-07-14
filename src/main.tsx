import { StrictMode } from 'react';

import * as Sentry from '@sentry/react';
import { createRoot } from 'react-dom/client';

import { AppProvider } from '@app/providers';
import { env } from '@config/env';

import '@shared/styles/global/global.css';
import '@shared/styles/global/reset.css';

if (env.VITE_SENTRY_DSN) {
  Sentry.init({
    dsn: env.VITE_SENTRY_DSN,
    environment: import.meta.env.MODE,
    tracesSampleRate: import.meta.env.PROD ? 0.1 : 1.0,
  });
}

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

createRoot(root).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
);
