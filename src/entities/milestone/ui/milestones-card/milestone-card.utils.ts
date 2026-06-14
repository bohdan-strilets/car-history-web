import type { MilestoneCategory } from '@entities/milestone';

import type { TFunction } from 'i18next';

// ─── Helpers ──────────────────────────────────────────────────────────────────

const formatDays = (days: number, t: TFunction): string => {
  if (days >= 365) {
    const years = Math.floor(days / 365);
    return `${years} ${t('units.years', { count: years })}`;
  }

  if (days >= 30) {
    const months = Math.floor(days / 30);
    return `${months} ${t('units.months', { count: months })}`;
  }

  return `${days} ${t('units.days', { count: days })}`;
};

const formatNumber = (value: number): string => value.toLocaleString('pl-PL');

// ─── Main ─────────────────────────────────────────────────────────────────────

export const formatMilestoneValue = (
  value: number,
  category: MilestoneCategory,
  t: TFunction,
): string => {
  switch (category) {
    case 'MILEAGE':
      return `${formatNumber(value)} ${t('units.km')}`;

    case 'TIME':
      return formatDays(value, t);

    case 'EXPENSES':
      return `${formatNumber(value)} ${t('enums.currencyShort.PLN')}`;

    case 'FUEL':
      return `${formatNumber(value)} ${t('units.liters')}`;

    case 'ACTIVITY':
      return t('milestone.activityCount', { count: Math.floor(value) });

    case 'ACHIEVEMENT':
      return t('milestone.achieved');
  }
};
