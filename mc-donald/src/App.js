import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { GlobalStyle } from "./Components/Styles/GlobalStyle";
import { NavBar } from "./Components/NavBar/NavBar";
import { Main } from "./Components/Styles/Main";
import { Menu } from "./Components/Menu/Menu";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Order/Order";
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";

import { useAuth } from "./Components/Hooks/useAuth";

const firebaseConfig = {
  apiKey: "AIzaSyCsMTErSD-JyRp3zlOjJOnnEjXCGYjFSSE",
  authDomain: "mrdon-4359b.firebaseapp.com",
  projectId: "mrdon-4359b",
  storageBucket: "mrdon-4359b.appspot.com",
  messagingSenderId: "401177503371",
  appId: "1:401177503371:web:09b2d8bbf1c6a13222568e",
};

const appFirebase = initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(getAuth(appFirebase));

  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Main>
        <Order {...orders} {...openItem} {...auth} firebaseDatabase={getDatabase(appFirebase)} />
        <Menu {...openItem} />
      </Main>
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
