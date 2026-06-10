import {
  TIMELINE_EVENT_TYPE,
  type TimelineEventType,
} from '@entities/timeline/model/timeline.constants';
import type { EntityOption } from '@shared/types';

export const TIMELINE_EVENT_TYPE_CONFIG: EntityOption<TimelineEventType>[] = [
  {
    id: '1',
    label: 'timeline.types.refuel',
    value: TIMELINE_EVENT_TYPE.REFUEL,
    icon: 'fuel',
    color: 'orange',
  },
  {
    id: '2',
    label: 'timeline.types.charge',
    value: TIMELINE_EVENT_TYPE.CHARGE,
    icon: 'zap',
    color: 'sky',
  },
  {
    id: '3',
    label: 'timeline.types.service',
    value: TIMELINE_EVENT_TYPE.SERVICE,
    icon: 'wrench',
    color: 'blue',
  },
  {
    id: '4',
    label: 'timeline.types.document',
    value: TIMELINE_EVENT_TYPE.DOCUMENT,
    icon: 'fileText',
    color: 'violet',
  },
  {
    id: '5',
    label: 'timeline.types.expense',
    value: TIMELINE_EVENT_TYPE.EXPENSE,
    icon: 'receipt',
    color: 'amber',
  },
  {
    id: '6',
    label: 'timeline.types.tireChange',
    value: TIMELINE_EVENT_TYPE.TIRE_CHANGE,
    icon: 'circle',
    color: 'gray',
  },
  {
    id: '7',
    label: 'timeline.types.trip',
    value: TIMELINE_EVENT_TYPE.TRIP,
    icon: 'mapPin',
    color: 'green',
  },
  {
    id: '8',
    label: 'timeline.types.purchase',
    value: TIMELINE_EVENT_TYPE.PURCHASE,
    icon: 'shoppingCart',
    color: 'teal',
  },
  {
    id: '9',
    label: 'timeline.types.sale',
    value: TIMELINE_EVENT_TYPE.SALE,
    icon: 'tag',
    color: 'rose',
  },
];
