import { useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';

import clsx from 'clsx';

import { MEDIA_CATEGORIES, MEDIA_CATEGORIES_CONFIG, type MediaCategory } from '@entities/media';
import { useMediaQuery } from '@shared/hooks';
import { Button, CardSelect, Icon, IconBox, ProgressBar, Stack, Text } from '@shared/ui';
import { formatBytes, translateCardSelectOptions } from '@shared/utils';

import { useGalleryUploader } from '../../model';

import * as styles from './upload-media-form.css';

import type { UploadMediaFormProps } from './upload-media-form.types';

export const UploadMediaForm = ({ workspaceId, vehicleId, onSuccess }: UploadMediaFormProps) => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [category, setCategory] = useState<MediaCategory>(MEDIA_CATEGORIES.EXTERIOR);
  const isMobile = useMediaQuery('tablet', 'down');

  const { items, selectFiles, removeItem, startUpload, isUploading, hasPending } =
    useGalleryUploader(workspaceId, vehicleId);

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    void selectFiles(Array.from(fileList));
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleUpload = async () => {
    await startUpload(category);
    onSuccess?.();
  };

  return (
    <Stack direction="column" gap="md">
      <CardSelect
        options={translateCardSelectOptions(t, MEDIA_CATEGORIES_CONFIG)}
        onChange={(value) => {
          const selected = value[0];
          if (selected) setCategory(selected as MediaCategory);
        }}
        value={[category]}
        maxSelect={1}
      />
      <Text size="xs" color="tertiary">
        {t('media.uploader.categoryHint')}
      </Text>

      <div
        className={clsx(styles.dropzone, isDragActive && styles.dropzoneActive)}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragActive(true);
        }}
        onDragLeave={() => setIsDragActive(false)}
        onDrop={handleDrop}
        role="button"
        tabIndex={0}
      >
        <IconBox name={isMobile ? 'camera' : 'upload'} size="lg" soft="orange" />
        <Text size="sm" color="secondary" align="center">
          {isMobile ? t('media.uploader.tapToTakePhoto') : t('media.uploader.dragOrClickToUpload')}
        </Text>

        <input
          ref={inputRef}
          type="file"
          multiple
          accept="image/*,video/*"
          capture={isMobile ? 'environment' : undefined}
          className={styles.hiddenInput}
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {items.length > 0 && (
        <div className={styles.queueList}>
          {items.map((item) => (
            <div key={item.id} className={styles.queueItem}>
              <img className={styles.queueThumbnail} src={item.previewUrl} alt="" />

              <div className={styles.queueInfo}>
                <Text size="sm" truncate>
                  {item.file.name}
                </Text>

                <div className={styles.queueMeta}>
                  <Text size="xs" color="tertiary">
                    {formatBytes(item.file.size)}
                  </Text>
                  {item.status === 'error' && (
                    <Text size="xs" color="danger">
                      {t('media.uploader.uploadFailed')}
                    </Text>
                  )}
                </div>

                {item.status === 'uploading' && (
                  <ProgressBar value={item.progress} color="accent" />
                )}
              </div>

              <div className={styles.queueStatus}>
                {item.status === 'success' && <Icon name="check" size="md" color="success" />}
                {item.status === 'error' && <Icon name="fileX" size="md" color="danger" />}
              </div>

              {item.status !== 'uploading' && item.status !== 'success' && (
                <Button
                  className={styles.removeButton}
                  size="sm"
                  variant="ghost"
                  iconOnly
                  leftIcon="trash"
                  color="danger"
                  onClick={() => removeItem(item.id)}
                  aria-label="remove"
                />
              )}
            </div>
          ))}
        </div>
      )}

      <Button
        onClick={handleUpload}
        disabled={!hasPending || isUploading}
        loading={isUploading}
        fullWidth
      >
        {t('media.uploader.uploadCount', {
          count: items.filter((i) => i.status !== 'success').length,
        })}
      </Button>
    </Stack>
  );
};
