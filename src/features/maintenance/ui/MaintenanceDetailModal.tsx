import { useTranslation } from 'react-i18next';

import { MaintenanceDetail } from '@entities/maintenance';
import { useAdaptiveModal, useConfirmModal } from '@shared/lib/modal';
import { Hint, Stack } from '@shared/ui';

import {
  useDeleteMaintenanceIntervalMutation,
  useDisableMaintenanceIntervalMutation,
  useEnableMaintenanceIntervalMutation,
} from '../api';

import { EditMaintenanceIntervalForm } from './EditMaintenanceIntervalForm';
import { MarkMaintenanceDoneForm } from './MarkMaintenanceDoneForm';

import type { MaintenanceDetailModalProps } from '../model';

export const MaintenanceDetailModal = ({
  interval,
  workspaceId,
  vehicleId,
  currentMileage,
}: MaintenanceDetailModalProps) => {
  const { t } = useTranslation();
  const modal = useAdaptiveModal();
  const { confirm } = useConfirmModal();

  const disable = useDisableMaintenanceIntervalMutation({
    workspaceId,
    vehicleId,
    maintenanceId: interval.id,
    onSuccess: () => modal.closeAll(),
  });

  const enable = useEnableMaintenanceIntervalMutation({
    workspaceId,
    vehicleId,
    maintenanceId: interval.id,
    onSuccess: () => modal.closeAll(),
  });

  const remove = useDeleteMaintenanceIntervalMutation({
    workspaceId,
    vehicleId,
    maintenanceId: interval.id,
    onSuccess: () => modal.closeAll(),
  });

  const handleMarkDone = () => {
    modal.open(
      <Stack gap="md">
        <Hint message={t('maintenance.actions.markDoneDescription')} variant="info" />
        <MarkMaintenanceDoneForm
          workspaceId={workspaceId}
          vehicleId={vehicleId}
          maintenanceId={interval.id}
          currentMileage={currentMileage}
          onSuccess={() => modal.closeAll()}
        />
      </Stack>,
      { title: t('maintenance.actions.markDone') },
    );
  };

  const handleDisable = () => {
    confirm(
      {
        title: t('maintenance.actions.disable'),
        description: t('maintenance.actions.disableConfirm'),
        confirmLabel: t('common.actions.confirm'),
        cancelLabel: t('common.actions.cancel'),
        warning: true,
      },
      {
        onConfirm: (done) => {
          disable.mutate(undefined, { onSuccess: done });
        },
      },
    );
  };

  const handleEnable = () => {
    enable.mutate(undefined);
  };

  const handleDelete = () => {
    confirm(
      {
        title: t('maintenance.actions.delete'),
        description: t('maintenance.actions.deleteConfirm'),
        confirmLabel: t('common.actions.delete'),
        cancelLabel: t('common.actions.cancel'),
        danger: true,
      },
      {
        onConfirm: (done) => {
          remove.mutate(undefined, { onSuccess: done });
        },
      },
    );
  };

  const handleEdit = () => {
    modal.open(
      <EditMaintenanceIntervalForm
        workspaceId={workspaceId}
        vehicleId={vehicleId}
        interval={interval}
        onSuccess={() => modal.closeAll()}
      />,
      { title: t('maintenance.actions.edit') },
    );
  };

  return (
    <MaintenanceDetail
      interval={interval}
      currentMileage={currentMileage}
      onMarkDone={handleMarkDone}
      onDisable={handleDisable}
      onEnable={handleEnable}
      onDelete={handleDelete}
      onEdit={handleEdit}
    />
  );
};
