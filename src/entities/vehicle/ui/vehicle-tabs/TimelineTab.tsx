import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { useMilestones } from '@entities/milestone';
import {
  EventList,
  EventListSkeleton,
  mergeTimeline,
  TimelineFilter,
  useTimeline,
  type TimelineEvent,
  type TimelineEventType,
} from '@entities/timeline';
import { useOpenCreateTimelineEvent, useOpenTimelineEventDetail } from '@features/timeline';
import { useMediaQuery } from '@shared/hooks';
import { Center, Fab, Stack, StateView, Text } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';

import type { TimelineTabProps } from './vehicle-tabs.types';

export const TimelineTab = ({
  workspaceId,
  vehicleId,
  currentMileage,
  fuelType,
}: TimelineTabProps) => {
  const [typeFilter, setTypeFilter] = useState<TimelineEventType[]>([]);

  const { t } = useTranslation();
  const isTabletUp = useMediaQuery('tablet', 'up');

  const { handleCreate } = useOpenCreateTimelineEvent({
    workspaceId,
    vehicleId,
    currentMileage,
    fuelType,
  });

  const { handleOpen } = useOpenTimelineEventDetail({ workspaceId, vehicleId });

  const {
    data: timelineData,
    isPending: timelinePending,
    isError,
  } = useTimeline({
    workspaceId,
    vehicleId,
    query: { type: typeFilter.length > 0 ? typeFilter : undefined },
  });

  const { data: milestonesData, isPending: milestonesPending } = useMilestones({
    workspaceId,
    vehicleId,
  });

  const isPending = timelinePending || milestonesPending;
  const events = timelineData?.data ?? [];
  const hasFilter = typeFilter.length > 0;
  const milestones = hasFilter ? [] : (milestonesData?.data ?? []);
  const items = mergeTimeline(events, milestones);
  const isEmpty = items.length === 0;
  const isFilterEmpty = isEmpty && hasFilter;
  const isTrulyEmpty = isEmpty && !hasFilter;

  if (isPending) return <EventListSkeleton />;

  if (isError)
    return (
      <Center style={{ flex: '1' }}>
        <StateView
          icon="alertCircle"
          variant="error"
          title={t('common.error.title')}
          description={t('common.error.description')}
        />
      </Center>
    );

  if (isTrulyEmpty)
    return (
      <Center style={{ flex: '1' }}>
        <StateView
          icon="clock"
          title={t('timeline.empty.title')}
          description={t('timeline.empty.description')}
          actionLabel={t('timeline.actions.addEvent')}
          onAction={handleCreate}
        />
      </Center>
    );

  return (
    <>
      <Stack gap="xl">
        <PageHeader
          title={t('timeline.list.title')}
          buttonLabel={t('timeline.actions.addEvent')}
          buttonIcon="plus"
          onCreate={handleCreate}
        />

        <TimelineFilter value={typeFilter} onChange={setTypeFilter} />
        {isFilterEmpty ? (
          <Stack align="center" gap="xs" justify="center">
            <Text weight="semibold" size={'2xl'} color="tertiary">
              {t('timeline.filterEmpty.title')}
            </Text>
            <Text size="sm" color="tertiary">
              {t('timeline.filterEmpty.description')}
            </Text>
          </Stack>
        ) : (
          <EventList
            items={items}
            onEventClick={(event: TimelineEvent) => handleOpen(event.id, event.type)}
          />
        )}
      </Stack>

      <Fab
        icon="plus"
        aria-label={t('timeline.actions.addEvent')}
        onClick={handleCreate}
        size={isTabletUp ? 'lg' : 'md'}
      />
    </>
  );
};
