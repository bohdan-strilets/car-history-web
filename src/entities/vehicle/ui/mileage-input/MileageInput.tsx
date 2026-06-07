import { useRef } from 'react';

import { Hint, IconBox, Stack, Text } from '@shared/ui';

import { card, nativeInput, valueText } from './mileage-input.css';

import type { MileageInputProps } from './mileage-input.types';

export const MileageInput = ({ value, onChange, hint }: MileageInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCardClick = () => {
    inputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    onChange(raw ? Number(raw) : undefined);
  };

  const numericValue = value !== undefined ? Number(value) : undefined;

  return (
    <Stack gap="lg">
      <div className={card} onClick={handleCardClick}>
        <input
          ref={inputRef}
          type="number"
          min={0}
          value={numericValue ?? ''}
          onChange={handleChange}
          className={nativeInput}
        />

        <IconBox name="gauge" size="xl" soft="accent" radius="md" />

        <Text className={valueText}>{numericValue?.toLocaleString() ?? '0'}</Text>

        <Text size="md" weight="medium" color="tertiary">
          km
        </Text>
      </div>

      {hint && <Hint message={hint} variant="info" />}
    </Stack>
  );
};
