import type { Media } from '@entities/media';

export interface MediaCardProps {
  media: Media;
  onClick?: () => void;
  onDelete?: () => void;
  isDeleting?: boolean;
}
