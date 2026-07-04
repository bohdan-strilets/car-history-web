import type { Media } from '@entities/media';

export interface MediaLightboxProps {
  items: Media[];
  initialIndex: number;
  onClose: () => void;
  onDelete?: (media: Media) => void;
  onSetPrimary?: (media: Media) => void;
  isDeleting?: boolean;
  isSettingPrimary?: boolean;
}
