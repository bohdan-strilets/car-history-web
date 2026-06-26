import { useMemo, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { TIMELINE_EVENT_TYPE, useTimeline, type TimelineEventType } from '@entities/timeline';
import { EventTypeGrid } from '@features/timeline';
import { Hint, Stack } from '@shared/ui';

import { SelectedTypeForm } from './SelectedTypeForm';

import type { CreateTimelineEventModalProps } from './create-timeline-event-modal.types';

export const CreateTimelineEventModal = ({
  workspaceId,
  vehicleId,
  currentMileage,
  fuelType,
  vehicleFuelType,
  onSuccess,
}: CreateTimelineEventModalProps) => {
  const [selectedType, setSelectedType] = useState<TimelineEventType | null>(null);
  const { t } = useTranslation();

  const { data } = useTimeline({ workspaceId, vehicleId });
  const timeline = useMemo(() => data?.data ?? [], [data?.data]);
  const isTimelineEmpty = timeline.length === 0;

  const disabledTypes = useMemo<TimelineEventType[]>(() => {
    const types = timeline.map((e) => e.type);
    const alwaysUnique = [TIMELINE_EVENT_TYPE.PURCHASE, TIMELINE_EVENT_TYPE.SALE];

    const disabled: TimelineEventType[] = alwaysUnique.filter((t) => types.includes(t));

    const isElectric = vehicleFuelType?.includes('ELECTRIC');
    const isHybrid = vehicleFuelType?.includes('HYBRID');
    const isChargeable = isElectric || isHybrid;

    if (!isChargeable) {
      disabled.push(TIMELINE_EVENT_TYPE.CHARGE);
    }

    return disabled;
  }, [timeline, vehicleFuelType]);

  const hasPurchase = timeline.some((e) => e.type === TIMELINE_EVENT_TYPE.PURCHASE);
  const highlightTypes = isTimelineEmpty && !hasPurchase ? [TIMELINE_EVENT_TYPE.PURCHASE] : [];

  if (!selectedType) {
    return (
      <Stack gap="lg">
        {isTimelineEmpty && !hasPurchase && (
          <Hint message={t('timeline.empty.purchaseTip')} variant="info" />
        )}
        <EventTypeGrid
          onSelect={setSelectedType}
          disabledTypes={disabledTypes}
          highlightTypes={highlightTypes}
        />
      </Stack>
    );
  }

  return (
    <SelectedTypeForm
      workspaceId={workspaceId}
      vehicleId={vehicleId}
      type={selectedType}
      currentMileage={currentMileage}
      fuelType={fuelType}
      onSuccess={onSuccess}
    />
  );
};
