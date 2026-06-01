import { BODY_TYPE_CONFIG, DRIVE_TYPE_CONFIG, TRANSMISSION_CONFIG } from '@entities/vehicle';
import { InfoRow, Text } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { InfoSection } from '@widgets/info-section/InfoSection';
import { useTranslation } from 'react-i18next';

import { VehicleFunFacts } from '../vehicle-fun-facts';
import { VehicleHero } from '../vehicle-hero';

import type { VehicleOverviewProps } from './vehicle-overview.types';

export const VehicleOverview = ({ vehicle }: VehicleOverviewProps) => {
  const { t } = useTranslation();

  const bodyType = getConfigOption(t, BODY_TYPE_CONFIG, vehicle.bodyType);
  const transmission = getConfigOption(t, TRANSMISSION_CONFIG, vehicle.transmission);
  const driveType = getConfigOption(t, DRIVE_TYPE_CONFIG, vehicle.driveType);

  return (
    <>
      <VehicleHero vehicle={vehicle} />
      <VehicleFunFacts vehicle={vehicle} />

      <InfoSection title={t('vehicle.overview.basicInfo')}>
        <InfoRow
          label={t('vehicle.form.brand')}
          value={vehicle.brand}
          icon="car"
          iconColor="blue"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.form.model')}
          value={vehicle.model}
          icon="car"
          iconColor="blue"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.form.year')}
          value={String(vehicle.year)}
          icon="calendar"
          iconColor="blue"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.form.generation')}
          value={vehicle.generation}
          icon="tag"
          iconColor="blue"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.form.plateNumber')}
          value={vehicle.plateNumber}
          icon="creditCard"
          iconColor="blue"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.form.vin')}
          value={vehicle.vin}
          icon="hash"
          iconColor="blue"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.form.currentMileage')}
          value={`${vehicle.currentMileage.toLocaleString()} km`}
          icon="gauge"
          iconColor="blue"
        />
      </InfoSection>

      <InfoSection title={t('vehicle.overview.specs')}>
        <InfoRow
          label={t('vehicle.form.engineDisplacementCc')}
          value={`${vehicle.engineDisplacementCc} cm³`}
          icon="zap"
          iconColor="violet"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.form.bodyType')}
          value={bodyType?.label}
          icon="layoutGrid"
          iconColor="violet"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.form.transmission')}
          value={transmission?.label}
          icon="cog"
          iconColor="violet"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.form.driveType')}
          value={driveType?.label}
          icon="navigation"
          iconColor="violet"
        />
      </InfoSection>

      <InfoSection title={t('vehicle.overview.appearance')}>
        <InfoRow
          label={t('vehicle.form.color')}
          value={vehicle.color}
          icon="palette"
          iconColor="teal"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.form.nickname')}
          value={vehicle.nickname}
          icon="caseSensitive"
          iconColor="teal"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.form.countryOfOrigin')}
          value={vehicle.countryOfOrigin}
          icon="globe"
          iconColor="teal"
        />
      </InfoSection>

      {(vehicle.purchaseInfo || vehicle.saleInfo) && (
        <InfoSection title={t('vehicle.overview.purchaseSale')}>
          {vehicle.purchaseInfo?.date && (
            <InfoRow
              label={t('vehicle.overview.purchaseDate')}
              value={vehicle.purchaseInfo.date}
              icon="shoppingCart"
              iconColor="green"
              bottomDivider
            />
          )}
          {vehicle.purchaseInfo?.price && (
            <InfoRow
              label={t('vehicle.overview.purchasePrice')}
              value={`${vehicle.purchaseInfo.price.toLocaleString()} PLN`}
              icon="banknote"
              iconColor="green"
              bottomDivider
            />
          )}
          {vehicle.purchaseInfo?.mileage && (
            <InfoRow
              label={t('vehicle.overview.purchaseMileage')}
              value={`${vehicle.purchaseInfo.mileage.toLocaleString()} km`}
              icon="gauge"
              iconColor="green"
              bottomDivider
            />
          )}
          {vehicle.saleInfo?.date && (
            <InfoRow
              label={t('vehicle.overview.saleDate')}
              value={vehicle.saleInfo.date}
              icon="tag"
              iconColor="orange"
              bottomDivider
            />
          )}
          {vehicle.saleInfo?.price && (
            <InfoRow
              label={t('vehicle.overview.salePrice')}
              value={`${vehicle.saleInfo.price.toLocaleString()} PLN`}
              icon="banknote"
              iconColor="orange"
              bottomDivider
            />
          )}
          {vehicle.saleInfo?.mileage && (
            <InfoRow
              label={t('vehicle.overview.saleMileage')}
              value={`${vehicle.saleInfo.mileage.toLocaleString()} km`}
              icon="gauge"
              iconColor="orange"
            />
          )}
        </InfoSection>
      )}

      {vehicle.description && (
        <InfoSection title={t('vehicle.overview.description')}>
          <Text size="lg" letterSpacing="wide">
            {vehicle.description}
          </Text>
        </InfoSection>
      )}
    </>
  );
};
