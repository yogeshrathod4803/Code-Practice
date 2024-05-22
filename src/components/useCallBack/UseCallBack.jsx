import React, { useCallback, useState } from "react";
import Child from "./Child";

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const someFun = useCallback(() => {
    //something
  }, []);

  // Referential equality in React refers to whether two variables
  // or objects are the same instance in memory. React uses referential
  // equality to determine whether a component should re-render. When you
  // have two references to the same object or variable, React assumes that
  //  nothing has changed, and it doesn't trigger a re-render.

  return (
    <>
      <div className="container">
        <h1>Use Callback</h1>
        <h2>{count}</h2>
        <Child someFun={someFun} />
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            setCountTwo(countTwo + 1);
          }}
        >
          incrementTwo{countTwo}
        </button>
      </div>
    </>
  );
};

export default UseCallBack;
