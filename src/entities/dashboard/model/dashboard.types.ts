import type { Reminder } from '@entities/reminder';
import type { DocumentType } from '@entities/timeline';
import type { Vehicle } from '@entities/vehicle';

export interface DashboardVehicle extends Vehicle {
  nearestDocumentExpireDate: string | null;
  nearestDocumentType: DocumentType | null;
}

export interface DashboardExpensesSummary {
  currentMonth: number;
  currentYear: number;
}

export interface Dashboard {
  vehicles: DashboardVehicle[];
  expensesSummary: DashboardExpensesSummary;
  upcomingReminders: Reminder[];
}
