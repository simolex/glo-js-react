import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../Others/contexts";

const ToppingWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
`;
const ToppingLabel = styled.label`
  cursor: pointer;
  word-break: break-all;
`;
const ToppingCheckbox = styled.input`
  cursor: pointer;
  margin-right: 7px;
`;

export const Toppings = () => {
  const {
    toppings: { toppingsList, checkToppings },
  } = useContext(ModalContext);

  return (
    <>
      <h3>Добавки</h3>
      <ToppingWrap>
        {toppingsList.length > 0 &&
          toppingsList.map((item, i) => (
            <ToppingLabel key={i}>
              <ToppingCheckbox
                type="checkbox"
                checked={item.checked}
                onChange={() => checkToppings(i)}
              />
              {item.name}
            </ToppingLabel>
          ))}
      </ToppingWrap>
    </>
  );
};
