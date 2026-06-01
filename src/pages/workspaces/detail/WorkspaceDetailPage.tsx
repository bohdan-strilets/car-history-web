import { useVehiclesQuery, VehiclesList, VehiclesListSkeleton } from '@entities/vehicle';
import {
  canDeleteWorkspace,
  canEditWorkspace,
  useWorkspace,
  useWorkspaceMembersQuery,
  useWorkspacePendingInvitesQuery,
  useWorkspaceQuery,
  useWorkspaceSettingsQuery,
  useWorkspacesQuery,
  useWorkspaceTab,
  WORKSPACE_TABS,
  WorkspaceDetailSkeleton,
  WorkspaceSettingsInfo,
  type WorkspaceInvite,
  type WorkspaceMember,
} from '@entities/workspace';
import { MembersList } from '@entities/workspace/ui/members-list';
import {
  EditMemberRoleModal,
  EditWorkspaceModal,
  EditWorkspaceSettingsModal,
  InviteForm,
} from '@features/workspace';
import {
  useCancelInviteMutation,
  useDeleteWorkspaceMutation,
  useLeaveWorkspaceMutation,
  useRemoveMemberMutation,
} from '@features/workspace/api';
import { ROUTES } from '@shared/config';
import { useConfirmModal } from '@shared/lib/modal';
import { useAuth } from '@shared/store/auth';
import { Button, Stack, StateView, Tabs, Text, useModal } from '@shared/ui';
import { translateSegmentControlOptions } from '@shared/utils';
import { PageHeader } from '@widgets/page-header';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

export const WorkspaceDetailPage = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const { activeTab, setTab } = useWorkspaceTab();
  const { confirm } = useConfirmModal();
  const { setActiveWorkspace, setActiveWorkspaceId, clearActiveWorkspace, clearActiveWorkspaceId } =
    useWorkspace();

  const navigate = useNavigate();
  const modal = useModal();

  const {
    data: workspaceData,
    isPending: isWorkspacePending,
    isError: isWorkspaceError,
  } = useWorkspaceQuery(id ?? '');
  const { data: workspacesListData } = useWorkspacesQuery();
  const { data: membersData } = useWorkspaceMembersQuery(id ?? '');
  const { data: pendingInvitesData } = useWorkspacePendingInvitesQuery(id ?? '');
  const { data: settingsData } = useWorkspaceSettingsQuery(id ?? '');
  const { data: vehiclesData, isPending: isVehiclesPending } = useVehiclesQuery(id ?? '');

  const { mutate: deleteWorkspace } = useDeleteWorkspaceMutation();
  const { mutate: removeMember } = useRemoveMemberMutation(id ?? '');
  const { mutate: leaveWorkspace } = useLeaveWorkspaceMutation();
  const { mutate: cancelInvite } = useCancelInviteMutation(id ?? '');

  const workspace = workspaceData?.data ?? null;
  const workspaceList = workspacesListData?.data ?? [];
  const members = membersData?.data ?? [];
  const pendingInvites = pendingInvitesData?.data ?? [];
  const settings = settingsData?.data ?? null;
  const vehicles = vehiclesData?.data ?? [];

  const isEmptyVehicles = !isVehiclesPending && vehicles.length === 0;

  useEffect(() => {
    if (!workspace) return;
    setActiveWorkspaceId(workspace.id);
    setActiveWorkspace(workspace);
  }, [workspace?.id, setActiveWorkspaceId, setActiveWorkspace, workspace]);

  if (isWorkspacePending) return <WorkspaceDetailSkeleton />;

  if (isWorkspaceError || !workspace)
    return (
      <StateView
        icon="alertCircle"
        variant="error"
        title={t('workspace.notFound.title')}
        description={t('workspace.notFound.description')}
        actionLabel={t('workspace.notFound.action')}
        onAction={() => navigate(ROUTES.WORKSPACES.ROOT)}
      />
    );

  const tabs = translateSegmentControlOptions(t, WORKSPACE_TABS);

  const canEdit = canEditWorkspace(workspace.role);
  const canDelete = canDeleteWorkspace(workspace.role);
  const canLeave = !canDelete;

  const switchToNextWorkspace = () => {
    const next = workspaceList.find((w) => w.id !== workspace.id);
    if (next) {
      setActiveWorkspaceId(next.id);
      setActiveWorkspace(next);
    } else {
      clearActiveWorkspace();
      clearActiveWorkspaceId();
    }
  };

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

  const handleDelete = () => {
    confirm(
      {
        title: t('workspace.detail.delete'),
        description: t('workspace.detail.deleteConfirm'),
        danger: true,
      },
      {
        onConfirm: (close) => {
          deleteWorkspace(workspace.id, {
            onSuccess: () => {
              close();
              switchToNextWorkspace();
              navigate(ROUTES.WORKSPACES.ROOT);
            },
          });
        },
      },
    );
  };

  const handleLeave = () => {
    confirm(
      {
        title: t('workspace.detail.leave'),
        description: t('workspace.detail.leaveConfirm'),
        danger: true,
      },
      {
        onConfirm: (close) => {
          leaveWorkspace(workspace.id, {
            onSuccess: () => {
              close();
              switchToNextWorkspace();
              navigate(ROUTES.WORKSPACES.ROOT);
            },
          });
        },
      },
    );
  };

  const handleRemoveMember = (member: WorkspaceMember) => {
    confirm(
      {
        title: t('workspace.members.remove'),
        description: t('workspace.members.removeConfirm'),
        danger: true,
      },
      {
        onConfirm: (close) => {
          removeMember(member.id, {
            onSuccess: () => {
              close();
              modal.closeAll();
            },
            onError: () => close(),
          });
        },
      },
    );
  };

  const handleCancelInvite = (invite: WorkspaceInvite) => {
    confirm(
      {
        title: t('workspace.invite.cancel'),
        description: t('workspace.invite.cancelConfirm'),
        danger: true,
      },
      {
        onConfirm: (close) => {
          cancelInvite(invite.id, {
            onSuccess: () => close(),
            onError: () => close(),
          });
        },
      },
    );
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

      {activeTab === 'vehicles' && (
        <Stack gap="xl">
          <PageHeader
            title={t('workspace.vehicles.title')}
            buttonLabel={t('vehicle.list.add')}
            buttonIcon="plus"
            onCreate={() => navigate(ROUTES.WORKSPACES.VEHICLES.NEW(id ?? ''))}
          />

          {isVehiclesPending && <VehiclesListSkeleton />}

          {isEmptyVehicles && (
            <StateView
              icon="car"
              title={t('vehicle.list.empty.title')}
              description={t('vehicle.list.empty.description')}
              actionLabel={t('vehicle.list.add')}
              onAction={() => navigate(ROUTES.WORKSPACES.VEHICLES.NEW(id ?? ''))}
            />
          )}

          {!isVehiclesPending && !isEmptyVehicles && (
            <VehiclesList
              vehicles={vehicles}
              onSelect={(vehicle) =>
                navigate(ROUTES.WORKSPACES.VEHICLES.DETAIL(id ?? '', vehicle.id))
              }
            />
          )}
        </Stack>
      )}

      {activeTab === 'members' && (
        <Stack gap="xl">
          <PageHeader
            title={t('workspace.members.title')}
            buttonLabel={t('workspace.members.invite')}
            buttonIcon="userPlus"
            onCreate={() =>
              modal.open(
                <InviteForm workspaceId={id ?? ''} onSuccess={() => modal.closeLast()} />,
                { title: t('workspace.invite.title') },
              )
            }
          />

          <MembersList
            members={members}
            invites={pendingInvites}
            currentUserId={user?.id ?? ''}
            currentUserRole={workspace.role}
            onEdit={(member) =>
              modal.open(
                <EditMemberRoleModal
                  workspaceId={id ?? ''}
                  member={member}
                  onSuccess={() => modal.closeLast()}
                />,
                { title: t('workspace.members.editRole') },
              )
            }
            onRemove={(member) => handleRemoveMember(member)}
            onCancelInvite={handleCancelInvite}
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

          {(canDelete || canLeave) && (
            <Stack gap="md">
              <Text weight="semibold" size="lg">
                {t('workspace.settings.danger.title')}
              </Text>

              {canLeave && (
                <Button
                  variant="soft"
                  leftIcon="logOut"
                  onClick={handleLeave}
                  color="danger"
                  size="lg"
                >
                  {t('workspace.detail.leave')}
                </Button>
              )}

              {canDelete && (
                <Button
                  variant="soft"
                  leftIcon="trash"
                  onClick={handleDelete}
                  color="danger"
                  size="lg"
                >
                  {t('workspace.settings.danger.delete')}
                </Button>
              )}
            </Stack>
          )}
        </Stack>
      )}
    </Stack>
  );
};
