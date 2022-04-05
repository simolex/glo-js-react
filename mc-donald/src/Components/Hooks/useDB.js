import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
export const useDB = (database) => {
  const [db, setDB] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, "goods");
    onValue(dbRef, (snapshot) => {
      setDB(snapshot.val());
    });
  }, [database]);

  return db;
};
