import { useWorkspace } from '@entities/workspace';
import { useEffect } from 'react';

import { useVehiclesQuery } from '../api';

import { useVehicle } from './use-vehicle';
import type { Vehicle } from './vehicle.types';

export const useActiveVehicle = () => {
  const { activeWorkspaceId } = useWorkspace();
  const { activeVehicleId, setActiveVehicleId } = useVehicle();

  const { data, isLoading, isError } = useVehiclesQuery(activeWorkspaceId ?? '');

  const vehicles = data?.data;

  const activeVehicle =
    vehicles?.find((vehicle: Vehicle) => vehicle.id === activeVehicleId) ?? vehicles?.[0] ?? null;

  useEffect(() => {
    if (!vehicles?.length) return;
    if (activeVehicleId && vehicles.some((vehicle) => vehicle.id === activeVehicleId)) return;
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
