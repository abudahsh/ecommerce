import { combineReducers } from "redux";

initialState = {
  user: {},
  products: [],
  categories: [],
  client: {
    IsLoading: false,
    isAuthenticated: false,
    gotStarted: false,
    message: "zZZZZ"
  }
};
const clientReducer = (state = initialState.client, action) => {
  switch (action.type) {
    case "GOT_STARTED":
      return { ...state, gotStarted: action.payload.gotStarted };

    case "LOG_IN_SUCCESS":
      return { ...state, isAuthenticated: action.payload.isAuthenticated };
  }
  return state;
};

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
        message: action.payload.message
      };
  }
  return state;
};

const productReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case "FETCHING_SUCCESS":
      return action.payload.products;
  }
  return state;
};

const reducer = combineReducers({
  client: clientReducer,
  user: userReducer,
  products: productReducer
});

export default reducer;
