import type { IconName } from '@shared/icons';
import type { PaletteColors } from '@shared/styles';

export interface CardSelectOption {
  id: string;
  value: string;
  label: string;
  description?: string;
  icon?: IconName;
  color?: PaletteColors;
  disabled?: boolean;
}

export interface CardSelectProps {
  options: CardSelectOption[];
  value: (string | number)[];
  onChange: (value: (string | number)[]) => void;
  maxSelect?: number;
}

export interface CardSelectItemProps {
  option: CardSelectOption;
  isSelected: boolean;
  isDisabled: boolean;
  onSelect: (value: string) => void;
}
