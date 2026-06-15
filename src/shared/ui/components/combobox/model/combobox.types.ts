import type { IconName } from '@shared/icons';
import type { ResponsiveValue } from '@shared/types';
import type { InputSize, InputState } from '@shared/ui';

// Options

export interface ComboboxOption {
  id: string;
  value: string;
  label: string;
  disabled?: boolean;
}

// Props

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  disabled?: boolean;
  emptyMessage?: string;
  size?: ResponsiveValue<InputSize>;
  state?: InputState;
  leftIcon?: IconName;
  fullWidth?: boolean;
  allowCustomValue?: boolean;
}

export type ComboboxTriggerProps = Pick<
  ComboboxProps,
  'disabled' | 'size' | 'state' | 'leftIcon' | 'placeholder'
> & {
  open: boolean;
  query: string;
  selected?: ComboboxOption;
  displayValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus: () => void;
};

export type EmptyMessageProps = Pick<ComboboxProps, 'emptyMessage'>;

// Params

export type ComboboxParams = Pick<
  ComboboxProps,
  'options' | 'value' | 'onChange' | 'allowCustomValue'
>;
