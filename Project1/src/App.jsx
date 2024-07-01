import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar">
        <button className="red" text-red-400>
          red
        </button>
        <button className="green">green</button>
        <button className="yellow">yellow</button>
        <button className="pink">pink</button>
        <button className="orange">orange</button>
      </nav>
    </>
  );
}

export default App;
