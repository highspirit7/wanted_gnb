import logo from "./logo.svg";
import "./App.css";

import Gnb from "components/Gnb";
import Logo from "components/Logo";
import NavItems from "components/NavItems";
import AsideItems from "components/AsideItems";

function App() {
  return (
    <div className="App">
      <Gnb>
        <Logo />
        <NavItems />
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
