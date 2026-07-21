import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { useActiveVehicle, type Vehicle } from '@entities/vehicle';
import { useActiveWorkspace } from '@entities/workspace';
import { ROUTES, SEARCH_PARAM_TAB } from '@shared/config';

export const useVehicleSwitcher = () => {
  const navigate = useNavigate();
  const { vehicleId: routeVehicleId } = useParams<{ vehicleId?: string }>();
  const [searchParams] = useSearchParams();

  const { activeWorkspaceId } = useActiveWorkspace();
  const { vehicles, activeVehicle, setActiveVehicleId } = useActiveVehicle();

  const selectVehicle = (vehicle: Vehicle) => {
    setActiveVehicleId(vehicle.id);

    if (activeWorkspaceId && routeVehicleId && routeVehicleId !== vehicle.id) {
      const tab = searchParams.get(SEARCH_PARAM_TAB);
      const path = ROUTES.WORKSPACES.VEHICLES.DETAIL(activeWorkspaceId, vehicle.id);
      navigate(tab ? `${path}?${SEARCH_PARAM_TAB}=${tab}` : path);
    }
  };

  return { vehicles, activeVehicle, activeWorkspaceId, selectVehicle };
};
