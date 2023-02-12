export const isDateExpired = (date: Date) => {
  return date.getTime() < new Date().getTime();
};
