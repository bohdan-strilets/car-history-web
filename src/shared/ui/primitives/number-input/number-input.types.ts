import type { ResponsiveValue } from '@shared/types';

import type { InputSize, InputState } from '../input';

export type NumberInputFormat = 'decimal' | 'integer' | 'mileage';

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
  format?: NumberInputFormat;
}
