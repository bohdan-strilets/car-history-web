import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { buildUpdateDto, useUpdateTimelineEventMutation } from '@features/timeline';
import { useFormErrors } from '@shared/lib';

import { createUpdateTimelineEventSchema, type UpdateTimelineEventValues } from '../schemes';

import type { TimelineEventEditFormParams } from '../types';

export const useUpdateTimelineEventForm = ({
  workspaceId,
  vehicleId,
  eventId,
  defaultValues,
  onSuccess,
}: TimelineEventEditFormParams) => {
  const { t } = useTranslation();
  const resolver = zodResolver(createUpdateTimelineEventSchema(t));

  const form = useForm<UpdateTimelineEventValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const mutation = useUpdateTimelineEventMutation({ workspaceId, vehicleId, eventId });
  const { mutate: update, isPending, error } = mutation;

  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: UpdateTimelineEventValues) => {
    update(buildUpdateDto(data), { onSuccess });
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
