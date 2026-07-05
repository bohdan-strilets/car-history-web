import { useTranslation } from 'react-i18next';

import { TIRE_STATUS, TireDetail } from '@entities/tire';
import { useAdaptiveModal, useConfirmModal } from '@shared/lib/modal';

import { useDeleteTireMutation, useUpdateTireMutation } from '../api';
import { useOpenEditTire, type TireDetailModalProps } from '../model';

export const TireDetailModal = ({ tire, vehicleId }: TireDetailModalProps) => {
  const { t } = useTranslation();
  const modal = useAdaptiveModal();
  const { confirm } = useConfirmModal();

  const updateMutation = useUpdateTireMutation(vehicleId);
  const deleteMutation = useDeleteTireMutation(vehicleId);
  const { handleEdit } = useOpenEditTire({ vehicleId });

  const handleMount = () => {
    updateMutation.mutate(
      { tireId: tire.id, dto: { status: TIRE_STATUS.MOUNTED } },
      { onSuccess: () => modal.closeAll() },
    );
  };

  const handleUnmount = () => {
    updateMutation.mutate(
      { tireId: tire.id, dto: { status: TIRE_STATUS.STORED } },
      { onSuccess: () => modal.closeAll() },
    );
  };

  const handleRetire = () => {
    confirm(
      {
        title: t('tire.actions.retire'),
        description: t('tire.actions.retireConfirm'),
        confirmLabel: t('common.actions.confirm'),
        cancelLabel: t('common.actions.cancel'),
        warning: true,
      },
      {
        onConfirm: (done) => {
          updateMutation.mutate(
            { tireId: tire.id, dto: { status: TIRE_STATUS.RETIRED } },
            { onSuccess: done },
          );
        },
      },
    );
  };

  const handleDelete = () => {
    confirm(
      {
        title: t('tire.actions.delete'),
        description: t('tire.actions.deleteConfirm'),
        confirmLabel: t('common.actions.delete'),
        cancelLabel: t('common.actions.cancel'),
        danger: true,
      },
      {
        onConfirm: (done) => {
          deleteMutation.mutate(tire.id, {
            onSuccess: () => {
              done();
              modal.closeAll();
            },
          });
        },
      },
    );
  };

  return (
    <TireDetail
      tire={tire}
      onEdit={() => handleEdit(tire)}
      onMount={handleMount}
      onUnmount={handleUnmount}
      onRetire={handleRetire}
      onDelete={handleDelete}
      isMounting={updateMutation.isPending}
      isUnmounting={updateMutation.isPending}
      isRetiring={updateMutation.isPending}
    />
  );
};
