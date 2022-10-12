import { combineReducers, createStore } from "redux";
import cake_reducer from "./cakes/cakeReducer";
import choco_reducer from "./chocos/chocoReducer";
import ice_reducer from "./iceCreams/iceCreameReducer";

const root_reducer = combineReducers({
  cake_reducer: cake_reducer,
  ice_reducer: ice_reducer,
  choco: choco_reducer,
});
const store = createStore(root_reducer);
export default store;
