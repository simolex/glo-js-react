import { useState } from "react";

export const useChoices = (openItem) => {
  const [choice, setChoice] = useState();

  function changeChoices(e) {
    setChoice(e.target.value);
  }

  return { choice, changeChoices };
};
