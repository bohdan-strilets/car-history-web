import {
  createForgotPasswordSchema,
  useForgotPasswordMutation,
  type ForgotPasswordFormParams,
  type ForgotPasswordValues,
} from '@features/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export const useForgotPasswordForm = ({ onSuccess }: ForgotPasswordFormParams) => {
  const { t } = useTranslation();

  const resolver = zodResolver(createForgotPasswordSchema(t));
  const defaultValues: ForgotPasswordValues = { email: '' };

  const form = useForm<ForgotPasswordValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const mutation = useForgotPasswordMutation({ onSuccess });
  const { mutate: forgotPassword, isPending, error } = mutation;

  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: ForgotPasswordValues) => {
    return forgotPassword(data);
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
