import React, { useState } from "react";

function Input({ getValue }) {
  const [numbers, setNumbers] = useState("");

  const validateInput = (event) => {
    const value = event.target.value;
    const reg = /^[0-9.,\-]+$/g;

    if (reg.test(value)) {
      setNumbers(value);
      getValue(value);
    }
  };

  return <input type="text" value={numbers} onChange={validateInput} />;
}

export default Input;
