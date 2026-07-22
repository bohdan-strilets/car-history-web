import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { MediaCard } from '@entities/media';
import { MilestoneLevelCard } from '@entities/milestone';
import { ReminderCard } from '@entities/reminder';
import {
  BODY_TYPE_CONFIG,
  DRIVE_TYPE_CONFIG,
  TRANSMISSION_CONFIG,
  VehicleAiFill,
  VehicleEmptySection,
} from '@entities/vehicle';
import { Button, Grid, Heading, Icon, InfoRow, Panel, Stack, Text } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { InfoSection } from '@widgets/info-section/InfoSection';

import { VehicleFunFacts } from '../vehicle-fun-facts';
import { VehicleHero } from '../vehicle-hero';

import { SpecChip } from './SpecChip';
import { getExpensesBreakdown } from './vehicle-overview.utils';
import { SPEC_GROUPS } from './vehicle-specs-groups';

import type { VehicleOverviewProps } from './vehicle-overview.types';

export const VehicleOverview = ({
  vehicle,
  actions,
  onAddPurchase,
  onAddSale,
  onEditDescription,
  upcomingReminders,
  onReminderClick,
  onViewAllReminders,
  galleryPreview,
  onViewGallery,
  stats,
  onViewStats,
  milestoneLevels,
}: VehicleOverviewProps) => {
  const [isFunFactsOpen, setIsFunFactsOpen] = useState(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const { t } = useTranslation();

  const bodyType = getConfigOption(t, BODY_TYPE_CONFIG, vehicle.bodyType);
  const transmission = getConfigOption(t, TRANSMISSION_CONFIG, vehicle.transmission);
  const driveType = getConfigOption(t, DRIVE_TYPE_CONFIG, vehicle.driveType);

  const hasAnySpecs = Boolean(vehicle.specs) && Object.values(vehicle.specs ?? {}).some(Boolean);
  const specGroupsWithItems = vehicle.specs
    ? SPEC_GROUPS.map((group) => ({ group, items: group.getItems(vehicle.specs!, t) })).filter(
        ({ items }) => items.length > 0,
      )
    : [];

  const expenses = stats ? getExpensesBreakdown(stats) : null;
  const hasExpenses = expenses && (expenses.total > 0 || stats!.costsByCategory.length > 0);

  return (
    <>
      <VehicleHero vehicle={vehicle} actions={actions} />

      {galleryPreview.length > 0 && (
        <Stack gap="md">
          <Stack direction="row" align="center" justify="between">
            <Heading size="xl">{t('vehicle.overview.sections.gallery')}</Heading>
            <Button variant="ghost" size="sm" onClick={onViewGallery}>
              {t('common.labels.seeAll')}
            </Button>
          </Stack>
          <Grid columns={{ mobile: '2', tablet: '4' }} gap="sm">
            {galleryPreview.map((media) => (
              <MediaCard key={media.id} media={media} onClick={onViewGallery} />
            ))}
          </Grid>
        </Stack>
      )}

      {milestoneLevels.length > 0 && (
        <Stack gap="md">
          <Button
            variant="ghost"
            size="sm"
            rightIcon={isAchievementsOpen ? 'chevronUp' : 'chevronDown'}
            onClick={() => setIsAchievementsOpen((prev) => !prev)}
          >
            {t('vehicle.overview.sections.achievements')}
          </Button>
          {isAchievementsOpen && (
            <Grid columns={{ mobile: '1', tablet: '3' }} gap="sm">
              {milestoneLevels.map((level) => (
                <MilestoneLevelCard key={level.group} level={level} />
              ))}
            </Grid>
          )}
        </Stack>
      )}

      <Stack gap="md">
        <Button
          variant="ghost"
          size="sm"
          rightIcon={isFunFactsOpen ? 'chevronUp' : 'chevronDown'}
          onClick={() => setIsFunFactsOpen((prev) => !prev)}
        >
          {t('vehicle.detail.funFacts.title')}
        </Button>
        {isFunFactsOpen && <VehicleFunFacts vehicle={vehicle} />}
      </Stack>

      <InfoSection title={t('vehicle.overview.sections.basicInfo')}>
        <InfoRow
          label={t('vehicle.fields.brand')}
          value={vehicle.brand}
          icon="car"
          iconColor="blue"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.fields.model')}
          value={vehicle.model}
          icon="car"
          iconColor="blue"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.fields.year')}
          value={String(vehicle.year)}
          icon="calendar"
          iconColor="blue"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.fields.generation')}
          value={vehicle.generation}
          icon="tag"
          iconColor="blue"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.fields.plateNumber')}
          value={vehicle.plateNumber}
          icon="creditCard"
          iconColor="blue"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.fields.vin')}
          value={vehicle.vin}
          icon="hash"
          iconColor="blue"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.fields.currentMileage')}
          value={`${vehicle.currentMileage.toLocaleString()} km`}
          icon="gauge"
          iconColor="blue"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.fields.color')}
          value={vehicle.color}
          icon="palette"
          iconColor="blue"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.fields.nickname')}
          value={vehicle.nickname}
          icon="caseSensitive"
          iconColor="blue"
          bottomDivider
        />
        <InfoRow
          label={t('vehicle.fields.countryOfOrigin')}
          value={vehicle.countryOfOrigin}
          icon="globe"
          iconColor="blue"
        />
      </InfoSection>

      <Stack gap="md">
        <Heading size="xl">{t('vehicle.overview.sections.quickSpecs')}</Heading>
        <Grid columns={{ mobile: '2', tablet: '4' }} gap="lg">
          <SpecChip
            label={t('vehicle.fields.engineDisplacementCc')}
            value={`${vehicle.engineDisplacementCc} ${t('units.cc')}`}
            color="sky"
          />
          {bodyType && (
            <SpecChip label={t('vehicle.fields.bodyType')} value={bodyType.label} color="sky" />
          )}
          {transmission && (
            <SpecChip
              label={t('vehicle.fields.transmission')}
              value={transmission.label}
              color="sky"
            />
          )}
          {driveType && (
            <SpecChip label={t('vehicle.fields.driveType')} value={driveType.label} color="sky" />
          )}
        </Grid>
      </Stack>

      {!hasAnySpecs ? (
        <InfoSection title={t('vehicle.overview.sections.specs')}>
          <VehicleAiFill
            vehicleId={vehicle.id}
            workspaceId={vehicle.workspaceId}
            onFill={() => null}
          />
        </InfoSection>
      ) : (
        specGroupsWithItems.map(({ group, items }) => (
          <Stack key={group.id} gap="md">
            <Heading size="xl">{t(group.titleKey)}</Heading>
            <Grid columns={{ mobile: '2', tablet: '3' }} gap="lg">
              {items.map((item) => (
                <SpecChip
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  color={group.color}
                />
              ))}
            </Grid>
          </Stack>
        ))
      )}

      {!vehicle.purchaseInfo ? (
        <InfoSection title={t('vehicle.overview.sections.purchaseSale')}>
          <VehicleEmptySection
            icon="shoppingCart"
            title={t('vehicle.overview.empty.purchase.title')}
            description={t('vehicle.overview.empty.purchase.description')}
            actionLabel={t('vehicle.overview.empty.purchase.action')}
            onAction={onAddPurchase}
          />
        </InfoSection>
      ) : (
        <InfoSection title={t('vehicle.overview.sections.purchaseSale')}>
          {vehicle.purchaseInfo.date && (
            <InfoRow
              label={t('vehicle.overview.fields.purchaseDate')}
              value={vehicle.purchaseInfo.date}
              icon="shoppingCart"
              iconColor="green"
              bottomDivider
            />
          )}
          {vehicle.purchaseInfo.price && (
            <InfoRow
              label={t('vehicle.overview.fields.purchasePrice')}
              value={`${vehicle.purchaseInfo.price.toLocaleString()} PLN`}
              icon="banknote"
              iconColor="green"
              bottomDivider
            />
          )}
          {vehicle.purchaseInfo.mileage && (
            <InfoRow
              label={t('vehicle.overview.fields.purchaseMileage')}
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
                  label={t('vehicle.overview.fields.saleDate')}
                  value={vehicle.saleInfo.date}
                  icon="tag"
                  iconColor="orange"
                  bottomDivider
                />
              )}
              {vehicle.saleInfo.price && (
                <InfoRow
                  label={t('vehicle.overview.fields.salePrice')}
                  value={`${vehicle.saleInfo.price.toLocaleString()} PLN`}
                  icon="banknote"
                  iconColor="orange"
                  bottomDivider
                />
              )}
              {vehicle.saleInfo.mileage && (
                <InfoRow
                  label={t('vehicle.overview.fields.saleMileage')}
                  value={`${vehicle.saleInfo.mileage.toLocaleString()} km`}
                  icon="gauge"
                  iconColor="orange"
                />
              )}
            </>
          ) : (
            <VehicleEmptySection
              icon="car"
              title={t('vehicle.overview.empty.sale.title')}
              description={t('vehicle.overview.empty.sale.description')}
              actionLabel={t('vehicle.overview.empty.sale.action')}
              onAction={onAddSale}
            />
          )}
        </InfoSection>
      )}

      {upcomingReminders.length > 0 && (
        <Stack gap="md">
          <Stack direction="row" align="center" justify="between">
            <Heading size="xl">{t('vehicle.overview.sections.reminders')}</Heading>
            <Button variant="ghost" size="sm" onClick={onViewAllReminders}>
              {t('common.labels.seeAll')}
            </Button>
          </Stack>
          <Stack gap="lg">
            {upcomingReminders.map((reminder) => (
              <ReminderCard
                key={reminder.id}
                reminder={reminder}
                onClick={() => onReminderClick(reminder)}
              />
            ))}
          </Stack>
        </Stack>
      )}

      {hasExpenses && expenses && (
        <Panel gradient="purple" p={{ mobile: 'lg', tablet: '2xl' }}>
          <Stack gap="xl">
            <Stack direction="row" align="center" gap="md">
              <Panel variant="glass" p="sm" radius="pill">
                <Icon name="wallet" color="onColor" size="lg" />
              </Panel>
              <Stack gap="none">
                <Text color="onColor" weight="bold" size="lg">
                  {t('vehicle.overview.sections.expenses')}
                </Text>
                <Text color="secondary" size="sm">
                  {t('vehicle.overview.expenses.subtitle')}
                </Text>
              </Stack>
            </Stack>

            <Panel variant="glass" p="lg">
              <Text color="secondary" size="xs" transform="uppercase">
                {t('vehicle.overview.expenses.total')}
              </Text>
              <Text color="onColor" size="3xl" weight="extraBold">
                {expenses.total.toLocaleString()} zł
              </Text>
            </Panel>

            <Grid columns={{ mobile: '2', tablet: '4' }} gap="lg">
              <Panel variant="glass" p="md" gap="none">
                <Text color="secondary" size="xs">
                  {t('vehicle.overview.expenses.categories.fuel')}
                </Text>
                <Text color="onColor" weight="bold">
                  {expenses.fuel.toLocaleString()} zł
                </Text>
              </Panel>
              <Panel variant="glass" p="md" gap="none">
                <Text color="secondary" size="xs">
                  {t('vehicle.overview.expenses.categories.service')}
                </Text>
                <Text color="onColor" weight="bold">
                  {expenses.service.toLocaleString()} zł
                </Text>
              </Panel>
              <Panel variant="glass" p="md" gap="none">
                <Text color="secondary" size="xs">
                  {t('vehicle.overview.expenses.categories.documents')}
                </Text>
                <Text color="onColor" weight="bold">
                  {expenses.documents.toLocaleString()} zł
                </Text>
              </Panel>
              <Panel variant="glass" p="md" gap="none">
                <Text color="secondary" size="xs">
                  {t('vehicle.overview.expenses.categories.other')}
                </Text>
                <Text color="onColor" weight="bold">
                  {expenses.other.toLocaleString()} zł
                </Text>
              </Panel>
            </Grid>

            <Panel variant="glass" hoverable onClick={onViewStats} align="center" justify="center">
              <Stack direction="row" align="center" gap="sm">
                <Icon name="trendingUp" color="onColor" size="sm" />
                <Text color="onColor" weight="semibold">
                  {t('vehicle.overview.expenses.viewDetails')}
                </Text>
              </Stack>
            </Panel>
          </Stack>
        </Panel>
      )}

      {vehicle.description ? (
        <InfoSection title={t('vehicle.overview.sections.description')}>
          <Text size="lg" letterSpacing="wide">
            {vehicle.description}
          </Text>
        </InfoSection>
      ) : (
        <InfoSection title={t('vehicle.overview.sections.description')}>
          <VehicleEmptySection
            icon="note"
            title={t('vehicle.overview.empty.description.title')}
            description={t('vehicle.overview.empty.description.description')}
            actionLabel={t('vehicle.overview.empty.description.action')}
            onAction={onEditDescription}
          />
        </InfoSection>
      )}
    </>
  );
};
