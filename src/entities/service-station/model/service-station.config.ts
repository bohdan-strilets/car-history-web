import type { EntityOption } from '@shared/types';

import { SERVICE_STATION_TYPE, type ServiceStationType } from './service-station.constants';

export const SERVICE_STATION_TYPE_CONFIG: EntityOption<ServiceStationType>[] = [
  {
    id: '1',
    label: `enums.serviceStationType.${SERVICE_STATION_TYPE.MECHANIC}`,
    value: SERVICE_STATION_TYPE.MECHANIC,
    color: 'blue',
    icon: 'wrench',
  },
  {
    id: '2',
    label: `enums.serviceStationType.${SERVICE_STATION_TYPE.TIRE_SHOP}`,
    value: SERVICE_STATION_TYPE.TIRE_SHOP,
    color: 'orange',
    icon: 'circle',
  },
  {
    id: '3',
    label: `enums.serviceStationType.${SERVICE_STATION_TYPE.CAR_WASH}`,
    value: SERVICE_STATION_TYPE.CAR_WASH,
    color: 'sky',
    icon: 'droplets',
  },
  {
    id: '4',
    label: `enums.serviceStationType.${SERVICE_STATION_TYPE.FUEL_STATION}`,
    value: SERVICE_STATION_TYPE.FUEL_STATION,
    color: 'green',
    icon: 'fuel',
  },
  {
    id: '5',
    label: `enums.serviceStationType.${SERVICE_STATION_TYPE.DEALERSHIP}`,
    value: SERVICE_STATION_TYPE.DEALERSHIP,
    color: 'violet',
    icon: 'car',
  },
  {
    id: '6',
    label: `enums.serviceStationType.${SERVICE_STATION_TYPE.OTHER}`,
    value: SERVICE_STATION_TYPE.OTHER,
    color: 'gray',
    icon: 'moreHorizontal',
  },
];
