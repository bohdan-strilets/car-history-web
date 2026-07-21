import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import type { Media } from '@entities/media';
import { MediaGallerySkeleton, MediaGrid, MediaLightbox, useGalleryQuery } from '@entities/media';
import {
  useDeleteMediaMutation,
  useOpenUploadMedia,
  useSetPrimaryMediaMutation,
} from '@features/media';
import { useConfirmModal } from '@shared/lib/modal';
import { Stack } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';

import { GalleryEmpty, TabsError } from '../vehicle-state';

import type { GalleryTabProps } from './vehicle-tabs.types';

export const GalleryTab = ({ workspaceId, vehicleId, isSold }: GalleryTabProps) => {
  const { t } = useTranslation();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const { data, isPending, isError, refetch } = useGalleryQuery(workspaceId, vehicleId);
  const deleteMutation = useDeleteMediaMutation(vehicleId);
  const setPrimaryMutation = useSetPrimaryMediaMutation(workspaceId, vehicleId);
  const { confirm } = useConfirmModal();
  const { handleOpen } = useOpenUploadMedia({ workspaceId, vehicleId });

  const items: Media[] = data?.data ?? [];
  const isEmpty = items.length === 0;

  const handleDelete = (media: Media) => {
    confirm(
      {
        title: t('media.gallery.delete'),
        description: t('media.gallery.deleteConfirm'),
        danger: true,
      },
      {
        onConfirm: async (done) => {
          setDeletingId(media.id);
          try {
            await deleteMutation.mutateAsync(media.id);
            setLightboxIndex(null);
          } finally {
            setDeletingId(null);
            done();
          }
        },
      },
    );
  };

  const handleSetPrimary = (media: Media) => {
    setPrimaryMutation.mutate(media.id);
  };

  if (isPending) return <MediaGallerySkeleton />;
  if (isError) return <TabsError onAction={refetch} />;
  if (isEmpty) return <GalleryEmpty onAction={handleOpen} isSold={isSold} />;

  return (
    <Stack gap="2xl">
      <PageHeader
        title={t('media.gallery.title')}
        buttonLabel={t('media.gallery.add')}
        buttonIcon="plus"
        onCreate={handleOpen}
      />

      <MediaGrid
        items={items}
        onItemClick={(_, index) => setLightboxIndex(index)}
        onItemDelete={handleDelete}
        deletingId={deletingId}
      />

      {lightboxIndex !== null && (
        <MediaLightbox
          items={items}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onDelete={handleDelete}
          onSetPrimary={handleSetPrimary}
          isDeleting={!!deletingId}
          isSettingPrimary={setPrimaryMutation.isPending}
        />
      )}
    </Stack>
  );
};
