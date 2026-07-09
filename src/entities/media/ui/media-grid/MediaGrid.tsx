import { Grid } from '@shared/ui';

import { MediaCard } from '../media-card';

import * as styles from './media-grid.css';

import type { MediaGridProps } from './media-grid.types';

export const MediaGrid = ({ items, onItemClick, onItemDelete, deletingId }: MediaGridProps) => {
  return (
    <Grid columns={{ mobile: '2', tablet: '3', laptop: '4' }} gap="sm">
      {items.map((media, index) => {
        const isDeleting = deletingId === media.id;

        return (
          <div key={media.id} className={styles.item}>
            <MediaCard
              media={media}
              onClick={() => onItemClick?.(media, index)}
              onDelete={onItemDelete ? () => onItemDelete(media) : undefined}
              isDeleting={isDeleting}
            />
          </div>
        );
      })}
    </Grid>
  );
};
