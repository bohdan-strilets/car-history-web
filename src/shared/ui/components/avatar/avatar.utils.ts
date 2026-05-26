export const getInitials = (firstName?: string, lastName?: string): string => {
  return [firstName?.[0], lastName?.[0]].filter(Boolean).join('').toUpperCase();
};
