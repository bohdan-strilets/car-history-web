import type { ServiceStation } from '../../model';

export interface ServiceStationsMapProps {
  stations: ServiceStation[];
  onStationClick?: (station: ServiceStation) => void;
}
