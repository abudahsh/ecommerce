import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import { createNetworkMiddleware } from "react-native-offline";
import reducer from "./reducer";
import thunk from "redux-thunk";
const networkMiddleware = createNetworkMiddleware();
export default (store = createStore(
  reducer,

  /* preloadedState, */ composeWithDevTools(
    applyMiddleware(networkMiddleware, thunk)
  )
));
