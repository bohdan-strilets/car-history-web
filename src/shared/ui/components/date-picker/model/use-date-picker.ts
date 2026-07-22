import { useState } from 'react';

import { getDecadeStart, getDecadeYears } from '@shared/lib';

import { buildCalendarDays, normalizeValue } from './date-picker.utils';

import type { DatePickerProps, DatePickerView } from './date-picker.types';

export const useDatePicker = ({
  value: rawValue,
  onChange,
  minDate,
  maxDate,
  defaultView = 'day',
}: DatePickerProps) => {
  const value = normalizeValue(rawValue);
  const today = new Date();
  const currentMonth = value?.getMonth() ?? today.getMonth();
  const currentYear = value?.getFullYear() ?? today.getFullYear();

  const [open, setOpen] = useState(false);
  const [view, setView] = useState<DatePickerView>(defaultView);
  const [viewMonth, setViewMonth] = useState(currentMonth);
  const [viewYear, setViewYear] = useState(currentYear);
  const [decadeStart, setDecadeStart] = useState(getDecadeStart(currentYear));

  const days = buildCalendarDays(viewYear, viewMonth, value, minDate, maxDate);
  const decadeYears = getDecadeYears(decadeStart);

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const prevDecade = () => setDecadeStart((d) => d - 10);
  const nextDecade = () => setDecadeStart((d) => d + 10);

  const selectDay = (day: number, month: number, year: number) => {
    onChange(new Date(year, month, day));
    setOpen(false);
    setView('day');
  };

  const selectMonth = (month: number) => {
    setViewMonth(month);
    setView('day');
  };

  const selectYear = (year: number) => {
    setViewYear(year);
    setDecadeStart(getDecadeStart(year));
    setView('month');
  };

  const goToMonthView = () => setView('month');
  const goToYearView = () => setView('year');

  const handleOpenChange = (val: boolean) => {
    setOpen(val);
    if (!val) {
      setView(defaultView);
      setViewMonth(value?.getMonth() ?? today.getMonth());
      setViewYear(value?.getFullYear() ?? today.getFullYear());
      setDecadeStart(getDecadeStart(value?.getFullYear() ?? today.getFullYear()));
    }
  };

  return {
    open,
    setOpen: handleOpenChange,
    view,
    viewMonth,
    viewYear,
    decadeStart,
    decadeYears,
    days,
    today,
    value,
    prevMonth,
    nextMonth,
    prevDecade,
    nextDecade,
    selectDay,
    selectMonth,
    selectYear,
    goToMonthView,
    goToYearView,
  };
};
