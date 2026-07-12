import { Panel, Skeleton, Stack } from '@shared/ui';

export const ConversationListItemSkeleton = () => {
  return (
    <Panel direction="row" align="center" justify="between" p="2xl">
      <Stack direction="row" align="center" gap="xl">
        <Skeleton width="40px" height="40px" radius="md" />
        <Stack gap="sm">
          <Skeleton width="160px" height="20px" />
          <Skeleton width="120px" height="14px" />
        </Stack>
      </Stack>
      <Skeleton width="60px" height="14px" />
    </Panel>
  );
};
