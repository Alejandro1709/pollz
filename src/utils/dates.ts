export const isDateExpired = (date: Date) => {
  // countdown hours and minutes to 0
  const now = new Date();
  const target = new Date(date);
  const diff = target.getTime() - now.getTime();

  return diff > 0;
};
