import {
  login,
  register,
  fetchCategories,
  fetchProducts,
  fetchVendors
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
  dispatch({
    type: "LOG_IN_SUCCESS",
    payload: {
      isLoading: false,
      isAuthenticated: true,
      token: token,
      email: username,
      message: "Loged in successfully"
    }
  });
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
  results = fetchProducts();
  lolo = results.otherData;
  dispatch({
    type: "FETCHING_PROS_SUCCESS",
    payload: {
      isLoading: false,
      products: lolo,
      message: "Fetching products finished successfully"
    }
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
  results = fetchCategories();
  lolo = results.otherData;
  dispatch({
    type: "FETCHING_CATS_SUCCESS",
    payload: {
      isLoading: false,
      categories: lolo,
      message: "Fetching categories finished successfully"
    }
  });
};
