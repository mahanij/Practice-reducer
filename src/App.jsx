import { useReducer, useRef } from "react";
import "./App.css";
import UserContainer from "./components/Button";

function App() {
  function reducer(state, action) {
    if (action.type == "+1") {
      return (state += 1);
    } else if (action.type == "+2") {
      return (state += 2);
    } else if (action.type == "reset") {
      return (state = 0);
    } else if (action.type == "+5") {
      return (state += 5);
    } else if (action.type == "-1") {
      return (state += -1);
    }
    else{
      return (state += -2);
    }
  }
  const [number, dispach] = useReducer(reducer, 0);
  return (
    <>
      <button onClick={() => dispach({ type: "+1" })}> +1 </button>
      <button onClick={() => dispach({ type: "+2" })}> +2 </button>
      <button onClick={() => dispach({ type: "reset" })}> reset </button>
      <button onClick={() => dispach({ type: "+5" })}> +5 </button>
      <button onClick={() => dispach({ type: "-1" })}> -1 </button>
      <button onClick={() => dispach({ type: "-1" })}> -2 </button>
      <div>{number}</div>
    </>
  );
}

export default App;
