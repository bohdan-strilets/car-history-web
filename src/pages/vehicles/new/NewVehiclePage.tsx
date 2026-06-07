import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useWorkspaceId } from '@entities/workspace';
import { VehicleForm } from '@features/vehicle';
import { ROUTES } from '@shared/config';
import { Stack } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';

export const NewVehiclePage = () => {
  const { t } = useTranslation();
  const workspaceId = useWorkspaceId();
  const navigate = useNavigate();

  return (
    <Stack gap="2xl">
      <PageHeader
        title={t('vehicle.new.title')}
        buttonLabel={t('common.actions.back')}
        buttonIcon="arrowLeft"
        onCreate={() => navigate(ROUTES.WORKSPACES.DETAIL(workspaceId ?? ''))}
      />
      <VehicleForm
        workspaceId={workspaceId ?? ''}
        onSuccess={(vehicle) =>
          navigate(ROUTES.WORKSPACES.VEHICLES.DETAIL(workspaceId ?? '', vehicle.id))
        }
      />
    </Stack>
  );
};
