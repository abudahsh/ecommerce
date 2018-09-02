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

export const _fetchProducts = token => dispatch => {
  dispatch({
    type: "FETCHING_STARTED",
    payload: {
      isLoading: true,
      message: "Fetching request is in progress"
    }
  });
  results = fetchProducts(token);
  lolo = results.otherData;
  dispatch({
    type: "FETCHING_SUCCESS",
    payload: {
      isLoading: false,
      products: lolo,
      message: "Fetching products finished successfully"
    }
  });
};
