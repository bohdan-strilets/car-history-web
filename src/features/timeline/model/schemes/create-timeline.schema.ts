import { z } from 'zod';

import { TimelineConstraints as C, TIMELINE_EVENT_TYPE } from '@entities/timeline';
import { REFUEL_TYPE } from '@entities/vehicle';
import { zodIssue } from '@shared/lib';

import type { TFunction } from 'i18next';

export const createTimelineEventSchema = (t: TFunction, currentMileage: number) =>
  z
    .object({
      // shared
      type: z.enum(TIMELINE_EVENT_TYPE, t('validation.REQUIRED')),

      title: z
        .string(t('validation.REQUIRED'))
        .min(C.TITLE_MIN, t('validation.TOO_SHORT'))
        .max(C.TITLE_MAX, t('validation.TOO_LONG')),

      eventDate: z.string(t('validation.REQUIRED')),
      mileage: z
        .number(t('validation.REQUIRED'))
        .int(t('validation.MUST_BE_INTEGER'))
        .min(0, t('validation.TOO_SMALL'))
        .max(C.MILEAGE_MAX, t('validation.TOO_LARGE')),

      cost: z
        .number(t('validation.INVALID_FORMAT'))
        .min(C.COST_MIN, t('validation.TOO_SMALL'))
        .optional(),

      description: z.string().max(C.DESCRIPTION_MAX, t('validation.TOO_LONG')).optional(),

      serviceStationId: z.string().optional(),

      // REFUEL
      liters: z
        .number(t('validation.INVALID_FORMAT'))
        .min(C.LITERS_MIN, t('validation.TOO_SMALL'))
        .max(C.LITERS_MAX, t('validation.TOO_LARGE'))
        .optional(),

      pricePerLiter: z
        .number(t('validation.INVALID_FORMAT'))
        .min(C.PRICE_PER_LITER_MIN, t('validation.TOO_SMALL'))
        .max(C.PRICE_PER_LITER_MAX, t('validation.TOO_LARGE'))
        .optional(),

      fuelType: z.enum(REFUEL_TYPE, t('validation.INVALID_ENUM')).optional(),

      isFullTank: z.boolean().optional(),

      // CHARGE
      kWh: z
        .number(t('validation.INVALID_FORMAT'))
        .min(C.KWH_MIN, t('validation.TOO_SMALL'))
        .max(C.KWH_MAX, t('validation.TOO_LARGE'))
        .optional(),

      pricePerKWh: z
        .number(t('validation.INVALID_FORMAT'))
        .min(C.PRICE_PER_KWH_MIN, t('validation.TOO_SMALL'))
        .max(C.PRICE_PER_KWH_MAX, t('validation.TOO_LARGE'))
        .optional(),

      chargeType: z.string().optional(),

      chargerNetwork: z.string().max(C.CHARGER_NETWORK_MAX, t('validation.TOO_LONG')).optional(),

      batteryBefore: z
        .number(t('validation.INVALID_FORMAT'))
        .min(C.BATTERY_PERCENT_MIN, t('validation.TOO_SMALL'))
        .max(C.BATTERY_PERCENT_MAX, t('validation.TOO_LARGE'))
        .nullable()
        .optional(),

      batteryAfter: z
        .number(t('validation.INVALID_FORMAT'))
        .min(C.BATTERY_PERCENT_MIN, t('validation.TOO_SMALL'))
        .max(C.BATTERY_PERCENT_MAX, t('validation.TOO_LARGE'))
        .nullable()
        .optional(),

      // SERVICE
      serviceCategory: z.string().optional(),

      works: z
        .array(
          z.object({
            name: z
              .string(t('validation.REQUIRED'))
              .min(C.WORK_NAME_MIN, t('validation.TOO_SHORT'))
              .max(C.WORK_NAME_MAX, t('validation.TOO_LONG')),
            price: z.number(t('validation.REQUIRED')).min(0, t('validation.TOO_SMALL')),
            description: z
              .string()
              .max(C.WORK_DESCRIPTION_MAX, t('validation.TOO_LONG'))
              .optional(),
          }),
        )
        .max(C.WORKS_MAX_ITEMS, t('validation.TOO_LARGE'))
        .optional(),

      parts: z
        .array(
          z.object({
            name: z
              .string(t('validation.REQUIRED'))
              .min(C.PART_NAME_MIN, t('validation.TOO_SHORT'))
              .max(C.PART_NAME_MAX, t('validation.TOO_LONG')),
            price: z.number(t('validation.REQUIRED')).min(0, t('validation.TOO_SMALL')),
            quantity: z
              .number(t('validation.REQUIRED'))
              .int(t('validation.MUST_BE_INTEGER'))
              .min(C.PART_QUANTITY_MIN, t('validation.TOO_SMALL'))
              .max(C.PART_QUANTITY_MAX, t('validation.TOO_LARGE')),
            description: z
              .string()
              .max(C.PART_DESCRIPTION_MAX, t('validation.TOO_LONG'))
              .optional(),
          }),
        )
        .max(C.PARTS_MAX_ITEMS, t('validation.TOO_LARGE'))
        .optional(),

      // DOCUMENT
      documentType: z.string().optional(),

      documentNumber: z.string().max(C.DOCUMENT_NUMBER_MAX, t('validation.TOO_LONG')).optional(),

      issuedBy: z.string().max(C.ISSUED_BY_MAX, t('validation.TOO_LONG')).optional(),

      issueDate: z.string().optional(),
      expireDate: z.string().optional(),

      // EXPENSE
      expenseCategory: z.string().optional(),

      // TIRE_CHANGE
      tireId: z.string().optional(),

      installedMileage: z
        .number(t('validation.INVALID_FORMAT'))
        .int(t('validation.MUST_BE_INTEGER'))
        .min(0, t('validation.TOO_SMALL'))
        .max(C.MILEAGE_MAX, t('validation.TOO_LARGE'))
        .nullable()
        .optional(),

      removedMileage: z
        .number(t('validation.INVALID_FORMAT'))
        .int(t('validation.MUST_BE_INTEGER'))
        .min(0, t('validation.TOO_SMALL'))
        .max(C.MILEAGE_MAX, t('validation.TOO_LARGE'))
        .nullable()
        .optional(),

      removedDate: z.string().optional(),

      // TRIP
      startMileage: z
        .number(t('validation.INVALID_FORMAT'))
        .int(t('validation.MUST_BE_INTEGER'))
        .min(0, t('validation.TOO_SMALL'))
        .max(C.MILEAGE_MAX, t('validation.TOO_LARGE'))
        .nullable()
        .optional(),

      endMileage: z
        .number(t('validation.INVALID_FORMAT'))
        .int(t('validation.MUST_BE_INTEGER'))
        .min(0, t('validation.TOO_SMALL'))
        .max(C.MILEAGE_MAX, t('validation.TOO_LARGE'))
        .nullable()
        .optional(),

      startLocation: z.string().max(C.START_LOCATION_MAX, t('validation.TOO_LONG')).optional(),

      endLocation: z.string().max(C.END_LOCATION_MAX, t('validation.TOO_LONG')).optional(),

      distanceKm: z
        .number(t('validation.INVALID_FORMAT'))
        .min(C.DISTANCE_KM_MIN, t('validation.TOO_SMALL'))
        .max(C.DISTANCE_KM_MAX, t('validation.TOO_LARGE'))
        .optional(),

      purpose: z.string().optional(),

      // PURCHASE
      purchasedFrom: z.string().optional(),

      country: z.string().max(C.COUNTRY_MAX, t('validation.TOO_LONG')).optional(),

      // SALE
      soldTo: z.string().optional(),
    })
    .superRefine((data, ctx) => {
      const required = (path: string) => ctx.addIssue(zodIssue(t('validation.REQUIRED'), [path]));

      // Mileage validation — skip for PURCHASE
      if (
        data.type !== TIMELINE_EVENT_TYPE.PURCHASE &&
        data.mileage != null &&
        data.mileage < currentMileage
      ) {
        ctx.addIssue(zodIssue(t('validation.TOO_SMALL'), ['mileage']));
      }

      // REFUEL
      if (data.type === TIMELINE_EVENT_TYPE.REFUEL) {
        if (data.liters == null || isNaN(data.liters)) required('liters');
        if (data.pricePerLiter == null || isNaN(data.pricePerLiter)) required('pricePerLiter');
        if (!data.fuelType) required('fuelType');
      }

      // CHARGE
      if (data.type === TIMELINE_EVENT_TYPE.CHARGE) {
        if (data.kWh == null || isNaN(data.kWh)) required('kWh');
        if (data.pricePerKWh == null || isNaN(data.pricePerKWh)) required('pricePerKWh');
        if (!data.chargeType) required('chargeType');
      }

      // SERVICE
      if (data.type === TIMELINE_EVENT_TYPE.SERVICE) {
        if (!data.serviceCategory) required('serviceCategory');
      }

      // DOCUMENT
      if (data.type === TIMELINE_EVENT_TYPE.DOCUMENT) {
        if (!data.documentType) required('documentType');
      }

      // EXPENSE
      if (data.type === TIMELINE_EVENT_TYPE.EXPENSE) {
        if (!data.expenseCategory) required('expenseCategory');
      }

      // TIRE_CHANGE
      if (data.type === TIMELINE_EVENT_TYPE.TIRE_CHANGE) {
        if (!data.tireId) required('tireId');
      }

      // TRIP
      if (data.type === TIMELINE_EVENT_TYPE.TRIP) {
        if (data.startMileage == null) required('startMileage');
        if (data.endMileage == null) required('endMileage');
        if (data.distanceKm == null || isNaN(data.distanceKm)) required('distanceKm');
        if (!data.purpose) required('purpose');
      }

      // PURCHASE
      if (data.type === TIMELINE_EVENT_TYPE.PURCHASE) {
        if (!data.purchasedFrom) required('purchasedFrom');
      }

      // SALE
      if (data.type === TIMELINE_EVENT_TYPE.SALE) {
        if (!data.soldTo) required('soldTo');
      }
    });

export type TimelineEventValues = z.infer<ReturnType<typeof createTimelineEventSchema>>;
