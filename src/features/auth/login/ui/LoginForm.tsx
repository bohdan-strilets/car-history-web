import { Field } from '@shared/ui/components/field';
import { Form } from '@shared/ui/components/form';
import { Input } from '@shared/ui/primitives/input';
import { PasswordInput } from '@shared/ui/primitives/password-input';
import { Stack } from '@shared/ui/primitives/stack';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface LoginFormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm<LoginFormValues>();

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} submitLabel={t('auth.login.form.submit')}>
      <Stack gap="lg">
        <Field label={t('auth.login.form.email')}>
          <Input type="email" placeholder="email@example.com" {...register('email')} size="lg" />
        </Field>

        <Field label={t('auth.login.form.password')}>
          <PasswordInput placeholder="••••••••" {...register('password')} size="lg" />
        </Field>
      </Stack>
    </Form>
  );
};
