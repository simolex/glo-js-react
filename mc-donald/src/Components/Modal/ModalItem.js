import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../Styles/ButtonPrimary";
import { Toppings } from "./Toppings";
import { CountItem } from "./CountItem";
import { Choices } from "./Choices";
import { useCount } from "../Hooks/useCount";
import { useTopping } from "../Hooks/useTopping";
import { useChoices } from "../Hooks/useChoices";

import { formatCurrency, totalPriceItems } from "../Others/helperFunctions";

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 991;
`;

const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 540px;
  height: 500px;
  z-index: 992;
  border-radius: 8px;
  overflow: hidden;
`;

const Banner = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px 25px;
`;
const ModalListItem = styled.div`
  font-family: "Pacifico", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const counter = useCount(openItem.count);
  const toppings = useTopping(openItem);
  const choices = useChoices(openItem);
  const isEdit = openItem.orderId > -1;

  const closeModal = (e) => {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  };

  const order = {
    orderId: orders.reduce((maxId, item) => (item.orderId > maxId ? item.orderId : maxId), 0) + 1,
    ...openItem,
    count: counter.count,
    topping: toppings.toppingsList,
    choice: choices.choice,
  };

  if (isEdit) {
    order.orderId = openItem.orderId;
  }

  const addToOrder = () => {
    orders.push(order);
    setOrders(orders);
    setOpenItem(null);
  };

  const editToOrder = () => {
    const newOrders = orders.slice();
    setOrders(
      newOrders.map((item) => {
        if (item.orderId === openItem.orderId) {
          return order;
        }
        return item;
      })
    );
    setOpenItem(null);
  };

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <ModalContent>
          <ModalListItem>
            <span>{openItem.name}</span>
            <span>{formatCurrency(openItem.price)}</span>
          </ModalListItem>
          <CountItem {...counter} />
          {openItem.toppings && <Toppings {...toppings} />}
          {openItem.choices && <Choices {...choices} openItem={openItem} />}
          <TotalPriceItem>
            <span>Цена:</span>
            <span>{formatCurrency(totalPriceItems(order))}</span>
          </TotalPriceItem>
          <ButtonPrimary onClick={isEdit ? editToOrder : addToOrder} disabled={order.choices && !order.choice}>
            {isEdit ? "Изменить" : "Добавить"}
          </ButtonPrimary>
        </ModalContent>
      </Modal>
    </Overlay>
  );
};
