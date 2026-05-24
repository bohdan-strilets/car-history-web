import { useVehicleStore } from './vehicle.store';

export const useVehicle = () => {
  const { activeVehicleId, clearActiveVehicleId, setActiveVehicleId } = useVehicleStore();

  return {
    activeVehicleId,
    setActiveVehicleId,
    clearActiveVehicleId,
  };
};
