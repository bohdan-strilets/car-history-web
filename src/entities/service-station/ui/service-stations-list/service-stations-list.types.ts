import type { ServiceStation } from '@entities/service-station';

export interface ServiceStationsListProps {
  stations: ServiceStation[];
  onStationClick?: (station: ServiceStation) => void;
  onToggleFavorite?: (station: ServiceStation) => void;
}
