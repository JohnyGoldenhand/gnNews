export const truncateText = (meessage: string, length: number) => {
  return meessage.length > length
    ? `${meessage.slice(0, length - 1)}...`
    : meessage;
};
