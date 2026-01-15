import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const BASE_URL = "https://quoteslate.vercel.app/api/quotes"

export const getQuote = createAsyncThunk("quote/getQuote", async () => {
  const response = await axios(`${BASE_URL}/random`)
   return {
    q: response.data.quote,
    a: response.data.author,
  };
})

const quoteSlice = createSlice({
  name: "quote",
  initialState:{
    quote: null,
    status: "idle",
    error: null,
  },
  reducers:{},
  extraReducers: (builder) => {
    builder
    .addCase(getQuote.pending, (state,action) => {
      state.status = "loading";
       state.error = null;
    })
    .addCase(getQuote.fulfilled, (state,action) => {
     state.status = "succeeded";
     state.quote = action.payload;
    })
    .addCase(getQuote.rejected, (state,action) => {
      state.status = "failed";
      state.error = action.error.message;
    })
  }
})

export default quoteSlice.reducer