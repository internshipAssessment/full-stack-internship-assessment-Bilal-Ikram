import { useState } from "react";

export default function Counter({ initial = 0 }) {
  // TODO: implement
  const [count, setCount]=useState(0);

  //Increment function
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

        return (
        <div className="counter-container">
          <span > Counter: {count}</span>
          <div>
            <button onClick={handleIncrement} > + </button>
            <button onClick={handleDecrement} disabled={count === 0}> - </button> 
          </div>
        </div>
      );
}
