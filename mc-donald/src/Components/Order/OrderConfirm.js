import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../Others/contexts";
import { projection, formatCurrency, totalPriceItems } from "../Others/helperFunctions";
import { Overlay } from "../Modal/ModalItem";
import { OrderTitle, Total, TotalPrice } from "./Order";
import { ButtonPrimary } from "../Styles/ButtonPrimary";

const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 540px;
  height: 350px;
  padding: 45px;
  border-radius: 8px;
  overflow: hidden;
`;

const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;

const rulesData = {
  name: ["name"],
  price: ["price"],
  count: ["count"],
  topping: [
    "topping",
    (list) => list.filter((obj) => obj.checked).map((obj) => obj.name),
    (arr) => (arr.length ? arr : "no toppings"),
  ],
  choice: ["choice", (item) => (item ? item : "no choices")],
};

//const fetcher = (url) => fetch(url).then((res) => res.json())

const sendOrder = ({ orders, authentication }) => {
  const newOrder = orders.map(projection(rulesData));

  const orderPackage = {
    nameClient: authentication.displayName,
    email: authentication.email,
    order: newOrder,
  };

  const sd = fetch(`/api/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderPackage),
  }).then((res) => res.json());
};

export const OrderConfirm = () => {
  const {
    auth: { authentication },
    orders: { orders, setOrders },
    orderConfirm: { setOpenOrderConfirm },
  } = useContext(Context);

  const total = orders.reduce((result, order) => result + totalPriceItems(order), 0);

  const closeConfirm = (e) => {
    if (e.target.id === "overlay") {
      setOpenOrderConfirm(false);
    }
  };

  return (
    <Overlay id="overlay" onClick={closeConfirm}>
      <Modal>
        <OrderTitle>{authentication.displayName}</OrderTitle>
        <Text>Подтвердите заказ</Text>
        <Total>
          <span>Итого</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <ButtonPrimary
          onClick={() => {
            sendOrder({ orders, authentication });
            setOrders([]);
            setOpenOrderConfirm(false);
          }}
        >
          Подтвердить
        </ButtonPrimary>
      </Modal>
    </Overlay>
  );
};
