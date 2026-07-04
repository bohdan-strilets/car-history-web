import type { MediaId } from '@entities/media';
import { apiClient } from '@shared/api';
import { ENDPOINTS } from '@shared/config';

import type { UploadMediaParams } from '../model';

export const mediaMutationApi = {
  upload: (params: UploadMediaParams, onUploadProgress?: (percent: number) => void) => {
    const formData = new FormData();

    formData.append('file', params.file);
    formData.append('entityType', params.entityType);
    formData.append('entityId', params.entityId);
    formData.append('category', params.category);

    if (params.isPrimary) {
      formData.append('isPrimary', 'true');
    }

    return apiClient.post(ENDPOINTS.MEDIA.UPLOAD, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        if (onUploadProgress && event.total) {
          onUploadProgress(Math.round((event.loaded * 100) / event.total));
        }
      },
    });
  },

  delete: (mediaId: MediaId) => {
    return apiClient.delete(ENDPOINTS.MEDIA.DETAIL(mediaId));
  },

  setPrimary: (mediaId: MediaId) => {
    return apiClient.patch(ENDPOINTS.MEDIA.SET_PRIMARY(mediaId));
  },
};
