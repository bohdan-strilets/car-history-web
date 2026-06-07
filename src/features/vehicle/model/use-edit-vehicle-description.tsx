import { useTranslation } from 'react-i18next';

import { EditVehicleDescriptionModal } from '@features/vehicle';
import { useModal } from '@shared/ui';

import type { Vehicle } from '@entities/vehicle';

export const useEditVehicleDescription = () => {
  const { t } = useTranslation();
  const modal = useModal();

  const handleEditDescription = (vehicle: Vehicle) => {
    modal.open(
      <EditVehicleDescriptionModal vehicle={vehicle} onSuccess={() => modal.closeLast()} />,
      { title: t('vehicle.overview.sections.description') },
    );
  };

  return { handleEditDescription };
};
