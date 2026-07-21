import type { DashboardExpensesSummary } from '@entities/dashboard';
import type { Currency } from '@entities/workspace';

export interface ExpensesSummaryProps {
  summary: DashboardExpensesSummary;
  currency: Currency;
}
