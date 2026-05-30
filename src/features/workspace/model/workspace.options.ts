import { TIMEZONE_CONFIG } from '@entities/workspace';
import type { ComboboxOption } from '@shared/ui';

export const TIMEZONE_OPTIONS: ComboboxOption[] = TIMEZONE_CONFIG.map((o) => ({
  id: o.id,
  value: o.value,
  label: o.label,
}));
