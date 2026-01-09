import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count", //name of slice without Slice
  initialState: {
    value: 0,
  }, //state of Slice

  reducers:{                     //we can mutate the object
      increment: (state) => {state.value += 1;},
      decrement: (state) => {state.value -= 1;},                         
  },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;