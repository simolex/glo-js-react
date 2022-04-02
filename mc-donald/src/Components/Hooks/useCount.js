import { useState } from "react";

export function useCount(initCount) {
  const [count, setCount] = useState(initCount ?? 1);
  const onChange = (e) => {
    setCount(+e.target.value < 1 ? 1 : +e.target.value >= 999 ? 999 : +e.target.value);
  };

  return { count, setCount, onChange };
}
