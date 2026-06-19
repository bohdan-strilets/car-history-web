import type {
  ChargeDetails,
  DocumentDetails,
  ExpenseDetails,
  PurchaseDetails,
  RefuelDetails,
  SaleDetails,
  ServiceDetails,
  TimelineEvent,
  TireChangeDetails,
  TripDetails,
} from '@entities/timeline';

export interface GeneralSectionProps {
  event: TimelineEvent;
}

export interface RefuelSectionProps {
  details: RefuelDetails;
}

export interface ChargeSectionProps {
  details: ChargeDetails;
}

export interface ServiceSectionProps {
  details: ServiceDetails;
}

export interface DocumentSectionProps {
  details: DocumentDetails;
}

export interface ExpenseSectionProps {
  details: ExpenseDetails;
}

export interface TripSectionProps {
  details: TripDetails;
}

export interface PurchaseSectionProps {
  details: PurchaseDetails;
}

export interface SaleSectionProps {
  details: SaleDetails;
}

export interface TireChangeSectionProps {
  details: TireChangeDetails;
}
