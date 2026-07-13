import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { useFormErrors } from '@shared/lib';

import { useUpdateProfileMutation } from '../../api';
import { createEditProfileSchema, type EditProfileValues } from '../schemes';

import type { EditProfileFormParams } from './types';

export const useEditProfileForm = ({ defaultValues, onSuccess }: EditProfileFormParams) => {
  const { t } = useTranslation();

  const resolver = zodResolver(createEditProfileSchema(t));
  const form = useForm<EditProfileValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const mutation = useUpdateProfileMutation();
  const { mutate: updateProfile, isPending, error } = mutation;

  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: EditProfileValues) => {
    updateProfile(data, { onSuccess });
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
