import type { UserId } from '@entities/user';
import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';

import type { MilestoneCategory } from './milestone.constants';

// Types

export type MilestoneId = string;

export type MilestoneCode =
  | 'MILEAGE_1000'
  | 'MILEAGE_5000'
  | 'MILEAGE_10000'
  | 'MILEAGE_25000'
  | 'MILEAGE_50000'
  | 'MILEAGE_75000'
  | 'MILEAGE_100000'
  | 'MILEAGE_150000'
  | 'MILEAGE_200000'
  | 'ONE_WEEK'
  | 'ONE_MONTH'
  | 'THREE_MONTHS'
  | 'SIX_MONTHS'
  | 'ONE_YEAR'
  | 'TWO_YEARS'
  | 'EXPENSES_500'
  | 'EXPENSES_1000'
  | 'EXPENSES_5000'
  | 'EXPENSES_10000'
  | 'EXPENSES_25000'
  | 'EXPENSES_50000'
  | 'EXPENSES_100000'
  | 'EXPENSES_200000'
  | 'FIRST_REFUEL'
  | 'REFUEL_10'
  | 'REFUEL_50'
  | 'REFUEL_100'
  | 'REFUEL_500'
  | 'FUEL_1000L'
  | 'FUEL_5000L'
  | 'FIRST_TIMELINE_EVENT'
  | 'FIRST_SERVICE'
  | 'FIRST_DOCUMENT'
  | 'FIRST_TRIP'
  | 'FIRST_TIRE_CHANGE'
  | 'FIRST_SERVICE_STATION'
  | 'TIMELINE_10'
  | 'TIMELINE_50'
  | 'SERVICE_5'
  | 'SERVICE_10'
  | 'FIRST_PHOTO'
  | 'FIRST_AI_MESSAGE'
  | 'PROFILE_COMPLETE'
  | 'ALL_DOCUMENTS_VALID'
  | 'STREAK_7'
  | 'STREAK_30'
  | 'FIRST_INVITE'
  | 'FIRST_SHARED_WORKSPACE'
  | 'VEHICLE_SOLD'
  | 'NEW_VEHICLE';

// Interfaces

export type MilestoneCondition = {
  type: string;
  value?: number;
  eventType?: string;
};

export type MilestoneDefinition = {
  id: string;
  code: MilestoneCode;
  category: MilestoneCategory;
  title: string;
  description: string;
  condition: MilestoneCondition;
};

export type VehicleMilestone = {
  id: MilestoneId;
  userId: UserId;
  vehicleId: VehicleId;
  milestoneDefinitionId: string;
  value: number;
  mileage: number;
  isSeen: boolean;
  achievedAt: string;
  createdAt: string;
  updatedAt: string;
  milestoneDefinition: MilestoneDefinition;
};

// Params

export type MilestonesParams = {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
};
