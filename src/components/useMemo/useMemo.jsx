import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [CountOne, setCountOne] = useState(0);
  const [CountTwo, setCountTwo] = useState(0);

  const increment = () => {
    setCountOne((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCountTwo((prevCount) => prevCount - 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;

    return CountOne % 2 === 0;
  }, [CountOne]);

  return (
    <>
      <h1>Use Memo</h1>
      <div className="contianer">
        <button onClick={increment}>+{CountOne}</button>
        <h2>{isEven ? "Even" : "Odd"}</h2>
        <button onClick={decrement}>{CountTwo}</button>
      </div>
    </>
  );
};

export default UseMemo;
