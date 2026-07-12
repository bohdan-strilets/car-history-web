import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  ConversationEmpty,
  ConversationError,
  ConversationListItem,
  ConversationListSkeleton,
  useConversationsQuery,
} from '@entities/ai-conversation';
import { ROUTES } from '@shared/config';
import { Stack } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';

export const AiListPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data, refetch, isPending, isError } = useConversationsQuery();

  const conversations = data?.data ?? [];
  const conversationCount = conversations.length;
  const isEmpty = !isPending && conversationCount === 0;

  if (isPending) return <ConversationListSkeleton />;
  if (isError) return <ConversationError retry={refetch} />;
  if (isEmpty) return <ConversationEmpty />;

  return (
    <Stack gap="3xl">
      <PageHeader
        title={t('ai.list.title')}
        onCreate={() => navigate(ROUTES.AI.NEW)}
        buttonLabel={t('ai.list.create')}
        buttonIcon="plus"
        description={t('ai.list.count', { count: conversationCount })}
      />
      <Stack gap="lg">
        {conversations.map((conversation) => (
          <ConversationListItem
            key={conversation.id}
            conversation={conversation}
            onClick={() => navigate(ROUTES.AI.DETAIL(conversation.id))}
          />
        ))}
      </Stack>
    </Stack>
  );
};
