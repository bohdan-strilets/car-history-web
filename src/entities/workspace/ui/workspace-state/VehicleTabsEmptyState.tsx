import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@shared/config';
import { Center, StateView } from '@shared/ui';

import type { VehicleTabsEmptyStateProps } from './workspace-state.types';

export const VehicleTabsEmptyState = ({ workspaceId }: VehicleTabsEmptyStateProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Center style={{ flex: 1 }}>
      <StateView
        icon="car"
        title={t('vehicle.list.empty.title')}
        description={t('vehicle.list.empty.description')}
        actionLabel={t('vehicle.list.add')}
        onAction={() => navigate(ROUTES.WORKSPACES.VEHICLES.NEW(workspaceId))}
      />
    </Center>
  );
};
