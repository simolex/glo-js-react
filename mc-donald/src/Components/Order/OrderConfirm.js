import React from "react";
import styled from "styled-components";

import { projection, formatCurrency, totalPriceItems } from "../Others/helperFunctions";
import { ref, set, push, child } from "firebase/database";

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

const sendOrder = ({ orders, firebaseDatabase, authentication }) => {
  const newOrder = orders.map(projection(rulesData));
  const newOrderKey = push(child(ref(firebaseDatabase), "orders")).key;

  set(ref(firebaseDatabase, "orders/" + newOrderKey), {
    nameClient: authentication.displayName,
    email: authentication.email,
    order: newOrder,
  });
};

export const OrderConfirm = ({
  orders,
  setOrders,
  authentication,
  firebaseDatabase,
  setOpenOrderConfirm,
}) => {
  const total = orders.reduce((result, order) => result + totalPriceItems(order), 0);
  return (
    <Overlay>
      <Modal>
        <OrderTitle>{authentication.displayName}</OrderTitle>
        <Text>Подтвердите заказ</Text>
        <Total>
          <span>Итого</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <ButtonPrimary
          onClick={() => {
            sendOrder({ orders, firebaseDatabase, authentication });
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
