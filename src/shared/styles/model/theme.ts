import { useThemeStore } from './theme.store';

export const useTheme = () => {
  const theme = useThemeStore((state) => state.theme);
  const resolvedTheme = useThemeStore((state) => state.resolvedTheme);

  const isDark = resolvedTheme === 'dark';
  const isLight = resolvedTheme === 'light';
  const isSystem = theme === 'system';

  const setTheme = useThemeStore((state) => state.setTheme);
  const setResolvedTheme = useThemeStore((state) => state.setResolvedTheme);

  return {
    theme,
    resolvedTheme,
    isDark,
    isLight,
    isSystem,
    setTheme,
    setResolvedTheme,
  };
};
