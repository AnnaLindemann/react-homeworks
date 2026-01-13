import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL =  "https://jsonplaceholder.typicode.com";

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
})

dispatchEvent(getUsers("34276574326573"))
const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
  },
  reducers:{
    addTodo(state,action) {}
  },
})

// export default userSlice.reducer

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// const BASE_URL = "https://jsonplaceholder.typicode.com";
// export const getUsers = createAsyncThunk("user/getUsers", async () => {
//   const response = await axios.get(`${BASE_URL}/users`);
//   return response.data;
// });
// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     data: [],
//   },
//   reducers: {
//     addTodo(state, action) {},
//   },
// });
// export default userSlice.reducer;