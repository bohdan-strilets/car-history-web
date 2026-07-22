import type { Reminder } from '@entities/reminder';
import { getReminderUrgency } from '@entities/reminder';
import type { CostByCategory, VehicleStats } from '@entities/stats';
import type { TimelineEventType } from '@entities/timeline';

const URGENCY_RANK: Record<string, number> = {
  overdue: 0,
  critical: 1,
  warning: 2,
  ok: 3,
  inactive: 4,
};

export const getUpcomingReminders = (reminders: Reminder[], limit: number): Reminder[] => {
  return reminders
    .filter((r) => r.status === 'ACTIVE')
    .sort((a, b) => {
      const rankA = URGENCY_RANK[getReminderUrgency(a.dueDate, a.status)];
      const rankB = URGENCY_RANK[getReminderUrgency(b.dueDate, b.status)];
      if (rankA !== rankB) return rankA - rankB;

      if (a.dueDate && b.dueDate) return a.dueDate.localeCompare(b.dueDate);
      if (a.dueDate) return -1;
      if (b.dueDate) return 1;
      return 0;
    })
    .slice(0, limit);
};

export interface ExpensesBreakdown {
  total: number;
  fuel: number;
  service: number;
  documents: number;
  other: number;
}

const FUEL_TYPES: TimelineEventType[] = ['REFUEL', 'CHARGE'];
const SERVICE_TYPES: TimelineEventType[] = ['SERVICE'];
const DOCUMENT_TYPES: TimelineEventType[] = ['DOCUMENT'];

const sumByTypes = (categories: CostByCategory[], types: TimelineEventType[]): number =>
  categories.filter((c) => types.includes(c.type)).reduce((sum, c) => sum + c.totalCost, 0);

export const getExpensesBreakdown = (stats: VehicleStats): ExpensesBreakdown => {
  const { costsByCategory, totalCost } = stats;

  const fuel = sumByTypes(costsByCategory, FUEL_TYPES);
  const service = sumByTypes(costsByCategory, SERVICE_TYPES);
  const documents = sumByTypes(costsByCategory, DOCUMENT_TYPES);
  const other = totalCost - fuel - service - documents;

  return { total: totalCost, fuel, service, documents, other: Math.max(other, 0) };
};
