import { useTranslation } from 'react-i18next';

import { Button, Divider, Grid, Text } from '@shared/ui';

import { getMonthNames, type DayViewProps } from '../model';

import { CalendarHeader } from './CalendarHeader';
import { Weekdays } from './Weekdays';

export const DayView = ({
  prevMonth,
  nextMonth,
  goToMonthView,
  goToYearView,
  viewMonth,
  viewYear,
  days,
  selectDay,
}: DayViewProps) => {
  const { t } = useTranslation();
  const monthNames = getMonthNames(t);

  return (
    <>
      <CalendarHeader
        onNext={nextMonth}
        onPrev={prevMonth}
        prevAriaLabel={t('ui.datePicker.prevMonth')}
        nextAriaLabel={t('ui.datePicker.nextMonth')}
      >
        <Button type="button" onClick={goToMonthView} variant="outline" color="gray">
          {monthNames[viewMonth]}
        </Button>
        <Button type="button" onClick={goToYearView} variant="outline" color="gray">
          {viewYear}
        </Button>
      </CalendarHeader>

      <Divider />

      <Weekdays />

      <Grid columns="7" gap="xs">
        {days.map((d, i) => {
          const isSelected = d.isSelected;
          const isToday = d.isToday && !isSelected;
          const isOtherMonth = !d.isCurrentMonth;
          const isDisabled = d.isDisabled;

          const ariaLabel = `${d.day} ${monthNames[d.month]} ${d.year}`;

          const handleClick = () => {
            if (!isDisabled) return selectDay(d.day, d.month, d.year);
          };

          return (
            <Button
              key={i}
              type="button"
              variant={isSelected ? 'solid' : isOtherMonth ? 'ghost' : 'soft'}
              color={isSelected ? 'accent' : 'gray'}
              disabled={isDisabled}
              onClick={handleClick}
              aria-label={ariaLabel}
              aria-pressed={isSelected}
            >
              <Text weight={isToday ? 'bold' : 'regular'} color="inherit">
                {d.day}
              </Text>
            </Button>
          );
        })}
      </Grid>
    </>
  );
};
