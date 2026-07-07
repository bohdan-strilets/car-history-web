import { SERVICE_STATION_TYPE } from '@entities/service-station';

import type { CreateServiceStationValues } from './service-station.schema';

export const createServiceStationDefaultValues = (): CreateServiceStationValues => ({
  name: '',
  type: SERVICE_STATION_TYPE.OTHER,
  address: {
    country: 'Polska',
    city: '',
    street: '',
    number: '',
    postCode: '',
  },
  latitude: undefined,
  longitude: undefined,
  phone: '',
  website: '',
  notes: '',
  googlePlaceId: undefined,
  googleRating: undefined,
});
