import z from 'zod';

import { VehicleConstraints } from '@entities/vehicle';

import type { TFunction } from 'i18next';

const positiveInt = (t: TFunction) => {
  return z.number().int(t('validation.MUST_BE_INTEGER')).positive(t('validation.MUST_BE_POSITIVE'));
};

const positiveFloat = (t: TFunction) => {
  return z.number().positive(t('validation.MUST_BE_POSITIVE'));
};

export const createVehicleSpecsSchema = (t: TFunction) =>
  z.object({
    engineCode: z.string().optional(),
    enginePowerHp: positiveInt(t)
      .max(VehicleConstraints.ENGINE_POWER_HP_MAX, t('validation.TOO_LARGE'))
      .optional(),
    enginePowerKw: positiveInt(t)
      .max(VehicleConstraints.ENGINE_POWER_KW_MAX, t('validation.TOO_LARGE'))
      .optional(),
    torqueNm: positiveInt(t)
      .max(VehicleConstraints.TORQUE_NM_MAX, t('validation.TOO_LARGE'))
      .optional(),
    cylindersCount: positiveInt(t)
      .max(VehicleConstraints.CYLINDERS_MAX, t('validation.TOO_LARGE'))
      .optional(),
    engineLayout: z.string().optional(),
    turbo: z.boolean().optional(),
    gearsCount: positiveInt(t)
      .max(VehicleConstraints.GEARS_MAX, t('validation.TOO_LARGE'))
      .optional(),
    fuelTankCapacity: positiveFloat(t)
      .max(VehicleConstraints.FUEL_TANK_MAX, t('validation.TOO_LARGE'))
      .optional(),
    cityConsumption: positiveFloat(t)
      .max(VehicleConstraints.CONSUMPTION_MAX, t('validation.TOO_LARGE'))
      .optional(),
    highwayConsumption: positiveFloat(t)
      .max(VehicleConstraints.CONSUMPTION_MAX, t('validation.TOO_LARGE'))
      .optional(),
    combinedConsumption: positiveFloat(t)
      .max(VehicleConstraints.CONSUMPTION_MAX, t('validation.TOO_LARGE'))
      .optional(),
    batteryCapacityKwh: positiveFloat(t)
      .max(VehicleConstraints.BATTERY_KWH_MAX, t('validation.TOO_LARGE'))
      .optional(),
    electricRangeKm: positiveInt(t)
      .max(VehicleConstraints.ELECTRIC_RANGE_MAX, t('validation.TOO_LARGE'))
      .optional(),
    accelerationSec: positiveFloat(t)
      .max(VehicleConstraints.ACCELERATION_MAX, t('validation.TOO_LARGE'))
      .optional(),
    topSpeedKmh: positiveInt(t)
      .max(VehicleConstraints.TOP_SPEED_MAX, t('validation.TOO_LARGE'))
      .optional(),
    lengthMm: positiveInt(t)
      .max(VehicleConstraints.LENGTH_MAX, t('validation.TOO_LARGE'))
      .optional(),
    widthMm: positiveInt(t).max(VehicleConstraints.WIDTH_MAX, t('validation.TOO_LARGE')).optional(),
    heightMm: positiveInt(t)
      .max(VehicleConstraints.HEIGHT_MAX, t('validation.TOO_LARGE'))
      .optional(),
    weightKg: positiveInt(t)
      .max(VehicleConstraints.WEIGHT_MAX, t('validation.TOO_LARGE'))
      .optional(),
    wheelbaseMm: positiveInt(t)
      .max(VehicleConstraints.WHEELBASE_MAX, t('validation.TOO_LARGE'))
      .optional(),
    groundClearanceMm: positiveInt(t)
      .max(VehicleConstraints.GROUND_CLEARANCE_MAX, t('validation.TOO_LARGE'))
      .optional(),
    trunkVolumeLiters: positiveInt(t)
      .max(VehicleConstraints.TRUNK_MAX, t('validation.TOO_LARGE'))
      .optional(),
    numberOfDoors: positiveInt(t)
      .max(VehicleConstraints.DOORS_MAX, t('validation.TOO_LARGE'))
      .optional(),
    numberOfSeats: positiveInt(t)
      .max(VehicleConstraints.SEATS_MAX, t('validation.TOO_LARGE'))
      .optional(),
    airbagsCount: positiveInt(t)
      .max(VehicleConstraints.AIRBAGS_MAX, t('validation.TOO_LARGE'))
      .optional(),
    euroStandard: z
      .string()
      .max(VehicleConstraints.EURO_STANDARD_MAX, t('validation.TOO_LONG'))
      .optional(),
    ncapRating: z
      .number()
      .int(t('validation.MUST_BE_INTEGER'))
      .min(VehicleConstraints.NCAP_MIN, t('validation.TOO_SMALL'))
      .max(VehicleConstraints.NCAP_MAX, t('validation.TOO_LARGE'))
      .optional(),
    co2EmissionGKm: positiveInt(t)
      .max(VehicleConstraints.CO2_MAX, t('validation.TOO_LARGE'))
      .optional(),
    tireSizeFront: z
      .string()
      .max(VehicleConstraints.TIRE_SIZE_MAX, t('validation.TOO_LONG'))
      .optional(),
    tireSizeRear: z
      .string()
      .max(VehicleConstraints.TIRE_SIZE_MAX, t('validation.TOO_LONG'))
      .optional(),
  });

export type VehicleSpecsValues = z.infer<ReturnType<typeof createVehicleSpecsSchema>>;
