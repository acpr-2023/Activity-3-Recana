import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1); // Allow count to go below 0
  const handleReset = () => setCount(0);

  return (
    <div className="App">
      <h1 className={count >= 0 ? "positive-value" : "negative-value"}>
        {count}
      </h1>
      <button onClick={handleIncrement} className="btn_increase">
        Increase
      </button>
      <button onClick={handleDecrement} className="btn_decrease">
        Decrease
      </button>
      <button onClick={handleReset} className="btn_reset">
        Reset
      </button>
    </div>
  );
}

export default App;
