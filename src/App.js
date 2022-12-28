import { useReducer, useState } from "react";
import "./App.css";

// The state is the old state, and the action is what is being changed
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { cafe: state.cafe + action.num };
    case "decrement":
      return { cafe: state.cafe - action.num };
    default:
      throw new Error("Unkown action type this is wack");
  }
}

export default function App() {
  // I personally like useState over using useReducer
  // This gives an example on how to use both
  // Wouldn't advise on using both in the same manner as this is an example
  const [coffee, setCoffee] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    cafe: 0,
  });

  return (
    <>
      <Coffee coffee={coffee} setCoffee={setCoffee} />
      <Cafe
        cafe={state.cafe}
        onClick={() => dispatch({
          type: "increment",
          num: 1,
        })}
      />
      {/* Uncomment this below to see the error as we aren't lifting state up at all */}
      {/* <Coffee /> */}
    </>
  );
}

function Coffee({ coffee, setCoffee }) {
  // const [coffee, setCoffee] = useState(0);
  return (
    <>
      <button onClick={() => setCoffee(coffee + 1)}>More Coffee!!!</button>
      <p>Coffee Count: {coffee} </p>
    </>
  );
}

function Cafe({ cafe, onClick }) {
  return (
    <>
      <button onClick={onClick}>Add more cafecito</button>
      <p>Cafecito Count: {cafe}</p>
    </>
  );
}
