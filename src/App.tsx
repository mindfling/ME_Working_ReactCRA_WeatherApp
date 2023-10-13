import React from "react";
import style from "./App.module.scss";
import { Container } from "./modules/Container/Container";
import { Search } from "./modules/Search/Search";


function App() {
  const myTitle: string = 'Hello create React App';
  return (
    <div className={style.app}>
      <h1>Title html</h1>
      <Container>
        helllla
        <Search />
      </Container>
    </div>
  );
}

export default App;
