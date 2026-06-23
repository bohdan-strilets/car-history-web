import type { Reminder } from '@entities/reminder';

export interface ReminderCardProps {
  reminder: Reminder;
  onClick?: () => void;
}

export type ReminderUrgency = 'overdue' | 'critical' | 'warning' | 'ok' | 'inactive';
