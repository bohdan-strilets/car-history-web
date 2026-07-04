import { useCallback, useState } from 'react';

import type { MediaCategory } from '@entities/media';
import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { compressImage } from '@shared/utils';

import { useUploadGalleryMediaMutation } from '../api';

import type { UploadItem } from './media.types';

export const useGalleryUploader = (workspaceId: WorkspaceId, vehicleId: VehicleId) => {
  const [items, setItems] = useState<UploadItem[]>([]);
  const uploadMutation = useUploadGalleryMediaMutation(workspaceId, vehicleId);

  const updateItem = useCallback((id: string, patch: Partial<UploadItem>) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  }, []);

  const selectFiles = useCallback(async (files: File[]) => {
    const compressedFiles = await Promise.all(
      files.map(async (file) => {
        try {
          return await compressImage(file);
        } catch {
          return file;
        }
      }),
    );

    const newItems: UploadItem[] = compressedFiles.map((file) => ({
      id: crypto.randomUUID(),
      file,
      previewUrl: URL.createObjectURL(file),
      status: 'pending',
      progress: 0,
    }));

    setItems((prev) => [...prev, ...newItems]);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item) URL.revokeObjectURL(item.previewUrl);
      return prev.filter((i) => i.id !== id);
    });
  }, []);

  const startUpload = useCallback(
    async (category: MediaCategory) => {
      const queue = items.filter((item) => item.status === 'pending' || item.status === 'error');

      for (const item of queue) {
        updateItem(item.id, { status: 'uploading', progress: 0 });

        try {
          await uploadMutation.mutateAsync({
            file: item.file,
            category,
            onProgress: (percent) => {
              const capped = Math.min(percent, 90);
              updateItem(item.id, { progress: capped });
            },
          });
          updateItem(item.id, { status: 'success', progress: 100 });
        } catch {
          updateItem(item.id, { status: 'error', error: 'upload_failed' });
        }
      }
    },
    [items, uploadMutation, updateItem],
  );

  const reset = useCallback(() => {
    setItems((prev) => {
      prev.forEach((item) => URL.revokeObjectURL(item.previewUrl));
      return [];
    });
  }, []);

  const isUploading = items.some((item) => item.status === 'uploading');
  const hasPending = items.some((item) => item.status === 'pending' || item.status === 'error');

  return { items, selectFiles, removeItem, startUpload, reset, isUploading, hasPending };
};
