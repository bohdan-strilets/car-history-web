import type { EntityOption } from '@shared/types';

import { PURCHASE_FROM, type PurchaseFrom } from './timeline.constants';

export const PURCHASE_CONFIG: EntityOption<PurchaseFrom>[] = [
  {
    id: '1',
    label: 'enums.purchaseFrom.SALON',
    value: PURCHASE_FROM.SALON,
    icon: 'store',
    color: 'blue',
  },
  {
    id: '2',
    label: 'enums.purchaseFrom.PRIVATE',
    value: PURCHASE_FROM.PRIVATE,
    icon: 'user',
    color: 'green',
  },
  {
    id: '3',
    label: 'enums.purchaseFrom.AUCTION',
    value: PURCHASE_FROM.AUCTION,
    icon: 'gavel',
    color: 'amber',
  },
  {
    id: '4',
    label: 'enums.purchaseFrom.ABROAD',
    value: PURCHASE_FROM.ABROAD,
    icon: 'globe',
    color: 'violet',
  },
];
