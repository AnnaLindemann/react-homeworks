import { configureStore } from "@reduxjs/toolkit"
import quoteReducer from "./slices/quoteSlice.js"

const store = configureStore({
  reducer:{quote: quoteReducer}
})

export default store