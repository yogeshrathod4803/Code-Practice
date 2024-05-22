import React, { memo } from "react";

const Child = ({ someFun }) => {
  console.log("child is rendering");

  return <></>;
};

export default memo(Child);
