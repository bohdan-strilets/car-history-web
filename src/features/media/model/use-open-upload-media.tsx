import { useTranslation } from 'react-i18next';

import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { useAdaptiveModal } from '@shared/lib/modal';

import { UploadMediaForm } from '../ui';

interface OpenUploadMediaParams {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
}

export const useOpenUploadMedia = ({ workspaceId, vehicleId }: OpenUploadMediaParams) => {
  const { t } = useTranslation();
  const modal = useAdaptiveModal();

  const handleOpen = () => {
    modal.open(<UploadMediaForm workspaceId={workspaceId} vehicleId={vehicleId} />, {
      title: t('media.uploader.title'),
    });
  };

  return { handleOpen };
};
