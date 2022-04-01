import { useState } from "react";

export function useCount() {
  const [count, setCount] = useState(1);

  const onChange = (e) => {
    console.log(e.target.value);
    setCount(+e.target.value < 1 ? 1 : +e.target.value >= 999 ? 999 : +e.target.value);
  };

  return { count, setCount, onChange };
}
