import type { EntityOption } from '@shared/types';

import type { ServiceCategory } from './timeline.constants';

export const SERVICE_CATEGORY_CONFIG: EntityOption<ServiceCategory>[] = [
  {
    id: '1',
    label: 'enums.serviceCategory.MAINTENANCE',
    value: 'MAINTENANCE',
    icon: 'wrench',
    color: 'blue',
  },
  {
    id: '2',
    label: 'enums.serviceCategory.REPAIR',
    value: 'REPAIR',
    icon: 'hammer',
    color: 'rose',
  },
  {
    id: '3',
    label: 'enums.serviceCategory.OTHER',
    value: 'OTHER',
    icon: 'moreHorizontal',
    color: 'gray',
  },
];
