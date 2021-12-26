import { useState } from "react";
import "./App.css";
import "./firebase/firebase";
import WithoutUIsign from "./WithoutUIsign";
import WithUIsign from "./WithUIsign";

function App() {
  const [change, setChange] = useState(false);
  const set = () => {
    setChange(!change);
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={set}>CHANGE LOGIN METHOD</button>
        {change ? <WithoutUIsign /> : <WithUIsign />}
      </header>
    </div>
  );
}

export default App;
