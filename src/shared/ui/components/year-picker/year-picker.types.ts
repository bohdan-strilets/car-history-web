export interface YearPickerProps {
  value: number | string | null;
  onChange: (year: number) => void;
  min?: number;
  max?: number;
}

export type YearPickerParams = Pick<YearPickerProps, 'value' | 'min' | 'max'>;
