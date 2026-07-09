import { useTranslation } from 'react-i18next';

import {
  MaintenanceList,
  MaintenanceListSkeleton,
  useMaintenanceIntervalsQuery,
} from '@entities/maintenance';
import { useOpenCreateMaintenanceInterval, useOpenMaintenanceDetail } from '@features/maintenance';
import { useMediaQuery } from '@shared/hooks';
import { Fab, Stack } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';

import { SoldVehicleHint } from '../sold-vehicle-hint';
import { MaintenanceEmpty, TabsError } from '../vehicle-state';

import type { MaintenanceTabProps } from './vehicle-tabs.types';

export const MaintenanceTab = ({
  workspaceId,
  vehicleId,
  currentMileage,
  isSold,
}: MaintenanceTabProps) => {
  const { t } = useTranslation();
  const isTabletUp = useMediaQuery('tablet', 'up');

  const query = useMaintenanceIntervalsQuery(workspaceId, vehicleId);
  const { data, isPending, isError, refetch } = query;

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
  if (isError) return <TabsError onAction={refetch} />;
  if (isEmpty) return <MaintenanceEmpty onAction={handleCreate} isSold={isSold} />;

  return (
    <>
      <Stack gap="2xl">
        <PageHeader
          title={t('maintenance.list.title')}
          buttonLabel={t('maintenance.actions.add')}
          buttonIcon="plus"
          onCreate={isSold ? undefined : handleCreate}
        />

        {isSold && <SoldVehicleHint />}

        <MaintenanceList
          intervals={intervals}
          currentMileage={currentMileage}
          onIntervalClick={handleOpen}
        />
      </Stack>

      {!isSold && (
        <Fab
          icon="plus"
          aria-label={t('maintenance.actions.add')}
          onClick={handleCreate}
          size={isTabletUp ? 'lg' : 'md'}
        />
      )}
    </>
  );
};
