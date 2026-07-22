import type { MilestoneLevel } from '@entities/milestone';

export type TierColor = 'gray' | 'blue' | 'violet' | 'amber';

export interface MilestoneLevelCardProps {
  level: MilestoneLevel;
}
