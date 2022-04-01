import React from "react";
import styled from "styled-components";

const CountWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
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

export const CountItem = ({ count, setCount, onChange }) => {
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
