import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import reducer from "./reducer";
import thunk from "redux-thunk";

export const store = createStore(
    reducer,
    /* preloadedState, */ composeWithDevTools(applyMiddleware(thunk))
  );

