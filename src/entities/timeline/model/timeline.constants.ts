export const TIMELINE_EVENT_TYPE = {
  PURCHASE: 'PURCHASE',
  SALE: 'SALE',
  REFUEL: 'REFUEL',
  CHARGE: 'CHARGE',
  SERVICE: 'SERVICE',
  DOCUMENT: 'DOCUMENT',
  EXPENSE: 'EXPENSE',
  TIRE_CHANGE: 'TIRE_CHANGE',
  TRIP: 'TRIP',
} as const;

export type TimelineEventType = (typeof TIMELINE_EVENT_TYPE)[keyof typeof TIMELINE_EVENT_TYPE];

export const SERVICE_CATEGORIES = {
  MAINTENANCE: 'MAINTENANCE',
  REPAIR: 'REPAIR',
  OTHER: 'OTHER',
} as const;

export type ServiceCategory = (typeof SERVICE_CATEGORIES)[keyof typeof SERVICE_CATEGORIES];

export const DOCUMENT_TYPES = {
  INSURANCE_OC: 'INSURANCE_OC',
  INSURANCE_AC: 'INSURANCE_AC',
  TECHNICAL_INSPECTION: 'TECHNICAL_INSPECTION',
  LOAN: 'LOAN',
  LEASING: 'LEASING',
  VIGNETTE: 'VIGNETTE',
  OTHER: 'OTHER',
} as const;

export type DocumentType = (typeof DOCUMENT_TYPES)[keyof typeof DOCUMENT_TYPES];

export const EXPENSE_CATEGORIES = {
  ACCESSORIES: 'ACCESSORIES',
  CARE: 'CARE',
  PARKING: 'PARKING',
  FINE: 'FINE',
  REGISTRATION: 'REGISTRATION',
  RENTAL: 'RENTAL',
  OTHER: 'OTHER',
} as const;

export type ExpenseCategory = (typeof EXPENSE_CATEGORIES)[keyof typeof EXPENSE_CATEGORIES];

export const TRIP_PURPOSES = {
  PERSONAL: 'PERSONAL',
  WORK: 'WORK',
  OTHER: 'OTHER',
} as const;

export type TripPurpose = (typeof TRIP_PURPOSES)[keyof typeof TRIP_PURPOSES];

export const PURCHASE_FROM = {
  SALON: 'SALON',
  PRIVATE: 'PRIVATE',
  AUCTION: 'AUCTION',
  ABROAD: 'ABROAD',
} as const;

export type PurchaseFrom = (typeof PURCHASE_FROM)[keyof typeof PURCHASE_FROM];
