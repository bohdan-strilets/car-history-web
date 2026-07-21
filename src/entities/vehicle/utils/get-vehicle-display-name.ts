import type { Vehicle } from '@entities/vehicle';

export const getVehicleDisplayName = (
  vehicle: Pick<Vehicle, 'brand' | 'model' | 'nickname'>,
): string => (vehicle.nickname?.trim() ? vehicle.nickname : `${vehicle.brand} ${vehicle.model}`);
