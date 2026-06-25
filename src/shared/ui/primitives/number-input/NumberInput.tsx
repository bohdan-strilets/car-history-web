import { useState } from 'react';

import { Input, Text } from '@shared/ui';

import { formatValue, parseRaw } from './number-input.utils';

import type { NumberInputProps } from './number-input.types';

export const NumberInput = ({
  value,
  onChange,
  format = 'decimal',
  unit,
  min,
  max,
  placeholder,
  disabled,
  size,
  state,
}: NumberInputProps) => {
  const [localValue, setLocalValue] = useState<string>(
    value != null ? formatValue(value, format) : '',
  );
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    if (value != null) {
      setLocalValue(format === 'mileage' ? String(value) : formatValue(value, format));
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (localValue !== '' && value != null) {
      setLocalValue(formatValue(value, format));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setLocalValue(raw);

    const parsed = parseRaw(raw, format);
    onChange(parsed);
  };

  const displayValue = isFocused
    ? localValue
    : value != null
      ? formatValue(value, format)
      : localValue;

  return (
    <Input
      type="text"
      inputMode={format === 'decimal' ? 'decimal' : 'numeric'}
      value={displayValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
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
