import { BUY_CAKE, RESET } from "./cakeActions";
export const initialState = {
  numCakes: 10,
};

const cake_reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numCakes: state.numCakes - action.payload };
    case RESET:
      return { ...state, numCakes: 10 };
    default:
      return state;
  }
};

export default cake_reducer;
