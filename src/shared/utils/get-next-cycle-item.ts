export const getNextCycleItem = <T>(items: T[], current: T): T => {
  const currentIndex = items.indexOf(current);
  const nextIndex = (currentIndex + 1) % items.length;
  return items[nextIndex];
};
