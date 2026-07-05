import { TIRE_TYPE, type Tire } from '@entities/tire';

import type { CreateTireValues } from './tire.schema';

export const createTireDefaultValues = (): CreateTireValues => ({
  brand: '',
  model: '',
  type: TIRE_TYPE.ALL_SEASON,
  width: 205,
  aspectRatio: 55,
  rimDiameter: 16,
  price: undefined,
  storageLocation: '',
  mileageAtPurchase: undefined,
  quantity: 4,
  purchaseAt: undefined,
});

export const updateTireDefaultValues = (tire: Tire): CreateTireValues => ({
  brand: tire.brand,
  model: tire.model,
  type: tire.type,
  width: tire.width,
  aspectRatio: tire.aspectRatio,
  rimDiameter: tire.rimDiameter,
  price: tire.price ? Number(tire.price) : undefined,
  storageLocation: tire.storageLocation ?? '',
  mileageAtPurchase: tire.mileageAtPurchase ?? undefined,
  quantity: tire.quantity,
  purchaseAt: tire.purchaseAt ?? undefined,
});
