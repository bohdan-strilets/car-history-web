import { ScrollView, SegmentControl } from '@shared/ui';

import type { TabsProps } from './tabs.types';

export const Tabs = <T extends string>({ tabs, activeTab, onChange, className }: TabsProps<T>) => {
  return (
    <ScrollView>
      <SegmentControl
        value={activeTab}
        onChange={onChange}
        options={tabs}
        withLabel
        size="md"
        className={className}
      />
    </ScrollView>
  );
};
