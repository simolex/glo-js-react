import React from "react";
import styled from "styled-components";
//import dbMenu from "../DBMenu";
import { ListItem } from "./ListItem";

import { Banner } from "./Banner";

//import { useFetch } from "../Hooks/useFetch";

const MenuStyled = styled.main`
  width: 100%;
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

export const Menu = ({ setOpenItem, dbMenu }) => {
  // const { response, error } = useFetch();
  // const dbMenu = response;

  return (
    <MenuStyled>
      <Banner />
      {dbMenu ? (
        <>
          <SectionMenu>
            <SectionTitle>Бургеры</SectionTitle>
            <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} idPref="bur-" />
          </SectionMenu>
          <SectionMenu>
            <SectionTitle>Закуски / Напитки</SectionTitle>
            <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} idPref="oth-" />
          </SectionMenu>
        </>
      ) : (
        <div>Зарузка...</div>
      )}
    </MenuStyled>
  );
};
