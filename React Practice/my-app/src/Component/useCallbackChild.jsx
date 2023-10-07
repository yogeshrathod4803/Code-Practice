import React, { memo } from "react";

const UseCallbackChild = ({ fun }) => {
  console.log("child get called");

  return <h2>childcompoenet</h2>;
};

export default memo(UseCallbackChild);
