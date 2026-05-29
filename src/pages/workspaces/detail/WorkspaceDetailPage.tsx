import {
  canManageWorkspace,
  useWorkspaceMembersQuery,
  useWorkspaceQuery,
  useWorkspaceSettingsQuery,
  useWorkspaceTab,
  WORKSPACE_TABS,
} from '@entities/workspace';
import { MembersList } from '@entities/workspace/ui/members-list';
import {
  EditWorkspaceModal,
  InviteForm,
  useDeleteWorkspaceMutation,
  useWorkspaceSettingsForm,
  WorkspaceSettingsForm,
} from '@features/workspace';
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

  const { data: settingsData, isPending: isSettingsPending } = useWorkspaceSettingsQuery(id ?? '');

  const { mutate: deleteWorkspace } = useDeleteWorkspaceMutation();

  const workspace = workspaceData?.data ?? null;
  const members = membersData?.data ?? [];
  const settings = settingsData?.data ?? null;

  const settingsForm = useWorkspaceSettingsForm({
    workspaceId: id ?? '',
    settings,
    onSuccess: () => {},
  });

  if (isWorkspacePending) return null;
  if (isWorkspaceError || !workspace) return null;

  const tabs = translateSegmentControlOptions(t, WORKSPACE_TABS);
  const canManage = canManageWorkspace(workspace.role);

  const handleEdit = () => {
    modal.open(<EditWorkspaceModal workspace={workspace} onSuccess={() => modal.closeLast()} />, {
      title: t('workspace.settings.title'),
    });
  };

  const handleDelete = async () => {
    const confirmed = await confirm({
      title: t('workspace.detail.delete'),
      description: t('workspace.detail.deleteConfirm'),
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
          {canManage ? (
            <>
              <Stack gap="md">
                <Text weight="semibold" size="lg">
                  {t('workspace.settings.title')}
                </Text>
                <Button leftIcon="edit" onClick={handleEdit}>
                  {t('workspace.settings.title')}
                </Button>
              </Stack>

              {!isSettingsPending && (
                <WorkspaceSettingsForm
                  control={settingsForm.control}
                  handleSubmit={settingsForm.handleSubmit}
                  isPending={settingsForm.isPending}
                  errorMessage={settingsForm.errorMessage}
                  submitLabel={t('common.save')}
                />
              )}

              <Stack gap="md">
                <Text weight="semibold" size="lg">
                  {t('workspace.settings.danger.title')}
                </Text>
                <Button variant="solid" leftIcon="trash" onClick={handleDelete}>
                  {t('workspace.settings.danger.delete')}
                </Button>
              </Stack>
            </>
          ) : (
            <Text color="secondary">{t('workspace.settings.noPermissions')}</Text>
          )}
        </Stack>
      )}
    </Stack>
  );
};
