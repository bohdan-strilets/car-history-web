import type { Vehicle } from '@entities/vehicle';
import type { BadgeProps } from '@shared/ui';

export interface VehicleCardDocumentBadge {
  label: string;
  color: NonNullable<BadgeProps['soft']>;
}

export interface VehicleCardProps {
  vehicle: Vehicle;
  onClick?: () => void;
  documentBadge?: VehicleCardDocumentBadge;
}
