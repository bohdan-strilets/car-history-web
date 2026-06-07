import type { HintVariant } from './hint.types';
import type { IconName } from '@shared/icons';
import type { IconColor, TextColor } from '@shared/ui';

export const HINT_ICON_MAP: Record<HintVariant, IconName> = {
  default: 'info',
  success: 'checkCircle',
  warning: 'alertTriangle',
  danger: 'xCircle',
  info: 'info',
};

export const HINT_ICON_COLOR_MAP: Record<HintVariant, IconColor> = {
  default: 'secondary',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  info: 'info',
};

export const HINT_TEXT_COLOR_MAP: Record<HintVariant, TextColor> = {
  default: 'secondary',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  info: 'info',
};
