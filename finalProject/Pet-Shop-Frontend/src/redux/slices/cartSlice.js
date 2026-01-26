import { createSlice } from "@reduxjs/toolkit";


export const selectTotalQty = (state) => {
  const ids = state.cart.ids;
  const itemsById = state.cart.itemsById;
  return ids.reduce((sum,id) => sum + itemsById[id].qty,0)
}

export const selectCartList = (state) => {
  const {ids, itemsById} = state.cart;
  return ids.map((id) => itemsById[id])
}

export const selectTotalPrice = (state) => {
 const {ids, itemsById} = state.cart;
 
 return ids.reduce((sum,id) => {
  const item = itemsById[id];
  if(!item) return sum;

  const unitPrice = 
  item.discont_price !== null && Number(item.discont_price) > 0 ? Number(item.discont_price) : Number(item.price)
  return sum + unitPrice * item.qty
 },0)
}

export const selectCartItemById = (state, id) => {
  return state.cart.itemsById[id];
};

export const selectCartQtyById = (state, id) => {
  const item = state.cart.itemsById[id];
  return item ? item.qty : 0;
};

export const selectIsInCartById = (state, id) => {
  return Boolean(state.cart.itemsById[id]);
};

const cartSlice = createSlice({
  name: "cart",
  initialState:{
   itemsById: {},
   ids: [],
  },
  reducers:{
  addToCart: (state,action) => {
    const {id, title, price, discont_price, image} = action.payload;

    const existing = state.itemsById[id];
    if(existing){
      existing.qty++;
      return;
   }
  state.ids.push(id);
  state.itemsById[id] = { id, title, price, discont_price,image, qty:1  }
  },
  removeFromCart: (state,action) =>{
    const id = action.payload;
    if(!state.itemsById[id]) return;
    delete state.itemsById[id];
    state.ids = state.ids.filter((item) => item !== id)
  },
  decreaseQty: (state,action) => {
    const id = action.payload;
    const item = state.itemsById[id];
    if(!item) return;
    if(item.qty > 1){
      item.qty -= 1;
      return;
    }  
        delete state.itemsById[id];
        state.ids = state.ids.filter((item) => item !== id)      
    
  },
  increaseQty: (state,action) => {
    const id = action.payload;
    const item = state.itemsById[id];
    if(!item) return;
    item.qty += 1
  },
   
  }
})

export const {addToCart, removeFromCart, decreaseQty, increaseQty} = cartSlice.actions
export default cartSlice.reducer