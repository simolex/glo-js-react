import React, { useContext } from "react";
import styled from "styled-components";

import { ListItem } from "./ListItem";
import { Banner } from "./Banner";
import { useFetch } from "../Hooks/useFetch";
import { Context } from "../Others/context";

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

export const Menu = () => {
  const {
    openItem: { setOpenItem },
  } = useContext(Context);

  const { response, error } = useFetch();

  return (
    <MenuStyled>
      <Banner />
      {response ? (
        <>
          <SectionMenu>
            <SectionTitle>Бургеры</SectionTitle>
            <ListItem itemList={response.burger} setOpenItem={setOpenItem} idPref="bur-" />
          </SectionMenu>
          <SectionMenu>
            <SectionTitle>Закуски / Напитки</SectionTitle>
            <ListItem itemList={response.other} setOpenItem={setOpenItem} idPref="oth-" />
          </SectionMenu>
        </>
      ) : error ? (
        <div>Ошибка загрузки...</div>
      ) : (
        <div>Зарузка...</div>
      )}
    </MenuStyled>
  );
};
