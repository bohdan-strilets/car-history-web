import { useTranslation } from 'react-i18next';

import { Button, Divider, Grid, Text } from '@shared/ui';

import { CalendarHeader } from './CalendarHeader';

import type { YearViewProps } from '../model';

export const YearView = ({
  decadeStart,
  decadeYears,
  today,
  value,
  selectYear,
  nextDecade,
  prevDecade,
}: YearViewProps) => {
  const { t } = useTranslation();

  return (
    <>
      <CalendarHeader
        onNext={nextDecade}
        onPrev={prevDecade}
        prevAriaLabel={t('ui.datePicker.prevDecade')}
        nextAriaLabel={t('ui.datePicker.nextDecade')}
      >
        <Text size="md" weight="medium" color="secondary">
          {decadeStart} – {decadeStart + 9}
        </Text>
      </CalendarHeader>

      <Divider />

      <Grid columns="3" gap="xs">
        {decadeYears.map((y) => {
          const isSelected = y === value?.getFullYear();
          const isCurrent = y === today.getFullYear();

          return (
            <Button
              key={y}
              type="button"
              variant={isSelected ? 'solid' : 'ghost'}
              color={isSelected ? 'accent' : 'gray'}
              onClick={() => selectYear(y)}
              aria-pressed={isSelected}
            >
              <Text weight={isCurrent ? 'bold' : 'regular'} color="inherit">
                {y}
              </Text>
            </Button>
          );
        })}
      </Grid>
    </>
  );
};
