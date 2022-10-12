import logo from "./logo.svg";
import "./App.css";
import CakeStore from "./CakeStore";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeStore from "./HooksCakeStore";
import IceStore from "./iceStore";
import ChocoStore from "./ChocoStore";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeStore /> */}
        <CakeStore />
        <IceStore />
        <ChocoStore />
      </div>
    </Provider>
  );
}

export default App;
