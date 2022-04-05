import React, { useContext } from "react";
import styled from "styled-components";

import { ModalContext } from "../Others/contexts";

const CountWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
  margin: 0 5px;
`;

const CountButton = styled.button`
  background-color: #fff;
  width: 30px;
  border-radius: 5px;
  border-color: #299b01;
  outline: none;
  &:disabled {
    border-color: #ccc;
  }
`;

export const CountItem = () => {
  const {
    counter: { count, setCount, onChange },
  } = useContext(ModalContext);

  return (
    <CountWrapper>
      <span>Количество</span>
      <div>
        <CountButton onClick={() => setCount(+count - 1)} disabled={count <= 1}>
          -
        </CountButton>
        <CountInput type="number" min={1} max={999} value={count} onInput={onChange} />
        <CountButton onClick={() => setCount(+count + 1)} disabled={count >= 999}>
          +
        </CountButton>
      </div>
    </CountWrapper>
  );
};
