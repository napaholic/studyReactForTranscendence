import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [state, setState] = useState(10);

  const increaseNumber = () => {
    setState(state + 1);
  };

  return (
    <div className="App">
      <div>값: {state}</div>
      <button onClick={() => increaseNumber()}>증가</button>
    </div>
  );
}

export default App;
