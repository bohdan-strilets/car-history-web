import type { ServiceStation } from '@entities/service-station';

export interface ServiceStationCardProps {
  station: ServiceStation;
  onClick?: () => void;
  onToggleFavorite?: () => void;
}
