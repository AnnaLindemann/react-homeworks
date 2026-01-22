import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {api} from "../../api/api";

export const productsGet = createAsyncThunk("products/productsGet", async (_, {rejectWithValue}) => {
  try{
    const response = await api.get("/products/all")
    return response.data;
  } catch (error) {
  const message = error.message;
  return rejectWithValue({message})
  }
})

const productsSlice = createSlice({
  name: "products",
  initialState:{
    items: [],
    status: "idle",
    error: null
  },
  reducers:{},
  extraReducers:(builder) => {
   builder
   .addCase(productsGet.pending, (state) => {
    state.status = "loading";
    state.error = null;
   })
   .addCase(productsGet.fulfilled, (state, action) =>{
    state.status = "succeeded";
    state.items = action.payload;
     state.error = null;
   })
   .addCase(productsGet.rejected, (state,action) => {
    state.status = "failed"
    state.error = action.payload.message ?? action.error.message ?? "Unknown error"
   })
  }
})


export default productsSlice.reducer