import { SEARCH_PARAM_TAB } from '@shared/config';
import { useSearchParams } from 'react-router-dom';

import { DEFAULT_VEHICLE_TAB, VEHICLE_TABS, type VehicleTab } from './vehicle-tabs.config';

const VALID_TABS = new Set(VEHICLE_TABS.map((tab) => tab.value));

export const useVehicleTab = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get(SEARCH_PARAM_TAB) as VehicleTab | null;

  const isValidTab = tabParam && VALID_TABS.has(tabParam);
  const activeTab: VehicleTab = isValidTab ? tabParam : DEFAULT_VEHICLE_TAB;

  const setTab = (tab: VehicleTab) => setSearchParams({ tab });

  return { activeTab, setTab };
};
