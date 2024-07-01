import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}

/* const reacElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click to visit google",
}; */

/* const reactElement = (
  <a href="https://google.com" target="_blank">
    click for google visit
  </a>
); */

// global expression
const var1 = "chai or code";
// creating a react element by Reac.createElement()
/* const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click to visit google ",
  var1
); */

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
