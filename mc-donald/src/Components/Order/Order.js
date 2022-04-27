import React, { useContext } from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../Styles/ButtonPrimary";
import { OrderListItem } from "./OrderListItem";
import { formatCurrency, totalPriceItems } from "../Others/helperFunctions";
import { Context } from "../Others/contexts";

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

export const OrderTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;

  font-size: 32px;
  line-height: 174%;
  margin-bottom: 15px;

  background: rgb(252, 242, 177);
  background: linear-gradient(
    178deg,
    rgba(252, 242, 177, 1) 0%,
    rgba(203, 191, 82, 1) 11%,
    rgba(169, 140, 61, 1) 26%,
    rgba(74, 61, 24, 1) 36%,
    rgba(255, 230, 121, 1) 42%,
    rgba(168, 151, 57, 1) 47%,
    rgba(251, 241, 204, 1) 66%,
    rgba(255, 255, 255, 1) 69%,
    rgba(156, 136, 50, 1) 79%
  );

  filter: drop-shadow(2px 3px 3px rgba(74, 61, 24, 0.5));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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

export const Total = styled.div`
  display: flex;
  margin-bottom: 15px;
  & span:first-child {
    flex-grow: 1;
  }
`;
export const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
  margin-right: 35px;
`;

export const Order = () => {
  const {
    auth: { authentication, logIn },
    orders: { orders, setOrders },
    orderConfirm: { setOpenOrderConfirm },
  } = useContext(Context);

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
              <OrderListItem key={order.orderId} order={order} delOrderItem={delOrderItem} />
            ))}
          </OrderList>
        ) : (
          <EmptyList>Хотите что-то выбрать?</EmptyList>
        )}
      </OrderContent>
      {orders.length ? (
        <>
          <Total>
            <span>Итого:</span>
            <span>{totalCount}</span>
            <TotalPrice>{formatCurrency(total)}</TotalPrice>
          </Total>
          <ButtonPrimary
            onClick={() => {
              if (authentication) {
                setOpenOrderConfirm(true);
              } else {
                logIn();
              }
            }}
          >
            Оформить
          </ButtonPrimary>
        </>
      ) : (
        <div></div>
      )}
    </OrderStyled>
  );
};
