export const formatCurrency = (price) =>
  price.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
  });
