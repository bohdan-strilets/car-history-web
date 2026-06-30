import type { MaintenanceInterval } from '@entities/maintenance';

import type { CreateMaintenanceIntervalValues } from './maintenance.schema';

export const createMaintenanceIntervalDefaultValues = (
  currentMileage?: number,
): CreateMaintenanceIntervalValues => ({
  type: undefined as never,
  title: '',
  intervalKm: undefined,
  intervalMonths: undefined,
  lastServiceMileage: currentMileage ?? undefined,
  lastServiceDate: new Date().toISOString().split('T')[0],
});

export const updateMaintenanceIntervalDefaultValues = (
  interval: MaintenanceInterval,
): CreateMaintenanceIntervalValues => ({
  type: interval.type,
  title: interval.title,
  intervalKm: interval.intervalKm ?? undefined,
  intervalMonths: interval.intervalMonths ?? undefined,
  lastServiceMileage: interval.lastServiceMileage ?? undefined,
  lastServiceDate: interval.lastServiceDate ?? undefined,
});
