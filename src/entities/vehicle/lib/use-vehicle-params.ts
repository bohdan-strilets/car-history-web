import { useParams } from 'react-router-dom';

type VehicleParams = {
  workspaceId: string;
  vehicleId: string;
};

export const useVehicleParams = () => {
  const { workspaceId = '', vehicleId = '' } = useParams<VehicleParams>();
  return { workspaceId, vehicleId };
};
