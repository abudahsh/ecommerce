import { combineReducers } from "redux";
import { reducer as network } from "react-native-offline";
initialState = {
  user: {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    token: ""
  },
  products: [],
  categories: {
    categoriesList: [],
    subCategoriesList: []
  },
  vendors: [],
  news: [],
  client: {
    isLoading: false,
    isAuthenticated: false,
    gotStarted: false,
    message: ""
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
    case "FETCHING_ONE_PRODUCT_STARTED":
    case "FETCHING_ONE_VENDOR_STARTED":
    case "FETCHING_CART_STARTED":
    case "ADD_TO_CART_STARTED":
    case "FETCHING_SUB_CATS_STARTED":
    case "FETCHING_SUB_CATS_PROS_STARTED":
    case "ADD_TO_CART_STARTED":
    case "FETCHING_PROFILE_STARTED":
    case "UPDATING_PROFILE_STARTED":
    case "CHANGE_PASSWORD_STARTED":
    case "SEND_CONTACT_MESSAGE_STARTED":
    case "FETCHING_NEWS_STARTED":
      return { ...state, isLoading: true };

    case "FETCHING_PROS_SUCCESS":
    case "FETCHING_CATS_SUCCESS":
    case "FETCHING_VENDORS_SUCCESS":
    case "FETCHING_ONE_PRODUCT_SUCCESS":
    case "FETCHING_ONE_VENDOR_SUCCESS":
    case "FETCHING_PROS_FAILED":
    case "FETCHING_CATS_FAILED":
    case "FETCHING_VENDORS_FAILED":
    case "FETCHING_ONE_PRODUCT_FAILED":
    case "FETCHING_ONE_VENDOR_FAILED":
    case "LOGIN_FAILED":
    case "REGISTER_FAILED":
    case "FETCHING_CART_SUCCESS":
    case "ADD_TO_CART_SUCCESS":
    case "FETCHING_CART_FAILED":
    case "ADD_TO_CART_FAILED":
    case "FETCHING_SUB_CATS_SUCCESS":
    case "FETCHING_SUB_CATS_FAILED":
    case "FETCHING_SUB_CATS_PROS_SUCCESS":
    case "FETCHING_SUB_CATS_PROS_FAILED":
    case "ADD_TO_CART_SUCCESS":
    case "ADD_TO_CART_FAILED":
    case "FETCHING_PROFILE_SUCCESS":
    case "FETCHING_PROFILE_FAILED":
    case "UPDATING_PROFILE_SUCCESS":
    case "UPDATING_PROFILE_FAILED":
    case "CHANGE_PASSWORD_SUCCESS":
    case "CHANGE_PASSWORD_FAILED":
    case "SEND_CONTACT_MESSAGE_SUCCESS":
    case "SEND_CONTACT_MESSAGE_FAILED":
    case "FETCHING_NEWS_SUCCESS":
    case "FETCHING_NEWS_FAILED":
      return { ...state, isLoading: false,  message: action.payload.message };
    


    case "CONNECTION_OFFLINE":
      return {...state, message:action.payload.message, isLoading:false}

    
    case "LOGGED_OUT":
      return {...state, isAuthenticated:false}
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
       
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
       
      };
      case "FETCHING_PROFILE_SUCCESS":
      case "UPDATING_PROFILE_SUCCESS":
      return {
        ...state,
        email:action.payload.email,
        username:action.payload.username,
        firstName:action.payload.firstName,
        lastName:action.payload.lastName,
        phone:action.payload.phone,
        address:action.payload.address,

      }
      case "LOGGED_OUT":
      case "CHANGE_PASSWORD_SUCCESS":
      return {...state, token:action.payload.token}

      
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
      return { ...state, categoriesList: action.payload.categories };
    case "FETCHING_SUB_CATS_SUCCESS":
      return { ...state, subCategoriesList: action.payload.subCategories };
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
const cartReducer = (
  state = {
    cart: [
      { title: "section1", data: {} },
      { title: "section2", data: {} },
      { title: "section3", data: {} }
    ]
  },
  action
) => {
  switch (action.type) {
    case "FETCHING_CART_SUCCESS":
      return { ...state, cart: action.payload.cart };
  }
  return state;
};
const newsReducer = (state = initialState.news, action) => {
  switch (action.type) {
    case "FETCHING_NEWS_SUCCESS":
      return action.payload.news;
  }
  return state;
};
const currentProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCHING_ONE_PRODUCT_SUCCESS":
      return action.payload.product;
  }
  return state;
};
const currentVendorReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCHING_ONE_VENDOR_SUCCESS":
      return action.payload.vendor;
  }
  return state;
};
const subCategoryProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCHING_SUB_CATS_PROS_SUCCESS":
      return action.payload.products;
  }
  return state;
};
const reducer = combineReducers({
  client: clientReducer,
  user: userReducer,
  products: productReducer,
  categories: categoriesReducer,
  vendors: vendorsReducer,
  news: newsReducer,
  currentProduct: currentProductReducer,
  currentVendor: currentVendorReducer,
  cart: cartReducer,
  subCategoryProducts: subCategoryProductsReducer,
  network
});

export default reducer;
