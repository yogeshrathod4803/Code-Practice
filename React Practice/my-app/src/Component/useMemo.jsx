import React, { useMemo, useState } from "react";

const UseMemoComponent = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const increment = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTWo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    console.log("....");
    let i = 0;
    while (i < 200000000) i++;

    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <h2>Use Memo Component</h2>
      <button onClick={increment}>counterOne - {counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={incrementTWo}>counterTwo - {counterTwo}</button>
    </div>
  );
};

export default UseMemoComponent;
