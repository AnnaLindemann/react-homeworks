import {
  SET_PRODUCTS,
  ADD_TO_CART,

  REMOVE_ONE_FROM_CART,
} from "../actions";

const initialState = {
  products: [],
  cart: [],
};

export default function RootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case ADD_TO_CART: {
      const product = action.payload;
      const existing = state.cart.find((item) => item.id === product.id);

      if (existing) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...product, qty: 1 }],
      };
    }

    case REMOVE_ONE_FROM_CART: {
      const id = action.payload;
      const target = state.cart.find((item) => item.id === id);

      if (!target) return state;

      if (target.qty > 1) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, qty: item.qty - 1 } : item
          ),
        };
      }

      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== id),
      };
    }

      default:
      return state;
  }
}
