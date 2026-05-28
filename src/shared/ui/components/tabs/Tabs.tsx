import { SegmentControl } from '@shared/ui/primitives';

import type { TabsProps } from './tabs.types';

export const Tabs = <T extends string>({ tabs, activeTab, onChange, className }: TabsProps<T>) => {
  return (
    <SegmentControl
      value={activeTab}
      onChange={onChange}
      options={tabs}
      withLabel
      size="md"
      className={className}
    />
  );
};
