import { useTranslation } from 'react-i18next';

import { Button, Divider, Grid, Text } from '@shared/ui';

import { getMonthNamesShort, type MonthViewProps } from '../model';

import { CalendarHeader } from './CalendarHeader';

export const MonthView = ({
  viewYear,
  today,
  value,
  selectMonth,
  nextDecade,
  prevDecade,
  goToYearView,
}: MonthViewProps) => {
  const { t } = useTranslation();
  const monthNamesShort = getMonthNamesShort(t);

  return (
    <>
      <CalendarHeader
        onNext={nextDecade}
        onPrev={prevDecade}
        prevAriaLabel={t('ui.datePicker.prevYear')}
        nextAriaLabel={t('ui.datePicker.nextYear')}
      >
        <Button type="button" onClick={goToYearView} variant="outline" color="gray">
          {viewYear}
        </Button>
      </CalendarHeader>

      <Divider />

      <Grid columns="3" gap="xs">
        {monthNamesShort.map((name, i) => {
          const isSelected = i === value?.getMonth() && viewYear === value?.getFullYear();
          const isCurrent = i === today.getMonth() && viewYear === today.getFullYear();
          const ariaLabel = `${name} ${viewYear}`;

          return (
            <Button
              key={name}
              type="button"
              variant={isSelected ? 'solid' : 'ghost'}
              color={isSelected ? 'accent' : 'gray'}
              onClick={() => selectMonth(i)}
              aria-label={ariaLabel}
              aria-pressed={isSelected}
            >
              <Text weight={isCurrent ? 'bold' : 'regular'} color="inherit">
                {name}
              </Text>
            </Button>
          );
        })}
      </Grid>
    </>
  );
};
