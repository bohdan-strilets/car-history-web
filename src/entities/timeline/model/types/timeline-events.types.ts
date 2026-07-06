import type { TireChangeType } from '@entities/tire';
import type { FuelType } from '@entities/vehicle';

import type {
  ChargeType,
  DocumentType,
  ExpenseCategory,
  PurchaseFrom,
  ServiceCategory,
  TripPurpose,
} from '../timeline.constants';

export type ServiceStationRef = {
  id: string;
  name: string;
  type: string;
};

export type RefuelDetails = {
  liters: string;
  pricePerLiter: string;
  fuelType: FuelType;
  isFullTank: boolean;
};

export type ChargeDetails = {
  kWh: string;
  pricePerKWh: string;
  chargeType: ChargeType;
  chargerNetwork: string | null;
  batteryBefore: number | null;
  batteryAfter: number | null;
};

export type WorkDetails = {
  name: string;
  price: string;
  description?: string;
};

export type PartDetails = {
  name: string;
  price: string;
  quantity: number;
  description?: string;
};

export type ServiceDetails = {
  category: ServiceCategory;
  works: WorkDetails[];
  parts: PartDetails[];
};

export type DocumentDetails = {
  documentType: DocumentType;
  documentNumber: string | null;
  issuedBy: string | null;
  issueDate: string | null;
  expireDate: string | null;
};

export type ExpenseDetails = {
  expenseCategory: ExpenseCategory;
};

export type TireChangeDetails = {
  tireId: string;
  changeType: TireChangeType;
  installedMileage: number | null;
  removedMileage: number | null;
  removedDate: string | null;
};

export type TripDetails = {
  startMileage: number;
  endMileage: number;
  startLocation: string | null;
  endLocation: string | null;
  distanceKm: string;
  purpose: TripPurpose;
};

export type PurchaseDetails = {
  purchasedFrom: PurchaseFrom;
  country: string | null;
};

export type SaleDetails = {
  soldTo: PurchaseFrom;
};

export type TimelineEventDetails =
  | RefuelDetails
  | ChargeDetails
  | ServiceDetails
  | DocumentDetails
  | ExpenseDetails
  | TireChangeDetails
  | TripDetails
  | PurchaseDetails
  | SaleDetails;
