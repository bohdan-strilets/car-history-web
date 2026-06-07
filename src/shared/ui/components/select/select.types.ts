import type { IconName } from '@shared/icons';
import type { InputSize, InputState } from '@shared/ui';

export interface SelectOption {
  id: string;
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  size?: InputSize;
  state?: InputState;
  leftIcon?: IconName;
  fullWidth?: boolean;
}

export type SelectTriggerProps = Pick<
  SelectProps,
  'leftIcon' | 'placeholder' | 'size' | 'state' | 'disabled'
> & {
  selected?: SelectOption;
  open?: boolean;
};
