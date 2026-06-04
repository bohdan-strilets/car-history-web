import { useLogout } from '@features/auth';
import { ROUTES } from '@shared/config';
import { useAuth } from '@shared/store/auth';
import { Avatar, Panel, Stack, Text } from '@shared/ui';
import { Dropdown, DropdownItem } from '@shared/ui/components/dropdown';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import type { UserBarProps } from './user-bar.types';

export const UserBar = ({ expanded = true, direction }: UserBarProps) => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { logout } = useLogout();

  const userName = `${user?.firstName} ${user?.lastName}`;
  const userEmail = user?.email ?? '';

  const handleProfile = () => {
    navigate(ROUTES.PROFILE.ROOT);
    setOpen(false);
  };

  const handleLogout = () => {
    logout();
    setOpen(false);
  };

  const avatarProps = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    avatarUrl: user?.avatarUrl,
    size: 'md' as const,
    shape: 'circle' as const,
  };

  const dropdownContent = (
    <>
      <DropdownItem label={t('user.profile.title')} leftIcon="user" onClick={handleProfile} />
      <DropdownItem
        label={t('user.logout.action')}
        leftIcon="logOut"
        danger
        onClick={handleLogout}
      />
    </>
  );

  if (!expanded) {
    return (
      <Dropdown
        align="end"
        open={open}
        onOpenChange={setOpen}
        direction={direction ?? 'bottom'}
        trigger={
          <Panel p="sm" radius="md" direction="row" gap="sm" align="center" hoverable>
            <Avatar {...avatarProps} />
          </Panel>
        }
      >
        {dropdownContent}
      </Dropdown>
    );
  }

  return (
    <Dropdown
      fullWidth
      align="end"
      open={open}
      onOpenChange={setOpen}
      direction="top"
      trigger={
        <Panel p="sm" radius="md" direction="row" gap="sm" align="center" hoverable>
          <Avatar {...avatarProps} />
          <Stack gap="none" align="start">
            <Text size="sm" weight="semibold">
              {userName}
            </Text>
            <Text size="xs" color="tertiary">
              {userEmail}
            </Text>
          </Stack>
        </Panel>
      }
    >
      {dropdownContent}
    </Dropdown>
  );
};
