import { useTranslation } from 'react-i18next';

import {
  useDeleteWorkspace,
  useEditWorkspace,
  useEditWorkspaceSettings,
  useLeaveWorkspace,
} from '@features/workspace';
import { Button, Hint, Stack, Text, Tooltip } from '@shared/ui';

import { WorkspaceSettingsInfo, WorkspaceSettingsSkeleton } from '../workspace-settings-info';

import type { SettingsTabProps } from './workspace-tabs.types';

export const SettingsTab = ({
  workspace,
  settings,
  canEdit,
  canDelete,
  canLeave,
  isPending,
  onBeforeNavigate,
}: SettingsTabProps) => {
  const { t } = useTranslation();
  const { handleEditWorkspace } = useEditWorkspace();
  const { handleEditSettings } = useEditWorkspaceSettings();
  const { handleDelete } = useDeleteWorkspace({ onBeforeNavigate });
  const { handleLeave } = useLeaveWorkspace({ onBeforeNavigate });

  if (isPending) return <WorkspaceSettingsSkeleton />;

  const hasOtherMembers = workspace.membersCount > 1;
  const canActuallyDelete = canDelete && !hasOtherMembers;

  return (
    <Stack gap="3xl">
      {!canEdit && <Hint message={t('workspace.settings.noPermissions')} variant="info" />}

      <WorkspaceSettingsInfo
        workspace={workspace}
        settings={settings}
        onEditWorkspace={canEdit ? () => handleEditWorkspace(workspace) : undefined}
        onEditSettings={canEdit ? () => handleEditSettings(workspace.id, settings) : undefined}
      />

      {(canDelete || canLeave) && (
        <Stack gap="md">
          <Text weight="semibold" size="lg">
            {t('workspace.settings.danger.title')}
          </Text>
          {canLeave && (
            <Button
              variant="soft"
              leftIcon="logOut"
              onClick={() => handleLeave(workspace.id)}
              color="danger"
              size="lg"
            >
              {t('workspace.detail.leave')}
            </Button>
          )}
          {canDelete && (
            <Tooltip
              label={t('workspace.settings.danger.hasOtherMembers')}
              placement="top"
              disabled={!hasOtherMembers}
            >
              <Button
                variant="soft"
                leftIcon="trash"
                onClick={() => handleDelete(workspace.id)}
                color="danger"
                size="lg"
                disabled={!canActuallyDelete}
                fullWidth
              >
                {t('workspace.settings.danger.delete')}
              </Button>
            </Tooltip>
          )}
        </Stack>
      )}
    </Stack>
  );
};
