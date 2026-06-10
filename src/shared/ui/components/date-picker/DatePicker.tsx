import { Dropdown } from '@shared/ui';

import { Panel } from '../panel';

import { useDatePicker, type DatePickerProps } from './model';
import { DatePickerTrigger, DayView, MonthView, YearView } from './ui';

export const DatePicker = (props: DatePickerProps) => {
  const {
    view,
    viewMonth,
    viewYear,
    decadeStart,
    decadeYears,
    days,
    today,
    value,
    open,
    setOpen,
    prevMonth,
    nextMonth,
    prevDecade,
    nextDecade,
    selectDay,
    selectMonth,
    selectYear,
    goToMonthView,
    goToYearView,
  } = useDatePicker(props);

  return (
    <Dropdown
      open={open}
      onOpenChange={setOpen}
      fullWidth={props.fullWidth ?? true}
      disabled={props.disabled}
      maxHeight="100%"
      trigger={
        <DatePickerTrigger
          value={value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          size={props.size}
          state={props.state}
        />
      }
    >
      <Panel variant="elevated">
        {view === 'day' && (
          <DayView
            prevMonth={prevMonth}
            nextMonth={nextMonth}
            goToMonthView={goToMonthView}
            goToYearView={goToYearView}
            viewMonth={viewMonth}
            viewYear={viewYear}
            days={days}
            selectDay={selectDay}
          />
        )}

        {view === 'month' && (
          <MonthView
            viewYear={viewYear}
            today={today}
            value={value}
            selectMonth={selectMonth}
            nextDecade={nextDecade}
            prevDecade={prevDecade}
            goToYearView={goToYearView}
          />
        )}

        {view === 'year' && (
          <YearView
            decadeStart={decadeStart}
            decadeYears={decadeYears}
            today={today}
            value={value}
            selectYear={selectYear}
            nextDecade={nextDecade}
            prevDecade={prevDecade}
          />
        )}
      </Panel>
    </Dropdown>
  );
};
