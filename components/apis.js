host = "http://ricardoooo123123123.pythonanywhere.com";
export const login = async (email, password) => {
  console.log("fired");

  const response = await fetch(`${localIp}/userprofile/api/login/`, {
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
export const register = async (email, password) => {
  console.log("fired");

  const response = await fetch(`${localIp}/userprofile/api/login/`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      email,
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

export const register = (username, password) => {
  token = "kjlerweryhierywerywriuyrwuyrwrrw776r7wr7w";
  return username, token;
};

export const fetchProducts = async () => {
  request = await fetch(`${host}/products/api/productlist/`);
  response = await request.json();

  return response;
};

export const fetchVendors = async () => {
  request = await fetch(`${host}/userprofile/api/sellers/`);
  results = await request.json();

  return results;
};
export const fetchOneVendor = async id => {
  request = await fetch(`${host}/userprofile/api/seller/${id}/`);
  response = await request.json();
  return response;
};
export const fetchCart = async () => {
  request = await fetch(`${host}/products/api/cartlist/`);
  response = await request.json();
  return response;
};
export const fetchCategories = async () => {
  request = await fetch(
    "http://ecommerce-ricardo.herokuapp.com/public/api/categories"
  );
  response = await request.json();
  results = await response.data;

  return results;
};

export const fetchNews = async () => {
  request = await fetch(` ${host}/news/api/postlist/`);
  response = await request.json();

  return response;
};

export const fetchOneProduct = async id => {
  request = await fetch(`${host}/products/api/product/${id}/`);
  response = await request.json();
  console.log("results", response);
  return response;
};

export const addToCart = async (product_id, quantity) => {
  token = store.getState().user.token;
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

    console.log(results);
    return results;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};
