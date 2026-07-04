import type { Media } from '@entities/media';

export interface MediaGridProps {
  items: Media[];
  onItemClick?: (media: Media, index: number) => void;
  onItemDelete?: (media: Media) => void;
  deletingId?: string | null;
}
