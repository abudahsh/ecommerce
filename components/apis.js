otherData = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {}
];
export const login = (username, password) => {
  token = "kjlerweryhierywerywriuyrwuyrwrrw776r7wr7w";
  results = { token: token, username: username };
  return results;
};

export const register = (username, password) => {
  token = "kjlerweryhierywerywriuyrwuyrwrrw776r7wr7w";
  return username, token;
};

export const fetchProducts = async () => {
  request = await fetch(
    "http://ricardoooo123123123.pythonanywhere.com/products/api/productlist/"
  );
  response = await request.json();

  return response;
};

export const fetchVendors = async () => {
  request = await fetch(
    "http://ecommerce-ricardo.herokuapp.com/public/api/sellers"
  );
  response = await request.json();
  results = await response.data;
  return results;
};
export const fetchOneVendor = async id => {
  request = await fetch(
    `http://ricardoooo123123123.pythonanywhere.com/userprofile/api/seller/${id}/`
  );
  response = await request.json();
  return response;
};
export const fetchCart = () => {
  results = { otherData: otherData };
  return results;
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
  request = await fetch(
    "http://ricardoooo123123123.pythonanywhere.com/news/api/postlist/"
  );
  response = await request.json();

  return response;
};

export const fetchOneProduct = async id => {
  request = await fetch(
    `http://ricardoooo123123123.pythonanywhere.com/products/api/product/${id}/`
  );
  response = await request.json();
  console.log("results", response);
  return response;
};
