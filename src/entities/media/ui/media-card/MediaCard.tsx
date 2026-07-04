import { useTranslation } from 'react-i18next';

import clsx from 'clsx';

import { Badge, Button, Icon } from '@shared/ui';

import * as styles from './media-card.css';

import type { MediaCardProps } from './media-card.types';

export const MediaCard = ({ media, onClick, onDelete, isDeleting }: MediaCardProps) => {
  const { t } = useTranslation();

  const thumbnail =
    media.variants.find((v) => v.type === 'MEDIUM')?.cloudinaryUrl ??
    media.variants.find((v) => v.type === 'THUMBNAIL')?.cloudinaryUrl ??
    media.cloudinaryUrl;

  return (
    <div
      className={clsx(styles.root({ isDeleting }), 'mediaCard')}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <img className={styles.image} src={thumbnail} alt="" loading="lazy" />

      {media.type === 'VIDEO' && (
        <div className={styles.videoBadge}>
          <Badge soft="gray" size="md">
            {media.durationSeconds ? `${media.durationSeconds}s` : ''}
          </Badge>
        </div>
      )}

      {media.usage.isPrimary && (
        <div className={styles.primaryBadge}>
          <Badge soft="accent" size="md">
            {t('media.gallery.primary')}
            <Icon name="star" color="inherit" size="sm" />
          </Badge>
        </div>
      )}

      {onDelete && (
        <div className={styles.deleteButtonWrapper}>
          <Button
            type="button"
            variant="ghost"
            color="danger"
            leftIcon="trash"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            data-testid="media-card-delete-button"
            disabled={isDeleting}
            aria-label="delete"
            iconOnly
          />
        </div>
      )}
    </div>
  );
};
