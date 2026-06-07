import type { InputSize, InputState } from '../input';
import type { ResponsiveValue } from '@shared/types';

export interface NumberInputProps {
  value: number | undefined;
  onChange: (value: number | undefined) => void;
  unit?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  disabled?: boolean;
  size?: ResponsiveValue<InputSize>;
  state?: InputState;
}
