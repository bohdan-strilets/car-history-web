import type { Vehicle } from '@entities/vehicle';

export interface VehicleOverviewProps {
  vehicle: Vehicle;
  actions?: React.ReactNode;
  onEditDescription?: () => void;
  onAddPurchase?: () => void;
  onAddSale?: () => void;
}
