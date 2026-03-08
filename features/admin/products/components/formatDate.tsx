export const formatDataToDDMMYY = (dateStr?: Date): string => {
  const date = dateStr ? dateStr : new Date();
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
