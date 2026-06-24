import { useTranslation } from 'react-i18next';

import { LoginForm, useGoogleAuth } from '@features/auth';
import { ROUTES } from '@shared/config';
import { Button, Divider, GoogleIcon, Stack, Text, TextLink } from '@shared/ui';
import { AuthHeader } from '@widgets/auth-header';

export const LoginPage = () => {
  const { t } = useTranslation();
  const { redirectToGoogle, isLoading } = useGoogleAuth();

  return (
    <Stack gap="2xl">
      <AuthHeader title={t('auth.login.title')} subtitle={t('auth.login.subtitle')} />

      <LoginForm />

      <Stack direction="row" align="center" justify="between">
        <TextLink
          to={ROUTES.AUTH.FORGOT_PASSWORD}
          label={t('auth.login.form.forgotPassword')}
          color="tertiary"
        />
        <Stack direction="row" gap="xs" align="center">
          <Text size="sm" color="tertiary">
            {t('auth.login.form.noAccount')}
          </Text>
          <TextLink to={ROUTES.AUTH.REGISTER} label={t('auth.login.form.register')} />
        </Stack>
      </Stack>

      <Divider label={t('auth.common.orContinueWith')} />

      <Button
        variant="solid"
        color="blue"
        size="lg"
        fullWidth
        onClick={redirectToGoogle}
        disabled={isLoading}
        loading={isLoading}
      >
        <GoogleIcon />
        Google
      </Button>
    </Stack>
  );
};
