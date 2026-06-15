import { VEHICLE_GENERATIONS, VEHICLE_MODELS } from '@entities/vehicle';
import type { ComboboxOption } from '@shared/ui';

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

export const getGenerationOptions = (brand: string, model: string): ComboboxOption[] =>
  VEHICLE_GENERATIONS[brand]?.[model]?.map((generation) => ({
    id: generation,
    value: generation,
    label: generation,
  })) || [];
