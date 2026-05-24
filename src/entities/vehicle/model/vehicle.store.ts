import { STORAGE_KEYS } from '@shared/lib/storage';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { VehicleStore } from './vehicle.types';

export const useVehicleStore = create<VehicleStore>()(
  persist(
    (set) => ({
      activeVehicleId: null,

      setActiveVehicleId: (id) => set({ activeVehicleId: id }),
      clearActiveVehicleId: () => set({ activeVehicleId: null }),
    }),
    { name: STORAGE_KEYS.VEHICLE_STORAGE_KEY },
  ),
);
