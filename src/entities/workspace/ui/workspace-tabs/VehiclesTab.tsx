import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { VehiclesList, VehiclesListSkeleton } from '@entities/vehicle';
import { ROUTES } from '@shared/config';
import { Stack, StateView } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';

import type { VehiclesTabProps } from './workspace-tabs.types';

export const VehiclesTab = ({ workspaceId, vehicles, isPending }: VehiclesTabProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isEmpty = !isPending && vehicles.length === 0;

  if (isPending) return <VehiclesListSkeleton />;
  if (isEmpty)
    return (
      <StateView
        icon="car"
        title={t('vehicle.list.empty.title')}
        description={t('vehicle.list.empty.description')}
        actionLabel={t('vehicle.list.add')}
        onAction={() => navigate(ROUTES.WORKSPACES.VEHICLES.NEW(workspaceId))}
      />
    );

  return (
    <Stack gap="xl">
      <PageHeader
        title={t('vehicle.list.title')}
        buttonLabel={t('vehicle.list.add')}
        buttonIcon="plus"
        onCreate={() => navigate(ROUTES.WORKSPACES.VEHICLES.NEW(workspaceId))}
      />

      {!isPending && !isEmpty && (
        <VehiclesList
          vehicles={vehicles}
          onSelect={(vehicle) =>
            navigate(ROUTES.WORKSPACES.VEHICLES.DETAIL(workspaceId, vehicle.id))
          }
        />
      )}
    </Stack>
  );
};
