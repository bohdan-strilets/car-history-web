import type { TimelineEventValues } from '../schemes';
import type { TimelineEventFormContext } from '../types';

export const timelineEventDefaultValues = ({
  type,
  currentMileage,
  fuelType,
}: TimelineEventFormContext): TimelineEventValues => ({
  type,
  title: '',
  eventDate: new Date().toISOString().split('T')[0],
  mileage: currentMileage,
  cost: undefined,
  description: '',
  serviceStationId: '',

  // REFUEL
  liters: undefined,
  pricePerLiter: undefined,
  fuelType: fuelType ?? undefined,
  isFullTank: false,

  // CHARGE
  kWh: undefined,
  pricePerKWh: undefined,
  chargeType: '',
  chargerNetwork: '',
  batteryBefore: null,
  batteryAfter: null,

  // SERVICE
  serviceCategory: '',
  works: [],
  parts: [],

  // DOCUMENT
  documentType: '',
  documentNumber: '',
  issuedBy: '',
  issueDate: '',
  expireDate: '',

  // EXPENSE
  expenseCategory: '',

  // TIRE_CHANGE
  tireId: '',
  installedMileage: null,
  removedMileage: null,
  removedDate: '',

  // TRIP
  startMileage: null,
  endMileage: null,
  startLocation: '',
  endLocation: '',
  distanceKm: undefined,
  purpose: '',

  // PURCHASE
  purchasedFrom: '',
  country: '',

  // SALE
  soldTo: '',
});
