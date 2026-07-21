import type { Dashboard } from '@entities/dashboard';
import type { Currency, WorkspaceId } from '@entities/workspace';

export interface DashboardOverviewProps {
  dashboard: Dashboard;
  workspaceId: WorkspaceId;
  currency: Currency;
}
