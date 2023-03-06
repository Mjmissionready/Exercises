import InputComponent from "./components/InputComponent";
import ShowInput from "./components/ShowInput";
import { useState } from "react";
import Counter from "./components/Counter";

export default function App() {
  const [val, setVal] = useState("");
  const [count, setCount] = useState(0);

  const updateCount = () => setCount(count + 1);

  function handleChangeFunctionInApp(e) {
    setVal(e.target.value);
  }

  return (
    <div style={{ border: "2px solid black", margin: "5px" }}>
      <InputComponent handleChange={handleChangeFunctionInApp} />
      <ShowInput val={val} />
      <Counter count={count} updateCount={updateCount} />
      <Counter count={count} updateCount={updateCount} />
    </div>
  );
}