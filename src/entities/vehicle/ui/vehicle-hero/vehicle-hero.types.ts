import type { Vehicle } from '@entities/vehicle/model';

export interface VehicleHeroProps {
  vehicle: Vehicle;
  actions?: React.ReactNode;
}
