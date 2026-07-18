import { useEffect } from 'react';

import { useActiveWorkspace } from '@entities/workspace';

import { useVehiclesQuery } from '../api';

import { useVehicle } from './use-vehicle';

import type { Vehicle } from './vehicle.types';

export const useActiveVehicle = () => {
  const { activeWorkspaceId } = useActiveWorkspace();
  const { activeVehicleId, setActiveVehicleId } = useVehicle();

  const { data, isLoading, isError } = useVehiclesQuery(activeWorkspaceId ?? '');

  const vehicles = data?.data;

  const activeVehicle = vehicles?.find((vehicle: Vehicle) => vehicle.id === activeVehicleId);

  useEffect(() => {
    if (!vehicles?.length) return;

    const isActiveVehicleValid = vehicles.some((vehicle) => vehicle.id === activeVehicleId);
    if (activeVehicleId && isActiveVehicleValid) return;

    setActiveVehicleId(vehicles[0].id);
  }, [vehicles, activeVehicleId, setActiveVehicleId]);

  return {
    vehicles: vehicles ?? [],
    activeVehicle,
    isLoading: isLoading || !activeWorkspaceId,
    isError,
    setActiveVehicleId,
  };
};
