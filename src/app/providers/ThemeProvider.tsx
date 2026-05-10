import { darkTheme, lightTheme, useTheme } from '@shared/styles';
import { useEffect, type PropsWithChildren } from 'react';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { theme, setResolvedTheme } = useTheme();

  useEffect(() => {
    const applyTheme = (dark: boolean) => {
      setResolvedTheme(dark ? 'dark' : 'light');
      document.documentElement.className = dark ? darkTheme : lightTheme;
    };

    if (theme === 'system') {
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      applyTheme(media.matches);
      media.addEventListener('change', (e) => applyTheme(e.matches));
      return () => media.removeEventListener('change', (e) => applyTheme(e.matches));
    }

    applyTheme(theme === 'dark');
  }, [theme, setResolvedTheme]);

  return <>{children}</>;
};
