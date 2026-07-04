import type { EntityOption } from '@shared/types';

import { MEDIA_CATEGORIES, type MediaCategory } from './media.constants';

export const MEDIA_CATEGORIES_CONFIG: EntityOption<MediaCategory>[] = [
  {
    id: '1',
    label: `enums.mediaCategory.${MEDIA_CATEGORIES.EXTERIOR}`,
    value: MEDIA_CATEGORIES.EXTERIOR,
    color: 'sky',
    icon: 'car',
  },
  {
    id: '2',
    label: `enums.mediaCategory.${MEDIA_CATEGORIES.INTERIOR}`,
    value: MEDIA_CATEGORIES.INTERIOR,
    color: 'blue',
    icon: 'armchair',
  },
  {
    id: '3',
    label: `enums.mediaCategory.${MEDIA_CATEGORIES.ENGINE}`,
    value: MEDIA_CATEGORIES.ENGINE,
    color: 'green',
    icon: 'activity',
  },
  {
    id: '4',
    label: `enums.mediaCategory.${MEDIA_CATEGORIES.DAMAGE}`,
    value: MEDIA_CATEGORIES.DAMAGE,
    color: 'rose',
    icon: 'alertCircle',
  },
  {
    id: '5',
    label: `enums.mediaCategory.${MEDIA_CATEGORIES.OTHER}`,
    value: MEDIA_CATEGORIES.OTHER,
    color: 'gray',
    icon: 'moreHorizontal',
  },
];
