import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getUsers = createAsyncThunk('user/getUsers', async () => {
  const response = await axios(`${BASE_URL}/users`)
  return response.data
})
const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getUsers.pending, (state,action) => {
      state.status = "loading"
    })
    .addCase(getUsers.fulfilled, (state,action) => {
      state.status = "succeeded";
      state.users = action.payload
    })
    .addCase(getUsers.rejected, (state,action) => {
      state.status = "failed"
      state.error = action.error.message
    })
  }
})
export default userSlice.reducer