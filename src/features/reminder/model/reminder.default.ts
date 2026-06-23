import { REMINDER_TYPES } from '@entities/reminder';

import type { CreateReminderValues } from './reminder.schema';

export const createReminderDefaultValues = (currentMileage?: number): CreateReminderValues => ({
  type: REMINDER_TYPES.CUSTOM,
  title: '',
  description: '',
  dueDate: undefined,
  dueMileage: currentMileage || undefined,
});
