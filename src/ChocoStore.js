import React, { useState } from "react";
import { connect } from "react-redux";
import { buyChocos, reset } from "./redux/chocos/chocoActions";
import { initialState } from "./redux/chocos/chocoReducer";
import store from "./redux/store";

function ChocoStore(props) {
  console.log(props);
  const [err, setErr] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleclick = () => {
    if (props.numChocos === 0) {
      setErr("Can't buy stock is over");
    }  else if (props.numChocos >= quantity) props.buyChocos(quantity);
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
      <h3>Current no of Chocolates in Store : {props.numChocos}</h3>
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
          <button onClick={handleclick2}>Reset</button>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numChocos: state.choco.numChocos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyChocos: (qty) => dispatch(buyChocos(qty)),
    reset: () => dispatch(reset()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChocoStore);
