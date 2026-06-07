import { useNavigate } from 'react-router-dom';

import { useEditVehicleDescription } from '@features/vehicle';
import { ROUTES } from '@shared/config';

import { VehicleActions } from '../vehicle-actions';
import { VehicleOverview } from '../vehicle-overview';

import type { OverviewTabProps } from './vehicle-tabs.types';

export const OverviewTab = ({
  vehicle,
  workspaceId,
  vehicleId,
  canEdit,
  canDelete,
}: OverviewTabProps) => {
  const navigate = useNavigate();

  const timelineUrl = ROUTES.WORKSPACES.VEHICLES.DETAIL(workspaceId, vehicleId);

  const { handleEditDescription } = useEditVehicleDescription();

  const handleAddPurchase = () => {
    navigate(`${timelineUrl}?tab=timeline&action=purchase`);
  };

  const handleAddSale = () => {
    navigate(`${timelineUrl}?tab=timeline&action=sale`);
  };

  return (
    <VehicleOverview
      vehicle={vehicle}
      actions={
        <VehicleActions
          vehicleId={vehicleId}
          workspaceId={workspaceId}
          canEdit={canEdit}
          canDelete={canDelete}
        />
      }
      onEditDescription={() => handleEditDescription(vehicle)}
      onAddPurchase={handleAddPurchase}
      onAddSale={handleAddSale}
    />
  );
};
