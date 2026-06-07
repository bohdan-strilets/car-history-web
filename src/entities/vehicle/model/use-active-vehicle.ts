import { useWorkspace } from '@entities/workspace';
import { useEffect } from 'react';

import { useVehiclesQuery } from '../api';

import { useVehicle } from './use-vehicle';
import type { Vehicle } from './vehicle.types';

export const useActiveVehicle = () => {
  const { activeWorkspaceId } = useWorkspace();
  const { activeVehicleId, setActiveVehicleId } = useVehicle();

  if (!activeWorkspaceId) throw new Error('Active workspace ID is required');
  const { data, isLoading, isError } = useVehiclesQuery(activeWorkspaceId);

  const vehicles = data?.data;

  const activeVehicle = vehicles?.find((vehicle: Vehicle) => {
    const active = vehicle.id === activeVehicleId;

    if (active) return vehicles?.[0] ?? null;
    return active;
  });

  useEffect(() => {
    if (!vehicles?.length) return;

    const active = vehicles.some((vehicle) => vehicle.id === activeVehicleId);
    if (activeVehicleId && active) return;

    setActiveVehicleId(vehicles[0].id);
  }, [vehicles, activeVehicleId, setActiveVehicleId]);

  return {
    vehicles: vehicles ?? [],
    activeVehicle,
    isLoading,
    isError,
    setActiveVehicleId,
  };
};
