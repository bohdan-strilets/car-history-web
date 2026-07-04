import type { MediaCategory, MediaType, MediaVariantType } from './media.constants';

export type MediaId = string;

export interface MediaVariant {
  type: MediaVariantType;
  cloudinaryUrl: string;
  width: number | null;
  height: number | null;
}

export interface MediaUsage {
  entityType: string;
  entityId: string;
  category: MediaCategory;
  isPrimary: boolean;
}

export interface Media {
  id: MediaId;
  cloudinaryUrl: string;
  type: MediaType;
  mimeType: string;
  width: number | null;
  height: number | null;
  durationSeconds: number | null;
  variants: MediaVariant[];
  usage: MediaUsage;
  createdAt: string;
}
