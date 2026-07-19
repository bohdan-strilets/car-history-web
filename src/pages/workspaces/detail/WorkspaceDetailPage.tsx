import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useVehiclesQuery } from '@entities/vehicle';
import {
  canDeleteWorkspace,
  canEditWorkspace,
  MembersTab,
  SettingsTab,
  useActiveWorkspace,
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
  WorkspaceError,
} from '@entities/workspace';
import { getErrorCode } from '@shared/api';
import { ERROR_CODES, ROUTES } from '@shared/config';
import { useFormatDate } from '@shared/hooks';
import { useAuth } from '@shared/store';
import { Badge, Icon, Stack, Tabs, Text } from '@shared/ui';
import { getConfigOption, translateSegmentControlOptions } from '@shared/utils';
import { PageHeader } from '@widgets/page-header';

export const WorkspaceDetailPage = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { activeTab, setTab } = useWorkspaceTab();
  const formatDate = useFormatDate();

  const workspaceId = useWorkspaceId();
  const navigate = useNavigate();

  const { setActiveWorkspaceId, activeWorkspaceId, switchAwayFrom, handleAccessDenied } =
    useActiveWorkspace();

  const {
    data: workspaceData,
    isPending: isWorkspacePending,
    isError: isWorkspaceError,
    error: workspaceError,
    refetch,
  } = useWorkspaceQuery(workspaceId);

  const workspaceQuery = useWorkspacesQuery();
  const { data: workspacesListData } = workspaceQuery;

  const membersQuery = useWorkspaceMembersQuery(workspaceId);
  const { data: membersData, isPending: isMembersPending } = membersQuery;

  const invitesQuery = useWorkspacePendingInvitesQuery(workspaceId);
  const { data: pendingInvitesData, isPending: isInvitesPending } = invitesQuery;

  const settingsQuery = useWorkspaceSettingsQuery(workspaceId);
  const { data: settingsData, isPending: isSettingsPending } = settingsQuery;

  const vehiclesQuery = useVehiclesQuery(workspaceId);
  const { data: vehiclesData, isPending: isVehiclesPending } = vehiclesQuery;

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
    switchAwayFrom(workspaceId, workspaceList);
  };

  const isAccessIssue = (code: string) => {
    const isAccessDenied = code === ERROR_CODES.Workspace.ACCESS_DENIED;
    const isNotFound = code === ERROR_CODES.Workspace.NOT_FOUND;
    return isAccessDenied || isNotFound;
  };

  useEffect(() => {
    if (!workspace) return;
    setActiveWorkspaceId(workspace.id);
  }, [workspace?.id, setActiveWorkspaceId, workspace]);

  useEffect(() => {
    if (!isWorkspaceError) return;
    const code = getErrorCode(workspaceError);
    const accessIssue = isAccessIssue(code);

    if (accessIssue) {
      handleAccessDenied(workspaceId);
    }
  }, [isWorkspaceError, workspaceError, workspaceId, handleAccessDenied]);

  if (isWorkspacePending) return <WorkspaceDetailSkeleton />;

  if (isWorkspaceError || !workspace) {
    const code = getErrorCode(workspaceError);
    const accessIssue = isAccessIssue(code);

    if (accessIssue) {
      navigate(ROUTES.WORKSPACES.ROOT, { replace: true });
      return null;
    }

    return <WorkspaceError retry={refetch} />;
  }

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
        <VehiclesTab
          workspaceId={workspaceId}
          vehicles={vehicles}
          isPending={isVehiclesPending}
          canCreate={canEdit}
        />
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
