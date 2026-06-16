import type { EntityOption } from '@shared/types';

import { CHARGE_TYPES, type ChargeType } from './timeline.constants';

export const CHARGE_TYPE_CONFIG: EntityOption<ChargeType>[] = [
  {
    id: '1',
    label: 'enums.chargeType.AC',
    value: CHARGE_TYPES.AC,
    icon: 'plug',
    color: 'sky',
  },
  {
    id: '2',
    label: 'enums.chargeType.DC',
    value: CHARGE_TYPES.DC,
    icon: 'zap',
    color: 'amber',
  },
];
