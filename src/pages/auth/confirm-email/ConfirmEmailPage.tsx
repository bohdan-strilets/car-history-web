import { useConfirmEmail } from '@features/auth';
import { ROUTES } from '@shared/config/routes';
import { Button, Spinner, Stack, Text, TextLink } from '@shared/ui';
import { AuthHeader } from '@widgets/auth-header';
import { useTranslation } from 'react-i18next';

export const ConfirmEmailPage = () => {
  const { t } = useTranslation();

  const { isConfirming, isError, cooldown, isActive, isResending, handleResend } =
    useConfirmEmail();

  if (isConfirming) {
    return (
      <Stack align="center" gap="lg">
        <Spinner size="xl" color="accent" />
        <Text color="tertiary">{t('auth.confirmEmail.verifying')}</Text>
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
            ? t('common.actions.resendIn', { seconds: cooldown })
            : t('common.actions.resend')}
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
