import { useResendConfirmationMutation } from '@features/auth';
import { APP_CONSTANTS } from '@shared/config';
import { useCooldown, useEmailVerified } from '@shared/hooks';
import { Box, Button, Icon, Stack, Surface, Text } from '@shared/ui';
import { useTranslation } from 'react-i18next';

export const EmailVerificationBanner = () => {
  const { t } = useTranslation();
  const { showBanner } = useEmailVerified();
  const { cooldown, start, isActive } = useCooldown(APP_CONSTANTS.RESEND_COOLDOWN);

  const { mutate: resend, isPending } = useResendConfirmationMutation({
    onSuccess: start,
  });

  if (!showBanner) return null;

  return (
    <Surface soft="warning">
      <Box px="lg" py="xl">
        <Stack direction="row" align="center" justify="center" gap="lg">
          <Stack direction="row" align="center" justify="center" gap="md">
            <Icon name="mailWarning" color="warning" />
            <Text size="sm">{t('auth.emailVerification.banner')}</Text>
          </Stack>
          <Button
            variant="outline"
            color="warning"
            size="sm"
            loading={isPending}
            disabled={isActive}
            onClick={() => resend()}
          >
            {isActive
              ? t('common.actions.resendIn', { seconds: cooldown })
              : t('common.actions.resend')}
          </Button>
        </Stack>
      </Box>
    </Surface>
  );
};
