import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useVehiclesQuery } from '@entities/vehicle';
import {
  canDeleteWorkspace,
  canEditWorkspace,
  MembersTab,
  SettingsTab,
  useWorkspace,
  useWorkspaceId,
  useWorkspaceMembersQuery,
  useWorkspacePendingInvitesQuery,
  useWorkspaceQuery,
  useWorkspaceSettingsQuery,
  useWorkspacesQuery,
  useWorkspaceTab,
  VehiclesTab,
  WORKSPACE_TABS,
  WorkspaceDetailSkeleton,
} from '@entities/workspace';
import { ROUTES } from '@shared/config';
import { useAuth } from '@shared/store';
import { Stack, StateView, Tabs } from '@shared/ui';
import { translateSegmentControlOptions } from '@shared/utils';
import { PageHeader } from '@widgets/page-header';

export const WorkspaceDetailPage = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { activeTab, setTab } = useWorkspaceTab();

  const workspaceId = useWorkspaceId();
  const navigate = useNavigate();

  const { setActiveWorkspace, setActiveWorkspaceId, clearActiveWorkspace, clearActiveWorkspaceId } =
    useWorkspace();

  const {
    data: workspaceData,
    isPending: isWorkspacePending,
    isError: isWorkspaceError,
  } = useWorkspaceQuery(workspaceId);

  const { data: workspacesListData } = useWorkspacesQuery();
  const { data: membersData, isPending: isMembersPending } = useWorkspaceMembersQuery(workspaceId);
  const { data: pendingInvitesData, isPending: isInvitesPending } =
    useWorkspacePendingInvitesQuery(workspaceId);
  const { data: settingsData, isPending: isSettingsPending } =
    useWorkspaceSettingsQuery(workspaceId);
  const { data: vehiclesData, isPending: isVehiclesPending } = useVehiclesQuery(workspaceId);

  const workspace = workspaceData?.data ?? null;
  const workspaceList = workspacesListData?.data ?? [];
  const members = membersData?.data ?? [];
  const pendingInvites = pendingInvitesData?.data ?? [];
  const settings = settingsData?.data ?? null;
  const vehicles = vehiclesData?.data ?? [];

  const switchToNextWorkspace = () => {
    if (!workspace) return;
    const next = workspaceList.find((w) => w.id !== workspace.id);

    if (next) {
      setActiveWorkspaceId(next.id);
      setActiveWorkspace(next);
    } else {
      clearActiveWorkspace();
      clearActiveWorkspaceId();
    }
  };

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

  return (
    <Stack gap="2xl">
      <PageHeader
        title={workspace.name}
        buttonLabel={t('common.actions.back')}
        buttonIcon="arrowLeft"
        onCreate={() => navigate(ROUTES.WORKSPACES.ROOT)}
      />

      <Tabs tabs={tabs} activeTab={activeTab} onChange={setTab} />

      {activeTab === 'vehicles' && (
        <VehiclesTab workspaceId={workspaceId} vehicles={vehicles} isPending={isVehiclesPending} />
      )}

      {activeTab === 'members' && (
        <MembersTab
          workspaceId={workspaceId}
          members={members}
          invites={pendingInvites}
          currentUserId={user?.id ?? ''}
          currentUserRole={workspace.role}
          isPending={isMembersPending || isInvitesPending}
        />
      )}

      {activeTab === 'settings' && (
        <SettingsTab
          workspace={workspace}
          settings={settings}
          canEdit={canEdit}
          canDelete={canDelete}
          canLeave={canLeave}
          isPending={isSettingsPending}
          onBeforeNavigate={switchToNextWorkspace}
        />
      )}
    </Stack>
  );
};
