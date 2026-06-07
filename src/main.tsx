import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { AppProvider } from '@app/providers';

import '@shared/styles/global/global.css';
import '@shared/styles/global/reset.css';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

createRoot(root).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
);
