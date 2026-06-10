import type { CalendarDay } from './date-picker.types';

export const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOffset = (year: number, month: number): number => {
  const offset = 0;
  const sunday = 6;
  const day = new Date(year, month, 1).getDay();

  return day === offset ? sunday : day - 1;
};

export const buildCalendarDays = (
  viewYear: number,
  viewMonth: number,
  selectedDate: Date | null,
  minDate?: Date,
  maxDate?: Date,
): CalendarDay[] => {
  const today = new Date();
  const todayNorm = normalizeDate(today);

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const offset = getFirstDayOffset(viewYear, viewMonth);
  const daysInPrev = getDaysInMonth(viewYear, viewMonth - 1);

  const days: CalendarDay[] = [];

  for (let i = offset - 1; i >= 0; i--) {
    const d = daysInPrev - i;
    const [pm, py] = viewMonth === 0 ? [11, viewYear - 1] : [viewMonth - 1, viewYear];
    const date = new Date(py, pm, d);

    days.push({
      day: d,
      month: pm,
      year: py,
      isCurrentMonth: false,
      isToday: normalizeDate(date) === todayNorm,
      isSelected: selectedDate ? normalizeDate(date) === normalizeDate(selectedDate) : false,
      isDisabled: isDateDisabled(date, minDate, maxDate),
    });
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(viewYear, viewMonth, d);
    days.push({
      day: d,
      month: viewMonth,
      year: viewYear,
      isCurrentMonth: true,
      isToday: normalizeDate(date) === todayNorm,
      isSelected: selectedDate ? normalizeDate(date) === normalizeDate(selectedDate) : false,
      isDisabled: isDateDisabled(date, minDate, maxDate),
    });
  }

  const totalCells = offset + daysInMonth;
  const remaining = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);

  for (let d = 1; d <= remaining; d++) {
    const [nm, ny] = viewMonth === 11 ? [0, viewYear + 1] : [viewMonth + 1, viewYear];
    const date = new Date(ny, nm, d);

    days.push({
      day: d,
      month: nm,
      year: ny,
      isCurrentMonth: false,
      isToday: normalizeDate(date) === todayNorm,
      isSelected: selectedDate ? normalizeDate(date) === normalizeDate(selectedDate) : false,
      isDisabled: isDateDisabled(date, minDate, maxDate),
    });
  }

  return days;
};

export const getDecadeStart = (year: number): number => {
  return Math.floor(year / 10) * 10;
};

export const buildDecadeYears = (decadeStart: number): number[] => {
  return Array.from({ length: 10 }, (_, i) => decadeStart + i);
};

export const normalizeDate = (date: Date): string => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};

export const isDateDisabled = (date: Date, minDate?: Date, maxDate?: Date): boolean => {
  if (minDate && date < minDate) return true;
  if (maxDate && date > maxDate) return true;
  return false;
};

export const normalizeValue = (value?: Date | string | null): Date | null => {
  if (!value) return null;
  if (value instanceof Date) return isNaN(value.getTime()) ? null : value;

  const parsed = new Date(value);
  return isNaN(parsed.getTime()) ? null : parsed;
};
