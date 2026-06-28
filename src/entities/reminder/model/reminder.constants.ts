export const REMINDER_TYPES = {
  INSURANCE: 'INSURANCE',
  TECHNICAL_INSPECTION: 'TECHNICAL_INSPECTION',
  OIL_CHANGE: 'OIL_CHANGE',
  FILTER_CHANGE: 'FILTER_CHANGE',
  TIRE_CHANGE: 'TIRE_CHANGE',
  CUSTOM: 'CUSTOM',
} as const;

export type ReminderType = (typeof REMINDER_TYPES)[keyof typeof REMINDER_TYPES];

export const REMINDER_STATUS = {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  DISMISSED: 'DISMISSED',
} as const;

export type ReminderStatus = (typeof REMINDER_STATUS)[keyof typeof REMINDER_STATUS];

export const REMINDER_URGENCY = {
  OVERDUE: 'overdue',
  CRITICAL: 'critical',
  WARNING: 'warning',
  OK: 'ok',
  INACTIVE: 'inactive',
} as const;

export type ReminderUrgency = (typeof REMINDER_URGENCY)[keyof typeof REMINDER_URGENCY];
