import type { EntityOption } from '@shared/types';

import {
  CURRENCY,
  DATE_FORMAT,
  DISTANCE_UNIT,
  FUEL_UNIT,
  WORKSPACE_ROLE,
  WORKSPACE_TYPE,
  type Currency,
  type DateFormat,
  type DistanceUnit,
  type FuelUnit,
  type WorkspaceMemberRole,
  type WorkspaceRole,
  type WorkspaceType,
} from './workspace.constants';

// Workspace

export const WORKSPACE_TYPE_CONFIG: EntityOption<WorkspaceType>[] = [
  {
    id: '1',
    label: `enums.workspaceType.${WORKSPACE_TYPE.PERSONAL}.label`,
    value: WORKSPACE_TYPE.PERSONAL,
    icon: 'user',
    color: 'orange',
    description: `enums.workspaceType.${WORKSPACE_TYPE.PERSONAL}.description`,
  },
  {
    id: '2',
    label: `enums.workspaceType.${WORKSPACE_TYPE.FAMILY}.label`,
    value: WORKSPACE_TYPE.FAMILY,
    icon: 'users',
    color: 'blue',
    description: `enums.workspaceType.${WORKSPACE_TYPE.FAMILY}.description`,
  },
  {
    id: '3',
    label: `enums.workspaceType.${WORKSPACE_TYPE.BUSINESS}.label`,
    value: WORKSPACE_TYPE.BUSINESS,
    icon: 'briefcase',
    color: 'violet',
    description: `enums.workspaceType.${WORKSPACE_TYPE.BUSINESS}.description`,
  },
];

export const WORKSPACE_ROLE_CONFIG: EntityOption<WorkspaceRole>[] = [
  {
    id: '1',
    label: `enums.role.${WORKSPACE_ROLE.OWNER}`,
    value: WORKSPACE_ROLE.OWNER,
    color: 'indigo',
  },
  {
    id: '2',
    label: `enums.role.${WORKSPACE_ROLE.ADMIN}`,
    value: WORKSPACE_ROLE.ADMIN,
    color: 'blue',
  },
  {
    id: '3',
    label: `enums.role.${WORKSPACE_ROLE.MEMBER}`,
    value: WORKSPACE_ROLE.MEMBER,
    color: 'rose',
  },
];

export const WORKSPACE_MEMBER_ROLE_CONFIG: EntityOption<WorkspaceMemberRole>[] = [
  {
    id: '1',
    label: `enums.role.${WORKSPACE_ROLE.ADMIN}`,
    value: WORKSPACE_ROLE.ADMIN,
    color: 'blue',
  },
  {
    id: '2',
    label: `enums.role.${WORKSPACE_ROLE.MEMBER}`,
    value: WORKSPACE_ROLE.MEMBER,
    color: 'rose',
  },
];

// Settings

export const CURRENCY_CONFIG: EntityOption<Currency>[] = [
  {
    id: '1',
    value: CURRENCY.PLN,
    label: `enums.currency.${CURRENCY.PLN}`,
    icon: 'wallet',
    color: 'green',
  },
  {
    id: '2',
    value: CURRENCY.EUR,
    label: `enums.currency.${CURRENCY.EUR}`,
    icon: 'wallet',
    color: 'blue',
  },
  {
    id: '3',
    value: CURRENCY.USD,
    label: `enums.currency.${CURRENCY.USD}`,
    icon: 'wallet',
    color: 'teal',
  },
  {
    id: '4',
    value: CURRENCY.UAH,
    label: `enums.currency.${CURRENCY.UAH}`,
    icon: 'wallet',
    color: 'yellow',
  },
];

export const DISTANCE_UNIT_CONFIG: EntityOption<DistanceUnit>[] = [
  {
    id: 'km',
    value: DISTANCE_UNIT.KM,
    label: 'enums.distanceUnit.KM',
    icon: 'gauge',
    color: 'blue',
  },
  {
    id: 'mi',
    value: DISTANCE_UNIT.MI,
    label: 'enums.distanceUnit.MI',
    icon: 'gauge',
    color: 'orange',
  },
];

export const FUEL_UNIT_CONFIG: EntityOption<FuelUnit>[] = [
  {
    id: '1',
    value: FUEL_UNIT.L,
    label: `enums.fuelUnit.${FUEL_UNIT.L}`,
    icon: 'droplets',
    color: 'teal',
  },
  {
    id: '2',
    value: FUEL_UNIT.GAL,
    label: `enums.fuelUnit.${FUEL_UNIT.GAL}`,
    icon: 'droplets',
    color: 'blue',
  },
];

export const DATE_FORMAT_CONFIG: EntityOption<DateFormat>[] = [
  {
    id: '1',
    value: DATE_FORMAT.DD_MM_YYYY,
    label: `enums.dateFormat.${DATE_FORMAT.DD_MM_YYYY}`,
    icon: 'calendar',
    color: 'violet',
  },
  {
    id: '2',
    value: DATE_FORMAT.YYYY_MM_DD,
    label: `enums.dateFormat.${DATE_FORMAT.YYYY_MM_DD}`,
    icon: 'calendar',
    color: 'violet',
  },
  {
    id: '3',
    value: DATE_FORMAT.DD_MONTH_YYYY,
    label: `enums.dateFormat.${DATE_FORMAT.DD_MONTH_YYYY}`,
    icon: 'calendar',
    color: 'violet',
  },
];

export const TIMEZONE_CONFIG: EntityOption<string>[] = [
  {
    id: '1',
    value: 'Europe/Warsaw',
    label: 'Europe/Warsaw (UTC+1/+2)',
  },
  {
    id: '2',
    value: 'Europe/Kyiv',
    label: 'Europe/Kyiv (UTC+2/+3)',
  },
  {
    id: '3',
    value: 'Europe/London',
    label: 'Europe/London (UTC+0/+1)',
  },
  {
    id: '4',
    value: 'Europe/Berlin',
    label: 'Europe/Berlin (UTC+1/+2)',
  },
  {
    id: '5',
    value: 'Europe/Paris',
    label: 'Europe/Paris (UTC+1/+2)',
  },
  {
    id: '6',
    value: 'Europe/Rome',
    label: 'Europe/Rome (UTC+1/+2)',
  },
  {
    id: '7',
    value: 'Europe/Madrid',
    label: 'Europe/Madrid (UTC+1/+2)',
  },
  {
    id: '8',
    value: 'Europe/Amsterdam',
    label: 'Europe/Amsterdam (UTC+1/+2)',
  },
  {
    id: '9',
    value: 'Europe/Prague',
    label: 'Europe/Prague (UTC+1/+2)',
  },
  {
    id: '10',
    value: 'Europe/Vienna',
    label: 'Europe/Vienna (UTC+1/+2)',
  },
  {
    id: '11',
    value: 'Europe/Budapest',
    label: 'Europe/Budapest (UTC+1/+2)',
  },
  {
    id: '12',
    value: 'Europe/Bucharest',
    label: 'Europe/Bucharest (UTC+2/+3)',
  },
  {
    id: '13',
    value: 'Europe/Sofia',
    label: 'Europe/Sofia (UTC+2/+3)',
  },
  {
    id: '14',
    value: 'Europe/Helsinki',
    label: 'Europe/Helsinki (UTC+2/+3)',
  },
  {
    id: '15',
    value: 'Europe/Stockholm',
    label: 'Europe/Stockholm (UTC+1/+2)',
  },
  {
    id: '16',
    value: 'Europe/Oslo',
    label: 'Europe/Oslo (UTC+1/+2)',
  },
  {
    id: '17',
    value: 'Europe/Copenhagen',
    label: 'Europe/Copenhagen (UTC+1/+2)',
  },
  {
    id: '18',
    value: 'Europe/Zurich',
    label: 'Europe/Zurich (UTC+1/+2)',
  },
  {
    id: '19',
    value: 'America/New_York',
    label: 'America/New_York (UTC-5/-4)',
  },
  {
    id: '20',
    value: 'America/Chicago',
    label: 'America/Chicago (UTC-6/-5)',
  },
  {
    id: '21',
    value: 'America/Los_Angeles',
    label: 'America/Los_Angeles (UTC-8/-7)',
  },
  {
    id: '22',
    value: 'UTC',
    label: 'UTC (UTC+0)',
  },
];
