import type { Vehicle } from '@entities/vehicle';

export interface VehicleCardProps {
  vehicle: Vehicle;
  onClick?: () => void;
}
