import { WORKSPACE_ROLE_CONFIG, WORKSPACE_TYPE_CONFIG } from '@entities/workspace/model';
import { ROUTES } from '@shared/config';
import { useFormatDate } from '@shared/hooks';
import { Badge, Heading, Icon, IconBox, Panel, Stack, Text } from '@shared/ui';
import { translateCardSelectOptions } from '@shared/utils';
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
  createdAt,
}: WorkspaceCardProps) => {
  const { t } = useTranslation();
  const formatDate = useFormatDate();
  const navigate = useNavigate();

  const typeConfig = translateCardSelectOptions(t, WORKSPACE_TYPE_CONFIG).find(
    (option) => option.value === type,
  );
  const roleConfig = translateCardSelectOptions(t, WORKSPACE_ROLE_CONFIG).find(
    (option) => option.value === role,
  );

  const createdAtDate = formatDate(createdAt);

  return (
    <Panel gap="xl" onClick={() => navigate(ROUTES.WORKSPACES.DETAIL(id))} hoverable>
      <Stack direction="row" align="center" justify="between">
        <Stack direction="row" align="center" gap="xs">
          <Text weight="medium" size="sm">
            {t('common.createdAt')}
          </Text>
          <Text color="tertiary" size="xs">
            {createdAtDate}
          </Text>
        </Stack>
        <Stack direction="row" align="center" gap="xs">
          <Badge soft={roleConfig?.color}>{roleConfig?.label}</Badge>
          {isCurrent && <Badge soft="green">{t('common.active')}</Badge>}
        </Stack>
      </Stack>

      <Stack gap="md" align="center">
        <IconBox
          name={typeConfig?.icon ?? 'circleQuestionMark'}
          size="2xl"
          soft={typeConfig?.color}
        />
        <Heading size="2xl">{name}</Heading>
      </Stack>

      <Stack direction="row" align="center" gap="sm">
        <Icon name="users" size="sm" />
        <Text color="tertiary" size="sm">
          {t('workspace.members.count', { count: countMembers })}
        </Text>
      </Stack>
    </Panel>
  );
};
