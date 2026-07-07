import { useTranslation } from 'react-i18next';

import { useAdaptiveModal } from '@shared/lib/modal';

import { CreateServiceStationForm } from '../ui';

export const useOpenCreateServiceStation = () => {
  const { t } = useTranslation();
  const modal = useAdaptiveModal();

  const handleCreate = () => {
    const id = modal.open(<CreateServiceStationForm onSuccess={() => modal.close(id)} />, {
      title: t('serviceStation.actions.add'),
    });
  };

  return { handleCreate };
};
