import { useConfirmEmail } from '@features/auth';
import { ROUTES } from '@shared/config/routes';
import { Button, Heading, Spinner, Stack, SuccessState, Text, TextLink } from '@shared/ui';
import { AuthHeader } from '@widgets/auth-header';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const ConfirmEmailPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { isConfirming, isSuccess, isError, cooldown, isActive, isResending, handleResend } =
    useConfirmEmail();

  if (isConfirming) {
    return (
      <Stack align="center" gap="lg">
        <Spinner size="xl" color="accent" />
        <Text color="tertiary">{t('auth.confirmEmail.verifying')}</Text>
      </Stack>
    );
  }

  if (isSuccess) {
    return (
      <Stack gap="2xl">
        <Stack align="center" gap="lg">
          <SuccessState />
          <Stack gap="xs">
            <Heading as="h1" size="3xl" weight="extraBold" align="center">
              {t('auth.confirmEmail.success.title')}
            </Heading>
            <Text color="tertiary" align="center">
              {t('auth.confirmEmail.success.subtitle')}
            </Text>
          </Stack>
        </Stack>

        <Button
          variant="solid"
          color="accent"
          size="lg"
          fullWidth
          onClick={() => navigate(ROUTES.AUTH.LOGIN)}
        >
          {t('auth.confirmEmail.success.login')}
        </Button>
      </Stack>
    );
  }

  if (isError) {
    return (
      <Stack gap="2xl">
        <AuthHeader
          title={t('auth.confirmEmail.error.title')}
          subtitle={t('auth.confirmEmail.error.subtitle')}
        />

        <Button
          variant="outline"
          color="gray"
          size="lg"
          fullWidth
          disabled={isActive}
          loading={isResending}
          onClick={handleResend}
        >
          {isActive
            ? t('auth.confirmEmail.error.resendIn', { seconds: cooldown })
            : t('auth.confirmEmail.error.resend')}
        </Button>

        <TextLink
          to={ROUTES.AUTH.LOGIN}
          label={t('auth.forgotPassword.backToLogin')}
          color="tertiary"
        />
      </Stack>
    );
  }

  return null;
};
