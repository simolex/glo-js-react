import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "./ButtonPrimary";
import { OrderListItem } from "./OrderListItem";

const OrderStyled = styled.section`
  position: fixed;
  top: 80px;
  left: 0;
  background-color: #fff;
  min-width: 380px;
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const OrderTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 39px;
  line-height: 68px;
  margin-bottom: 15px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul`
  margin-top: 15px;
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

export const Order = () => {
  return (
    <OrderStyled>
      <OrderTitle>Ваш заказ</OrderTitle>
      <OrderContent>
        <OrderList>
          <OrderListItem />
          <OrderListItem />
          <OrderListItem />
        </OrderList>
      </OrderContent>
      <Total>
        <span>wrew</span>
        <span>1</span>
        <TotalPrice>780</TotalPrice>
      </Total>
      <ButtonPrimary>Оформить</ButtonPrimary>
    </OrderStyled>
  );
};
