import { combineReducers } from "redux";
import { reducer as network } from 'react-native-offline';
initialState = {
  user: {
    email: "example@yahoo.com",
    firstName: "Mohammed",
    lastName: "Salah",
    phone: "0102023231",
    token : ''
  },
  products: [],
  categories: {
    categoriesList:[],
    subCategoriesList:[]
  },
  vendors: [],
  news: [],
  client: {
    isLoading: false,
    isAuthenticated: false,
    gotStarted: false,
    isConnected:false,
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
    case "FETCHING_ONE_PRODUCT_STARTED":
    case "FETCHING_ONE_VENDOR_STARTED":
    case "FETCHING_CART_STARTED":
    case "ADD_TO_CART_STARTED":
    case "FETCHING_SUB_CATS_STARTED":
    case "FETCHING_SUB_CATS_PROS_STARTED":
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
      return { ...state, isLoading: false };
    case "CHANGE_CONNECTION_STATUS":
      return {...state, isConnected:action.payload.isConnected}
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
      return {...state, categoriesList: action.payload.categories}
    case "FETCHING_SUB_CATS_SUCCESS":
      return {...state, subCategoriesList: action.payload.subCategories}
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
const cartReducer = (state = { cart: [
  { title: "section1", data: {} },
  { title: "section2", data: {} },
  { title: "section3", data: {} }
]
}, action) => {
  
  switch (action.type) {
    case "FETCHING_CART_SUCCESS":
      return {...state, cart:action.payload.cart}
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
const subCategoryProductsReducer = (state={}, action) =>{
  switch (action.type){
    case "FETCHING_SUB_CATS_PROS_SUCCESS":
    return action.payload.products
  }
  return state
}
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
  subCategoryProducts:subCategoryProductsReducer,
  network
});

export default reducer;
