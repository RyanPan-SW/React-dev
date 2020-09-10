import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(110);

  return (
    <div>
      <div>num: {num}</div>
      <div>num: {num1}</div>
      <button
        onClick={() => {
          setNum(num + 1)
          setNum1(num1 + 1);
        }}
      >
        + 1
      </button>
    </div>
  );
}

export default App;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       divList: [
//         {
//           id: "a1",
//           text: "1",
//         },
//         {
//           id: "a2",
//           text: "2",
//         },
//         {
//           id: "a3",
//           text: "3",
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div id="a1">
//         <button
//           onClick={() => {
//             this.setState({
//               divList: [
//                 { id: "a2", text: "2" },
//                 { id: "a1", text: "1" },
//                 { id: "a3", text: "3" },
//               ],
//             });
//           }}
//         >
//           setState
//         </button>

//         {this.state.divList.map((item, key) => {
//           return (
//             <div>
//               {item.text}: <input type="text" defaultValue={item.id} />
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default App;
