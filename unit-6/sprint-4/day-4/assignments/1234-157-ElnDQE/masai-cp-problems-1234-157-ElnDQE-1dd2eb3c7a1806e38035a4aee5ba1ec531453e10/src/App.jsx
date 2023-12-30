import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return (
    <div>
      <span data-testid="counter">{counter}</span>
      <br />
      <button
        data-testid="plusonebtn"
        onClick={() => setCounter(counter + 1)}
      >
        +1
      </button>
      <button
        data-testid="minusonebtn"
        onClick={() => (counter > 0 ? setCounter(counter - 1) : null)}
        disabled={counter === 0}
      >
        -1
      </button>
      <button data-testid="resetbtn" onClick={() => setCounter(0)}>
        Reset
      </button>
      <br />
      <span data-testid="odd-or-even">{counter % 2 === 0 ? "Even" : "Odd"}</span>
      <br />
      <span data-testid="is-prime">{isPrime(counter) ? "true" : "false"}</span>
    </div>
  );
};

export default App;