import { MediaCard } from '../media-card';

import * as styles from './media-grid.css';

import type { MediaGridProps } from './media-grid.types';

export const MediaGrid = ({ items, onItemClick, onItemDelete, deletingId }: MediaGridProps) => {
  return (
    <div className={styles.grid}>
      {items.map((media, index) => (
        <div key={media.id} className={styles.item}>
          <MediaCard
            media={media}
            onClick={() => onItemClick?.(media, index)}
            onDelete={onItemDelete ? () => onItemDelete(media) : undefined}
            isDeleting={deletingId === media.id}
          />
        </div>
      ))}
    </div>
  );
};
