import React from "react";
import styled from "styled-components";

import { ListItem } from "./ListItem";
import { Banner } from "./Banner";
import { useFetch } from "../Hooks/useFetch";

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
  background: rgb(252, 242, 177);
  background: linear-gradient(
    175deg,
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

  filter: drop-shadow(1px 2px rgba(74, 61, 24, 0.5));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400px;
  margin-bottom: 20px;
`;

export const Menu = () => {
  const { response, error } = useFetch();

  return (
    <MenuStyled>
      <Banner />
      {response ? (
        <>
          <SectionMenu>
            <SectionTitle>Бургеры</SectionTitle>
            <ListItem itemList={response.burger} idPref="bur-" />
          </SectionMenu>
          <SectionMenu>
            <SectionTitle>Закуски / Напитки</SectionTitle>
            <ListItem itemList={response.other} idPref="oth-" />
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
