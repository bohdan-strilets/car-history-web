import type { EntityOption } from '@shared/types';

import { EXPENSE_CATEGORIES, type ExpenseCategory } from '../timeline.constants';

export const EXPENSE_CATEGORY_CONFIG: EntityOption<ExpenseCategory>[] = [
  {
    id: '1',
    label: 'enums.expenseCategory.ACCESSORIES',
    value: EXPENSE_CATEGORIES.ACCESSORIES,
    icon: 'package',
    color: 'violet',
  },
  {
    id: '2',
    label: 'enums.expenseCategory.CARE',
    value: EXPENSE_CATEGORIES.CARE,
    icon: 'sparkles',
    color: 'cyan',
  },
  {
    id: '3',
    label: 'enums.expenseCategory.PARKING',
    value: EXPENSE_CATEGORIES.PARKING,
    icon: 'squareParking',
    color: 'blue',
  },
  {
    id: '4',
    label: 'enums.expenseCategory.FINE',
    value: EXPENSE_CATEGORIES.FINE,
    icon: 'gavel',
    color: 'rose',
  },
  {
    id: '5',
    label: 'enums.expenseCategory.REGISTRATION',
    value: EXPENSE_CATEGORIES.REGISTRATION,
    icon: 'filePenLine',
    color: 'amber',
  },
  {
    id: '6',
    label: 'enums.expenseCategory.RENTAL',
    value: EXPENSE_CATEGORIES.RENTAL,
    icon: 'key',
    color: 'teal',
  },
  {
    id: '7',
    label: 'enums.expenseCategory.OTHER',
    value: EXPENSE_CATEGORIES.OTHER,
    icon: 'moreHorizontal',
    color: 'gray',
  },
];
