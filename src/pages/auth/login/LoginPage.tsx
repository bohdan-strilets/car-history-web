import { LoginForm } from '@features/auth/login';
import { ROUTES } from '@shared/config/routes';
import { Button } from '@shared/ui/primitives/button';
import { Divider } from '@shared/ui/primitives/divider';
import { Heading } from '@shared/ui/primitives/heading';
import { Stack } from '@shared/ui/primitives/stack';
import { Text } from '@shared/ui/primitives/text';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <Stack gap="2xl">
      <Stack gap="xs">
        <Heading as="h1" size="3xl" weight="extraBold">
          {t('auth.login.title')}
        </Heading>
        <Text color="tertiary">{t('auth.login.subtitle')}</Text>
      </Stack>

      <LoginForm />

      <Stack direction="row" align="center" justify="between">
        <Link to={ROUTES.AUTH.FORGOT_PASSWORD}>
          <Text size="sm" color="tertiary">
            {t('auth.login.form.forgotPassword')}
          </Text>
        </Link>
        <Stack direction="row" gap="xs" align="center">
          <Text size="sm" color="tertiary">
            {t('auth.login.form.noAccount')}
          </Text>
          <Link to={ROUTES.AUTH.REGISTER}>
            <Text size="sm" color="accent">
              {t('auth.login.form.register')}
            </Text>
          </Link>
        </Stack>
      </Stack>

      <Divider label={t('auth.login.form.orContinueWith')} />

      <Button variant="soft" color="gray" size="lg" fullWidth leftIcon="globe">
        Google
      </Button>
    </Stack>
  );
};
