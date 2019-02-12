import { store } from "../redux/store";

const host = "http://www.artesaniasdeboyaca.com";
export const login = async (email, password) => {
  console.log("fired");

  const response = await fetch(`${host}/userprofile/api/login/`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      username: email,
      password
    })
  });
  if (response.ok) {
    const results = await response.json();
    console.log(results);
    return results;
  }
  const errMessage = await response.text();
  console.log("normal error message", errMessage);
  throw new Error(errMessage);
};
export const register = async (
  email,
  username,
  first_name,
  last_name,
  password
) => {
  console.log("fired");

  const response = await fetch(`${host}/userprofile/api/register/`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      email,
      username,
      first_name,
      last_name,
      password
    })
  });
  if (response.ok) {
    const results = await response.json();

    return results;
  }
  const errMessage = await response.text();
  console.log("normal error message", errMessage);
  throw new Error(errMessage);
};

export const fetchProducts = async () => {
  response = await fetch(`${host}/products/api/productlist/`);
  if (response.ok) {
    const results = await response.json();
    return results;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};

export const fetchVendors = async () => {
  response = await fetch(`${host}/userprofile/api/sellers/`);
  if (response.ok) {
    const results = await response.json();
    return results;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};
export const fetchOneVendor = async id => {
  request = await fetch(`${host}/userprofile/api/seller/${id}/`);
  response = await request.json();
  return response;
};
export const fetchCart = async () => {
  token = store.getState().user.token;
  const headers = {
    "Content-Type": "application/json"
  };
  if (token) {
    headers.Authorization = `Token ${token}`;
  }
  response = await fetch(`${host}/products/api/cartformobile/`, {
    headers: headers
  });
  if (response.ok) {
    const results = await response.json();
    return results;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};
export const fetchCategories = async () => {
  response = await fetch(`${host}/products/api/categories/`);
  if (response.ok) {
    const results = await response.json();

    return results;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};

export const fetchSubCategories = async id => {
  response = await fetch(`${host}/products/api/subcatincat/${id}/`);
  if (response.ok) {
    const results = await response.json();

    return results;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};
export const fetchNews = async () => {
  response = await fetch(
    "http://www.artesaniasdeboyaca.com/news/api/postlist/"
  );
  if (response.ok) {
    const results = await response.json();

    return results;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};

export const fetchOneProduct = async id => {
  response = await fetch(`${host}/products/api/product/${id}/`);
  if (response.ok) {
    const results = await response.json();

    return results;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};

export const addToCart = async (product_id, quantity) => {
  token = store.getState().user.token;
  const headers = {
    "Content-Type": "application/json"
  };
  if (token) {
    headers.Authorization = `Token ${token}`;
  }
  response = await fetch(`${host}/products/api/addtocart/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      product_id,
      quantity
    })
  });
  if (response.ok) {
    const results = await response.json();

    return results;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};

export const fetchProductsBySubCat = async id => {
  response = await fetch(
    "http://www.artesaniasdeboyaca.com/products/api/subcategoryproducts/" +
      id +
      "/"
  );
  if (response.ok) {
    const results = await response.json();

    return results;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};

export const fetchProfile = async () => {
  token = store.getState().user.token;
  const headers = {
    "Content-Type": "application/json"
  };
  if (token) {
    headers.Authorization = `Token ${token}`;
  }
  response = await fetch(`${host}/userprofile/api/profile/`, {
    headers: headers
  });
  if (response.ok) {
    const results = await response.json();

    return results;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};

export const updateProfile = async (
  first_name,
  last_name,
  phone_number,
  address
) => {
  token = store.getState().user.token;
  const headers = {
    "Content-Type": "application/json"
  };
  if (token) {
    headers.Authorization = `Token ${token}`;
  }
  response = await fetch(`${host}/userprofile/api/profile/`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify({
      first_name,
      last_name,
      phone_number,
      address
    })
  });
  if (response.ok) {
    const results = await response.json();

    return results;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};

export const changePassword = async (old_password, new_password) => {
  token = store.getState().user.token;
  const headers = {
    "Content-Type": "application/json"
  };
  if (token) {
    headers.Authorization = `Token ${token}`;
  }
  response = await fetch(`${host}/userprofile/api/change_password/`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify({
      old_password,
      new_password
    })
  });
  if (response.ok) {
    const results = await response.json();

    return results;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};

export const contactMessage = async (name, phone, email, message) => {
  const headers = {
    "Content-Type": "application/json"
  };

  response = await fetch(`${host}/userprofile/api/contact/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name,
      phone,
      email,
      message
    })
  });
  if (response.ok) {
    const results = await response.json();

    return results;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};
