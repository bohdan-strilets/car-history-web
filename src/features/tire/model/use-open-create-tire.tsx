import { useTranslation } from 'react-i18next';

import { useAdaptiveModal } from '@shared/lib/modal';

import { CreateTireForm } from '../ui';

import type { OpenCreateTireParams } from './tire.types';

export const useOpenCreateTire = ({ workspaceId, vehicleId }: OpenCreateTireParams) => {
  const { t } = useTranslation();
  const modal = useAdaptiveModal();

  const handleCreate = () => {
    const id = modal.open(
      <CreateTireForm
        workspaceId={workspaceId}
        vehicleId={vehicleId}
        onSuccess={() => modal.close(id)}
      />,
      { title: t('tire.actions.add') },
    );
  };

  return { handleCreate };
};
