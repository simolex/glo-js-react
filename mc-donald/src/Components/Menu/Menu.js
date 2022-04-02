import React from "react";
import styled from "styled-components";
import dbMenu from "../DBMenu";
import { ListItem } from "./ListItem";

import { Banner } from "./Banner";

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
`;

export const Menu = ({ setOpenItem }) => {
  return (
    <MenuStyled>
      <Banner />
      <SectionMenu>
        <SectionTitle>Бургеры</SectionTitle>
        <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} idPref="bur-" />
      </SectionMenu>
      <SectionMenu>
        <SectionTitle>Закуски / Напитки</SectionTitle>
        <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} idPref="oth-" />
      </SectionMenu>
    </MenuStyled>
  );
};
