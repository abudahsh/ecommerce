import { combineReducers } from "redux";

initialState = {
  user: {
    email: "example@yahoo.com",
    firstName: "Mohammed",
    surName: "Salah",
    phone: "0102023231"
  },
  products: [],
  categories: [],
  vendors: [],
  client: {
    isLoading: false,
    isAuthenticated: false,
    gotStarted: true,
    message: "zZZZZ"
  }
};
const clientReducer = (state = initialState.client, action) => {
  switch (action.type) {
    case "GOT_STARTED":
      return { ...state, gotStarted: action.payload.gotStarted };

    case "LOG_IN_SUCCESS":
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        isLoading: false
      };
    case "REGISTER_SUCCESS":
      return { ...state, isAuthenticated: action.payload.isAuthenticated };

    case "LOGIN_SENT":
    case "FETCHING_PROS_STARTED":
    case "FETCHING_CATS_STARTED":
    case "FETCHING_VENDORS_STARTED":
      return { ...state, isLoading: true };

    case "FETCHING_PROS_SUCCESS":
    case "FETCHING_CATS_SUCCESS":
    case "FETCHING_VENDORS_SUCCESS":
      return { ...state, isLoading: false };
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
    case "REGISTER_SUCCESS":
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
    case "FETCHING_PROS_SUCCESS":
      return action.payload.products;
  }
  return state;
};

const categoriesReducer = (state = initialState.categories, action) => {
  switch (action.type) {
    case "FETCHING_CATS_SUCCESS":
      return action.payload.categories;
  }
  return state;
};
const vendorsReducer = (state = initialState.vendors, action) => {
  switch (action.type) {
    case "FETCHING_VENDORS_SUCCESS":
      return action.payload.vendors;
  }
  return state;
};
const reducer = combineReducers({
  client: clientReducer,
  user: userReducer,
  products: productReducer,
  categories: categoriesReducer,
  vendors: vendorsReducer
});

export default reducer;
