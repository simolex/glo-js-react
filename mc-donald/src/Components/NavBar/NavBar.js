import React, { useContext } from "react";
import styled from "styled-components";
import logoImg from "../../image/logo.svg";
import signImg from "../../image/sign.svg";
import { Context } from "../Others/contexts";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  height: 80px;
  width: 100%;
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

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
const LogOut = styled.span`
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  margin-left: 20px;
`;

export const NavBar = () => {
  const {
    auth: { authentication, logIn, logOut },
  } = useContext(Context);

  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImg} alt="logo" />
        <H1>MrDonald's</H1>
      </Logo>

      {authentication ? (
        <User>
          <figure>
            <img src={signImg} alt={authentication.displayName} />
            <figcaption>{authentication.displayName}</figcaption>
          </figure>
          <LogOut title="Выйти" onClick={logOut}>
            Х
          </LogOut>
        </User>
      ) : (
        <LoginButton onClick={logIn}>
          <img src={signImg} alt="войти" />
          <p>войти</p>
        </LoginButton>
      )}
    </NavBarStyled>
  );
};
