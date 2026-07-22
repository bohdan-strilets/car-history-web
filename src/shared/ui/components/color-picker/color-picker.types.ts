import type { ParseKeys } from 'i18next';

export interface ColorPickerOption {
  id: string;
  value: string;
  label: ParseKeys;
  hex: string;
}

export interface ColorPickerProps {
  options: ColorPickerOption[];
  value?: string | number;
  onChange: (value: string | number) => void;
}
