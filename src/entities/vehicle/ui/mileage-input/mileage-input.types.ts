export interface MileageInputProps {
  value: string | number | undefined;
  onChange: (value: number | undefined) => void;
  hint?: string;
}
