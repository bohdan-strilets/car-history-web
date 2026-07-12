import { Stack, Text } from '@shared/ui';

import * as styles from './message-bubble.css';

import type { MessageBubbleProps } from './message-bubble.types';

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  return (
    <Stack className={styles.bubble({ role: message.role, isError: message.isError })} gap="sm">
      <Text size="md" align="left">
        {message.content}
      </Text>
    </Stack>
  );
};
