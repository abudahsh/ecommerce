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
  fetchProductsBySubCat,
  fetchProfile,
  updateProfile,
  changePassword,
  contactMessage
} from "./../components/apis";
import store from "./store";

export const _getStarted = () => ({
  type: "GOT_STARTED",
  payload: { gotStarted: true }
});

export const _loginUser = (email, password) => dispatch => {
  const isConnected = store.getState().network.isConnected
  dispatch({ type: "LOGIN_SENT", payload: { isLoading: true } });
  if(isConnected){
    login(email, password)
  .then(results => {
    // const { user, token, profile } = results;
    const {
      token,
    } = results;
    dispatch({
      type: "LOG_IN_SUCCESS",
      payload: {
        token,
        isAuthenticated: true,
        isLoading: false,
        message: "Iniciar sesión correctamente"
      }
    });
  })
  .catch(err => {
    dispatch({ type: "LOGIN_FAILED", payload: { message: err.message } });
  });
  }
  else {
    dispatch({type:"CONNECTION_OFFLINE", payload:{message:'Disconnected'}})
  }
};

export const _registerUser = (email, username,first_name,last_name, password) => dispatch => {
  
  dispatch({ type: "REGISTER_SENT", payload: { isLoading: true } });
  const isConnected = store.getState().network.isConnected
  if (isConnected){

  
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
  })
}
else{
  dispatch({type:"CONNECTION_OFFLINE", payload:{message:'Disconnected'}})
}
};

export const _fetchProducts = () => async dispatch => {
  
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
        products: results
      },
    });
  }).catch(err => {
    dispatch({
      type: "FETCHING_PROS_FAILED",
      payload: { message: err.message }
    });
  })
  

};
_fetchProducts.interceptInOffline= true
_fetchProducts.meta={retry:true}
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
        categories: results
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
        subCategories: results
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
        vendors: results
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
        vendor: results
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
        news: results
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
        product: results
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
        cart: results.small_carts
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
        message: "La adición al carrito terminó con éxito"
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
        isLoading: false
      }
    });
  }).catch(err => {
    dispatch({
      type: "FETCHING_SUB_CATS_PROS_FAILED",
      payload: { message: err.message }
    });
  });
};


export const _fetchProfile = () => dispatch => {
  dispatch({
    type: "FETCHING_PROFILE_STARTED",
    payload: {
      isLoading: true,
      message: "Fetching request is in progress"
    }
  });
  fetchProfile().then(results => {
    
    dispatch({
      type: "FETCHING_PROFILE_SUCCESS",
      payload: {
        isLoading: false,
        username:results.user_name,
        email:results.email,
        firstName:results.first_name,
        lastName:results.last_name,
        phone: results.phone_number,
        address:results.address
      }
    });
  }).catch(err => {
    dispatch({
      type: "FETCHING_PROFILE_FAILED",
      payload: { message: err.message }
    });
  });
};

export const _updateProfile = (first_name, last_name, phone_number, address) => dispatch => {
  dispatch({
    type: "UPDATING_PROFILE_STARTED",
    payload: {
      isLoading: true,
      message: "UPDATING request is in progress"
    }
  });
  updateProfile(first_name, last_name, phone_number, address).then(results => {
    
    dispatch({
      type: "UPDATING_PROFILE_SUCCESS",
      payload: {
        isLoading: false,
        username:results.user_name,
        email:results.email,
        firstName:results.first_name,
        lastName:results.last_name,
        phone: results.phone_number,
        address:results.address,
        message: "La actualización del perfil terminó con éxito"
      }
    });
  }).catch(err => {
    dispatch({
      type: "UPDATING_PROFILE_FAILED",
      payload: { message: err.message }
    });
  });
};

export const _logoutUser = ()=>({
  type:"LOGGED_OUT",
  payload:{token:null}
})


export const _changePassword = (old_password, new_password) => dispatch => {
  dispatch({
    type: "CHANGE_PASSWORD_STARTED",
    payload: {
      isLoading: true,
      message: "changing password request is in progress"
    }
  });
  changePassword(old_password, new_password).then(results => {
    
    dispatch({
      type: "CHANGE_PASSWORD_SUCCESS",
      payload: {
        isLoading: false,
        token:results.token,
        message: "Contraseña cambiada con éxito"
      }
    });
  }).catch(err => {
    dispatch({
      type: "CHANGE_PASSWORD_FAILED",
      payload: { message: err.message }
    });
  });
};
export const _contactMessage= (name, phone, email, message) => dispatch => {
  dispatch({
    type: "SEND_CONTACT_MESSAGE_STARTED",
    payload: {
      isLoading: true,
      message: "contact message request is in progress"
    }
  });
  contactMessage(name, phone, email, message).then(results => {
    
    dispatch({
      type: "SEND_CONTACT_MESSAGE_SUCCESS",
      payload: {
        isLoading: false,
        message: "Mensaje enviado con éxito"
      }
    });
  }).catch(err => {
    dispatch({
      type: "SEND_CONTACT_MESSAGE_FAILED",
      payload: { message: err.message }
    });
  });
};