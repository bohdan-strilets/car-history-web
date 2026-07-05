import { useTranslation } from 'react-i18next';

import { Badge, IconBox, Stack, Text } from '@shared/ui';
import { getConfigOption } from '@shared/utils';

import { TIRE_STATUS_CONFIG, TIRE_TYPE_CONFIG } from '../../model';

import * as styles from './tire-card.css';

import type { TireCardProps } from './tire-card.types';

export const TireCard = ({ tire, onClick, onDelete }: TireCardProps) => {
  const { t } = useTranslation();

  const typeConfig = getConfigOption(t, TIRE_TYPE_CONFIG, tire.type);
  const statusConfig = getConfigOption(t, TIRE_STATUS_CONFIG, tire.status);

  return (
    <div className={styles.root} onClick={onClick} role="button" tabIndex={0}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <Text weight="semibold" truncate>
            {tire.brand} {tire.model}
          </Text>
          <div className={styles.size}>
            <Text size="sm" color="tertiary">
              {tire.width}/{tire.aspectRatio} R{tire.rimDiameter}
            </Text>
          </div>
        </div>

        {statusConfig && (
          <Badge soft={statusConfig.color} startIcon={statusConfig.icon}>
            {statusConfig.label}
          </Badge>
        )}
      </div>

      <div className={styles.footer}>
        {typeConfig && (
          <Badge soft={typeConfig.color} startIcon={typeConfig.icon} size="sm">
            {typeConfig.label}
          </Badge>
        )}

        <Stack direction="row" align="center" gap="sm">
          <Text size="xs" color="tertiary">
            x{tire.quantity}
          </Text>

          {onDelete && (
            <div
              className={styles.deleteButtonWrapper}
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            >
              <IconBox name="trash" size="sm" soft="danger" />
            </div>
          )}
        </Stack>
      </div>
    </div>
  );
};
