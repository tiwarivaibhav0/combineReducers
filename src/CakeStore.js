import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake, reset } from "./redux/cakes/cakeActions";
import { initialState } from "./redux/cakes/cakeReducer";
import store from "./redux/store";

function CakeStore(props) {
  const [err, setErr] = useState("");
  const handleclick = () => {
    if (props.numOfCakes === 0) {
      setErr("Can't buy stock is over");
    } else props.buyCake();
  };
  const handleclick2 = () => {
    props.reset();
    setErr("");
  };
  return (
    <div>
      <h1>Initial no of Cakes in Store : {initialState.numCakes}</h1>
      <h3>Current no of Cakes in Store : {props.numOfCakes}</h3>
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
    numOfCakes: state.numCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    reset: () => dispatch(reset()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeStore);
