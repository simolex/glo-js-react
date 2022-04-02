import React from "react";
import styled from "styled-components";
import trashImg from "../../image/trash.svg";

import { formatCurrency, totalPriceItems } from "../Others/helperFunctions";

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  flex-wrap: wrap;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemToppingList = styled.div`
  font-size: 12px;
  color: #9a9a9a;
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

export const OrderListItem = ({ order, delOrderItem }) => (
  <OrderItemStyled>
    <ItemName>
      {order.name} ({order.choice})
    </ItemName>
    <ItemCount>{order.count}</ItemCount>
    <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
    <TrashButton onClick={() => delOrderItem(order.orderId)} />
    {order.topping && (
      <ItemToppingList>
        {order.topping
          .filter((item) => item.checked)
          .map((item) => item.name)
          .join(", ")}
      </ItemToppingList>
    )}
  </OrderItemStyled>
);
