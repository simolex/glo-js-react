import React from "react";
import styled from "styled-components";
import logoImg from "../image/logo.svg";
import signImg from "../image/sign.svg";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: #299b01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const LoginButton = styled.button`
  border-color: transparent;
  background-color: transparent;
  color: inherit;
  font-size: 16px;
`;

export const NavBar = () => {
  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImg} alt="logo" />
        <H1>MrDonald's</H1>
      </Logo>
      <LoginButton>
        <img src={signImg} alt="войти" />
        <p>войти</p>
      </LoginButton>
    </NavBarStyled>
  );
};
