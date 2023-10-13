import React from "react";
import style from "./App.module.scss";
import { Container } from "./modules/Container/Container";


function App() {
  const myTitle: string = 'Hello create React App';
  return (
    <div className={style.app}>
      <Container/>
      {myTitle}
    </div>
  );
}

export default App;
