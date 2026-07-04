import type { MediaCategory } from '@entities/media';

export type UploadEntityType = 'VEHICLE' | 'SERVICE' | 'DOCUMENT' | 'EXPENSE' | 'TRIP' | 'TIRE';

export interface UploadMediaParams {
  file: File;
  entityType: UploadEntityType;
  entityId: string;
  category: MediaCategory;
  isPrimary?: boolean;
}

export type UploadItemStatus = 'pending' | 'uploading' | 'success' | 'error';

export interface UploadItem {
  id: string;
  file: File;
  previewUrl: string;
  status: UploadItemStatus;
  progress: number;
  error?: string;
}

export interface UploadGalleryParams {
  file: File;
  category: MediaCategory;
  isPrimary?: boolean;
  onProgress?: (percent: number) => void;
}
