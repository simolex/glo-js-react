import { useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export const useAuth = (authFirebase) => {
  const [authentication, setAuthentication] = useState(null);

  const auth = authFirebase;
  const provider = new GoogleAuthProvider();

  const logIn = () => signInWithPopup(auth, provider);
  const logOut = () => signOut(auth).catch((err) => console.error(err));

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setAuthentication(user);
      } else {
        setAuthentication(null);
      }
    });
  }, [authentication]);
  return { authentication, logIn, logOut };
};
