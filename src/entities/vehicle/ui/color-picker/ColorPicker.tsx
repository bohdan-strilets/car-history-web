import { getContrastColor } from '@shared/lib/css';
import { Grid, Text } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { item } from './color-picker.css';
import type { ColorPickerProps } from './color-picker.types';

export const ColorPicker = ({ options, value, onChange }: ColorPickerProps) => {
  const { t } = useTranslation();

  return (
    <Grid columns={{ mobile: '2', tablet: '4' }} gap="sm">
      {options.map((option) => {
        const isSelected = option.value === value;
        const isLight = getContrastColor(option.hex);

        return (
          <button
            key={option.id}
            type="button"
            className={item}
            onClick={() => onChange(option.value)}
            aria-pressed={isSelected}
            aria-label={t(option.label)}
            style={{
              color: isLight === 'dark' ? '#000' : '#fff',
              backgroundColor: option.hex,
              outline: isSelected ? `2px solid ${option.hex}` : 'none',
              outlineOffset: '2px',
            }}
          >
            <Text size="sm" weight="medium" color="inherit">
              {t(option.label)}
            </Text>
          </button>
        );
      })}
    </Grid>
  );
};
