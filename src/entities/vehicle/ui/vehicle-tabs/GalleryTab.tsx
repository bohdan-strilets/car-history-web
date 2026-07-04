import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import type { Media } from '@entities/media';
import { MediaGrid, MediaLightbox, useGalleryQuery } from '@entities/media';
import {
  useDeleteMediaMutation,
  useOpenUploadMedia,
  useSetPrimaryMediaMutation,
} from '@features/media';
import { useConfirmModal } from '@shared/lib/modal';
import { Center, Stack, StateView } from '@shared/ui';
import { PageHeader, PageHeaderSkeleton } from '@widgets/page-header';

import type { GalleryTabProps } from './vehicle-tabs.types';

export const GalleryTab = ({ workspaceId, vehicleId }: GalleryTabProps) => {
  const { t } = useTranslation();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const { data, isPending, isError } = useGalleryQuery(workspaceId, vehicleId);
  const deleteMutation = useDeleteMediaMutation(vehicleId);
  const setPrimaryMutation = useSetPrimaryMediaMutation(vehicleId);
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

  if (isPending) return <PageHeaderSkeleton />;

  if (isError)
    return (
      <Center style={{ flex: '1' }}>
        <StateView
          icon="alertCircle"
          variant="error"
          title={t('common.error.title')}
          description={t('common.error.description')}
        />
      </Center>
    );

  return (
    <Stack gap="2xl">
      <PageHeader
        title={t('media.gallery.title')}
        buttonLabel={t('media.gallery.add')}
        buttonIcon="plus"
        onCreate={handleOpen}
      />

      {isEmpty ? (
        <Center style={{ flex: '1' }}>
          <StateView
            icon="images"
            title={t('media.gallery.empty.title')}
            description={t('media.gallery.empty.description')}
            actionLabel={t('media.gallery.add')}
            onAction={handleOpen}
          />
        </Center>
      ) : (
        <MediaGrid
          items={items}
          onItemClick={(_, index) => setLightboxIndex(index)}
          onItemDelete={handleDelete}
          deletingId={deletingId}
        />
      )}

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
