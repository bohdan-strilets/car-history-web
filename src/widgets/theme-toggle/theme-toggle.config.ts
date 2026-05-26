import { THEME, type Theme } from '@entities/user';
import type { IconName } from '@shared/icons';
import type { SegmentControlOption } from '@shared/ui';

export const THEME_OPTIONS: SegmentControlOption<Theme>[] = [
  {
    value: THEME.LIGHT,
    icon: 'sun',
    label: 'themes.light',
  },
  {
    value: THEME.DARK,
    icon: 'moon',
    label: 'themes.dark',
  },
  {
    value: THEME.SYSTEM,
    icon: 'monitor',
    label: 'themes.system',
  },
];

export const THEME_CYCLE: Theme[] = [THEME.LIGHT, THEME.DARK, THEME.SYSTEM];

export const THEME_ICON: Record<Theme, IconName> = {
  [THEME.LIGHT]: 'sun',
  [THEME.DARK]: 'moon',
  [THEME.SYSTEM]: 'monitor',
};
