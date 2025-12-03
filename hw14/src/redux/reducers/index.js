const initialState = {
  name: "",
  status:"",
}

const userReducer = (state = initialState,action) =>{
  if(action.type === "SET_USER_INFO"){
    return {
     ...state,
   name: action.payload.name,
    status: action.payload.status
    }
  }
  return state
}

export default userReducer