import type { EntityOption } from '@shared/types';

import { TRIP_PURPOSES, type TripPurpose } from './timeline.constants';

export const TRIP_PURPOSE_CONFIG: EntityOption<TripPurpose>[] = [
  {
    id: '1',
    label: 'enums.tripPurpose.PERSONAL',
    value: TRIP_PURPOSES.PERSONAL,
    icon: 'user',
    color: 'green',
  },
  {
    id: '2',
    label: 'enums.tripPurpose.WORK',
    value: TRIP_PURPOSES.WORK,
    icon: 'briefcase',
    color: 'blue',
  },
  {
    id: '3',
    label: 'enums.tripPurpose.OTHER',
    value: TRIP_PURPOSES.OTHER,
    icon: 'moreHorizontal',
    color: 'gray',
  },
];
