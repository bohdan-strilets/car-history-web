import type { Reminder } from '@entities/reminder';

export interface ReminderCardProps {
  reminder: Reminder;
  onClick?: () => void;
}
