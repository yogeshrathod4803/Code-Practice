import React, { useCallback, useState } from "react";
import UseCallbackChild from "./useCallbackChild";

const UseCallbackComponent = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const fun = useCallback(() => {
    console.log("hello");
  }, []);

  return (
    <>
      <UseCallbackChild fun={fun} />
      <button onClick={increment}>count-{counter}</button>
    </>
  );
};

export default UseCallbackComponent;
