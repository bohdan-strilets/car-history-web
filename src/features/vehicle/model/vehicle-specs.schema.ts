import z from 'zod';

export const createVehicleSpecsSchema = () =>
  z.object({
    engineCode: z.string().optional(),
    enginePowerHp: z.number().int().positive().optional(),
    enginePowerKw: z.number().int().positive().optional(),
    torqueNm: z.number().int().positive().optional(),
    cylindersCount: z.number().int().positive().optional(),
    engineLayout: z.string().optional(),
    turbo: z.boolean().optional(),
    gearsCount: z.number().int().positive().optional(),
    fuelTankCapacity: z.number().positive().optional(),
    cityConsumption: z.number().positive().optional(),
    highwayConsumption: z.number().positive().optional(),
    combinedConsumption: z.number().positive().optional(),
    batteryCapacityKwh: z.number().positive().optional(),
    electricRangeKm: z.number().int().positive().optional(),
    accelerationSec: z.number().positive().optional(),
    topSpeedKmh: z.number().int().positive().optional(),
    lengthMm: z.number().int().positive().optional(),
    widthMm: z.number().int().positive().optional(),
    heightMm: z.number().int().positive().optional(),
    weightKg: z.number().int().positive().optional(),
    wheelbaseMm: z.number().int().positive().optional(),
    groundClearanceMm: z.number().int().positive().optional(),
    trunkVolumeLiters: z.number().int().positive().optional(),
    numberOfDoors: z.number().int().positive().optional(),
    numberOfSeats: z.number().int().positive().optional(),
    airbagsCount: z.number().int().positive().optional(),
    euroStandard: z.string().optional(),
    ncapRating: z.number().int().min(1).max(5).optional(),
    co2EmissionGKm: z.number().int().positive().optional(),
    tireSizeFront: z.string().optional(),
    tireSizeRear: z.string().optional(),
  });

export type VehicleSpecsValues = z.infer<ReturnType<typeof createVehicleSpecsSchema>>;
