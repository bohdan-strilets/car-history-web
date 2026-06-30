import type { EntityOption } from '@shared/types';

import {
  MAINTENANCE_STATUS,
  MAINTENANCE_TYPE,
  MAINTENANCE_URGENCY,
  type MaintenanceStatus,
  type MaintenanceType,
  type MaintenanceUrgency,
} from './maintenance.constants';

export const MAINTENANCE_TYPE_CONFIG: EntityOption<MaintenanceType>[] = [
  {
    id: '1',
    label: `enums.maintenanceType.${MAINTENANCE_TYPE.OIL_CHANGE}`,
    value: MAINTENANCE_TYPE.OIL_CHANGE,
    color: 'amber',
    icon: 'droplets',
  },
  {
    id: '2',
    label: `enums.maintenanceType.${MAINTENANCE_TYPE.BRAKE_PADS}`,
    value: MAINTENANCE_TYPE.BRAKE_PADS,
    color: 'rose',
    icon: 'circle',
  },
  {
    id: '3',
    label: `enums.maintenanceType.${MAINTENANCE_TYPE.BRAKE_DISCS}`,
    value: MAINTENANCE_TYPE.BRAKE_DISCS,
    color: 'rose',
    icon: 'disc2',
  },
  {
    id: '4',
    label: `enums.maintenanceType.${MAINTENANCE_TYPE.TIMING_BELT}`,
    value: MAINTENANCE_TYPE.TIMING_BELT,
    color: 'indigo',
    icon: 'settings',
  },
  {
    id: '5',
    label: `enums.maintenanceType.${MAINTENANCE_TYPE.AIR_FILTER}`,
    value: MAINTENANCE_TYPE.AIR_FILTER,
    color: 'sky',
    icon: 'wind',
  },
  {
    id: '6',
    label: `enums.maintenanceType.${MAINTENANCE_TYPE.FUEL_FILTER}`,
    value: MAINTENANCE_TYPE.FUEL_FILTER,
    color: 'orange',
    icon: 'filter',
  },
  {
    id: '7',
    label: `enums.maintenanceType.${MAINTENANCE_TYPE.CABIN_FILTER}`,
    value: MAINTENANCE_TYPE.CABIN_FILTER,
    color: 'cyan',
    icon: 'wind',
  },
  {
    id: '8',
    label: `enums.maintenanceType.${MAINTENANCE_TYPE.SPARK_PLUGS}`,
    value: MAINTENANCE_TYPE.SPARK_PLUGS,
    color: 'yellow',
    icon: 'zap',
  },
  {
    id: '9',
    label: `enums.maintenanceType.${MAINTENANCE_TYPE.COOLANT}`,
    value: MAINTENANCE_TYPE.COOLANT,
    color: 'blue',
    icon: 'thermometer',
  },
  {
    id: '10',
    label: `enums.maintenanceType.${MAINTENANCE_TYPE.TRANSMISSION_OIL}`,
    value: MAINTENANCE_TYPE.TRANSMISSION_OIL,
    color: 'violet',
    icon: 'droplets',
  },
  {
    id: '11',
    label: `enums.maintenanceType.${MAINTENANCE_TYPE.CUSTOM}`,
    value: MAINTENANCE_TYPE.CUSTOM,
    color: 'gray',
    icon: 'wrench',
  },
];

export const MAINTENANCE_URGENCY_CONFIG: EntityOption<MaintenanceUrgency>[] = [
  {
    id: '1',
    label: `enums.urgency.${MAINTENANCE_URGENCY.OVERDUE}`,
    value: MAINTENANCE_URGENCY.OVERDUE,
    color: 'rose',
  },
  {
    id: '2',
    label: `enums.urgency.${MAINTENANCE_URGENCY.CRITICAL}`,
    value: MAINTENANCE_URGENCY.CRITICAL,
    color: 'rose',
  },
  {
    id: '3',
    label: `enums.urgency.${MAINTENANCE_URGENCY.WARNING}`,
    value: MAINTENANCE_URGENCY.WARNING,
    color: 'orange',
  },
  {
    id: '4',
    label: `enums.urgency.${MAINTENANCE_URGENCY.OK}`,
    value: MAINTENANCE_URGENCY.OK,
    color: 'green',
  },
  {
    id: '5',
    label: `enums.urgency.${MAINTENANCE_URGENCY.INACTIVE}`,
    value: MAINTENANCE_URGENCY.INACTIVE,
    color: 'gray',
  },
];

export const MAINTENANCE_STATUS_CONFIG: EntityOption<MaintenanceStatus>[] = [
  {
    id: '1',
    label: `enums.maintenanceStatus.${MAINTENANCE_STATUS.ACTIVE}`,
    value: MAINTENANCE_STATUS.ACTIVE,
    color: 'green',
  },
  {
    id: '2',
    label: `enums.maintenanceStatus.${MAINTENANCE_STATUS.DISABLED}`,
    value: MAINTENANCE_STATUS.DISABLED,
    color: 'gray',
  },
];
