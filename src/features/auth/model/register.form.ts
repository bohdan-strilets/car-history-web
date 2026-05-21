import {
  createRegisterSchema,
  useRegisterMutation,
  type RegisterDto,
  type RegisterValues,
} from '@features/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export const useRegisterForm = () => {
  const { t } = useTranslation();

  const { control, handleSubmit, setError } = useForm<RegisterValues>({
    resolver: zodResolver(createRegisterSchema(t)),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

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
