import React from "react";
import { useRef } from "react";

const UseRefComponent = (props) => {
  const inputEl = useRef(null);

  const handleInput = () => {
    console.log("hi");
    inputEl.current.value = 1000;
    inputEl.current.focus();
    // inputEl.current.style.display = "none";
  };

  return (
    <div>
      <h1>Example of useRef</h1>
      <input type="text" ref={inputEl} placeholder="Search" />
      <button onClick={handleInput}>handle input</button>
    </div>
  );
};

export default UseRefComponent;

// import React, { useState } from "react";

// const ControlledComponent = () => {
//   const [data, setData] = useState(""); // Initialize with an empty string

//   const handleInput = () => {
//     // Update the data state when the button is clicked
//     setData(Number(data) + 1000);
//   };

//   return (
//     <div>
//       <h1>Example of Controlled Component</h1>
//       <input
//         type="text"
//         placeholder="search"
//         value={data} // Bind the input's value to the data state
//         onChange={(e) => setData(e.target.value)} // Update data when input changes
//       />
//       <button onClick={handleInput}>Handle Input</button>
//     </div>
//   );
// };

// export default ControlledComponent;
