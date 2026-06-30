import type { EntityOption } from '@shared/types';

import {
  REMINDER_STATUS,
  REMINDER_TYPES,
  REMINDER_URGENCY,
  type ReminderStatus,
  type ReminderType,
  type ReminderUrgency,
} from './reminder.constants';

export const REMINDER_TYPE_CONFIG: EntityOption<ReminderType>[] = [
  {
    id: '1',
    label: `enums.reminderType.${REMINDER_TYPES.INSURANCE}`,
    value: REMINDER_TYPES.INSURANCE,
    icon: 'shield',
    color: 'blue',
  },
  {
    id: '2',
    label: `enums.reminderType.${REMINDER_TYPES.TECHNICAL_INSPECTION}`,
    value: REMINDER_TYPES.TECHNICAL_INSPECTION,
    icon: 'clipboardCheck',
    color: 'indigo',
  },
  {
    id: '3',
    label: `enums.reminderType.${REMINDER_TYPES.OIL_CHANGE}`,
    value: REMINDER_TYPES.OIL_CHANGE,
    icon: 'droplets',
    color: 'amber',
  },
  {
    id: '4',
    label: `enums.reminderType.${REMINDER_TYPES.FILTER_CHANGE}`,
    value: REMINDER_TYPES.FILTER_CHANGE,
    icon: 'wind',
    color: 'cyan',
  },
  {
    id: '5',
    label: `enums.reminderType.${REMINDER_TYPES.TIRE_CHANGE}`,
    value: REMINDER_TYPES.TIRE_CHANGE,
    icon: 'circle',
    color: 'green',
  },
  {
    id: '6',
    label: `enums.reminderType.${REMINDER_TYPES.CUSTOM}`,
    value: REMINDER_TYPES.CUSTOM,
    icon: 'bell',
    color: 'gray',
  },
];

export const REMINDER_STATUS_CONFIG: EntityOption<ReminderStatus>[] = [
  {
    id: '1',
    label: `enums.reminderStatus.${REMINDER_STATUS.ACTIVE}`,
    value: REMINDER_STATUS.ACTIVE,
    icon: 'circle',
    color: 'blue',
  },
  {
    id: '2',
    label: `enums.reminderStatus.${REMINDER_STATUS.COMPLETED}`,
    value: REMINDER_STATUS.COMPLETED,
    icon: 'checkCircle',
    color: 'green',
  },
  {
    id: '3',
    label: `enums.reminderStatus.${REMINDER_STATUS.DISMISSED}`,
    value: REMINDER_STATUS.DISMISSED,
    icon: 'xCircle',
    color: 'gray',
  },
];

export const REMINDER_URGENCY_CONFIG: EntityOption<ReminderUrgency>[] = [
  {
    id: '1',
    label: `enums.urgency.${REMINDER_URGENCY.OVERDUE}`,
    value: REMINDER_URGENCY.OVERDUE,
    color: 'rose',
  },
  {
    id: '2',
    label: `enums.urgency.${REMINDER_URGENCY.CRITICAL}`,
    value: REMINDER_URGENCY.CRITICAL,
    color: 'rose',
  },
  {
    id: '3',
    label: `enums.urgency.${REMINDER_URGENCY.WARNING}`,
    value: REMINDER_URGENCY.WARNING,
    color: 'orange',
  },
  {
    id: '4',
    label: `enums.urgency.${REMINDER_URGENCY.OK}`,
    value: REMINDER_URGENCY.OK,
    color: 'green',
  },
  {
    id: '5',
    label: `enums.urgency.${REMINDER_URGENCY.INACTIVE}`,
    value: REMINDER_URGENCY.INACTIVE,
    color: 'gray',
  },
];
