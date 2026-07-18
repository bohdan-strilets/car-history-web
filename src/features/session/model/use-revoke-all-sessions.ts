import { useTranslation } from 'react-i18next';

import { useConfirmModal } from '@shared/lib/modal';

import { useRevokeAllSessionsMutation } from '../api';

export const useRevokeAllSessions = () => {
  const { t } = useTranslation();
  const { confirm } = useConfirmModal();
  const { mutate: revokeAllSessions } = useRevokeAllSessionsMutation();

  const handleRevokeAllSessions = () => {
    confirm(
      {
        title: t('user.sessions.revokeAll'),
        description: t('user.sessions.revokeAllConfirm'),
        danger: true,
      },
      {
        onConfirm: (close) => {
          revokeAllSessions(undefined, {
            onSuccess: () => close(),
            onError: () => close(),
          });
        },
      },
    );
  };

  return { handleRevokeAllSessions };
};
