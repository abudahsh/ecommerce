import { combineReducers } from "redux";
const userReducer = (state = { gotStarted: false }, action) => {
  switch (action.type) {
    case "GOT_STARTED":
      return { ...state, gotStarted: action.payload.gotStarted };
  }
  return state;
};

const reducer = combineReducers({
  user: userReducer
});

export default reducer;
