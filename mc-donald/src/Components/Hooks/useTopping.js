import { useState } from "react";

const getTopping = (toppings) =>
  toppings.map((itemTopping) => ({
    name: itemTopping,
    checked: false,
  }));

export function useTopping(openItem) {
  const [toppingsList, setToppingsList] = useState(getTopping(openItem.toppings ?? []));

  const checkToppings = (index) =>
    setToppingsList(
      toppingsList.slice().map((item, i) => {
        if (i === index) {
          item.checked = !item.checked;
        }
        return item;
      })
    );
  return { toppingsList, checkToppings };
}
