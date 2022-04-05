import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext, Context } from "../Others/contexts";

const ChoicesWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
`;
const ChoiceRadio = styled.input`
  cursor: pointer;
  margin-right: 7px;
`;

const ChoiceLabel = styled.label`
  cursor: pointer;
  word-break: break-all;
`;

export const Choices = () => {
  const {
    openItem: { openItem },
  } = useContext(Context);
  const {
    choices: { changeChoices, choice },
  } = useContext(ModalContext);
  return (
    <>
      <h3>Выбирайте:</h3>
      <ChoicesWrap>
        {openItem.choices.length > 0 &&
          openItem.choices.map((item, i) => {
            return (
              <ChoiceLabel key={i}>
                <ChoiceRadio
                  type="radio"
                  name="choices"
                  value={item}
                  checked={choice === item}
                  onChange={changeChoices}
                />
                {item}
              </ChoiceLabel>
            );
          })}
      </ChoicesWrap>
    </>
  );
};
