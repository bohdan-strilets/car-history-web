import { useTranslation } from 'react-i18next';

import { StatsPeriodFilter, useStatsPeriod, useVehicleStats } from '@entities/stats';
import { StatsSkeleton } from '@entities/stats/ui';
import { Center, Stack, StateView } from '@shared/ui';
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

type VehicleStatsTabProps = {
  workspaceId: string;
  vehicleId: string;
};

export const VehicleStatsTab = ({ workspaceId, vehicleId }: VehicleStatsTabProps) => {
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

  if (isError || !stats)
    return (
      <Center style={{ flex: '1' }}>
        <StateView
          icon="alertCircle"
          variant="error"
          title={t('common.error.title')}
          description={t('common.error.description')}
          onAction={refetch}
          actionLabel={t('common.error.retry')}
        />
      </Center>
    );

  return (
    <Stack gap="xl">
      <PageHeader title={t('stats.list.title')} />
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
