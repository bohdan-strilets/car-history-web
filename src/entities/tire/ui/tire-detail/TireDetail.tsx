import { useTranslation } from 'react-i18next';

import { useFormatDate } from '@shared/hooks';
import { Button, Heading, IconBox, InfoRow, Stack } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { InfoSection } from '@widgets/info-section';

import { TIRE_STATUS, TIRE_STATUS_CONFIG, TIRE_TYPE_CONFIG } from '../../model';

import type { TireDetailProps } from './tire-detail.types';

export const TireDetail = ({
  tire,
  onEdit,
  onMount,
  onUnmount,
  onRetire,
  onDelete,
  isMounting,
  isUnmounting,
  isRetiring,
}: TireDetailProps) => {
  const { t } = useTranslation();
  const formatDate = useFormatDate();

  const typeConfig = getConfigOption(t, TIRE_TYPE_CONFIG, tire.type);
  const statusConfig = getConfigOption(t, TIRE_STATUS_CONFIG, tire.status);

  const isMounted = tire.status === TIRE_STATUS.MOUNTED;
  const isRetired = tire.status === TIRE_STATUS.RETIRED;
  const isStored = tire.status === TIRE_STATUS.STORED;

  return (
    <Stack gap="3xl">
      <Stack direction="row" align="center" gap="xl">
        <IconBox
          name={typeConfig?.icon ?? 'circle'}
          soft={typeConfig?.color ?? 'gray'}
          strokeWidth="medium"
          size="2xl"
        />
        <Stack gap="xs">
          <Heading size="xl">
            {tire.brand} {tire.model}
          </Heading>
          <Heading size="sm" color="tertiary">
            {tire.width}/{tire.aspectRatio} R{tire.rimDiameter}
          </Heading>
        </Stack>
      </Stack>

      <InfoSection title={t('tire.list.title')}>
        <InfoRow
          label={t('fields.status')}
          icon={statusConfig?.icon ?? 'circle'}
          iconColor={statusConfig?.color}
          value={t(`enums.tireStatus.${tire.status}`)}
          bottomDivider
        />
        <InfoRow
          label={t('fields.type')}
          icon={typeConfig?.icon ?? 'circle'}
          iconColor={typeConfig?.color}
          value={t(`enums.tireType.${tire.type}`)}
          bottomDivider
        />
        <InfoRow
          label={t('fields.quantity') ?? 'Quantity'}
          icon="package"
          iconColor="gray"
          value={`x${tire.quantity}`}
          bottomDivider={!!(tire.price || tire.storageLocation || tire.purchaseAt)}
        />
        {tire.price && (
          <InfoRow
            label={t('fields.price')}
            icon="banknote"
            iconColor="gray"
            value={`${tire.price} ${t('enums.currencyShort.PLN')}`}
            bottomDivider={!!(tire.storageLocation || tire.purchaseAt)}
          />
        )}
        {tire.storageLocation && (
          <InfoRow
            label={t('tire.fields.storageLocation')}
            icon="mapPin"
            iconColor="gray"
            value={tire.storageLocation}
            bottomDivider={!!tire.purchaseAt}
          />
        )}
        {tire.purchaseAt && (
          <InfoRow
            label={t('fields.date')}
            icon="calendar"
            iconColor="gray"
            value={formatDate(tire.purchaseAt)}
          />
        )}
      </InfoSection>

      {onEdit && (
        <Button
          type="button"
          leftIcon="edit"
          size="md"
          variant="soft"
          color="gray"
          fullWidth
          onClick={onEdit}
        >
          {t('common.actions.edit')}
        </Button>
      )}

      <Stack gap="md">
        {isStored && onMount && (
          <Button
            type="button"
            leftIcon="checkCircle"
            size="md"
            variant="soft"
            color="success"
            fullWidth
            loading={isMounting}
            onClick={onMount}
          >
            {t('tire.actions.mount')}
          </Button>
        )}
        {isMounted && onUnmount && (
          <Button
            type="button"
            leftIcon="package"
            size="md"
            variant="soft"
            color="info"
            fullWidth
            loading={isUnmounting}
            onClick={onUnmount}
          >
            {t('tire.actions.unmount')}
          </Button>
        )}
        {!isRetired && !isMounted && onRetire && (
          <Button
            type="button"
            leftIcon="xCircle"
            size="md"
            variant="soft"
            color="warning"
            fullWidth
            loading={isRetiring}
            onClick={onRetire}
          >
            {t('tire.actions.retire')}
          </Button>
        )}
      </Stack>

      {onDelete && !isMounted && (
        <Button
          type="button"
          leftIcon="trash"
          size="sm"
          variant="soft"
          color="danger"
          onClick={onDelete}
        >
          {t('tire.actions.delete')}
        </Button>
      )}
    </Stack>
  );
};
