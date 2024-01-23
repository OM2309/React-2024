import React, { useState, useCallback } from "react";

const App = () => {
  const [length, setLength] = useState();
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";
    if (numberAllowed) {
      return (str = str + "0123456789");
    }
    if (charAllowed) {
      return (str = str + "!@#%$%&'()*+,;");
    }

    for (let i = 0; i < array.length; i++) {
      let char = Math.floor(Math.Random() * str.length + 1);
    }
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <div>
      <h1 className="text-white text-center text-xl font-semibold uppercase my-16">
        Password Genrator
      </h1>
    </div>
  );
};

export default App;
