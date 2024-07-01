import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(5);

  function Addvalue() {
    const neg = document.getElementById("neg");
    count++;
    setCount(count);
    console.log(count);
    neg.innerHTML = "";
  }

  function Minusvalue() {
    const neg = document.getElementById("neg");
    neg.innerHTML = "";
    if (count > 0) {
      count--;
      setCount(count);
      console.log(count);
    } else {
      neg.innerHTML = "count is less than zero";
    }
  }

  return (
    <>
      <h1>this is our count : {count}</h1>

      <p>this is count : {count}</p>

      <p id="neg"></p>

      <button onClick={Addvalue}> increase count </button>

      <button onClick={Minusvalue}> decrease count </button>
    </>
  );
}

export default App;
