import { BUY_ICECREAM, RESET } from "./iceCreameActions";
export const initialState = {
  numIcecream: 200,
};

const ice_reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numIcecream: state.numIcecream - action.payload };
    case RESET:
      return { ...state, numIcecream: 200 };
    default:
      return state;
  }
};

export default ice_reducer;
