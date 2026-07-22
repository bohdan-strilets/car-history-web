import type { TierColor } from './milestone-level-card.types';

export const getTierGradient = (levelIndex: number, totalLevels: number): TierColor => {
  if (levelIndex === 0) return 'gray';
  if (totalLevels > 0 && levelIndex >= totalLevels) return 'amber';
  const ratio = levelIndex / totalLevels;
  if (ratio < 0.5) return 'blue';
  return 'violet';
};
