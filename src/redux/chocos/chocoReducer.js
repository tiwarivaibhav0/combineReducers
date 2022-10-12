import { BUY_CHOCOS, RESET } from "./chocoActions";
export const initialState = {
  numChocos: 500,
};

const choco_reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CHOCOS:
      return { ...state, numChocos: state.numChocos - action.payload };
    case RESET:
      return { ...state, numChocos: 200 };
    default:
      return state;
  }
};

export default choco_reducer;
