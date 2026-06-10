import type { IconName } from '@shared/icons';
import type { PaletteColors } from '@shared/styles/model';

export interface EntityOption<T = string> {
  id: string;
  label: string;
  value: T;
  icon?: IconName;
  color?: PaletteColors;
  description?: string;
  disabled?: boolean;
}
