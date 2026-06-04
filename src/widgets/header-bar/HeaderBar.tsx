import { useWorkspace, WORKSPACE_TYPE_CONFIG } from '@entities/workspace';
import { useWorkspacesQuery } from '@entities/workspace/api';
import { useLogout } from '@features/auth';
import { ROUTES } from '@shared/config';
import { useAuth } from '@shared/store/auth';
import { Avatar, IconBox, Panel, Stack, Text } from '@shared/ui';
import { Dropdown, DropdownItem } from '@shared/ui/components/dropdown';
import { LanguageToggle } from '@widgets/language-toggle';
import { ThemeToggle } from '@widgets/theme-toggle';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const HeaderBar = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { logout } = useLogout();

  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const { activeWorkspaceId, activeWorkspace, setActiveWorkspaceId, setActiveWorkspace } =
    useWorkspace();

  const { data } = useWorkspacesQuery();
  const workspaces = data?.data ?? [];

  const activeWorkspaceConfig = WORKSPACE_TYPE_CONFIG.find(
    (c) => c.value === activeWorkspace?.type,
  );

  return (
    <Panel direction="row" align="center" justify="between" gap="sm" p="sm">
      <Dropdown
        open={workspaceOpen}
        onOpenChange={setWorkspaceOpen}
        direction="bottom"
        trigger={
          <Stack direction="row" gap="xs" align="center">
            <Stack gap="none" align="center">
              <Text size="sm" weight="semibold">
                {activeWorkspace?.name ?? '—'}
              </Text>
              <Text size="xs" color="tertiary">
                {t('workspace.counts.workspaces', { count: workspaces.length })}
              </Text>
            </Stack>
            <IconBox
              name={activeWorkspaceConfig?.icon ?? 'circleQuestionMark'}
              soft={activeWorkspaceConfig?.color}
            />
          </Stack>
        }
      >
        <Stack gap="md">
          {workspaces.map((ws) => {
            const icon = WORKSPACE_TYPE_CONFIG.find((c) => c.value === ws.type)?.icon;
            return (
              <DropdownItem
                key={ws.id}
                label={ws.name}
                leftIcon={icon ?? 'circleQuestionMark'}
                selected={ws.id === activeWorkspaceId}
                onClick={() => {
                  setActiveWorkspaceId(ws.id);
                  setActiveWorkspace(ws);
                  setWorkspaceOpen(false);
                }}
              />
            );
          })}
          <DropdownItem
            label={t('workspace.list.create')}
            leftIcon="plus"
            onClick={() => {
              setWorkspaceOpen(false);
              navigate(ROUTES.WORKSPACES.NEW);
            }}
          />
        </Stack>
      </Dropdown>

      <Dropdown
        open={userOpen}
        onOpenChange={setUserOpen}
        direction="bottom"
        align="end"
        trigger={
          <Avatar
            firstName={user?.firstName}
            lastName={user?.lastName}
            avatarUrl={user?.avatarUrl}
            size="md"
            shape="circle"
          />
        }
      >
        <DropdownItem
          label={t('user.profile.title')}
          leftIcon="user"
          onClick={() => {
            navigate(ROUTES.PROFILE.ROOT);
            setUserOpen(false);
          }}
        />
        <DropdownItem
          label={t('user.logout.action')}
          leftIcon="logOut"
          danger
          onClick={() => {
            logout();
            setUserOpen(false);
          }}
        />
      </Dropdown>

      <Stack>
        <LanguageToggle collapsed tooltipPlacement="bottom" />
        <ThemeToggle collapsed tooltipPlacement="bottom" />
      </Stack>
    </Panel>
  );
};
