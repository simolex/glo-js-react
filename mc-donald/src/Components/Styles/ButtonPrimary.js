import styled from "styled-components";

export const ButtonPrimary = styled.button`
  width: 250px;
  min-height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #299b01;
  color: #fff;
  border-radius: 5px;
  font-family: inherit;
  font-size: 21px;
  line-height: 25px;
  border-color: transparent;
  transition-property: background-color, color, border-color;
  transition-duration: 300ms;
  margin: 0 auto;
  &:hover {
    background-color: #fff;
    color: #299b01;
    border-color: #299b01;
  }
  &:disabled {
    background-color: #9a9a9a;
    border-color: #9a9a9a;
    &:hover {
      border-color: #9a9a9a;
      background-color: #9a9a9a;
      color: #fff;
    }
  }
`;
