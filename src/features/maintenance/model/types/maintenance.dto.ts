import type { MaintenanceType } from '@entities/maintenance';

export interface CreateMaintenanceIntervalDto {
  type: MaintenanceType;
  title: string;
  intervalKm?: number;
  intervalMonths?: number;
  lastServiceMileage?: number;
  lastServiceDate?: string;
}

export interface UpdateMaintenanceIntervalDto {
  type?: MaintenanceType;
  title?: string;
  intervalKm?: number;
  intervalMonths?: number;
  lastServiceMileage?: number;
  lastServiceDate?: string;
}

export interface MarkMaintenanceDoneDto {
  mileage: number;
  date: string;
}
