import type { Vehicle } from '@entities/vehicle/model';

export interface VehicleOverviewProps {
  vehicle: Vehicle;
  actions?: React.ReactNode;
  onEditDescription?: () => void;
  onAddPurchase?: () => void;
  onAddSale?: () => void;
}
