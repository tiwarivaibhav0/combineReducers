import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake, reset } from "./redux/cakes/cakeActions";
import { initialState } from "./redux/cakes/cakeReducer";

function HooksCakeStore(props) {
  const numCakes = useSelector((state) => state);
  const dispatch = useDispatch();
  const [err, setErr] = useState("");
  const handleclick = () => {
    if (numCakes.numCakes === 0) {
      setErr("Can't buy stock is over");
    } else dispatch(buyCake());
  };
  const handleclick2 = () => { 
    dispatch(reset());
    setErr("");
  };
  return (
    <div>
      {" "}
      <h1>Initial no of Cakes in Store : {initialState.numCakes}</h1>
      <h3>Current no of Cakes in Store : {numCakes.numCakes}</h3>
      <button onClick={handleclick}>Buy Cake</button>
      <br></br>
      {err !== "" && (
        <>
          <h2>{err}</h2>
          <button onClick={handleclick2}>Reset</button>
        </>
      )}
    </div>
  );
}

export default HooksCakeStore;
