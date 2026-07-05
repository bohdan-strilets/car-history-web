import type { VehicleId } from '@entities/vehicle';

import type { TireStatus, TireType } from './tire.constants';

export type TireId = string;

export interface Tire {
  id: TireId;
  vehicleId: VehicleId;
  brand: string;
  model: string;
  type: TireType;
  width: number;
  aspectRatio: number;
  rimDiameter: number;
  price: string | null;
  status: TireStatus;
  storageLocation: string | null;
  mileageAtPurchase: number | null;
  quantity: number;
  purchaseAt: string | null;
  createdAt: string;
  updatedAt: string;
}
