import { configureStore } from "@reduxjs/toolkit"
import categoriesSlice from "./slices/categoriesSlice"

const store = configureStore({
 reducer:{
  categories: categoriesSlice,
 }
})

export default store