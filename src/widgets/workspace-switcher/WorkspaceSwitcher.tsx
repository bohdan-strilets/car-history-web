import { useWorkspace, WORKSPACE_TYPE_CONFIG } from '@entities/workspace';
import { useWorkspacesQuery } from '@entities/workspace/api';
import { ROUTES } from '@shared/config';
import { Panel } from '@shared/ui';
import { Dropdown, DropdownItem } from '@shared/ui/components/dropdown';
import { IconBox, Stack, Text } from '@shared/ui/primitives';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import type { WorkspaceSwitcherProps } from './workspace-switcher.types';

export const WorkspaceSwitcher = ({
  expanded = true,
  onExpand,
  className,
}: WorkspaceSwitcherProps) => {
  const [open, setOpen] = useState(false);
  const pendingOpen = useRef(false);

  const { t } = useTranslation();
  const navigate = useNavigate();

  const { activeWorkspaceId, activeWorkspace, setActiveWorkspaceId, setActiveWorkspace } =
    useWorkspace();

  const { data } = useWorkspacesQuery();
  const workspaces = data?.data ?? [];
  const workspaceCount = workspaces.length;

  const activeWorkspaceConfig = WORKSPACE_TYPE_CONFIG.find(
    (config) => config.value === activeWorkspace?.type,
  );
  const activeWorkspaceName = activeWorkspace?.name ?? '—';

  useEffect(() => {
    if (expanded && pendingOpen.current) {
      const timer = setTimeout(() => {
        setOpen(true);
        pendingOpen.current = false;
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [expanded]);

  const handleCollapsedClick = () => {
    pendingOpen.current = true;
    onExpand?.();
  };

  const handleSelect = (workspace: (typeof workspaces)[number]) => {
    setActiveWorkspaceId(workspace.id);
    setActiveWorkspace(workspace);
    setOpen(false);
  };

  if (!expanded) {
    return (
      <Panel p="sm" radius="md" onClick={handleCollapsedClick} hoverable className={className}>
        <IconBox
          name={activeWorkspaceConfig?.icon ?? 'circleQuestionMark'}
          soft={activeWorkspaceConfig?.color}
        />
      </Panel>
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
              {t('workspace.count', { count: workspaceCount })}
            </Text>
          </Stack>
        </Panel>
      }
    >
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
          label={t('workspace.actions.new')}
          leftIcon="plus"
          onClick={() => {
            setOpen(false);
            navigate(ROUTES.WORKSPACES.NEW);
          }}
        />
      </Stack>
    </Dropdown>
  );
};
