import type { IconName } from '@shared/icons';
import type { ParseKeys } from 'i18next';

export interface NavConfig {
  icon: IconName;
  labelKey: ParseKeys;
  to: string;
}
