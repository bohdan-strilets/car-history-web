import {
  BODY_TYPE,
  DRIVE_TYPE,
  FUEL_TYPE,
  TRANSMISSION,
  VehicleConstraints,
} from '@entities/vehicle';
import type { TFunction } from 'i18next';
import { z } from 'zod';

// Step 1

export const createVehicleStep1Schema = (t: TFunction) =>
  z.object({
    brand: z
      .string(t('validation.REQUIRED'))
      .min(VehicleConstraints.BRAND_MIN, t('validation.TOO_SHORT'))
      .max(VehicleConstraints.BRAND_MAX, t('validation.TOO_LONG')),
    model: z
      .string(t('validation.REQUIRED'))
      .min(VehicleConstraints.MODEL_MIN, t('validation.TOO_SHORT'))
      .max(VehicleConstraints.MODEL_MAX, t('validation.TOO_LONG')),
    nickname: z.string().max(VehicleConstraints.NICKNAME_MAX, t('validation.TOO_LONG')).optional(),
    year: z
      .number({ error: t('validation.REQUIRED') })
      .int(t('validation.MUST_BE_INTEGER'))
      .min(VehicleConstraints.YEAR_MIN, t('validation.TOO_SMALL'))
      .max(new Date().getFullYear(), t('validation.TOO_LARGE')),
    generation: z
      .string()
      .max(VehicleConstraints.GENERATION_MAX, t('validation.TOO_LONG'))
      .optional(),
  });

// Step 2

export const createVehicleStep2Schema = (t: TFunction) =>
  z.object({
    fuelType: z.enum(FUEL_TYPE, t('validation.REQUIRED')),
    bodyType: z.enum(BODY_TYPE, t('validation.REQUIRED')),
    transmission: z.enum(TRANSMISSION, t('validation.REQUIRED')),
    driveType: z.enum(DRIVE_TYPE, t('validation.REQUIRED')),
  });

// Step 3

export const createVehicleStep3Schema = (t: TFunction) =>
  z.object({
    plateNumber: z
      .string(t('validation.REQUIRED'))
      .min(VehicleConstraints.PLATE_NUMBER_MIN, t('validation.TOO_SHORT'))
      .max(VehicleConstraints.PLATE_NUMBER_MAX, t('validation.TOO_LONG')),
    vin: z
      .string()
      .length(VehicleConstraints.VIN_LENGTH, t('validation.INVALID_FORMAT'))
      .optional()
      .or(z.literal('')),
    countryOfOrigin: z
      .string()
      .max(VehicleConstraints.COUNTRY_MAX, t('validation.TOO_LONG'))
      .optional(),
  });

// Step 4

export const createVehicleStep4Schema = (t: TFunction) =>
  z.object({
    currentMileage: z
      .number({ error: t('validation.REQUIRED') })
      .int(t('validation.MUST_BE_INTEGER'))
      .min(0, t('validation.MUST_BE_POSITIVE')),
    engineDisplacementCc: z
      .number({ error: t('validation.REQUIRED') })
      .int(t('validation.MUST_BE_INTEGER'))
      .min(0, t('validation.MUST_BE_POSITIVE')),
  });

// Step 5

export const createVehicleStep5Schema = (t: TFunction) =>
  z.object({
    color: z
      .string(t('validation.REQUIRED'))
      .min(1, t('validation.TOO_SHORT'))
      .max(VehicleConstraints.COLOR_MAX, t('validation.TOO_LONG')),
    description: z
      .string()
      .max(VehicleConstraints.DESCRIPTION_MAX, t('validation.TOO_LONG'))
      .optional(),
  });

// Combined schema for the entire form

export const createVehicleFormSchema = (t: TFunction) =>
  createVehicleStep1Schema(t)
    .merge(createVehicleStep2Schema(t))
    .merge(createVehicleStep3Schema(t))
    .merge(createVehicleStep4Schema(t))
    .merge(createVehicleStep5Schema(t));

// Types for form values

export type VehicleStep1Values = z.infer<ReturnType<typeof createVehicleStep1Schema>>;
export type VehicleStep2Values = z.infer<ReturnType<typeof createVehicleStep2Schema>>;
export type VehicleStep3Values = z.infer<ReturnType<typeof createVehicleStep3Schema>>;
export type VehicleStep4Values = z.infer<ReturnType<typeof createVehicleStep4Schema>>;
export type VehicleStep5Values = z.infer<ReturnType<typeof createVehicleStep5Schema>>;

// Combined type for all steps

export type VehicleFormValues = VehicleStep1Values &
  VehicleStep2Values &
  VehicleStep3Values &
  VehicleStep4Values &
  VehicleStep5Values;
