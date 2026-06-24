import { useState } from 'react';

import { env } from '@config/env';
import { ENDPOINTS } from '@shared/config';

export const useGoogleAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const endpoint = ENDPOINTS.AUTH.GOOGLE;

  const redirectToGoogle = () => {
    setIsLoading(true);
    window.location.href = `${env.VITE_API_URL}${endpoint}`;
  };

  return { redirectToGoogle, isLoading };
};
