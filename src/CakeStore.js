import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "./redux/cakes/cakeActions";
import { initialState } from "./redux/cakes/cakeReducer";
import store from "./redux/store";

function CakeStore(props) {
  const [err, setErr] = useState("");
  const handleclick = () => {
    if (props.numOfCakes === 0) {
      setErr("Can't buy stock is over");
    } else props.buyCake();
  };
  return (
    <div>
      <h1>Initial no of Cakes in Store : {initialState.numCakes}</h1>
      <h3>Current no of Cakes in Store : {props.numOfCakes}</h3>
      <button onClick={handleclick}>Buy Cake</button>
      <br></br>
      {err !== "" && <h2>{err}</h2>}
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeStore);
