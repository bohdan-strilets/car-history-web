import type { VehicleId } from '@entities/vehicle';

import type { TireStatus, TireType } from './tire.constants';

export type TireId = string;

export interface Tire {
  id: TireId;
  vehicleId: VehicleId;
  createdBy: string | null;
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

export interface TirePeriod {
  installedAt: string;
  installedMileage: number | null;
  removedAt: string | null;
  removedMileage: number | null;
  kmDriven: number | null;
  daysDriven: number | null;
  isOngoing: boolean;
}

export interface TireHistory {
  tire: Tire;
  history: {
    periods: TirePeriod[];
    totalKmDriven: number;
    totalMountCount: number;
  };
}
