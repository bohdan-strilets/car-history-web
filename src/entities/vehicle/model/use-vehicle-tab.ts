import { useSearchParams } from 'react-router-dom';

import { DEFAULT_VEHICLE_TAB, VEHICLE_TABS, type VehicleTab } from './vehicle-tabs.config';

const VALID_TABS = new Set(VEHICLE_TABS.map((tab) => tab.value));

export const useVehicleTab = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tabParam = searchParams.get('tab') as VehicleTab | null;
  const activeTab: VehicleTab =
    tabParam && VALID_TABS.has(tabParam) ? tabParam : DEFAULT_VEHICLE_TAB;

  const setTab = (tab: VehicleTab) => setSearchParams({ tab });

  return { activeTab, setTab };
};
