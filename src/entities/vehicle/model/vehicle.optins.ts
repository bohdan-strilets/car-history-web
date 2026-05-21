import type { ComboboxOption } from '@shared/ui';

import { VEHICLE_MODELS } from './vehicle-data';

export const getBrandOptions = (): ComboboxOption[] =>
  Object.keys(VEHICLE_MODELS).map((brand) => ({
    id: brand,
    value: brand,
    label: brand,
  }));

export const getModelOptions = (brand: string): ComboboxOption[] =>
  VEHICLE_MODELS[brand]?.map((model) => ({
    id: model,
    value: model,
    label: model,
  })) || [];
