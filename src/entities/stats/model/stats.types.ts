import type { TimelineEventType } from '@entities/timeline';
import type { RefuelType, VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';

import type { StatsPeriod } from './stats.constants';

// Stats types

export type CostByCategory = {
  type: TimelineEventType;
  totalCost: number;
  count: number;
};

export type CostByMonth = {
  month: string; // 'YYYY-MM'
  totalCost: number;
};

export type PreviousPeriodComparison = {
  currentTotal: number;
  previousTotal: number | null;
  changePercent: number | null;
} | null;

export type FuelConsumptionPoint = {
  date: string;
  consumption: number;
  mileage: number;
};

export type FuelConsumption = {
  avgLPer100Km: number | null;
  trend: FuelConsumptionPoint[];
};

export type FuelCostByType = {
  fuelType: RefuelType;
  totalLiters: number;
  totalCost: number;
  avgPricePerLiter: number;
};

export type CostByServiceStation = {
  serviceStationId: string;
  name: string;
  totalCost: number;
  visitCount: number;
};

export type InsuranceCost = {
  year: number;
  oc: number;
  ac: number;
  total: number;
};

export type Tco = {
  sincePurchaseDate: string | null;
  totalCost: number;
  costPerKm: number | null;
};

export type VehicleStats = {
  period: { from: string | null; to: string | null; type: StatsPeriod };
  totalCost: number;
  costsByCategory: CostByCategory[];
  costsByMonth: CostByMonth[];
  cheapestMonth: CostByMonth | null;
  mostExpensiveMonth: CostByMonth | null;
  previousPeriodComparison: PreviousPeriodComparison;
  avgCostPerKm: number | null;
  fuelConsumption: FuelConsumption;
  fuelCostByType: FuelCostByType[] | null;
  costsByServiceStation: CostByServiceStation[];
  insuranceCost: InsuranceCost;
  tco: Tco;
};

export type GetVehicleStatsParams = {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  period: StatsPeriod;
  date?: string;
};

// Stats period types

export type StatsPeriodState = {
  period: StatsPeriod;
  date: Date;
};

export type StatsPeriodActions = {
  setPeriod: (period: StatsPeriod) => void;
  goToPreviousPeriod: () => void;
  goToNextPeriod: () => void;
  resetToToday: () => void;
};
