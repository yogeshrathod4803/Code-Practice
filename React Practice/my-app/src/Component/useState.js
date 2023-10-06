import React, { useState } from "react";

/* THIS IS functional BASED IMPLEMENTATION OF USEREF */

// export default function UseState(props) {
//   const [Count, setCount] = useState(0);

//   function increment() {
//     setCount(Count + props.diff);
//   }

//   function decrement() {
//     setCount(Count - props.diff);
//   }

//   return (
//     <div>
//       <h2>{Count}</h2>
//       <button onClick={increment}>+ {props.diff}</button>
//       <button onClick={decrement}>-{props.diff}</button>
//     </div>
//   );
// }

/* THIS IS CLASS BASED IMPLEMENTATION OF USEREF */

export default class UseState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState(this.count + this.props.diff);
  }

  decrement() {
    this.setState(this.count - this.props.diff);
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>+{this.props.diff}</button>
        <button onClick={this.decrement}>-{this.props.diff}</button>
      </div>
    );
  }
}
