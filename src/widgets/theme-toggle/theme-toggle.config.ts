import { THEME, type Theme } from '@entities/user';
import type { IconName } from '@shared/icons';
import type { SegmentControlOption } from '@shared/ui';

export const THEME_OPTIONS: SegmentControlOption<Theme>[] = [
  {
    value: THEME.LIGHT,
    icon: 'sun',
    label: `themes.${THEME.LIGHT}`,
  },
  {
    value: THEME.DARK,
    icon: 'moon',
    label: `themes.${THEME.DARK}`,
  },
  {
    value: THEME.SYSTEM,
    icon: 'monitor',
    label: `themes.${THEME.SYSTEM}`,
  },
];

export const THEME_CYCLE: Theme[] = Object.values(THEME);

export const THEME_ICON: Record<Theme, IconName> = {
  [THEME.LIGHT]: 'sun',
  [THEME.DARK]: 'moon',
  [THEME.SYSTEM]: 'monitor',
};
