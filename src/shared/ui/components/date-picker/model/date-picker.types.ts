import type { IconName } from '@shared/icons';
import type { ResponsiveValue } from '@shared/types';
import type { InputSize, InputState } from '@shared/ui';

// Types

export type DatePickerView = 'day' | 'month' | 'year';

export interface CalendarDay {
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isDisabled: boolean;
}

// Props

export type DatePickerProps = {
  onChange: (date: Date | null) => void;
  value?: Date | string | null;
  minDate?: Date;
  maxDate?: Date;
  defaultView?: DatePickerView;
  placeholder?: string;
  disabled?: boolean;
  size?: ResponsiveValue<InputSize>;
  state?: InputState;
  leftIcon?: IconName;
  fullWidth?: boolean;
};

export type DatePickerTriggerProps = Pick<
  DatePickerProps,
  'value' | 'placeholder' | 'disabled' | 'size' | 'state'
>;

export type CalendarHeaderProps = {
  children?: React.ReactNode;
  onPrev: () => void;
  onNext: () => void;
  nextAriaLabel?: string;
  prevAriaLabel?: string;
};

export type DayViewProps = {
  prevMonth: () => void;
  nextMonth: () => void;
  goToMonthView: () => void;
  goToYearView: () => void;
  viewMonth: number;
  viewYear: number;
  days: CalendarDay[];
  selectDay: (day: number, month: number, year: number) => void;
};

export type MonthViewProps = {
  viewYear: number;
  today: Date;
  value: Date | null;
  selectMonth: (month: number) => void;
  nextDecade: () => void;
  prevDecade: () => void;
  goToYearView: () => void;
};

export type YearViewProps = {
  decadeStart: number;
  decadeYears: number[];
  today: Date;
  value: Date | null;
  selectYear: (year: number) => void;
  nextDecade: () => void;
  prevDecade: () => void;
};
