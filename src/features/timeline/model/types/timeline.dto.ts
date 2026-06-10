import type { PartDetails, TimelineEventType, WorkDetails } from '@entities/timeline';

export type CreateTimelineEventDto = {
  // shared
  type: TimelineEventType;
  title: string;
  eventDate: string;
  mileage: number;
  cost?: string;
  description?: string;
  serviceStationId?: string;

  // REFUEL
  liters?: string;
  pricePerLiter?: string;
  fuelType?: string;
  isFullTank?: boolean;

  // CHARGE
  kWh?: string;
  pricePerKWh?: string;
  chargeType?: string;
  chargerNetwork?: string;
  batteryBefore?: number;
  batteryAfter?: number;

  // SERVICE
  serviceCategory?: string;
  works?: WorkDetails[];
  parts?: PartDetails[];

  // DOCUMENT
  documentType?: string;
  documentNumber?: string;
  issuedBy?: string;
  issueDate?: string;
  expireDate?: string;

  // EXPENSE
  expenseCategory?: string;

  // TIRE_CHANGE
  tireId?: string;
  installedMileage?: number;
  removedMileage?: number;
  removedDate?: string;

  // TRIP
  startMileage?: number;
  endMileage?: number;
  startLocation?: string;
  endLocation?: string;
  distanceKm?: string;
  purpose?: string;

  // PURCHASE
  purchasedFrom?: string;
  country?: string;

  // SALE
  soldTo?: string;
};

export type UpdateTimelineEventDto = {
  title?: string;
  eventDate?: string;
  mileage?: number;
  cost?: string;
  description?: string;
  serviceStationId?: string;
};
