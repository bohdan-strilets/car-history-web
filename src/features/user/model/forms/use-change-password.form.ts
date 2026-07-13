import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { useFormErrors } from '@shared/lib';

import { useChangePasswordMutation } from '../../api';
import { createChangePasswordSchema, type ChangePasswordValues } from '../schemes';

import type { ChangePasswordFormParams } from './types';

export const useChangePasswordForm = ({ onSuccess }: ChangePasswordFormParams = {}) => {
  const { t } = useTranslation();

  const resolver = zodResolver(createChangePasswordSchema(t));
  const defaultValues: ChangePasswordValues = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const form = useForm<ChangePasswordValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError, reset } = form;

  const mutation = useChangePasswordMutation();
  const { mutate: changePassword, isPending, error } = mutation;

  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: ChangePasswordValues) => {
    changePassword(
      { currentPassword: data.currentPassword, newPassword: data.newPassword },
      {
        onSuccess: () => {
          reset();
          onSuccess?.();
        },
      },
    );
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
