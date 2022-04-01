import React from "react";
import styled from "styled-components";
import trashImg from "../image/trash.svg";

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemCount = styled.span``;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const OrderListItem = () => (
  <OrderItemStyled>
    <ItemName>dssa</ItemName>
    <ItemCount>2</ItemCount>
    <ItemPrice>715</ItemPrice>
    <TrashButton />
  </OrderItemStyled>
);
