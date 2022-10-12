import React, { useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./propsConnect";
import { buyIcecream } from "./redux/iceCreams/iceCreameActions";
import { initialState } from "./redux/iceCreams/iceCreameReducer";

function IceStore(props) {
  console.log(props);
  const [err, setErr] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleclick = () => {
    if (quantity === 0 || quantity === "") {
      alert("Please enter a valid quantity");
      return;
    }
    if (props.ice_reducer.numIcecream === 0) {
      setErr("Can't buy stock is over");
    } else if (props.ice_reducer.numIcecream >= quantity)
      props.dispatch(buyIcecream(quantity));
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
      <h1>Initial no of IceCreams in Store : {initialState.numIcecream}</h1>
      <h3>
        Current no of IceCreams in Store : {props.ice_reducer.numIcecream}
      </h3>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button onClick={handleclick}>Buy IceCream</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(IceStore);
