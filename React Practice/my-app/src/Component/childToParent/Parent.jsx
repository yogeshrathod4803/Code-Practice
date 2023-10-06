import React from "react";
import Child from "./Child";

const Parent = () => {
  const getData = (data) => {
    console.log("I'm commiing from Child:", data);
  };

  return (
    <div>
      <Child onSubmit={getData} />
    </div>
  );
};

export default Parent;
