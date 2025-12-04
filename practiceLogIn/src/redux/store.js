import { createStore } from "redux";
import userLogInReducer from "./reducers";


function loadState(){
 try{
  const returnedState = localStorage.getItem("authState");
  if(returnedState === null) 
    {return undefined}
  return JSON.parse(returnedState)
 } catch(error)
{ console.error("Failed to load authState from localStorage", error);
  return undefined};
   
}

const existedState = loadState();

const store = createStore(userLogInReducer,existedState)

store.subscribe(() => {
  try{
    const state = store.getState();
    const stateToSave = {
      user: state.user,
      isAuthenticated: state.isAuthenticated,
    };
    const returnedState = JSON.stringify(stateToSave);
    localStorage.setItem("authState", returnedState);
    } catch(error){console.error("Failed to load authState from localStorage", error);} } )



export default store