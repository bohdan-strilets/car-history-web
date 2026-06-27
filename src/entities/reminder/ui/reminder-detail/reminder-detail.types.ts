import type { Reminder } from '@entities/reminder';

export interface ReminderDetailProps {
  reminder: Reminder;
  onComplete?: () => void;
  onDismiss?: () => void;
  onDelete?: () => void;
}
