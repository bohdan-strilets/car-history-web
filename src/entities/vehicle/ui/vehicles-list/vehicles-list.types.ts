import type { Vehicle } from '@entities/vehicle/model';

export interface VehiclesListProps {
  vehicles: Vehicle[];
  onSelect?: (vehicle: Vehicle) => void;
}
