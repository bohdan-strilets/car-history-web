import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import {
  createRegisterSchema,
  useRegisterMutation,
  type RegisterDto,
  type RegisterValues,
} from '@features/auth';
import { useFormErrors } from '@shared/lib';

export const useRegisterForm = () => {
  const { t } = useTranslation();

  const resolver = zodResolver(createRegisterSchema(t));
  const defaultValues: RegisterValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const form = useForm<RegisterValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const { mutate: register, isPending, error } = useRegisterMutation();
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: RegisterValues) => {
    const dto: RegisterDto = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };

    register(dto);
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
