import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { useFormErrors } from '@shared/lib';

import { useDeleteAccountMutation } from '../../api';
import { createDeleteAccountSchema, type DeleteAccountValues } from '../schemes';

import type { DeleteAccountFormParams } from './types';

export const useDeleteAccountForm = ({ onSuccess }: DeleteAccountFormParams = {}) => {
  const { t } = useTranslation();

  const resolver = zodResolver(createDeleteAccountSchema(t));
  const defaultValues: DeleteAccountValues = { password: '' };

  const form = useForm<DeleteAccountValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const mutation = useDeleteAccountMutation();
  const { mutate: deleteAccount, isPending, error } = mutation;

  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: DeleteAccountValues) => {
    deleteAccount(data, { onSuccess });
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
