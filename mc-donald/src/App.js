import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { GlobalStyle } from "./Components/Styles/GlobalStyle";
import { NavBar } from "./Components/NavBar/NavBar";
import { Main } from "./Components/Styles/Main";
import { Menu } from "./Components/Menu/Menu";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Order/Order";
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";
import { useAuth } from "./Components/Hooks/useAuth";
import { useTitle } from "./Components/Hooks/useTitle";
import { useOrderConfirm } from "./Components/Hooks/useOrderConfirm";
import { OrderConfirm } from "./Components/Order/OrderConfirm";
import { Context } from "./Components/Others/contexts";

const firebaseConfig = {
  apiKey: "AIzaSyCsMTErSD-JyRp3zlOjJOnnEjXCGYjFSSE",
  authDomain: "mrdon-4359b.firebaseapp.com",
  projectId: "mrdon-4359b",
  storageBucket: "mrdon-4359b.appspot.com",
  messagingSenderId: "401177503371",
  appId: "1:401177503371:web:09b2d8bbf1c6a13222568e",
  databaseURL: "https://mrdon-4359b-default-rtdb.europe-west1.firebasedatabase.app",
};

function App() {
  const appFirebase = initializeApp(firebaseConfig);
  const auth = useAuth(getAuth(appFirebase));
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);

  return (
    <Context.Provider value={{ auth, openItem, orders, orderConfirm }}>
      <GlobalStyle />
      <NavBar />
      <Main>
        <Order />
        <Menu />
      </Main>
      {openItem.openItem && <ModalItem />}
      {orderConfirm.openOrderConfirm && <OrderConfirm />}
    </Context.Provider>
  );
}

export default App;
