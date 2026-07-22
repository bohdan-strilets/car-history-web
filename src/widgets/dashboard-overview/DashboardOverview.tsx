import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ReminderCard } from '@entities/reminder';
import { getVehicleDisplayName, VehicleCard, VehicleEmptySection } from '@entities/vehicle';
import { ROUTES, SEARCH_PARAM_TAB } from '@shared/config';
import { Button, Grid, Heading, Stack, Text } from '@shared/ui';

import { getDocumentBadge } from './dashboard-overview.utils';
import { ExpensesSummary } from './ExpensesSummary';

import type { DashboardOverviewProps } from './dashboard-overview.types';

export const DashboardOverview = ({ dashboard, workspaceId, currency }: DashboardOverviewProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const activeVehicle = dashboard.vehicles[0];
  const activeVehicleLabel = activeVehicle ? getVehicleDisplayName(activeVehicle) : '—';

  return (
    <Stack gap="3xl">
      <ExpensesSummary summary={dashboard.expensesSummary} currency={currency} />

      <Stack gap="lg">
        <Stack direction="row" align="center" justify="between">
          <Heading size="lg">{t('dashboard.vehicles.title')}</Heading>
          {dashboard.vehicles.length > 0 && (
            <Button
              variant="ghost"
              rightIcon="chevronRight"
              onClick={() => navigate(ROUTES.WORKSPACES.VEHICLES.ROOT(workspaceId))}
            >
              {t('dashboard.vehicles.viewAll')}
            </Button>
          )}
        </Stack>

        {dashboard.vehicles.length === 0 ? (
          <VehicleEmptySection
            icon="car"
            title={t('vehicle.list.empty.title')}
            description={t('vehicle.list.empty.description')}
            actionLabel={t('vehicle.list.add')}
            onAction={() => navigate(ROUTES.WORKSPACES.VEHICLES.NEW(workspaceId))}
          />
        ) : (
          <Grid columns={{ mobile: '1', laptop: '2' }} gap="2xl">
            {dashboard.vehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                documentBadge={getDocumentBadge(t, vehicle)}
                onClick={() => navigate(ROUTES.WORKSPACES.VEHICLES.DETAIL(workspaceId, vehicle.id))}
              />
            ))}
          </Grid>
        )}
      </Stack>

      {dashboard.upcomingReminders.length > 0 && (
        <Stack gap="lg">
          <Heading size="lg">{t('dashboard.reminders.title')}</Heading>
          <Stack gap="md">
            {dashboard.upcomingReminders.map((reminder) => (
              <Stack key={reminder.id} gap="xs">
                <Text size="xs" color="tertiary" weight="semibold">
                  {activeVehicleLabel}
                </Text>
                <ReminderCard
                  reminder={reminder}
                  onClick={() =>
                    navigate(
                      `${ROUTES.WORKSPACES.VEHICLES.DETAIL(workspaceId, reminder.vehicleId)}?${SEARCH_PARAM_TAB}=reminders`,
                    )
                  }
                />
              </Stack>
            ))}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
