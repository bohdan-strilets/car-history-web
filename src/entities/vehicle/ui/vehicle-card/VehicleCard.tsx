import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { MAINTENANCE_TYPE_CONFIG } from '@entities/maintenance';
import { TIMELINE_EVENT_TYPE } from '@entities/timeline';
import { TIRE_TYPE_CONFIG } from '@entities/tire';
import { FuelLabels, type InsuranceStatus } from '@entities/vehicle';
import { useFormatDate } from '@entities/workspace';
import { useOpenCreateTimelineEvent } from '@features/timeline';
import { ROUTES, SEARCH_PARAM_TAB } from '@shared/config';
import { useAuth } from '@shared/store';
import type { PaletteColors } from '@shared/styles/model';
import { Avatar, Badge, Box, Icon, InfoRow, Panel, Stack, Surface, Text } from '@shared/ui';
import { getConfigOption } from '@shared/utils';

import type { VehicleCardProps } from './vehicle-card.types';
import type { ParseKeys } from 'i18next';

const INSURANCE_COLOR_MAP: Record<InsuranceStatus, PaletteColors> = {
  ACTIVE: 'green',
  EXPIRING: 'orange',
  EXPIRED: 'rose',
  MISSING: 'gray',
};

export const VehicleCard = ({ vehicle, onClick, documentBadge }: VehicleCardProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const formatDate = useFormatDate();

  const { user } = useAuth();
  const currentUserId = user?.id;

  const { handleCreate } = useOpenCreateTimelineEvent({
    workspaceId: vehicle.workspaceId,
    vehicleId: vehicle.id,
    currentMileage: vehicle.currentMileage,
    vehicleFuelType: vehicle.fuelType,
  });

  const vehicleName = `${vehicle.brand} ${vehicle.model}`;

  const isGeneration = Boolean(vehicle.generation);
  const isNickname = Boolean(vehicle.nickname);
  const isOwnedByOther = currentUserId && vehicle.ownerId !== currentUserId;
  const mileageFormatted = vehicle.currentMileage.toLocaleString();
  const isSold = vehicle.status !== 'ACTIVE';

  const hasPhoto = Boolean(vehicle.primaryPhotoUrl);
  const headerStyle = hasPhoto
    ? {
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.7) 100%), url(${vehicle.primaryPhotoUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : undefined;

  const insuranceColor = INSURANCE_COLOR_MAP[vehicle.insurance.status];
  const insuranceValue =
    vehicle.insurance.status === 'MISSING'
      ? t('vehicle.card.insurance.missing')
      : vehicle.insurance.expireDate
        ? formatDate(vehicle.insurance.expireDate)
        : null;

  const maintenanceConfig = vehicle.nextMaintenance
    ? getConfigOption(t, MAINTENANCE_TYPE_CONFIG, vehicle.nextMaintenance.type)
    : undefined;
  const maintenanceValue = vehicle.nextMaintenance?.dueDate
    ? formatDate(vehicle.nextMaintenance.dueDate)
    : vehicle.nextMaintenance?.dueMileage
      ? `${vehicle.nextMaintenance.dueMileage.toLocaleString()} ${t('units.km')}`
      : null;

  const tireConfig = vehicle.tireSeason
    ? getConfigOption(t, TIRE_TYPE_CONFIG, vehicle.tireSeason)
    : undefined;

  const fuelConsumptionValue =
    vehicle.fuelConsumption.value != null ? `${vehicle.fuelConsumption.value}` : '—';

  const milestoneTitle = vehicle.latestMilestone
    ? t(`milestone.definitions.${vehicle.latestMilestone.code}.title` as ParseKeys)
    : null;

  const handleAddFuel = () => handleCreate(TIMELINE_EVENT_TYPE.REFUEL);
  const handleAddService = () => handleCreate(TIMELINE_EVENT_TYPE.SERVICE);
  const handleViewTimeline = () =>
    navigate(
      `${ROUTES.WORKSPACES.VEHICLES.DETAIL(vehicle.workspaceId, vehicle.id)}?${SEARCH_PARAM_TAB}=timeline`,
    );

  const stopAndRun = (fn: () => void) => (e: React.MouseEvent) => {
    e.stopPropagation();
    fn();
  };

  return (
    <Box onClick={onClick} style={{ cursor: onClick ? 'pointer' : undefined }}>
      <Panel p="none" hoverable>
        <Surface gradient={hasPhoto ? undefined : 'accentSolid'} radius="md" style={headerStyle}>
          <Box p="lg">
            <Stack direction="row" align="start" justify="between">
              {milestoneTitle ? (
                <Badge gradient="indigo" startIcon="trophy">
                  {milestoneTitle}
                </Badge>
              ) : (
                <span />
              )}
              <Stack direction="row" gap="xs" justify="end">
                {documentBadge && <Badge solid={documentBadge.color}>{documentBadge.label}</Badge>}
                <Badge gradient="gray">{vehicle.year}</Badge>
              </Stack>
            </Stack>

            <Stack
              direction="column"
              align="start"
              justify="end"
              gap="xs"
              style={{ height: '145px' }}
            >
              <Text size="3xl" weight="extraBold" color="onColor">
                {vehicleName}
              </Text>
              <Text color="onColor" size="sm">
                {isGeneration && `${vehicle.generation} · `}
                {mileageFormatted} km
              </Text>
              {isNickname && (
                <Text color="onColor" size="xs" style={{ opacity: 0.7 }}>
                  {vehicle.nickname}
                </Text>
              )}
            </Stack>

            {isOwnedByOther && (
              <Panel variant="glass" direction="row" align="center" gap="xs" p="sm">
                <Avatar
                  avatarUrl={vehicle.owner.avatarUrl}
                  firstName={vehicle.owner.firstName}
                  lastName={vehicle.owner.lastName}
                  size="sm"
                />
                <Text color="onColor" size="xs">
                  {vehicle.owner.firstName} {vehicle.owner.lastName}
                </Text>
              </Panel>
            )}
          </Box>
        </Surface>

        <Box p="lg">
          <Stack gap="xl">
            <Stack direction="row" align="center" justify="between">
              <FuelLabels fuels={vehicle.fuelType} />
              <Stack direction="row" align="center" gap="sm">
                {vehicle.activeRemindersCount > 0 && (
                  <Badge soft="orange" startIcon="bell">
                    {vehicle.activeRemindersCount}
                  </Badge>
                )}
                <Text weight="bold" transform="uppercase">
                  {vehicle.plateNumber}
                </Text>
              </Stack>
            </Stack>

            <Stack direction={{ mobile: 'column', tablet: 'row' }} gap="sm">
              <Panel
                width="full"
                direction="column"
                align="center"
                justify="center"
                gap="xs"
                p={{ mobile: 'sm', tablet: 'lg' }}
              >
                <Text weight="extraBold" size="xl">
                  {mileageFormatted}
                </Text>
                <Text size="xs" color="secondary">
                  {t('units.km')}
                </Text>
              </Panel>
              <Panel
                width="full"
                direction="column"
                align="center"
                justify="center"
                gap="xs"
                p={{ mobile: 'sm', tablet: 'lg' }}
              >
                <Text weight="extraBold" size="xl">
                  {fuelConsumptionValue}
                </Text>
                <Text size="xs" color="secondary">
                  {t('units.lper100km')}
                </Text>
              </Panel>
              <Panel
                width="full"
                direction="column"
                align="center"
                justify="center"
                gap="xs"
                p={{ mobile: 'sm', tablet: 'lg' }}
              >
                <Text weight="extraBold" size="xl">
                  {vehicle.monthlyExpenses.toLocaleString()}
                </Text>
                <Text size="xs" color="secondary">
                  {t('units.monthlyPln')}
                </Text>
              </Panel>
            </Stack>

            {!isSold && (
              <Stack direction={{ mobile: 'column', tablet: 'row' }} gap="sm">
                <Box
                  width="full"
                  onClick={stopAndRun(handleAddFuel)}
                  style={{ cursor: 'pointer', width: '100%' }}
                >
                  <Panel
                    width="full"
                    direction="row"
                    align="center"
                    justify="center"
                    gap="sm"
                    soft="blue"
                    hoverable
                    p={{ mobile: 'sm', tablet: 'lg' }}
                  >
                    <Icon name="fuel" size="sm" color="blue" />
                    <Text size="sm" color="blue" weight="semibold">
                      {t('vehicle.card.actions.addFuel')}
                    </Text>
                  </Panel>
                </Box>
                <Box
                  onClick={stopAndRun(handleAddService)}
                  style={{ cursor: 'pointer', width: '100%' }}
                >
                  <Panel
                    width="full"
                    direction="row"
                    align="center"
                    justify="center"
                    gap="sm"
                    soft="amber"
                    hoverable
                    p={{ mobile: 'sm', tablet: 'lg' }}
                  >
                    <Icon name="wrench" size="sm" color="amber" />
                    <Text size="sm" color="amber" weight="semibold">
                      {t('vehicle.card.actions.addService')}
                    </Text>
                  </Panel>
                </Box>
                <Box
                  onClick={stopAndRun(handleViewTimeline)}
                  style={{ cursor: 'pointer', width: '100%' }}
                >
                  <Panel
                    width="full"
                    direction="row"
                    align="center"
                    justify="center"
                    gap="sm"
                    soft="violet"
                    hoverable
                    p={{ mobile: 'sm', tablet: 'lg' }}
                  >
                    <Icon name="timeline" size="sm" color="violet" />
                    <Text size="sm" color="violet" weight="semibold">
                      {t('vehicle.card.actions.timeline')}
                    </Text>
                  </Panel>
                </Box>
              </Stack>
            )}

            <Stack gap="none">
              <InfoRow
                label={t('vehicle.card.insurance.label')}
                value={insuranceValue}
                icon="shield"
                iconColor={insuranceColor}
              />
              {vehicle.nextMaintenance && (
                <InfoRow
                  label={maintenanceConfig?.label ?? t('vehicle.card.maintenance.label')}
                  value={maintenanceValue}
                  icon={maintenanceConfig?.icon ?? 'wrench'}
                  iconColor={maintenanceConfig?.color}
                  upperDivider
                />
              )}
              {vehicle.tireSeason && (
                <InfoRow
                  label={t('vehicle.card.tireSeason.label')}
                  value={tireConfig?.label ?? null}
                  icon={tireConfig?.icon ?? 'circle'}
                  iconColor={tireConfig?.color}
                  upperDivider
                />
              )}
            </Stack>
          </Stack>
        </Box>
      </Panel>
    </Box>
  );
};
