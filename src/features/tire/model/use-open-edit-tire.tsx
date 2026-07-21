import { useTranslation } from 'react-i18next';

import type { Tire } from '@entities/tire';
import { useAdaptiveModal } from '@shared/lib/modal';

import { UpdateTireForm } from '../ui';

import type { OpenEditTireParams } from './tire.types';

export const useOpenEditTire = ({ workspaceId, vehicleId }: OpenEditTireParams) => {
  const { t } = useTranslation();
  const modal = useAdaptiveModal();

  const handleEdit = (tire: Tire) => {
    const id = modal.open(
      <UpdateTireForm
        workspaceId={workspaceId}
        vehicleId={vehicleId}
        tireId={tire.id}
        tire={tire}
        onSuccess={() => modal.close(id)}
      />,
      { title: t('tire.actions.edit') },
    );
  };

  return { handleEdit };
};
