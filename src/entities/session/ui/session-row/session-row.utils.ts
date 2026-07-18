import type { IconName } from '@shared/icons';

export const getDeviceIcon = (userAgent: string | null): IconName => {
  if (!userAgent) return 'monitor';

  const ua = userAgent.toLowerCase();

  if (/mobile|iphone|android|ipad|tablet/.test(ua)) return 'smartphone';

  return 'monitor';
};
