import {
  login,
  register,
  fetchCategories,
  fetchProducts,
  fetchVendors,
  fetchOneVendor,
  fetchCart,
  fetchNews,
  fetchOneProduct,
  addToCart,
  fetchSubCategories,
  fetchProductsBySubCat
} from "./../components/apis";

export const _getStarted = () => ({
  type: "GOT_STARTED",
  payload: { gotStarted: true }
});

export const _loginUser = (email, password) => dispatch => {
  dispatch({ type: "LOGIN_SENT", payload: { isLoading: true } });
  login(email, password)
  .then(results => {
    // const { user, token, profile } = results;
    const {
      token,
      email,
    } = results;
    dispatch({
      type: "LOG_IN_SUCCESS",
      payload: {
        token,
        email,
        isAuthenticated: true,
        isLoading: false,
        message: "Iniciar sesión correctamente"
      }
    });
  })
  .catch(err => {
    dispatch({ type: "LOGIN_FAILED", payload: { message: err.message } });
  });
};

export const _registerUser = (email, username,first_name,last_name, password) => dispatch => {
  dispatch({ type: "REGISTER_SENT", payload: { isLoading: true } });
  register(email, username, first_name, last_name, password)
  .then(results => {
    // const { user, token, profile } = results;
    const {
      token,
      email,
    } = results;
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: {
        token,
        email,
        isAuthenticated: true,
        isLoading: false,
        message: "Te registras exitosamente"
      }
    });
  })
  .catch(err => {
    dispatch({ type: "REGISTER_FAILED", payload: { message: err.message } });
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
  }).catch(err => {
    dispatch({
      type: "FETCHING_PROS_FAILED",
      payload: { message: err.message }
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
  }).catch(err => {
    dispatch({
      type: "FETCHING_CATS_FAILED",
      payload: { message: err.message }
    });
  });
};

export const _fetchSubCategories = (id) => dispatch => {
  dispatch({
    type: "FETCHING_SUB_CATS_STARTED",
    payload: {
      isLoading: true,
      message: "Fetching request is in progress"
    }
  });
  fetchSubCategories(id).then(results => {
    dispatch({
      type: "FETCHING_SUB_CATS_SUCCESS",
      payload: {
        isLoading: false,
        subCategories: results,
        message: "Fetching categories finished successfully"
      }
    });
  }).catch(err => {
    dispatch({
      type: "FETCHING_SUB_CATS_FAILED",
      payload: { message: err.message }
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
  }).catch(err => {
    dispatch({
      type: "FETCHING_VENDORS_FAILED",
      payload: { message: err.message }
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
  }).catch(err => {
    dispatch({
      type: "FETCHING_ONE_VENDOR_FAILED",
      payload: { message: err.message }
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
  }).catch(err => {
    dispatch({
      type: "FETCHING_NEWS_FAILED",
      payload: { message: err.message }
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
  }).catch(err => {
    dispatch({
      type: "FETCHING_ONE_PRODUCT_FAILED",
      payload: { message: err.message }
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
        cart: results.small_carts,
        message: "Fetching Cart finished successfully"
      }
    });
  }).catch(err => {
    dispatch({
      type: "FETCHING_CART_FAILED",
      payload: { message: err.message }
    });
  });
};


export const _addToCart = (id, quantity) => dispatch => {
  dispatch({
    type: "ADD_TO_CART_STARTED",
    payload: {
      isLoading: true,
      message: "adding to cart request is in progress"
    }
  });
  addToCart(id, quantity).then(results => {
    dispatch({
      type: "ADD_TO_CART_SUCCESS",
      payload: {
        isLoading: false,
        message: "Adding to Cart finished successfully"
      }
    });
  }).catch(err => {
    dispatch({
      type: "ADD_TO_CART_FAILED",
      payload: { message: err.message }
    });
  });
};


export const _fetchProductsBySubCat = (id) => dispatch => {
  dispatch({
    type: "FETCHING_SUB_CATS_PROS_STARTED",
    payload: {
      isLoading: true,
      message: "fetching products request is in progress"
    }
  });
  fetchProductsBySubCat(id).then(results => {
    dispatch({
      type: "FETCHING_SUB_CATS_PROS_SUCCESS",
      payload: {
        products:results,
        isLoading: false,
        message: "Fetching products by sub category finished successfully"
      }
    });
  }).catch(err => {
    dispatch({
      type: "FETCHING_SUB_CATS_PROS_FAILED",
      payload: { message: err.message }
    });
  });
};
export const connectionState = ({ status }) => {
  return { type: 'CHANGE_CONNECTION_STATUS', isConnected: status };
};