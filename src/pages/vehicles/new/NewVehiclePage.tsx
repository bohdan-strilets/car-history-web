import { VehicleForm } from '@features/vehicle/ui/VehicleForm';
import { ROUTES } from '@shared/config';
import { Stack } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

export const NewVehiclePage = () => {
  const { t } = useTranslation();
  const { workspaceId } = useParams<{ workspaceId: string }>();
  const navigate = useNavigate();

  return (
    <Stack gap="2xl">
      <PageHeader
        title={t('vehicle.new.title')}
        buttonLabel={t('common.back')}
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
