import { TIMELINE_EVENT_TYPE } from '@entities/timeline';

import type { TimelineEventValues, UpdateTimelineEventValues } from '../schemes';
import type { CreateTimelineEventDto, UpdateTimelineEventDto } from '../types';

export const buildDto = (data: TimelineEventValues): CreateTimelineEventDto => {
  const base: CreateTimelineEventDto = {
    type: data.type,
    title: data.title,
    eventDate: data.eventDate,
    mileage: data.mileage,
    cost: data.cost != null && !isNaN(data.cost) ? data.cost.toString() : undefined,
    description: data.description || undefined,
    serviceStationId: data.serviceStationId || undefined,
  };

  switch (data.type) {
    case TIMELINE_EVENT_TYPE.REFUEL:
      return {
        ...base,
        liters: data.liters?.toString(),
        pricePerLiter: data.pricePerLiter?.toString(),
        fuelType: data.fuelType,
        isFullTank: data.isFullTank,
      };

    case TIMELINE_EVENT_TYPE.CHARGE:
      return {
        ...base,
        kWh: data.kWh?.toString(),
        pricePerKWh: data.pricePerKWh?.toString(),
        chargeType: data.chargeType,
        chargerNetwork: data.chargerNetwork || undefined,
        batteryBefore: data.batteryBefore ?? undefined,
        batteryAfter: data.batteryAfter ?? undefined,
      };

    case TIMELINE_EVENT_TYPE.SERVICE:
      return {
        ...base,
        serviceCategory: data.serviceCategory,
        works: data.works?.map((work) => ({
          ...work,
          price: work.price?.toString(),
        })),
        parts: data.parts?.map((part) => ({
          ...part,
          price: part.price?.toString(),
        })),
      };

    case TIMELINE_EVENT_TYPE.DOCUMENT:
      return {
        ...base,
        documentType: data.documentType,
        documentNumber: data.documentNumber || undefined,
        issuedBy: data.issuedBy || undefined,
        issueDate: data.issueDate || undefined,
        expireDate: data.expireDate || undefined,
      };

    case TIMELINE_EVENT_TYPE.EXPENSE:
      return {
        ...base,
        expenseCategory: data.expenseCategory,
      };

    case TIMELINE_EVENT_TYPE.TIRE_CHANGE:
      return {
        ...base,
        tireId: data.tireId,
        changeType: data.changeType,
        installedMileage: data.installedMileage ?? undefined,
        removedMileage: data.removedMileage ?? undefined,
        removedDate: data.removedDate || undefined,
      };

    case TIMELINE_EVENT_TYPE.TRIP:
      return {
        ...base,
        startMileage: data.startMileage!,
        endMileage: data.endMileage!,
        startLocation: data.startLocation || undefined,
        endLocation: data.endLocation || undefined,
        distanceKm:
          data.distanceKm != null && !isNaN(data.distanceKm)
            ? data.distanceKm.toString()
            : undefined,
        purpose: data.purpose,
      };

    case TIMELINE_EVENT_TYPE.PURCHASE:
      return {
        ...base,
        purchasedFrom: data.purchasedFrom,
        country: data.country || undefined,
      };

    case TIMELINE_EVENT_TYPE.SALE:
      return {
        ...base,
        soldTo: data.soldTo,
      };

    default:
      return base;
  }
};

export const buildUpdateDto = (data: UpdateTimelineEventValues): UpdateTimelineEventDto => ({
  title: data.title,
  eventDate: data.eventDate,
  mileage: data.mileage,
  cost: data.cost != null && !isNaN(data.cost) ? data.cost.toString() : undefined,
  description: data.description || undefined,
  serviceStationId: data.serviceStationId || undefined,
});
