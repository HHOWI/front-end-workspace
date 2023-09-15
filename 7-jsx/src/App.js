import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const setCount = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <div>
      <h1>Total clicks: {counter}</h1>
      <button onClick={setCount}>Click!</button>
    </div>
  );
};

export default App;
