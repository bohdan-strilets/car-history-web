import { Skeleton, Stack } from '@shared/ui';
import { InfoSection } from '@widgets/info-section/InfoSection';

export const WorkspaceSettingsSkeleton = () => {
  return (
    <>
      <InfoSection>
        <Stack gap="md">
          <Skeleton height="48px" radius="md" />
          <Skeleton height="48px" radius="md" />
        </Stack>
      </InfoSection>

      <InfoSection>
        <Stack gap="md">
          <Skeleton height="48px" radius="md" />
          <Skeleton height="48px" radius="md" />
          <Skeleton height="48px" radius="md" />
          <Skeleton height="48px" radius="md" />
          <Skeleton height="48px" radius="md" />
        </Stack>
      </InfoSection>
    </>
  );
};
