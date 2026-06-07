import { createLoginSchema, useLoginMutation, type LoginValues } from '@features/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export const useLoginForm = () => {
  const { t } = useTranslation();

  const resolver = zodResolver(createLoginSchema(t));
  const defaultValues: LoginValues = { email: '', password: '' };

  const form = useForm<LoginValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const { mutate: login, isPending, error } = useLoginMutation();
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: LoginValues) => {
    return login(data);
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
