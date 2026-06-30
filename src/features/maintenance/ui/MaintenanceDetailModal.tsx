import { useTranslation } from 'react-i18next';

import { MaintenanceDetail } from '@entities/maintenance';
import { useAdaptiveModal, useConfirmModal } from '@shared/lib/modal';

import {
  useDeleteMaintenanceIntervalMutation,
  useDisableMaintenanceIntervalMutation,
  useEnableMaintenanceIntervalMutation,
  useMarkDoneMaintenanceIntervalMutation,
} from '../api';

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

  const markDone = useMarkDoneMaintenanceIntervalMutation({
    workspaceId,
    vehicleId,
    maintenanceId: interval.id,
    onSuccess: () => modal.closeAll(),
  });

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
    confirm(
      {
        title: t('maintenance.actions.markDone'),
        description: t('maintenance.actions.markDoneConfirm'),
        confirmLabel: t('common.actions.confirm'),
        cancelLabel: t('common.actions.cancel'),
        success: true,
      },
      {
        onConfirm: (done) => {
          markDone.mutate(currentMileage, { onSuccess: done });
        },
      },
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

  return (
    <MaintenanceDetail
      interval={interval}
      currentMileage={currentMileage}
      onMarkDone={handleMarkDone}
      onDisable={handleDisable}
      onEnable={handleEnable}
      onDelete={handleDelete}
      onEdit={() => {}}
    />
  );
};
