import type { EntityOption } from '@shared/types';

import { REMINDER_TYPES, type ReminderType } from './reminder.constants';

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
