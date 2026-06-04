import {
  BODY_TYPE_CONFIG,
  DRIVE_TYPE_CONFIG,
  TRANSMISSION_CONFIG,
  VehicleAiFill,
  VehicleEmptySection,
} from '@entities/vehicle';
import { InfoRow, Text } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { InfoSection } from '@widgets/info-section/InfoSection';
import { useTranslation } from 'react-i18next';

import { VehicleFunFacts } from '../vehicle-fun-facts';
import { VehicleHero } from '../vehicle-hero';

import type { VehicleOverviewProps } from './vehicle-overview.types';

export const VehicleOverview = ({
  vehicle,
  actions,
  onAddPurchase,
  onAddSale,
  onEditDescription,
}: VehicleOverviewProps) => {
  const { t } = useTranslation();

  const bodyType = getConfigOption(t, BODY_TYPE_CONFIG, vehicle.bodyType);
  const transmission = getConfigOption(t, TRANSMISSION_CONFIG, vehicle.transmission);
  const driveType = getConfigOption(t, DRIVE_TYPE_CONFIG, vehicle.driveType);

  return (
    <>
      <VehicleHero vehicle={vehicle} actions={actions} />
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

      {!vehicle.purchaseInfo ? (
        <InfoSection title={t('vehicle.overview.purchaseSale')}>
          <VehicleEmptySection
            icon="shoppingCart"
            title={t('vehicle.overview.purchaseEmpty.title')}
            description={t('vehicle.overview.purchaseEmpty.description')}
            actionLabel={t('vehicle.overview.purchaseEmpty.action')}
            onAction={onAddPurchase}
          />
        </InfoSection>
      ) : (
        <InfoSection title={t('vehicle.overview.purchaseSale')}>
          {vehicle.purchaseInfo.date && (
            <InfoRow
              label={t('vehicle.overview.purchaseDate')}
              value={vehicle.purchaseInfo.date}
              icon="shoppingCart"
              iconColor="green"
              bottomDivider
            />
          )}
          {vehicle.purchaseInfo.price && (
            <InfoRow
              label={t('vehicle.overview.purchasePrice')}
              value={`${vehicle.purchaseInfo.price.toLocaleString()} PLN`}
              icon="banknote"
              iconColor="green"
              bottomDivider
            />
          )}
          {vehicle.purchaseInfo.mileage && (
            <InfoRow
              label={t('vehicle.overview.purchaseMileage')}
              value={`${vehicle.purchaseInfo.mileage.toLocaleString()} km`}
              icon="gauge"
              iconColor="green"
              bottomDivider={Boolean(vehicle.saleInfo)}
            />
          )}
          {vehicle.saleInfo ? (
            <>
              {vehicle.saleInfo.date && (
                <InfoRow
                  label={t('vehicle.overview.saleDate')}
                  value={vehicle.saleInfo.date}
                  icon="tag"
                  iconColor="orange"
                  bottomDivider
                />
              )}
              {vehicle.saleInfo.price && (
                <InfoRow
                  label={t('vehicle.overview.salePrice')}
                  value={`${vehicle.saleInfo.price.toLocaleString()} PLN`}
                  icon="banknote"
                  iconColor="orange"
                  bottomDivider
                />
              )}
              {vehicle.saleInfo.mileage && (
                <InfoRow
                  label={t('vehicle.overview.saleMileage')}
                  value={`${vehicle.saleInfo.mileage.toLocaleString()} km`}
                  icon="gauge"
                  iconColor="orange"
                />
              )}
            </>
          ) : (
            <VehicleEmptySection
              icon="car"
              title={t('vehicle.overview.saleEmpty.title')}
              description={t('vehicle.overview.saleEmpty.description')}
              actionLabel={t('vehicle.overview.saleEmpty.action')}
              onAction={onAddSale}
            />
          )}
        </InfoSection>
      )}

      {!vehicle.specs || !Object.values(vehicle.specs).some(Boolean) ? (
        <InfoSection title={t('vehicle.overview.technicalSpecs')}>
          <VehicleAiFill
            vehicleId={vehicle.id}
            workspaceId={vehicle.workspaceId}
            onFill={() => null}
          />
        </InfoSection>
      ) : (
        <InfoSection title={t('vehicle.overview.technicalSpecs')}>
          {vehicle.specs.engineCode && (
            <InfoRow
              label={t('vehicle.specs.engineCode')}
              value={vehicle.specs.engineCode}
              icon="hash"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.enginePowerHp && (
            <InfoRow
              label={t('vehicle.specs.enginePowerHp')}
              value={`${vehicle.specs.enginePowerHp} HP`}
              icon="zap"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.enginePowerKw && (
            <InfoRow
              label={t('vehicle.specs.enginePowerKw')}
              value={`${vehicle.specs.enginePowerKw} kW`}
              icon="zap"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.torqueNm && (
            <InfoRow
              label={t('vehicle.specs.torqueNm')}
              value={`${vehicle.specs.torqueNm} Nm`}
              icon="gauge"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.cylindersCount && (
            <InfoRow
              label={t('vehicle.specs.cylindersCount')}
              value={String(vehicle.specs.cylindersCount)}
              icon="grid"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.gearsCount && (
            <InfoRow
              label={t('vehicle.specs.gearsCount')}
              value={String(vehicle.specs.gearsCount)}
              icon="cog"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.turbo !== undefined && (
            <InfoRow
              label={t('vehicle.specs.turbo')}
              value={vehicle.specs.turbo ? t('common.yes') : t('common.no')}
              icon="wind"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.fuelTankCapacity && (
            <InfoRow
              label={t('vehicle.specs.fuelTankCapacity')}
              value={`${vehicle.specs.fuelTankCapacity} l`}
              icon="droplets"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.combinedConsumption && (
            <InfoRow
              label={t('vehicle.specs.combinedConsumption')}
              value={`${vehicle.specs.combinedConsumption} l/100km`}
              icon="fuel"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.cityConsumption && (
            <InfoRow
              label={t('vehicle.specs.cityConsumption')}
              value={`${vehicle.specs.cityConsumption} l/100km`}
              icon="fuel"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.highwayConsumption && (
            <InfoRow
              label={t('vehicle.specs.highwayConsumption')}
              value={`${vehicle.specs.highwayConsumption} l/100km`}
              icon="fuel"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.batteryCapacityKwh && (
            <InfoRow
              label={t('vehicle.specs.batteryCapacityKwh')}
              value={`${vehicle.specs.batteryCapacityKwh} kWh`}
              icon="batteryCharging"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.electricRangeKm && (
            <InfoRow
              label={t('vehicle.specs.electricRangeKm')}
              value={`${vehicle.specs.electricRangeKm} km`}
              icon="zap"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.co2EmissionGKm && (
            <InfoRow
              label={t('vehicle.specs.co2EmissionGKm')}
              value={`${vehicle.specs.co2EmissionGKm} g/km`}
              icon="cloud"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.euroStandard && (
            <InfoRow
              label={t('vehicle.specs.euroStandard')}
              value={vehicle.specs.euroStandard}
              icon="shield"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.accelerationSec && (
            <InfoRow
              label={t('vehicle.specs.accelerationSec')}
              value={`${vehicle.specs.accelerationSec}s`}
              icon="timer"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.topSpeedKmh && (
            <InfoRow
              label={t('vehicle.specs.topSpeedKmh')}
              value={`${vehicle.specs.topSpeedKmh} km/h`}
              icon="gauge"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.weightKg && (
            <InfoRow
              label={t('vehicle.specs.weightKg')}
              value={`${vehicle.specs.weightKg} kg`}
              icon="package"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.lengthMm && (
            <InfoRow
              label={t('vehicle.specs.lengthMm')}
              value={`${vehicle.specs.lengthMm} mm`}
              icon="ruler"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.widthMm && (
            <InfoRow
              label={t('vehicle.specs.widthMm')}
              value={`${vehicle.specs.widthMm} mm`}
              icon="ruler"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.heightMm && (
            <InfoRow
              label={t('vehicle.specs.heightMm')}
              value={`${vehicle.specs.heightMm} mm`}
              icon="ruler"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.wheelbaseMm && (
            <InfoRow
              label={t('vehicle.specs.wheelbaseMm')}
              value={`${vehicle.specs.wheelbaseMm} mm`}
              icon="ruler"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.groundClearanceMm && (
            <InfoRow
              label={t('vehicle.specs.groundClearanceMm')}
              value={`${vehicle.specs.groundClearanceMm} mm`}
              icon="ruler"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.trunkVolumeLiters && (
            <InfoRow
              label={t('vehicle.specs.trunkVolumeLiters')}
              value={`${vehicle.specs.trunkVolumeLiters} l`}
              icon="package"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.numberOfSeats && (
            <InfoRow
              label={t('vehicle.specs.numberOfSeats')}
              value={String(vehicle.specs.numberOfSeats)}
              icon="users"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.numberOfDoors && (
            <InfoRow
              label={t('vehicle.specs.numberOfDoors')}
              value={String(vehicle.specs.numberOfDoors)}
              icon="doorClosed"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.airbagsCount && (
            <InfoRow
              label={t('vehicle.specs.airbagsCount')}
              value={String(vehicle.specs.airbagsCount)}
              icon="shield"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.ncapRating && (
            <InfoRow
              label={t('vehicle.specs.ncapRating')}
              value={`${vehicle.specs.ncapRating}/5`}
              icon="star"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.tireSizeFront && (
            <InfoRow
              label={t('vehicle.specs.tireSizeFront')}
              value={vehicle.specs.tireSizeFront}
              icon="circle"
              iconColor="sky"
              bottomDivider
            />
          )}
          {vehicle.specs.tireSizeRear && (
            <InfoRow
              label={t('vehicle.specs.tireSizeRear')}
              value={vehicle.specs.tireSizeRear}
              icon="circle"
              iconColor="sky"
            />
          )}
        </InfoSection>
      )}

      {vehicle.description ? (
        <InfoSection title={t('vehicle.overview.description')}>
          <Text size="lg" letterSpacing="wide">
            {vehicle.description}
          </Text>
        </InfoSection>
      ) : (
        <InfoSection title={t('vehicle.overview.description')}>
          <VehicleEmptySection
            icon="note"
            title={t('vehicle.overview.descriptionEmpty.title')}
            description={t('vehicle.overview.descriptionEmpty.description')}
            actionLabel={t('vehicle.overview.descriptionEmpty.action')}
            onAction={onEditDescription}
          />
        </InfoSection>
      )}
    </>
  );
};
