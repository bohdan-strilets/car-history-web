import type { Tire } from '@entities/tire';
import { useAdaptiveModal } from '@shared/lib/modal';

import { TireDetailModal } from '../ui';

import type { OpenTireDetailParams } from './tire.types';

export const useOpenTireDetail = ({ vehicleId }: OpenTireDetailParams) => {
  const modal = useAdaptiveModal();

  const handleOpen = (tire: Tire) => {
    modal.open(<TireDetailModal tire={tire} vehicleId={vehicleId} />, {
      title: `${tire.brand} ${tire.model}`,
    });
  };

  return { handleOpen };
};
