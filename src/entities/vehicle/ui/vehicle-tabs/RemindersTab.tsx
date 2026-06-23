import { useTranslation } from 'react-i18next';

import { ReminderList, ReminderListSkeleton, useRemindersQuery } from '@entities/reminder';
import { useOpenCreateReminder } from '@features/reminder';
import { useMediaQuery } from '@shared/hooks';
import { Fab, Stack, StateView } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';

import type { RemindersTabProps } from './vehicle-tabs.types';

export const RemindersTab = ({ workspaceId, vehicleId, currentMileage }: RemindersTabProps) => {
  const { t } = useTranslation();
  const isTabletUp = useMediaQuery('tablet', 'up');

  const { handleCreate } = useOpenCreateReminder({
    workspaceId,
    vehicleId,
    currentMileage,
  });

  const mutation = useRemindersQuery(workspaceId, vehicleId);
  const { data, isPending, isError } = mutation;

  const reminders = data?.data ?? [];
  const isEmpty = reminders.length === 0;

  if (isPending) return <ReminderListSkeleton />;

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
      <StateView
        icon="bell"
        title={t('reminder.empty.title')}
        description={t('reminder.empty.description')}
        actionLabel={t('reminder.empty.action')}
        onAction={handleCreate}
      />
    );

  return (
    <>
      <Stack gap="2xl">
        <PageHeader
          title={t('reminder.list.title')}
          buttonLabel={t('reminder.actions.add')}
          buttonIcon="plus"
          onCreate={handleCreate}
        />
        <ReminderList reminders={reminders} onReminderClick={() => {}} />
      </Stack>
      <Fab
        icon="plus"
        aria-label={t('reminder.actions.add')}
        onClick={handleCreate}
        size={isTabletUp ? 'lg' : 'md'}
      />
    </>
  );
};
