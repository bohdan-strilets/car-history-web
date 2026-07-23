import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Hint, IconBox, Panel, Stack, Text } from '@shared/ui';

import { input } from './mileage-input.css';

import type { MileageInputProps } from './mileage-input.types';

export const MileageInput = ({ value, onChange, hint }: MileageInputProps) => {
  const [focused, setFocused] = useState(false);
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    onChange(raw === '' ? undefined : Number(raw));
  };

  const displayValue =
    typeof value === 'number' && !Number.isNaN(value)
      ? focused
        ? String(value)
        : value.toLocaleString()
      : '';

  return (
    <Stack gap="lg">
      <Panel align="center" justify="center" p="4xl">
        <IconBox name="road" size="2xl" soft="accent" radius="md" weight="fill" />

        <input
          type="text"
          inputMode="numeric"
          value={displayValue}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={handleChange}
          placeholder="0"
          className={input}
        />

        <Text size="md" weight="medium" color="tertiary">
          {t('units.km')}
        </Text>
      </Panel>

      {hint && <Hint message={hint} variant="info" />}
    </Stack>
  );
};
