import type { TFunction } from 'i18next';

export const getMonthNames = (t: TFunction): string[] => {
  return [
    t('common.calendar.months.january'),
    t('common.calendar.months.february'),
    t('common.calendar.months.march'),
    t('common.calendar.months.april'),
    t('common.calendar.months.may'),
    t('common.calendar.months.june'),
    t('common.calendar.months.july'),
    t('common.calendar.months.august'),
    t('common.calendar.months.september'),
    t('common.calendar.months.october'),
    t('common.calendar.months.november'),
    t('common.calendar.months.december'),
  ];
};

export const getMonthNamesShort = (t: TFunction): string[] => {
  return [
    t('common.calendar.monthsShort.january'),
    t('common.calendar.monthsShort.february'),
    t('common.calendar.monthsShort.march'),
    t('common.calendar.monthsShort.april'),
    t('common.calendar.monthsShort.may'),
    t('common.calendar.monthsShort.june'),
    t('common.calendar.monthsShort.july'),
    t('common.calendar.monthsShort.august'),
    t('common.calendar.monthsShort.september'),
    t('common.calendar.monthsShort.october'),
    t('common.calendar.monthsShort.november'),
    t('common.calendar.monthsShort.december'),
  ];
};

export const getWeekdayNames = (t: TFunction): string[] => {
  return [
    t('common.calendar.weekdays.mon'),
    t('common.calendar.weekdays.tue'),
    t('common.calendar.weekdays.wed'),
    t('common.calendar.weekdays.thu'),
    t('common.calendar.weekdays.fri'),
    t('common.calendar.weekdays.sat'),
    t('common.calendar.weekdays.sun'),
  ];
};
