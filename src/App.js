import React from "react";
import "./main.scss";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body className="App-body">
        <div className="list-of-items">
          <ItemListContainer />
        </div>
      </body>
    </div>
  );
};
export default App;
