// src/features/user/model/forms/use-change-email-form.ts
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { useFormErrors } from '@shared/lib';

import { useChangeEmailMutation } from '../../api';
import { createChangeEmailSchema, type ChangeEmailValues } from '../schemes';

import type { ChangeEmailFormParams } from './types';

export const useChangeEmailForm = ({ onSuccess }: ChangeEmailFormParams = {}) => {
  const { t } = useTranslation();

  const resolver = zodResolver(createChangeEmailSchema(t));
  const defaultValues: ChangeEmailValues = { newEmail: '' };

  const form = useForm<ChangeEmailValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const mutation = useChangeEmailMutation();
  const { mutate: changeEmail, isPending, error } = mutation;

  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: ChangeEmailValues) => {
    changeEmail(data, { onSuccess });
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
