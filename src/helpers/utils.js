export const formatNumber = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

export const truncateString = (str, nbr) => {
  if (str.length > nbr) {
    return str.substring(0, nbr) + "...";
  } else {
    return str;
  }
};
