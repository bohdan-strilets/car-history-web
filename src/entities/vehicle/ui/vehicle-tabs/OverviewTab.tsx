import { useNavigate } from 'react-router-dom';

import { useGalleryQuery } from '@entities/media';
import { useRemindersQuery, type Reminder } from '@entities/reminder';
import { STATS_PERIODS, useVehicleStats } from '@entities/stats';
import { useOpenReminderDetail } from '@features/reminder';
import { useEditVehicleDescription } from '@features/vehicle';
import { ROUTES, SEARCH_PARAM_TAB } from '@shared/config';

import { VehicleActions } from '../vehicle-actions';
import { VehicleOverview } from '../vehicle-overview';
import { getUpcomingReminders } from '../vehicle-overview/vehicle-overview.utils';

import type { OverviewTabProps } from './vehicle-tabs.types';

const REMINDERS_PREVIEW_LIMIT = 2;
const GALLERY_PREVIEW_LIMIT = 4;

export const OverviewTab = ({
  vehicle,
  workspaceId,
  vehicleId,
  canEdit,
  canDelete,
}: OverviewTabProps) => {
  const navigate = useNavigate();
  const detailUrl = ROUTES.WORKSPACES.VEHICLES.DETAIL(workspaceId, vehicleId);

  const { handleEditDescription } = useEditVehicleDescription();
  const { handleOpen: handleOpenReminder } = useOpenReminderDetail({ workspaceId, vehicleId });

  const { data: remindersData } = useRemindersQuery(workspaceId, vehicleId);
  const { data: galleryData } = useGalleryQuery(workspaceId, vehicleId);
  const { data: statsData } = useVehicleStats({
    workspaceId,
    vehicleId,
    period: STATS_PERIODS.ALL,
  });

  const upcomingReminders = getUpcomingReminders(
    remindersData?.data ?? [],
    REMINDERS_PREVIEW_LIMIT,
  );
  const galleryPreview = (galleryData?.data ?? []).slice(0, GALLERY_PREVIEW_LIMIT);

  const goToTab = (tab: string) => navigate(`${detailUrl}?${SEARCH_PARAM_TAB}=${tab}`);

  const handleAddPurchase = () => {
    navigate(`${detailUrl}?${SEARCH_PARAM_TAB}=timeline&action=purchase`);
  };
  const handleAddSale = () => {
    navigate(`${detailUrl}?${SEARCH_PARAM_TAB}=timeline&action=sale`);
  };

  return (
    <VehicleOverview
      vehicle={vehicle}
      actions={
        <VehicleActions
          vehicleId={vehicleId}
          workspaceId={workspaceId}
          canEdit={canEdit}
          canDelete={canDelete}
        />
      }
      onEditDescription={() => handleEditDescription(vehicle)}
      onAddPurchase={handleAddPurchase}
      onAddSale={handleAddSale}
      upcomingReminders={upcomingReminders}
      onReminderClick={(reminder: Reminder) => handleOpenReminder(reminder)}
      onViewAllReminders={() => goToTab('reminders')}
      galleryPreview={galleryPreview}
      onViewGallery={() => goToTab('gallery')}
      stats={statsData?.data}
      onViewStats={() => goToTab('stats')}
    />
  );
};
