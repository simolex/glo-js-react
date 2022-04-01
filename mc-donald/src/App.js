import React from "react";
import { GlobalStyle } from "./Components/GlobalStyle";

import { NavBar } from "./Components/NavBar";
import { Main } from "./Components/Main";
import { Menu } from "./Components/Menu";
import { ModalItem } from "./Components/ModalItem";
import { Order } from "./Components/Order";

function App() {
  const [openItem, setOpenItem] = React.useState(null);
  //console.log("Item: ", openItem);

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Main>
        <Order />
        <Menu setOpenItem={setOpenItem} />
      </Main>
      <ModalItem openItem={openItem} setOpenItem={setOpenItem} />
    </>
  );
}

export default App;
