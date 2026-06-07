import { TIMEZONE_CONFIG } from '@entities/workspace';
import type { ComboboxOption } from '@shared/ui';

export const TIMEZONE_OPTIONS: ComboboxOption[] = TIMEZONE_CONFIG.map((option) => {
  return {
    id: option.id,
    value: option.value,
    label: option.label,
  };
});
