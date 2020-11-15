import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App(props) {
  let [number, setNumber] = useState(0);
  const inputRef = useRef(null);
  console.log("App -> inputRef", inputRef);

  const getFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <button onClick={getFocus}>获取焦点</button>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
