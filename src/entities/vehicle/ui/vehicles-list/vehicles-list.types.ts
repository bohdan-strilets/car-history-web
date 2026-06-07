import type { Vehicle } from '@entities/vehicle';

export interface VehiclesListProps {
  vehicles: Vehicle[];
  onSelect?: (vehicle: Vehicle) => void;
}
