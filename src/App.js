import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

import Gnb from "components/Gnb";
import Logo from "components/Logo";
import NavItems from "components/NavItems";
import AsideItems from "components/AsideItems";
import WdListMenu from "components/WdListMenu";

function App() {
  const [isShown, setIsShown] = useState(false);

  console.log(`isShown : ${isShown}`);
  // 탐색에 마우스 올려 WdListMenu 띄우고 마우스를 WdListMenu에 보냈다가 Gnb에서 탐색 우측편으로 마우스 얹으면 WdListMenu가 살아있어야 하지만 구현하지 못했습니다. isShown말고 불리언을 하나 더 써서 불리언 두개로 컨트롤 하면 가능하지 않을까 싶습니다.

  return (
    <div className="App">
      <Gnb>
        <Logo />
        <NavItems handleMouseHover={(boolean) => setIsShown(boolean)} />
        <WdListMenu
          handleMouseHover={(boolean) => setIsShown(boolean)}
          isMenuShown={isShown}
        />
        <AsideItems />
      </Gnb>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
