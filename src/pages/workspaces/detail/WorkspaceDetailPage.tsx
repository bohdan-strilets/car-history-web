import {
  canDeleteWorkspace,
  canEditWorkspace,
  useWorkspaceMembersQuery,
  useWorkspaceQuery,
  useWorkspaceSettingsQuery,
  useWorkspaceTab,
  WORKSPACE_TABS,
} from '@entities/workspace';
import { WorkspaceSettingsInfo } from '@entities/workspace/ui';
import { MembersList } from '@entities/workspace/ui/members-list';
import { EditWorkspaceModal, EditWorkspaceSettingsModal, InviteForm } from '@features/workspace';
import { useDeleteWorkspaceMutation } from '@features/workspace/api';
import { ROUTES } from '@shared/config';
import { useConfirmModal } from '@shared/lib/modal';
import { useAuth } from '@shared/store/auth';
import { Button, Stack, Tabs, Text, useModal } from '@shared/ui';
import { translateSegmentControlOptions } from '@shared/utils';
import { PageHeader } from '@widgets/page-header';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

export const WorkspaceDetailPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const { activeTab, setTab } = useWorkspaceTab();
  const modal = useModal();
  const { confirm } = useConfirmModal();

  const {
    data: workspaceData,
    isPending: isWorkspacePending,
    isError: isWorkspaceError,
  } = useWorkspaceQuery(id ?? '');

  const { data: membersData } = useWorkspaceMembersQuery(id ?? '');
  const { data: settingsData } = useWorkspaceSettingsQuery(id ?? '');

  const { mutate: deleteWorkspace } = useDeleteWorkspaceMutation();

  const workspace = workspaceData?.data ?? null;
  const members = membersData?.data ?? [];
  const settings = settingsData?.data ?? null;

  if (isWorkspacePending) return null;
  if (isWorkspaceError || !workspace) return null;

  const tabs = translateSegmentControlOptions(t, WORKSPACE_TABS);

  const canEdit = canEditWorkspace(workspace.role);
  const canDelete = canDeleteWorkspace(workspace.role);

  const handleEditWorkspace = () => {
    modal.open(<EditWorkspaceModal workspace={workspace} onSuccess={() => modal.closeLast()} />, {
      title: t('workspace.settings.title'),
    });
  };

  const handleEditSettings = () => {
    modal.open(
      <EditWorkspaceSettingsModal
        workspaceId={workspace.id}
        settings={settings}
        onSuccess={() => modal.closeLast()}
      />,
      { title: t('workspace.settings.title') },
    );
  };

  const handleDelete = async () => {
    const confirmed = await confirm({
      title: t('workspace.detail.delete'),
      description: t('workspace.detail.deleteConfirm'),
      danger: true,
    });

    if (confirmed) {
      deleteWorkspace(workspace.id, {
        onSuccess: () => navigate(ROUTES.WORKSPACES.ROOT),
      });
    }
  };

  return (
    <Stack gap="2xl">
      <PageHeader
        title={workspace.name}
        buttonLabel={t('common.back')}
        buttonIcon="arrowLeft"
        onCreate={() => navigate(ROUTES.WORKSPACES.ROOT)}
      />

      <Tabs tabs={tabs} activeTab={activeTab} onChange={setTab} />

      {activeTab === 'vehicles' && <div>{t('workspace.detail.vehicles')}</div>}

      {activeTab === 'members' && (
        <Stack gap="xl">
          <Stack direction="row" justify="between" align="center">
            <Text weight="semibold" size="lg">
              {t('workspace.members.title')}
            </Text>
            <Button
              leftIcon="userPlus"
              onClick={() =>
                modal.open(
                  <InviteForm workspaceId={id ?? ''} onSuccess={() => modal.closeLast()} />,
                  { title: t('workspace.invite.title') },
                )
              }
            >
              {t('workspace.members.invite')}
            </Button>
          </Stack>

          <MembersList
            members={members}
            currentUserId={user?.id ?? ''}
            currentUserRole={workspace.role}
            onEdit={(member) =>
              modal.open(<div>edit {member.id}</div>, {
                title: t('workspace.members.editRole'),
              })
            }
            onRemove={(member) =>
              modal.open(<div>remove {member.id}</div>, {
                title: t('workspace.members.remove'),
              })
            }
          />
        </Stack>
      )}

      {activeTab === 'settings' && (
        <Stack gap="3xl">
          <WorkspaceSettingsInfo
            workspace={workspace}
            settings={settings}
            onEditWorkspace={canEdit ? handleEditWorkspace : undefined}
            onEditSettings={canEdit ? handleEditSettings : undefined}
          />

          {canDelete && (
            <Stack gap="md">
              <Text weight="semibold" size="lg">
                {t('workspace.settings.danger.title')}
              </Text>
              <Button
                variant="soft"
                leftIcon="trash"
                onClick={handleDelete}
                color="danger"
                size="lg"
              >
                {t('workspace.settings.danger.delete')}
              </Button>
            </Stack>
          )}
        </Stack>
      )}
    </Stack>
  );
};
