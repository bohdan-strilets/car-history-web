import type { MaintenanceUrgency } from './maintenance.constants';
import type { MaintenanceInterval } from './maintenance.types';

export function getMaintenanceUrgency(
  interval: MaintenanceInterval,
  currentMileage: number,
): MaintenanceUrgency {
  if (interval.status === 'DISABLED') return 'INACTIVE';

  const now = new Date();

  let kmUrgency: MaintenanceUrgency = 'OK';
  let dateUrgency: MaintenanceUrgency = 'OK';

  if (interval.nextServiceMileage != null) {
    const kmLeft = interval.nextServiceMileage - currentMileage;
    if (kmLeft < 0) kmUrgency = 'OVERDUE';
    else if (kmLeft <= 500) kmUrgency = 'CRITICAL';
    else if (kmLeft <= 1500) kmUrgency = 'WARNING';
  }

  if (interval.nextServiceDate != null) {
    const due = new Date(interval.nextServiceDate);
    const daysLeft = Math.ceil((due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    if (daysLeft < 0) dateUrgency = 'OVERDUE';
    else if (daysLeft <= 7) dateUrgency = 'CRITICAL';
    else if (daysLeft <= 30) dateUrgency = 'WARNING';
  }

  const priority: MaintenanceUrgency[] = ['OVERDUE', 'CRITICAL', 'WARNING', 'OK'];
  return priority[Math.min(priority.indexOf(kmUrgency), priority.indexOf(dateUrgency))];
}
