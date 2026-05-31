import type { Vehicle } from '@entities/vehicle/model';

export interface VehicleCardProps {
  vehicle: Vehicle;
  onClick?: () => void;
}
