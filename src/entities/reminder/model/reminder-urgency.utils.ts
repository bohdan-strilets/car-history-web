import type { ReminderStatus } from '@entities/reminder';
import type { IconName } from '@shared/icons';
import type { PaletteColors } from '@shared/styles/model';

import type { ReminderUrgency } from './reminder.types';

// Helper functions to determine urgency and days left for a reminder

export const getReminderUrgency = (
  dueDate: string | null,
  status: ReminderStatus,
): ReminderUrgency => {
  if (status === 'DISMISSED' || status === 'COMPLETED') return 'inactive';
  if (!dueDate) return 'ok';

  const now = new Date();
  const due = new Date(dueDate);
  const daysLeft = Math.ceil((due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  if (daysLeft < 0) return 'overdue';
  if (daysLeft <= 7) return 'critical';
  if (daysLeft <= 30) return 'warning';
  return 'ok';
};

export const getDaysLeftLabel = (dueDate: string | null): string | null => {
  if (!dueDate) return null;
  const now = new Date();
  const due = new Date(dueDate);
  const daysLeft = Math.ceil((due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return daysLeft.toString();
};

export const getDaysLeftDisplay = (
  dueDate: string | null,
  labels: { overdue: (count: number) => string; today: string; days: (count: number) => string },
): string | null => {
  if (!dueDate) return null;

  const now = new Date();
  const due = new Date(dueDate);
  const daysLeft = Math.ceil((due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  if (daysLeft < 0) return labels.overdue(Math.abs(daysLeft));
  if (daysLeft === 0) return labels.today;
  return labels.days(daysLeft);
};

// Colors and icons for urgency and status

export const URGENCY_COLOR: Record<string, PaletteColors> = {
  overdue: 'rose',
  critical: 'rose',
  warning: 'orange',
  ok: 'green',
  inactive: 'gray',
} as const;

export const STATUS_COLOR: Record<string, PaletteColors> = {
  ACTIVE: 'blue',
  COMPLETED: 'green',
  DISMISSED: 'gray',
} as const;

export const STATUS_ICON: Record<string, IconName> = {
  ACTIVE: 'circle',
  COMPLETED: 'checkCircle',
  DISMISSED: 'xCircle',
} as const;
