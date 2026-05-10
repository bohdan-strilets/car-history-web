import type { vars } from '../contract';

// Themes
export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

// Store
export interface ThemeStore {
  theme: Theme;
  resolvedTheme: ResolvedTheme;

  setTheme: (theme: Theme) => void;
  setResolvedTheme: (theme: ResolvedTheme) => void;
}

// Colors
export type PaletteColors = keyof typeof vars.color.palette;
export type SemanticColors = keyof typeof vars.color.semantic;
