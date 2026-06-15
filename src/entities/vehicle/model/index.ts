export { useActiveVehicle } from './use-active-vehicle';
export { useVehicle } from './use-vehicle';
export { useVehicleTab } from './use-vehicle-tab';
export { useVehicleStore } from './vehicle.store';

export { DEFAULT_VEHICLE_TAB, VEHICLE_TABS, type VehicleTab } from './vehicle-tabs.config';

export {
  BODY_TYPE_CONFIG,
  DRIVE_TYPE_CONFIG,
  FUEL_TYPE_CONFIG,
  REFUEL_TYPE_CONFIG,
  TRANSMISSION_CONFIG,
  VEHICLE_COLORS_CONFIG,
  VEHICLE_POPULAR_BRANDS_CONFIG,
} from './vehicle.config';

export {
  BODY_TYPE,
  DRIVE_TYPE,
  FUEL_TYPE,
  REFUEL_TYPE,
  TRANSMISSION,
  VEHICLE_STATUS,
  type BodyType,
  type DriveType,
  type FuelType,
  type RefuelType,
  type Transmission,
  type VehicleStatus,
} from './vehicle.constants';
export { VehicleConstraints } from './vehicle.constraints';

export {
  VEHICLE_BRANDS,
  VEHICLE_MODELS,
  VEHICLE_POPULAR_BRANDS,
  type VehicleBrand,
  type VehiclePopularBrand,
} from './vehicle.data';
export { VEHICLE_GENERATIONS } from './vehicle.generations';

export type {
  Vehicle,
  VehicleId,
  VehicleOwner,
  VehiclePurchaseInfo,
  VehicleSaleInfo,
  VehicleSpecs,
  VehicleStore,
} from './vehicle.types';
