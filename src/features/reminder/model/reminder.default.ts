import { REMINDER_TYPES } from '@entities/reminder';

import type { CreateReminderValues } from './reminder.schema';

export const createReminderDefaultValues = (currentMileage?: number): CreateReminderValues => ({
  type: REMINDER_TYPES.CUSTOM,
  title: '',
  description: '',
  dueDate: new Date().toISOString().split('T')[0],
  dueMileage: currentMileage || undefined,
});
