import type { IconName } from '@shared/icons';

export type PageHeaderProps = {
  title: string;
  onCreate: () => void;
  buttonLabel: string;
  buttonIcon: IconName;
  description?: string;
};
