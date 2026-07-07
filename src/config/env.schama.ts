import { z } from 'zod';

export const envSchema = z.object({
  VITE_API_URL: z.url(),

  VITE_GOOGLE_MAPS_API_KEY: z.string(),
  VITE_GOOGLE_MAPS_MAP_ID: z.string(),
});
