import type { EntityOption } from '@shared/types';

import {
  TIRE_CHANGE_TYPE,
  TIRE_STATUS,
  TIRE_TYPE,
  type TireChangeType,
  type TireStatus,
  type TireType,
} from './tire.constants';

export const TIRE_TYPE_CONFIG: EntityOption<TireType>[] = [
  {
    id: '1',
    label: `enums.tireType.${TIRE_TYPE.ALL_SEASON}`,
    value: TIRE_TYPE.ALL_SEASON,
    color: 'teal',
    icon: 'cloudSun',
  },
  {
    id: '2',
    label: `enums.tireType.${TIRE_TYPE.SUMMER}`,
    value: TIRE_TYPE.SUMMER,
    color: 'amber',
    icon: 'sun',
  },
  {
    id: '3',
    label: `enums.tireType.${TIRE_TYPE.WINTER}`,
    value: TIRE_TYPE.WINTER,
    color: 'sky',
    icon: 'snowflake',
  },
];

export const TIRE_STATUS_CONFIG: EntityOption<TireStatus>[] = [
  {
    id: '1',
    label: `enums.tireStatus.${TIRE_STATUS.MOUNTED}`,
    value: TIRE_STATUS.MOUNTED,
    color: 'green',
    icon: 'checkCircle',
  },
  {
    id: '2',
    label: `enums.tireStatus.${TIRE_STATUS.STORED}`,
    value: TIRE_STATUS.STORED,
    color: 'blue',
    icon: 'package',
  },
  {
    id: '3',
    label: `enums.tireStatus.${TIRE_STATUS.RETIRED}`,
    value: TIRE_STATUS.RETIRED,
    color: 'gray',
    icon: 'xCircle',
  },
];

export const TIRE_CHANGE_TYPE_CONFIG: EntityOption<TireChangeType>[] = [
  {
    id: '1',
    label: `enums.tireChangeType.${TIRE_CHANGE_TYPE.INSTALL}`,
    value: TIRE_CHANGE_TYPE.INSTALL,
    color: 'green',
    icon: 'checkCircle',
  },
  {
    id: '2',
    label: `enums.tireChangeType.${TIRE_CHANGE_TYPE.REMOVE}`,
    value: TIRE_CHANGE_TYPE.REMOVE,
    color: 'orange',
    icon: 'package',
  },
];
