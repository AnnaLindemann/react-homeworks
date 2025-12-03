import { createStore } from "redux";
import userLogInReducer from "./reducers";

const store = createStore(userLogInReducer)
export default store