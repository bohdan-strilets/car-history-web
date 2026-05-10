import { darkTheme, lightTheme, useTheme } from '@shared/styles';
import { useEffect, type PropsWithChildren } from 'react';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { theme, setResolvedTheme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'system') {
      const query = '(prefers-color-scheme: dark)';
      const media = window.matchMedia(query);

      const apply = (dark: boolean) => {
        setResolvedTheme(dark ? 'dark' : 'light');
        root.className = dark ? darkTheme : lightTheme;
      };

      apply(media.matches);
      media.addEventListener('change', (e) => apply(e.matches));
      return () => media.removeEventListener('change', (e) => apply(e.matches));
    }

    setResolvedTheme(theme);
    root.className = theme === 'dark' ? darkTheme : lightTheme;
  }, [theme, setResolvedTheme]);

  return <>{children}</>;
};
