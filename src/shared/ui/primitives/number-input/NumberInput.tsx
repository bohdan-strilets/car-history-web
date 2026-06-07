import { Input, Text } from '@shared/ui';

import type { NumberInputProps } from './number-input.types';

export const NumberInput = ({
  value,
  onChange,
  unit,
  min,
  max,
  placeholder,
  disabled,
  size,
  state,
}: NumberInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    if (raw === '') {
      onChange(undefined);
      return;
    }

    const num = Number(raw);
    if (!isNaN(num)) onChange(num);
  };

  return (
    <Input
      type="number"
      value={value ?? ''}
      onChange={handleChange}
      min={min}
      max={max}
      placeholder={placeholder}
      disabled={disabled}
      size={size}
      state={state}
      rightElement={
        unit ? (
          <Text size="sm" color="tertiary">
            {unit}
          </Text>
        ) : undefined
      }
    />
  );
};
