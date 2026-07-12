import type { AiConversation } from '../../model';

export interface ConversationListItemProps {
  conversation: AiConversation;
  onClick?: () => void;
}
