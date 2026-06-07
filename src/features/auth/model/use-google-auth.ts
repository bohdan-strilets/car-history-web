import { env } from '@config/env';
import { ENDPOINTS } from '@shared/api';

export const useGoogleAuth = () => {
  const endpoint = ENDPOINTS.AUTH.GOOGLE;

  const redirectToGoogle = () => {
    window.location.href = `${env.VITE_API_URL}${endpoint}`;
  };

  return { redirectToGoogle };
};
