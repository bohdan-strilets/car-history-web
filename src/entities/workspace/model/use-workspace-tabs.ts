import { useSearchParams } from 'react-router-dom';

import { DEFAULT_WORKSPACE_TAB, WORKSPACE_TABS, type WorkspaceTab } from './workspace-tabs.config';

const VALID_TABS = WORKSPACE_TABS.map((tab) => tab.value);

export const useWorkspaceTab = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');

  const isValidTab = (tab: string | null): tab is WorkspaceTab =>
    VALID_TABS.includes(tab as WorkspaceTab);

  const activeTab: WorkspaceTab = isValidTab(tabParam) ? tabParam : DEFAULT_WORKSPACE_TAB;

  const setTab = (tab: WorkspaceTab) => {
    setSearchParams({ tab });
  };

  return { activeTab, setTab };
};
