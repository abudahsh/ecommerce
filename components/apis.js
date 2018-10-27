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
    "http://ecommerce-ricardo.herokuapp.com/public/api/products"
  );
  response = await request.json();
  mo = await response.data.data;
  return mo;
};

export const fetchVendors = async () => {
  request = await fetch(
    "http://ecommerce-ricardo.herokuapp.com/public/api/sellers"
  );
  response = await request.json();
  results = await response.data;
  return results;
};
export const fetchOneVendor = () => {
  results = { otherData: otherData };
  return results;
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
