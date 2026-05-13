import type { IconName } from '@shared/icons';

export type Feature = {
  icon: IconName;
  text: string;
};

export type FeatureListProps = {
  features: Feature[];
};
