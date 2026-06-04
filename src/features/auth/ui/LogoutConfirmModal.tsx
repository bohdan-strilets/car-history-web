import { ROUTES } from '@shared/config';
import { useAdaptiveModal } from '@shared/lib/modal';
import { ConfirmModal } from '@shared/ui';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useLogoutMutation } from '../api/logout.mutation';

export const LogoutConfirmModal = () => {
  const { t } = useTranslation();
  const { closeLast } = useAdaptiveModal();
  const { mutateAsync, isPending } = useLogoutMutation();
  const navigate = useNavigate();

  return (
    <ConfirmModal
      description={t('user.logout.confirm')}
      confirmLabel={t('user.logout.action')}
      cancelLabel={t('common.actions.cancel')}
      danger
      isLoading={isPending}
      onConfirm={async () => {
        await mutateAsync();
        closeLast();
        navigate(ROUTES.AUTH.LOGIN);
      }}
      onCancel={closeLast}
    />
  );
};
