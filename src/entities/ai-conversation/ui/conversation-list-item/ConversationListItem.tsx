import { useTranslation } from 'react-i18next';

import { useFormatDate, useMediaQuery } from '@shared/hooks';
import { IconBox, Panel, Stack, Text } from '@shared/ui';

import type { ConversationListItemProps } from './conversation-list-item.types';

export const ConversationListItem = ({ conversation, onClick }: ConversationListItemProps) => {
  const { t } = useTranslation();
  const formatDate = useFormatDate();
  const isTabletUp = useMediaQuery('tablet', 'up');

  return (
    <Panel
      direction="row"
      align="center"
      justify="between"
      p="2xl"
      onClick={onClick}
      hoverable={!!onClick}
    >
      <Stack direction="row" align="center" gap="xl">
        <IconBox name="bot" soft="orange" strokeWidth="medium" size={isTabletUp ? '2xl' : 'xl'} />
        <Stack gap="none" align="start">
          <Text weight="bold" size="xl" align="left">
            {conversation.title}
          </Text>
          <Text color="tertiary" size="sm" align="left">
            {conversation.vehicleId
              ? t('ai.conversationList.hasVehicleContext')
              : t('ai.conversationList.noVehicleContext')}
          </Text>
        </Stack>
      </Stack>
      <Text color="tertiary" size="sm">
        {formatDate(conversation.updatedAt)}
      </Text>
    </Panel>
  );
};
