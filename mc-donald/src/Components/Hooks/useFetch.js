import { useState, useEffect } from "react";

export const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch("./DB.json");
        const resp = await data.json();
        setResponse(resp);
      } catch (err) {
        setError(err);
      }
    })();
  }, []);
  return { response, error };
};
