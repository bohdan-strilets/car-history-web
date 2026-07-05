import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { useFormErrors } from '@shared/lib';

import { useCreateTireMutation } from '../api';

import { createTireDefaultValues } from './tire.default';
import { createTireSchema, type CreateTireValues } from './tire.schema';

import type { CreateTireFormParams } from './tire.types';

export const useCreateTireForm = ({ workspaceId, vehicleId, onSuccess }: CreateTireFormParams) => {
  const { t } = useTranslation();
  const resolver = zodResolver(createTireSchema(t));
  const defaultValues = createTireDefaultValues();

  const form = useForm<CreateTireValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const mutation = useCreateTireMutation(workspaceId, vehicleId);
  const { mutate: create, isPending, error } = mutation;
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: CreateTireValues) => {
    create(data, { onSuccess });
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
