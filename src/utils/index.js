export const truncateString = (str) => {
  if (str.length > 20) {
    return str.substring(0, 20) + "...";
  } else {
    return str;
  }
};
