export const formatCurrency = (price) =>
  price.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
  });

export const totalPriceItems = (order) => {
  const countTopping = order.topping ? order.topping.filter((item) => item.checked).length : 0;
  const priceTopping = order.price * 0.1 * countTopping;

  return (order.price + priceTopping) * order.count;
};
