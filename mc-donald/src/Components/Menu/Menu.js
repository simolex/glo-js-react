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
    #fcf2b0 0%,
    #cbbf52 11%,
    #a98c3d 26%,
    #4a3d18 36%,
    #ffe679 42%,
    #a89739 47%,
    #fbf1cc 66%,
    #ffffff 69%,
    #9c8832 79%
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
