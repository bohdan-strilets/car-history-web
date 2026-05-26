import { THEME, type Theme } from '@entities/user';
import type { IconName } from '@shared/icons';
import type { SegmentControlOption } from '@shared/ui';

export const THEME_OPTIONS: SegmentControlOption<Theme>[] = [
  {
    value: THEME.LIGHT,
    icon: 'sun',
    label: 'Light',
  },
  {
    value: THEME.DARK,
    icon: 'moon',
    label: 'Dark',
  },
  {
    value: THEME.SYSTEM,
    icon: 'monitor',
    label: 'System',
  },
];

export const THEME_CYCLE: Theme[] = [THEME.LIGHT, THEME.DARK, THEME.SYSTEM];

export const THEME_ICON: Record<Theme, IconName> = {
  [THEME.LIGHT]: 'sun',
  [THEME.DARK]: 'moon',
  [THEME.SYSTEM]: 'monitor',
};
