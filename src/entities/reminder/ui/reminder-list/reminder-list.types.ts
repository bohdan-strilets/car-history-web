import type { Reminder } from '../../model';

export interface ReminderListProps {
  reminders: Reminder[];
  onReminderClick?: (reminder: Reminder) => void;
}
