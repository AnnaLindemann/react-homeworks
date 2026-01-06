export const SET_PRODUCTS = "SET_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART";

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});


export const removeOneFromCart = (id) => ({
  type: REMOVE_ONE_FROM_CART,
  payload: id,
});
