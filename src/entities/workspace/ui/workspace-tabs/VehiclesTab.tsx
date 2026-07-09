import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { VehiclesList, VehiclesListSkeleton } from '@entities/vehicle';
import { ROUTES } from '@shared/config';
import { Stack } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';

import { VehicleTabsEmptyState } from '../workspace-state';

import type { VehiclesTabProps } from './workspace-tabs.types';

export const VehiclesTab = ({ workspaceId, vehicles, isPending }: VehiclesTabProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isEmpty = !isPending && vehicles.length === 0;

  if (isPending) return <VehiclesListSkeleton />;
  if (isEmpty) return <VehicleTabsEmptyState workspaceId={workspaceId} />;

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
