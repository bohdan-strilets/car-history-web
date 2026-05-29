import type { IconName } from '@shared/icons';
import type { PaletteColors } from '@shared/styles';

export interface InfoRowProps {
  label: string;
  description?: string;
  value?: string | null;
  icon?: IconName;
  iconColor?: PaletteColors;
  upperDivider?: boolean;
  bottomDivider?: boolean;
  onClick?: () => void;
}
