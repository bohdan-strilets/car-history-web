export const MESSAGE_ROLE = {
  USER: 'USER',
  ASSISTANT: 'ASSISTANT',
} as const;

export type MessageRole = (typeof MESSAGE_ROLE)[keyof typeof MESSAGE_ROLE];
