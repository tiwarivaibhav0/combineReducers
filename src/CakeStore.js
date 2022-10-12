import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake, reset } from "./redux/cakes/cakeActions";
import { initialState } from "./redux/cakes/cakeReducer";
import store from "./redux/store";

function CakeStore(props) {
  console.log(props);
  const [err, setErr] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleclick = () => {
    if (props.numOfCakes === 0) {
      setErr("Can't buy stock is over");
    } else if (props.numOfCakes >= quantity) props.buyCake(quantity);
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
      <h3>Current no of Cakes in Store : {props.numOfCakes}</h3>
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
          <button onClick={handleclick2}>Reset</button>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake_reducer.numCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (qty) => dispatch(buyCake(qty)),
    reset: () => dispatch(reset()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeStore);
