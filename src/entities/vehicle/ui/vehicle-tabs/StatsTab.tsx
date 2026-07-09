import { useTranslation } from 'react-i18next';

import { StatsPeriodFilter, useStatsPeriod, useVehicleStats } from '@entities/stats';
import { StatsSkeleton } from '@entities/stats/ui';
import { Stack } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';
import {
  CostsByCategoryChart,
  CostsByMonthChart,
  FuelConsumptionChart,
  FuelCostByTypeCard,
  InsuranceCostCard,
  PreviousPeriodBadge,
  ServiceStationsCostList,
  StatsSummaryCards,
} from '@widgets/vehicle-charts';

import { SoldVehicleHint } from '../sold-vehicle-hint';
import { TabsError } from '../vehicle-state';

import type { StatsTabProps } from './vehicle-tabs.types';

export const StatsTab = ({ workspaceId, vehicleId, isSold }: StatsTabProps) => {
  const { t } = useTranslation();
  const { period, date } = useStatsPeriod();

  const { data, isLoading, isError, refetch } = useVehicleStats({
    workspaceId,
    vehicleId,
    period,
    date,
  });

  const stats = data?.data;

  if (isLoading) return <StatsSkeleton />;
  if (isError || !stats) return <TabsError onAction={refetch} />;

  return (
    <Stack gap="xl">
      <PageHeader title={t('stats.list.title')} />
      {isSold && <SoldVehicleHint />}

      <StatsPeriodFilter />

      <StatsSummaryCards stats={stats} />
      <PreviousPeriodBadge comparison={stats.previousPeriodComparison} />
      <CostsByMonthChart data={stats.costsByMonth} />
      <CostsByCategoryChart data={stats.costsByCategory} />
      <FuelConsumptionChart fuelConsumption={stats.fuelConsumption} />
      <FuelCostByTypeCard fuelCostByType={stats.fuelCostByType} />
      <ServiceStationsCostList stations={stats.costsByServiceStation} />
      <InsuranceCostCard insuranceCost={stats.insuranceCost} />
    </Stack>
  );
};
