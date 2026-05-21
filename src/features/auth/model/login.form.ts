import { useLoginMutation } from '@features/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { createLoginSchema, type LoginValues } from './login.schema';

export const useLoginForm = () => {
  const { t } = useTranslation();

  const { control, handleSubmit, setError } = useForm<LoginValues>({
    resolver: zodResolver(createLoginSchema(t)),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate: login, isPending, error } = useLoginMutation();
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: LoginValues) => login(data);

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
