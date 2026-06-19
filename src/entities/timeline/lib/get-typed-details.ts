import type {
  ChargeDetails,
  DocumentDetails,
  ExpenseDetails,
  PurchaseDetails,
  RefuelDetails,
  SaleDetails,
  ServiceDetails,
  TimelineEventDetails,
  TireChangeDetails,
  TripDetails,
} from '../model/types/timeline-events.types';

type DetailsMap = {
  REFUEL: RefuelDetails;
  CHARGE: ChargeDetails;
  SERVICE: ServiceDetails;
  DOCUMENT: DocumentDetails;
  EXPENSE: ExpenseDetails;
  TRIP: TripDetails;
  PURCHASE: PurchaseDetails;
  SALE: SaleDetails;
  TIRE_CHANGE: TireChangeDetails;
};

export const getTypedDetails = <T extends keyof DetailsMap>(
  _type: T,
  details: TimelineEventDetails | null,
): DetailsMap[T] | null => {
  return details as DetailsMap[T] | null;
};
