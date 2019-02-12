import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import { createNetworkMiddleware } from "react-native-offline";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./reducer";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage
};

const networkMiddleware = createNetworkMiddleware();
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(
  persistedReducer,

  /* preloadedState, */ composeWithDevTools(
    applyMiddleware(networkMiddleware, thunk)
  )
);
export const persistor = persistStore(store);
