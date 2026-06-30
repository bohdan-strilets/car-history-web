import type { MaintenanceTitleContext } from './types';
import type { TFunction } from 'i18next';

export const generateMaintenanceTitle = (
  t: TFunction,
  ctx: Partial<MaintenanceTitleContext>,
): string => {
  if (!ctx.type) return '';

  const typeKey = t(`enums.maintenanceType.${ctx.type}`);
  const parts: string[] = [typeKey];

  if (ctx.intervalKm != null && !isNaN(ctx.intervalKm)) {
    parts.push(
      `· ${t('common.labels.everyPlural')} ${ctx.intervalKm.toLocaleString()} ${t('units.km', { count: ctx.intervalKm })}`,
    );
  }

  if (ctx.intervalMonths != null && !isNaN(ctx.intervalMonths)) {
    parts.push(
      `· ${t('common.labels.everyPlural')} ${ctx.intervalMonths} ${t('units.months', { count: ctx.intervalMonths })}`,
    );
  }

  return parts.join(' ');
};
