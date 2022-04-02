import React from "react";
import styled from "styled-components";
import { formatCurrency } from "../Others/helperFunctions";

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: -30px;
`;

const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  font-size: 24px;
  margin: 30px;
  padding: 15px;
  color: white;
  border-radius: 8px;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    border-radius: 8px;
    opacity: 15%;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 30px rgba(0, 0, 0, 0.7);
    &:after {
      opacity: 0;
    }
  }
`;

export const ListItem = ({ itemList, setOpenItem, idPref }) => {
  return (
    <List>
      {itemList.map((item) => {
        item.keyId = idPref + item.id;
        return (
          <Item key={item.id} img={item.img} onClick={() => setOpenItem(item)}>
            <p>{item.name}</p>
            <p>{formatCurrency(item.price)}</p>
          </Item>
        );
      })}
    </List>
  );
};
