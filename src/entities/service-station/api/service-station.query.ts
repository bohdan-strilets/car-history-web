import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { serviceStationApi } from './service-station.api';

export const useServiceStationsQuery = () =>
  useQuery({
    queryKey: queryKeys.serviceStations.all(),
    queryFn: () => serviceStationApi.getAll(),
  });

export const useServiceStationQuery = (id: string) =>
  useQuery({
    queryKey: queryKeys.serviceStations.detail(id),
    queryFn: () => serviceStationApi.getById(id),
    enabled: !!id,
  });
