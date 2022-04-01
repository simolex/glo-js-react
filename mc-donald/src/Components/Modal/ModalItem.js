import React from "react";
import styled from "styled-components";

import { ButtonPrimary } from "../Styles/ButtonPrimary";
import { CountItem } from "./CountItem";
import { useCount } from "../Hooks/useCount";

import { formatCurrency } from "../Helpers/formatCurrency";

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
  height: 200px;
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
  padding: 20px 30px 35px;
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

export const totalPriceItems = (order) => order.price * order.count;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const closeModal = (e) => {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  };

  const counter = useCount();

  const order = {
    ...openItem,
    count: counter.count,
  };

  const addToOrder = () => {
    orders.push(order);
    setOrders(orders);
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
          <TotalPriceItem>
            <span>Цена:</span>
            <span>{formatCurrency(totalPriceItems(order))}</span>
          </TotalPriceItem>
          <ButtonPrimary onClick={addToOrder}>Добавить</ButtonPrimary>
        </ModalContent>
      </Modal>
    </Overlay>
  );
};
