import { useEffect, useState } from 'react';

export const useCooldown = (seconds: number) => {
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;

    const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  const start = () => setCooldown(seconds);
  const isActive = cooldown > 0;

  return { cooldown, start, isActive };
};
