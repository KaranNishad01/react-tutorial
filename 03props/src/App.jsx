import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-orange-400 text-black-400 rounded-xl mb-8">
        Tailwind test
      </h1>
      <Cards lapname="Macbook" />
      <Cards lapname="Window" />
      <Cards />
    </>
  );
}

export default App;
