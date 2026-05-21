import type { VehicleFormValues } from './vehicle.schema';

export const VEHICLE_FORM_TOTAL_STEPS = 5;

export const VEHICLE_STEP_FIELDS: Record<number, (keyof VehicleFormValues)[]> = {
  1: ['brand', 'model', 'nickname', 'year', 'generation'],
  2: ['fuelType', 'bodyType', 'transmission', 'driveType'],
  3: ['plateNumber', 'vin', 'countryOfOrigin'],
  4: ['currentMileage', 'engineDisplacementCc'],
  5: ['color', 'description'],
};
