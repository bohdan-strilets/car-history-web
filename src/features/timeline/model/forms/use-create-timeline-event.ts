import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { useCreateTimelineEventMutation } from '@features/timeline';
import { useFormErrors } from '@shared/lib';

import { timelineEventDefaultValues } from '../default-values';
import { createTimelineEventSchema, type TimelineEventValues } from '../schemes';

import { buildDto } from './build-dto';

import type { TimelineEventFormParams } from '../types';

export const useCreateTimelineEventForm = ({
  workspaceId,
  vehicleId,
  type,
  currentMileage,
  fuelType,
  onSuccess,
}: TimelineEventFormParams) => {
  const { t } = useTranslation();

  const resolver = zodResolver(createTimelineEventSchema(t, currentMileage));
  const defaultValues = timelineEventDefaultValues({
    type,
    currentMileage,
    fuelType,
  });

  const form = useForm<TimelineEventValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError, setValue } = form;

  const mutation = useCreateTimelineEventMutation({ vehicleId, workspaceId });
  const { mutate: create, isPending, error } = mutation;

  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: TimelineEventValues) => {
    const dto = buildDto(data);
    create(dto, { onSuccess });
  };

  return {
    control,
    setValue,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
