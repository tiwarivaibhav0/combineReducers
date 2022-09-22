import { BUY_CAKE, RESET } from "./cakeActions";
export const initialState = {
  numCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numCakes: state.numCakes - 1 };
    case RESET:
      return { ...state, numCakes: 10 };
    default:
      return state;
  }
};

export default reducer;
