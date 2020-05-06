import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import OrderedNumbers from "./components/OrderedNumbers";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [orderedNumbers, setOrderedNumbers] = useState([]);

  const callOrderAPI = () => {
    if (!inputValue) return;

    fetch("http://localhost:6001/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        numbers: inputValue,
      }),
    })
      .then((response) => response.json())
      .then((numbers) => setOrderedNumbers(numbers.ordered))
      .catch(() => console.log("falló"));
  };

  return (
    <>
      <Input getValue={setInputValue}></Input>
      <Button onClick={callOrderAPI}></Button>
      <OrderedNumbers numbers={orderedNumbers}></OrderedNumbers>
    </>
  );
}

export default App;
