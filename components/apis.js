import  store  from "../redux/store";

const host = "http://www.artesaniasdeboyaca.com";
export const login = async (email, password) => {
  console.log("fired");

  const response = await fetch(`${host}/userprofile/api/login/`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      username:email,
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
export const register = async (email,username,first_name,last_name, password) => {
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
  request = await fetch(`${host}/products/api/productlist/`)
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
  token = store.getState().user.token;
  const headers = {
    "Content-Type": "application/json"
  };
  if (token) {
    headers.Authorization = `Token ${token}`;
  }
  response = await fetch(`${host}/products/api/cartformobile/`, {headers:headers});
  if (response.ok) {
    const results = await response.json();
    return results;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};
export const fetchCategories = async () => {
  response = await fetch(
     `${host}/products/api/categories/`
  );
  if (response.ok) {
    const results = await response.json();

    
    return results;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};

export const fetchSubCategories = async (id) => {
  response = await fetch(
     `${host}/products/api/subcatincat/${id}/`
  );
  if (response.ok) {
    const results = await response.json();

    
    return results;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};
export const fetchNews = async () => {
  response = await fetch(` ${host}/news/api/postlist/`);
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

export const fetchProductsBySubCat = async (id) => {
  response = await fetch('http://www.artesaniasdeboyaca.com/products/api/subcategoryproducts/'+id+'/');
  if (response.ok) {
    const results = await response.json();

    return results;
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};