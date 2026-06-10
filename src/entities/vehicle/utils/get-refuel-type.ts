import { REFUEL_TYPE, type FuelType, type RefuelType } from '../model';

export const getRefuelType = (fuelTypes: FuelType[]): RefuelType =>
  fuelTypes.find((f): f is RefuelType => f in REFUEL_TYPE) ?? REFUEL_TYPE.PETROL;
