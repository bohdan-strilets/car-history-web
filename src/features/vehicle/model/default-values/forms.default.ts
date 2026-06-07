import type { DescriptionValues, VehicleFormValues, VehicleSpecsValues } from '../schemes';
import type { Vehicle } from '@entities/vehicle';

// Get default values for edit vehicle specs form

export const editVehicleSpecsDefaultValues = (vehicle: Vehicle): VehicleSpecsValues => {
  return {
    engineCode: vehicle.specs?.engineCode ?? '',
    enginePowerHp: vehicle.specs?.enginePowerHp,
    enginePowerKw: vehicle.specs?.enginePowerKw,
    torqueNm: vehicle.specs?.torqueNm,
    cylindersCount: vehicle.specs?.cylindersCount,
    engineLayout: vehicle.specs?.engineLayout ?? '',
    turbo: vehicle.specs?.turbo,
    gearsCount: vehicle.specs?.gearsCount,
    fuelTankCapacity: vehicle.specs?.fuelTankCapacity,
    cityConsumption: vehicle.specs?.cityConsumption,
    highwayConsumption: vehicle.specs?.highwayConsumption,
    combinedConsumption: vehicle.specs?.combinedConsumption,
    batteryCapacityKwh: vehicle.specs?.batteryCapacityKwh,
    electricRangeKm: vehicle.specs?.electricRangeKm,
    accelerationSec: vehicle.specs?.accelerationSec,
    topSpeedKmh: vehicle.specs?.topSpeedKmh,
    lengthMm: vehicle.specs?.lengthMm,
    widthMm: vehicle.specs?.widthMm,
    heightMm: vehicle.specs?.heightMm,
    weightKg: vehicle.specs?.weightKg,
    wheelbaseMm: vehicle.specs?.wheelbaseMm,
    groundClearanceMm: vehicle.specs?.groundClearanceMm,
    trunkVolumeLiters: vehicle.specs?.trunkVolumeLiters,
    numberOfDoors: vehicle.specs?.numberOfDoors,
    numberOfSeats: vehicle.specs?.numberOfSeats,
    airbagsCount: vehicle.specs?.airbagsCount,
    euroStandard: vehicle.specs?.euroStandard ?? '',
    ncapRating: vehicle.specs?.ncapRating,
    co2EmissionGKm: vehicle.specs?.co2EmissionGKm,
    tireSizeFront: vehicle.specs?.tireSizeFront ?? '',
    tireSizeRear: vehicle.specs?.tireSizeRear ?? '',
  };
};

// Get default values for edit vehicle form

export const editVehicleFormDefaultValues = (vehicle: Vehicle): VehicleFormValues => {
  return {
    brand: vehicle.brand,
    model: vehicle.model,
    year: vehicle.year,
    generation: vehicle.generation ?? undefined,
    nickname: vehicle.nickname ?? undefined,
    fuelType: vehicle.fuelType,
    bodyType: vehicle.bodyType,
    transmission: vehicle.transmission,
    driveType: vehicle.driveType,
    plateNumber: vehicle.plateNumber,
    vin: vehicle.vin ?? undefined,
    countryOfOrigin: vehicle.countryOfOrigin ?? undefined,
    currentMileage: vehicle.currentMileage,
    engineDisplacementCc: vehicle.engineDisplacementCc,
    color: vehicle.color,
    description: vehicle.description ?? undefined,
  };
};

// Get default values for edit vehicle description form

export const editVehicleDescriptionDefaultValues = (vehicle: Vehicle): DescriptionValues => {
  return {
    description: vehicle.description ?? '',
  };
};
