import { useTranslation } from 'react-i18next';

import { useMilestones } from '@entities/milestone';
import { EventList, EventListSkeleton, mergeTimeline, useTimeline } from '@entities/timeline';
import { useOpenCreateTimelineEvent } from '@features/timeline';
import { Stack, StateView } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';

import type { TimelineTabProps } from './vehicle-tabs.types';

export const TimelineTab = ({
  workspaceId,
  vehicleId,
  currentMileage,
  fuelType,
}: TimelineTabProps) => {
  const { t } = useTranslation();

  const { handleCreate } = useOpenCreateTimelineEvent({
    workspaceId,
    vehicleId,
    currentMileage,
    fuelType,
  });

  const {
    data: timelineData,
    isPending: timelinePending,
    isError,
  } = useTimeline({ workspaceId, vehicleId });
  const { data: milestonesData, isPending: milestonesPending } = useMilestones({
    workspaceId,
    vehicleId,
  });

  const isPending = timelinePending || milestonesPending;
  const events = timelineData?.data ?? [];
  const milestones = milestonesData?.data ?? [];
  const items = mergeTimeline(events, milestones);
  const isEmpty = items.length === 0;

  if (isPending) return <EventListSkeleton />;

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
        icon="clock"
        title={t('timeline.empty.title')}
        description={t('timeline.empty.description')}
        actionLabel={t('timeline.actions.addEvent')}
        onAction={handleCreate}
      />
    );

  return (
    <Stack gap="xl">
      <PageHeader
        title={t('timeline.list.title')}
        buttonLabel={t('timeline.actions.addEvent')}
        buttonIcon="plus"
        onCreate={handleCreate}
      />

      <EventList items={items} />
    </Stack>
  );
};
