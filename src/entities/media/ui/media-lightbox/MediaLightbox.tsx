import { useCallback, useEffect, useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Badge, Button, Portal, Spinner, Text } from '@shared/ui';
import { getConfigOption } from '@shared/utils';

import { MEDIA_CATEGORIES_CONFIG } from '../../model';

import * as styles from './media-lightbox.css';

import type { MediaLightboxProps } from './media-lightbox.types';

export const MediaLightbox = ({
  items,
  initialIndex,
  onClose,
  onDelete,
  onSetPrimary,
  isDeleting,
  isSettingPrimary,
}: MediaLightboxProps) => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(initialIndex);
  const [loadedIndex, setLoadedIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const isImageLoading = loadedIndex !== index;

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;

    if (Math.abs(delta) > 50) {
      if (delta > 0) goPrev();
      else goNext();
    }
    touchStartX.current = null;
  };

  const current = items[index];
  if (!current) return null;

  const fullUrl =
    current.variants.find((v) => v.type === 'LARGE')?.cloudinaryUrl ?? current.cloudinaryUrl;

  const categoryConfig = getConfigOption(t, MEDIA_CATEGORIES_CONFIG, current.usage.category);
  const formattedDate = new Date(current.createdAt).toLocaleDateString();

  return (
    <Portal>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.header} onClick={(e) => e.stopPropagation()}>
          <Text className={styles.counter}>
            {index + 1} / {items.length}
          </Text>
          <Button
            onClick={onClose}
            size="md"
            variant="ghost"
            iconOnly
            aria-label={t('common.actions.close')}
            leftIcon="close"
          />
        </div>

        <div
          className={styles.stage}
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {items.length > 1 && (
            <Button
              onClick={goPrev}
              size="md"
              variant="ghost"
              iconOnly
              leftIcon="arrowLeft"
              className={styles.navButtonLeft}
              aria-label={t('common.actions.back')}
            />
          )}

          <div className={styles.imageWrapper}>
            {isImageLoading && (
              <div className={styles.loadingOverlay}>
                <Spinner size="lg" />
              </div>
            )}

            {current.type === 'VIDEO' ? (
              <video
                className={styles.image}
                src={fullUrl}
                controls
                autoPlay
                onLoadedData={() => setLoadedIndex(index)}
              />
            ) : (
              <img
                className={styles.image}
                src={fullUrl}
                alt=""
                onLoad={() => setLoadedIndex(index)}
              />
            )}
          </div>

          {items.length > 1 && (
            <Button
              onClick={goNext}
              size="md"
              variant="ghost"
              iconOnly
              leftIcon="arrowRight"
              className={styles.navButtonRight}
              aria-label={t('common.actions.next')}
            />
          )}
        </div>

        <div className={styles.footer} onClick={(e) => e.stopPropagation()}>
          <div className={styles.footerInfo}>
            <Badge soft={categoryConfig?.color ?? 'gray'} startIcon={categoryConfig?.icon}>
              {categoryConfig?.label}
            </Badge>
            <Text size="xs" className={styles.metaText}>
              {formattedDate}
            </Text>
          </div>

          <div className={styles.footerActions}>
            {onSetPrimary && !current.usage.isPrimary && (
              <Button
                onClick={() => onSetPrimary(current)}
                size="sm"
                variant="ghost"
                leftIcon="star"
                loading={isSettingPrimary}
              >
                {t('media.gallery.setPrimary')}
              </Button>
            )}
            {current.usage.isPrimary && (
              <Badge soft="accent" startIcon="star">
                {t('media.gallery.primary')}
              </Badge>
            )}
            {onDelete && (
              <Button
                onClick={() => onDelete(current)}
                size="sm"
                variant="ghost"
                color="danger"
                leftIcon="trash"
                loading={isDeleting}
              >
                {t('common.actions.delete')}
              </Button>
            )}
          </div>
        </div>
      </div>
    </Portal>
  );
};
