import type { Media } from '@entities/media';
import type { Reminder } from '@entities/reminder';
import type { VehicleStats } from '@entities/stats';
import type { Vehicle } from '@entities/vehicle';
import type { PaletteColors } from '@shared/styles/model';

export interface VehicleOverviewProps {
  vehicle: Vehicle;
  actions?: React.ReactNode;
  onEditDescription?: () => void;
  onAddPurchase?: () => void;
  onAddSale?: () => void;
  upcomingReminders: Reminder[];
  onReminderClick: (reminder: Reminder) => void;
  onViewAllReminders: () => void;
  galleryPreview: Media[];
  onViewGallery: () => void;
  stats?: VehicleStats;
  onViewStats: () => void;
}
export interface SpecChipProps {
  label: string;
  value: string;
  color: PaletteColors;
}
