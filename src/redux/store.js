import { createStore } from "redux";
import reducer from "./cakes/cakeReducer";

const store = createStore(reducer);
export default store;
