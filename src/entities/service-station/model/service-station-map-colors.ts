import { SERVICE_STATION_TYPE, type ServiceStationType } from './service-station.constants';

const PIN_COLORS: Record<ServiceStationType, string> = {
  [SERVICE_STATION_TYPE.MECHANIC]: '#3B82F6',
  [SERVICE_STATION_TYPE.TIRE_SHOP]: '#F97316',
  [SERVICE_STATION_TYPE.CAR_WASH]: '#38BDF8',
  [SERVICE_STATION_TYPE.FUEL_STATION]: '#22C55E',
  [SERVICE_STATION_TYPE.DEALERSHIP]: '#8B5CF6',
  [SERVICE_STATION_TYPE.OTHER]: '#64748B',
};

export const getServiceStationPinColor = (type: ServiceStationType): string => PIN_COLORS[type];
