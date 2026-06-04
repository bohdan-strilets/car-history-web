import { useDeleteVehicleMutation } from '@features/vehicle/api';
import { ROUTES } from '@shared/config';
import { useConfirmModal } from '@shared/lib/modal';
import { Button, Icon } from '@shared/ui';
import { Dropdown, DropdownItem } from '@shared/ui/components/dropdown';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import type { VehicleActionsProps } from './vehicle-actions.types';

export const VehicleActions = ({
  vehicleId,
  workspaceId,
  canDelete,
  canEdit,
}: VehicleActionsProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { confirm } = useConfirmModal();
  const { mutate: deleteVehicle } = useDeleteVehicleMutation();

  const handleDelete = () => {
    confirm(
      {
        title: t('vehicle.detail.delete'),
        description: t('vehicle.detail.deleteConfirm'),
        danger: true,
      },
      {
        onConfirm: (close) => {
          deleteVehicle(
            { id: vehicleId, workspaceId },
            {
              onSuccess: () => {
                close();
                navigate(ROUTES.WORKSPACES.DETAIL(workspaceId));
              },
            },
          );
        },
      },
    );
  };

  if (!canEdit && !canDelete) return null;

  return (
    <Dropdown
      direction="bottom"
      align="end"
      trigger={
        <Button iconOnly variant="ghost">
          <Icon name="dots" color="onColor" />
        </Button>
      }
    >
      {canEdit && (
        <DropdownItem
          label={t('vehicle.detail.edit')}
          leftIcon="edit"
          onClick={() => navigate(ROUTES.WORKSPACES.VEHICLES.EDIT(workspaceId, vehicleId))}
        />
      )}
      {canEdit && (
        <DropdownItem
          label={t('vehicle.detail.editSpecs')}
          leftIcon="settings"
          onClick={() => navigate(ROUTES.WORKSPACES.VEHICLES.EDIT_SPECS(workspaceId, vehicleId))}
        />
      )}
      {canDelete && (
        <DropdownItem
          label={t('vehicle.detail.delete')}
          leftIcon="trash"
          danger
          onClick={handleDelete}
        />
      )}
    </Dropdown>
  );
};
