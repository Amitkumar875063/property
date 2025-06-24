export const formatPrice = (price: number): string => {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(1)} Cr`;
  } else if (price >= 100000) {
    return `₹${(price / 100000).toFixed(1)} L`;
  } else if (price >= 1000) {
    return `₹${(price / 1000).toFixed(0)}K`;
  }
  return `₹${price.toLocaleString('en-IN')}`;
};

export const formatRent = (rent: number): string => {
  if (rent >= 100000) {
    return `₹${(rent / 100000).toFixed(1)} L/month`;
  } else if (rent >= 1000) {
    return `₹${(rent / 1000).toFixed(0)}K/month`;
  }
  return `₹${rent.toLocaleString('en-IN')}/month`;
};