import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../Styles/ButtonPrimary";
import { OrderListItem } from "./OrderListItem";
import { formatCurrency, totalPriceItems } from "../Others/helperFunctions";

const OrderStyled = styled.section`
  position: fixed;
  top: 80px;
  left: 0;
  background-color: #fff;

  width: 380px;
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const OrderTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 32px;
  line-height: 174%;
  margin-bottom: 15px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul`
  margin-top: 15px;
`;

const EmptyList = styled.p`
  text-align: center;
`;

const Total = styled.div`
  display: flex;
  margin-bottom: 15px;
  & span:first-child {
    flex-grow: 1;
  }
`;
const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
  margin-right: 35px;
`;

export const Order = ({ orders, setOrders, setOpenItem }) => {
  const total = orders.reduce((result, order) => result + totalPriceItems(order), 0);
  const totalCount = orders.reduce((result, order) => result + order.count, 0);

  const delOrderItem = (orderId) => {
    setOrders(orders.filter((item) => orderId !== item.orderId));
  };

  return (
    <OrderStyled>
      <OrderTitle>Ваш заказ</OrderTitle>
      <OrderContent>
        {orders.length ? (
          <OrderList>
            {orders.map((order) => (
              <OrderListItem key={order.orderId} order={order} delOrderItem={delOrderItem} setOpenItem={setOpenItem} />
            ))}
          </OrderList>
        ) : (
          <EmptyList>Вы ничего не выбрали</EmptyList>
        )}
      </OrderContent>
      <Total>
        <span>Итого:</span>
        <span>{totalCount}</span>
        <TotalPrice>{formatCurrency(total)}</TotalPrice>
      </Total>
      <ButtonPrimary>Оформить</ButtonPrimary>
    </OrderStyled>
  );
};
