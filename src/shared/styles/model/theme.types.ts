import type { vars } from '../contract';
import type { Theme } from '@entities/user';

// Themes
export type ResolvedTheme = 'LIGHT' | 'DARK';

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
