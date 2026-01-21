import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../api/api";


export const categoriesGet = createAsyncThunk("categories/categoriesGet", async (_, {rejectWithValue}) => {
  try{
    const response = await axios.get(API_URL + "/categories/all")
    return response.data;
  } catch (error) {
  const message = error.message;
  return rejectWithValue({message})
  }
})

const categoriesSlice = createSlice({
  name: "categories",
  initialState:{
    items: [],
    status: "idle",
    error: null
  },
  reducers:{},
  extraReducers:(builder) => {
   builder
   .addCase(categoriesGet.pending, (state) => {
    state.status = "loading";
    state.error = null;
   })
   .addCase(categoriesGet.fulfilled, (state, action) =>{
    state.status = "succeeded";
    state.items = action.payload;
     state.error = null;
   })
   .addCase(categoriesGet.rejected, (state,action) => {
    state.status = "failed"
    state.error = action.payload ?? action.error.message ?? "Unknown error"
   })
  }
})


export default categoriesSlice.reducer