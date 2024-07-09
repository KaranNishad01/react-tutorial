import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumber] = useState(false);
  const [special, setSpecial] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (special) {
      str += "~`!@#$%^&*()_+{}|<>?/";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, special, setPassword]);

  let passwordRef = useRef(null);

  const copytoClip = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // run

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, special, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md py-4 my-8 rounded-lg text-orange-400 bg-gray-700 ">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          ></input>

          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copytoClip}
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-white">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label className="text-white" htmlFor="numberInput">
              Number
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="specialChar"
              defaultChecked={special}
              onChange={() => {
                setSpecial((prev) => !prev);
              }}
            />
            <label className="text-white" htmlFor="specialChar">
              Special characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
