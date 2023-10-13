import React from "react";
import style from "./App.module.scss";


function App() {
  const myTitle: string = 'Hello create React App';
  return (
    <div className={style.app}>
      {myTitle}
    </div>
  );
}

export default App;
