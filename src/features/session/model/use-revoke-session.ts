import { useTranslation } from 'react-i18next';

import type { Session } from '@entities/session';
import { useConfirmModal } from '@shared/lib/modal';

import { useRevokeSessionMutation } from '../api';

export const useRevokeSession = () => {
  const { t } = useTranslation();
  const { confirm } = useConfirmModal();
  const { mutate: revokeSession } = useRevokeSessionMutation();

  const handleRevokeSession = (session: Session) => {
    confirm(
      {
        title: t('user.sessions.revoke'),
        description: t('user.sessions.revokeConfirm'),
        danger: true,
      },
      {
        onConfirm: (close) => {
          revokeSession(session.id, {
            onSuccess: () => close(),
            onError: () => close(),
          });
        },
      },
    );
  };

  return { handleRevokeSession };
};
