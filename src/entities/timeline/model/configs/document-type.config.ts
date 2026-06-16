import type { EntityOption } from '@shared/types';

import { DOCUMENT_TYPES, type DocumentType } from '../timeline.constants';

export const DOCUMENT_TYPE_CONFIG: EntityOption<DocumentType>[] = [
  {
    id: '1',
    label: 'enums.documentType.INSURANCE_OC',
    value: DOCUMENT_TYPES.INSURANCE_OC,
    icon: 'shield',
    color: 'blue',
  },
  {
    id: '2',
    label: 'enums.documentType.INSURANCE_AC',
    value: DOCUMENT_TYPES.INSURANCE_AC,
    icon: 'shieldCheck',
    color: 'sky',
  },
  {
    id: '3',
    label: 'enums.documentType.TECHNICAL_INSPECTION',
    value: DOCUMENT_TYPES.TECHNICAL_INSPECTION,
    icon: 'clipboardCheck',
    color: 'green',
  },
  {
    id: '4',
    label: 'enums.documentType.LOAN',
    value: DOCUMENT_TYPES.LOAN,
    icon: 'banknote',
    color: 'amber',
  },
  {
    id: '5',
    label: 'enums.documentType.LEASING',
    value: DOCUMENT_TYPES.LEASING,
    icon: 'filePenLine',
    color: 'violet',
  },
  {
    id: '6',
    label: 'enums.documentType.VIGNETTE',
    value: DOCUMENT_TYPES.VIGNETTE,
    icon: 'ticketCheck',
    color: 'teal',
  },
  {
    id: '7',
    label: 'enums.documentType.OTHER',
    value: DOCUMENT_TYPES.OTHER,
    icon: 'fileText',
    color: 'gray',
  },
];
