import { useTranslation } from 'react-i18next';

import { TIRE_STATUS, TireDetail, useTireHistoryQuery, type Tire } from '@entities/tire';
import type { VehicleId } from '@entities/vehicle';
import { useAdaptiveModal, useConfirmModal } from '@shared/lib/modal';

import { useDeleteTireMutation, useUpdateTireMutation } from '../api';
import { useOpenEditTire } from '../model';

interface TireDetailModalProps {
  tire: Tire;
  vehicleId: VehicleId;
}

export const TireDetailModal = ({ tire, vehicleId }: TireDetailModalProps) => {
  const { t } = useTranslation();
  const modal = useAdaptiveModal();
  const { confirm } = useConfirmModal();

  const updateMutation = useUpdateTireMutation(vehicleId);
  const deleteMutation = useDeleteTireMutation(vehicleId);
  const { handleEdit } = useOpenEditTire({ vehicleId });
  const { data: historyData, isPending: isHistoryLoading } = useTireHistoryQuery(tire.id);

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
      periods={historyData?.data.history.periods}
      totalKmDriven={historyData?.data.history.totalKmDriven}
      isHistoryLoading={isHistoryLoading}
      onEdit={() => handleEdit(tire)}
      onRetire={handleRetire}
      onDelete={handleDelete}
      isRetiring={updateMutation.isPending}
    />
  );
};
