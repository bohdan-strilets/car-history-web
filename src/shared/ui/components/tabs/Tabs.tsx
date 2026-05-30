import { useMediaQuery } from '@shared/hooks';
import { ScrollView, SegmentControl } from '@shared/ui/primitives';

import type { TabsProps } from './tabs.types';

export const Tabs = <T extends string>({ tabs, activeTab, onChange, className }: TabsProps<T>) => {
  const isTabletUp = useMediaQuery('tablet', 'up');

  if (!isTabletUp) {
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
  }

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
