import { useTranslation } from 'react-i18next';

import { ReminderList, ReminderListSkeleton, useRemindersQuery } from '@entities/reminder';
import { useOpenCreateReminder, useOpenReminderDetail } from '@features/reminder';
import { useMediaQuery } from '@shared/hooks';
import { Fab, Stack } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';

import { SoldVehicleHint } from '../sold-vehicle-hint';
import { ReminderEmpty, TabsError } from '../vehicle-state';

import type { RemindersTabProps } from './vehicle-tabs.types';

export const RemindersTab = ({
  workspaceId,
  vehicleId,
  currentMileage,
  isSold,
}: RemindersTabProps) => {
  const { t } = useTranslation();
  const isTabletUp = useMediaQuery('tablet', 'up');

  const { handleCreate } = useOpenCreateReminder({
    workspaceId,
    vehicleId,
    currentMileage,
  });

  const mutation = useRemindersQuery(workspaceId, vehicleId);
  const { data, isPending, isError, refetch } = mutation;

  const reminders = data?.data ?? [];
  const isEmpty = reminders.length === 0;

  const { handleOpen } = useOpenReminderDetail({ workspaceId, vehicleId });

  if (isPending) return <ReminderListSkeleton />;
  if (isError) return <TabsError onAction={refetch} />;
  if (isEmpty) return <ReminderEmpty isSold={isSold} onAction={handleCreate} />;

  return (
    <>
      <Stack gap="2xl">
        <PageHeader
          title={t('reminder.list.title')}
          buttonLabel={t('reminder.actions.add')}
          buttonIcon="plus"
          onCreate={isSold ? undefined : handleCreate}
        />

        {isSold && <SoldVehicleHint />}

        <ReminderList reminders={reminders} onReminderClick={handleOpen} />
      </Stack>

      {!isSold && (
        <Fab
          icon="plus"
          aria-label={t('reminder.actions.add')}
          onClick={handleCreate}
          size={isTabletUp ? 'lg' : 'md'}
        />
      )}
    </>
  );
};
