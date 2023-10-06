import React, { useState } from "react";

const Child = (props) => {
  const [name, setName] = useState("");

  const handleChage = (e) => {
    setName(e.target.value);
  };

  const haddleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(name);
  };

  return (
    <div>
      <h1>Child Component</h1>
      <form onSubmit={haddleSubmit}>
        <input type="text" value={name} onChange={handleChage} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Child;
