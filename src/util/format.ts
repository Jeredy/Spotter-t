export const formattedDate = (data: string) => {
  const originalDate = data;
  const date = new Date(originalDate);

  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

export const isValidDate = (dateString: string): boolean => {
  const timestamp = Date.parse(dateString);
  return !isNaN(timestamp);
};

export const getMonth = (data: string) => {
  const date = new Date(data);

  return date.getMonth() + 1;
};
