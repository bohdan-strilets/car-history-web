import { useTranslation } from 'react-i18next';

import {
  ChangeEmailForm,
  ChangePasswordForm,
  DeleteAccountForm,
  EditProfileForm,
} from '@features/user';
import { useAdaptiveModal } from '@shared/lib/modal';
import { useAuth } from '@shared/store';
import { Button, InfoRow, Stack } from '@shared/ui';
import { InfoSection } from '@widgets/info-section';
import { PageHeader } from '@widgets/page-header';

export const ProfilePage = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const modal = useAdaptiveModal();

  if (!user) return null;

  const handleEditProfile = () => {
    modal.open(
      <EditProfileForm
        defaultValues={{ firstName: user.firstName, lastName: user.lastName }}
        onSuccess={() => modal.closeAll()}
      />,
      { title: t('user.profile.edit') },
    );
  };

  const handleChangePassword = () => {
    modal.open(<ChangePasswordForm onSuccess={() => modal.closeAll()} />, {
      title: t('user.security.changePassword'),
    });
  };

  const handleChangeEmail = () => {
    modal.open(<ChangeEmailForm onSuccess={() => modal.closeAll()} />, {
      title: t('user.security.changeEmail'),
    });
  };

  const handleDeleteAccount = () => {
    modal.open(<DeleteAccountForm onSuccess={() => modal.closeAll()} />, {
      title: t('user.danger.deleteAccount'),
    });
  };

  return (
    <Stack gap="2xl">
      <PageHeader title={t('user.profile.title')} />

      <InfoSection title={t('user.profile.title')}>
        <InfoRow
          label={t('auth.common.fields.firstName')}
          value={user.firstName}
          onClick={handleEditProfile}
          icon="user"
          iconColor="blue"
          bottomDivider
        />
        <InfoRow
          label={t('auth.common.fields.lastName')}
          value={user.lastName}
          onClick={handleEditProfile}
          icon="user"
          iconColor="blue"
          bottomDivider
        />
        <InfoRow
          label={t('auth.common.fields.email')}
          value={user.email}
          icon="mail"
          iconColor="cyan"
        />
      </InfoSection>

      <InfoSection title={t('user.security.title')}>
        <InfoRow
          label={t('user.security.changePassword')}
          onClick={handleChangePassword}
          icon="lock"
          iconColor="indigo"
          bottomDivider
        />
        <InfoRow
          label={t('user.security.changeEmail')}
          onClick={handleChangeEmail}
          icon="mail"
          iconColor="cyan"
        />
      </InfoSection>

      <Stack gap="md">
        <Button
          variant="soft"
          leftIcon="trash"
          color="danger"
          size="lg"
          onClick={handleDeleteAccount}
        >
          {t('user.danger.deleteAccount')}
        </Button>
      </Stack>
    </Stack>
  );
};
