import {
  CURRENCY,
  DATE_FORMAT,
  DISTANCE_UNIT,
  FUEL_UNIT,
  WORKSPACE_MEMBER_ROLE,
  WORKSPACE_ROLE,
  WORKSPACE_TYPE,
  type Workspace,
  type WorkspaceMember,
  type WorkspaceMemberRole,
  type WorkspaceSettings,
} from '@entities/workspace';

import type {
  EditMemberRoleValues,
  InviteValues,
  WorkspaceSettingsValues,
  WorkspaceValues,
} from '../schemes';

// Edit member role form default values

export const editMemberRoleDefaultValues = (member: WorkspaceMember): EditMemberRoleValues => {
  const role: WorkspaceMemberRole =
    member.role === WORKSPACE_ROLE.OWNER ? WORKSPACE_MEMBER_ROLE.ADMIN : member.role;

  return { role };
};

// Edit workspace form default values

export const editWorkspaceDefaultValues = (workspace: Workspace): WorkspaceValues => {
  return {
    name: workspace.name,
    type: workspace.type,
  };
};

// Invite form default values

export const inviteDefaultValues = (): InviteValues => {
  return {
    email: '',
    role: WORKSPACE_MEMBER_ROLE.MEMBER,
  };
};

// Workspace settings form default values

export const workspaceSettingsDefaultValues = (
  settings?: WorkspaceSettings,
): WorkspaceSettingsValues => {
  return {
    currency: settings?.currency ?? CURRENCY.PLN,
    timezone: settings?.timezone ?? 'Europe/Warsaw',
    distanceUnit: settings?.distanceUnit ?? DISTANCE_UNIT.KM,
    fuelUnit: settings?.fuelUnit ?? FUEL_UNIT.L,
    dateFormat: settings?.dateFormat ?? DATE_FORMAT.DD_MM_YYYY,
  };
};

// Create workspace form default values

export const workspaceDefaultValues = (): WorkspaceValues => {
  return {
    name: '',
    type: WORKSPACE_TYPE.PERSONAL,
  };
};
