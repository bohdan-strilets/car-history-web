import { Grid, Stack } from '@shared/ui';
import { PageHeaderSkeleton } from '@widgets/page-header';

import { MediaCardSkeleton } from '../media-card';

export const MediaGallerySkeleton = () => {
  return (
    <Stack gap="xl">
      <PageHeaderSkeleton />
      <Grid columns={{ mobile: '2', tablet: '3', laptop: '4' }} gap="sm">
        {Array.from({ length: 12 }).map((_, index) => (
          <MediaCardSkeleton key={index} />
        ))}
      </Grid>
    </Stack>
  );
};
