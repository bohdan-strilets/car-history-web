import type { MilestoneCategory } from '@entities/milestone';
import type { EntityOption } from '@shared/types';

export const MILESTONE_CATEGORY_CONFIG: EntityOption<MilestoneCategory>[] = [
  {
    id: '1',
    label: 'milestone.category.mileage',
    value: 'MILEAGE',
    icon: 'mapPin',
    color: 'blue',
  },
  {
    id: '2',
    label: 'milestone.category.time',
    value: 'TIME',
    icon: 'heart',
    color: 'violet',
  },
  {
    id: '3',
    label: 'milestone.category.expenses',
    value: 'EXPENSES',
    icon: 'wallet',
    color: 'indigo',
  },
  {
    id: '4',
    label: 'milestone.category.fuel',
    value: 'FUEL',
    icon: 'droplets',
    color: 'purple',
  },
  {
    id: '5',
    label: 'milestone.category.activity',
    value: 'ACTIVITY',
    icon: 'leaf',
    color: 'green',
  },
  {
    id: '6',
    label: 'milestone.category.achievement',
    value: 'ACHIEVEMENT',
    icon: 'trophy',
    color: 'teal',
  },
];
