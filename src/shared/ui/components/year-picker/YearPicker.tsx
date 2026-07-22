import { APP_CONSTANTS } from '@shared/config';
import { Button, Divider, Grid, Stack } from '@shared/ui';

import { useYearPicker } from './use-year-picker';

import type { YearPickerProps } from './year-picker.types';

export const YearPicker = ({
  value,
  onChange,
  min,
  max = APP_CONSTANTS.CURRENT_YEAR,
}: YearPickerProps) => {
  const { activeDec, decades, getYearState, setActiveDec, years } = useYearPicker({
    value,
    min,
    max,
  });

  return (
    <Stack direction="column" gap="md">
      <Grid columns={{ mobile: '2', tablet: '4' }} gap="xs">
        {decades.map((decade) => {
          const isActive = decade === activeDec;

          return (
            <Button
              key={decade}
              type="button"
              variant="soft"
              color={isActive ? 'accent' : 'gray'}
              size="sm"
              onClick={() => setActiveDec(decade)}
            >
              {decade}–{Math.min(decade + 9, max)}
            </Button>
          );
        })}
      </Grid>

      <Divider />

      <Grid columns={{ mobile: '2', tablet: '4' }} gap="xs">
        {years.map((year) => {
          const { isSelected, isCurrent, isDim } = getYearState(year);
          const isDimmed = isDim && !isSelected;

          const handleClick = () => {
            if (!isDim) {
              onChange(year);
            }
          };

          return (
            <Button
              key={year}
              type="button"
              variant={isSelected ? 'soft' : isCurrent ? 'outline' : 'ghost'}
              color={isSelected ? 'accent' : 'gray'}
              size="sm"
              onClick={handleClick}
              data-selected={isSelected || undefined}
              data-dim={isDimmed || undefined}
              disabled={isDim}
            >
              {year}
            </Button>
          );
        })}
      </Grid>
    </Stack>
  );
};
