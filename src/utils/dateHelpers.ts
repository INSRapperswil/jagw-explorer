export const getHumanReadableTimestamp = (timestamp: number): string => {
  var date = new Date(timestamp * 1000);
  return date.toLocaleString();
};
