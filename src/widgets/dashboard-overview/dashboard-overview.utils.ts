import type { DashboardVehicle } from '@entities/dashboard';
import {
  getDaysLeftDisplay,
  getReminderUrgency,
  REMINDER_STATUS,
  REMINDER_URGENCY_CONFIG,
} from '@entities/reminder';
import { DOCUMENT_TYPE_CONFIG } from '@entities/timeline';
import type { VehicleCardDocumentBadge } from '@entities/vehicle';
import { getConfigOption } from '@shared/utils';

import type { TFunction } from 'i18next';

export const getDocumentBadge = (
  t: TFunction,
  vehicle: DashboardVehicle,
): VehicleCardDocumentBadge | undefined => {
  if (!vehicle.nearestDocumentExpireDate || !vehicle.nearestDocumentType) return undefined;

  const typeConfig = getConfigOption(t, DOCUMENT_TYPE_CONFIG, vehicle.nearestDocumentType);
  const urgency = getReminderUrgency(vehicle.nearestDocumentExpireDate, REMINDER_STATUS.ACTIVE);
  const urgencyConfig = getConfigOption(t, REMINDER_URGENCY_CONFIG, urgency);

  const daysLeft = getDaysLeftDisplay(vehicle.nearestDocumentExpireDate, {
    overdue: (count) => t('reminder.status.overdue', { count }),
    today: t('reminder.status.today'),
    days: (count) => `${count} ${t('units.days', { count })}`,
  });

  return {
    label: `${typeConfig?.label ?? ''} · ${daysLeft ?? ''}`,
    color: urgencyConfig?.color ?? 'gray',
  };
};
