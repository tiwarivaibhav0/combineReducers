import { buyCake, reset } from "./redux/cakes/cakeActions";
import { buyChocos } from "./redux/chocos/chocoActions";
import { buyIcecream } from "./redux/iceCreams/iceCreameActions";

export const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    // reset: () => dispatch(reset()),
  };
};
