import type { MaintenanceInterval } from '@entities/maintenance';

import type { EditMaintenanceIntervalValues } from './edit-maintenance.schema';
import type { CreateMaintenanceIntervalValues } from './maintenance.schema';
import type { MarkMaintenanceDoneValues } from './mark-done.schema';

const now = new Date().toISOString().split('T')[0];

export const createMaintenanceIntervalDefaultValues = (
  currentMileage?: number,
): CreateMaintenanceIntervalValues => ({
  type: undefined as never,
  title: '',
  intervalKm: undefined,
  intervalMonths: undefined,
  lastServiceMileage: currentMileage ?? undefined,
  lastServiceDate: now,
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

export const markMaintenanceDoneDefaultValues = (
  currentMileage: number,
): MarkMaintenanceDoneValues => ({
  mileage: currentMileage,
  date: now,
});

export const editMaintenanceIntervalDefaultValues = (
  interval: MaintenanceInterval,
): EditMaintenanceIntervalValues => ({
  title: interval.title,
  intervalKm: interval.intervalKm ?? undefined,
  intervalMonths: interval.intervalMonths ?? undefined,
  lastServiceMileage: interval.lastServiceMileage ?? undefined,
  lastServiceDate: interval.lastServiceDate ?? undefined,
});
