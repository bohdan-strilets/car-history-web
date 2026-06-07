import { WORKSPACE_ROLE_CONFIG, WORKSPACE_TYPE_CONFIG } from '@entities/workspace/model';
import { ROUTES } from '@shared/config';
import { useFormatDate } from '@shared/hooks';
import { Badge, Heading, Icon, IconBox, Panel, Stack, Text } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import type { WorkspaceCardProps } from './workspace-card.types';

export const WorkspaceCard = ({
  id,
  name,
  type,
  role,
  isCurrent,
  countMembers,
  countCars,
  createdAt,
}: WorkspaceCardProps) => {
  const { t } = useTranslation();
  const formatDate = useFormatDate();
  const navigate = useNavigate();

  const typeConfig = getConfigOption(t, WORKSPACE_TYPE_CONFIG, type);
  const roleConfig = getConfigOption(t, WORKSPACE_ROLE_CONFIG, role);

  const createdAtDate = formatDate(createdAt);

  const handleClick = () => navigate(ROUTES.WORKSPACES.DETAIL(id));

  return (
    <Panel gap="xl" onClick={handleClick} hoverable>
      <Stack direction="row" align="center" justify="between">
        <Stack direction="row" align="center" gap="xs">
          <Text weight="medium" size="sm">
            {t('common.labels.createdAt')}
          </Text>
          <Text color="tertiary" size="xs">
            {createdAtDate}
          </Text>
        </Stack>
        <Stack direction="row" align="center" gap="xs">
          <Badge soft={roleConfig?.color}>{roleConfig?.label}</Badge>
          {isCurrent && <Badge soft="green">{t('common.state.active')}</Badge>}
        </Stack>
      </Stack>
      <Stack gap="md" align="center">
        <IconBox
          name={typeConfig?.icon ?? 'circleQuestionMark'}
          size="2xl"
          soft={typeConfig?.color}
        />
        <Stack gap="xs">
          <Heading size="2xl">{name}</Heading>
          <Text size="sm" color="tertiary">
            {typeConfig?.label}
          </Text>
        </Stack>
      </Stack>
      <Stack direction="row" align="center" justify="between">
        <Stack direction="row" align="center" gap="sm">
          <Icon name="users" size="sm" />
          <Text color="tertiary" size="sm">
            {t('workspace.counts.members', { count: countMembers })}
          </Text>
        </Stack>
        <Stack direction="row" align="center" gap="sm">
          <Icon name="car" size="sm" />
          <Text color="tertiary" size="sm">
            {t('workspace.counts.vehicles', { count: countCars })}
          </Text>
        </Stack>
      </Stack>
    </Panel>
  );
};
