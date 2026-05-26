import { useAdaptiveModal } from '@shared/lib/modal';
import { useTranslation } from 'react-i18next';

import { LogoutConfirmModal } from '../ui';

export const useLogout = () => {
  const { open } = useAdaptiveModal();
  const { t } = useTranslation();

  const logout = () => {
    open(<LogoutConfirmModal />, { title: t('user.logout') });
  };

  return { logout };
};
