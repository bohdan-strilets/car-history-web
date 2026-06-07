import { SEARCH_PARAM_TAB } from '@shared/config';
import { useSearchParams } from 'react-router-dom';

import { DEFAULT_WORKSPACE_TAB, WORKSPACE_TABS, type WorkspaceTab } from './workspace-tabs.config';

const VALID_TABS = new Set(WORKSPACE_TABS.map((tab) => tab.value));

export const useWorkspaceTab = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get(SEARCH_PARAM_TAB) as WorkspaceTab | null;

  const isValidTab = tabParam && VALID_TABS.has(tabParam);
  const activeTab: WorkspaceTab = isValidTab ? tabParam : DEFAULT_WORKSPACE_TAB;

  const setTab = (tab: WorkspaceTab) => setSearchParams({ tab });

  return { activeTab, setTab };
};
