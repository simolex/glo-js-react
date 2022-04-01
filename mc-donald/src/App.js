import React from "react";
import { GlobalStyle } from "./Components/Styles/GlobalStyle";

import { NavBar } from "./Components/NavBar/NavBar";
import { Main } from "./Components/Styles/Main";
import { Menu } from "./Components/Menu/Menu";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Order/Order";
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";

function App() {
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Main>
        <Order {...orders} />
        <Menu {...openItem} />
      </Main>
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
