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
  WORKSPACE_ROLE_CONFIG,
  WORKSPACE_TABS,
  WORKSPACE_TYPE_CONFIG,
  WorkspaceDetailSkeleton,
} from '@entities/workspace';
import { ROUTES } from '@shared/config';
import { useFormatDate } from '@shared/hooks';
import { useAuth } from '@shared/store';
import { Badge, Icon, Stack, StateView, Tabs, Text } from '@shared/ui';
import { getConfigOption, translateSegmentControlOptions } from '@shared/utils';
import { PageHeader } from '@widgets/page-header';

export const WorkspaceDetailPage = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { activeTab, setTab } = useWorkspaceTab();
  const formatDate = useFormatDate();

  const workspaceId = useWorkspaceId();
  const navigate = useNavigate();

  const { setActiveWorkspaceId, clearActiveWorkspaceId, activeWorkspaceId } = useWorkspace();

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
  const isCurrentWorkspace = workspace?.id === activeWorkspaceId;
  const members = membersData?.data ?? [];
  const pendingInvites = pendingInvitesData?.data ?? [];
  const settings = settingsData?.data ?? null;
  const vehicles = vehiclesData?.data ?? [];

  const typeConfig = getConfigOption(t, WORKSPACE_TYPE_CONFIG, workspace?.type ?? '');
  const roleConfig = getConfigOption(t, WORKSPACE_ROLE_CONFIG, workspace?.role ?? '');

  const switchToNextWorkspace = () => {
    if (!workspace) return;
    const next = workspaceList.find((w) => w.id !== workspace.id);

    if (next) {
      setActiveWorkspaceId(next.id);
    } else {
      clearActiveWorkspaceId();
    }
  };

  useEffect(() => {
    if (!workspace) return;
    setActiveWorkspaceId(workspace.id);
  }, [workspace?.id, setActiveWorkspaceId, workspace]);

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
    <Stack gap="2xl" style={{ minHeight: '100%' }}>
      <PageHeader
        title={workspace.name}
        buttonLabel={t('common.actions.back')}
        buttonIcon="arrowLeft"
        onCreate={() => navigate(ROUTES.WORKSPACES.ROOT)}
      />
      <Stack
        direction={{ mobile: 'column', tablet: 'row' }}
        align="start"
        justify="between"
        gap="md"
      >
        <Stack>
          <Text weight="medium" size="sm">
            {t('common.labels.createdAt')} {formatDate(workspace.createdAt)}
          </Text>
          <Stack direction="row" align="center" gap="md">
            <Stack direction="row" align="center" gap="sm">
              <Icon name="users" size="sm" />
              <Text color="tertiary" size="sm">
                {t('workspace.counts.members', { count: workspace.membersCount })}
              </Text>
            </Stack>
            <Stack direction="row" align="center" gap="sm">
              <Icon name="car" size="sm" />
              <Text color="tertiary" size="sm">
                {t('workspace.counts.vehicles', { count: workspace.vehiclesCount })}
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" align="center" gap="sm">
          <Badge soft={typeConfig?.color}>{typeConfig?.label}</Badge>
          <Badge soft={roleConfig?.color}>{roleConfig?.label}</Badge>
          {isCurrentWorkspace && <Badge soft="green">{t('common.state.active')}</Badge>}
        </Stack>
      </Stack>

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
