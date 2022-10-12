import React, { useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./propsConnect";
import { buyCake } from "./redux/cakes/cakeActions";
import { initialState } from "./redux/cakes/cakeReducer";

function CakeStore(props) {
  console.log(props);
  const [err, setErr] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleclick = () => {
    if (quantity === 0 || quantity === "") {
      alert("Please enter a valid quantity");
      return;
    }

    if (props.cake_reducer.numCakes === 0) {
      setErr("Can't buy stock is over");
    } else if (props.cake_reducer.numCakes >= quantity)
      props.dispatch(buyCake(quantity));
    else {
      alert("Not enough stock!");
    }
  };
  const handleclick2 = () => {
    props.reset();
    setErr("");
  };
  return (
    <div>
      <h1>Initial no of Cakes in Store : {initialState.numCakes}</h1>
      <h3>Current no of Cakes in Store : {props.cake_reducer.numCakes}</h3>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={handleclick}>Buy Cake</button>
      <br></br>
      {err !== "" && (
        <>
          <h2>{err}</h2>
          {/* <button onClick={handleclick2}>Reset</button> */}
        </>
      )}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeStore);
