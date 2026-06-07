import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ResetPasswordForm } from '@features/auth';
import { ROUTES, SEARCH_PARAM_TOKEN } from '@shared/config';
import { showToast } from '@shared/lib';
import { Stack } from '@shared/ui';
import { AuthHeader } from '@widgets/auth-header';

export const ResetPasswordPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get(SEARCH_PARAM_TOKEN) ?? '';

  const handleSuccess = () => {
    showToast.success(t('auth.resetPassword.success'));
    navigate(ROUTES.AUTH.LOGIN);
  };

  return (
    <Stack gap="2xl">
      <AuthHeader
        title={t('auth.resetPassword.title')}
        subtitle={t('auth.resetPassword.subtitle')}
      />

      <ResetPasswordForm token={token} onSuccess={handleSuccess} />
    </Stack>
  );
};
