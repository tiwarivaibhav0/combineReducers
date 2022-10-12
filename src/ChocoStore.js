import React, { useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./propsConnect";
import { buyChocos } from "./redux/chocos/chocoActions";
import { initialState } from "./redux/chocos/chocoReducer";

function ChocoStore(props) {
  console.log(props);
  const [err, setErr] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleclick = () => {
    if (quantity === 0 || quantity === "") {
      alert("Please enter a valid quantity");
      return;
    }
    if (props.choco_reducer.numChocos === 0) {
      setErr("Can't buy stock is over");
    } else if (props.choco_reducer.numChocos >= quantity)
      props.dispatch(buyChocos(quantity));
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
      <h1>Initial no of Chocolates in Store : {initialState.numChocos}</h1>
      <h3>
        Current no of Chocolates in Store : {props.choco_reducer.numChocos}
      </h3>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button onClick={handleclick}>Buy Chocolate</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChocoStore);
