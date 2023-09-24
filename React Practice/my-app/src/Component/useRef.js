import React, { useRef } from "react";

/* THIS IS functional BASED IMPLEMENTATION OF USEREF */

// export default function UseRef(props) {
//   const inputEl = useRef();

//   function focus() {
//     inputEl.current.style.backgroundColor = "red";
//     inputEl.current.focus();
//   }

//   return (
//     <div>
//       hello
//       <input
//         type="text"
//         ref={inputEl}
//         onClick={() => {
//           focus();
//         }}
//       />
//     </div>
//   );
// }

/* THIS IS CLASS BASED IMPLEMENTATION OF USEREF */

export default class UseRef extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputEl: React.createRef() };
  }

  focus() {
    this.state.inputEl.current.style.backgroundColor = "red";
    this.state.inputEl.current.focus();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.state.inputEl}
          onClick={() => {
            this.focus();
          }}
        />
      </div>
    );
  }
}
