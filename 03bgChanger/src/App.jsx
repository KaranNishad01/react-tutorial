import { useState } from "react";

function App() {
  let [color, setColor] = useState("red");

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className=" flex flex-wrap justify-center bottom-12 inset-x-0 gap-3 bg-white px-3 py-2 rounded-3xl">
        <button
          className="red text-red-500 outline-none px-4 py-1 rounded-full shadow-lg  text-white-400"
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          red
        </button>
        <button
          className="green text-green-500 outline-none px-4 py-1 rounded-full shadow-lg  text-white-400"
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          green
        </button>
        <button
          className="yellow text-yellow-500 outline-none px-4 py-1 rounded-full shadow-lg  text-white-400"
          style={{ backgroundColor: "yellow" }}
          onClick={() => setColor("yellow")}
        >
          yellow
        </button>
        <button
          className="orange text-orange-500 outline-none px-4 py-1 rounded-full shadow-lg  text-white-500"
          style={{ backgroundColor: "orange" }}
          onClick={() => setColor("orange")}
        >
          orange
        </button>
        <button
          className="black text-black-500 outline-none px-4 py-1 rounded-full shadow-lg  text-white-500"
          style={{ backgroundColor: "black" }}
          onClick={() => setColor("black")}
        >
          black
        </button>
      </div>
    </div>
  );
}

export default App;
