import type { PartDraftValues, WorkDraftValues } from '@features/timeline';

export type WorkDraftFormProps = {
  onAdd: (values: WorkDraftValues) => void;
};

export type PartDraftFormProps = {
  onAdd: (values: PartDraftValues) => void;
};

export type ServiceItemCardProps = {
  name: string;
  price: number;
  description?: string;
  quantity?: number;
  unit: string;
  onRemove: () => void;
};
