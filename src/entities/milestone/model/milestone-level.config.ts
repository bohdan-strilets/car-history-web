import type { IconName } from '@shared/icons';

import { MILESTONE_LEVEL_GROUP, type MilestoneLevelGroup } from './milestone.types';

import type { TFunction } from 'i18next';

interface MilestoneLevelGroupConfig {
  icon: IconName;
  titleKey: string;
  formatValue: (value: number, t: TFunction) => string;
}

export const MILESTONE_LEVEL_GROUP_CONFIG: Record<MilestoneLevelGroup, MilestoneLevelGroupConfig> =
  {
    [MILESTONE_LEVEL_GROUP.MILEAGE]: {
      icon: 'gauge',
      titleKey: 'milestone.levels.groups.MILEAGE',
      formatValue: (value, t) => `${Math.max(value, 0).toLocaleString()} ${t('units.km')}`,
    },
    [MILESTONE_LEVEL_GROUP.EXPENSES]: {
      icon: 'wallet',
      titleKey: 'milestone.levels.groups.EXPENSES',
      formatValue: (value) => `${Math.max(value, 0).toLocaleString()} zł`,
    },
    [MILESTONE_LEVEL_GROUP.REFUELS]: {
      icon: 'fuel',
      titleKey: 'milestone.levels.groups.REFUELS',
      formatValue: (value) => `${Math.max(value, 0)}`,
    },
  };
