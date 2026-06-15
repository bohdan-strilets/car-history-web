import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useWorkspace, useWorkspacesQuery, WORKSPACE_TYPE_CONFIG } from '@entities/workspace';
import { ROUTES } from '@shared/config';
import { Dropdown, DropdownItem, IconBox, Panel, Stack, Text } from '@shared/ui';

import type { WorkspaceSwitcherProps } from './workspace-switcher.types';

export const WorkspaceSwitcher = ({ expanded = true, className }: WorkspaceSwitcherProps) => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();
  const navigate = useNavigate();

  const { activeWorkspaceId, setActiveWorkspaceId } = useWorkspace();

  const { data } = useWorkspacesQuery();
  const workspaces = data?.data ?? [];
  const workspaceCount = workspaces.length;
  const activeWorkspace = workspaces.find((ws) => ws.id === activeWorkspaceId);

  const activeWorkspaceConfig = WORKSPACE_TYPE_CONFIG.find(
    (config) => config.value === activeWorkspace?.type,
  );
  const activeWorkspaceName = activeWorkspace?.name ?? '—';

  const handleSelect = (workspace: (typeof workspaces)[number]) => {
    setActiveWorkspaceId(workspace.id);
    setOpen(false);
  };

  const dropdownContent = (
    <Stack gap="md">
      {workspaces.map((ws) => {
        const isSelected = ws.id === activeWorkspaceId;
        const icon = WORKSPACE_TYPE_CONFIG.find((config) => config.value === ws.type)?.icon;
        return (
          <DropdownItem
            key={ws.id}
            label={ws.name}
            leftIcon={icon ?? 'circleQuestionMark'}
            selected={isSelected}
            onClick={() => handleSelect(ws)}
          />
        );
      })}
      <DropdownItem
        label={t('workspace.list.create')}
        leftIcon="plus"
        onClick={() => {
          setOpen(false);
          navigate(ROUTES.WORKSPACES.NEW);
        }}
      />
    </Stack>
  );

  if (!expanded) {
    return (
      <Dropdown
        direction="right"
        open={open}
        onOpenChange={setOpen}
        className={className}
        trigger={
          <Panel p="sm" radius="md" hoverable>
            <IconBox
              name={activeWorkspaceConfig?.icon ?? 'circleQuestionMark'}
              soft={activeWorkspaceConfig?.color}
            />
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
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Panel
          p="md"
          radius="md"
          direction="row"
          align="center"
          justify="start"
          hoverable
          className={className}
        >
          <IconBox
            name={activeWorkspaceConfig?.icon ?? 'circleQuestionMark'}
            soft={activeWorkspaceConfig?.color}
          />
          <Stack gap="none" align="start">
            <Text size="md" weight="medium">
              {activeWorkspaceName}
            </Text>
            <Text size="xs" color="tertiary">
              {t('workspace.counts.workspaces', { count: workspaceCount })}
            </Text>
          </Stack>
        </Panel>
      }
    >
      {dropdownContent}
    </Dropdown>
  );
};
