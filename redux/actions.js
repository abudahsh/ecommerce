import {
  login,
  register,
  fetchCategories,
  fetchProducts,
  fetchVendors,
  fetchOneVendor,
  fetchCart
} from "./../components/apis";

export const _getStarted = () => ({
  type: "GOT_STARTED",
  payload: { gotStarted: true }
});

export const _loginUser = (username, password) => dispatch => {
  dispatch({ type: "LOGIN_SENT", payload: { isLoading: true } });
  results = login(username, password);

  const username = results.username;
  const token = results.token;
  setTimeout(
    () =>
      dispatch({
        type: "LOG_IN_SUCCESS",
        payload: {
          isLoading: false,
          isAuthenticated: true,
          token: token,
          email: username,
          message: "Loged in successfully"
        }
      }),
    3000
  );
};

export const _registerUser = (username, password) => dispatch => {
  dispatch({ type: "LOGIN_SENT", payload: { isLoading: true } });
  results = register(username, password);

  const username = results.username;
  const token = results.token;
  dispatch({
    type: "REGISTER_SUCCESS",
    payload: {
      isLoading: false,
      isAuthenticated: true,
      token: token,
      email: username,
      message: "Registered successfully"
    }
  });
};

export const _fetchProducts = () => dispatch => {
  dispatch({
    type: "FETCHING_PROS_STARTED",
    payload: {
      isLoading: true,
      message: "Fetching request is in progress"
    }
  });
  fetchProducts().then(results => {
    dispatch({
      type: "FETCHING_PROS_SUCCESS",
      payload: {
        isLoading: false,
        products: results,
        message: "Fetching products finished successfully"
      }
    });
  });
};

export const _fetchCategories = () => dispatch => {
  dispatch({
    type: "FETCHING_CATS_STARTED",
    payload: {
      isLoading: true,
      message: "Fetching request is in progress"
    }
  });
  fetchCategories().then(results => {
    dispatch({
      type: "FETCHING_CATS_SUCCESS",
      payload: {
        isLoading: false,
        categories: results,
        message: "Fetching categories finished successfully"
      }
    });
  });
};

export const _fetchVendors = () => dispatch => {
  dispatch({
    type: "FETCHING_VENDORS_STARTED",
    payload: {
      isLoading: true,
      message: "Fetching request is in progress"
    }
  });
  fetchVendors().then(results => {
    dispatch({
      type: "FETCHING_VENDORS_SUCCESS",
      payload: {
        isLoading: false,
        vendors: results,
        message: "Fetching Vendors finished successfully"
      }
    });
  });
};
export const _fetchOneVendor = () => dispatch => {
  dispatch({
    type: "FETCHING_CATS_STARTED",
    payload: {
      isLoading: true,
      message: "Fetching vendor request is in progress"
    }
  });
  results = fetchOneVendor();
  lolo = results.otherData;
  dispatch({
    type: "FETCHING_ONE_Vendor_SUCCESS",
    payload: {
      isLoading: false,
      vendor: lolo,
      message: "Fetching vendor finished successfully"
    }
  });
};
