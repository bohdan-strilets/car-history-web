import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { useFormErrors } from '@shared/lib';

import { useUpdateTireMutation } from '../api';

import { updateTireDefaultValues } from './tire.default';
import { createTireSchema, type CreateTireValues } from './tire.schema';

import type { UpdateTireFormParams } from './tire.types';

export const useUpdateTireForm = ({
  workspaceId,
  vehicleId,
  tireId,
  tire,
  onSuccess,
}: UpdateTireFormParams) => {
  const { t } = useTranslation();
  const resolver = zodResolver(createTireSchema(t));
  const defaultValues = updateTireDefaultValues(tire);

  const form = useForm<CreateTireValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const mutation = useUpdateTireMutation(workspaceId, vehicleId);
  const { mutate: update, isPending, error } = mutation;
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: CreateTireValues) => {
    update({ tireId, dto: data }, { onSuccess });
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
