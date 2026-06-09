export type ServiceStationRef = {
  id: string;
  name: string;
  type: string;
};

export type RefuelDetails = {
  liters: string;
  pricePerLiter: string;
  fuelType: string;
  isFullTank: boolean;
};

export type ChargeDetails = {
  kWh: string;
  pricePerKWh: string;
  chargeType: string;
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
  category: string;
  works: WorkDetails[];
  parts: PartDetails[];
};

export type DocumentDetails = {
  documentType: string;
  documentNumber: string | null;
  issuedBy: string | null;
  issueDate: string | null;
  expireDate: string | null;
};

export type ExpenseDetails = {
  expenseCategory: string;
};

export type TireChangeDetails = {
  tireId: string;
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
  purpose: string;
};

export type PurchaseDetails = {
  purchasedFrom: string;
  country: string | null;
};

export type SaleDetails = {
  soldTo: string;
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
