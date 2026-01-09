import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./slices/countSlice"

const store = configureStore({
  reducer: {
    counter: countReducer
  },
 
});

export default store;

//middleware
//devTools
//enchancers
