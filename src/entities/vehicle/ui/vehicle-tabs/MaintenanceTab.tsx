import { useTranslation } from 'react-i18next';

import {
  MaintenanceList,
  MaintenanceListSkeleton,
  useMaintenanceIntervalsQuery,
} from '@entities/maintenance';
import { useOpenCreateMaintenanceInterval, useOpenMaintenanceDetail } from '@features/maintenance';
import { useMediaQuery } from '@shared/hooks';
import { Center, Fab, Stack, StateView } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';

import type { MaintenanceTabProps } from './vehicle-tabs.types';

export const MaintenanceTab = ({ workspaceId, vehicleId, currentMileage }: MaintenanceTabProps) => {
  const { t } = useTranslation();
  const isTabletUp = useMediaQuery('tablet', 'up');

  const query = useMaintenanceIntervalsQuery(workspaceId, vehicleId);
  const { data, isPending, isError } = query;

  const intervals = data?.data ?? [];
  const isEmpty = intervals.length === 0;

  const { handleCreate } = useOpenCreateMaintenanceInterval({
    workspaceId,
    vehicleId,
    currentMileage,
  });

  const { handleOpen } = useOpenMaintenanceDetail({
    workspaceId,
    vehicleId,
    currentMileage,
  });

  if (isPending) return <MaintenanceListSkeleton />;

  if (isError)
    return (
      <StateView
        icon="alertCircle"
        variant="error"
        title={t('common.error.title')}
        description={t('common.error.description')}
      />
    );

  if (isEmpty)
    return (
      <Center style={{ flex: '1' }}>
        <StateView
          icon="wrench"
          title={t('maintenance.empty.title')}
          description={t('maintenance.empty.description')}
          actionLabel={t('maintenance.empty.action')}
          onAction={handleCreate}
        />
      </Center>
    );

  return (
    <>
      <Stack gap="2xl">
        <PageHeader
          title={t('maintenance.list.title')}
          buttonLabel={t('maintenance.actions.add')}
          buttonIcon="plus"
          onCreate={handleCreate}
        />
        <MaintenanceList
          intervals={intervals}
          currentMileage={currentMileage}
          onIntervalClick={handleOpen}
        />
      </Stack>

      <Fab
        icon="plus"
        aria-label={t('maintenance.actions.add')}
        onClick={handleCreate}
        size={isTabletUp ? 'lg' : 'md'}
      />
    </>
  );
};
