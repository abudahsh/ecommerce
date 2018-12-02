import {
  login,
  register,
  fetchCategories,
  fetchProducts,
  fetchVendors,
  fetchOneVendor,
  fetchCart,
  fetchNews,
  fetchOneProduct
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
export const _fetchOneVendor = id => dispatch => {
  dispatch({
    type: "FETCHING_ONE_VENDOR_STARTED",
    payload: {
      isLoading: true,
      message: "Fetching vendor request is in progress"
    }
  });
  fetchOneVendor(id).then(results => {
    dispatch({
      type: "FETCHING_ONE_VENDOR_SUCCESS",
      payload: {
        isLoading: false,
        vendor: results,
        message: "Fetching news finished successfully"
      }
    });
  });
};

export const _fetchNews = () => dispatch => {
  dispatch({
    type: "FETCHING_NEWS_STARTED",
    payload: {
      isLoading: true,
      message: "Fetching request is in progress"
    }
  });
  fetchNews().then(results => {
    dispatch({
      type: "FETCHING_NEWS_SUCCESS",
      payload: {
        isLoading: false,
        news: results,
        message: "Fetching news finished successfully"
      }
    });
  });
};

export const _fetchOneProduct = id => dispatch => {
  dispatch({
    type: "FETCHING_ONE_PRODUCT_STARTED",
    payload: {
      isLoading: true,
      message: "Fetching product request is in progress"
    }
  });
  fetchOneProduct(id).then(results => {
    dispatch({
      type: "FETCHING_ONE_PRODUCT_SUCCESS",
      payload: {
        isLoading: false,
        product: results,
        message: "Fetching product finished successfully"
      }
    });
  });
};

export const _fetchCart = () => dispatch => {
  dispatch({
    type: "FETCHING_CART_STARTED",
    payload: {
      isLoading: true,
      message: "Fetching request is in progress"
    }
  });
  fetchCart().then(results => {
    dispatch({
      type: "FETCHING_CART_SUCCESS",
      payload: {
        isLoading: false,
        cart: results,
        message: "Fetching Cart finished successfully"
      }
    });
  });
};
