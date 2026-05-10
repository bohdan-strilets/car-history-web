import { ThemeToggle } from '@widgets/theme-toggle';
import type { PropsWithChildren } from 'react';

import { ThemeProvider } from './ThemeProvider';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      {children}
      <>Hello my Arvino App</>
      <ThemeToggle />
    </ThemeProvider>
  );
};
