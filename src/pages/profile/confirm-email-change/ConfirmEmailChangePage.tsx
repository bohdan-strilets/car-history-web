import { useTranslation } from 'react-i18next';

import { useConfirmEmailChange } from '@features/user';
import { ROUTES } from '@shared/config';
import { Spinner, Stack, Text, TextLink } from '@shared/ui';
import { AuthHeader } from '@widgets/auth-header';

export const ConfirmEmailChangePage = () => {
  const { t } = useTranslation();
  const { isConfirming, isSuccess, isError } = useConfirmEmailChange();

  if (isConfirming) {
    return (
      <Stack align="center" gap="lg">
        <Spinner size="xl" color="accent" />
        <Text color="tertiary">{t('user.security.confirmEmailChange.verifying')}</Text>
      </Stack>
    );
  }

  if (isSuccess) {
    return (
      <Stack gap="2xl">
        <AuthHeader
          title={t('user.security.confirmEmailChange.success.title')}
          subtitle={t('user.security.confirmEmailChange.success.subtitle')}
        />
        <TextLink
          to={ROUTES.PROFILE.ROOT}
          label={t('user.security.confirmEmailChange.success.action')}
        />
      </Stack>
    );
  }

  if (isError) {
    return (
      <Stack gap="2xl">
        <AuthHeader
          title={t('user.security.confirmEmailChange.error.title')}
          subtitle={t('user.security.confirmEmailChange.error.subtitle')}
        />
        <TextLink to={ROUTES.PROFILE.ROOT} label={t('common.actions.back')} color="tertiary" />
      </Stack>
    );
  }

  return null;
};
