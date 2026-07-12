import { Stack } from '@shared/ui';
import { PageHeaderSkeleton } from '@widgets/page-header';

import { ConversationListItemSkeleton } from './ConversationListItemSkeleton';

interface ConversationListSkeletonProps {
  count?: number;
}

export const ConversationListSkeleton = ({ count = 6 }: ConversationListSkeletonProps) => {
  return (
    <Stack gap="3xl">
      <PageHeaderSkeleton />
      <Stack gap="lg">
        {Array.from({ length: count }).map((_, i) => (
          <ConversationListItemSkeleton key={i} />
        ))}
      </Stack>
    </Stack>
  );
};
