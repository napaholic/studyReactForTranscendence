import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [state, setState] = useState(0);

  const increaseNumber = () => {
    setState(state + 1);
  };

  return (
    <div className="App">
      <div>값: {state}</div>
      <button onClick={() => increaseNumber()}>증가하기</button>
    </div>
  );
}

export default App;
