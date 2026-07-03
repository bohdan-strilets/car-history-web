import type {
  CostByCategory,
  CostByMonth,
  CostByServiceStation,
  FuelConsumption,
  FuelCostByType,
  InsuranceCost,
  PreviousPeriodComparison,
  VehicleStats,
} from '@entities/stats';

export type StatsSummaryCardsProps = {
  stats: VehicleStats;
};

export type PreviousPeriodBadgeProps = {
  comparison: PreviousPeriodComparison;
};

export type CostsByMonthChartProps = {
  data: CostByMonth[];
};

export type CostsByCategoryChartProps = {
  data: CostByCategory[];
};

export type FuelConsumptionChartProps = {
  fuelConsumption: FuelConsumption;
};

export type FuelCostByTypeCardProps = {
  fuelCostByType: FuelCostByType[] | null;
};

export type ServiceStationsCostListProps = {
  stations: CostByServiceStation[];
};

export type InsuranceCostCardProps = {
  insuranceCost: InsuranceCost;
};
